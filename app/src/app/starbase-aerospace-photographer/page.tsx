import Link from 'next/link';
import { ArrowRight, Target, Camera, Radio } from 'lucide-react';
import { aerospacePage, siteConfig } from '@/lib/content';
import { getFirstImage } from '@/lib/gallery-config';

export default function StarbaseAerospacePhotographerPage() {
  const hero =
    getFirstImage('aerospace/starbase') ||
    getFirstImage('aerospace/starbase-film') ||
    '/images/galleries/aerospace/starbase/SKD-Starbase-2025-01-16-SKD-Starbase-2.webp';

  return (
    <div className="bg-[#e8e6e1] min-h-screen tech-grid">
      <section className="relative min-h-[70vh] flex items-end border-b-2 border-[#1a1a1a]">
        <img
          src={hero}
          alt="Starbase and aerospace photography by Sean Kenneth Doherty"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#e8e6e1] via-[#e8e6e1]/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-40 w-full">
          <div className="inline-flex items-center space-x-2 mb-6 border-2 border-[#1a1a1a] bg-[#e8e6e1]/90 px-3 py-1.5">
            <div className="w-2 h-2 bg-[#c41e3a] animate-pulse" />
            <span className="font-aerospace-display text-xs tracking-[0.25em] text-[#1a1a1a]">
              STARBASE, TX · COMMERCIAL & PRESS
            </span>
          </div>
          <h1 className="font-aerospace-display text-4xl md:text-6xl text-[#1a1a1a] mb-5">
            Aerospace photographer
            <br />
            <span className="text-[#c41e3a]">for launches & programs</span>
          </h1>
          <p className="font-aerospace-body text-[#2a2a2a] text-lg max-w-2xl mb-8 leading-relaxed">
            Documentation from the pad, the dunes, and the dark sky. Former SpaceX and Firefly
            avionics technician — I speak the vehicle, not just the spectacle.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact?type=Aerospace%2FCommercial"
              className="inline-flex items-center justify-center bg-[#c41e3a] text-white px-8 py-4 font-aerospace-display text-sm tracking-wider hover:bg-[#1a1a1a] transition-colors"
            >
              REQUEST COVERAGE
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              href="/aerospace"
              className="inline-flex items-center justify-center border-2 border-[#1a1a1a] text-[#1a1a1a] px-8 py-4 font-aerospace-display text-sm tracking-wider hover:bg-[#1a1a1a] hover:text-[#e8e6e1] transition-colors"
            >
              VIEW AEROSPACE ARCHIVE
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-4">
          {[
            {
              icon: Target,
              title: 'Program documentation',
              body: 'Starbase day-to-day, static fires, flight milestones — stills that brief engineers and tell the public story.',
            },
            {
              icon: Radio,
              title: 'Remote & multi-cam',
              body: 'Pad-proximate remote bodies, long glass, and coordinated coverage when one shooter isn’t enough.',
            },
            {
              icon: Camera,
              title: 'Press & commercial',
              body: 'Clean deliverables for media partners and brands. Fast turnaround when the window is short.',
            },
          ].map((item) => (
            <div key={item.title} className="border-2 border-[#1a1a1a] bg-[#d4d0c8] p-6">
              <item.icon className="text-[#c41e3a] mb-4" size={22} />
              <h2 className="font-aerospace-display text-lg text-[#1a1a1a] mb-2 tracking-wide">
                {item.title.toUpperCase()}
              </h2>
              <p className="font-aerospace-body text-sm text-[#4a4a4a] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-12 border-y-2 border-[#1a1a1a] bg-[#d4d0c8]">
        <div className="max-w-6xl mx-auto">
          <p className="font-aerospace-display text-xs tracking-[0.3em] text-[#4a4a4a] mb-6">
            WORKED WITH
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-px bg-[#1a1a1a]/20 border-2 border-[#1a1a1a]">
            {aerospacePage.experience.companies.map((c) => (
              <div
                key={c.name}
                className="bg-[#d4d0c8] flex flex-col items-center justify-center p-5 min-h-[100px]"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className={`max-h-10 w-auto object-contain opacity-90 ${c.invert ? 'invert' : ''}`}
                />
                <span className="font-aerospace-display text-[9px] text-[#4a4a4a] mt-3 tracking-wider text-center">
                  {c.role.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="font-aerospace-display text-3xl md:text-5xl text-[#1a1a1a] mb-4">
          {aerospacePage.cta.title}
          <span className="text-[#c41e3a]"> {aerospacePage.cta.titleAccent}</span>
        </h2>
        <p className="font-aerospace-body text-[#4a4a4a] max-w-xl mx-auto mb-8">
          {aerospacePage.cta.description} Based near Austin · available at Starbase and worldwide (
          {siteConfig.email}).
        </p>
        <Link
          href="/contact?type=Aerospace%2FCommercial"
          className="inline-flex items-center bg-[#c41e3a] text-white px-10 py-4 font-aerospace-display text-sm tracking-wider hover:bg-[#1a1a1a] transition-colors"
        >
          INITIATE CONTACT
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </section>
    </div>
  );
}
