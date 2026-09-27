# Deploy — Cloudflare Pages (CURRENT)

## Contact form delivery

Inquiries POST via **FormSubmit.co** to `SeanDohertyPhotos@gmail.com` (see `src/lib/submit-inquiry.ts`).

**First-time setup:** Submit a test inquiry from the live contact page, then open Gmail and
click FormSubmit's **Activate form** confirmation email. After that, every Send Inquiry
arrives as email with reply-to set to the client.

Optional: set `NEXT_PUBLIC_WEB3FORMS_KEY` at build time to prefer Web3Forms instead.

> **The site is hosted on Cloudflare Pages** (project `seankennethdoherty`, domains
> seankennethdoherty.com / www / seankennethdoherty.pages.dev), deployed by direct
> wrangler upload. Git pushes do NOT auto-deploy.

```bash
cd app
npm run build
# Preview (safe; production untouched): share the printed URL with Sean.
npx wrangler pages deploy out --project-name seankennethdoherty --branch preview
# Production: only with Sean's explicit go-ahead.
npx wrangler pages deploy out --project-name seankennethdoherty --branch master
```

Wrangler needs a Cloudflare API token (`CLOUDFLARE_API_TOKEN`) or `wrangler login`.

**Gotcha:** Cloudflare Pages rejects files over 25 MiB — the whole deploy fails
silently-ish (no success line). Oversized leftovers live in `_archive/` (e.g. the
reverted book-video mp4s, moved 2026-07-09); keep big media out of `app/public`.

Older Netlify and GitHub Pages notes are in `docs/archive/DEPLOY-legacy.md` (history only).
