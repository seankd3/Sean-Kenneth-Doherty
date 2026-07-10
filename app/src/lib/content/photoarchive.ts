export type PhotoArchiveImage = {
  src: string;
  alt: string;
  caption: string;
};

export type PhotoArchiveStat = {
  value: string;
  label: string;
  detail: string;
};

export type PhotoArchivePosition = {
  source: string;
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
  layout?: 'wide' | 'split';
  status?: string;
};

export type PhotoArchiveStatusColumn = {
  title: string;
  label: string;
  body: string;
  items: string[];
};

export const photoArchiveGithubUrl =
  'https://github.com/Sean-Kenneth-Doherty/photo-archive';

export const photoArchiveStats: PhotoArchiveStat[] = [
  {
    value: '47,000+',
    label: 'Real archive',
    detail: 'Daily-driver library size on the shipped mainline.',
  },
  {
    value: '2.35M',
    label: 'Ranking signals',
    detail: 'Taste data powering Elo and Refine decisions.',
  },
  {
    value: '595',
    label: 'Dev6 green tests',
    detail: 'Verified baseline for the shipped Transform/Upright generation.',
  },
  {
    value: '3',
    label: 'Search engines',
    detail: 'Metadata, embeddings, and VLM captions fused per query.',
  },
];

export const photoArchivePositioning: PhotoArchivePosition[] = [
  {
    source: 'Google Photos ease',
    title: 'Open the timeline and find the thing.',
    body: 'Fast phone browsing, people, maps, semantic search, private links, and a PWA that behaves like an app without surrendering the archive to a cloud account.',
  },
  {
    source: 'Lightroom control',
    title: 'Keep the folder tree and the working photographer habits.',
    body: 'Loupe, filmstrip, pick/reject, stacks, metadata filters, Develop history, presets, and non-destructive edits stay close to the original files.',
  },
  {
    source: 'Uniquely taste-learning',
    title: 'The archive learns what good looks like to you.',
    body: 'Refine turns quick visual choices into Elo scores, uncertainty, quality coverage, auto-cull briefs, and better ordering across shoots.',
  },
];

export const photoArchiveFlow: PhotoArchiveFlowStep[] = [
  {
    name: 'Import',
    summary: 'Point it at real folders; originals stay put while previews, metadata, and indexes build locally.',
  },
  {
    name: 'Find',
    summary: 'Search by text, scene, metadata, people, map, date, source, or any composed filter.',
  },
  {
    name: 'Refine',
    summary: 'Pick the strongest frame in quick Elo rounds, then let uncertainty show what still needs attention.',
  },
  {
    name: 'Develop',
    summary: 'Edit non-destructively with Lightroom-class tools, masks, presets, history, and versions.',
  },
  {
    name: 'Share / Publish',
    summary: 'Send private proofing galleries or publish selected work without exposing the source archive.',
  },
];

