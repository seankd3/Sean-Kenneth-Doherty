'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

/**
 * Sticky mobile inquire bar — always one tap from booking.
 * Hidden on contact (you're already there) and desktop (header CTA covers it).
 */
export default function InquireStrip() {
  const pathname = usePathname();
  if (!pathname || pathname.startsWith('/contact')) return null;

  const isAerospace =
    pathname.startsWith('/aerospace') || pathname.startsWith('/starbase-aerospace');
  const isEvents =
    pathname.startsWith('/events') || pathname.startsWith('/austin-event-concert');
  const isWedding =
    pathname.startsWith('/weddings') ||
    pathname.startsWith('/pricing') ||
    pathname.startsWith('/austin-wedding');

  const href = isAerospace
    ? '/contact?type=Aerospace%2FCommercial'
    : isEvents
      ? '/contact?type=Concert%2FFestival'
      : isWedding
        ? '/contact?type=Wedding'
        : '/contact';

  const label = isAerospace
    ? 'Book launch coverage'
    : isEvents
      ? 'Book event coverage'
      : isWedding
        ? 'Check wedding availability'
        : 'Start an inquiry';

  const bar = isAerospace
    ? 'bg-[#1a1a1a] border-[#c41e3a] text-[#e8e6e1]'
    : 'bg-[#0a0a0a]/95 border-[#c9a962] text-white';
  const btn = isAerospace
    ? 'bg-[#c41e3a] text-white'
    : 'bg-[#c9a962] text-[#0a0a0a]';

  return (
    <div
      className={`lg:hidden fixed bottom-0 inset-x-0 z-40 border-t backdrop-blur-md px-4 py-3 safe-bottom ${bar}`}
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="max-w-lg mx-auto flex items-center justify-between gap-3">
        <p className="text-xs tracking-wider uppercase opacity-80 leading-snug">
          Austin, TX · available worldwide
        </p>
        <Link
          href={href}
          className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 text-xs tracking-[0.14em] uppercase font-medium ${btn}`}
        >
          {label}
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
