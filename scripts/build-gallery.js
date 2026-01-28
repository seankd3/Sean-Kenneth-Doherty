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
const { execSync } = require('child_process');

// Paths
const PROJECT_ROOT = path.join(__dirname, '..');
const PHOTOS_DIR = path.join(PROJECT_ROOT, 'Photos');
const GALLERIES_DIR = path.join(PROJECT_ROOT, 'app/public/images/galleries');
const OUTPUT_FILE = path.join(PROJECT_ROOT, 'app/src/lib/gallery-config-auto.ts');

// Image settings
const MAX_WIDTH = 1920;  // Max width for web display
const JPEG_QUALITY = 85; // JPEG quality (0-100)
const PNG_QUALITY = 85;  // PNG compression level

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

function optimizeImage(srcPath, destPath) {
  try {
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    
    const ext = path.extname(srcPath).toLowerCase();
    const filename = path.basename(srcPath);
    
    // Check if file already exists and is newer than source
    if (fs.existsSync(destPath)) {
      const srcStat = fs.statSync(srcPath);
      const destStat = fs.statSync(destPath);
      if (destStat.mtime >= srcStat.mtime) {
        return { success: true, skipped: true, size: destStat.size };
      }
    }
    
    let command;
    if (ext === '.png') {
      // PNG optimization: resize if needed, compress
      command = `convert "${srcPath}" -resize ${MAX_WIDTH}x${MAX_WIDTH}\> -strip -define png:compression-level=9 -define png:compression-filter=5 -define png:compression-strategy=1 "${destPath}"`;
    } else if (['.jpg', '.jpeg'].includes(ext)) {
      // JPEG optimization: resize if needed, compress
      command = `convert "${srcPath}" -resize ${MAX_WIDTH}x${MAX_WIDTH}\> -strip -interlace Plane -quality ${JPEG_QUALITY} "${destPath}"`;
    } else {
      // Other formats: just copy
      fs.copyFileSync(srcPath, destPath);
      return { success: true, skipped: false, size: fs.statSync(destPath).size };
    }
    
    execSync(command, { stdio: 'pipe' });
    
    const srcSize = fs.statSync(srcPath).size;
    const destSize = fs.statSync(destPath).size;
    
    return { success: true, skipped: false, size: destSize, srcSize, saved: srcSize - destSize };
  } catch (e) {
    console.error(`  Error optimizing ${path.basename(srcPath)}: ${e.message}`);
    // Fallback to copy on error
    try {
      fs.copyFileSync(srcPath, destPath);
      return { success: true, skipped: false, size: fs.statSync(destPath).size };
    } catch (copyErr) {
      return { success: false, error: copyErr.message };
    }
  }
}

function scanAlbum(albumPath, categoryId, albumId) {
  const images = [];
  
  if (!fs.existsSync(albumPath)) {
    return images;
  }
  
  const files = fs.readdirSync(albumPath).sort();
  let totalSaved = 0;
  let optimizedCount = 0;
  
  for (const file of files) {
    if (isImage(file)) {
      const srcPath = path.join(albumPath, file);
      const destPath = path.join(GALLERIES_DIR, categoryId, albumId, file);
      
      // Optimize and copy image
      const result = optimizeImage(srcPath, destPath);
      
      if (result.success) {
        images.push({
          filename: file,
          src: `/images/galleries/${categoryId}/${albumId}/${file}`,
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

function processCategory(categoryName, categoryId) {
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
      
      const { images, totalSaved, optimizedCount } = scanAlbum(itemPath, categoryId, albumId);
      
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
        lines.push(`          { filename: '${img.filename}', src: '${img.src}' },`);
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
  console.log(`Settings: Max width ${MAX_WIDTH}px, JPEG quality ${JPEG_QUALITY}%`);
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
    const category = processCategory(categoryName, categoryId);
    
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
