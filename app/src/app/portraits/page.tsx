'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, User, X, ChevronDown } from 'lucide-react';
import {
  getGalleryImages,
  getFirstGalleryImage,
  getFirstImage,
  type GalleryImage
} from '@/lib/gallery-config';
import { portraitAlbums as portraitAlbumContent, portraitsPage } from '@/lib/content';
import ProgressiveGalleryGrid from '@/components/ProgressiveGalleryGrid';

const emptyImage: GalleryImage = { filename: '', src: '', width: 0, height: 0 };
const onImgLoad = (e: React.SyntheticEvent<HTMLImageElement>) => { e.currentTarget.classList.add('loaded'); };

interface SubAlbum {
  id: string;
  title: string;
  description: string;
  images: GalleryImage[];
  coverImage: GalleryImage;
  category?: string;
}

export default function PortraitsPage() {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const galleryRefs = useRef<Record<string, HTMLElement | null>>({});

  const heroImage = getFirstImage('portraits/hillary-astrid') || '';

  // Image arrays from gallery config, metadata from content layer
  const imageMap: Record<string, GalleryImage[]> = {
    'hillary-astrid': getGalleryImages('portraits/hillary-astrid'),
    'blackbeltbbj': getGalleryImages('portraits/blackbeltbbj'),
  };

  const subAlbums: SubAlbum[] = portraitAlbumContent.map(content => ({
    id: content.id,
    title: content.title,
    description: content.description,
    images: imageMap[content.id] || [],
    coverImage: getFirstGalleryImage(content.legacyId || content.galleryId) || imageMap[content.id]?.[0] || emptyImage,
    category: content.category,
  }));

  const scrollToGallery = (albumId: string) => {
    const element = galleryRefs.current[albumId];
    if (element) {
      const offset = 100; // Account for sticky header
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
            src={heroImage}
            alt="Portrait photography"
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
            <User size={16} className="text-[#c9a962] drop-shadow-lg" />
            <span className="text-[#c9a962] text-sm tracking-[0.3em] uppercase drop-shadow-lg">{portraitsPage.hero.subtitle}</span>
            <User size={16} className="text-[#c9a962] drop-shadow-lg" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-wedding-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-2xl"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5), 0 2px 10px rgba(0,0,0,0.8)' }}
          >
            {portraitsPage.hero.title} <span className="text-[#c9a962]">{portraitsPage.hero.titleAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-10 drop-shadow-lg"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
          >
            {portraitsPage.hero.description}
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
              Portrait Galleries
            </h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              Select a gallery to explore, or scroll to view all collections
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-2 gap-4">
            {subAlbums.map((album, index) => (
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
                    {album.category && (
                      <p className="text-[#a0a0a0] text-sm mt-1">{album.category}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Galleries */}
      {subAlbums.map((album, albumIndex) => (
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
              className="px-2 mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
            >
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-[#c9a962] text-sm tracking-[0.2em] uppercase">
                    {String(albumIndex + 1).padStart(2, '0')}
                  </span>
                  <div className="h-px w-12 bg-[#c9a962]/30" />
                  <span className="text-[#a0a0a0] text-sm">{album.images.length} Photos</span>
                </div>
                <h3 className="font-wedding-display text-3xl md:text-4xl text-white">
                  {album.title}
                </h3>
              </div>
              {album.category && (
                <span className="text-[#a0a0a0] text-sm">{album.category}</span>
              )}
            </motion.div>

            {/* Masonry Grid */}
            <ProgressiveGalleryGrid
              images={album.images}
              title={album.title}
              onOpen={(index) => setLightboxImage(album.images[index])}
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
      {lightboxImage?.src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white"
            onClick={() => setLightboxImage(null)}
          >
            <X size={32} />
          </button>
          <img
            key={lightboxImage.src}
            src={lightboxImage.src}
            alt="Portrait photography by Sean Kenneth Doherty"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <User size={32} className="text-[#c9a962] mx-auto mb-6" />
            <h2 className="font-wedding-display text-4xl md:text-6xl text-white mb-6">
              {portraitsPage.cta.title} <span className="text-[#c9a962]">{portraitsPage.cta.titleAccent}</span>
            </h2>
            <p className="text-[#a0a0a0] mb-10 max-w-xl mx-auto">
              {portraitsPage.cta.description}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 bg-[#c9a962] text-[#0a0a0a] px-10 py-5 rounded-none font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300"
            >
              <span>{portraitsPage.cta.buttonText}</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
