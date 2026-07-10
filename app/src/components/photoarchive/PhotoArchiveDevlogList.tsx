import { ChevronDown } from 'lucide-react';
import type { PhotoArchiveDevlogEntry } from '@/lib/content/photoarchive-devlog';
import { cn } from '@/lib/utils';
import { PhotoArchiveDevlogMedia } from './PhotoArchiveDevlogMedia';

function EvidenceChips({ evidence }: { evidence: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {evidence.map((item) => (
        <li
          key={item}
          className="border border-[#2a2a2a] bg-[#101010] px-2.5 py-1 text-xs text-[#c9c9c9]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function DevlogArticle({ entry }: { entry: PhotoArchiveDevlogEntry }) {
  const images = entry.images ?? [];
  const hasSingleImage = images.length === 1;
  const hasImagePair = images.length === 2;

  return (
    <article
      className={cn(
        'border-t border-[#2a2a2a] py-12',
        hasSingleImage && 'grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12',
      )}
    >
      <div className={cn(!hasSingleImage && 'max-w-5xl')}>
        <div className="flex flex-wrap items-center gap-3">
          <time className="font-aerospace-display text-xs uppercase tracking-[0.22em] text-[#c9a962]">
            {entry.date}
          </time>
          <span className="border border-[#2a2a2a] px-2 py-1 text-xs text-[#8f8f8f]">
            {entry.era}
          </span>
        </div>
        <h2 className="mt-5 font-wedding-display text-4xl leading-tight text-white md:text-5xl">
          {entry.title}
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-[#cfcfcf]">
          <p>
            <span className="font-medium text-white">Problem: </span>
            {entry.problem}
          </p>
          <p>
            <span className="font-medium text-white">Change: </span>
            {entry.change}
          </p>
          <p>
            <span className="font-medium text-white">Effect: </span>
            {entry.effect}
          </p>
        </div>
        <div className="mt-6">
          <EvidenceChips evidence={entry.evidence} />
        </div>
        {entry.technicalNote && (
          <details className="mt-6 border border-[#2a2a2a] bg-[#0f0f0f] p-4 text-sm leading-relaxed text-[#a0a0a0]">
            <summary className="flex cursor-pointer list-none items-center gap-2 text-xs uppercase tracking-[0.18em] text-white">
              <ChevronDown size={14} aria-hidden="true" />
              Technical note
            </summary>
            <p className="mt-3">{entry.technicalNote}</p>
          </details>
        )}
      </div>
      {hasSingleImage && <PhotoArchiveDevlogMedia images={images} label={entry.era} />}
      {hasImagePair && (
        <div className="mt-9">
          <PhotoArchiveDevlogMedia images={images} label={entry.era} />
        </div>
      )}
    </article>
  );
}

export function PhotoArchiveDevlogList({
  entries,
}: {
  entries: PhotoArchiveDevlogEntry[];
}) {
  return (
    <div>
      {entries.map((entry) => (
        <DevlogArticle key={entry.id} entry={entry} />
      ))}
    </div>
  );
}
