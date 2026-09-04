# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Next.js version

`AGENTS.md` applies: this is Next.js 16.2.6 + React 19.2, which differs from older training data. Read the relevant guide under `node_modules/next/dist/docs/` before writing framework-specific code (routing, `next/image`, fonts, config, caching).

## Commands

```bash
npm run dev        # dev server
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm run lint       # eslint (flat config, eslint-config-next)
npm run format     # prettier --write "**/*.{ts,tsx}"
```

No test framework is configured. `typecheck` + `lint` are the verification gate.

## What this is

A single-page marketing site for CHRYSOLYTE (Kenyan design-and-build studio). One route: [app/page.tsx](app/page.tsx) composes `Navbar` + six section components + `Footer`. Navigation is in-page anchors (`#home`, `#about`, …) matching each `<section id>`; `section[id] { scroll-margin-top: 110px }` in globals.css compensates for the fixed navbar.

Copy and data live as module-level `const` arrays at the top of each section file (`STEPS`, `PROJECTS`, `CAPABILITIES`, …) — that is the intended place to edit content, not a CMS. Cross-section constants (`NAV_LINKS`, `IMAGES`, `BRAND`, `CONTACT`) live in [lib/index.ts](lib/index.ts), imported as `@/lib`; `cn` comes from `@/lib/utils`.

`CONTACT` in [lib/index.ts](lib/index.ts) is placeholder data carried over from the design and is surfaced as such in the Contact section — confirm real details before launch.

Only `navbar`, `reveal`, and `theme-provider` are `"use client"`. Section components are server components; keep them that way.

## Design system ([app/globals.css](app/globals.css))

Tailwind v4, CSS-first config — there is no `tailwind.config`. `:root` holds raw tokens, `@theme inline` maps them into utilities. Things that will surprise you:

- **Custom breakpoints**: `md` is **761px** and `lg` is **1081px** (not Tailwind defaults). `sm`/`xl`/`2xl` are unused.
- **Custom font sizes**: `text-display`, `text-h2`, `text-h2-cta`, `text-lead`, `text-eyebrow` are fluid `clamp()` scales carrying their own line-height and letter-spacing.
- **`site-container`** is an `@utility` (`width: min(100% - 40px, 1280px)`, centered) — every section body uses it.
- **`py-section`** comes from `--spacing-section: 88px`.
- **Shadows** are referenced as `shadow-(--shadow-panel)` / `shadow-(--shadow-topbar)` / `shadow-(--shadow-glow)`.
- Brand accents: `text-gold`, `--gold-glow`, `--line*`, `--glass-*`.

**The palette is dark-only.** `:root` already contains the dark values and there is no `.dark` override block, so `ThemeProvider` (next-themes, plus a `d` keyboard shortcut in [components/theme-provider.tsx](components/theme-provider.tsx)) toggles the class without changing anything visually. Adding a light theme means splitting `:root` into light values plus a `.dark` block — not adding `dark:` variants ad hoc.

Sections also use plenty of literal hex/alpha values (`bg-white/8`, `text-[#d6dee6]`) alongside the tokens; match the surrounding file rather than converting one style to the other mid-file.

## Shared components

- `Reveal` — scroll-in fade/translate via `react-intersection-observer`, `triggerOnce` with `fallbackInView: true` so server-rendered content is never stranded at `opacity: 0`. `delay` prop staggers items in a map.
- `PanelCard` — the recurring translucent panel (gradient, 10% white hairline, 28px radius). Wraps shadcn `Card` and resets its `py`/`gap`; sections apply their own padding via `CardContent`.
- `SectionHeading` — eyebrow + title + optional right-aligned lead, already wrapped in `Reveal`.
- `GalleryStrip` — the two-up image card row shared by Process and Services.

Prefer composing these over restyling `Card` inline.

## shadcn/ui

`components.json`: style `radix-rhea`, `rsc: true`, base color neutral, lucide icons. Add primitives with `npx shadcn@latest add <name>` into [components/ui/](components/ui/). Treat those files as generated: `card.tsx` imports `cn` from the `cn` npm package while the rest of the codebase imports from `@/lib/utils` — that is registry output, not a mistake to fix. Put project styling in wrappers (`PanelCard`) instead of editing `components/ui/`.

## Formatting

Prettier: **no semicolons**, double quotes, 2-space indent, `printWidth` 80, `trailingComma: es5`, with `prettier-plugin-tailwindcss` sorting classes inside `cn()` and `cva()`. Run `npm run format` after edits — some newer files (e.g. `lib/index.ts`) predate it and still carry semicolons and 4-space indent.
