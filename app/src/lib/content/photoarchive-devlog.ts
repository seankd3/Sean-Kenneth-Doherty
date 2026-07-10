import { photoArchiveImages, type PhotoArchiveImage } from './photoarchive';

export type PhotoArchiveDevlogImages =
  | readonly []
  | readonly [PhotoArchiveImage]
  | readonly [PhotoArchiveImage, PhotoArchiveImage];

export type PhotoArchiveDevlogEntry = {
  id: string;
  date: string;
  era: string;
  title: string;
  problem: string;
  change: string;
  effect: string;
  evidence: string[];
  images?: PhotoArchiveDevlogImages;
  technicalNote?: string;
  futureScreenshotPaths?: string[];
};

const quickGuideImage = {
  src: '/images/photoarchive/history/grid-quick-guide.png',
  alt: 'photoArchive Library grid with the Quick Guide checklist open over the current desktop interface.',
  caption: 'The shipped Quick Guide introduces core Library actions inside the working interface.',
  frame: 'desktop',
  width: 1600,
  height: 760,
} satisfies PhotoArchiveImage;

const libraryHealthImage = {
  src: '/images/photoarchive/history/library-health.png',
  alt: 'photoArchive Library Health panel showing catalog protection, original checks, and a disconnected source that remains indexed.',
  caption: 'Library Health makes backup state, original checks, and safely disconnected sources visible.',
  frame: 'portrait',
  width: 798,
  height: 982,
} satisfies PhotoArchiveImage;

const aprilLibraryImage = {
  src: '/images/photoarchive/history/2026-04-ai-library.png',
  alt: 'April 2026 photoArchive Library interface with search, a mosaic grid, ranking modes, and AI indexing status.',
  caption: 'The authentic April 2026 AI Library joined mosaic browsing, search, ranking, and indexing in one surface.',
  frame: 'desktop',
  width: 1600,
  height: 820,
} satisfies PhotoArchiveImage;

