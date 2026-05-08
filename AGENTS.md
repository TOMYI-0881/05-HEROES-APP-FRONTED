# AGENTS.md

## Stack

- React 19 + TypeScript + Vite 8 (ESM)
- React Router 7 (`createBrowserRouter` in `src/router/app.Router.tsx`)
- TanStack Query + DevTools
- Tailwind CSS 4 (via `@tailwindcss/vite` plugin, no separate tailwind config)
- shadcn/ui components (`src/components/ui/`) + MagicUI registry
- Babel React Compiler enabled (`babel-plugin-react-compiler`)
- `@` alias → `./src` (configured in `vite.config.ts` + `tsconfig.app.json`)

## Commands

```
npm run dev        # Vite dev server with HMR
npm run build      # tsc -b && vite build (typecheck is part of build)
npm run lint       # eslint . (flat config, no type-aware rules yet)
npm run preview    # Preview production build
```

No test framework is configured.

## Architecture

- Entry: `src/main.tsx` → `src/HeroesApp.tsx` (wraps QueryClient + React Context + RouterProvider)
- Routes defined in `src/router/app.Router.tsx`:
  - `/` → `src/heroes/` (public pages: home, hero detail, search)
  - `/admin` → `src/admin/` (admin section)
- `src/heroes/context/FavoriteHeroContext.tsx` — React Context for favoriting heroes
- `src/components/ui/` — shadcn-generated components (do not hand-edit; use `npx shadcn` to add)
- `src/components/custom/` — app-specific wrapper components
- `src/lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)

## Env

- `VITE_API_URL` — backend API base URL (see `.env.template` for shape)
- `.env` is gitignored; create from `.env.template` before running

## Conventions / Gotchas

- `cn()` in `@/lib/utils` is the standard way to merge Tailwind classes
- Dynamic route param uses `idSlug` (not just `id`) — see `heroe/:idSlug` in router
- TypeScript enforces `noUnusedLocals` and `noUnusedParameters` strictly
- Tailwind v4 uses CSS-first config (`src/index.css`), not a `tailwind.config` file
