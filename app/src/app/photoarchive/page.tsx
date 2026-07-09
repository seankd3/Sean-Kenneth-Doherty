import type { Metadata } from 'next';
import {
  ArrowUpRight,
  Camera,
  Cpu,
  Github,
  HardDrive,
  Layers,
  Lock,
  Search,
  Share2,
  Smartphone,
  Sparkles,
  SwatchBook,
  Trophy,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'photoArchive — Your own photo cloud',
  description:
    'A self-hosted photo library with Lightroom Classic instincts: Elo ranking, stacks, local AI search, private client galleries, and an installable phone app. Your files never leave your hardware.',
};

const GITHUB_URL = 'https://github.com/Sean-Kenneth-Doherty/photo-archive';

const stats = [
  { value: '47,000+', label: 'Photos in the live archive' },
  { value: '100%', label: 'Local — nothing leaves your network' },
  { value: '3', label: 'Search engines fused per query' },
  { value: '1', label: 'Consumer GPU runs all of it' },
];

const features = [
  {
    icon: SwatchBook,
    eyebrow: 'The Library',
    title: 'Fifty thousand photos, zero lag',
    body: 'A virtualized grid that stays silk-smooth at archive scale. A real folder tree with live counts, composable filters for camera, lens, date, and flags, and a timeline scrubber that rides the edge of every date-sorted view. It feels like Lightroom Classic — because that was the bar.',
    image: '/images/photoarchive/library-grid.jpg',
    imageAlt: 'photoArchive library grid showing a curated landscape collection with folder tree and Elo histogram',
  },
  {
    icon: Trophy,
    eyebrow: 'Ranking, not rating',
    title: 'Your archive learns which photos are your best',
    body: 'Forget agonizing over star ratings. Refine shows you a mosaic — you pick the best one. Behind every two-second decision is an Elo engine with uncertainty tracking that propagates results through visually similar photos. A quality meter tells you exactly how sorted any folder, shoot, or search is.',
    image: '/images/photoarchive/refine-mosaic.jpg',
    imageAlt: 'Refine mosaic view presenting nine landscape photos for a ranking pick',
  },
  {
    icon: Search,
    eyebrow: 'Search that understands',
    title: '“Night sky over trees” just works',
    body: 'Every photo is indexed three ways on your own GPU: metadata full-text, semantic vision embeddings, and rich VLM-written captions. Queries fuse all three engines with reciprocal-rank fusion, and the omnibox streams live photo results, facet completions, and natural dates as you type. No cloud API. No subscription. Measured by a built-in eval harness.',
    image: '/images/photoarchive/loupe.jpg',
    imageAlt: 'Loupe view with live metadata, Elo ranking and histogram panels beside a Zion canyon photograph',
  },
  {
    icon: Layers,
    eyebrow: 'Stacks & safe trash',
    title: 'Bursts, variants, and duplicates fold away',
    body: 'Three automatic builders detect burst sequences, export variants of the same edit, and cross-source duplicates — like the compressed Facebook copy of your original — and stack them behind a single cover, Lightroom-style. Resolving a stack moves losers to a fully restorable on-drive trash. Nothing is ever deleted until you say so.',
    image: '/images/photoarchive/loupe-lights-out.jpg',
    imageAlt: 'Lights-out loupe mode showing a single photograph on black with a filmstrip below',
  },
];

const secondaryFeatures = [
  {
    icon: Share2,
    title: 'Client galleries that beat a Google Photos link',
    body: 'Share any collection as a password-protected gallery with view analytics and client proofing — their favorites flow back into your archive as picks. Public links serve previews only; originals never leave the machine.',
  },
  {
    icon: Smartphone,
    title: 'An installable phone app',
    body: 'A real PWA: fast timeline, pinch density, pull-to-refresh, haptics, one-handed action bars, and an Android Back button that behaves natively. Pair it with Tailscale and your archive is in your pocket on your own private network.',
  },
  {
    icon: Camera,
    title: 'People, privately',
    body: 'Local face detection clusters faces into people entirely on your hardware. Name them, merge them, filter any view by who is in the frame. Face data never leaves your network.',
  },
  {
    icon: Lock,
    title: 'Originals are sacred',
    body: 'The app indexes your folders and builds its own caches — it never edits, moves, or deletes a source file. Offline drives degrade gracefully: cached views keep working until the drive returns.',
  },
  {
    icon: Cpu,
    title: 'One GPU runs everything',
    body: 'Thumbnail generation, semantic embeddings, face scanning, and VLM captioning share a single consumer GPU through sequential coordination. The live archive runs on an RTX 2060 Super.',
  },
  {
    icon: HardDrive,
    title: 'Boring, dependable engineering',
    body: 'FastAPI + SQLite, browser-native ES modules with no build step, additive-only migrations, and a contract-tested API surface with 380+ tests. Built to still work in ten years.',
  },
];

