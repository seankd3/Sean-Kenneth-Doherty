// Re-export from auto-generated config for backwards compatibility
export {
  categories,
  getCategoryById,
  getAlbumById,
} from './gallery-config-auto';

export type {
  CategoryConfig,
  AlbumConfig,
  GalleryImage,
} from './gallery-config-auto';

import { categories, getCategoryById } from './gallery-config-auto';
import type { GalleryImage as GalleryImageType } from './gallery-config-auto';
import { safeImageSrc } from './utils';

// Legacy mappings from IDs used in page files to build-gallery.js album IDs
const legacyMappings: Record<string, string> = {
  'aerospace-starbase-film': 'aerospace/starbase-film',
  'aerospace/astronauts-charlie-duke': 'aerospace/charlie-duke',
  'aerospace/astronauts-fred-haise': 'aerospace/fred-haise',
  'weddings-lauren-2024': 'weddings/lauren-elphin',
  'portraits-hillary-astrid': 'portraits/hillary-astrid',
  'portraits-blackbeltbbj': 'portraits/blackbeltbbj',
  'landscapes-american-landscapes': 'landscapes/american-landscapes',
  'landscapes-big-bend-film': 'landscapes/big-bend-film',
  'landscapes-costa-rica': 'landscapes/costa-rica',
  'abstract-from-above': 'abstract/from-above',
};

function findAlbum(albumId: string) {
  for (const cat of Object.values(categories)) {
    const album = cat.albums.find(a => a.id === albumId);
    if (album) return album;
  }
  const mappedId = legacyMappings[albumId] || albumId;
  if (mappedId !== albumId) {
    for (const cat of Object.values(categories)) {
      const album = cat.albums.find(a => a.id === mappedId);
      if (album) return album;
    }
  }
  return undefined;
}

/**
 * Get full image objects (with dimensions) for a gallery/album
 */
export function getGalleryImages(albumId: string): GalleryImageType[] {
  const album = findAlbum(albumId);
  if (!album) return [];
  return album.images.map((img) => ({
    ...img,
    src: safeImageSrc(img.src),
  }));
}

/**
 * Get image paths for a specific gallery/album (legacy, returns strings only)
 */
export function getGalleryImagePaths(albumId: string): string[] {
  return getGalleryImages(albumId).map(img => img.src);
}

/**
 * Get the first image object from a gallery/album
 */
export function getFirstGalleryImage(albumId: string): GalleryImageType | undefined {
  const images = getGalleryImages(albumId);
  return images[0];
}

/**
 * Get the first image src from a gallery/album (legacy)
 */
export function getFirstImage(albumId: string): string | undefined {
  return getFirstGalleryImage(albumId)?.src;
}

/**
 * Get all gallery IDs
 */
export function getAllGalleryIds(): string[] {
  const ids: string[] = [];
  
  for (const cat of Object.values(categories)) {
    for (const album of (cat as any).albums) {
      ids.push(album.id);
    }
  }
  
  return ids;
}

/**
 * Get gallery IDs for a specific category
 */
export function getCategoryGalleryIds(categoryId: string): string[] {
  const category = getCategoryById(categoryId);
  
  if (!category) return [];
  return category.albums.map(a => a.id);
}

// Legacy type aliases for backwards compatibility
export type GalleryConfig = import('./gallery-config-auto').CategoryConfig;
export type GalleryCategory = import('./gallery-config-auto').CategoryConfig;

// Backwards compatibility exports (empty arrays for old code that imported these)
export const weddingAlbums: any[] = [];
export const aerospaceGalleries: any[] = [];
export const landscapeAlbums: any[] = [];
export const eventGalleries: any[] = [];
export const portraitGalleries: any[] = [];
export const abstractGalleries: any[] = [];

// Export legacy image helpers that pages use
export const weddingHeroImage = '/images/hero/home-hero.webp';
export const homeHeroImage = '/images/hero/home-hero.webp';
export const homeAboutImage = getFirstImage('portraits/hillary-astrid') || '';

// Home page category cards — full portfolio surface
export const homeCategoryCards = [
  {
    title: 'Weddings',
    link: '/weddings',
    icon: 'Camera',
    image: getFirstImage('weddings/lauren-elphin') || getFirstImage('weddings/catskills-wedding') || '',
    description: 'Capturing your forever with timeless elegance',
  },
  {
    title: 'Aerospace',
    link: '/aerospace',
    icon: 'Rocket',
    image: getFirstImage('aerospace/starbase') || '',
    description: 'Documenting the new space age',
  },
  {
    title: 'Events',
    link: '/events',
    icon: 'Music',
    image: getFirstImage('events/beach-house-concert') || '',
    description: 'Capturing the energy of special occasions',
  },
  {
    title: 'Landscapes',
    link: '/landscapes',
    icon: 'Mountain',
    image: getFirstImage('landscapes/american-landscapes') || '',
    description: 'From dramatic vistas to intimate scenes',
  },
  {
    title: 'Portraits',
    link: '/portraits',
    icon: 'User',
    image: getFirstImage('portraits/hillary-astrid') || '',
    description: 'Character-driven portrait sessions',
  },
  {
    title: 'Abstract',
    link: '/abstract',
    icon: 'Sparkles',
    image: getFirstImage('abstract/from-above') || '',
    description: 'Form, light, and unexpected frames',
  },
];

// Portraits page helpers
export const portraitsHillaryAstridImages = getGalleryImagePaths('portraits/hillary-astrid');
export const portraitsBlackbeltImages = getGalleryImagePaths('portraits/blackbeltbbj');
export const portraitsHeroImage = getFirstImage('portraits/hillary-astrid') || '';

// Landscapes page helpers  
export const landscapesAmericanLandscapesImages = getGalleryImagePaths('landscapes/american-landscapes');
export const landscapesCostaRicaImages = getGalleryImagePaths('landscapes/costa-rica');

// Events page helpers
export const eventsBeachHouseImages = getGalleryImagePaths('events/beach-house-concert');
export const eventsFireDancerImages = getGalleryImagePaths('events/fire-dancer');

// Abstract page helpers
export const abstractFromAboveImages = getGalleryImagePaths('abstract/from-above');
