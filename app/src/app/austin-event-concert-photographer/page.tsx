import Link from 'next/link';
import { ArrowRight, Music, Sparkles, Users, Zap } from 'lucide-react';
import { siteConfig } from '@/lib/content';
import { getFirstImage, getGalleryImages } from '@/lib/gallery-config';

export default function AustinEventConcertPhotographerPage() {
  const hero =
    getFirstImage('events/beach-house-concert') ||
    getFirstImage('events/fire-dancer') ||
    '/og-image.jpg';

  const samples = [
    ...getGalleryImages('events/beach-house-concert').slice(0, 3),
    ...getGalleryImages('events/fire-dancer').slice(0, 3),
  ].slice(0, 6);

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img
          src={hero}
          alt="Austin concert and event photography by Sean Kenneth Doherty"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/35" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-40 w-full">
          <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
            <Music size={14} /> Austin, TX · Events & live music
          </p>
          <h1 className="font-wedding-display text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            Event & concert photographer
            <br />
            <span className="text-[#c9a962]">for nights that move</span>
          </h1>
          <p className="text-[#cfcfcf] text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            Live music, festivals, private parties, and brand events. I chase stage light, crowd
            energy, and the quiet beats between songs — so the night still feels loud the next morning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact?type=Concert%2FFestival"
              className="inline-flex items-center justify-center bg-[#c9a962] text-[#0a0a0a] px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-white transition-colors"
            >
              Book event coverage
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 text-sm tracking-wider uppercase hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
            >
              View event galleries
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: 'Concerts & festivals',
              body: 'Stage presence, crowd heat, and the frames that make a setlist look like a film still.',
            },
            {
              icon: Users,
              title: 'Private & brand events',
              body: 'Corporate nights, launches, and celebrations — candid coverage without killing the vibe.',
            },
            {
              icon: Sparkles,
              title: 'Performance arts',
              body: 'Fire, dance, and theatrical light. Long exposures when the motion is the story.',
            },
          ].map((item) => (
            <div key={item.title} className="border border-[#2a2a2a] bg-[#141414] p-6">
              <item.icon className="text-[#c9a962] mb-4" size={22} />
              <h2 className="font-wedding-display text-2xl text-white mb-3">{item.title}</h2>
              <p className="text-[#a0a0a0] text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {samples.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-[#0f0f0f] border-y border-[#2a2a2a]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-[#c9a962] text-xs tracking-[0.3em] uppercase mb-2">Selected frames</p>
                <h2 className="font-wedding-display text-3xl md:text-4xl text-white">
                  Energy, light, atmosphere
                </h2>
              </div>
              <Link
                href="/events"
                className="text-sm tracking-wider uppercase text-white/70 hover:text-[#c9a962] transition-colors inline-flex items-center"
              >
                Full event galleries
                <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
              {samples.map((img, i) => (
                <div key={img.src + i} className="relative aspect-[3/2] overflow-hidden border border-[#2a2a2a] bg-[#111]">
                  <img
                    src={img.src}
                    alt={`Event photography sample ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#c9a962] text-xs tracking-[0.3em] uppercase mb-4">How it works</p>
          <h2 className="font-wedding-display text-3xl md:text-5xl text-white mb-6">
            Tell me the venue. I&apos;ll bring the light.
          </h2>
          <p className="text-[#a0a0a0] mb-8 leading-relaxed">
            Share the date, room, and what you need delivered — promo stills, full night coverage,
            or a tight set of heroes for social. Based in {siteConfig.location}; available across
            Texas and for travel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?type=Concert%2FFestival"
              className="inline-flex items-center justify-center bg-[#c9a962] text-[#0a0a0a] px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-white transition-colors"
            >
              Inquire about a show
            </Link>
            <Link
              href="/contact?type=Corporate%20Event"
              className="inline-flex items-center justify-center border border-white/25 text-white px-8 py-4 text-sm tracking-wider uppercase hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
            >
              Corporate / private event
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
