import orbitalMechanicsUpdates from './project-updates/orbital-mechanics.json';

export type ProjectUpdate = {
  date: string;
  title: string;
  summary: string;
  commit?: string;
  commits?: string[];
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
  /** In-browser playable build, hosted under /play/. */
  playUrl?: string;
  playNote?: string;
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
      'Open-source, self-hosted photo software for a local-first archive: fast library browsing, three-engine search, taste-learning ranking, Develop workflows, mobile access, proofing, and publishing.',
    image: '/images/photoarchive/library-grid.jpg',
    imageAlt: 'photoArchive library grid showing a curated landscape collection with folder tree and ranking panels.',
    sourceUrl: 'https://github.com/Sean-Kenneth-Doherty/photo-archive',
    tags: ['FastAPI', 'SQLite', 'Local AI', 'Elo Ranking', 'PWA', 'Develop'],
    highlights: [
      '138,573 active photos in the author’s working archive.',
      '2.4M ranking signals, three search engines, and 73 presets.',
      'Local-first originals with rebuildable previews, indexes, captions, and embeddings.',
      'Dev7 shipped with film UI, reference compare, soft proof, XMP write-back, saved views, and timeline.',
    ],
    updates: [],
    links: [],
  },
  {
    slug: 'orbital-mechanics',
    playUrl: '/play/orbital-mechanics/',
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
  {
    slug: 'marshlight-sanctuary',
    playUrl: '/play/marshlight-sanctuary/',
    playNote: 'Two-thumb controls on phone; keyboard, click-to-walk, tile building, town schedules, gifts, and a full garden loop on desktop.',
    title: 'Marshlight Sanctuary',
    eyebrow: 'Game / Cozy Simulation',
    status: 'Living multi-day sanctuary build',
    summary:
      'A cozy wetland restoration game where every capybara in town is helping turn an overgrown riverside into a safe sanctuary for guinea pigs, chinchillas, degus, and other small residents.',
    image: '/images/projects/marshlight-sanctuary.png',
    imageAlt: 'Marshlight Sanctuary pixel-art scene with capybara caretakers, a guinea pig, cottages, flowers, and a river.',
    tags: ['Cozy Game', 'Pixel Art', 'Capybaras', 'Canvas', 'TypeScript', 'Mobile'],
    highlights: [
      'A complete first-day story: meet the town, gather materials, clear a meadow, build a habitat, care for it, and welcome Pip home.',
      'Purpose-built phone play with an analog thumb stick, context-aware action button, safe-area layouts, and tap-to-walk.',
      'A deterministic 32-pixel world with clustered grass, paths, banks, and water, plus a player-centered camera and expressive original capybara art.',
      'A persistent tile-building system for paths, fences, garden beds, and shelters, now connected to planting, watering, multi-stage crop growth, and harvest income.',
      'A four-season calendar, daily forecast, rainy-day auto-watering, seed cabinet, three crop economies, and overnight earnings recap create a repeatable sanctuary rhythm.',
      'Mayor Mallow, Dr. Nori, and Juniper now follow weather-aware daily schedules; conversations react to time, weather, and friendship, while one daily gift deepens each relationship.',
      'A richer original pixel-art pass adds lanterns, flower beds, a cottage garden, river life, roof fringe, layered grass clusters, and direction-aware capybara movement.',
    ],
    updates: [
      {
        date: '2026-07-25',
        title: 'Living town life and richer pixel art',
        summary:
          'Added weather-aware NPC routines, contextual dialogue, daily gifts, a ten-heart neighbor ledger, direction-aware movement, and a denser handmade pixel-art environment with flowers, lanterns, river life, gardens, and roof details.',
        commit: 'df7601e',
      },
      {
        date: '2026-07-25',
        title: 'Gardens, weather, and a real daily rhythm',
        summary:
          'Connected the tile builder to a multi-day farming loop with three crops, watering and pixel growth stages, harvest income, a seed market, four 28-day seasons, deterministic weather, rainy-day watering, and nightly earnings.',
        commit: 'ebc7693',
      },
      {
        date: '2026-07-25',
        title: 'Pixel world and sanctuary building',
        summary:
          'Converted the marsh to a deterministic tile-rendered landscape, locked the camera to Clover, and added a persistent building mode with four placeable sanctuary pieces across keyboard, mouse, and touch.',
        commit: '83fd2fe',
      },
      {
        date: '2026-07-25',
        title: 'Mobile controls and cozy pixel-art world',
        summary:
          'Rebuilt the game around two-thumb phone play, split the renderer into focused scene modules, and upgraded the sanctuary with expressive characters, layered scenery, animated water, charming buildings, and readable construction states.',
        commit: '9de5d3e',
      },
    ],
    links: [],
  },
  {
    slug: 'machine-frame-lab',
    title: 'Machine Frame Lab',
    eyebrow: 'Engineering / Simulation',
    status: 'Working tool',
    summary:
      'A preliminary machine-frame engineering workbench for comparing aluminum extrusion, rail, and fill stacks against explicit design limits. It solves static and modal beam response, checks spindle and tooth-pass resonance, and exports a traceable analysis record.',
    image: '/images/projects/machine-frame-lab.png',
    imageAlt: 'Machine Frame Lab engineering workstation showing extrusion inputs, finite-element mode shapes, design criteria, and resonance analysis.',
    sourceUrl: 'https://github.com/Sean-Kenneth-Doherty/machine-frame-lab',
    tags: ['Finite Elements', 'Modal Analysis', 'Machine Design', 'TypeScript', 'React'],
    highlights: [
      'Assembled Euler-Bernoulli stiffness and consistent mass matrices with a point carriage mass and numerically solved mode shapes.',
      'Focused verification against closed-form simply supported, fixed-fixed, and cantilever beam solutions.',
      'Editable deflection, first-mode, and modal-separation limits with a controlling-criterion verdict and safer-RPM guidance.',
      'Twenty-five seeded extrusion profiles, custom section-property intake, shareable configurations, and exportable JSON analysis reports.',
    ],
    updates: [
      {
        date: '2026-07-10',
        title: 'Finite-element modal solver and design qualification',
        summary:
          'Replaced analytical modal shortcuts with a generalized finite-element eigenproblem, added explicit acceptance criteria and model-confidence guidance, rebuilt the resonance view around operating decisions, and verified the workflow at desktop and phone widths.',
        commit: 'b065804',
      },
    ],
    links: [
      {
        label: 'Open App',
        href: '/play/machine-frame-lab/',
      },
      {
        label: 'Source',
        href: 'https://github.com/Sean-Kenneth-Doherty/machine-frame-lab',
      },
    ],
  },
];
