'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Heart, X, ChevronDown, ChevronLeft, ChevronRight, Check, Sparkles } from 'lucide-react';
import { categories } from '@/lib/gallery-config-auto';
import { weddingAlbums as weddingAlbumContent, weddingsPage } from '@/lib/content';
import { testimonials } from '@/lib/testimonials';
import Testimonials from '@/components/Testimonials';

interface WeddingAlbum {
  id: string;
  couple: string;
  description: string;
  images: string[];
  coverImage: string;
  date?: string;
  location?: string;
}

// Build wedding albums dynamically from the auto-generated config
const buildWeddingAlbums = (): WeddingAlbum[] => {
  const weddingCategory = categories.weddings;
  if (!weddingCategory || !weddingCategory.albums) return [];

  return weddingCategory.albums.map(album => {
    const images = album.images.map(img => img.src);
    const firstImage = images[0] || '';

    // Look up metadata from centralized content layer
    const contentAlbum = weddingAlbumContent.find(a => a.galleryId === album.id);

    return {
      id: album.id.replace('weddings/', ''),
      couple: contentAlbum?.title || album.title,
      description: contentAlbum?.description || 'A beautiful celebration of love and commitment',
      images,
      coverImage: firstImage,
      date: contentAlbum?.date,
      location: contentAlbum?.location,
    };
  });
};

// Wedding albums data (defined outside for use in lightbox navigation)
const weddingAlbums = buildWeddingAlbums();

// Hero image from first album's first image
const weddingHeroImage = weddingAlbums[0]?.coverImage || '';

