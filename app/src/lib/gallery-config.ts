/**
 * Gallery Configuration
 * 
 * This file re-exports from the auto-generated config.
 * Run `npm run sync-galleries` to regenerate after adding photos.
 */

import {
  galleries,
  globalConfig,
  getGalleryById,
  getHeroImage,
  getAllGalleryIds,
  type GalleryImage,
  type GalleryConfig,
  type GlobalConfig
} from './gallery-config-auto';

export {
  galleries,
  globalConfig,
  getGalleryById,
  getHeroImage,
  getAllGalleryIds,
  type GalleryImage,
  type GalleryConfig,
  type GlobalConfig
};

// Helper function to get images from a gallery as simple strings
export function getGalleryImagePaths(galleryId: string): string[] {
  const gallery = getGalleryById(galleryId);
  if (!gallery) return [];
  return gallery.images.map((img: { src: string }) => img.src);
}

// Helper function to get a hero image from the first available image
export function getFirstImage(galleryId: string): string | undefined {
  const gallery = getGalleryById(galleryId);
  if (!gallery || gallery.images.length === 0) return undefined;
  return gallery.images[0].src;
}

// ============================================================================
// WEDDINGS - All 145+ photos
// ============================================================================

export const weddingGalleryImages = getGalleryImagePaths('weddings');
export const weddingHeroImage = getFirstImage('weddings') || '/images/galleries/weddings/lauren_elphin-0003.jpg';
export const weddingFeatureImages = [
  getFirstImage('weddings-lauren-2024') || '/images/galleries/weddings-lauren-2024/lauren_elphin.jpg',
  getFirstImage('weddings') || '/images/galleries/weddings/lauren_elphin-0003.jpg',
];

// ============================================================================
// AEROSPACE - All 400+ photos across sub-galleries
// ============================================================================

export interface AerospaceGalleryImage {
  src: string;
  title: string;
  params: string;
}

// Get all aerospace images combined
function getAllAerospaceImages(): AerospaceGalleryImage[] {
  const aerospaceGalleries = [
    getGalleryById('aerospace/starbase'),
    getGalleryById('aerospace/astro'),
    getGalleryById('aerospace/astronauts-charlie-duke'),
    getGalleryById('aerospace/astronauts-fred-haise'),
    getGalleryById('aerospace/rallycross'),
  ].filter((g): g is GalleryConfig => g !== undefined);
  
  const images: AerospaceGalleryImage[] = [];
  aerospaceGalleries.forEach((g) => {
    if (g && g.images) {
      g.images.forEach((img, idx) => {
        images.push({
          src: img.src,
          title: img.filename.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' ').toUpperCase(),
          params: `IMG-${String(idx + 1).padStart(3, '0')}`
        });
      });
    }
  });
  return images;
}

export const aerospaceGalleryImages = getAllAerospaceImages();

export interface AerospaceProject {
  designation: string;
  title: string;
  status: string;
  statusColor: string;
  description: string;
  specs: string[];
  image: string;
}

export const aerospaceProjects: AerospaceProject[] = [
  {
    designation: 'TX-STARBASE',
    title: 'STARBASE OPERATIONS',
    status: 'ACTIVE',
    statusColor: 'bg-[#c41e3a]',
    description: 'Full-time documentation of SpaceX Starship program development and launches at Starbase, Texas. Capturing history as it happens.',
    specs: ['4K VIDEO', 'REMOTE CAMERAS', 'LAUNCH COVERAGE', 'PAD DOCUMENTATION'],
    image: getFirstImage('aerospace/starbase') || '',
  },
  {
    designation: 'ASTRO-OBS',
    title: 'ASTRONOMY IMAGING',
    status: 'ACTIVE',
    statusColor: 'bg-[#c41e3a]',
    description: 'Deep sky and planetary astrophotography from dark sky locations across the American Southwest.',
    specs: ['DEEP SKY', 'PLANETARY', 'TRACKING MOUNT', 'LONG EXPOSURE'],
    image: getFirstImage('aerospace/astro') || '',
  },
  {
    designation: 'NASA-APOLLO-16',
    title: 'CHARLIE DUKE',
    status: 'ARCHIVE',
    statusColor: 'bg-[#1a3a5c]',
    description: 'Portrait session with Apollo 16 astronaut Charlie Duke, the tenth person to walk on the Moon.',
    specs: ['PORTRAIT', 'HISTORICAL', '35MM FILM', 'APOLLO 16'],
    image: getFirstImage('aerospace/astronauts-charlie-duke') || '',
  },
  {
    designation: 'NASA-APOLLO-13',
    title: 'FRED HAISE',
    status: 'ARCHIVE',
    statusColor: 'bg-[#1a3a5c]',
    description: 'Portrait session with Apollo 13 astronaut Fred Haise.',
    specs: ['PORTRAIT', 'HISTORICAL', '35MM FILM', 'APOLLO 13'],
    image: getFirstImage('aerospace/astronauts-fred-haise') || '',
  },
  {
    designation: 'RACE-TX',
    title: 'LONE STAR RALLYCROSS',
    status: 'DOCUMENTING',
    statusColor: 'bg-[#1a3a5c]',
    description: 'High-speed motorsport photography at rallycross events across Texas.',
    specs: ['MOTORSPORT', 'PANNING SHOTS', 'RALLY', 'ACTION'],
    image: getFirstImage('aerospace/rallycross') || '',
  },
];

