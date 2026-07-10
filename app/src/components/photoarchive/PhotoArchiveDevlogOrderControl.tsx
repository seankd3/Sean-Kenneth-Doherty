'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import type { PhotoArchiveDevlogEntry } from '@/lib/content/photoarchive-devlog';
import { photoArchiveRoutes } from '@/lib/content/photoarchive';
import { cn } from '@/lib/utils';
import { PhotoArchiveDevlogList } from './PhotoArchiveDevlogList';

type DevlogOrder = 'newest' | 'oldest';

function readOrderFromLocation(): DevlogOrder {
  if (typeof window === 'undefined') return 'newest';
  return new URLSearchParams(window.location.search).get('order') === 'oldest'
    ? 'oldest'
    : 'newest';
}

export function PhotoArchiveDevlogOrderControl({
  entries,
}: {
  entries: PhotoArchiveDevlogEntry[];
}) {
  const [order, setOrder] = useState<DevlogOrder>('newest');

  useEffect(() => {
    setOrder(readOrderFromLocation());

    const handlePopState = () => setOrder(readOrderFromLocation());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const orderedEntries = useMemo(
    () => (order === 'oldest' ? [...entries].reverse() : entries),
    [entries, order],
  );

  const setOrderAndUrl = (nextOrder: DevlogOrder) => {
    setOrder(nextOrder);
    const nextUrl =
      nextOrder === 'oldest'
        ? `${photoArchiveRoutes.devlog}?order=oldest`
        : photoArchiveRoutes.devlog;
    window.history.pushState(null, '', nextUrl);
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 border-y border-[#2a2a2a] py-5">
        <p className="text-sm leading-relaxed text-[#a0a0a0]">
          Showing {order === 'oldest' ? 'oldest first' : 'newest first'}.
        </p>
        <div
          role="radiogroup"
          aria-label="Development log order"
          className="inline-flex border border-[#2a2a2a] bg-[#101010] p-1"
        >
          <button
            type="button"
            role="radio"
            aria-checked={order === 'newest'}
            onClick={() => setOrderAndUrl('newest')}
            className={cn(
              'inline-flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-[0.18em] transition-colors sm:px-4',
              order === 'newest'
                ? 'bg-[#c9a962] text-black'
                : 'text-[#d8d8d8] hover:bg-[#1a1a1a] hover:text-[#c9a962]',
            )}
          >
            <ArrowDown size={14} aria-hidden="true" />
            Newest
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={order === 'oldest'}
            onClick={() => setOrderAndUrl('oldest')}
            className={cn(
              'inline-flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-[0.18em] transition-colors sm:px-4',
              order === 'oldest'
                ? 'bg-[#c9a962] text-black'
                : 'text-[#d8d8d8] hover:bg-[#1a1a1a] hover:text-[#c9a962]',
            )}
          >
            <ArrowUp size={14} aria-hidden="true" />
            Oldest
          </button>
        </div>
      </div>
      <PhotoArchiveDevlogList entries={orderedEntries} />
    </>
  );
}
