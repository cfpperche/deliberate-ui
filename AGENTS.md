# AGENTS.md — Deliberate UI

Instructions for AI coding agents (Claude Code, OpenAI Codex, Grok Build, Cursor, and others).

## What this project is

**Deliberate UI** is a **simulated UI learning lab** — a multi-page site that looks like instructional material. It is **not** a full course product (no auth, payments, LMS, or video player).

Goals:

1. Teach one UI idea per lesson with theory + live demos.
2. Apply the same design rules to the site chrome (living design system).
3. Keep a sober, elegant **light** theme.
4. Use **Simplified Technical English (ASD-STE100)** for technical copy (see `docs/STE100.md`).

## What this project is not

- Do **not** copy structure, examples, or wording from paid courses (e.g. Intuitive Pixel or similar).
- Do **not** add dark theme unless the user explicitly requests it.
- Do **not** add auth, billing, or student accounts without an explicit request.
- Do **not** invent new core dependencies when an existing allowed library covers the need.

## Stack (required)

| Layer | Choice |
|-------|--------|
| Framework | Next.js App Router + TypeScript |
| Styling | Tailwind CSS v4 + CSS variables in `src/app/globals.css` |
| UI primitives | Local components in `src/components/ui` (shadcn-style) |
| Icons | `lucide-react` |
| Animation | `motion` (`motion/react`) |
| Charts | `recharts` |
| Diagrams | `mermaid` (and `@xyflow/react` when node graphs are needed) |
| Package manager | `pnpm` |

### Allowed libraries to prefer

- `motion` — micro-interactions, enter/exit, before/after demos
- `recharts` — scales, comparisons, simple analytics illustrations
- `mermaid` — flowcharts, hierarchy, process diagrams
- `@xyflow/react` — interactive node diagrams
- `lucide-react` — icons only

Add a new dependency only if no allowed library fits, and document it in the PR/commit message.

## Design system

Tokens live in `src/app/globals.css` (`:root`).

- Surfaces: warm paper background, white surface, soft borders
- Accent: deep ink navy (`--accent`)
- Type scale: `--text-xs` … `--text-3xl`
- Spacing: 8pt rhythm (`--space-*`)
- Semantic: `--good` / `--bad` for demo contrast

When a lesson defines a visual rule, **apply it to the site** (tokens, layout, or component) in the same change when practical.

## Content rules (STE100)

For rules, checklists, and demo labels:

- Short sentences
- Active voice
- One idea per sentence
- Concrete verbs and token names

Full guide: `docs/STE100.md`.

## Project map

```
src/
  app/                 # routes (home, /lab/[slug])
  components/
    lab/               # lesson chrome + demos
    ui/                # reusable primitives
  content/lessons.ts   # curriculum index
  lib/utils.ts         # cn() helper
docs/STE100.md
AGENTS.md
CLAUDE.md
.codex/AGENTS.md
```

## How to add a lesson

1. Add an entry in `src/content/lessons.ts` with `status: "ready"` when shipping UI.
2. Implement the lesson branch (or dedicated component) under `src/app/lab/[slug]/page.tsx` or `src/components/lab/`.
3. Include: short theory (STE100 rules), at least one visual demo (chart, diagram, or interactive compare), and a note of what the site now applies.
4. Keep the sidebar working via `lessons` data only — do not hardcode nav items.
5. Run `pnpm lint` and `pnpm build` before finishing.

## Commands

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm lint
pnpm build
pnpm start
```

## Code style

- TypeScript strict; avoid `any`.
- Server Components by default; add `"use client"` only for interactivity (charts, motion, mermaid, nav active state).
- Prefer existing tokens and `cn()` over one-off magic values.
- Keep components focused; colocate demo components under `src/components/lab/`.
- English for code, file names, and STE100 lesson rules. UI chrome may stay English unless the user asks for another language.

## Git

- Small, focused commits.
- Do not force-push `main` unless the user asks.
- Never commit secrets or `.env*` files.

## Definition of done (for agents)

- [ ] Lesson or feature works in `pnpm dev`
- [ ] `pnpm lint` and `pnpm build` pass
- [ ] Design tokens used; no random off-system colors/sizes without reason
- [ ] Technical copy follows STE100 where applicable
- [ ] No copyrighted course content reproduced
