'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { photoArchiveRoutes } from '@/lib/content/photoarchive';

export default function PhotoArchiveLegacyRedirect() {
  useEffect(() => {
    window.location.replace(photoArchiveRoutes.product);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] px-4 py-32 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl border border-[#2a2a2a] bg-[#101010] p-6">
        <p className="font-aerospace-display text-xs uppercase tracking-[0.24em] text-[#c9a962]">
          Redirecting
        </p>
        <h1 className="mt-4 font-wedding-display text-4xl text-white">
          photoArchive has moved.
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-[#a0a0a0]">
          The canonical product page now lives at /projects/photoarchive.
        </p>
        <Link
          href={photoArchiveRoutes.product}
          className="mt-6 inline-flex border border-[#c9a962] bg-[#c9a962] px-5 py-3 text-sm uppercase tracking-[0.18em] text-black transition-colors hover:bg-transparent hover:text-[#c9a962]"
        >
          Continue
        </Link>
      </div>
    </div>
  );
}
