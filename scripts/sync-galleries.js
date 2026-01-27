#!/usr/bin/env node
/**
 * Gallery Sync Script
 * 
 * Scans public/images/galleries/ and generates gallery-config-auto.ts
 * - Reads EXIF data for date taken and camera settings
 * - Supports sub-galleries (nested folders)
 * - Preserves original filenames
 * - Optional YAML configuration per gallery
 */

const fs = require('fs');
const path = require('path');

// Resolve modules from app directory
const appDir = path.join(__dirname, '../app');
const ExifReader = require(path.join(appDir, 'node_modules/exifreader'));
const yaml = require(path.join(appDir, 'node_modules/yaml'));

const GALLERIES_DIR = path.join(appDir, 'public/images/galleries');
const OUTPUT_FILE = path.join(appDir, 'src/lib/gallery-config-auto.ts');

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];
const IGNORE = ['.gitkeep', 'node_modules'];

async function readExif(imagePath) {
  try {
    const buffer = fs.readFileSync(imagePath);
    const tags = ExifReader.load(buffer, { expanded: true });
    
    return {
      dateTaken: tags.exif?.DateTimeOriginal?.description || null,
      camera: tags.exif?.Make?.description || null,
      model: tags.exif?.Model?.description || null,
      iso: tags.exif?.ISOSpeedRatings?.value || null,
      aperture: tags.exif?.FNumber?.description || null,
      shutter: tags.exif?.ExposureTime?.description || null,
      focalLength: tags.exif?.FocalLength?.description || null,
    };
  } catch (e) {
    return {};
  }
}

function parseYaml(yamlPath) {
  try {
    if (fs.existsSync(yamlPath)) {
      return yaml.parse(fs.readFileSync(yamlPath, 'utf8'));
    }
  } catch (e) {
    console.warn('Warning: Could not parse ' + yamlPath + ':', e.message);
  }
  return {};
}

function isImage(filename) {
  const ext = path.extname(filename).toLowerCase();
  return IMAGE_EXTENSIONS.includes(ext) && !IGNORE.includes(filename) && !filename.startsWith('_');
}

function formatDate(dateStr) {
  if (!dateStr) return null;
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return null;
  }
}

async function scanGallery(galleryPath, galleryId, relativePath = '') {
  const configPath = path.join(galleryPath, '_gallery.yml');
  const config = parseYaml(configPath);
  
  const fullId = relativePath ? relativePath + '/' + galleryId : galleryId;
  
  const gallery = {
    id: fullId,
    path: '/images/galleries/' + fullId,
    title: config.title || galleryId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    description: config.description || '',
    layout: config.layout || 'masonry',
    sortBy: config.sortBy || 'dateTaken',
    sortDirection: config.sortDirection || 'asc',
    display: {
      metadata: config.display?.metadata ?? false,
      captions: config.display?.captions ?? false,
      exif: config.display?.exif ?? false,
    },
    images: [],
    subGalleries: [],
  };

  const items = fs.readdirSync(galleryPath);
  
  const coverPath = items.find(i => i.toLowerCase().startsWith('_cover'));
  const heroPath = items.find(i => i.toLowerCase().startsWith('_hero'));
  
  gallery.cover = config.cover || {};
  if (coverPath) gallery.cover.image = gallery.cover.image || coverPath;
  if (heroPath) gallery.heroImage = heroPath;

  for (const item of items) {
    const itemPath = path.join(galleryPath, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory() && !item.startsWith('.')) {
      const subGallery = await scanGallery(itemPath, item, fullId);
      gallery.subGalleries.push(subGallery);
    } else if (isImage(item)) {
      const exif = await readExif(itemPath);
      const manualMeta = config.images?.find(img => img.filename === item);
      
      gallery.images.push({
        filename: item,
        src: '/images/galleries/' + fullId + '/' + item,
        title: manualMeta?.title || (exif.dateTaken ? formatDate(exif.dateTaken) : null),
        location: manualMeta?.location || null,
        date: manualMeta?.date || exif.dateTaken || null,
        exif: gallery.display.exif ? {
          camera: exif.camera,
          model: exif.model,
          iso: exif.iso,
          aperture: exif.aperture,
          shutter: exif.shutter,
          focalLength: exif.focalLength,
        } : null,
      });
    }
  }

  gallery.images = sortImages(gallery.images, gallery.sortBy, gallery.sortDirection);
  return gallery;
}

function sortImages(images, sortBy, direction) {
  const sorted = [...images];
  
  switch (sortBy) {
    case 'dateTaken':
      sorted.sort((a, b) => {
        const dateA = a.date ? new Date(a.date) : new Date(0);
        const dateB = b.date ? new Date(b.date) : new Date(0);
        return direction === 'asc' ? dateA - dateB : dateB - dateA;
      });
      break;
    case 'filename':
      sorted.sort((a, b) => {
        return direction === 'asc' 
          ? a.filename.localeCompare(b.filename)
          : b.filename.localeCompare(a.filename);
      });
      break;
    case 'manual':
    default:
      break;
  }
  
  return sorted;
}

async function scanGlobalConfig() {
  const globalPath = path.join(GALLERIES_DIR, '_global.yml');
  const config = parseYaml(globalPath);
  
  return {
    heroes: config.heroes || {},
    categories: config.categories || {},
  };
}

