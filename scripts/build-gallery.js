#!/usr/bin/env node
/**
 * Unified Gallery Build Script
 * 
 * One script that does everything:
 * 1. Reads Photos/ folder structure
 * 2. Optimizes images (resize, compress)
 * 3. Copies optimized images to public/images/galleries/
 * 4. Generates gallery-config-auto.ts
 * 
 * Usage: node scripts/build-gallery.js
 */

const fs = require('fs');
const path = require('path');
let sharp;
try {
  sharp = require('sharp');
} catch {
  // sharp may be installed in app/node_modules when script runs from project root
  try {
    sharp = require(path.join(__dirname, '..', 'app', 'node_modules', 'sharp'));
  } catch {
    console.warn('⚠️  sharp not available, falling back to file copy (no WebP conversion)');
  }
}

// Paths
const PROJECT_ROOT = path.join(__dirname, '..');
const PHOTOS_DIR = path.join(PROJECT_ROOT, 'Photos');
const GALLERIES_DIR = path.join(PROJECT_ROOT, 'app/public/images/galleries');
const OUTPUT_FILE = path.join(PROJECT_ROOT, 'app/src/lib/gallery-config-auto.ts');

// Image settings
const MAX_WIDTH = 1920;  // Max width for web display
const WEBP_QUALITY = 85; // WebP quality (0-100)

// Category definitions (Photos folder name -> Gallery ID)
const CATEGORIES = {
  'Abstract': 'abstract',
  'Aerospace': 'aerospace', 
  'Events': 'events',
  'Landscapes': 'landscapes',
  'Portraits': 'portraits',
  'Weddings': 'weddings',
};

// Image extensions to process
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

function isImage(filename) {
  const ext = path.extname(filename).toLowerCase();
  return IMAGE_EXTENSIONS.includes(ext) && !filename.startsWith('.');
}

