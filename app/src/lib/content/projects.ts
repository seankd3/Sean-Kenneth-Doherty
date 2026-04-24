export type ProjectUpdate = {
  date: string;
  title: string;
  summary: string;
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
  tags: string[];
  highlights: string[];
  updates: ProjectUpdate[];
  links?: ProjectLink[];
};

export const projectsPage = {
  title: 'Projects',
  subtitle: 'Private working notes for active builds.',
  description:
    'A quiet page for software, simulation, and experimental tools that are still changing too quickly for the main portfolio.',
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
    tags: ['Three.js', 'Orbital Mechanics', 'Apollo', 'Vector UI', 'Game Prototype'],
    highlights: [
      'Clean CRT-ready vector rendering without fake scanline or bloom effects.',
      'Apollo-style telemetry, DSKY command panel, and simplified navball instruments.',
      'MechJeb-style maneuver node editor with prograde, normal, radial, TIG, AP/PE placement, predicted orbit, and burn timing.',
      'Real bright-star catalog rendering and Earth coastlines/grid for spatial reference.',
    ],
    updates: [
      {
        date: '2026-04-24',
        title: 'Maneuver Alignment Guidance',
        summary:
          'Added burn-vector alignment guidance, ignition timing, and pointing error readouts so planned nodes connect directly to spacecraft attitude.',
      },
      {
        date: '2026-04-24',
        title: 'Direct Node Placement',
        summary:
          'Added click-to-place maneuver nodes on the orbit line, scene markers, map connectors, and a maneuver cue on the navball.',
      },
      {
        date: '2026-04-24',
        title: 'Mission-Control UI Pass',
        summary:
          'Reworked the interface around Apollo mission-control references with clean lines, compact telemetry, and an updateable node editor.',
      },
    ],
  },
];
