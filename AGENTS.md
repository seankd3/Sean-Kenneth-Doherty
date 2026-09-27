# AGENTS.md

Read [`CLAUDE.md`](CLAUDE.md): it is the single, current guide for every agent working here.

The essentials:

- Work on the `legacy/master` branch. `main` is an unrelated page.
- All code is in `app/` (Next.js 15 static export). Use `npm ci`, `npm run dev`, and
  `npm run build` (output goes to `app/out`).
- Nothing goes live without Sean's explicit go-ahead. Pushing does not deploy; deploys are
  Cloudflare Pages uploads (see `DEPLOY.md`).
