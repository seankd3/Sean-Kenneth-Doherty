/**
 * Page-level content: hero text, CTAs, section copy.
 * Edit this file to update any text that appears on specific pages.
 */

// ─── HOME PAGE ─────────────────────────────────────────────────────────────────

export const homePage = {
  hero: {
    subtitle: 'Photography & Cinematography',
    title: 'Sean Kenneth Doherty',
    description:
      'Capturing timeless moments through a lens of artistry and emotion. From intimate weddings to rocket launches.',
    cta: 'View My Work',
    ctaSecondary: 'Get In Touch',
  },
  categories: [
    {
      title: 'Weddings',
      link: '/weddings',
      icon: 'Camera' as const,
      description: 'Capturing your forever with timeless elegance',
    },
    {
      title: 'Aerospace',
      link: '/aerospace',
      icon: 'Rocket' as const,
      description: 'Documenting the new space age',
    },
    {
      title: 'Events',
      link: '/events',
      icon: 'Music' as const,
      description: 'Capturing the energy of special occasions',
    },
    {
      title: 'Landscapes',
      link: '/landscapes',
      icon: 'Mountain' as const,
      description: 'From dramatic vistas to intimate scenes',
    },
  ],
  about: {
    title: 'The Story Behind the Lens',
    paragraphs: [
      "Photography has been part of my life since I first picked up a camera shooting home movies with my grandfather. What started as childhood curiosity became a lifelong passion for visual storytelling.",
      "As lead cinematographer for NASASpaceflight, I document SpaceX's Starship program at Starbase, Texas -- capturing the raw power of rocket launches and the meticulous engineering behind humanity's reach for the stars.",
      "When I'm not at the launch pad, I bring that same eye for detail and dramatic storytelling to weddings, portraits, and events. Every shoot is a chance to find the extraordinary in the moment.",
    ],
  },
  stats: [
    { value: '50+', label: 'Weddings Captured' },
    { value: '15+', label: 'Launches Documented' },
    { value: '8+', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' },
  ],
};

// ─── WEDDINGS PAGE ─────────────────────────────────────────────────────────────

const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;
const bookingSeason = `${currentYear}-${nextYear}`;

export const weddingsPage = {
  hero: {
    subtitle: 'Wedding Photography & Cinematography',
    title: 'Your Story, Beautifully Told',
    description:
      'Every love story is unique. I capture the authentic emotions, stolen glances, and joyful celebrations that make your day unforgettable.',
  },
  cta: {
    title: 'Begin Your Story',
    description:
      `Now booking ${bookingSeason} weddings. Let\u2019s create something beautiful together \u2014 I\u2019d love to hear about your plans and how we can capture your day.`,
    buttonText: 'Check Availability',
    bookingSeason,
  },
};

// ─── AEROSPACE PAGE ────────────────────────────────────────────────────────────

export const aerospacePage = {
  hero: {
    badge: 'SPACE GRADE // UNCLASSIFIED',
    title: 'AEROSPACE',
    subtitle: "// DOCUMENTING HUMANITY'S REACH FOR THE STARS",
    tagline: 'PHOTOGRAPHY // CINEMATOGRAPHY // DOCUMENTATION',
  },
  missionControl: {
    location: 'STARBASE, TX',
    status: 'ACTIVE',
    experience: '2+ YEARS',
    classification: 'UNCLASSIFIED',
  },
  stats: [
    { label: 'LAUNCHES DOCUMENTED', target: 8 },
    { label: 'PHOTOS CAPTURED', target: 75000 },
    { label: 'REMOTE CAMERAS', target: 6 },
    { label: 'YEARS AT STARBASE', target: 2 },
  ],
  equipment: [
    { code: 'CAM-01', name: 'Canon R5', type: 'PRIMARY BODY', status: 'ACTIVE' },
    { code: 'CAM-02', name: 'Canon RP', type: 'REMOTE BODY', status: 'ACTIVE' },
    { code: 'CAM-03', name: 'Canon A-1', type: '35MM FILM', status: 'DESTROYED' },
    { code: 'CAM-04', name: 'Minolta Maxxium 5000', type: '35MM FILM', status: 'ACTIVE' },
    { code: 'CAM-05', name: 'Polaroid Now+', type: 'INSTANT FILM', status: 'ACTIVE' },
    { code: 'LENS-01', name: 'RF 85mm f/1.2L', type: 'PRIME', status: 'ACTIVE' },
    { code: 'LENS-02', name: 'RF 50mm f/1.8', type: 'PRIME', status: 'ACTIVE' },
    { code: 'LENS-03', name: 'RF 24-105mm f/4L', type: 'STANDARD ZOOM', status: 'ACTIVE' },
    { code: 'LENS-04', name: 'RF 500mm f/6.3', type: 'SUPER TELEPHOTO', status: 'ACTIVE' },
    { code: 'LENS-05', name: 'Helios 44-2 f/2', type: 'VINTAGE PRIME', status: 'ACTIVE' },
  ],
  cta: {
    badge: 'AVAILABLE FOR ASSIGNMENT',
    title: 'READY FOR',
    titleAccent: 'LAUNCH',
    description:
      'Available for aerospace documentation, launch coverage, and technical photography projects.',
    buttonText: 'INITIATE CONTACT',
  },
};

// ─── EVENTS PAGE ───────────────────────────────────────────────────────────────

export const eventsPage = {
  hero: {
    subtitle: 'Live Events',
    title: 'Capturing the',
    titleAccent: 'Energy',
    description: 'Concerts, performances, and live events frozen in time',
  },
  cta: {
    title: "Let's Capture Your",
    titleAccent: 'Event',
    description:
      'Available for concerts, performances, corporate events, and private celebrations.',
    buttonText: 'Book Now',
  },
};

// ─── LANDSCAPES PAGE ───────────────────────────────────────────────────────────

export const landscapesPage = {
  hero: {
    subtitle: 'Landscape Photography',
    title: 'American',
    titleAccent: 'Landscapes',
    description:
      'The beauty of the American Southwest and beyond, captured in golden light',
  },
  cta: {
    title: 'Fine Art',
    titleAccent: 'Prints',
    description:
      'Bring the beauty of the American landscape into your home or office. Limited edition prints available on archival paper and metal.',
    buttonText: 'Inquire About Prints',
  },
};

// ─── PORTRAITS PAGE ────────────────────────────────────────────────────────────

export const portraitsPage = {
  hero: {
    subtitle: 'Portrait Photography',
    title: 'Capturing',
    titleAccent: 'Character',
    description:
      'Professional and artistic portraits that reveal the essence of each subject',
  },
  cta: {
    title: 'Book a',
    titleAccent: 'Session',
    description:
      "Ready to capture your story? Let's create portraits that you'll treasure for years to come.",
    buttonText: 'Inquire Now',
  },
};

// ─── ABSTRACT PAGE ─────────────────────────────────────────────────────────────

export const abstractPage = {
  hero: {
    subtitle: 'Abstract Photography',
    title: 'Beyond the',
    titleAccent: 'Literal',
    description:
      'Exploring form, color, texture, and the spaces between',
  },
  cta: {
    title: 'See the World',
    titleAccent: 'Differently',
    description:
      'Abstract photography challenges perception and invites new ways of seeing.',
    buttonText: 'Get In Touch',
  },
};

// ─── CONTACT PAGE ──────────────────────────────────────────────────────────────

export const contactPage = {
  hero: {
    subtitle: "Let's Work Together",
    title: 'Get In',
    titleAccent: 'Touch',
    description:
      "Have a project in mind? I'd love to hear about it. Fill out the form below and I'll get back to you as soon as possible.",
  },
  form: {
    eventTypes: [
      'Wedding',
      'Elopement',
      'Engagement',
      'Portrait Session',
      'Corporate Event',
      'Concert/Festival',
      'Aerospace/Commercial',
      'Other',
    ],
  },
};