export const photoArchiveDevlogEntries: PhotoArchiveDevlogEntry[] = [
  {
    id: 'public-readiness',
    date: '2026-07',
    era: 'Public readiness',
    title: 'Turning a daily-driver system into something another photographer can start',
    problem:
      'photoArchive is already in active personal use, but active use is not the same thing as public readiness. A self-hosted photo system needs setup, recovery, and storage behavior that feel trustworthy before it should ask someone else to rely on it.',
    change:
      'The guided source picker, portable platform-aware data paths, Quick Guide, Library Health with safe restore, and optional AI packs are shipped on main. The remaining work is durable Windows packaging, toolchain hardening, and public distribution: a real installer exists, but it is not yet public-release-ready.',
    effect:
      'The shipped readiness layer lowers setup and recovery anxiety while preserving the power of a local-first archive. Windows users still need the distribution work to finish before the installer is ready for a public release.',
    evidence: [
      'Guided source picker shipped',
      'Portable data paths shipped',
      'Quick Guide shipped',
      'Library Health + safe restore shipped',
      'Optional AI packs shipped',
      'Windows installer exists; public release pending',
    ],
    images: [quickGuideImage, libraryHealthImage],
    technicalNote:
      'Originals remain the source of truth. Indexes, previews, captions, and embeddings are treated as rebuildable product state.',
  },
  {
    id: 'dev7-shipped',
    date: '2026-07',
    era: 'Dev7 shipped',
    title: 'Dev7 finished the Develop surface around real review decisions',
    problem:
      'Develop had serious foundations, but photographers also need comparison, proofing, detail controls, saved working views, and a timeline that makes edits understandable after the fact.',
    change:
      'Dev7 shipped film UI, reference compare, lens calibration detail, soft proofing, XMP write-back, saved views, and timeline work.',
    effect:
      'Develop now reads less like a promising panel and more like a working room: compare, correct, proof, write back, and return to a view without rebuilding context.',
    evidence: ['611 passed', '1 skipped', '6 subtests', 'XMP write-back shipped'],
    images: [photoArchiveImages.transform],
    technicalNote:
      'Verification evidence for this era is 611 passed, 1 skipped, and 6 subtests.',
    futureScreenshotPaths: [
      '/images/photoarchive/history/develop-film-ui-safe.png',
      '/images/photoarchive/history/reference-compare-safe.png',
    ],
  },
  {
    id: 'develop-became-real',
    date: '2026-07',
    era: 'Develop era',
    title: 'Develop crossed from ambition into an actual editing workflow',
    problem:
      'A photo archive that can find and rank images still leaves a gap if every meaningful edit has to happen somewhere else. The editing surface needed history, presets, color, geometry, and non-destructive behavior.',
    change:
      'The Develop work brought in non-RAW editing, color wheels, transform and upright correction, presets, history, virtual working concepts, and XMP import/export.',
    effect:
      'photoArchive became more than a finder. It can carry the image from selection into craft while preserving the local-first archive model.',
    evidence: ['73 presets', 'Color wheels', 'Transform/Upright', 'XMP import/export'],
    images: [photoArchiveImages.develop],
  },
  {
    id: 'consolidation-search-proofing-publishing',
    date: '2026-07',
    era: 'Consolidation',
    title: 'Search, proofing, stacks, and publishing converged around one desktop default',
    problem:
      'The product had many promising surfaces, but too many paths can make a tool feel like a lab. The working desktop needed a default place where search, review, proofing, and publishing made sense together.',
    change:
      'The interface consolidated around one desktop default while three-engine search, stacks, private proofing, and publishing became part of the same product story.',
    effect:
      'The archive started to feel less like separate experiments and more like a workflow: find the set, review it, make decisions, and publish selected output without exposing originals.',
    evidence: ['3 search engines', 'Private proofing', 'Stack-aware review', 'Publishing workflow'],
    images: [photoArchiveImages.loupe],
    technicalNote:
      'Search combines metadata, local vision embeddings, and VLM captions.',
  },
  {
    id: 'phone-pwa',
    date: '2026-06 to 2026-07',
    era: 'Phone and PWA',
    title: 'The archive left the desk without leaving local control',
    problem:
      'A private photo archive is much less useful if it only works at the main workstation. The phone experience needed to feel intentional, not like a cramped desktop page.',
    change:
      'The mobile work moved from companion access into an installable PWA direction, with timeline browsing and phone-scale controls for the same self-hosted archive.',
    effect:
      'photoArchive became pocketable for browsing and showing work while keeping the archive private and self-hosted.',
    evidence: ['Installable PWA direction', 'Phone timeline', 'Private network access', 'Same archive'],
    images: [photoArchiveImages.mobile],
  },
  {
    id: 'real-library-search',
    date: '2026-04',
    era: 'Real Library',
    title: 'The ranker became a library with memory',
    problem:
      'A ranking loop can identify favorites, but it does not solve the larger photographer problem: browsing a real archive, staying oriented, and finding images by what they are.',
    change:
      'The project became photoArchive: a justified library grid, folder context, metadata filters, loupe review, and early AI-assisted search moved the product beyond ranking alone.',
    effect:
      'The system gained a recognizable product shape. It could act like an archive, not just a preference experiment.',
    evidence: ['Library grid', 'Folder context', 'Loupe review', 'AI-assisted search'],
    images: [aprilLibraryImage],
  },
  {
    id: 'web-mosaic-era',
    date: '2026-02',
    era: 'Web mosaic',
    title: 'Ranking moved into the browser and became visual at archive scale',
    problem:
      'Pairwise choices are fast, but a growing archive needs broader context. The old desktop loop needed to become more visual and more accessible.',
    change:
      'The web era kept the simple taste question and expanded it into mosaic ranking, where multiple candidates could be compared in one pass.',
    effect:
      'Refine became easier to understand at a glance, and ranking started feeling like a product workflow rather than a utility script.',
    evidence: ['Browser workflow', 'Mosaic ranking', 'Refine direction', 'Visual comparison'],
    images: [photoArchiveImages.refine],
  },
  {
    id: 'desktop-ranker',
    date: '2023 to 2024',
    era: 'Desktop ranker',
    title: 'The prototype became a fast review habit',
    problem:
      'The earliest idea was useful, but a photo selection tool only matters if it can become muscle memory during real review sessions.',
    change:
      'Keyboard-driven controls, practical review behavior, and faster passes made the ranking loop usable as a desktop habit.',
    effect:
      'The core interaction survived because it was simple: look quickly, choose honestly, keep moving.',
    evidence: ['Keyboard review', 'Fast passes', 'Recoverable choices', 'Taste loop retained'],
    futureScreenshotPaths: ['/images/photoarchive/history/desktop-ranker-safe.png'],
  },
  {
    id: 'photoranker-beginning',
    date: '2023-08',
    era: 'Original PhotoRanker',
    title: 'It started with one question: which photo wins?',
    problem:
      'Large shoots make selection emotionally and mechanically expensive. Star ratings ask for too much certainty too early.',
    change:
      'The first PhotoRanker asked for a simpler answer: show two images, pick the stronger one, and let Elo-style scoring accumulate the signal.',
    effect:
      'That tiny interaction became the durable center of photoArchive: make choosing lighter, then let the archive learn from the choices.',
    evidence: ['Two-image choice', 'Elo-style scoring', 'Folder-based start', 'Preference as signal'],
    futureScreenshotPaths: ['/images/photoarchive/history/photoranker-original-safe.png'],
  },
];
