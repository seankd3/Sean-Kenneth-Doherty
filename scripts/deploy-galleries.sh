#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
APP_DIR="$ROOT/app"
GALLERIES_DIR="$APP_DIR/public/g"
PROJECT_NAME="seankennethdoherty"
BRANCH="main"
# Cloudflare Pages treats uploads labelled with its production branch ("master") as live.
CF_BRANCH="master"
MAX_PAGES_FILE_BYTES=$((25 * 1024 * 1024))

cd "$ROOT"

git add app/public/g
if ! git diff --cached --quiet -- app/public/g; then
    git commit -m "Publish galleries update"
fi

(
    cd "$APP_DIR"
    NEXT_PUBLIC_SITE_BASE_PATH="" npm run build
)

DEPLOY_DIR="$(mktemp -d -t skd-pages-XXXXXXXXXX)"
cleanup() {
    rm -rf "$DEPLOY_DIR"
}
trap cleanup EXIT

cp -a "$APP_DIR/out/." "$DEPLOY_DIR/"
find "$DEPLOY_DIR" -type f -size +"${MAX_PAGES_FILE_BYTES}"c -delete

(
    cd "$APP_DIR"
    npx wrangler pages deploy "$DEPLOY_DIR" --project-name="$PROJECT_NAME" --branch "$CF_BRANCH"
)

git push origin "$BRANCH"
