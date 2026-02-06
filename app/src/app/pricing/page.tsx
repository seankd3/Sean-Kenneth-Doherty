'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

const packages = [
  {
    name: 'Ignition',
    price: '$3,500',
    description: 'Essential coverage for intimate celebrations',
    features: [
      '6 hours of coverage',
      '1 photographer',
      '300+ edited photos',
      'Online gallery with downloads',
      'Engagement session (30 min)',
      'Print release included',
    ],
    popular: false,
  },
  {
    name: 'Liftoff',
    price: '$5,500',
    description: 'Full-day documentation for your complete story',
    features: [
      '10 hours of coverage',
      '1 photographer + assistant',
      '500+ edited photos',
      'Online gallery with downloads',
      'Full engagement session (1 hr)',
      'Second shooter for ceremony',
      'Same-day sneak peeks',
      'Custom USB delivery',
      'Print release included',
    ],
    popular: true,
  },
  {
    name: 'Orbit',
    price: '$8,500',
    description: 'Premium coverage with cinematic additions',
    features: [
      'Unlimited hours of coverage',
      '2 photographers',
      '800+ edited photos',
      'Online gallery with downloads',
      'Full engagement session (1 hr)',
      'Rehearsal dinner coverage',
      '3-5 min highlight film',
      'Drone aerial photography',
      'Premium album (40 pages)',
      'Same-day sneak peeks',
      'Rush editing available',
      'Print release included',
    ],
    popular: false,
  },
];

const addOns = [
  { name: 'Additional hour of coverage', price: '$400' },
  { name: 'Second photographer (full day)', price: '$1,200' },
  { name: 'Engagement session', price: '$500' },
  { name: 'Rehearsal dinner coverage', price: '$800' },
  { name: 'Drone aerial photography', price: '$600' },
  { name: 'Premium photo album (40 pages)', price: '$900' },
  { name: 'Parent albums (set of 2)', price: '$600' },
  { name: 'Highlight film (3-5 min)', price: '$2,000' },
  { name: 'Full ceremony film', price: '$1,500' },
  { name: 'Rush editing (2-week delivery)', price: '$500' },
];

export default function PricingPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">
              Investment
            </p>
            <h1 className="font-wedding-display text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              Wedding<br />
              <span className="text-[#c9a962]">Packages</span>
            </h1>
            <p className="text-[#a0a0a0] text-lg max-w-xl mx-auto">
              Every love story deserves to be told beautifully. Choose the package
              that fits your celebration, or let&apos;s build something custom together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative border p-8 lg:p-10 ${
                  pkg.popular
                    ? 'border-[#c9a962] bg-[#c9a962]/5'
                    : 'border-[#2a2a2a] bg-[#111111]'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-[#c9a962] text-[#0a0a0a] px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
                      <Sparkles size={12} />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="font-wedding-display text-2xl text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-[#666] text-sm mb-6">{pkg.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-10">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={16} className="text-[#c9a962] mt-0.5 flex-shrink-0" />
                      <span className="text-[#a0a0a0] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center py-4 px-6 text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                    pkg.popular
                      ? 'bg-[#c9a962] text-[#0a0a0a] hover:bg-white'
                      : 'border border-[#c9a962] text-[#c9a962] hover:bg-[#c9a962] hover:text-[#0a0a0a]'
                  }`}
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-[#2a2a2a] bg-[#111111] p-10 md:p-14 text-center"
          >
            <h3 className="font-wedding-display text-3xl md:text-4xl text-white mb-4">
              Mission Control
            </h3>
            <p className="text-[#a0a0a0] max-w-xl mx-auto mb-2">Custom Package</p>
            <p className="text-[#666] max-w-xl mx-auto mb-8 text-sm">
              Multi-day weddings, destination events, or need something completely bespoke?
              Let&apos;s design a custom package tailored to your vision.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 bg-[#c9a962] text-[#0a0a0a] px-10 py-4 font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300"
            >
              <span>Get in Touch</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">
              Enhance Your Package
            </p>
            <h2 className="font-wedding-display text-4xl md:text-5xl text-white">
              Add-Ons
            </h2>
          </motion.div>

          <div className="space-y-0">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex justify-between items-center py-4 border-b border-[#1a1a1a]"
              >
                <span className="text-[#a0a0a0] text-sm">{addon.name}</span>
                <span className="text-white font-medium text-sm ml-4">{addon.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-wedding-display text-4xl md:text-6xl text-white mb-6">
              Ready to<br />
              <span className="text-[#c9a962]">Begin?</span>
            </h2>
            <p className="text-[#a0a0a0] mb-10 max-w-xl mx-auto">
              Every package includes a complimentary consultation to discuss your
              vision. No pressure, just a conversation about your day.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 bg-[#c9a962] text-[#0a0a0a] px-10 py-5 rounded-none font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
