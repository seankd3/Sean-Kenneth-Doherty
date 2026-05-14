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
          href="/the-first-prompt"
          className="group block border border-[#2a2a2a] bg-[#0f0d0b] p-6 transition-colors hover:border-[#c9a962]"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c9a962]">Essay / Audiobook / Video</p>
          <h2 className="font-wedding-display text-3xl text-white md:text-4xl">
            The Book of the First Prompt
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[#d8d2c3]">
            A Genesis of the Age of Artificial Tongues: an essay on artificial intelligence, language, agency, and what mankind becomes when surrounded by things that imitate the easiest parts of humanity.
          </p>
          <p className="mt-5 text-sm uppercase tracking-[0.2em] text-[#c9a962] group-hover:text-white">
            Read the full piece
          </p>
        </Link>
      </section>
    </div>
  );
}
