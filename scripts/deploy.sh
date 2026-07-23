#!/usr/bin/env bash
# Build + deploy seankennethdoherty.com to Cloudflare Pages.
# Run from repo root or app/:  bash scripts/deploy.sh   OR   bash deploy.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
# Support both repo-root/scripts and app/ placement
if [[ -d "$ROOT/app" ]]; then
  APP="$ROOT/app"
elif [[ -f "$ROOT/package.json" ]]; then
  APP="$ROOT"
else
  APP="$(cd "$ROOT/../app" 2>/dev/null && pwd || true)"
fi

if [[ -z "${APP:-}" || ! -f "$APP/package.json" ]]; then
  echo "Could not find app/package.json" >&2
  exit 1
fi

cd "$APP"
echo "==> Building static export…"
npm run build

if [[ ! -d out ]]; then
  echo "Build did not produce app/out" >&2
  exit 1
fi

# Smoke: contact form markup must be present (not CSR bailout empty)
if ! grep -q 'name="firstName"' out/contact/index.html 2>/dev/null; then
  echo "SMOKE FAIL: contact form fields missing from static HTML" >&2
  exit 1
fi

# Smoke: aerospace covers use centered 3:2 frame
if ! grep -q 'aspect-\[3/2\]' out/aerospace/index.html 2>/dev/null; then
  echo "SMOKE FAIL: aerospace cover aspect frame missing" >&2
  exit 1
fi

# Smoke: pricing route exists
if [[ ! -f out/pricing/index.html ]]; then
  echo "SMOKE FAIL: /pricing not exported" >&2
  exit 1
fi

echo "==> Deploying to Cloudflare Pages (seankennethdoherty)…"
npx wrangler pages deploy out --project-name seankennethdoherty

echo "==> Done. Live: https://seankennethdoherty.com"
