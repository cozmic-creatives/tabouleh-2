# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Restaurant website for TABOULEH 2, a Syrian restaurant in Gent, Belgium. React SPA with all content in Dutch (nl_BE locale).

## Commands

- `bun install` — Install dependencies
- `bun run dev` — Start dev server on http://localhost:8080
- `bun run build` — Production build to `dist/`
- `bun run lint` — ESLint
- `bun run preview` — Preview production build locally
- `bun run normalize:gerechten` — Normalize `gerechten/` to square JPEGs in `gerechten-web/` (default `MODE=meal`: detect dish via color/edges, center, then scale; `MODE=contain` = full frame letterboxed; tune `SAT_MIN`, `EDGE_MIN`, `INNER_PAD`, `OUTER_PAD`)
- No test framework configured

## Tech Stack

- React 19 + TypeScript (non-strict) with Vite + SWC
- Tailwind CSS 4 with custom color palette (spice, olive, saffron, clay, turquoise, henna) defined in `src/index.css`
- shadcn/ui components (Radix UI based) in `src/components/ui/`
- React Router v7 for routing, TanStack React Query for data fetching
- react-helmet-async for SEO/meta tags
- Path alias: `@/*` maps to `src/*`

## Architecture

**Routing** (`src/App.tsx`): `/` → Index, `/menu` → Menu, `/contact` → Contact, `/*` → NotFound

**Pages** (`src/pages/`): Each page is a full-page component composing smaller components.

**Components**: Feature components in `src/components/`, menu-specific sub-components in `src/components/menu/`, shadcn/ui primitives in `src/components/ui/`.

**Data**: Menu items stored as static JSON in `src/data/menuData2.json` (primary) and `menuData.json`. Categories and ordering options in `src/data/constants.ts` and `src/data/orderingOptions.ts`.

**SEO**: `src/components/SEO.tsx` renders JSON-LD structured data (Restaurant schema) and Open Graph/Twitter meta tags per page.

**Contact form**: Uses FormSubmit.co (no backend). Config in `src/constants/config.ts`.

## Deployment

Multi-stage Dockerfile: builds with Node Alpine, serves with `serve -s` on port 80. Uses `npm install --legacy-peer-deps` for React 19 compatibility (CI/Docker); local development uses Bun.

## Conventions

- Fonts: Inter (sans), Playfair Display (serif), Scheherazade New (Arabic)
- All user-facing text is in Dutch
- shadcn/ui components use CVA (class-variance-authority) for variants
- `cn()` utility from `src/lib/utils.ts` for merging Tailwind classes