export const photoArchiveChapters: PhotoArchiveChapter[] = [
  {
    id: 'library',
    eyebrow: 'Local-first library',
    title: 'A private cloud that starts with your own folders.',
    body: 'photoArchive keeps the source archive local and treats generated data as rebuildable. The library view is built for the real mess: external drives, multiple catalog sources, offline volumes, metadata filters, maps, stacks, and tens of thousands of photos that still need to feel instant.',
    image: {
      src: '/images/photoarchive/library-grid.jpg',
      alt: 'photoArchive library grid with folder navigation, photo thumbnails, and ranking panels.',
      caption: 'The shipped library surface: real archive, justified grid, folder context, and ranking panels.',
    },
    points: [
      '47,000+ photo archive in daily use.',
      'Byte-budgeted tier cache with hot in-memory previews.',
      'Catalog sources, metadata filters, maps, people, and stack-aware browsing.',
    ],
  },
  {
    id: 'taste',
    eyebrow: 'Elo + Refine',
    title: 'Ranking becomes a conversation instead of bookkeeping.',
    body: 'The original idea was brutally simple: show two photos and ask which one wins. That instinct survived every rewrite. Refine now turns quick visual picks into Elo scores, uncertainty, quality coverage, and auto-cull evidence without forcing star ratings onto every frame.',
    image: {
      src: '/images/photoarchive/refine-mosaic.jpg',
      alt: 'Refine mosaic showing several candidate photographs for taste ranking.',
      caption: 'Refine keeps the old left-or-right spirit, but scales it into mosaic ranking and archive-level quality coverage.',
    },
    points: [
      '2.35M ranking signals across the working archive.',
      'Elo, uncertainty, and quality scoring instead of fragile manual stars.',
      'Auto-cull briefs and sortedness signals reveal what is worth reviewing next.',
    ],
  },
  {
    id: 'search',
    eyebrow: 'Three-engine search',
    title: 'Find the photo by what you remember, not where it lives.',
    body: 'Search combines metadata full text, local vision embeddings, and VLM captions. That lets the archive respond to practical memory: a person, a place, a scene, a date range, a camera body, or a half-remembered phrase like night sky over trees.',
    image: {
      src: '/images/photoarchive/loupe.jpg',
      alt: 'Loupe view with a large photograph, metadata panels, and ranking information.',
      caption: 'Search results land directly in the working photo surface: loupe, metadata, filters, and ranking context.',
    },
    points: [
      'Metadata, semantic embeddings, and VLM captions fused per query.',
      'People, map, folder, date, stack, and source filters compose together.',
      'All indexing stays on hardware the owner controls.',
    ],
  },
  {
    id: 'develop',
    eyebrow: 'Develop',
    title: 'A serious edit room, not a token adjustment panel.',
    body: 'The Develop branch grew from non-RAW editing into a Lightroom-class surface: WebGL preview twins, masks and AI masks, HDR/pano, healing, color wheels, transform/upright, presets, grading, noise reduction, defringe, snapshots, virtual copies, version stacks, and non-destructive history.',
    image: {
      src: '/images/photoarchive/evolution/develop-overview-nonraw.png',
      alt: 'photoArchive Develop overview with adjustment panels and a large image preview.',
      caption: 'Current shipped Develop foundation: non-RAW editing, history, panels, and a fast preview surface.',
    },
    points: [
      'Masks, AI masks, healing, color wheels, transform/upright, HDR/pano, and 73 Lightroom-style presets.',
      'Virtual copies, snapshots, non-destructive history, and version stacks protect experimentation.',
      'RAW backend, XMP import/export, and WebGL Develop twin are in the Dev6 shipped baseline.',
    ],
    layout: 'wide',
  },
  {
    id: 'organize',
    eyebrow: 'Stacks, people, map',
    title: 'The library folds noisy shoots into something legible.',
    body: 'Bursts, variants, duplicates, edits, people, and places need structure before they need decoration. photoArchive groups related frames, keeps losers recoverable, and lets the same search or folder become a map pass, a people pass, a stack pass, or a culling pass.',
    image: {
      src: '/images/photoarchive/loupe-lights-out.jpg',
      alt: 'Lights-out loupe view with a large photograph and filmstrip.',
      caption: 'Loupe and filmstrip stay clean enough for high-volume review, while stack and metadata context remains close.',
    },
    points: [
      'Burst, variant, and duplicate stack builders.',
      'Local face clustering and map-aware browsing.',
      'Recoverable trash path instead of destructive cleanup.',
    ],
  },
  {
    id: 'mobile',
    eyebrow: 'Mobile PWA',
    title: 'The archive is useful away from the desk.',
    body: 'The phone experience is not a shrunken desktop. It leans toward Google Photos: quick timeline, natural gestures, installable PWA behavior, pull-to-refresh, one-handed controls, and Tailscale-friendly access to the private archive.',
    image: {
      src: '/images/photoarchive/evolution/mobile-library.jpg',
      alt: 'Mobile photoArchive library running as a phone-sized timeline.',
      caption: 'Public-safe mobile library screenshot from the installable PWA chapter.',
    },
    points: [
      'Installable real-write PWA as of the July 2026 mainline.',
      'Phone-first timeline and action bars, not just responsive desktop chrome.',
      'Private network access keeps the archive local while still pocketable.',
    ],
  },
  {
    id: 'sharing',
    eyebrow: 'Private galleries + publishing',
    title: 'Sharing is a publishing workflow, not a folder leak.',
    body: 'The current mainline includes private client galleries, proofing, stacks, direct site publishing, and a three-pane publishing workflow. The public surface gets selected previews and intent; the archive remains the source of truth.',
    image: {
      src: '/images/photoarchive/evolution/cull-brief.png',
      alt: 'photoArchive cull brief view summarizing a set of photo choices.',
      caption: 'Build evidence from Dev6: review and cull work became structured enough to drive publishing decisions.',
    },
    points: [
      'Password-protected private galleries and proofing.',
      'Direct site publishing and three-pane publishing workflow.',
      'Preview-first sharing without moving or exposing originals.',
    ],
  },
  {
    id: 'integrity',
    eyebrow: 'Backup + integrity',
    title: 'Originals stay sacred; the system earns trust quietly.',
    body: 'The architecture is deliberately boring where the risk is real: local source folders, rebuildable caches, SQLite catalogs, history stacks, integrity checks, XMP import/export, and backups that make the archive recoverable instead of magical.',
    image: {
      src: '/images/photoarchive/evolution/transform-upright.png',
      alt: 'photoArchive Transform and Upright tools in the Develop workspace.',
      caption: 'Transform/Upright shipped with the 595-test Dev6 baseline, alongside broader history and recovery work.',
    },
    points: [
      'Source files remain the source of truth.',
      'Generated previews and indexes are rebuildable.',
      'XMP, import/export, history, snapshots, and catalog time machine support recovery.',
    ],
  },
];

export const photoArchiveStatus: PhotoArchiveStatusColumn[] = [
  {
    title: 'Shipped now',
    label: 'Current mainline',
    body: 'The production story is the Dev6 baseline and everything before it: the real archive, search, Refine, stacks, mobile, sharing, publishing, and Develop through Transform/Upright.',
    items: [
      '47,000+ photo archive with 2.35M ranking signals.',
      'Library, search, Refine, stacks, mobile PWA, private galleries, proofing, and direct publishing.',
      'RAW backend, XMP import/export, WebGL Develop twin, masks, HDR/pano, presets, heal, history, versions, auto-cull, and catalog time machine.',
      '595-test verified Dev6 baseline.',
    ],
  },
  {
    title: 'In active development',
    label: 'Dev7, uncommitted',
    body: 'Dev7 evidence is real but not shipped. It belongs in the next chapter until it lands on main.',
    items: [
      'Film UI, reference/compare, lens/calibration/detail completion.',
      'Soft proof, XMP write-back, saved views, timeline.',
      '611 passed, 1 skipped, 6 subtests evidence.',
      'Not described as live, shipped, or installed.',
    ],
  },
  {
    title: 'Next chapter',
    label: 'Roadmap',
    body: 'Windows 11 Tauri and guided setup are framed as future packaging work, not something the current site claims exists.',
    items: [
      'Windows desktop app packaging for the non-technical install path.',
      'Guided setup for source folders, cache budgets, and private access.',
      'No installer claim until there is an installer.',
    ],
  },
];
