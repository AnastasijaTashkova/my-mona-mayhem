# Agent Instructions

## Project Overview

Mona Mayhem is an Astro 6 app for comparing GitHub contribution graphs. The app uses server-side rendering with the Node standalone adapter. Pages and API routes live under `src/pages/`; URL paths follow the file paths. The home page is a starter, and the contributions endpoint is not implemented yet.

## Commands

- `npm run dev` starts the local development server.
- `npm run build` builds the Astro app.
- `npm run preview` serves the production build locally.
- `npm run astro -- <args>` passes arguments to the Astro CLI.
- There are no test, lint, or type-check scripts in `package.json`; run `npm run build` to validate app changes.

## Astro Practices

- Follow the strict TypeScript configuration in `tsconfig.json`.
- Keep routes in `src/pages/`. Use `.astro` frontmatter for server-side data and keep client-side JavaScript limited to behavior that needs the browser.
- Type API handlers with Astro's `APIRoute`. Return explicit status codes and response content types, and keep server-only routes out of prerendering.
- Preserve the `server` output and Node adapter unless the deployment target is intentionally changing. The current GitHub Pages workflow does not build or deploy the Astro app; static hosting cannot run its server-rendered routes.
- Run `npm run build` after changes to pages, API routes, or Astro configuration.