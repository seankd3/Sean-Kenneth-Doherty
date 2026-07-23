import Link from 'next/link';
import { ArrowRight, Music } from 'lucide-react';
import { getFirstImage, getGalleryImages } from '@/lib/gallery-config';

export default function LiveMusicPhotographerAustinPage() {
  const hero = getFirstImage('events/beach-house-concert') || '/og-image.jpg';
  const samples = getGalleryImages('events/beach-house-concert').slice(0, 6);

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="relative min-h-[65vh] flex items-end overflow-hidden">
        <img
          src={hero}
          alt="Live music photography in Austin"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/55 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 pb-16 pt-40 w-full">
          <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
            <Music size={14} /> Austin · Live music
          </p>
          <h1 className="font-wedding-display text-4xl md:text-6xl text-white mb-6">
            Live music photographer
            <br />
            <span className="text-[#c9a962]">in Austin, TX</span>
          </h1>
          <p className="text-[#cfcfcf] text-lg max-w-2xl mb-8">
            Club shows, festivals, and tour stops. I shoot the stage, the pit, and the faces that
            make a night unforgettable — clean files for promo, press, and social the same week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact?type=Concert%2FFestival"
              className="inline-flex items-center justify-center bg-[#c9a962] text-[#0a0a0a] px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-white transition-colors"
            >
              Book a show
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              href="/austin-event-concert-photographer"
              className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 text-sm tracking-wider uppercase hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
            >
              All events coverage
            </Link>
          </div>
        </div>
      </section>

      {samples.length > 0 && (
        <section className="px-4 py-12 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-2">
          {samples.map((img, i) => (
            <div key={img.src + i} className="relative aspect-[3/2] overflow-hidden border border-[#2a2a2a]">
              <img
                src={img.src}
                alt={`Live music photo ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </section>
      )}

      <section className="px-4 py-16 text-center border-t border-[#2a2a2a]">
        <p className="text-[#a0a0a0] max-w-xl mx-auto mb-8">
          Artists, venues, promoters, and brands — tell me the room and the deliverable list.
        </p>
        <Link
          href="/contact?type=Concert%2FFestival"
          className="inline-flex items-center bg-[#c9a962] text-[#0a0a0a] px-10 py-4 text-sm tracking-wider uppercase font-medium hover:bg-white transition-colors"
        >
          Inquire now
        </Link>
      </section>
    </div>
  );
}
