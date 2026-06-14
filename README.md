# MODAF

**Build web applications faster with AI agents.**

MODAF is a reusable framework that turns AI coding agents like Claude Code into senior architects. It contains no runtime code — only structured documentation that guides an agent through planning and building a SaaS product phase by phase: discovery interview, project docs, architecture plan, then eleven build phases from database schema to marketing site.

This repository contains two things:

- **The framework pack** — [`docs/framework/`](docs/framework/), the importable documentation system. Start with its [README](docs/framework/README.md) and [CLAUDE.md](docs/framework/CLAUDE.md).
- **The marketing site** — a Next.js app at the repository root, deployed as the MODAF landing page.

## Using MODAF in a new project

From the root of your new project repository:

```bash
# 1. Import the framework pack (copies only docs/framework, no website code)
npx degit mosnin/modaf/docs/framework docs/framework

# 2. Activate it from your project's root CLAUDE.md
echo "@docs/framework/CLAUDE.md" >> CLAUDE.md
```

Then start a Claude Code session and describe your app idea. The framework detects the current phase, interviews you about the product, generates app-specific docs in `docs/project/`, and builds in validated phases. See [`docs/framework/CLAUDE.md`](docs/framework/CLAUDE.md) for the full phase map.

## Developing the marketing site

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm lint
```

The site is a single page built with Next.js 16, React 19, Tailwind CSS 4, and Motion. Page sections live in `src/components/sections/`, shared UI in `src/components/ui/`.
