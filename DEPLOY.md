# Deploy — Cloudflare Pages (CURRENT)

> **The site is hosted on Cloudflare Pages** (project `seankennethdoherty`, domains
> seankennethdoherty.com / www / seankennethdoherty.pages.dev), deployed by direct
> wrangler upload. Git pushes do NOT auto-deploy.

```bash
cd app
npm run build
npx wrangler pages deploy out --project-name seankennethdoherty
```

**Gotcha:** Cloudflare Pages rejects files over 25 MiB — the whole deploy fails
silently-ish (no success line). Oversized leftovers live in `_archive/` (e.g. the
reverted book-video mp4s, moved 2026-07-09); keep big media out of `app/public`.

Everything below this line is **legacy** (Netlify account suspended 2026-05; the
GitHub Pages workflow was a brief interim and does not serve the domain).

---

# LEGACY: Deploy to Netlify

## Quick Deploy (3 Steps)

### Step 1: Build the Site
```bash
cd app
npm run build
```

### Step 2: Deploy to Netlify

**Option A: Drag & Drop (Easiest)**
1. Go to [netlify.com](https://netlify.com) and sign up (use GitHub)
2. Click "Add new site" → "Deploy manually"
3. Drag the `app/dist` folder onto the page
4. Done! Your site is live!

**Option B: Connect GitHub (Auto-deploy)**
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Select your GitHub repo
4. Build settings:
   - Base directory: `app`
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Step 3: Custom Domain (Optional)
1. In Netlify dashboard, go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain (e.g., `seankennethdoherty.com`)
4. Follow DNS instructions

---

## Contact Form Setup

The contact form is already configured for Netlify Forms. After deploying:

1. Go to your Netlify dashboard → Forms
2. You'll see submissions there
3. You can also get email notifications:
   - Site settings → Forms → Form notifications
   - Add your email

---

## Adding Photos

### Current Approach (Static Files)
1. Add optimized photos to `app/public/images/` folders
2. Update `app/src/lib/gallery-config.ts`
3. Rebuild and redeploy

### Future: Netlify Large Media
For lots of high-res photos, enable Netlify Large Media:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Link to your site
netlify link

# Enable Large Media
netlify lm:setup
```

---

## Videos

For videos, you have 3 options:

### Option 1: YouTube/Vimeo (Recommended)
- Upload to YouTube as unlisted
- Embed in your site
- Zero bandwidth cost

### Option 2: Netlify Large Media
- Works with Git LFS
- Good for short clips (<100MB each)

### Option 3: External CDN
- Cloudflare Stream, Mux, etc.
- For professional video hosting

---

## Updating Your Site

### With GitHub (Auto-deploy):
1. Edit files locally
2. `git add . && git commit -m "Update photos"`
3. `git push origin main`
4. Netlify auto-deploys!

### Manual:
1. `npm run build`
2. Drag `dist` folder to Netlify again

---

## Free Tier Limits

- **Bandwidth:** 100GB/month (~10,000 visitors)
- **Build minutes:** 300 minutes/month
- **Forms:** 100 submissions/month
- **Large Media:** 2,500 Git LFS objects

**Need more?** Paid plans start at $19/month

---

## Troubleshooting

### Form not working?
- Make sure `data-netlify="true"` is on the form
- Each input needs a `name` attribute
- Rebuild and redeploy

### Images not showing?
- Check paths start with `/images/`
- Make sure images are in `public/images/`
- Check case sensitivity

### Build fails?
- Check `npm run build` works locally
- Make sure Node version is 18+
