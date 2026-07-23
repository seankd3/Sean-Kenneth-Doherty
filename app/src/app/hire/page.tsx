import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Camera, Music, Rocket, Check, Clock, MessageSquare, Calendar } from 'lucide-react';
import { siteConfig, weddingsPage, aerospacePage } from '@/lib/content';
import { homeHeroImage, getFirstImage } from '@/lib/gallery-config';

export const metadata: Metadata = {
  title: 'Hire Sean Kenneth Doherty | Wedding, Event & Aerospace Photography',
  description:
    'Book Austin photographer Sean Kenneth Doherty for weddings (packages from $1,400), concerts & events, and Starbase aerospace documentation. Clear process. Fast reply.',
  alternates: { canonical: '/hire' },
  openGraph: {
    title: 'Hire Sean | Wedding · Events · Aerospace',
    description: 'Book wedding, concert, or launch photography. Austin-based, available worldwide.',
    images: [{ url: homeHeroImage || '/og-image.jpg', alt: 'Sean Kenneth Doherty Photography' }],
  },
};

const season = weddingsPage.cta.bookingSeason;

const lanes = [
  {
    key: 'weddings',
    icon: Camera,
    kicker: '01 — Weddings',
    title: 'Your day, told honestly',
    body: 'Documentary wedding photography & film. Transparent collections you build online — no mystery quotes.',
    image: homeHeroImage,
    imageAlt: 'Wedding photography',
    bullets: [
      `Now booking ${season}`,
      'Collections from $1,400',
      'Austin, Texas & destination',
    ],
    primary: { href: '/contact?type=Wedding', label: 'Check availability' },
    secondary: { href: '/pricing', label: 'Build a package' },
    tertiary: { href: '/austin-wedding-photographer', label: 'Austin wedding photographer' },
  },
  {
    key: 'events',
    icon: Music,
    kicker: '02 — Events & concerts',
    title: 'Nights that still feel loud',
    body: 'Live music, festivals, brand nights, private parties. Stage light, crowd heat, promo-ready stills.',
    image:
      getFirstImage('events/beach-house-concert') ||
      getFirstImage('events/fire-dancer') ||
      homeHeroImage,
    imageAlt: 'Concert and event photography',
    bullets: [
      'Concerts & festivals',
      'Corporate & private events',
      'Same-week social deliverables available',
    ],
    primary: { href: '/contact?type=Concert%2FFestival', label: 'Book event coverage' },
    secondary: { href: '/events', label: 'Event galleries' },
    tertiary: { href: '/austin-event-concert-photographer', label: 'Event & concert photographer' },
  },
  {
    key: 'aerospace',
    icon: Rocket,
    kicker: '03 — Aerospace & press',
    title: 'Launches, programs, proof',
    body: 'Starbase documentation from a former SpaceX & Firefly avionics tech. Remote cams, long glass, commercial files.',
    image:
      getFirstImage('aerospace/starbase') ||
      getFirstImage('aerospace/starbase-film') ||
      homeHeroImage,
    imageAlt: 'Aerospace and launch photography',
    bullets: [
      'Starbase / Texas programs',
      'Press & commercial clients',
      'Hardware fluency, not just spectacle',
    ],
    primary: { href: '/contact?type=Aerospace%2FCommercial', label: 'Request coverage' },
    secondary: { href: '/aerospace', label: 'Aerospace archive' },
    tertiary: { href: '/starbase-aerospace-photographer', label: 'Starbase photographer' },
  },
];

const steps = [
  {
    icon: MessageSquare,
    n: '01',
    title: 'Tell me the job',
    body: 'Date, place, and what you need delivered. Use the form — it lands in my inbox.',
  },
  {
    icon: Calendar,
    n: '02',
    title: 'Lock the date',
    body: 'I reply with availability, scope, and next steps. Weddings can start from a built package.',
  },
  {
    icon: Clock,
    n: '03',
    title: 'Shoot & deliver',
    body: 'I show up prepared. You get a clean set that holds up in albums, decks, and press.',
  },
];

