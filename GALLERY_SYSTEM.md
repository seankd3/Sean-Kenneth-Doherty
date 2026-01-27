# 📸 Gallery Management System

Easy drag-and-drop gallery management with configurable layouts and metadata.

---

## 🚀 Quick Start

### 1. Create a New Gallery

```bash
# Create a folder in galleries/
mkdir "app/public/images/galleries/my-new-gallery"

# Copy your photos
cp ~/Photos/*.jpg "app/public/images/galleries/my-new-gallery/"

# (Optional) Add _cover.jpg and _hero.jpg
cp "app/public/images/galleries/my-new-gallery/photo1.jpg" \
   "app/public/images/galleries/my-new-gallery/_cover.jpg"
```

### 2. Configure (Optional)

Create `app/public/images/galleries/my-new-gallery/_gallery.yml`:

```yaml
title: "My Awesome Gallery"
description: "Photos from my trip"
layout: masonry
sortBy: dateTaken

display:
  metadata: true    # Show titles, locations
  captions: true    # Show on hover
  exif: false       # Camera settings
```

### 3. Sync

```bash
cd app
npm run sync-galleries
```

### 4. Use in a Page

```tsx
import { Gallery } from '@/components/Gallery';
import { getGalleryById } from '@/lib/gallery-config-auto';

const gallery = getGalleryById('my-new-gallery');

<Gallery gallery={gallery} />
```

---

## 📁 Folder Structure

```
public/images/galleries/
├── _global.yml                      # Site-wide config (heroes, categories)
├── my-wedding/                      # Gallery folder
│   ├── _gallery.yml                 # Gallery config (optional)
│   ├── _cover.jpg                   # Thumbnail image (optional)
│   ├── _hero.jpg                    # Hero image (optional)
│   └── *.jpg                        # Gallery images
├── starbase-launch/                 # Another gallery
│   ├── _gallery.yml
│   └── *.jpg
└── weddings/                        # Parent gallery with sub-galleries
    ├── _gallery.yml
    ├── sarah-2024/                  # Sub-gallery
    │   └── *.jpg
    └── mike-2025/                   # Sub-gallery
        └── *.jpg
```

---

## 🎨 Layout Options

### Masonry (Pinterest-style)
```yaml
layout: masonry
```
Best for: Mixed aspect ratios (portraits, landscapes)

### Grid (Uniform)
```yaml
layout: grid
gridColumns: 3  # 2, 3, or 4
```
Best for: Similar sized images

### Slideshow
```yaml
layout: slideshow
```
Best for: Featured galleries, full-screen viewing

### Filmstrip
```yaml
layout: filmstrip
```
Best for: Horizontal scrolling galleries

---

## 📋 Sorting Options

```yaml
sortBy: dateTaken       # By photo date (from EXIF)
sortBy: filename        # Alphabetical
sortBy: manual          # Order in _gallery.yml images: list

sortDirection: asc      # Oldest first / A-Z
sortDirection: desc     # Newest first / Z-A
```

---

## 🏷️ Adding Metadata

### Option 1: EXIF Auto-Detect
Photos with EXIF data automatically show:
- Date taken (as title)
- Camera model (if exif: true)

### Option 2: Manual YAML
```yaml
images:
  - filename: "photo1.jpg"
    title: "First Kiss"
    location: "Austin, TX"
    date: "2024-12-21T16:30:00"
    
  - filename: "photo2.jpg"
    title: "The Dress"
    location: "Bridal Suite"
```

---

## 🖼️ Changing Hero Images

### Method 1: Rename Files
```bash
# In any gallery folder:
cp my-photo.jpg _hero.jpg     # Page hero
cp my-photo.jpg _cover.jpg    # Thumbnail/card
```

### Method 2: Edit _global.yml
```yaml
heroes:
  weddings:
    image: "/images/galleries/my-wedding/_hero.jpg"
    
  home:
    image: "/images/galleries/starbase-launch/_hero.jpg"
```

---

## 🧩 Gallery Config Reference

```yaml
# Required: None (everything has defaults)

# Optional settings:
title: "Gallery Title"              # Default: folder name
description: "Description"          # Default: empty

layout: masonry                     # masonry | grid | slideshow | filmstrip
sortBy: dateTaken                   # dateTaken | filename | manual
sortDirection: asc                  # asc | desc

display:
  metadata: true                    # Show title, location
  captions: true                    # Show on hover
  exif: false                       # Show camera settings

cover:
  image: "custom-cover.jpg"         # Default: _cover.jpg or first image
  title: "Featured"
  crop: center                      # center | top | bottom

# Manual image list (overrides auto-scan):
images:
  - filename: "photo.jpg"
    title: "Title"
    location: "Location"
    date: "2024-01-01T12:00:00"
```

---

## 🔧 Workflow Examples

### Add Wedding Photos
```bash
# 1. Create folder
mkdir "app/public/images/galleries/wedding-sarah-mike"

# 2. Drop photos
cp ~/Weddings/Sarah_Mike/*.jpg "app/public/images/galleries/wedding-sarah-mike/"

# 3. Create config
cat > "app/public/images/galleries/wedding-sarah-mike/_gallery.yml" << 'EOF'
title: "Sarah & Mike Wedding"
description: "Winter wedding at The Vineyards"
layout: masonry
display:
  metadata: true
  captions: true
EOF

# 4. Sync
cd app && npm run sync-galleries
```

### Change Homepage Hero
```bash
# Just rename any photo to _hero.jpg in your gallery:
cp "app/public/images/galleries/my-gallery/awesome-shot.jpg" \
   "app/public/images/galleries/my-gallery/_hero.jpg"

# Or edit _global.yml
cd app && npm run sync-galleries
```

### Create Sub-Galleries
```bash
# Parent gallery
mkdir "app/public/images/galleries/2024-weddings"

# Sub-galleries
mkdir "app/public/images/galleries/2024-weddings/january"
mkdir "app/public/images/galleries/2024-weddings/february"

cp ~/Weddings/Jan/*.jpg "app/public/images/galleries/2024-weddings/january/"
cp ~/Weddings/Feb/*.jpg "app/public/images/galleries/2024-weddings/february/"

cd app && npm run sync-galleries
```

---

## 📝 Tips

- **Filenames are preserved** - no automatic renaming
- **_hero.jpg** = page background image
- **_cover.jpg** = thumbnail/preview image  
- **Sub-folders** automatically become sub-galleries
- **EXIF data** is read automatically for date/camera info
- **YAML is optional** - galleries work without it

---

## 🐛 Troubleshooting

### Images not showing?
1. Run `npm run sync-galleries`
2. Check `gallery-config-auto.ts` was generated
3. Verify image paths in browser dev tools

### Wrong sort order?
- Check `sortBy` in `_gallery.yml`
- For `dateTaken`, photos need EXIF date
- Run sync again after changing config

### EXIF not showing?
- Set `display.exif: true` in `_gallery.yml`
- Some images may not have EXIF data (exports, screenshots)
- Film photos won't have EXIF

---

## 🎨 Component Usage

```tsx
// Basic usage
<Gallery gallery={getGalleryById('my-gallery')} />

// Override layout
<Gallery gallery={gallery} layout="grid" columns={4} />

// Hide metadata
<Gallery gallery={gallery} showMetadata={false} />

// Use in page
import { galleries, getGalleryById } from '@/lib/gallery-config-auto';

// Get all galleries
{galleries.map(g => <Gallery key={g.id} gallery={g} />)}

// Get specific gallery
const weddingGallery = getGalleryById('wedding-sarah-2024');
```
