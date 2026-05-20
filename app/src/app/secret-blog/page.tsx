import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Secret Blog',
  description: 'A hidden collection of essays and experiments.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

const posts = [
  {
    title: 'AI Needs Jesus',
    subtitle: 'The Book of the First Prompt: A Christian Case for Surviving Superintelligence',
    href: '/secret-blog/the-first-prompt',
  },
];

export default function SecretBlogPage() {
  return (
    <div className="min-h-screen bg-[#080706] px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#c9a962]">Secret Blog</p>
        <h1 className="font-wedding-display text-5xl leading-none md:text-7xl">
          Hidden Articles
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d8d2c3]">
          A quiet shelf for long-form writing, experiments, and strange little texts that do not belong in the main portfolio.
        </p>

        <div className="mt-12 border-t border-[#2a2a2a]">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group flex flex-col gap-4 border-b border-[#2a2a2a] py-8 transition-colors hover:border-[#c9a962] sm:flex-row sm:items-center sm:justify-between"
            >
              <span>
                <span className="block font-wedding-display text-3xl text-white transition-colors group-hover:text-[#c9a962]">
                  {post.title}
                </span>
                <span className="mt-2 block text-[#a0a0a0]">{post.subtitle}</span>
              </span>
              <ArrowRight className="text-[#c9a962] transition-transform group-hover:translate-x-1" size={22} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