export const aerospaceHeroImage = getFirstImage('aerospace/starbase') || '';

// ============================================================================
// EVENTS - All 120+ photos
// ============================================================================

// Sub-gallery exports for Events
export const eventsBeachHouseImages = getGalleryImagePaths('events/beach-house');
export const eventsFireDancerImages = getGalleryImagePaths('events/fire-dancer');
export const eventsHeroImage = getFirstImage('events/beach-house') || '/images/galleries/events/beach-house/Beach House Concert-10.jpg';

// ============================================================================
// LANDSCAPES - Flat gallery (no sub-folders)
// ============================================================================

export const landscapesGalleryImages = getGalleryImagePaths('landscapes');
export const landscapesHeroImage = getFirstImage('landscapes') || '';

// ============================================================================
// PORTRAITS - Organized by subject
// ============================================================================

// Sub-gallery exports for Portraits (using flat structure until migrated)
export const portraitsHillaryAstridImages = getGalleryImagePaths('portraits-hillary-astrid');
export const portraitsBlackbeltImages = getGalleryImagePaths('portraits-blackbeltbbj');
export const portraitsHeroImage = getFirstImage('portraits-hillary-astrid') || '';

// ============================================================================
// ABSTRACT - All 130+ photos
// ============================================================================

// Sub-gallery exports for Abstract
export const abstractMainImages = getGalleryImagePaths('abstract');
export const abstractFromAboveImages = getGalleryImagePaths('abstract-from-above');
export const abstractGalleryImages = abstractMainImages; // backward compat
export const abstractHeroImage = getFirstImage('abstract') || '/images/galleries/abstract/abstract_01.jpg';

// ============================================================================
// HOME PAGE
// ============================================================================

export interface CategoryCard {
  title: string;
  description: string;
  image: string;
  link: string;
  icon: string;
}

export const homeCategoryCards: CategoryCard[] = [
  {
    title: 'Weddings',
    description: 'Capturing your most precious moments with elegance and emotion.',
    image: weddingHeroImage,
    link: '/weddings',
    icon: 'Camera',
  },
  {
    title: 'Aerospace',
    description: 'Documenting humanity\'s reach for the stars.',
    image: aerospaceHeroImage,
    link: '/aerospace',
    icon: 'Rocket',
  },
  {
    title: 'Live Events',
    description: 'High-energy concert and event photography.',
    image: eventsHeroImage,
    link: '/events',
    icon: 'Music',
  },
  {
    title: 'Landscapes',
    description: 'The beauty of the American Southwest and beyond.',
    image: landscapesHeroImage,
    link: '/landscapes',
    icon: 'Mountain',
  },
  {
    title: 'Portraits',
    description: 'Professional and artistic portrait photography.',
    image: portraitsHeroImage,
    link: '/portraits',
    icon: 'User',
  },
  {
    title: 'Abstract',
    description: 'Experimental photography exploring form, color, and texture.',
    image: abstractHeroImage,
    link: '/abstract',
    icon: 'Sparkles',
  },
];

export const homeHeroImage = aerospaceHeroImage;
export const homeAboutImage = getFirstImage('aerospace/starbase') || aerospaceHeroImage;