const faqs = [
  {
    q: 'How fast do you reply?',
    a: 'Usually within one business day. For time-sensitive launches or same-week events, call or text.',
  },
  {
    q: 'Do you travel?',
    a: `Yes. Based in ${siteConfig.location}, available across Texas and for destination work worldwide.`,
  },
  {
    q: 'What about wedding pricing?',
    a: 'Collections start at $1,400. Build a package online, then inquire with your selection already filled in.',
  },
  {
    q: 'Commercial / aerospace rates?',
    a: 'Scoped per assignment (day rate, remotes, deliverables). Send the brief — I’ll quote clearly.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function HirePage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden border-b border-[#2a2a2a]">
        <img
          src={homeHeroImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-36 w-full">
          <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">
            Hire · {siteConfig.location}
          </p>
          <h1 className="font-wedding-display text-4xl md:text-6xl lg:text-7xl text-white mb-5">
            Book the photographer
            <br />
            <span className="text-[#c9a962]">who shows up ready</span>
          </h1>
          <p className="text-[#cfcfcf] text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            Weddings. Live events. Aerospace. Three specialties, one standard — work that earns trust
            in the room and holds up forever after.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#c9a962] text-[#0a0a0a] px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-white transition-colors"
            >
              Start an inquiry
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 text-sm tracking-wider uppercase hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
            >
              Call {siteConfig.phone}
            </a>
          </div>
          <p className="mt-6 text-[#a0a0a0] text-xs tracking-wider uppercase">
            Now booking {season} weddings · events &amp; launches year-round
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 md:py-16 border-b border-[#2a2a2a] bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#c9a962] text-xs tracking-[0.3em] uppercase mb-8 text-center">
            How booking works
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            {steps.map((s) => (
              <div key={s.n} className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-10 h-10 border border-[#c9a962]/40 text-[#c9a962] mb-4">
                  <s.icon size={18} />
                </div>
                <p className="text-[#666] text-xs tracking-[0.2em] uppercase mb-2">{s.n}</p>
                <h2 className="font-wedding-display text-2xl text-white mb-2">{s.title}</h2>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lanes — visual cards */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center mb-4">
            <h2 className="font-wedding-display text-3xl md:text-5xl text-white mb-3">
              Pick your lane
            </h2>
            <p className="text-[#a0a0a0] max-w-xl mx-auto">
              Every path ends in the same place: a real conversation about your date and deliverables.
            </p>
          </div>

          {lanes.map((lane, i) => (
            <article
              key={lane.key}
              className={`grid lg:grid-cols-2 border border-[#2a2a2a] bg-[#141414] overflow-hidden ${
                i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="relative min-h-[260px] lg:min-h-full aspect-[16/11] lg:aspect-auto">
                <img
                  src={lane.image}
                  alt={lane.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#141414]/30" />
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <lane.icon className="text-[#c9a962] mb-3" size={22} />
                <p className="text-[#c9a962] text-xs tracking-[0.25em] uppercase mb-2">{lane.kicker}</p>
                <h3 className="font-wedding-display text-3xl md:text-4xl text-white mb-3">{lane.title}</h3>
                <p className="text-[#a0a0a0] leading-relaxed mb-6">{lane.body}</p>
                <ul className="space-y-2 mb-8">
                  {lane.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-[#cfcfcf]">
                      <Check size={14} className="text-[#c9a962] mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={lane.primary.href}
                    className="inline-flex items-center bg-[#c9a962] text-[#0a0a0a] px-6 py-3 text-xs tracking-wider uppercase font-medium hover:bg-white transition-colors"
                  >
                    {lane.primary.label}
                    <ArrowRight size={14} className="ml-2" />
                  </Link>
                  <Link
                    href={lane.secondary.href}
                    className="inline-flex items-center border border-[#2a2a2a] text-white px-6 py-3 text-xs tracking-wider uppercase hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
                  >
                    {lane.secondary.label}
                  </Link>
                </div>
                <Link
                  href={lane.tertiary.href}
                  className="mt-4 text-xs tracking-wider uppercase text-[#666] hover:text-[#c9a962] transition-colors w-fit"
                >
                  {lane.tertiary.label} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Proof strip */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 bg-[#0f0f0f] border-y border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[#c9a962] text-xs tracking-[0.3em] uppercase mb-8">Worked with</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center opacity-85">
            {aerospacePage.experience.companies.map((c) => (
              <div key={c.name} className="h-12 flex items-center justify-center w-full px-2" title={c.name}>
                <img
                  src={c.logo}
                  alt={c.name}
                  className={`max-h-9 max-w-[100px] object-contain ${c.invert ? 'invert' : ''}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-wedding-display text-3xl md:text-4xl text-white text-center mb-10">
            Straight answers
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group border border-[#2a2a2a] bg-[#141414] open:border-[#c9a962]/40"
              >
                <summary className="cursor-pointer list-none px-5 py-4 font-medium text-white flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-[#c9a962] text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="px-5 pb-5 text-[#a0a0a0] text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 border-t border-[#2a2a2a] text-center">
        <h2 className="font-wedding-display text-3xl md:text-5xl text-white mb-4">
          Ready when you are
        </h2>
        <p className="text-[#a0a0a0] max-w-lg mx-auto mb-8">
          Send the date. I&apos;ll send the plan.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#c9a962] text-[#0a0a0a] px-10 py-4 text-sm tracking-wider uppercase font-medium hover:bg-white transition-colors"
          >
            Inquire now
            <ArrowRight size={16} className="ml-2" />
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center justify-center border border-white/25 text-white px-10 py-4 text-sm tracking-wider uppercase hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>
      </section>
    </div>
  );
}
