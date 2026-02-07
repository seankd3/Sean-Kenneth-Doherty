/**
 * Album metadata for all gallery pages.
 * Edit this file to update album titles, descriptions, locations, and dates.
 * Image paths are resolved automatically from the gallery config system.
 */

// ─── WEDDING ALBUMS ────────────────────────────────────────────────────────────

export const weddingAlbums = [
  {
    id: 'catskills-wedding',
    galleryId: 'weddings/catskills-wedding',
    title: 'Catskills Wedding',
    description:
      'A magical autumn celebration at a mountaintop estate in the Catskills, surrounded by vibrant fall foliage and panoramic valley views.',
    location: 'Catskills, NY',
    date: 'October 2023',
  },
  {
    id: 'hudson-valley-wedding',
    galleryId: 'weddings/hudson-valley-wedding',
    title: 'Hudson Valley Wedding',
    description:
      'An elegant garden ceremony and barn reception set against the rolling hills and historic charm of the Hudson Valley.',
    location: 'Hudson Valley, NY',
    date: 'September 2023',
  },
  {
    id: 'lauren-elphin',
    galleryId: 'weddings/lauren-elphin',
    title: 'Lauren & Elphin',
    description:
      'An intimate lakeside ceremony with golden-hour portraits and a joyful reception under string lights.',
    location: 'Austin, TX',
    date: 'March 2024',
  },
  {
    id: 'nicole-kawame',
    galleryId: 'weddings/nicole-kawame',
    title: 'Nicole & Kawame',
    description:
      'A vibrant celebration blending cultural traditions with modern elegance, filled with color, music, and heartfelt moments.',
    location: 'Austin, TX',
    date: 'May 2024',
  },
  {
    id: 'rachel-andrew',
    galleryId: 'weddings/rachel-andrew',
    title: 'Rachel & Andrew',
    description:
      'A romantic hilltop wedding at sunset with sweeping views of the Texas Hill Country and a lively outdoor reception.',
    location: 'Dripping Springs, TX',
    date: 'April 2024',
  },
];

// ─── AEROSPACE ALBUMS ──────────────────────────────────────────────────────────

export const aerospaceAlbums = [
  {
    id: 'starbase',
    galleryId: 'aerospace/starbase',
    designation: 'TX-STARBASE',
    title: 'STARBASE',
    description:
      'Full-time documentation of SpaceX Starship program development and launches at Starbase, Texas.',
    status: 'ACTIVE',
    statusColor: 'bg-[#c41e3a]',
    specs: ['4K VIDEO', 'REMOTE CAMERAS', 'LAUNCH COVERAGE'],
  },
  {
    id: 'starbase-film',
    galleryId: 'aerospace-starbase-film',
    designation: 'TX-FILM',
    title: 'STARBASE FILM',
    description:
      '35mm and 120mm film photography documenting the Starship program through analog photography.',
    status: 'DOCUMENTING',
    statusColor: 'bg-[#1a3a5c]',
    specs: ['35MM FILM', '120MM FILM', 'KODAK', 'PORTRA'],
  },
  {
    id: 'astro',
    galleryId: 'aerospace/astro',
    designation: 'ASTRO-OBS',
    title: 'ASTRO',
    description:
      'Deep sky and planetary astrophotography from dark sky locations across the American Southwest.',
    status: 'ACTIVE',
    statusColor: 'bg-[#c41e3a]',
    specs: ['DEEP SKY', 'PLANETARY', 'TRACKING MOUNT'],
  },
  {
    id: 'charlie-duke',
    galleryId: 'aerospace/astronauts-charlie-duke',
    designation: 'NASA-APOLLO-16',
    title: 'CHARLIE DUKE',
    description:
      'Portrait session with Apollo 16 astronaut Charlie Duke, the tenth person to walk on the Moon.',
    status: 'ARCHIVE',
    statusColor: 'bg-[#1a3a5c]',
    specs: ['PORTRAIT', 'HISTORICAL', 'APOLLO 16'],
  },
  {
    id: 'fred-haise',
    galleryId: 'aerospace/astronauts-fred-haise',
    designation: 'NASA-APOLLO-13',
    title: 'FRED HAISE',
    description:
      'Portrait session with Apollo 13 astronaut Fred Haise, lunar module pilot of the legendary rescue mission.',
    status: 'ARCHIVE',
    statusColor: 'bg-[#1a3a5c]',
    specs: ['PORTRAIT', 'HISTORICAL', 'APOLLO 13'],
  },
  {
    id: 'lone-star-rallycross',
    galleryId: 'aerospace/lone-star-rallycross',
    designation: 'RACE-TX',
    title: 'LONE STAR RALLYCROSS',
    description:
      'High-speed motorsport photography at rallycross events across Texas.',
    status: 'DOCUMENTING',
    statusColor: 'bg-[#1a3a5c]',
    specs: ['MOTORSPORT', 'PANNING SHOTS', 'RALLY'],
  },
];

