# Deliberate UI

Simulated UI learning lab. Practice intentional interface craft with a **living design system**, an elegant **light** theme, and clear visual demos.

This is **not** a full course product. It is a multi-page site that *simulates* instructional material: theory, rules, and interactive examples side by side.

**Repo:** [github.com/cfpperche/deliberate-ui](https://github.com/cfpperche/deliberate-ui)

## Features

- Curriculum-style index with progressive lessons
- Design tokens applied to the site itself (type scale, color, spacing)
- Demos with **Motion**, **Recharts**, and **Mermaid**
- Technical copy guided by **Simplified Technical English (ASD-STE100)**
- Agent-ready docs for Claude, Codex, and Grok

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- lucide-react, motion, recharts, mermaid, @xyflow/react
- pnpm

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Description |
|---------|-------------|
| `pnpm dev` | Development server |
| `pnpm build` | Production build |
| `pnpm start` | Serve production build |
| `pnpm lint` | ESLint |

## Project structure

```
src/app/                 # Routes (home, /lab/*)
src/components/lab/      # Lesson chrome and demos
src/components/ui/       # Shared UI primitives
src/content/lessons.ts   # Lesson index
src/app/globals.css      # Design tokens
docs/STE100.md           # Writing guide
AGENTS.md                # Rules for all AI agents
```

## For AI agents

Read **[AGENTS.md](./AGENTS.md)** first. Also:

- [CLAUDE.md](./CLAUDE.md) — Claude Code
- [.codex/AGENTS.md](./.codex/AGENTS.md) — OpenAI Codex
- [.grok/AGENTS.md](./.grok/AGENTS.md) — Grok Build

## License

MIT (see [LICENSE](./LICENSE)).

Original instructional demos only. Not affiliated with any paid course brand.
