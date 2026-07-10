import type { PhotoArchiveImage } from './photoarchive';

export type PhotoArchiveMilestone = {
  date: string;
  title: string;
  summary: string;
  commits?: string[];
  image?: PhotoArchiveImage;
  secondaryImage?: PhotoArchiveImage;
  status?: 'shipped' | 'in-progress';
};

export const photoArchiveEvolution: PhotoArchiveMilestone[] = [
  {
    date: '2023-08-11',
    title: 'Initial PhotoRanker',
    commits: ['f60ab3c1', '82e2887d'],
    summary:
      'The seed was a two-image Tkinter ranker: folder picker, fullscreen left/right photos, and a single Elo choice.',
  },
  {
    date: '2023-09-09',
    title: 'Keyboard-driven desktop ranker',
    commits: ['d97f2aae'],
    summary:
      'The prototype became usable as a fast desktop ranking loop, with keyboard control at the center.',
  },
  {
    date: '2024-08-03',
    title: 'Blacklist and controller support',
    commits: ['18554c4f', '49571c7a'],
    summary:
      'The ranking workflow gained practical review controls: blacklist behavior and controller support for faster passes.',
  },
  {
    date: '2026-02-07',
    title: 'Moved to the web with mosaic ranking',
    commits: ['db3b4ad3'],
    summary:
      'The old desktop loop crossed into the browser and expanded from pairwise choices into mosaic ranking.',
    image: {
      src: '/images/photoarchive/refine-mosaic.jpg',
      alt: 'Mosaic ranking view with multiple photographs to choose from.',
      caption: 'The web era kept the fast ranking instinct and made it visual at archive scale.',
    },
  },
  {
    date: '2026-04-21',
    title: 'First real Library and the photoArchive name',
    commits: ['fe8e1e65', 'fa1594a8'],
    summary:
      'The project became a real Library with a justified grid and AI search, then moved from PhotoRanker to photoArchive.',
    image: {
      src: '/images/photoarchive/library-grid.jpg',
      alt: 'photoArchive justified library grid with controls and side panels.',
      caption: 'The first mature product identity: a real library, not only a ranker.',
    },
  },
  {
    date: '2026-04-22',
    title: 'Loupe, filmstrip, and byte-budgeted cache',
    commits: ['12db7d6d', '7210e33d'],
    summary:
      'Lightroom-style review arrived with loupe, filmstrip, and a tier cache designed around explicit byte budgets.',
    image: {
      src: '/images/photoarchive/loupe.jpg',
      alt: 'photoArchive loupe review surface with metadata and ranking panels.',
      caption: 'Loupe and filmstrip pulled Lightroom-style review into the browser.',
    },
  },
  {
    date: '2026-04-24',
    title: 'Catalog sources, metadata filters, and map',
    commits: ['2b4c36e4', 'f68f266e'],
    summary:
      'The archive became more than a folder browser: catalog sources, metadata filters, and map context started to compose.',
  },
  {
    date: '2026-06-01',
    title: 'Self-hosted Android companion chapter',
    commits: ['59240aab'],
    summary:
      'The system grew a private mobile access story through a self-hosted Android companion and Tailscale path.',
    image: {
      src: '/images/photoarchive/evolution/mobile-library.jpg',
      alt: 'Mobile photoArchive timeline with image grid and phone-scale controls.',
      caption: 'Mobile became a first-class access surface instead of a desktop afterthought.',
    },
  },
  {
    date: '2026-07-06',
    title: 'Installable real-write PWA',
    commits: ['48ea67da', '85ce7421'],
    summary:
      'The mobile target became an installable PWA: Google Photos on the phone, Lightroom-style control on desktop.',
  },
  {
    date: '2026-07-08',
    title: 'One desktop default, galleries, proofing, stacks, and three-engine search',
    commits: ['c080da2d', '9270aef0', 'f80aa93d', 'be5691c3', 'd4969ccf', 'f16dceae'],
    summary:
      'The product consolidated around one desktop default while private galleries, proofing, stacks, and fused search landed together.',
    image: {
      src: '/images/photoarchive/loupe-lights-out.jpg',
      alt: 'Lights-out photo review mode with filmstrip.',
      caption: 'The working surface narrowed around calm review, then expanded into sharing and stack-aware workflows.',
    },
  },
  {
    date: '2026-07-09',
    title: 'Direct site publishing',
    commits: ['633fe066', '96a7adf5'],
    summary:
      'Publishing became a real workflow: direct site publishing followed by a three-pane publishing surface on July 10.',
  },
  {
    date: '2026-07-10',
    title: 'RAW backend, XMP, import/export, and WebGL Develop twin',
    commits: ['8d8e97cf', '874b8a70'],
    summary:
      'Develop moved from interface ambition to real editing infrastructure: RAW backend, XMP import/export, and a WebGL preview twin.',
    image: {
      src: '/images/photoarchive/evolution/develop-overview-nonraw.png',
      alt: 'Develop workspace with photo preview and adjustment panels.',
      caption: 'The Develop room became a serious product surface.',
    },
  },
  {
    date: '2026-07-10',
    title: 'Masks, HDR, presets, wheels, and healing',
    commits: ['e77da353', 'faed4c0f', 'efe62034', '8491e033'],
    summary:
      'Local and AI masks, HDR, 73 Lightroom presets, color wheels, and healing broadened the editor from adjustments into craft.',
    image: {
      src: '/images/photoarchive/evolution/color-wheels.png',
      alt: 'Develop color wheels and adjustment controls.',
      caption: 'Color, masks, presets, and healing brought the edit room closer to Lightroom-class control.',
    },
  },
  {
    date: '2026-07-10',
    title: 'Grading, quality, version stacks, and film backend',
    commits: ['ef81437a'],
    summary:
      'Grading, noise reduction, defringe, heal, version stacks, quality scoring, and the film backend reached 582 green.',
    image: {
      src: '/images/photoarchive/evolution/heal-tool.png',
      alt: 'Heal tool evidence in the photoArchive Develop workspace.',
      caption: 'The Develop work started to include the small, serious tools photographers expect.',
    },
  },
  {
    date: '2026-07-10',
    title: 'Transform/Upright, history, auto-cull, and catalog time machine',
    commits: ['70492e58'],
    summary:
      'Transform/Upright, JPEG/TIFF/PNG/WebP editing, virtual copies, snapshots, history, auto-cull, and catalog time machine shipped with 595 green.',
    image: {
      src: '/images/photoarchive/evolution/transform-upright.png',
      alt: 'Transform and Upright controls in photoArchive Develop.',
      caption: 'The shipped Dev6 baseline closed with Transform/Upright and recovery-oriented editing history.',
    },
  },
  {
    date: '2026-07-10',
    title: 'Dev7 in progress',
    summary:
      'Uncommitted Dev7 work includes Film UI, reference/compare, lens/calibration/detail completion, soft proof, XMP write-back, saved views, and timeline. Evidence: 611 pass, 1 skipped, 6 subtests. Not shipped.',
    status: 'in-progress',
    image: {
      src: '/images/photoarchive/evolution/dev7-film-ui-in-progress.png',
      alt: 'Dev7 in-progress Film UI evidence in photoArchive.',
      caption: 'Dev7 evidence is real and labeled in-progress until it lands on main.',
    },
    secondaryImage: {
      src: '/images/photoarchive/evolution/dev7-compare-in-progress.png',
      alt: 'Dev7 in-progress reference and compare evidence in photoArchive.',
      caption: 'Reference/compare is part of the Dev7 in-progress chapter, not the shipped mainline.',
    },
  },
];

export const photoArchiveProjectUpdates = photoArchiveEvolution.map((milestone) => ({
  date: milestone.date,
  title: milestone.title,
  summary: milestone.status === 'in-progress'
    ? `${milestone.summary} This is active development, not shipped.`
    : milestone.summary,
  commits: milestone.commits,
}));

