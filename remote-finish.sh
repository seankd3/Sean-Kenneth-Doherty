#!/usr/bin/env bash
set -euo pipefail
cd ~/Projects/sean-kenneth-doherty

# sitemap: add pricing if missing
if ! grep -q "/pricing" app/src/app/sitemap.ts; then
  python3 - <<'PY'
from pathlib import Path
p = Path("app/src/app/sitemap.ts")
t = p.read_text()
needle = "{ path: '/contact', changeFrequency: 'yearly', priority: 0.8 },"
insert = "{ path: '/pricing', changeFrequency: 'monthly', priority: 0.85 },\n  { path: '/contact', changeFrequency: 'yearly', priority: 0.8 },"
if needle in t:
    p.write_text(t.replace(needle, insert, 1))
    print("sitemap: added /pricing")
else:
    print("sitemap: contact needle not found")
PY
fi

git add -A
git status -sb

git commit -m "$(cat <<'EOF'
site: contact SSR, portfolio hub, pricing, aerospace perf, dual-path home

Contact form always in HTML (no useSearchParams CSR bailout).
Galleries page is a portfolio hub with all categories.
New /pricing route with wedding package builder + nav link.
Home dual audience paths, all 6 categories, trust strip, pricing CTAs.
Aerospace progressive load (12 then more) and swipe lightbox.
safeImageSrc encodes spaced filenames; build-gallery slugifies outputs.
Reduced-motion CSS; centered object-fit on heroes/covers.
deploy.sh with smoke checks for contact/aerospace/pricing.
EOF
)" || echo "commit may already exist"

echo "==> BUILD"
cd app
rm -f build.log build.done
npm run build > build.log 2>&1
echo $? > build.done
tail -40 build.log

# smoke
if ! grep -q 'name="firstName"' out/contact/index.html; then
  echo "SMOKE FAIL contact" >&2
  exit 1
fi
if ! grep -q 'aspect-\[3/2\]' out/aerospace/index.html; then
  echo "SMOKE FAIL aerospace" >&2
  exit 1
fi
if [[ ! -f out/pricing/index.html ]]; then
  echo "SMOKE FAIL pricing" >&2
  exit 1
fi
if ! grep -q 'Explore My Work\|portfolio\|Weddings' out/galleries/index.html; then
  echo "SMOKE FAIL galleries hub" >&2
  exit 1
fi

echo "==> DEPLOY"
npx wrangler pages deploy out --project-name seankennethdoherty
echo "==> DONE"
git push origin master || true
