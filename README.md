# Sean Kenneth Doherty Photography

Professional photography portfolio website built with React + TypeScript + Vite.

## Quick Start

```bash
cd app
npm install
npm run dev      # Development server
npm run build    # Production build
```

## Deploy to Netlify

### Step 1: Build
```bash
cd app
npm run build
```

### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com)
2. Drag the `app/dist` folder onto the page
3. Site is live!

Or connect your GitHub repo for auto-deploys.

## Adding Photos

### Option 1: Manual (Now)
1. Optimize photos: `cd scripts && ./optimize-images.sh`
2. Update `app/src/lib/gallery-config.ts`
3. Rebuild and deploy

### Option 2: Photo Management System (Future)
- Admin dashboard for uploading
- Auto-optimization
- Drag-and-drop gallery organization

## Project Structure

```
app/
├── public/images/    # Static images
├── src/
│   ├── components/   # UI components
│   ├── pages/        # Page components
│   └── lib/
│       └── gallery-config.ts  # Photo management
└── dist/             # Build output
```

## Contact Form

Works automatically with Netlify Forms. Submissions appear in your Netlify dashboard.

## Custom Domain

In Netlify: Site settings → Domain management → Add custom domain
