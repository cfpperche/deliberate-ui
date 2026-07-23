# AGENTS.md — Deliberate UI

Instructions for AI coding agents (Claude Code, OpenAI Codex, Grok Build, Cursor, and others).

## What this project is

**Deliberate UI** is a **simulated UI learning lab** — a multi-page site that looks like instructional material. It is **not** a full course product (no auth, payments, LMS, or video player).

Goals:

1. Teach one UI idea per lesson with theory + live demos.
2. Apply the same design rules to the site chrome (**living design system**).
3. Keep a sober, elegant **light** theme.
4. Use **Simplified Technical English (ASD-STE100)** for technical copy (see `docs/STE100.md`).
5. Keep the codebase **componentized** so each new technique reshapes the product UI.

## Core principle: the site transforms as the lab advances

This is a **dogfooding** product. Techniques taught in a lesson must land as reusable building blocks used by the site itself.

| When the lesson teaches… | Extract / evolve… | Apply to… |
|--------------------------|-------------------|-----------|
| Type hierarchy | `Heading`, `Text`, type tokens | Home, lab chrome, all lessons |
| Type scale | tokens in `globals.css`, Text/Heading sizes | Entire UI |
| Color / contrast | semantic color tokens, Badge tones | Demos + chrome |
| Buttons / actions | `Button`, `LinkButton` variants | CTAs site-wide |
| Grid / spacing | space tokens, layout primitives | Shells and sections |
| Forms | Input, Label, Field | Future interactive demos |
| Gestalt / layout | composition components | Lesson grids and home |

**Rule:** Prefer improving a shared component or token over one-off styles inside a single page.

## What this project is not

- Do **not** copy structure, examples, or wording from paid courses (e.g. Intuitive Pixel or similar).
- Do **not** add dark theme unless the user explicitly requests it.
- Do **not** add auth, billing, or student accounts without an explicit request.
- Do **not** invent new core dependencies when an existing allowed library covers the need.
- Do **not** dump large JSX trees in route files (`page.tsx`). Routes resolve data; **components compose UI**.

## Stack (required)

| Layer | Choice |
|-------|--------|
| Framework | Next.js App Router + TypeScript |
| Styling | Tailwind CSS v4 + CSS variables in `src/app/globals.css` |
| UI primitives | `src/components/ui/*` (shared, living design system) |
| Lab chrome / demos | `src/components/lab/*` |
| Lesson compositions | `src/components/lessons/*` |
| Icons | `lucide-react` |
| Animation | `motion` (`motion/react`) |
| Charts | `recharts` |
| Diagrams | `mermaid` (and `@xyflow/react` when node graphs are needed) |
| Package manager | `pnpm` |

### Allowed libraries (use with restraint)

These tools are **available**, not mandatory on every page:

- `motion` — micro-interactions, enter/exit, before/after demos
- `recharts` — scales, comparisons, quantitative illustrations
- `mermaid` — flowcharts, process / structure diagrams
- `@xyflow/react` — interactive node graphs when the topic needs them
- `lucide-react` — icons only
- SVG / custom illustrations — when a static drawing teaches better than text alone

Add a new dependency only if no allowed library fits, and document it in the PR/commit message.

## Visual media: dose, do not decorate

Charts, SVG, animations, diagrams, and motion are **teaching aids**, not default decoration.

**Principle:** Use a visual only when it clearly helps the learner understand **this lesson’s idea**. If text, a simple Bad/Good UI example, or a short list already explains it, **skip** the extra graphic.

| Use a visual when… | Avoid a visual when… |
|--------------------|----------------------|
| It shows structure, sequence, scale, or contrast that words alone obscure | It only restates what the paragraph already said |
| The topic is inherently spatial or comparative (layout, hierarchy, color ratio) | You would add it “because the stack has Recharts/Mermaid/Motion” |
| One focused figure replaces a long explanation | A second or third figure piles on the same point |
| Interaction changes the insight (e.g. viewport switch on a wireframe) | Animation is cosmetic and does not change understanding |

### Practical limits

- Prefer **one primary demo** per lesson (e.g. wireframe Bad/Good). Add a second visual only if it answers a **different** question.
- Do **not** put chart + diagram + animation on the same screen by default.
- Match the medium to the theme:
  - **Hierarchy / layout** → wireframe or real UI compare (not a random bar chart)
  - **Type scale / size ratios** → scale chart or specimen strip (lesson 1.2 territory)
  - **Process / reading order** → simple diagram only if the flow is the point
  - **Color / contrast** → swatches or side-by-side UI (not motion for its own sake)
- Motion: short, purposeful (state change, enter of compare panels). No looping or ornamental motion.
- If unsure, ship **text + one clear example** first. Add a graphic only when the lesson still feels hard to grasp.

### Anti-patterns

- Filling empty sidebar space with a chart that belongs to another lesson
- Mermaid/flowchart for ideas that are not flows
- Multiple libraries on one page without a comprehension reason
- “Showcase stack” demos that do not teach the current rule

## Component architecture (required)

