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
    getGalleryById('aerospace-starbase'),
    getGalleryById('aerospace-starbase-film'),
    getGalleryById('aerospace-astronauts'),
    getGalleryById('aerospace-astro'),
    getGalleryById('aerospace-lone-star-rallycross'),
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
    title: 'STARSHIP FLIGHT TESTS',
    status: 'DOCUMENTING',
    statusColor: 'bg-[#c41e3a]',
    description: 'Full-time documentation of SpaceX Starship program development and launches at Starbase, Texas. Capturing history as it happens.',
    specs: ['4K 120FPS', 'REMOTE CAMERA SYSTEMS', 'OFF-GRID DEPLOYMENTS', '4K 120FPS SLOW-MO'],
    image: getFirstImage('aerospace-starbase') || '/images/galleries/aerospace-starbase/aerospace_starbase_01.jpg',
  },
  {
    designation: 'NSF-LEAD',
    title: 'NASASPACEFLIGHT',
    status: 'COMPLETED',
    statusColor: 'bg-[#1a3a5c]',
    description: 'Lead cinematographer for major aerospace news media organization. Created content for YouTube, social media, and print.',
    specs: ['YOUTUBE CONTENT', 'SOCIAL MEDIA', 'PRINT MEDIA', 'LIVE COVERAGE'],
    image: getFirstImage('aerospace-starbase-film') || '/images/galleries/aerospace-starbase-film/aerospace_starbase_film_01.jpg',
  },
  {
    designation: 'ASTRO-LEG',
    title: 'APOLLO ASTRONAUTS',
    status: 'DOCUMENTING',
    statusColor: 'bg-[#c41e3a]',
    description: 'Portrait sessions with Apollo-era astronauts, preserving the legacy of America\'s lunar pioneers.',
    specs: ['PORTRAIT', 'HISTORICAL', '35MM FILM', 'ARCHIVAL'],
    image: getFirstImage('aerospace-astronauts-charlie-duke') || getFirstImage('aerospace-astronauts') || '/images/galleries/aerospace-astronauts/astronauts_01.jpg',
  },
  {
    designation: 'ASTRO-OBS',
    title: 'ASTRONOMY IMAGING',
    status: 'ACTIVE',
    statusColor: 'bg-[#1a3a5c]',
    description: 'Deep sky and planetary astrophotography from dark sky locations across the American Southwest.',
    specs: ['DEEP SKY', 'PLANETARY', 'TRACKING MOUNT', 'LONG EXPOSURE'],
    image: getFirstImage('aerospace-astro') || '/images/galleries/aerospace-astro/astro_01.jpg',
  },
  {
    designation: 'RACE-TX',
    title: 'LONE STAR RALLYCROSS',
    status: 'DOCUMENTING',
    statusColor: 'bg-[#c41e3a]',
    description: 'High-speed motorsport photography at rallycross events across Texas.',
    specs: ['MOTORSPORT', 'PANNING SHOTS', 'RALLY', 'ACTION'],
    image: getFirstImage('aerospace-lone-star-rallycross') || '/images/galleries/aerospace-lone-star-rallycross/lone_star_rallycross_01.jpg',
  },
];

export const aerospaceHeroImage = getFirstImage('aerospace-starbase') || '/images/galleries/aerospace-starbase/aerospace_starbase_01.jpg';

// ============================================================================
// EVENTS - All 120+ photos
// ============================================================================

export interface EventGalleryImage {
  src: string;
  title: string;
  category: string;
}

function getAllEventImages(): EventGalleryImage[] {
  const eventGalleryConfigs = [
    { id: 'events-beach-house', category: 'Concerts' },
    { id: 'events-fire-dancer', category: 'Performances' },
    { id: 'events', category: 'Events' },
  ];
  
  const images: EventGalleryImage[] = [];
  eventGalleryConfigs.forEach(({ id, category }) => {
    const g = getGalleryById(id);
    if (g && g.images) {
      g.images.forEach((img: { src: string; filename: string }) => {
        images.push({
          src: img.src,
          title: img.filename.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' '),
          category
        });
      });
    }
  });
  return images;
}

export const eventsGalleryImages = getAllEventImages();
export const eventsHeroImage = getFirstImage('events-beach-house') || '/images/galleries/events-beach-house/beach_house_2023_01.jpg';

// ============================================================================
// LANDSCAPES - All 300+ photos
// ============================================================================

export interface LandscapeGalleryImage {
  src: string;
  title: string;
  location: string;
}

function getAllLandscapeImages(): LandscapeGalleryImage[] {
  const landscapeGalleryConfigs = [
    { id: 'landscapes-american-landscapes', location: 'American West' },
    { id: 'landscapes-big-bend-film', location: 'Big Bend, TX' },
    { id: 'landscapes-costa-rica', location: 'Costa Rica' },
    { id: 'landscapes-new-york-winter', location: 'New York' },
    { id: 'landscapes-west', location: 'West' },
    { id: 'landscapes', location: 'Various' },
  ];
  
  const images: LandscapeGalleryImage[] = [];
  landscapeGalleryConfigs.forEach(({ id, location }) => {
    const g = getGalleryById(id);
    if (g && g.images) {
      g.images.forEach((img: { src: string; filename: string }) => {
        images.push({
          src: img.src,
          title: img.filename.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' '),
          location
        });
      });
    }
  });
  return images;
}

export const landscapesGalleryImages = getAllLandscapeImages();
export const landscapesHeroImage = getFirstImage('landscapes-american-landscapes') || '/images/galleries/landscapes-american-landscapes/american_landscapes_01.jpg';
export const landscapesFeatureImages = [
  getFirstImage('landscapes-big-bend-film') || '/images/galleries/landscapes-big-bend-film/big_bend_film_01.jpg',
  getFirstImage('landscapes-costa-rica') || '/images/galleries/landscapes-costa-rica/costa_rica_01.jpg',
];

// ============================================================================
// PORTRAITS - All 150+ photos
// ============================================================================

export interface PortraitGalleryImage {
  src: string;
  title: string;
  subject: string;
}

function getAllPortraitImages(): PortraitGalleryImage[] {
  const portraitGalleryConfigs = [
    { id: 'portraits-hillary-astrid', subject: 'Portrait' },
    { id: 'portraits-blackbeltbbj', subject: 'Martial Arts' },
  ];
  
  const images: PortraitGalleryImage[] = [];
  portraitGalleryConfigs.forEach(({ id, subject }) => {
    const g = getGalleryById(id);
    if (g && g.images) {
      g.images.forEach((img: { src: string; filename: string }) => {
        images.push({
          src: img.src,
          title: img.filename.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' '),
          subject
        });
      });
    }
  });
  return images;
}

export const portraitsGalleryImages = getAllPortraitImages();
export const portraitsHeroImage = getFirstImage('portraits-hillary-astrid') || '/images/galleries/portraits-hillary-astrid/hillary_astrid_01.jpg';

// ============================================================================
// ABSTRACT - All 130+ photos
// ============================================================================

export const abstractGalleryImages = getGalleryImagePaths('abstract');
export const abstractFromAboveImages = getGalleryImagePaths('abstract-from-above');
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
export const homeAboutImage = getFirstImage('aerospace-starbase-film') || aerospaceHeroImage;
