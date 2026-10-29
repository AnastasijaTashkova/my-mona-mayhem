<p align="right">🌐 English | <a href="README.es.md">Español</a> | <a href="README.pt_BR.md">Português (Brasil)</a> | <a href="README.ko.md">한국어</a></p>

<div align="center">

# 🎮 Mona Mayhem

### Turn GitHub contribution graphs into an arcade showdown.

Build a retro-styled arena that compares two GitHub users, one step at a time, with GitHub Copilot. Choose your workflow: work in VS Code or take the challenge to the terminal with Copilot CLI.

<p>
   <a href="workshop/00-overview.md"><strong>Start the workshop →</strong></a>
   &nbsp;·&nbsp;
   <a href="https://copilot-dev-days.github.io/mona-mayhem/">Open the workshop site</a>
</p>

**~60 minutes** &nbsp;·&nbsp; **7 parts** &nbsp;·&nbsp; **Two ways to build**

</div>

<p align="center">
   <img src="https://github.com/user-attachments/assets/5eca79e2-cb9f-4e93-aa0d-23666ebde3b7" alt="Retro arcade-style GitHub contribution battle arena" width="900" />
</p>

<p align="center"><em>The contribution battle arena you'll build during the workshop.</em></p>

## Pick Your Player

Both tracks follow the same project and workshop parts. Pick the environment where you want to work:

| VS Code | Copilot CLI |
|---------|-------------|
| Explore with Chat, plan with Plan Mode, build with Agent Mode, and polish with background agents and editor-native reviews. | Work from the terminal with `copilot`, `@file` context, `/plan`, `/fleet`, `/delegate`, and `/review`. |

## Your Build Run

Start with a plan, then turn the starter into a contribution-graph battle arena. Along the way, practice giving Copilot useful project context, shaping an implementation before coding, iterating on the design, and reviewing the result.

| Part | Mission | What you'll work on |
|------|---------|--------------------|
| [00 · Overview](workshop/00-overview.md) | Choose your track | Learning goals and workshop setup |
| [01 · Setup](workshop/01-setup.md) | Set the context | Instructions, permissions, and environment |
| [02 · Plan & Scaffold](workshop/02-plan-and-scaffold.md) | Map the build | API and page architecture |
| [03 · Build the Game](workshop/03-agent-mode.md) | Make it playable | Agentic implementation and iteration |
| [04 · Design-First Theming](workshop/04-design-vibes.md) | Find the arcade look | Visual planning and implementation |
| [05 · Polish](workshop/05-polish.md) | Refine the experience | Parallel work, reviews, and quality passes |
| [06 · Bonus](workshop/06-bonus.md) | Go beyond the brief | Extra features and Copilot experiments |

## Get Started

1. Create your own repository with **Use this template**, or fork this one.
2. Clone your repository and open it in VS Code, or work from your terminal with Copilot CLI.
3. Follow the [workshop overview](workshop/00-overview.md) and choose your track.

### What You'll Need

- GitHub Copilot (Pro, Business, or Enterprise), Git, and Node.js
- **VS Code track:** VS Code 1.107 or later and the signed-in GitHub Copilot extension
- **CLI track:** GitHub Copilot CLI (`copilot`); Node.js 22+ if installing it with npm, or use Homebrew / WinGet

## Under the Hood

- [Astro](https://astro.build/) 6 with the [Node adapter](https://docs.astro.build/en/guides/integrations-guide/node/)
- GitHub contribution graph data
- Press Start 2P, for the arcade feel

## Deployment Note

The current GitHub Pages workflow publishes the static workshop and documentation in `docs/` and `workshop/`. It does **not** build or deploy the Astro app in `src/`.

To deploy the Astro app on GitHub Pages, switch Astro to static output, remove the Node adapter, and update the workflow to build and publish `dist/`. If you need the API routes in production, deploy to a server platform such as Vercel, Netlify, or a Node host instead.

## License

[MIT](LICENSE)
