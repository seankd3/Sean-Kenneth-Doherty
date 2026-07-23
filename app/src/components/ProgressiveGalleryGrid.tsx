'use client';

import { useState } from 'react';
import type { GalleryImage } from '@/lib/gallery-config';

const INITIAL = 12;
const STEP = 24;

interface ProgressiveGalleryGridProps {
  images: GalleryImage[];
  title: string;
  onOpen: (index: number) => void;
  /** Visual theme for load-more buttons */
  theme?: 'dark' | 'aerospace';
  onImgLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

/**
 * Masonry grid that shows INITIAL frames first, then Load more / Show all.
 * Cuts first-paint weight on large albums without hiding the full set.
 */
export default function ProgressiveGalleryGrid({
  images,
  title,
  onOpen,
  theme = 'dark',
  onImgLoad,
}: ProgressiveGalleryGridProps) {
  const [visible, setVisible] = useState(() => Math.min(INITIAL, images.length));
  const remaining = images.length - visible;
  const isAero = theme === 'aerospace';

  const primaryBtn = isAero
    ? 'border-2 border-[#1a1a1a] bg-[#1a1a1a] text-[#e8e6e1] hover:bg-[#c41e3a] hover:border-[#c41e3a]'
    : 'border border-[#c9a962]/50 text-[#c9a962] hover:bg-[#c9a962] hover:text-[#0a0a0a]';
  const secondaryBtn = isAero
    ? 'border-2 border-[#1a1a1a] text-[#1a1a1a] hover:border-[#c41e3a] hover:text-[#c41e3a]'
    : 'border border-[#2a2a2a] text-[#a0a0a0] hover:border-[#c9a962] hover:text-[#c9a962]';
  const cellBorder = isAero
    ? 'border-2 border-[#1a1a1a] bg-[#c4c0b8]'
    : 'border border-[#2a2a2a] group-hover:border-[#c9a962]/50 bg-[#1a1a1a]';

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {images.slice(0, visible).map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="group relative break-inside-avoid mb-2 cursor-pointer"
            onClick={() => onOpen(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpen(index);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Open ${title} photo ${index + 1}`}
          >
            <div className={`relative overflow-hidden ${cellBorder} transition-all duration-500`}>
              <img
                src={image.src}
                alt={`${title} - photo ${index + 1} of ${images.length}`}
                width={image.width}
                height={image.height}
                className={`${index < 4 ? '' : 'gallery-fade'} w-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out`}
                style={{ aspectRatio: image.width && image.height ? `${image.width} / ${image.height}` : undefined }}
                loading={index < 4 ? 'eager' : 'lazy'}
                onLoad={index >= 4 ? onImgLoad : undefined}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        ))}
      </div>

      {remaining > 0 && (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setVisible((v) => Math.min(images.length, v + STEP))}
            className={`px-5 py-2 text-xs tracking-wider uppercase transition-colors font-medium ${primaryBtn}`}
          >
            Load more (+{Math.min(STEP, remaining)})
          </button>
          <button
            type="button"
            onClick={() => setVisible(images.length)}
            className={`px-5 py-2 text-xs tracking-wider uppercase transition-colors ${secondaryBtn}`}
          >
            Show all {images.length}
          </button>
        </div>
      )}
    </>
  );
}
