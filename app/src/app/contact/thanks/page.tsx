'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Check, ArrowRight, Instagram } from 'lucide-react';
import { siteConfig } from '@/lib/content';

function ThanksInner() {
  const params = useSearchParams();
  const type = params.get('type') || '';
  const isWedding = type.toLowerCase().includes('wedding');
  const isAero = type.toLowerCase().includes('aerospace');
  const isEvent =
    type.toLowerCase().includes('concert') ||
    type.toLowerCase().includes('event') ||
    type.toLowerCase().includes('festival');

  return (
    <div className="bg-[#0a0a0a] min-h-screen flex items-center">
      <div className="max-w-xl mx-auto px-4 py-32 text-center w-full">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#c9a962]/50 bg-[#c9a962]/10 mb-8">
          <Check className="text-[#c9a962]" size={28} />
        </div>
        <h1 className="font-wedding-display text-4xl md:text-5xl text-white mb-4">
          Inquiry received
        </h1>
        <p className="text-[#a0a0a0] mb-8 leading-relaxed">
          Thanks — I&apos;ll review your note and reply as soon as I can
          {type ? ` about your ${type.toLowerCase()} project` : ''}. If it&apos;s urgent, text or call{' '}
          <a href={siteConfig.phoneHref} className="text-[#c9a962] hover:text-white">
            {siteConfig.phone}
          </a>
          .
        </p>

        <div className="border border-[#2a2a2a] bg-[#141414] p-6 text-left mb-10 space-y-3">
          <p className="text-[#c9a962] text-xs tracking-[0.2em] uppercase">While you wait</p>
          {isWedding && (
            <Link href="/pricing" className="flex items-center text-white hover:text-[#c9a962] text-sm">
              Review wedding packages <ArrowRight size={14} className="ml-2" />
            </Link>
          )}
          {isAero && (
            <Link href="/aerospace" className="flex items-center text-white hover:text-[#c9a962] text-sm">
              Browse aerospace archive <ArrowRight size={14} className="ml-2" />
            </Link>
          )}
          {isEvent && (
            <Link href="/events" className="flex items-center text-white hover:text-[#c9a962] text-sm">
              Browse event galleries <ArrowRight size={14} className="ml-2" />
            </Link>
          )}
          <Link href="/galleries" className="flex items-center text-white hover:text-[#c9a962] text-sm">
            Explore the full portfolio <ArrowRight size={14} className="ml-2" />
          </Link>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-[#c9a962] text-sm"
          >
            <Instagram size={14} className="mr-2" /> Follow recent work
          </a>
        </div>

        <Link
          href="/"
          className="inline-flex items-center text-xs tracking-wider uppercase text-[#666] hover:text-[#c9a962]"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default function ContactThanksPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-[#0a0a0a] min-h-screen flex items-center justify-center text-[#a0a0a0]">
          Loading…
        </div>
      }
    >
      <ThanksInner />
    </Suspense>
  );
}
