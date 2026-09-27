# Hosting Guide for Sean Kenneth Doherty Photography

## Overview
This site uses a modern, scalable architecture perfect for photography portfolios with lots of images and videos.

## Architecture

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Vercel    │────▶│  Cloudinary  │     │  Supabase   │
│  (Frontend) │     │(Images/Vids) │◄────│ (Database)  │
└─────────────┘     └──────────────┘     └─────────────┘
       │                                            │
       └──────────────▶ Formspree ◄─────────────────┘
                        (Contact Form)
```

## Why This Setup?

### 1. Vercel (Frontend Hosting)
- **Free tier:** Unlimited bandwidth, 100GB-hours compute/month
- **Best for:** React apps, automatic deploys from GitHub
- **Your URL:** `https://seankennethdoherty.vercel.app` (or custom domain)

### 2. Cloudinary (Image/Video CDN)
- **Free tier:** 25GB storage, 25GB bandwidth/month, 25K transformations
- **Best for:** Storing and delivering optimized images/videos
- **Features:** Auto-resize, format conversion (WebP), responsive images

### 3. Supabase (Backend + Database)
- **Free tier:** 500MB database, 1GB file storage, 2M edge function invocations
- **Best for:** Photo management system, contact form backend, user auth
- **Database:** PostgreSQL (powerful, industry standard)

### 4. Formspree (Contact Form - Temporary)
- **Free tier:** 50 submissions/month
- **Best for:** Working contact form immediately while you build the backend
- **Future:** Move to Supabase edge functions when ready

---

## Setup Instructions

### Step 1: Deploy Frontend to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "Add New Project"
3. Import your GitHub repo: `Sean-Kenneth-Doherty/Sean-Kenneth-Doherty`
4. Set framework preset to "Vite"
5. Set root directory to `app`
6. Build command: `npm run build`
7. Output directory: `dist`
8. Click Deploy!

Your site will be live in ~2 minutes at `https://seankennethdoherty.vercel.app`

### Step 2: Set Up Cloudinary for Images/Videos

1. Go to [cloudinary.com](https://cloudinary.com) and sign up
2. Get your **Cloud Name**, **API Key**, and **API Secret**
3. In Vercel dashboard, go to your project → Settings → Environment Variables
4. Add these variables:
   - `VITE_CLOUDINARY_CLOUD_NAME` = your cloud name
   - `VITE_CLOUDINARY_API_KEY` = your api key
   - `CLOUDINARY_API_SECRET` = your api secret (keep secret!)

### Step 3: Upload Images to Cloudinary

Option A: Manual Upload
1. Go to Cloudinary Media Library
2. Create folders: `weddings`, `aerospace`, `events`, `landscapes`
3. Upload your optimized images

Option B: Batch Upload Script (coming soon)
```bash
# I'll create a script to batch upload all your photos
npm run upload-photos
```

### Step 4: Set Up Supabase (For Future Backend)

1. Go to [supabase.com](https://supabase.com) and sign up
2. Create a new project
3. In SQL Editor, run the schema (in `supabase/schema.sql`)
4. Get your project URL and anon key
5. Add to Vercel environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

### Step 5: Contact Form

**Quick Start (Formspree):**
1. Go to [formspree.io](https://formspree.io)
2. Create a form, get your endpoint URL
3. Update the contact page with your form ID

**Later (Supabase):**
- Move contact form to Supabase edge function
- Store submissions in database
- Send email notifications

---

## Updating Your Site

### Adding New Photos

1. **Upload to Cloudinary:**
   ```bash
   # I'll create this script for you
   npm run upload-photo -- weddings/ new-wedding-photo.jpg
   ```

2. **Update Gallery Config:**
   - Edit `app/src/lib/gallery-config.ts`
   - Add new image URL from Cloudinary
   - Commit and push to GitHub
   - Vercel auto-deploys!

### Adding Videos

1. Upload video to Cloudinary
2. Add video URL to config
3. Use Cloudinary's video player component

---

## Custom Domain (Optional)

### Vercel Custom Domain:
1. Buy domain (Namecheap, Google Domains, etc.)
2. In Vercel: Project → Settings → Domains
3. Add your domain and follow DNS instructions

### Recommended: `seankennethdoherty.com` or `seandoherty.photo`

---

## Costs as You Grow

| Usage Level | Estimated Cost |
|-------------|----------------|
| Starting out | **$0** (all free tiers) |
| 1000 photos, light traffic | **$0** |
| 5000 photos, heavy traffic | ~$25/month |
| Professional portfolio | ~$50-100/month |

---

## Future Features Roadmap

### Phase 1: Basic Site (Now)
- ✅ Static galleries
- ✅ Contact form via Formspree
- ✅ Cloudinary image hosting

### Phase 2: Photo Management System
- Admin dashboard (password protected)
- Upload photos directly to site
- Auto-optimize and upload to Cloudinary
- Organize into galleries
- Edit captions/metadata

### Phase 3: Client Features
- Password-protected client galleries
- Photo favorites/selection system
- Download links for full-res images
- Client proofing workflow

### Phase 4: E-commerce
- Print sales
- Digital downloads
- Payment processing (Stripe)

---

## Need Help?

All credentials and setup details should be stored in your password manager.
Keep the `.env` file private - never commit it to GitHub!
