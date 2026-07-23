import Link from 'next/link';
import { ArrowRight, Camera, Heart, MapPin } from 'lucide-react';
import { weddingsPage, siteConfig } from '@/lib/content';
import { homeHeroImage } from '@/lib/gallery-config';

export default function AustinWeddingPhotographerPage() {
  const season = weddingsPage.cta.bookingSeason;

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img
          src={homeHeroImage}
          alt="Austin wedding photography by Sean Kenneth Doherty"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/55 to-[#0a0a0a]/30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-40 w-full">
          <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
            <MapPin size={14} /> Austin, TX · Wedding photography
          </p>
          <h1 className="font-wedding-display text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            Austin wedding photographer
            <br />
            <span className="text-[#c9a962]">for real moments</span>
          </h1>
          <p className="text-[#cfcfcf] text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            Documentary-style wedding photography and cinematography based in Austin.
            I photograph the glances, vows, and chaos that make your day yours — not a
            stiff pose session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact?type=Wedding"
              className="inline-flex items-center justify-center bg-[#c9a962] text-[#0a0a0a] px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-white transition-colors"
            >
              Check {season} availability
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 text-sm tracking-wider uppercase hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
            >
              View packages from $1,400
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: 'Emotion first',
              body: 'I shoot like a guest who happens to have a camera — present, quiet when it matters, and ready for the real laugh.',
            },
            {
              icon: Camera,
              title: 'Photo + film',
              body: 'Still photography and cinematic coverage so the day holds up in both frames and motion.',
            },
            {
              icon: MapPin,
              title: 'Austin & travel',
              body: `Based in ${siteConfig.location}. Happy to travel across Texas and for destination weddings nationwide.`,
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

      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-[#141414] border-y border-[#2a2a2a]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#c9a962] text-xs tracking-[0.3em] uppercase mb-4">How it works</p>
          <h2 className="font-wedding-display text-3xl md:text-5xl text-white mb-6">
            Transparent wedding collections
          </h2>
          <p className="text-[#a0a0a0] mb-8 leading-relaxed">
            Build a package online, see the number, then inquire with your selection already filled in.
            No mystery PDFs, no waiting a week for a quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/weddings"
              className="inline-flex items-center justify-center border border-[#c9a962]/50 text-[#c9a962] px-6 py-3 text-xs tracking-wider uppercase hover:bg-[#c9a962] hover:text-[#0a0a0a] transition-colors"
            >
              Browse wedding galleries
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center bg-[#c9a962] text-[#0a0a0a] px-6 py-3 text-xs tracking-wider uppercase font-medium hover:bg-white transition-colors"
            >
              Build a package
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="font-wedding-display text-3xl md:text-5xl text-white mb-4">
          {weddingsPage.cta.title}
        </h2>
        <p className="text-[#a0a0a0] max-w-xl mx-auto mb-8">{weddingsPage.cta.description}</p>
        <Link
          href="/contact?type=Wedding"
          className="inline-flex items-center bg-[#c9a962] text-[#0a0a0a] px-10 py-4 text-sm tracking-wider uppercase font-medium hover:bg-white transition-colors"
        >
          {weddingsPage.cta.buttonText}
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </section>
    </div>
  );
}