function generateTypeScript(galleries, globalConfig) {
  const lines = [];
  lines.push('/**');
  lines.push(' * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY');
  lines.push(' * Run `npm run sync-galleries` to regenerate');
  lines.push(' */');
  lines.push('');
  lines.push('export interface GalleryImage {');
  lines.push('  filename: string;');
  lines.push('  src: string;');
  lines.push('  title: string | null;');
  lines.push('  location: string | null;');
  lines.push('  date: string | null;');
  lines.push('  exif: {');
  lines.push('    camera: string | null;');
  lines.push('    model: string | null;');
  lines.push('    iso: number | null;');
  lines.push('    aperture: string | null;');
  lines.push('    shutter: string | null;');
  lines.push('    focalLength: string | null;');
  lines.push('  } | null;');
  lines.push('}');
  lines.push('');
  lines.push('export interface GalleryConfig {');
  lines.push('  id: string;');
  lines.push('  path: string;');
  lines.push('  title: string;');
  lines.push('  description: string;');
  lines.push("  layout: 'grid' | 'masonry' | 'slideshow' | 'filmstrip';");
  lines.push("  sortBy: 'dateTaken' | 'filename' | 'manual';");
  lines.push("  sortDirection: 'asc' | 'desc';");
  lines.push('  display: {');
  lines.push('    metadata: boolean;');
  lines.push('    captions: boolean;');
  lines.push('    exif: boolean;');
  lines.push('  };');
  lines.push('  cover: {');
  lines.push('    image?: string;');
  lines.push('    title?: string;');
  lines.push("    crop?: 'center' | 'top' | 'bottom';");
  lines.push('  };');
  lines.push('  heroImage?: string;');
  lines.push('  images: GalleryImage[];');
  lines.push('  subGalleries: GalleryConfig[];');
  lines.push('}');
  lines.push('');
  lines.push('export interface GlobalConfig {');
  lines.push('  heroes: Record<string, {');
  lines.push('    image: string;');
  lines.push("    overlay?: 'dark' | 'light';");
  lines.push("    align?: 'center' | 'left' | 'right';");
  lines.push('    title?: string;');
  lines.push('  }>;');
  lines.push('  categories: Record<string, {');
  lines.push('    gallery?: string;');
  lines.push('    useCover?: boolean;');
  lines.push('    useHero?: boolean;');
  lines.push('  }>;');
  lines.push('}');
  lines.push('');
  lines.push('export const galleries: GalleryConfig[] = ' + JSON.stringify(galleries, null, 2) + ';');
  lines.push('');
  lines.push('export const globalConfig: GlobalConfig = ' + JSON.stringify(globalConfig, null, 2) + ';');
  lines.push('');
  lines.push('// Helper functions');
  lines.push('export function getGalleryById(id: string): GalleryConfig | undefined {');
  lines.push('  function findInGalleries(gals: GalleryConfig[]): GalleryConfig | undefined {');
  lines.push('    for (const g of gals) {');
  lines.push('      if (g.id === id) return g;');
  lines.push('      if (g.subGalleries.length > 0) {');
  lines.push('        const found = findInGalleries(g.subGalleries);');
  lines.push('        if (found) return found;');
  lines.push('      }');
  lines.push('    }');
  lines.push('    return undefined;');
  lines.push('  }');
  lines.push('  return findInGalleries(galleries);');
  lines.push('}');
  lines.push('');
  lines.push('export function getHeroImage(page: string): string | undefined {');
  lines.push('  return globalConfig.heroes[page]?.image;');
  lines.push('}');
  lines.push('');
  lines.push('export function getAllGalleryIds(): string[] {');
  lines.push('  function collectIds(gals: GalleryConfig[]): string[] {');
  lines.push('    return gals.flatMap(g => [g.id, ...collectIds(g.subGalleries)]);');
  lines.push('  }');
  lines.push('  return collectIds(galleries);');
  lines.push('}');
  
  return lines.join('\n');
}

async function generateConfig() {
  console.log('🖼️  Scanning galleries...\n');

  if (!fs.existsSync(GALLERIES_DIR)) {
    fs.mkdirSync(GALLERIES_DIR, { recursive: true });
    console.log('Created galleries directory');
  }

  const globalConfig = await scanGlobalConfig();
  const galleries = [];
  const items = fs.readdirSync(GALLERIES_DIR);
  
  for (const item of items) {
    const itemPath = path.join(GALLERIES_DIR, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory() && !item.startsWith('.')) {
      console.log('📁 Scanning: ' + item);
      const gallery = await scanGallery(itemPath, item);
      galleries.push(gallery);
      console.log('   ✓ Found ' + gallery.images.length + ' images');
      if (gallery.subGalleries.length > 0) {
        console.log('   ✓ Found ' + gallery.subGalleries.length + ' sub-galleries');
      }
    }
  }

  const output = generateTypeScript(galleries, globalConfig);
  fs.writeFileSync(OUTPUT_FILE, output);
  
  console.log('\n✅ Generated gallery-config-auto.ts');
  console.log('   ' + galleries.length + ' galleries');
  const totalImages = galleries.reduce((sum, g) => sum + g.images.length + g.subGalleries.reduce((s, sg) => s + sg.images.length, 0), 0);
  console.log('   ' + totalImages + ' total images');
}

generateConfig().catch(console.error);
