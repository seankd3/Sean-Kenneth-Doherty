import Link from 'next/link';
import { ArrowRight, Camera, Music, Rocket, Check } from 'lucide-react';
import { siteConfig, weddingsPage } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Sean Kenneth Doherty | Wedding, Event & Aerospace Photography',
  description:
    'Hire Austin photographer Sean Kenneth Doherty for weddings, concerts/events, and aerospace launch documentation. Clear next steps, transparent wedding packages, commercial available worldwide.',
  alternates: { canonical: '/hire' },
  openGraph: {
    title: 'Hire Sean | Wedding · Events · Aerospace',
    description: 'Book wedding, concert, or launch photography. Austin-based, available worldwide.',
  },
};

const paths = [
  {
    icon: Camera,
    kicker: 'Weddings',
    title: 'Wedding photography & film',
    body: 'Documentary coverage of the real day. Transparent collections from $1,400 — build online, inquire with numbers already filled in.',
    bullets: ['Austin & destination', `Now booking ${weddingsPage.cta.bookingSeason}`, 'Photo + cinematography options'],
    primary: { href: '/contact?type=Wedding', label: 'Check wedding availability' },
    secondary: { href: '/pricing', label: 'Build a package' },
    seo: { href: '/austin-wedding-photographer', label: 'Austin wedding photographer' },
  },
  {
    icon: Music,
    kicker: 'Events & concerts',
    title: 'Live music & night energy',
    body: 'Concerts, festivals, private parties, brand nights. Stage light, crowd heat, deliverables that work for promo and social.',
    bullets: ['Live music & festivals', 'Corporate & private events', 'Performance / fire arts'],
    primary: { href: '/contact?type=Concert%2FFestival', label: 'Book event coverage' },
    secondary: { href: '/events', label: 'Event galleries' },
    seo: { href: '/austin-event-concert-photographer', label: 'Event & concert photographer' },
  },
  {
    icon: Rocket,
    kicker: 'Aerospace & press',
    title: 'Launch documentation',
    body: 'Starbase and program coverage from someone who has turned wrenches on flight hardware. Remote cams, long glass, commercial deliverables.',
    bullets: ['Starbase / Texas launches', 'Press & commercial', 'Former SpaceX & Firefly avionics'],
    primary: { href: '/contact?type=Aerospace%2FCommercial', label: 'Request coverage' },
    secondary: { href: '/aerospace', label: 'Aerospace archive' },
    seo: { href: '/starbase-aerospace-photographer', label: 'Starbase aerospace photographer' },
  },
];

export default function HirePage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Hire</p>
          <h1 className="font-wedding-display text-4xl md:text-6xl text-white mb-6">
            Let&apos;s put you on the calendar
          </h1>
          <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto mb-8">
            Three lanes. One inbox. Pick what you need — I&apos;ll reply with availability and next steps.
            Based in {siteConfig.location}; available worldwide.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-[#c9a962] text-[#0a0a0a] px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-white transition-colors"
          >
            Start an inquiry
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {paths.map((p) => (
            <article key={p.kicker} className="border border-[#2a2a2a] bg-[#141414] p-6 md:p-8 flex flex-col">
              <p.icon className="text-[#c9a962] mb-4" size={24} />
              <p className="text-[#c9a962] text-xs tracking-[0.25em] uppercase mb-2">{p.kicker}</p>
              <h2 className="font-wedding-display text-2xl md:text-3xl text-white mb-3">{p.title}</h2>
              <p className="text-[#a0a0a0] text-sm leading-relaxed mb-6 flex-1">{p.body}</p>
              <ul className="space-y-2 mb-8">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-[#cfcfcf]">
                    <Check size={14} className="text-[#c9a962] mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                <Link
                  href={p.primary.href}
                  className="flex items-center justify-center w-full bg-[#c9a962] text-[#0a0a0a] py-3 text-xs tracking-wider uppercase font-medium hover:bg-white transition-colors"
                >
                  {p.primary.label}
                </Link>
                <Link
                  href={p.secondary.href}
                  className="flex items-center justify-center w-full border border-[#2a2a2a] text-white py-3 text-xs tracking-wider uppercase hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
                >
                  {p.secondary.label}
                </Link>
                <Link
                  href={p.seo.href}
                  className="flex items-center justify-center text-[#666] hover:text-[#c9a962] text-xs tracking-wider uppercase transition-colors pt-1"
                >
                  {p.seo.label} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-16 border-t border-[#2a2a2a] text-center">
        <h2 className="font-wedding-display text-3xl text-white mb-4">Prefer to talk first?</h2>
        <p className="text-[#a0a0a0] mb-6">
          <a href={`mailto:${siteConfig.email}`} className="text-[#c9a962] hover:text-white">
            {siteConfig.email}
          </a>
          {' · '}
          <a href={siteConfig.phoneHref} className="text-[#c9a962] hover:text-white">
            {siteConfig.phone}
          </a>
        </p>
        <p className="text-[#666] text-xs tracking-wider uppercase whitespace-pre-line">
          {siteConfig.availability}
        </p>
      </section>
    </div>
  );
}