// ─── EVENT ALBUMS ──────────────────────────────────────────────────────────────

export const eventAlbums = [
  {
    id: 'beach-house-concert',
    galleryId: 'events/beach-house-concert',
    title: 'Beach House Concert',
    description:
      'Live music photography capturing the ethereal atmosphere and luminous stage presence of Beach House in concert.',
    location: 'Austin, TX',
    date: '2023',
  },
  {
    id: 'fire-dancer',
    galleryId: 'events/fire-dancer',
    title: 'Fire Dancer',
    description:
      'Dynamic fire performance photography with dramatic long-exposure lighting and motion.',
    location: 'South Padre Island, TX',
    date: '2022',
  },
];

// ─── LANDSCAPE ALBUMS ──────────────────────────────────────────────────────────

export const landscapeAlbums = [
  {
    id: 'american-landscapes',
    galleryId: 'landscapes-american-landscapes',
    title: 'American Landscapes',
    description:
      'The vast beauty of the American West -- from desert mesas to mountain passes, captured in golden light.',
    location: 'American West',
  },
  {
    id: 'big-bend-film',
    galleryId: 'landscapes-big-bend-film',
    title: 'Big Bend Film',
    description:
      'Dramatic desert landscapes captured on 35mm film at Big Bend National Park along the Rio Grande.',
    location: 'Big Bend, TX',
  },
  {
    id: 'costa-rica',
    galleryId: 'landscapes-costa-rica',
    title: 'Costa Rica',
    description:
      'Lush tropical rainforests, volcanic peaks, and vibrant Pacific coastline of Costa Rica.',
    location: 'Costa Rica',
  },
  {
    id: 'hudson-valley',
    galleryId: 'landscapes/hudson-valley',
    title: 'Hudson Valley',
    description:
      'Snow-covered forests, frozen rivers, and quiet winter scenes from the Hudson Valley region of New York.',
    location: 'Hudson Valley, NY',
  },
];

// ─── PORTRAIT ALBUMS ───────────────────────────────────────────────────────────

export const portraitAlbums = [
  {
    id: 'hillary-astrid',
    galleryId: 'portraits/hillary-astrid',
    legacyId: 'portraits-hillary-astrid',
    title: 'Hillary & Astrid',
    description:
      'Artistic portrait session capturing the warmth and connection between Hillary and Astrid in natural light.',
    category: 'Portrait',
  },
  {
    id: 'blackbeltbbj',
    galleryId: 'portraits/blackbeltbbj',
    legacyId: 'portraits-blackbeltbbj',
    title: 'Blackbelt BBJ',
    description:
      'Martial arts photography showcasing discipline, intensity, and focus -- dynamic portraits of practitioners in action.',
    category: 'Martial Arts',
  },
];

// ─── ABSTRACT ALBUMS ───────────────────────────────────────────────────────────

export const abstractAlbums = [
  {
    id: 'abstract',
    galleryId: 'abstract',
    title: 'Abstract',
    description:
      'Abstract photography exploring form, color, and texture in the everyday world.',
  },
  {
    id: 'from-above',
    galleryId: 'abstract-from-above',
    title: 'From Above',
    description:
      'Aerial perspectives revealing hidden patterns, textures, and geometry from above.',
  },
];
