import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { photoArchiveDevlogEntries } from '@/lib/content/photoarchive-devlog';
import { photoArchiveGithubUrl, photoArchiveRoutes } from '@/lib/content/photoarchive';
import { PhotoArchiveSubnav } from './PhotoArchiveSubnav';
import { PhotoArchiveDevlogOrderControl } from './PhotoArchiveDevlogOrderControl';
import { PhotoArchiveEyebrow, SectionShell } from './PhotoArchiveVisuals';

export default function PhotoArchiveDevlogPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-[1120px]">
          <PhotoArchiveEyebrow icon={BookOpen}>Development log</PhotoArchiveEyebrow>
          <h1 className="font-wedding-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            How photoArchive became a product.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#d8d8d8]">
            A newest-first editorial history of the product eras: what problem each phase solved, what changed, and what it made possible for the photographer using the archive.
          </p>
          <div className="mt-7">
            <PhotoArchiveSubnav active="devlog" />
          </div>
        </div>
      </section>

      <SectionShell className="pt-0">
        <PhotoArchiveDevlogOrderControl entries={photoArchiveDevlogEntries} />
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="border border-[#2a2a2a] bg-[#101010] p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="font-aerospace-display text-xs uppercase tracking-[0.24em] text-[#c9a962]">
                Product page
              </p>
              <h2 className="mt-3 font-wedding-display text-3xl text-white md:text-4xl">
                Prefer the concise sales view?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#a0a0a0]">
                The product page keeps the current pitch, proof, and availability separate from this historical log.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={photoArchiveRoutes.product}
                className="inline-flex items-center gap-2 border border-[#c9a962] bg-[#c9a962] px-5 py-3 text-sm uppercase tracking-[0.18em] text-black transition-colors hover:bg-transparent hover:text-[#c9a962]"
              >
                View photoArchive
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <a
                href={photoArchiveGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 text-sm uppercase tracking-[0.18em] text-white transition-colors hover:border-[#c9a962] hover:text-[#c9a962]"
              >
                GitHub
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
