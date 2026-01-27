/**
 * Gallery Configuration
 * 
 * Central location for managing all gallery images.
 * Edit this file to add, remove, or modify photos.
 */

// ============================================================================
// WEDDINGS - 11 Photos
// ============================================================================

export const weddingGalleryImages = [
  '/images/weddings/wedding-hero.jpg',
  '/images/weddings/wedding-1.jpg',
  '/images/weddings/wedding-2.jpg',
  '/images/weddings/wedding-3.jpg',
  '/images/weddings/wedding-4.jpg',
  '/images/weddings/wedding-5.jpg',
  '/images/weddings/wedding-6.jpg',
  '/images/weddings/wedding-7.jpg',
  '/images/weddings/wedding-8.jpg',
  '/images/weddings/wedding-9.jpg',
  '/images/weddings/wedding-10.jpg',
  '/images/weddings/wedding-11.jpg',
];

export const weddingHeroImage = '/images/weddings/wedding-hero.jpg';

export const weddingFeatureImages = [
  '/images/weddings/wedding-1.jpg',
  '/images/weddings/wedding-3.jpg',
];

// ============================================================================
// AEROSPACE - 8 Photos
// ============================================================================

export interface AerospaceGalleryImage {
  src: string;
  title: string;
  params: string;
}

export const aerospaceGalleryImages: AerospaceGalleryImage[] = [
  { src: '/images/aerospace/aerospace-hero.jpg', title: 'STARBASE AT DUSK', params: 'ISO 400 | f/5.6 | 1/250s' },
  { src: '/images/aerospace/aerospace-1.jpg', title: 'NIGHT LAUNCH', params: 'ISO 800 | f/2.8 | 1/500s' },
  { src: '/images/aerospace/aerospace-2.jpg', title: 'STARSHIP ON PAD', params: 'ISO 100 | f/8 | 1/250s' },
  { src: '/images/aerospace/aerospace-3.jpg', title: 'ENGINE TEST', params: 'ISO 400 | f/4 | 1/1000s' },
  { src: '/images/aerospace/aerospace-4.jpg', title: 'OCEAN LANDING', params: 'ISO 200 | f/5.6 | 1/500s' },
  { src: '/images/aerospace/aerospace-5.jpg', title: 'STATIC FIRE', params: 'ISO 100 | f/11 | 1/2000s' },
  { src: '/images/aerospace/aerospace-6.jpg', title: 'FLIGHT 9', params: 'ISO 200 | f/5.6 | 1/1000s' },
  { src: '/images/aerospace/aerospace-7.jpg', title: 'STARBASE SUNSET', params: 'ISO 100 | f/8 | 1/125s' },
];

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
    image: '/images/aerospace/aerospace-hero.jpg',
  },
  {
    designation: 'NSF-LEAD',
    title: 'NASASPACEFLIGHT',
    status: 'COMPLETED',
    statusColor: 'bg-[#1a3a5c]',
    description: 'Lead cinematographer for major aerospace news media organization. Created content for YouTube, social media, and print.',
    specs: ['YOUTUBE CONTENT', 'SOCIAL MEDIA', 'PRINT MEDIA', 'LIVE COVERAGE'],
    image: '/images/aerospace/aerospace-2.jpg',
  },
  {
    designation: 'SPX-TECH',
    title: 'SPACEX AVIONICS',
    status: 'COMPLETED',
    statusColor: 'bg-[#1a3a5c]',
    description: 'Built and tested Starship spacecraft avionics harnesses. Interpreted technical manuals, schematics, and blueprints.',
    specs: ['MIL-PRF-38535', 'HARNESS ASSEMBLY', 'QUALITY ASSURANCE', 'TECHNICAL DOCS'],
    image: '/images/aerospace/aerospace-4.jpg',
  },
];

export const aerospaceHeroImage = '/images/aerospace/aerospace-hero.jpg';

// ============================================================================
// EVENTS - 5 Photos
// ============================================================================

export interface EventGalleryImage {
  src: string;
  title: string;
  category: string;
}

export const eventsGalleryImages: EventGalleryImage[] = [
  { src: '/images/events/events-hero.jpg', title: 'Beach House Concert', category: 'Concerts' },
  { src: '/images/events/event-1.jpg', title: 'Live Performance', category: 'Concerts' },
  { src: '/images/events/event-2.jpg', title: 'Festival Crowd', category: 'Festivals' },
  { src: '/images/events/event-3.jpg', title: 'Fire Performance', category: 'Performances' },
  { src: '/images/events/event-4.jpg', title: 'Fire Dancer', category: 'Performances' },
];

export const eventsHeroImage = '/images/events/events-hero.jpg';

// ============================================================================
// LANDSCAPES - 8 Photos
// ============================================================================

export interface LandscapeGalleryImage {
  src: string;
  title: string;
  location: string;
}

export const landscapesGalleryImages: LandscapeGalleryImage[] = [
  { src: '/images/landscapes/landscapes-hero.jpg', title: 'American West', location: 'Arizona/Utah' },
  { src: '/images/landscapes/landscape-1.jpg', title: 'Desert Vista', location: 'Arizona' },
  { src: '/images/landscapes/landscape-2.jpg', title: 'Mountain Range', location: 'Utah' },
  { src: '/images/landscapes/landscape-3.jpg', title: 'Golden Hour', location: 'West Texas' },
  { src: '/images/landscapes/landscape-4.jpg', title: 'Big Bend', location: 'Texas' },
  { src: '/images/landscapes/landscape-5.jpg', title: 'Chisos Mountains', location: 'Big Bend, TX' },
  { src: '/images/landscapes/landscape-6.jpg', title: 'Desert Road', location: 'Texas' },
  { src: '/images/landscapes/landscape-7.jpg', title: 'Sunset Vista', location: 'Big Bend' },
];

export const landscapesHeroImage = '/images/landscapes/landscapes-hero.jpg';

export const landscapesFeatureImages = [
  '/images/landscapes/landscape-1.jpg',
  '/images/landscapes/landscape-2.jpg',
];

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
];

export const homeHeroImage = aerospaceHeroImage;
export const homeAboutImage = '/images/aerospace/aerospace-1.jpg';
