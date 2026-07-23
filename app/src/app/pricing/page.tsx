'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import WeddingPricingBuilder from '@/components/WeddingPricingBuilder';

export default function PricingPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4"
          >
            Wedding collections
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-wedding-display text-4xl md:text-6xl text-white mb-6"
          >
            Transparent <span className="text-[#c9a962]">pricing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-[#a0a0a0] text-lg max-w-2xl mx-auto mb-8"
          >
            Build a collection that fits your day, then send an inquiry with your selection
            already filled in. No guessing games.
          </motion.p>
          <Link
            href="/weddings"
            className="inline-flex items-center text-sm tracking-wider uppercase text-white/80 hover:text-[#c9a962] transition-colors"
          >
            <span>View wedding galleries</span>
            <ArrowRight size={14} className="ml-2" />
          </Link>
        </div>
      </section>

      <WeddingPricingBuilder />

      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[#2a2a2a]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-wedding-display text-3xl text-white mb-4">
            Prefer to talk first?
          </h2>
          <p className="text-[#a0a0a0] mb-8">
            Skip the builder and reach out directly — happy to recommend a fit for your day.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-[#c9a962] text-[#0a0a0a] px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-white transition-colors"
          >
            <span>Contact</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
