import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { weddingsPage, siteConfig } from '@/lib/content';
import { homeHeroImage } from '@/lib/gallery-config';

export default function TexasWeddingPhotographerPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="relative min-h-[65vh] flex items-end overflow-hidden">
        <img
          src={homeHeroImage}
          alt="Texas wedding photography"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/55 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 pb-16 pt-40 w-full">
          <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
            <MapPin size={14} /> Texas · Wedding photography
          </p>
          <h1 className="font-wedding-display text-4xl md:text-6xl text-white mb-6">
            Texas wedding photographer
            <br />
            <span className="text-[#c9a962]">Hill Country to the coast</span>
          </h1>
          <p className="text-[#cfcfcf] text-lg max-w-2xl mb-8">
            Austin-based documentary wedding photography for couples across Texas — hill country
            venues, city halls, ranches, and destination weekends. Collections from $1,400.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact?type=Wedding"
              className="inline-flex items-center justify-center bg-[#c9a962] text-[#0a0a0a] px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-white transition-colors"
            >
              Check {weddingsPage.cta.bookingSeason} availability
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              href="/austin-wedding-photographer"
              className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 text-sm tracking-wider uppercase hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
            >
              Austin-focused page
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 max-w-3xl mx-auto text-center">
        <h2 className="font-wedding-display text-3xl text-white mb-4">Where I shoot</h2>
        <p className="text-[#a0a0a0] mb-8 leading-relaxed">
          Primary base: {siteConfig.location}. Frequent coverage across Central Texas and the Hill
          Country, with travel for Dallas, Houston, San Antonio, and destination weddings.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-xs tracking-wider uppercase text-[#a0a0a0]">
          {['Austin', 'Hill Country', 'San Antonio', 'Dallas', 'Houston', 'Destination'].map((c) => (
            <span key={c} className="border border-[#2a2a2a] px-3 py-1.5">
              {c}
            </span>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 border-t border-[#2a2a2a] text-center">
        <Link
          href="/pricing"
          className="inline-flex items-center bg-[#c9a962] text-[#0a0a0a] px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-white transition-colors mr-0 sm:mr-4 mb-4 sm:mb-0"
        >
          Build a package
        </Link>
        <Link
          href="/weddings"
          className="inline-flex items-center border border-white/25 text-white px-8 py-4 text-sm tracking-wider uppercase hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
        >
          View galleries
        </Link>
      </section>
    </div>
  );
}
