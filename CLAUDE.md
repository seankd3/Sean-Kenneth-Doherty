# CLAUDE.md

Guidance for AI agents (Claude Code, Codex, and others) working in this repository. `AGENTS.md`
points here, so this file is the single source of truth.

## Ground rules

- **This is Sean's public professional face.** Nothing goes live (a production deploy) without
  his explicit go-ahead in the current session. A preview deploy is safe and is how you show him a
  change.
- **Branch: `legacy/master`.** The default branch `main` is an unrelated Marshlight page. Clone with
  `git clone -b legacy/master https://github.com/seankd3/Sean-Kenneth-Doherty.git` and open pull
  requests into `legacy/master`.
- **Commit identity:** `Sean Kenneth Doherty <328402569+seankd3@users.noreply.github.com>`. Never
  commit with a Gmail address.
- **Pushing does not deploy.** Hosting is a Cloudflare Pages direct upload (see Deploy).

## Project

Photography portfolio for Sean Kenneth Doherty (Austin, TX): Next.js 15 App Router, statically
exported (`output: 'export'`, `trailingSlash: true`), React 19, TypeScript, Tailwind 3.4 with CSS
variables, shadcn/ui and framer-motion.

**All code lives in `app/`.** Run every command from there.

```bash
cd app
npm ci
npm run dev            # dev server, http://localhost:3000
npm run build          # static export to app/out/ (app/dist/ is a stale artifact; ignore it)
npm run start          # serve app/out/ exactly as it deploys (http://localhost:3000)
npm run lint           # ESLint
npm run build-gallery  # /Photos → public/images/galleries/ + src/lib/gallery-config-auto.ts
npm run sync-projects  # refresh the Orbital Mechanics update feed from ../orbital-mechanics
```

There are no tests. Verify a change by running `npm run build`, serving it with `npm run start`,
and taking before/after screenshots of every page you touched.

## Where things live

- **Copy:** `src/lib/content/` holds `site.ts` (contact, social, SEO), `pages.ts` (hero text and
  CTAs per page), `albums.ts` (album metadata), `projects.ts` and `wedding-pricing.ts`.
- **Routes:** `src/app/<route>/page.tsx`, with an optional `layout.tsx` for metadata and JSON-LD.
  The sitemap is `src/app/sitemap.ts`. Redirects are in `public/_redirects`.
- **Themes by route:** wedding (dark, gold `#c9a962`, Cormorant Garamond) is the default;
  aerospace (light, red `#c41e3a`, Space Mono) applies on `/aerospace`. Variables are in
  `src/app/globals.css`. Font classes are `font-wedding-display` and `font-aerospace-display`.
- **Galleries:** WebP images are committed in `public/images/galleries/`.
  `src/lib/gallery-config-auto.ts` is **generated** by `npm run build-gallery` from `/Photos`
  (not in git). Never hand-edit it. `src/lib/gallery-config.ts` wraps it.
- **Contact form:** posts through FormSubmit (`src/lib/submit-inquiry.ts`) to Sean's inbox. Setting
  `NEXT_PUBLIC_WEB3FORMS_KEY` at build time switches it to Web3Forms.
- **Hosted games:** `public/play/<game>/` holds prebuilt static games served at
  `/play/<game>/`, such as `orbital-mechanics` (built from the `seankd3/orbital-mechanics` repo with
  `npm run build`, then its `dist/` copied here).

Conventions: the `@/*` alias maps to `src/*`. Use `cn()` from `@/lib/utils` for conditional
classes. Add `'use client'` to interactive components. Use framer-motion `whileInView` with
`viewport={{ once: true }}`. Page transitions are in `src/app/template.tsx`. Images are
unoptimized in Next (Sharp does it in the gallery build). Add shadcn components with
`npx shadcn add <name>`.

## Deploy — Cloudflare Pages

Project `seankennethdoherty` (seankennethdoherty.com, www, seankennethdoherty.pages.dev), direct
upload with no Git integration. Wrangler needs a Cloudflare API token (`CLOUDFLARE_API_TOKEN`) or
`wrangler login`.

```bash
cd app && npm run build
# Preview: safe, production untouched. Share the URL it prints with Sean.
npx wrangler pages deploy out --project-name seankennethdoherty --branch preview
# Production: ONLY when Sean says so in this session.
npx wrangler pages deploy out --project-name seankennethdoherty --branch master
```

- Every deploy uploads **all** of `out/`, and it replaces the whole site.
- **Any file over 25 MiB fails the whole deploy.** Keep big media out of `app/public`.
- Netlify, Vercel and GitHub Pages are all dead ends. The docs in `docs/archive/` describe them
  and are history only. `.github/workflows/deploy.yml` is inert (it only fires on `main`).
