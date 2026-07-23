import Link from 'next/link';
import { weddingsPage } from '@/lib/content';

/** Slim urgency strip — booking season + one-tap hire */
export default function BookingBanner() {
  return (
    <div className="bg-[#c9a962] text-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <p className="text-xs sm:text-sm font-medium tracking-wide">
          Now booking <strong>{weddingsPage.cta.bookingSeason}</strong> weddings · events &amp; launches year-round
        </p>
        <Link
          href="/hire"
          className="text-xs tracking-[0.14em] uppercase font-semibold underline-offset-4 hover:underline shrink-0"
        >
          See how to hire →
        </Link>
      </div>
    </div>
  );
}
