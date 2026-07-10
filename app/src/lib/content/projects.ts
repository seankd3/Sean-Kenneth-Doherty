import orbitalMechanicsUpdates from './project-updates/orbital-mechanics.json';

export type ProjectUpdate = {
  date: string;
  title: string;
  summary: string;
  commit?: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  status: string;
  summary: string;
  image: string;
  imageAlt: string;
  sourceUrl?: string;
  tags: string[];
  highlights: string[];
  updates: ProjectUpdate[];
  links?: ProjectLink[];
};

export const projectsPage = {
  title: 'Projects',
  subtitle: 'Working Projects',
  description:
    'A low-key index for software, simulation, and experimental tools that are still changing too quickly for the main portfolio.',
};

export const projects: Project[] = [
  {
    slug: 'photoarchive',
    title: 'photoArchive',
    eyebrow: 'Software / Self-hosted',
    status: 'In active use',
    summary:
      'A self-hosted photo cloud with Lightroom Classic instincts: Elo photo ranking, automatic stacks, local AI search over 47,000+ photos, private client galleries, and an installable phone app. Everything runs on my own hardware.',
    image: '/images/photoarchive/library-grid.jpg',
    imageAlt: 'photoArchive library grid showing a curated landscape collection with folder tree and ranking panels.',
    sourceUrl: 'https://github.com/Sean-Kenneth-Doherty/photo-archive',
    tags: ['FastAPI', 'SQLite', 'Local AI', 'Elo Ranking', 'PWA', 'Self-hosted'],
    highlights: [
      'Virtualized library grid that stays smooth at 50,000 photos.',
      'Elo ranking with uncertainty tracking instead of star ratings.',
      'Three fused search engines: metadata, vision embeddings, VLM captions — all on one consumer GPU.',
      'Password-protected client galleries with proofing and view analytics.',
    ],
    updates: [],
    links: [{ label: 'Feature tour', href: '/photoarchive' }],
  },
  {
    slug: 'orbital-mechanics',
    title: 'Orbital Mechanics',
    eyebrow: 'Simulation / Game',
    status: 'Active prototype',
    summary:
      'A retro CRT vector-display orbital mechanics game: Apollo-style CSM on patched-conic physics with maneuver nodes, trans-lunar flights to a kinematic Moon, and a green-phosphor mission-control console.',
    image: '/images/projects/orbital-mechanics.png',
    imageAlt: 'Orbital Mechanics showing a vector Earth map, spacecraft, maneuver node editor, and navball.',
    sourceUrl: 'https://github.com/Sean-Kenneth-Doherty/orbital-mechanics',
    tags: ['Three.js', 'Orbital Mechanics', 'Apollo', 'Vector UI', 'Game Prototype'],
    highlights: [
      'Patched-conic physics: RK4 + exact Kepler on-rails time warp, SOI handoff to a kinematic Moon.',
      'Maneuver node editor with TIG/prograde/normal/radial planning, predicted orbit, and finite auto-aligned burns.',
      'Apollo orbit-ops assists: attitude holds, solved TLI/CIRC burns, LOI/TEI, orbit checkpoints, navball.',
      'Real HYG star catalog and Natural Earth coastlines on a green-phosphor vector globe (Vite + TypeScript).',
    ],
    updates: orbitalMechanicsUpdates,
    links: [
      {
        label: 'Source',
        href: 'https://github.com/Sean-Kenneth-Doherty/orbital-mechanics',
      },
      {
        label: 'Build Log',
        href: 'https://github.com/Sean-Kenneth-Doherty/orbital-mechanics/commits/main',
      },
    ],
  },
];