function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function toTitle(name) {
  return name
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace(/\s*&\s*/g, ' & ');
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

async function optimizeImage(srcPath, destPath) {
  try {
    fs.mkdirSync(path.dirname(destPath), { recursive: true });

    const ext = path.extname(srcPath).toLowerCase();

    // Determine output path: convert to .webp if sharp is available
    let finalDestPath = destPath;
    if (sharp && ['.jpg', '.jpeg', '.png'].includes(ext)) {
      finalDestPath = destPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }

    // Check if file already exists and is newer than source
    if (fs.existsSync(finalDestPath)) {
      const srcStat = fs.statSync(srcPath);
      const destStat = fs.statSync(finalDestPath);
      if (destStat.mtime >= srcStat.mtime) {
        // Read dimensions from existing file
        let width = 0, height = 0;
        if (sharp) {
          const meta = await sharp(finalDestPath).metadata();
          width = meta.width || 0;
          height = meta.height || 0;
        }
        return { success: true, skipped: true, size: destStat.size, destPath: finalDestPath, width, height };
      }
    }

    if (sharp && ['.jpg', '.jpeg', '.png'].includes(ext)) {
      // Use sharp for WebP conversion with resize
      const srcSize = fs.statSync(srcPath).size;
      const info = await sharp(srcPath)
        .resize(MAX_WIDTH, MAX_WIDTH, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(finalDestPath);

      const destSize = fs.statSync(finalDestPath).size;
      return { success: true, skipped: false, size: destSize, srcSize, saved: srcSize - destSize, destPath: finalDestPath, width: info.width, height: info.height };
    } else {
      // Other formats or no sharp: just copy
      fs.copyFileSync(srcPath, finalDestPath);
      // Try to read dimensions
      let width = 0, height = 0;
      if (sharp) {
        try {
          const meta = await sharp(finalDestPath).metadata();
          width = meta.width || 0;
          height = meta.height || 0;
        } catch {}
      }
      return { success: true, skipped: false, size: fs.statSync(finalDestPath).size, destPath: finalDestPath, width, height };
    }
  } catch (e) {
    console.error(`  Error optimizing ${path.basename(srcPath)}: ${e.message}`);
    // Fallback to copy on error
    try {
      fs.copyFileSync(srcPath, destPath);
      return { success: true, skipped: false, size: fs.statSync(destPath).size, destPath, width: 0, height: 0 };
    } catch (copyErr) {
      return { success: false, error: copyErr.message, destPath, width: 0, height: 0 };
    }
  }
}

async function scanAlbum(albumPath, categoryId, albumId) {
  const images = [];

  if (!fs.existsSync(albumPath)) {
    return { images, totalSaved: 0, optimizedCount: 0 };
  }

  const files = fs.readdirSync(albumPath).sort();
  let totalSaved = 0;
  let optimizedCount = 0;

  for (const file of files) {
    if (isImage(file)) {
      const srcPath = path.join(albumPath, file);
      // Slugify output filenames so public URLs never contain spaces/special chars
      const ext = path.extname(file);
      const base = path.basename(file, ext);
      const safeName = `${toSlug(base) || 'image'}${ext.toLowerCase()}`;
      const destPath = path.join(GALLERIES_DIR, categoryId, albumId, safeName);

      // Optimize and copy image (may convert to .webp)
      const result = await optimizeImage(srcPath, destPath);

      if (result.success) {
        const outputFilename = path.basename(result.destPath || destPath);
        images.push({
          filename: outputFilename,
          src: `/images/galleries/${categoryId}/${albumId}/${outputFilename}`,
          width: result.width || 0,
          height: result.height || 0,
        });

        if (result.saved > 0) {
          totalSaved += result.saved;
          optimizedCount++;
        }
      }
    }
  }

  return { images, totalSaved, optimizedCount };
}

async function processCategory(categoryName, categoryId) {
  const categoryPath = path.join(PHOTOS_DIR, categoryName);
  
  if (!fs.existsSync(categoryPath)) {
    console.log(`⚠️  Category not found: ${categoryPath}`);
    return null;
  }
  
  const albums = [];
  const items = fs.readdirSync(categoryPath);
  let categorySaved = 0;
  let categoryOptimized = 0;
  
  for (const item of items) {
    const itemPath = path.join(categoryPath, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      const albumId = toSlug(item);
      console.log(`  📁 Album: ${item} -> ${categoryId}/${albumId}`);
      
      const { images, totalSaved, optimizedCount } = await scanAlbum(itemPath, categoryId, albumId);
      
      if (images.length > 0) {
        albums.push({
          id: `${categoryId}/${albumId}`,
          title: toTitle(albumId),
          path: `/images/galleries/${categoryId}/${albumId}`,
          images: images,
        });
        console.log(`     ✓ ${images.length} images (${optimizedCount > 0 ? `saved ${formatBytes(totalSaved)}` : 'already optimized'})`);
        categorySaved += totalSaved;
        categoryOptimized += optimizedCount;
      }
    }
  }
  
  // Sort albums by title
  albums.sort((a, b) => a.title.localeCompare(b.title));
  
  const totalImages = albums.reduce((sum, a) => sum + a.images.length, 0);
  
  // Category descriptions
  const descriptions = {
    abstract: 'Exploring form, color, texture, and the spaces between',
    aerospace: 'Documenting the new space age through technical precision and artistic vision',
    events: 'Capturing the energy and emotion of your special occasions',
    landscapes: 'From dramatic mountain vistas to intimate natural scenes',
    portraits: 'Professional portraits that reveal the authentic you',
    weddings: 'Capturing your forever with timeless elegance and artistic vision',
  };
  
  return {
    id: categoryId,
    title: categoryName,
    description: descriptions[categoryId] || '',
    totalImages,
    albums,
    categorySaved,
    categoryOptimized,
  };
}

function generateTypeScript(categories) {
  const lines = [];
  
  lines.push('/**');
  lines.push(' * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY');
  lines.push(' * Run `npm run build-gallery` to regenerate');
  lines.push(' */');
  lines.push('');
  lines.push('export interface GalleryImage {');
  lines.push('  filename: string;');
  lines.push('  src: string;');
  lines.push('  width: number;');
  lines.push('  height: number;');
  lines.push('}');
  lines.push('');
  lines.push('export interface AlbumConfig {');
  lines.push('  id: string;');
  lines.push('  title: string;');
  lines.push('  path: string;');
  lines.push('  images: GalleryImage[];');
  lines.push('}');
  lines.push('');
  lines.push('export interface CategoryConfig {');
  lines.push('  id: string;');
  lines.push('  title: string;');
  lines.push('  description: string;');
  lines.push('  totalImages: number;');
  lines.push('  albums: AlbumConfig[];');
  lines.push('}');
  lines.push('');
  lines.push('export const categories: Record<string, CategoryConfig> = {');
  
  for (const [id, cat] of Object.entries(categories)) {
    lines.push(`  ${id}: {`);
    lines.push(`    id: '${cat.id}',`);
    lines.push(`    title: '${cat.title}',`);
    lines.push(`    description: '${cat.description}',`);
    lines.push(`    totalImages: ${cat.totalImages},`);
    lines.push(`    albums: [`);
    
    for (const album of cat.albums) {
      lines.push(`      {`);
      lines.push(`        id: '${album.id}',`);
      lines.push(`        title: '${album.title}',`);
      lines.push(`        path: '${album.path}',`);
      lines.push(`        images: [`);
      
      for (const img of album.images) {
        lines.push(`          { filename: '${img.filename}', src: '${img.src}', width: ${img.width || 0}, height: ${img.height || 0} },`);
      }
      
      lines.push(`        ],`);
      lines.push(`      },`);
    }
    
    lines.push(`    ],`);
    lines.push(`  },`);
  }
  
  lines.push('};');
  lines.push('');
  lines.push('// Helper functions');
  lines.push('export function getCategoryById(id: string): CategoryConfig | undefined {');
  lines.push('  return categories[id];');
  lines.push('}');
  lines.push('');
  lines.push('export function getAlbumById(albumId: string): AlbumConfig | undefined {');
  lines.push('  for (const cat of Object.values(categories)) {');
  lines.push('    const album = cat.albums.find(a => a.id === albumId);');
  lines.push('    if (album) return album;');
  lines.push('  }');
  lines.push('  return undefined;');
  lines.push('}');
  lines.push('');
  
  return lines.join('\n');
}

function cleanGalleries() {
  // Only clean on explicit flag, otherwise be resumable
  if (process.argv.includes('--clean') && fs.existsSync(GALLERIES_DIR)) {
    console.log('🧹 Cleaning old galleries...');
    fs.rmSync(GALLERIES_DIR, { recursive: true });
  }
  fs.mkdirSync(GALLERIES_DIR, { recursive: true });
}

async function buildGallery() {
  console.log('=========================================');
  console.log('  Building Gallery with Optimization');
  console.log('=========================================');
  console.log('');
  console.log(`Settings: Max width ${MAX_WIDTH}px, WebP quality ${WEBP_QUALITY}%${sharp ? '' : ' (sharp unavailable, copying originals)'}`);
  console.log('');
  
  if (!fs.existsSync(PHOTOS_DIR)) {
    console.error(`❌ Photos directory not found: ${PHOTOS_DIR}`);
    process.exit(1);
  }
  
  // Clean and recreate galleries directory
  cleanGalleries();
  
  const categories = {};
  let totalImages = 0;
  let totalAlbums = 0;
  let totalSaved = 0;
  let totalOptimized = 0;
  
  console.log('Processing categories...\n');
  
  for (const [categoryName, categoryId] of Object.entries(CATEGORIES)) {
    console.log(`📂 ${categoryName}:`);
    const category = await processCategory(categoryName, categoryId);
    
    if (category && category.albums.length > 0) {
      categories[categoryId] = category;
      totalImages += category.totalImages;
      totalAlbums += category.albums.length;
      totalSaved += category.categorySaved;
      totalOptimized += category.categoryOptimized;
    }
    console.log('');
  }
  
  // Generate TypeScript file
  const output = generateTypeScript(categories);
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, output);
  
  console.log('=========================================');
  console.log('✅ Gallery build complete!');
  console.log('');
  console.log(`   Categories: ${Object.keys(categories).length}`);
  console.log(`   Albums: ${totalAlbums}`);
  console.log(`   Images: ${totalImages}`);
  if (totalOptimized > 0) {
    console.log(`   Optimized: ${totalOptimized} images`);
    console.log(`   Space saved: ${formatBytes(totalSaved)}`);
  }
  console.log('');
  console.log('Files generated:');
  console.log(`  - ${OUTPUT_FILE}`);
  console.log(`  - ${GALLERIES_DIR}`);
  console.log('');
  console.log('Next step:');
  console.log('  npm run build');
  console.log('=========================================');
}

buildGallery().catch(err => {
  console.error('❌ Build failed:', err);
  process.exit(1);
});
