export type PhotoArchiveImage = {
  src: string;
  alt: string;
  caption: string;
  frame: 'desktop' | 'mobile' | 'portrait';
  width?: number;
  height?: number;
};

export type PhotoArchivePillar = {
  title: string;
  body: string;
};

export type PhotoArchiveFlowStep = {
  name: string;
  summary: string;
};

export type PhotoArchiveChapter = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  image: PhotoArchiveImage;
  points: string[];
};

export type PhotoArchiveMetric = {
  value: string;
  label: string;
  detail: string;
};

export const photoArchiveGithubUrl =
  'https://github.com/Sean-Kenneth-Doherty/photo-archive';

export const photoArchiveRoutes = {
  product: '/projects/photoarchive',
  devlog: '/projects/photoarchive/devlog',
};

export const photoArchiveImages = {
  library: {
    src: '/images/photoarchive/library-grid.jpg',
    alt: 'photoArchive desktop library grid with folders, thumbnails, filters, and ranking context.',
    caption: 'The working library surface: local folders, a fast grid, and archive context in one place.',
    frame: 'desktop',
  },
  refine: {
    src: '/images/photoarchive/refine-mosaic.jpg',
    alt: 'photoArchive Refine mosaic showing multiple candidate photos for visual ranking.',
    caption: 'Refine turns quick visual choices into ranking evidence without star-rating every frame.',
    frame: 'desktop',
  },
  loupe: {
    src: '/images/photoarchive/loupe.jpg',
    alt: 'photoArchive loupe review UI with a large preview, filmstrip, metadata, and ranking panels.',
    caption: 'Loupe keeps review calm while search, metadata, and ranking context stay close.',
    frame: 'desktop',
  },
  mobile: {
    src: '/images/photoarchive/evolution/mobile-library.jpg',
    alt: 'photoArchive mobile library timeline in an installable phone-sized interface.',
    caption: 'The phone library is a real access surface for the same self-hosted archive.',
    frame: 'mobile',
  },
  develop: {
    src: '/images/photoarchive/evolution/develop-overview-nonraw.png',
    alt: 'photoArchive Develop workspace with a large preview, adjustment panels, history, and editing controls.',
    caption: 'Develop is a real non-destructive editing room, not a decorative adjustment panel.',
    frame: 'desktop',
  },
  colorWheels: {
    src: '/images/photoarchive/evolution/color-wheels.png',
    alt: 'photoArchive Develop color wheels and tonal controls.',
    caption: 'Color controls, presets, and detailed adjustment surfaces grew into the Develop workflow.',
    frame: 'desktop',
  },
  transform: {
    src: '/images/photoarchive/evolution/transform-upright.png',
    alt: 'photoArchive Develop transform and upright correction controls.',
    caption: 'Transform and Upright are part of the shipped Develop foundation.',
    frame: 'desktop',
  },
} satisfies Record<string, PhotoArchiveImage>;

export const photoArchivePillars: PhotoArchivePillar[] = [
  {
    title: 'Your archive stays yours.',
    body: 'Originals remain local and authoritative. Generated previews, captions, embeddings, and indexes can be rebuilt instead of becoming the fragile source of truth.',
  },
  {
    title: 'Finding beats filing.',
    body: 'Search combines metadata, local vision embeddings, and VLM captions, so a half-remembered scene can be enough to get back to the frame.',
  },
  {
    title: 'Taste becomes data.',
    body: 'Refine captures preference through quick choices, turning review into ranking signals that make future culling and selection faster.',
  },
];

export const photoArchiveFlow: PhotoArchiveFlowStep[] = [
  {
    name: 'Import',
    summary: 'Point photoArchive at real folders; originals stay where they belong.',
  },
  {
    name: 'Find',
    summary: 'Search by words, scene, date, camera, folder, or remembered context.',
  },
  {
    name: 'Refine',
    summary: 'Use visual choices to turn taste into ranking and quality evidence.',
  },
  {
    name: 'Develop',
    summary: 'Edit non-destructively with presets, history, proofing, and XMP workflows.',
  },
  {
    name: 'Share',
    summary: 'Publish selected work without exposing or moving the source archive.',
  },
];

export const photoArchiveChapters: PhotoArchiveChapter[] = [
  {
    id: 'organize-find',
    eyebrow: 'Organize & find',
    title: 'A private archive that feels searchable instead of buried.',
    body: 'photoArchive gives a large folder-based library the speed and memory of a modern photo app. It keeps folder context visible, lets search engines work together, and makes review surfaces feel connected instead of scattered.',
    image: photoArchiveImages.library,
    points: [
      'Metadata, vision embeddings, and VLM captions combine into three search engines.',
      'Folder, date, camera, and remembered-scene searches can meet in the same workflow.',
      'Local previews and indexes keep the working archive responsive without moving originals.',
    ],
  },
  {
    id: 'decide',
    eyebrow: 'Decide',
    title: 'Selection becomes a fast conversation with the work.',
    body: 'Refine is built around the question photographers actually ask: which frame is stronger? The system turns those lightweight choices into ranking signals, uncertainty, and quality coverage across the working archive.',
    image: photoArchiveImages.refine,
    points: [
      'The author’s working archive currently contains 2.4M ranking signals.',
      'Elo-style choices reduce brittle star-rating chores.',
      'Culling evidence helps surface what is ready and what still needs attention.',
    ],
  },
  {
    id: 'develop',
    eyebrow: 'Develop',
    title: 'Develop is a serious editing room.',
    body: 'The editor now supports a real non-destructive workflow: film UI, reference compare, lens and calibration detail, soft proofing, XMP write-back, saved views, timeline, presets, and history are part of the shipped Dev7 era.',
    image: photoArchiveImages.develop,
    points: [
      '73 presets are available in the current working system.',
      'Dev7 shipped with 611 passed, 1 skipped, and 6 subtests verified.',
      'XMP import/export and write-back keep edits connected to photographer workflows.',
    ],
  },
  {
    id: 'anywhere-share',
    eyebrow: 'Anywhere & share',
    title: 'The archive works away from the desk.',
    body: 'The mobile/PWA surface makes the same self-hosted archive useful on a phone, while sharing and publishing flows keep selected output separate from the local source of truth.',
    image: photoArchiveImages.mobile,
    points: [
      'Installable PWA access supports private, self-hosted browsing.',
      'Proofing and publishing are built around selected previews, not source-folder leaks.',
      'Local-first storage keeps originals authoritative while previews and indexes remain rebuildable.',
    ],
  },
];

export const photoArchiveMetrics: PhotoArchiveMetric[] = [
  {
    value: '138,573',
    label: 'Active photos',
    detail: 'In the author’s working archive; not a universal performance promise.',
  },
  {
    value: '2.4M',
    label: 'Ranking signals',
    detail: 'Preference data in the author’s working archive.',
  },
  {
    value: '3',
    label: 'Search engines',
    detail: 'Metadata, vision embeddings, and VLM captions.',
  },
  {
    value: '73',
    label: 'Presets',
    detail: 'Lightroom-style presets in the current system.',
  },
];
