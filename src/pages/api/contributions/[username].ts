import type { APIRoute } from 'astro';

export const prerender = false;

const usernamePattern = /^[A-Za-z0-9](?:[A-Za-z0-9]|-(?=[A-Za-z0-9])){0,38}$/;
const successCacheControl = 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400';

function jsonResponse(body: unknown, status: number, cacheControl: string): Response {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': cacheControl,
		},
	});
}

function errorResponse(status: number, code: string, message: string): Response {
	return jsonResponse({ error: { code, message } }, status, 'no-store');
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isContributionPayload(value: unknown): boolean {
	if (!isRecord(value) || value.schema !== 'v2') return false;
	if (
		typeof value.generated_at !== 'string' ||
		typeof value.from !== 'string' ||
		typeof value.to !== 'string' ||
		typeof value.range_days !== 'number' ||
		typeof value.total_contributions !== 'number' ||
		typeof value.private_contributions_included !== 'boolean' ||
		!Array.isArray(value.colors_full) ||
		!value.colors_full.every((color) => typeof color === 'string') ||
		!Array.isArray(value.weeks)
	) {
		return false;
	}

	return value.weeks.every((week) => {
		if (!isRecord(week) || typeof week.index !== 'number' || typeof week.first_day !== 'string') {
			return false;
		}

		return Array.isArray(week.contribution_days) && week.contribution_days.every((day) =>
			isRecord(day) &&
			typeof day.weekday === 'number' &&
			typeof day.count === 'number' &&
			typeof day.level === 'number'
		);
	});
}

export const GET: APIRoute = async ({ params }) => {
	const username = params.username;
	if (!username || !usernamePattern.test(username)) {
		return errorResponse(400, 'INVALID_USERNAME', 'Provide a valid GitHub username.');
	}

	let upstreamResponse: Response;
	const timeoutSignal = AbortSignal.timeout(8000);
	try {
		upstreamResponse = await fetch(`https://github.com/${encodeURIComponent(username)}.contribs`, {
			headers: { Accept: 'application/json' },
			signal: timeoutSignal,
		});
	} catch (error) {
		if (timeoutSignal.aborted || (error instanceof Error && error.name === 'TimeoutError')) {
			return errorResponse(504, 'UPSTREAM_TIMEOUT', 'GitHub contribution data took too long to respond.');
		}

		return errorResponse(502, 'UPSTREAM_UNAVAILABLE', 'GitHub contribution data is currently unavailable.');
	}

	if (upstreamResponse.status === 404) {
		return errorResponse(404, 'USER_NOT_FOUND', 'No contribution data was found for this username.');
	}
	if (!upstreamResponse.ok) {
		return errorResponse(502, 'UPSTREAM_ERROR', 'GitHub could not provide contribution data.');
	}

	let payload: unknown;
	try {
		payload = await upstreamResponse.json();
	} catch (error) {
		if (timeoutSignal.aborted || (error instanceof Error && error.name === 'TimeoutError')) {
			return errorResponse(504, 'UPSTREAM_TIMEOUT', 'GitHub contribution data took too long to respond.');
		}

		return errorResponse(502, 'INVALID_UPSTREAM_JSON', 'GitHub returned an invalid response.');
	}

	if (!isContributionPayload(payload)) {
		return errorResponse(502, 'INVALID_UPSTREAM_PAYLOAD', 'GitHub returned an unsupported contribution data format.');
	}

	return jsonResponse(payload, 200, successCacheControl);
};
