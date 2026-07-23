'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, X, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { getGalleryImages, getFirstGalleryImage, type GalleryImage } from '@/lib/gallery-config';
import { abstractAlbums as abstractAlbumContent, abstractPage } from '@/lib/content';
import ProgressiveGalleryGrid from '@/components/ProgressiveGalleryGrid';

const emptyImage: GalleryImage = { filename: '', src: '', width: 0, height: 0 };

// Abstract albums - metadata from content layer, images from gallery config
const abstractAlbums = abstractAlbumContent.map(content => ({
  id: content.id,
  title: content.title,
  description: content.description,
  images: getGalleryImages(content.galleryId),
  coverImage: getFirstGalleryImage(content.galleryId) || emptyImage,
})).filter(album => album.images.length > 0); // Only show albums with images

const onImgLoad = (e: React.SyntheticEvent<HTMLImageElement>) => { e.currentTarget.classList.add('loaded'); };

const heroImage = abstractAlbums[0]?.coverImage.src || '';

export default function AbstractPage() {
  const [lightboxState, setLightboxState] = useState<{ albumIndex: number; imageIndex: number } | null>(null);
  const galleryRefs = useRef<Record<string, HTMLElement | null>>({});

  // Get current lightbox image
  const lightboxImage = lightboxState
    ? abstractAlbums[lightboxState.albumIndex].images[lightboxState.imageIndex]
    : null;

  // Preload adjacent images
  useEffect(() => {
    if (lightboxState) {
      const { albumIndex, imageIndex } = lightboxState;
      const album = abstractAlbums[albumIndex];
      const imagesToPreload = [
        album.images[imageIndex - 1],
        album.images[imageIndex + 1]
      ].filter(Boolean);

      imagesToPreload.forEach(imgObj => {
        const img = new Image();
        img.src = imgObj.src;
      });
    }
  }, [lightboxState]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxState) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const { albumIndex, imageIndex } = lightboxState;
      const album = abstractAlbums[albumIndex];

      switch (e.key) {
        case 'ArrowRight':
          if (imageIndex < album.images.length - 1) {
            setLightboxState({ albumIndex, imageIndex: imageIndex + 1 });
          } else if (albumIndex < abstractAlbums.length - 1) {
            setLightboxState({ albumIndex: albumIndex + 1, imageIndex: 0 });
          }
          break;
        case 'ArrowLeft':
          if (imageIndex > 0) {
            setLightboxState({ albumIndex, imageIndex: imageIndex - 1 });
          } else if (albumIndex > 0) {
            const prevAlbum = abstractAlbums[albumIndex - 1];
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
      const prevAlbum = abstractAlbums[albumIndex - 1];
      setLightboxState({ albumIndex: albumIndex - 1, imageIndex: prevAlbum.images.length - 1 });
    }
  }, [lightboxState]);

  const goToNext = useCallback(() => {
    if (!lightboxState) return;
    const { albumIndex, imageIndex } = lightboxState;
    const album = abstractAlbums[albumIndex];
    if (imageIndex < album.images.length - 1) {
      setLightboxState({ albumIndex, imageIndex: imageIndex + 1 });
    } else if (albumIndex < abstractAlbums.length - 1) {
      setLightboxState({ albumIndex: albumIndex + 1, imageIndex: 0 });
    }
  }, [lightboxState]);

  const scrollToGallery = (albumId: string) => {
    const element = galleryRefs.current[albumId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGalleries = () => {
    document.getElementById('galleries-start')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Abstract photography"
            className="w-full h-full object-cover object-center"
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
            <Sparkles size={16} className="text-[#c9a962] drop-shadow-lg" />
            <span className="text-[#c9a962] text-sm tracking-[0.3em] uppercase drop-shadow-lg">{abstractPage.hero.subtitle}</span>
            <Sparkles size={16} className="text-[#c9a962] drop-shadow-lg" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-wedding-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-2xl"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5), 0 2px 10px rgba(0,0,0,0.8)' }}
          >
            {abstractPage.hero.title} <span className="text-[#c9a962]">{abstractPage.hero.titleAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-10 drop-shadow-lg"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
          >
            {abstractPage.hero.description}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={scrollToGalleries}
            className="inline-flex items-center space-x-2 bg-[#c9a962] text-[#0a0a0a] px-8 py-4 rounded-none font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300"
          >
            <span>Explore Galleries</span>
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
              Abstract Galleries
            </h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              Select a gallery to explore, or scroll to view all collections
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-2 gap-4">
            {abstractAlbums.map((album, index) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => scrollToGallery(album.id)}
                className="group cursor-pointer break-inside-avoid mb-4"
              >
                <div className="relative overflow-hidden border-2 border-[#2a2a2a] hover:border-[#c9a962] transition-all duration-300 bg-[#141414]">
                  <img
                    src={album.coverImage.src}
                    alt={album.title}
                    width={album.coverImage.width}
                    height={album.coverImage.height}
                    className="gallery-fade w-full object-contain"
                    style={{ aspectRatio: `${album.coverImage.width} / ${album.coverImage.height}` }}
                    onLoad={onImgLoad}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-[#c9a962] text-xs tracking-wider uppercase mb-1">
                      {album.images.length} Photos
                    </p>
                    <h3 className="font-wedding-display text-xl text-white group-hover:text-[#c9a962] transition-colors">
                      {album.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Galleries */}
      {abstractAlbums.map((album, albumIndex) => (
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
                {album.title}
              </h3>
              <p className="text-[#a0a0a0] mt-2">{album.description}</p>
            </motion.div>

            {/* Masonry Grid */}
            <ProgressiveGalleryGrid
              images={album.images}
              title={album.title}
              onOpen={(index) => openLightbox(albumIndex, index)}
              theme="dark"
              onImgLoad={onImgLoad}
            />


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
        {lightboxState && lightboxImage?.src && (
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
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors p-2 disabled:opacity-0"
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              disabled={lightboxState.albumIndex === 0 && lightboxState.imageIndex === 0}
            >
              <ChevronLeft size={48} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors p-2 disabled:opacity-0"
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              disabled={lightboxState.albumIndex === abstractAlbums.length - 1 && lightboxState.imageIndex === abstractAlbums[abstractAlbums.length - 1].images.length - 1}
            >
              <ChevronRight size={48} />
            </button>

            {/* Image counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-wider">
              {abstractAlbums[lightboxState.albumIndex].title} — {lightboxState.imageIndex + 1} / {abstractAlbums[lightboxState.albumIndex].images.length}
            </div>

            {/* Image with loading state */}
            <motion.img
              key={lightboxImage.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={lightboxImage.src}
              alt={`${abstractAlbums[lightboxState.albumIndex]?.title || 'Abstract'} - photo ${lightboxState.imageIndex + 1}`}
              className="max-w-[calc(100%-120px)] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Keyboard hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-wider hidden sm:block">
              Use ← → arrow keys to navigate, ESC to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={32} className="text-[#c9a962] mx-auto mb-6" />
            <h2 className="font-wedding-display text-4xl md:text-6xl text-white mb-6">
              {abstractPage.cta.title} <span className="text-[#c9a962]">{abstractPage.cta.titleAccent}</span>
            </h2>
            <p className="text-[#a0a0a0] mb-10 max-w-xl mx-auto">
              {abstractPage.cta.description}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 bg-[#c9a962] text-[#0a0a0a] px-10 py-5 rounded-none font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300"
            >
              <span>{abstractPage.cta.buttonText}</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