export default function WeddingsPage() {
  const [lightboxState, setLightboxState] = useState<{ albumIndex: number; imageIndex: number } | null>(null);
  const galleryRefs = useRef<Record<string, HTMLElement | null>>({});

  // Get current lightbox image
  const lightboxImage = lightboxState
    ? weddingAlbums[lightboxState.albumIndex].images[lightboxState.imageIndex]
    : null;

  // Preload adjacent images
  useEffect(() => {
    if (lightboxState) {
      const { albumIndex, imageIndex } = lightboxState;
      const album = weddingAlbums[albumIndex];
      const imagesToPreload = [
        album.images[imageIndex - 1],
        album.images[imageIndex + 1]
      ].filter(Boolean);

      imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [lightboxState]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxState) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const { albumIndex, imageIndex } = lightboxState;
      const album = weddingAlbums[albumIndex];

      switch (e.key) {
        case 'ArrowRight':
          if (imageIndex < album.images.length - 1) {
            setLightboxState({ albumIndex, imageIndex: imageIndex + 1 });
          } else if (albumIndex < weddingAlbums.length - 1) {
            setLightboxState({ albumIndex: albumIndex + 1, imageIndex: 0 });
          }
          break;
        case 'ArrowLeft':
          if (imageIndex > 0) {
            setLightboxState({ albumIndex, imageIndex: imageIndex - 1 });
          } else if (albumIndex > 0) {
            const prevAlbum = weddingAlbums[albumIndex - 1];
            setLightboxState({ albumIndex: albumIndex - 1, imageIndex: prevAlbum.images.length - 1 });
          }
          break;
        case 'Escape':
          setLightboxState(null);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxState]);

  const openLightbox = (albumIndex: number, imageIndex: number) => {
    setLightboxState({ albumIndex, imageIndex });
  };

  const closeLightbox = () => setLightboxState(null);

  const goToPrev = useCallback(() => {
    if (!lightboxState) return;
    const { albumIndex, imageIndex } = lightboxState;
    if (imageIndex > 0) {
      setLightboxState({ albumIndex, imageIndex: imageIndex - 1 });
    } else if (albumIndex > 0) {
      const prevAlbum = weddingAlbums[albumIndex - 1];
      setLightboxState({ albumIndex: albumIndex - 1, imageIndex: prevAlbum.images.length - 1 });
    }
  }, [lightboxState]);

  const goToNext = useCallback(() => {
    if (!lightboxState) return;
    const { albumIndex, imageIndex } = lightboxState;
    const album = weddingAlbums[albumIndex];
    if (imageIndex < album.images.length - 1) {
      setLightboxState({ albumIndex, imageIndex: imageIndex + 1 });
    } else if (albumIndex < weddingAlbums.length - 1) {
      setLightboxState({ albumIndex: albumIndex + 1, imageIndex: 0 });
    }
  }, [lightboxState]);

  const scrollToGallery = (albumId: string) => {
    const element = galleryRefs.current[albumId];
    if (element) {
      const offset = 100;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToGalleries = () => {
    const element = document.getElementById('galleries-start');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={weddingHeroImage}
            alt="Wedding photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0f0f0f]" />
          <div className="absolute inset-0 bg-[#0a0a0a]/30" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center space-x-2 mb-6"
          >
            <Heart size={16} className="text-[#c9a962] drop-shadow-lg" />
            <span className="text-[#c9a962] text-sm tracking-[0.3em] uppercase drop-shadow-lg">{weddingsPage.hero.subtitle}</span>
            <Heart size={16} className="text-[#c9a962] drop-shadow-lg" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-wedding-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-2xl"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5), 0 2px 10px rgba(0,0,0,0.8)' }}
          >
            {weddingsPage.hero.title.split(', ')[0]},<br />
            <span className="text-[#c9a962]">{weddingsPage.hero.title.split(', ')[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            {weddingsPage.hero.description}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={scrollToGalleries}
            className="inline-flex items-center space-x-2 bg-[#c9a962] text-[#0a0a0a] px-8 py-4 rounded-none font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300"
          >
            <span>View Galleries</span>
            <ChevronDown size={16} />
          </motion.button>
        </div>
      </section>

      {/* Album Cover Cards - Masonry Grid */}
      <section id="galleries-start" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Collections</p>
            <h2 className="font-wedding-display text-4xl md:text-5xl text-white mb-6">
              Wedding Stories
            </h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              Each love story is unique. Explore galleries from beautiful couples I&apos;ve had the honor to photograph.
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
            {weddingAlbums.map((album, index) => (
              <motion.button
                key={album.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => scrollToGallery(album.id)}
                type="button"
                aria-label={`View ${album.couple} gallery`}
                className="group cursor-pointer break-inside-avoid mb-4 w-full text-left"
              >
                <div className="relative overflow-hidden border-2 border-[#2a2a2a] hover:border-[#c9a962] transition-all duration-300 bg-[#141414]">
                  <img
                    src={album.coverImage}
                    alt={album.couple}
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-[#c9a962] text-xs tracking-wider uppercase mb-1">
                      {album.images.length} Photos
                    </p>
                    <h3 className="font-wedding-display text-xl text-white group-hover:text-[#c9a962] transition-colors">
                      {album.couple}
                    </h3>
                    {album.location && (
                      <p className="text-[#a0a0a0] text-sm mt-1">
                        {album.location} {album.date && `• ${album.date}`}
                      </p>
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Full Galleries */}
      {weddingAlbums.map((album, albumIndex) => (
        <section
          key={album.id}
          ref={(el) => { galleryRefs.current[album.id] = el; }}
          className={`py-20 px-2 sm:px-4 ${albumIndex % 2 === 0 ? 'bg-[#0a0a0a]' : 'bg-[#0f0f0f]'}`}
        >
          <div className="max-w-[1920px] mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="px-2 mb-8 text-center"
            >
              <div className="flex items-center justify-center space-x-3 mb-2">
                <span className="text-[#c9a962] text-sm tracking-[0.2em] uppercase">
                  {String(albumIndex + 1).padStart(2, '0')}
                </span>
                <div className="h-px w-12 bg-[#c9a962]/30" />
                <span className="text-[#a0a0a0] text-sm">{album.images.length} Photos</span>
              </div>
              <h3 className="font-wedding-display text-3xl md:text-4xl text-white">
                {album.couple}
              </h3>
              {album.location && (
                <p className="text-[#a0a0a0] mt-2">{album.location} {album.date && `• ${album.date}`}</p>
              )}
            </motion.div>

            {/* Masonry Grid */}
            <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
              {album.images.map((image, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
                  type="button"
                  aria-label={`Open ${album.couple} photo ${index + 1}`}
                  className="group relative break-inside-avoid mb-2 cursor-pointer w-full text-left"
                  onClick={() => openLightbox(albumIndex, index)}
                >
                  <div className="relative overflow-hidden border border-[#2a2a2a] group-hover:border-[#c9a962]/50 group-hover:shadow-[0_0_20px_rgba(201,169,98,0.15)] transition-all duration-500 bg-[#1a1a1a]">
                    <img
                      src={image}
                      alt={`${album.couple} ${index + 1}`}
                      className="w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                      loading="lazy"
                    />
                    {/* Hover overlay with subtle gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Back to Top Link */}
            <div className="mt-12 text-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-[#a0a0a0] hover:text-[#c9a962] text-sm tracking-wider uppercase transition-colors"
              >
                Back to Top
              </button>
            </div>
          </div>
        </section>
      ))}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxState && lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            {/* Navigation arrows */}
            <button
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors p-2 disabled:opacity-0"
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              disabled={lightboxState.albumIndex === 0 && lightboxState.imageIndex === 0}
              aria-label="Previous image"
            >
              <ChevronLeft size={32} className="sm:w-12 sm:h-12" />
            </button>
            <button
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors p-2 disabled:opacity-0"
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              disabled={lightboxState.albumIndex === weddingAlbums.length - 1 && lightboxState.imageIndex === weddingAlbums[weddingAlbums.length - 1].images.length - 1}
              aria-label="Next image"
            >
              <ChevronRight size={32} className="sm:w-12 sm:h-12" />
            </button>

            {/* Image counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-wider">
              {weddingAlbums[lightboxState.albumIndex].couple} — {lightboxState.imageIndex + 1} / {weddingAlbums[lightboxState.albumIndex].images.length}
            </div>

            {/* Image with loading state */}
            <motion.img
              key={lightboxImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={lightboxImage}
              alt="Wedding photo"
              className="max-w-[calc(100%-80px)] sm:max-w-[calc(100%-120px)] max-h-[80vh] sm:max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Keyboard hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-wider hidden sm:block">
              Use ← → arrow keys to navigate, ESC to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials */}
      <div className="border-t border-[#2a2a2a]">
        <Testimonials
          testimonials={testimonials}
          title="Love Letters"
          subtitle="From Our Couples"
        />
      </div>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Investment</p>
            <h2 className="font-wedding-display text-4xl md:text-5xl text-white mb-6">
              Wedding Packages
            </h2>
            <p className="text-[#a0a0a0] max-w-xl mx-auto">
              Every love story deserves to be told beautifully. Choose the package
              that fits your celebration, or let&apos;s build something custom together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                name: 'Essentials',
                price: '$3,500',
                description: 'Perfect for intimate celebrations',
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
                name: 'Complete',
                price: '$5,500',
                description: 'Full-day coverage for your complete story',
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
                name: 'Premiere',
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
            ].map((pkg, index) => (
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
                  <h3 className="font-wedding-display text-2xl text-white mb-2">{pkg.name}</h3>
                  <p className="text-[#666] text-sm mb-6">{pkg.description}</p>
                  <span className="text-4xl font-bold text-white">{pkg.price}</span>
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

          {/* Custom Package */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-[#2a2a2a] bg-[#111111] p-10 md:p-14 text-center mt-12"
          >
            <h3 className="font-wedding-display text-3xl md:text-4xl text-white mb-4">
              Custom Package
            </h3>
            <p className="text-[#666] max-w-xl mx-auto mb-8 text-sm">
              Multi-day weddings, destination events, or need something completely bespoke?
              Let&apos;s design a package tailored to your vision.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 bg-[#c9a962] text-[#0a0a0a] px-10 py-4 font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300"
            >
              <span>Get in Touch</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Add-Ons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Enhance Your Package</p>
              <h3 className="font-wedding-display text-3xl md:text-4xl text-white">Add-Ons</h3>
            </div>
            <div className="max-w-3xl mx-auto space-y-0">
              {[
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
              ].map((addon, index) => (
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
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heart size={32} className="text-[#c9a962] mx-auto mb-6" />
            <h2 className="font-wedding-display text-4xl md:text-6xl text-white mb-6">
              {weddingsPage.cta.title}
            </h2>
            <p className="text-[#a0a0a0] mb-10 max-w-xl mx-auto">
              {weddingsPage.cta.description}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 bg-[#c9a962] text-[#0a0a0a] px-10 py-5 rounded-none font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300"
            >
              <span>{weddingsPage.cta.buttonText}</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