export default function PhotoArchivePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#c9a962]">
              <Sparkles size={16} />
              Software · Self-hosted
            </p>
            <h1 className="font-wedding-display text-6xl text-white md:text-8xl">
              photoArchive
            </h1>
            <p className="mt-6 text-2xl leading-snug text-white md:text-3xl">
              Your own photo cloud —{' '}
              <span className="text-[#c9a962]">with Lightroom Classic instincts.</span>
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#a0a0a0]">
              A self-hosted library for serious archives: browse, cull, rank, search, and share
              tens of thousands of photos from your own hardware. Google Photos convenience,
              Lightroom Classic control — and your files never leave your network.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-[#c9a962] bg-[#c9a962] px-6 py-3 text-sm uppercase tracking-[0.2em] text-black transition-colors hover:bg-transparent hover:text-[#c9a962]"
              >
                <Github size={16} />
                View on GitHub
              </a>
              <a
                href="#features"
                className="flex items-center gap-2 border border-[#2a2a2a] px-6 py-3 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:border-[#c9a962] hover:text-[#c9a962]"
              >
                Explore the features
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden border border-[#2a2a2a]">
          <img
            src="/images/photoarchive/library-grid.jpg"
            alt="photoArchive library showing a landscape collection with folder tree, Elo ranking panel and filters"
            className="w-full"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px border border-[#2a2a2a] bg-[#2a2a2a] lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#0a0a0a] p-8 text-center">
              <p className="font-wedding-display text-4xl text-[#c9a962] md:text-5xl">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#6f6f6f]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Positioning */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl border border-[#2a2a2a] bg-[#111] p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c9a962]">From Google Photos</p>
              <p className="leading-relaxed text-[#a0a0a0]">
                The instant timeline, semantic search, face grouping, shareable links, and a phone
                app that installs like the real thing.
              </p>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c9a962]">From Lightroom Classic</p>
              <p className="leading-relaxed text-[#a0a0a0]">
                The folder tree, pick/reject culling, stacks, keyboard-first loupe with lights-out,
                and filters that compose the way a working photographer thinks.
              </p>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c9a962]">From neither</p>
              <p className="leading-relaxed text-[#a0a0a0]">
                Elo photo ranking. Quick this-or-that picks teach the archive which photos are your
                best — no star-rating agony, just two-second decisions that compound.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main features */}
      <section id="features" className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-20">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              <div className="overflow-hidden border border-[#2a2a2a]">
                <img src={feature.image} alt={feature.imageAlt} className="w-full" />
              </div>
              <div>
                <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#c9a962]">
                  <feature.icon size={16} />
                  {feature.eyebrow}
                </p>
                <h2 className="font-wedding-display text-4xl text-white md:text-5xl">{feature.title}</h2>
                <p className="mt-6 text-lg leading-relaxed text-[#a0a0a0]">{feature.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Secondary features */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px border border-[#2a2a2a] bg-[#2a2a2a] md:grid-cols-2 lg:grid-cols-3">
            {secondaryFeatures.map((feature) => (
              <div key={feature.title} className="bg-[#0a0a0a] p-8">
                <feature.icon size={20} className="text-[#c9a962]" />
                <h3 className="mt-4 text-lg font-medium text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#a0a0a0]">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl border border-[#2a2a2a] bg-[#111] p-10 text-center md:p-16">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c9a962]">Open source</p>
          <h2 className="font-wedding-display text-4xl text-white md:text-6xl">
            Own your archive again.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#a0a0a0]">
            photoArchive is built in the open and runs on hardware you already have. Point it at a
            folder of photos and it takes care of the rest.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#c9a962] bg-[#c9a962] px-8 py-4 text-sm uppercase tracking-[0.2em] text-black transition-colors hover:bg-transparent hover:text-[#c9a962]"
            >
              <Github size={18} />
              photoArchive on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
