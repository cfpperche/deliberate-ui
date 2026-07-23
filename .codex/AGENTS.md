# Codex agent instructions

Follow the root **[AGENTS.md](../AGENTS.md)** for all project rules.

Quick context:

- Next.js App Router + TypeScript + Tailwind v4
- Simulated UI learning lab (not a full course product)
- Light elegant theme; living design system in `src/app/globals.css`
- Libraries available (motion, recharts, mermaid, @xyflow/react, lucide-react) — **use only when they aid comprehension of the current theme**, not on every page
- Prefer one primary demo per lesson; see root AGENTS.md “Visual media: dose, do not decorate”
- Componentize: `ui/` / `lab/` / `lessons/`; thin routes
- STE100 for technical copy: `docs/STE100.md`
- Add lessons via `src/content/lessons.ts` + `components/lessons/*`
- Verify with `pnpm lint` and `pnpm build`
