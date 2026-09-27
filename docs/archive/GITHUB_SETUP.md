# Push to GitHub & Deploy

## Step 1: Push to Your GitHub Repo

```bash
# Add your GitHub repo as remote
git remote add origin https://github.com/Sean-Kenneth-Doherty/Sean-Kenneth-Doherty.git

# Push to GitHub (this will overwrite the old content)
git push -u origin master --force
```

**Note:** The `--force` flag overwrites the old repo content. Your old website files will be replaced with this new one.

## Step 2: Deploy to Netlify

### Option A: Drag & Drop (Fastest)

1. Build the site locally first:
```bash
cd app
npm run build
```

2. Go to [netlify.com](https://netlify.com)
3. Sign up with GitHub
4. Click "Add new site" → "Deploy manually"
5. Drag the `app/dist` folder onto the page
6. Site is live instantly!

### Option B: GitHub Integration (Auto-deploy)

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub → Select `Sean-Kenneth-Doherty/Sean-Kenneth-Doherty`
4. Build settings:
   - **Base directory:** `app`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click "Deploy site"

Now every time you push to GitHub, Netlify auto-deploys!

## Step 3: Add Your Photos

### Quick Start (Use Placeholder Images)
The site works immediately with sample images. Just deploy as-is.

### Add Your Real Photos

**Option 1: Manual (Now)**
```bash
# 1. Optimize your photos
cd scripts
./optimize-images.sh

# 2. Update gallery config
# Edit: app/src/lib/gallery-config.ts

# 3. Commit and push
git add .
git commit -m "Add optimized photos"
git push

# 4. Netlify auto-deploys!
```

**Option 2: Netlify Large Media (For lots of photos)**
Best for 100+ high-res photos. See `DEPLOY.md` for details.

## Step 4: Custom Domain (Optional)

1. Buy domain: Namecheap, Google Domains, etc.
2. In Netlify: Site settings → Domain management → Add custom domain
3. Follow DNS instructions (usually just add a CNAME record)

**Recommended domains:**
- `seankennethdoherty.com`
- `seandoherty.photo`
- `seankdphotography.com`

## Contact Form Setup

The contact form is already configured! After deploying:

1. Go to Netlify dashboard → Forms
2. You'll see form submissions there
3. Enable email notifications: Site settings → Forms → Form notifications

## Troubleshooting

### Build fails?
```bash
# Make sure dependencies are installed
cd app
npm install
npm run build
```

### Images not showing?
- Check they're in `app/public/images/`
- Check paths in `gallery-config.ts` start with `/images/`
- Case-sensitive: `wedding-1.jpg` not `Wedding-1.jpg`

### Form not working?
- Make sure `data-netlify="true"` is on the form (already done)
- Each input needs a `name` attribute (already done)
- Redeploy after any changes

## Next Steps

- [ ] Push to GitHub
- [ ] Deploy to Netlify
- [ ] Add your photos
- [ ] Set up custom domain
- [ ] Test contact form
