# CLAUDE.md

This repository uses **Claude Code**. Follow the shared agent instructions in:

**[AGENTS.md](./AGENTS.md)**

Also read:

- [docs/STE100.md](./docs/STE100.md) — writing rules for technical content
- [README.md](./README.md) — human overview

## Claude-specific notes

- Prefer editing existing lesson patterns over inventing new architecture.
- When scaffolding a lesson: theory + STE100 rules + **one primary demo** (only add a second visual if it answers another question) + AppliedPanel + ≥3 references.
- Do **not** stack chart + diagram + animation by default. See `AGENTS.md` → “Visual media: dose, do not decorate”.
- Componentize: `ui/` for product primitives, `lab/` for demos, `lessons/` for page composition; keep routes thin.
- After substantive UI changes, run `pnpm lint` and `pnpm build`.
- Do not introduce a dark mode or redesign tokens without an explicit request.
