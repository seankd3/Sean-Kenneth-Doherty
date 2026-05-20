import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Published essays and long-form work by Sean Kenneth Doherty.',
  alternates: {
    canonical: '/writing',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-[#080706] px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c9a962]">Writing</p>
        <h1 className="font-wedding-display text-5xl leading-none md:text-7xl">
          Essays and Long-Form Work
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d8d2c3]">
          Published pieces on technology, attention, images, language, and the human stakes inside the tools we build.
        </p>
      </section>

      <section className="mx-auto mt-14 grid max-w-5xl gap-6">
        <Link
          href="/ai-needs-jesus"
          className="group block border border-[#2a2a2a] bg-[#0f0d0b] p-6 transition-colors hover:border-[#c9a962]"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c9a962]">Launch Hub / Packet Set</p>
          <h2 className="font-wedding-display text-3xl text-white md:text-4xl">
            AI Needs Jesus Launch Hub
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[#d8d2c3]">
            Shareable manifesto, twelve scenes, secular doorway essay, secular op-ed, podcast brief, 30-day distribution calendar, audience landing copy, outreach map, outreach tracker, first-week outreach queue, outreach reply kit, engineer memo, engineer worksheet, church handout, post sequence, one-page objection card, anti-doomer essay, formation guide, quote-card set, talk script, pledge, discussion guide, and technical appendix for the book&apos;s public argument.
          </p>
          <p className="mt-5 text-sm uppercase tracking-[0.2em] text-[#c9a962] group-hover:text-white">
            Use the launch assets
          </p>
        </Link>

        <Link
          href="/the-first-prompt"
          className="group block border border-[#2a2a2a] bg-[#0f0d0b] p-6 transition-colors hover:border-[#c9a962]"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c9a962]">Book / AI Alignment / Theology</p>
          <h2 className="font-wedding-display text-3xl text-white md:text-4xl">
            AI Needs Jesus
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[#d8d2c3]">
            The Book of the First Prompt: a Christian case for surviving superintelligence, arguing that every alignment target hides an altar and every lesser god becomes dangerous when amplified into extreme power.
          </p>
          <p className="mt-5 text-sm uppercase tracking-[0.2em] text-[#c9a962] group-hover:text-white">
            Read the book
          </p>
        </Link>
      </section>
    </div>
  );
}
