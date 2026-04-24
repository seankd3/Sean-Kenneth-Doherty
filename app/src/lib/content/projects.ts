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
    slug: 'orbital-mechanics',
    title: 'Orbital Mechanics',
    eyebrow: 'Simulation / Game',
    status: 'Active prototype',
    summary:
      'A realistic orbital mechanics game with clean 1960s mission-control vector graphics, Apollo-inspired cockpit telemetry, maneuver planning, and physically grounded spacecraft behavior.',
    image: '/images/projects/orbital-mechanics.png',
    imageAlt: 'Orbital Mechanics showing a vector Earth map, spacecraft, maneuver node editor, and navball.',
    sourceUrl: 'https://github.com/Sean-Kenneth-Doherty/orbital-mechanics',
    tags: ['Three.js', 'Orbital Mechanics', 'Apollo', 'Vector UI', 'Game Prototype'],
    highlights: [
      'Clean CRT-ready vector rendering without fake scanline or bloom effects.',
      'Apollo-style telemetry, DSKY command panel, and simplified navball instruments.',
      'MechJeb-style maneuver node editor with prograde, normal, radial, TIG, AP/PE placement, predicted orbit, and burn timing.',
      'Real bright-star catalog rendering and Earth coastlines/grid for spatial reference.',
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