```
src/components/
  ui/          # Design-system primitives used everywhere
               # Heading, Text, Button, LinkButton, Badge, Card, …
  lab/         # Lab shell + reusable lesson building blocks
               # LessonShell, LessonSection, RulesList, References,
               # AppliedPanel, Sidebar, demos (wireframes, charts, …)
  lessons/     # One composition per ready lesson
               # type-hierarchy-lesson.tsx, …
  i18n/        # Language switcher, document lang
```

### Layer rules

1. **`ui/`** — product design system. No lesson-specific copy. Token-driven. Stable API.
2. **`lab/`** — instructional chrome and demos. Accept copy via props. Reusable across lessons.
3. **`lessons/`** — full lesson layout for one slug. Imports `ui/` + `lab/`. Owns lesson structure.
4. **`app/[locale]/…/page.tsx`** — fetch locale/dict/lesson, pick composition, return it. **Thin routes.**

### Anti-patterns

- Hardcoded hex or random `text-[13px]` when a token/role exists
- Duplicating Bad/Good cards instead of a shared compare/demo component
- Putting wireframes, charts, or theory blocks inline in `page.tsx`
- Creating a new one-off component that should be a `ui/` variant

## Design system

Tokens live in `src/app/globals.css` (`:root`).

- Surfaces: warm paper background, white surface, soft borders
- Accent: deep ink navy (`--accent`)
- Type scale: `--text-xs` … `--text-3xl`
- Spacing: 8pt rhythm (`--space-*`)
- Semantic: `--good` / `--bad` for demo contrast

When a lesson defines a visual rule:

1. Encode it as a **token** and/or **`ui/` primitive** (or extend an existing one).
2. **Migrate** existing screens to use that primitive in the same change when practical.
3. Document the migration in the lesson **AppliedPanel** (`Applied on this site` / `Aplicado neste site`).

## Content rules (STE100)

For rules, checklists, and demo labels:

- Short sentences
- Active voice
- One idea per sentence
- Concrete verbs and token names

Full guide: `docs/STE100.md`.

## Bibliographic references (required)

Every ready lesson page must include **at least 3 bibliographic references** related to the topic.

- Component: `src/components/lab/references.tsx`
- Copy lives in the lesson dictionary block: `referencesTitle` + `references[]`
- Prefer durable sources: books, standards (W3C/WCAG), design-system docs, peer-reviewed or established research orgs (e.g. NN/g)
- Format: Author(s). (Year). *Title*. Source. Optional URL + short note (STE100)
- Notes and titles may be localized; author names and years stay consistent across locales
- Do **not** invent citations; use real, checkable sources

## Internationalization (i18n)

- Locales: `en`, `pt` (default `en`)
- Routes: `/[locale]/...` e.g. `/en/lab/type-hierarchy`, `/pt/lab/type-hierarchy`
- Dictionaries: `src/i18n/dictionaries/{en,pt}.ts`
- Middleware: `src/middleware.ts` redirects `/` → preferred locale
- Structural lesson data (slug, status) in `src/content/lessons.ts`; copy in dictionaries
- When adding UI copy, add keys to **both** `en` and `pt` dictionaries
- Language switcher: `src/components/i18n/language-switcher.tsx`
- STE100 applies to technical rules in **both** languages (short, active, unambiguous)

## Project map

```
src/
  app/[locale]/              # thin localized routes
  middleware.ts
  i18n/                      # config + dictionaries
  components/
    ui/                      # living design system primitives
    lab/                     # lesson chrome + demos
    lessons/                 # per-lesson compositions
    i18n/
  content/lessons.ts         # structural curriculum index
  lib/utils.ts
docs/STE100.md
AGENTS.md
```

## How to add a lesson

1. Add structural entry in `src/content/lessons.ts` (`status: "ready"` when shipping).
2. Add full copy (EN + PT), including `references` (≥ 3) and `applied` notes.
3. Build demos as **`lab/`** components; build page as **`lessons/<slug>-lesson.tsx`**.
4. Register the composition in `src/app/[locale]/lab/[slug]/page.tsx` (`lessonComponents` map).
5. If the lesson introduces a technique, **extract or upgrade a `ui/` primitive/token** and use it on home + lab chrome.
6. Include: theory (STE100), visual demo (wireframe/chart/diagram/compare), AppliedPanel, References.
7. Sidebar stays data-driven from `lessons` — do not hardcode nav items.
8. Run `pnpm lint` and `pnpm build` before finishing.

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
- English for code and file names. UI strings via dictionaries.
- File names: kebab-case. Components: PascalCase exports.

## Git

- Small, focused commits.
- Do not force-push `main` unless the user asks.
- Never commit secrets or `.env*` files.

## Definition of done (for agents)

- [ ] Lesson or feature works in `pnpm dev`
- [ ] `pnpm lint` and `pnpm build` pass
- [ ] UI is componentized (`ui` / `lab` / `lessons`); route files stay thin
- [ ] New technique is reflected in shared tokens or `ui/` primitives when applicable
- [ ] Visuals (chart/diagram/motion/SVG) are justified by comprehension of **this** theme — not stacked by default
- [ ] AppliedPanel lists what the site now uses
- [ ] ≥ 3 real bibliographic references
- [ ] EN + PT dictionary keys updated together
- [ ] Technical copy follows STE100 where applicable
- [ ] No copyrighted course content reproduced
