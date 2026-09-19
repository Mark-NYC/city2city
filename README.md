# City2City Church

Website for City2City Church — a church of churches: local churches and bands
of practitioners making disciples, leading churches, pursuing multiplication
locally, and collaborating across cities.

Built with [Astro](https://astro.build). Static output — the whole site
prerenders to plain HTML and can be hosted on any static host/CDN.

> **Status:** technical foundation only. The homepage and site pages have not
> been designed or built yet.

## Requirements

- **Node.js** `>=22.12.0` (an `.nvmrc` pins to `22`; run `nvm use`)
- **npm** (ships with Node)

## Local development

```bash
# 1. Install dependencies
npm install

# 2. (optional) create your local env file
cp .env.example .env

# 3. Start the dev server (http://localhost:4321)
npm run dev
```

## Scripts

| Command                | Does                                                  |
| ---------------------- | ----------------------------------------------------- |
| `npm run dev`          | Start the dev server at `http://localhost:4321`       |
| `npm run build`        | Type/diagnostic check, then build the site to `dist/` |
| `npm run preview`      | Serve the built `dist/` locally to preview production |
| `npm run check`        | Run `astro check` (type + template diagnostics)       |
| `npm run lint`         | Run ESLint                                            |
| `npm run format`       | Format all files with Prettier                        |
| `npm run format:check` | Check formatting without writing                      |

## Project structure

```
.
├── astro.config.mjs      # Astro config: site URL, static output, sitemap
├── vercel.json           # Vercel deploy config (framework/build/output)
├── tsconfig.json         # TS strict; "@/*" path alias → src/*
├── eslint.config.mjs     # Flat ESLint config (astro recommended)
├── .prettierrc.mjs       # Prettier + astro plugin
├── .env.example          # Documented, copy to .env (gitignored)
├── .nvmrc                # Node version
├── public/               # Served as-is at the site root
│   ├── favicon.svg       # Placeholder — replace with brand mark
│   └── robots.txt
└── src/
    ├── assets/           # Images processed by Astro's build pipeline
    ├── components/
    │   └── BaseHead.astro    # <head> metadata / SEO / social tags
    ├── layouts/
    │   └── BaseLayout.astro  # Page shell (html/head/body + global CSS)
    ├── pages/            # File-based routing (each .astro = a route)
    │   ├── index.astro       # PLACEHOLDER (not the real homepage)
    │   └── 404.astro
    ├── styles/
    │   └── global.css        # Base styles + design tokens (neutral defaults)
    └── consts.ts             # Shared metadata constants (placeholder copy)
```

### Conventions

- **Routing** is file-based: a file at `src/pages/foo.astro` serves `/foo`.
- **Every page renders inside a layout** (`BaseLayout`) so `<head>` and global
  styles stay in one place.
- **`@/*` imports** resolve to `src/*` (e.g. `import x from '@/consts'`).
- **Design tokens** (fonts, spacing, and eventually colors) live as CSS custom
  properties in `src/styles/global.css`. No brand colors/fonts are set yet —
  defaults are intentionally neutral.

## Environment variables

Copy `.env.example` to `.env` (gitignored). Astro exposes `PUBLIC_`-prefixed
variables to the client; everything else is build/server-time only. See the
[Astro env docs](https://docs.astro.build/en/guides/environment-variables/).
No variables are required today; `SITE_URL` is optional and overrides the
canonical URL in `astro.config.mjs` (useful for preview deploys).

## Deployment

Deployed to **Vercel** as a static site (zero-config — no adapter needed while
`output` is `static`). Config lives in `vercel.json`:

- **Framework preset:** `astro`
- **Build command:** `npm run build` (runs `astro check` then `astro build`)
- **Output directory:** `dist`
- **Node version:** `22` (via `package.json` `engines`; `.nvmrc` for local)

First-time setup: import the repo in the Vercel dashboard (or `vercel` CLI).
Set any environment variables (e.g. `SITE_URL` for preview URLs) in Vercel's
project settings — do not commit `.env`. If we later move to server rendering,
add the `@astrojs/vercel` adapter and switch `output` (see below).

## Deferred decisions

Intentionally not made yet (flag before we build in a direction that assumes
one):

- **Static vs. server rendering.** Currently `output: 'static'` on Vercel with
  no adapter. If we later need forms, auth, or personalization, add the
  `@astrojs/vercel` adapter and switch `output` to `'server'`/hybrid.
- **Branding** — colors, typography/fonts, logo, imagery. Placeholders only.
- **Content / IA** — pages, navigation, and the eventual "Explore an Immersion"
  conversion flow. Nothing assumed from the current live site.
- **CMS / content source.** All content is in-repo for now.
