# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Photography portfolio website for Sean Kenneth Doherty (Austin, TX). Built with Next.js 15 App Router, statically exported to HTML/CSS/JS. Hosted on Netlify.

**All source code lives in the `/app` subdirectory.** Run all commands from there.

> Note: `AGENTS.md` and `app/README.md` are outdated — they reference a prior Vite/react-router-dom setup. The project now uses **Next.js 15 with App Router**.

## Commands

```bash
cd app

npm run dev            # Dev server at localhost:3000
npm run build          # Static export to app/dist/
npm run start          # Preview production build
npm run lint           # ESLint (Next.js + TypeScript rules)
npm run build-gallery  # Process Photos/ → public/images/galleries/ + generate gallery-config-auto.ts
```

No test framework is configured. Verification is manual/visual.

## Architecture

### Tech Stack
- **Next.js 15.3** (App Router, `output: 'export'` for static HTML)
- **React 19.2** with TypeScript 5.9
- **Tailwind CSS 3.4** with CSS variables (HSL) for theming
- **Framer Motion** for page transitions and scroll animations
- **shadcn/ui** (Radix UI primitives) — add components with `npx shadcn add <name>` from `app/`
- **Netlify Forms** for contact form submission (hidden form in `layout.tsx`)

### Dual Theme System
The site has two visual themes, switched based on the current route (`usePathname()`):
- **Wedding theme** (default): Dark background `#0a0a0a`, gold accent `#c9a962`, Cormorant Garamond serif
- **Aerospace theme** (`/aerospace`): Light background `#e8e6e1`, red accent `#c41e3a`, Space Mono monospace

Theme colors are CSS variables defined in `src/app/globals.css`. Font classes: `font-wedding-display`, `font-aerospace-display`.

### Content System
All text/copy is centralized in `src/lib/content/`:
- `site.ts` — Contact info, social links, SEO defaults
- `pages.ts` — Per-page hero text, CTAs, descriptions
- `albums.ts` — Album metadata (titles, descriptions, locations, dates)

### Gallery Pipeline
1. Source photos go in `/Photos/<Category>/<Album>/`
2. `npm run build-gallery` (runs `scripts/build-gallery.js`) processes them:
   - Resizes to 1920px max width, converts to WebP (quality 85) via Sharp
   - Copies to `app/public/images/galleries/`
   - **Auto-generates** `src/lib/gallery-config-auto.ts` with all image metadata
3. `src/lib/gallery-config.ts` wraps the auto-generated config with helper functions and legacy ID mappings

**`gallery-config-auto.ts` is generated — do not edit it directly.**

### Hosted project apps
Built copies of side apps and games are committed under `app/public/projects/<slug>/app/` and served
at `/projects/<slug>/app/` (Orbital Mechanics, Marshlight Sanctuary, Machine Frame Lab). There is no
`/play/` any more; `_redirects` sends old `/play/...` links to the new addresses. Builds must use
relative asset paths or a matching base. To update Machine Frame Lab, from a checkout of
`seankd3/machine-frame-lab`:

```bash
npx vite build --base /projects/machine-frame-lab/app/ --outDir <this repo>/app/public/projects/machine-frame-lab/app --emptyOutDir
```

### Page Structure
Pages live in `src/app/<route>/page.tsx` with optional `layout.tsx` for metadata. Categories: weddings, aerospace, events, landscapes, portraits, abstract, contact. Side projects live under `projects/` (`projects/photoarchive` and `projects/[slug]` for the cards in `src/lib/content/projects.ts`).

### Key Conventions
- Path alias: `@/*` → `src/*`
- Use `cn()` from `@/lib/utils` for conditional Tailwind classes
- `'use client'` directive on components with interactivity (lightboxes, forms, animations)
- Framer Motion `whileInView` with `viewport={{ once: true }}` for scroll animations
- `AnimatePresence` for page transitions (configured in `src/app/template.tsx`)
- JSON-LD structured data for SEO in layout files
- Images are unoptimized in Next.js config (Sharp handles optimization in the gallery build step)

### Deployment — CLOUDFLARE PAGES (not Netlify, not GitHub Pages)
The live site (seankennethdoherty.com) is hosted on **Cloudflare Pages**, project `seankennethdoherty`,
deployed by **direct wrangler upload from this machine** (no git integration — pushing does NOT deploy).

```bash
cd app
npm run build                                  # static export to app/out/ (dist/ is a stale Jan-2026 artifact)
npx wrangler pages deploy out --project-name seankennethdoherty --branch master
```

- Netlify: dead (account suspended 2026-05). `DEPLOY.md` Netlify instructions are legacy.
- Git branch: `main` is the site's branch (it replaced `legacy/master` on 2026-09-27).
- `--branch master` is Cloudflare's production-branch label, not the git branch: without it wrangler labels the upload with the current git branch (`main`) and Cloudflare publishes it as a preview, not the live site.
- The old GitHub Pages workflow was removed; it never served the domain.
- Deploying publishes everything in `out` — get explicit approval from Sean before deploying.
