'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/lib/testimonials';

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

export default function Testimonials({
  testimonials,
  title = 'Kind Words',
  subtitle = 'What Clients Say',
}: TestimonialsProps) {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">
            {subtitle}
          </p>
          <h2 className="font-wedding-display text-4xl md:text-5xl text-white">
            {title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111111] border border-[#1a1a1a] p-8 relative group hover:border-[#c9a962]/30 transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#c9a962]/10 group-hover:text-[#c9a962]/20 transition-colors" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < testimonial.rating
                        ? 'fill-[#c9a962] text-[#c9a962]'
                        : 'text-[#333]'
                    }
                  />
                ))}
              </div>

              <p className="text-[#a0a0a0] leading-relaxed mb-6 text-sm">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="border-t border-[#1a1a1a] pt-4">
                <p className="text-white font-medium text-sm">
                  {testimonial.name}
                </p>
                <p className="text-[#666] text-xs">
                  {testimonial.role} &middot; {testimonial.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
