import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mountain, ChevronDown, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { getGalleryImagePaths, getFirstImage } from '@/lib/gallery-config';

interface LandscapeAlbum {
  id: string;
  title: string;
  description: string;
  images: string[];
  coverImage: string;
  location: string;
}

// Landscape albums matching Photos/Landscapes/ folder structure
const landscapeAlbums: LandscapeAlbum[] = [
  {
    id: 'american-landscapes',
    title: 'American Landscapes',
    description: 'The beauty of the American Southwest and beyond, captured in golden light',
    images: getGalleryImagePaths('landscapes-american-landscapes'),
    coverImage: getFirstImage('landscapes-american-landscapes') || '',
    location: 'American West',
  },
  {
    id: 'big-bend-film',
    title: 'Big Bend Film',
    description: 'Dramatic desert landscapes captured on film at Big Bend National Park',
    images: getGalleryImagePaths('landscapes-big-bend-film'),
    coverImage: getFirstImage('landscapes-big-bend-film') || '',
    location: 'Texas',
  },
  {
    id: 'costa-rica',
    title: 'Costa Rica',
    description: 'Lush tropical landscapes and vibrant ecosystems of Costa Rica',
    images: getGalleryImagePaths('landscapes-costa-rica'),
    coverImage: getFirstImage('landscapes-costa-rica') || '',
    location: 'Central America',
  },
  {
    id: 'hudson-valley',
    title: 'Hudson Valley',
    description: 'Scenic landscapes from the Hudson Valley region',
    images: getGalleryImagePaths('landscapes-new-york-winter'),
    coverImage: getFirstImage('landscapes-new-york-winter') || '',
    location: 'New York',
  },
];

const heroImage = getFirstImage('landscapes-american-landscapes') || landscapeAlbums[0].coverImage;

const Landscapes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [lightboxState, setLightboxState] = useState<{ albumIndex: number; imageIndex: number } | null>(null);
  const galleryRefs = useRef<Record<string, HTMLElement | null>>({});

  // Get current lightbox image
  const lightboxImage = lightboxState 
    ? landscapeAlbums[lightboxState.albumIndex].images[lightboxState.imageIndex]
    : null;

  // Preload adjacent images
  useEffect(() => {
    if (lightboxState) {
      const { albumIndex, imageIndex } = lightboxState;
      const album = landscapeAlbums[albumIndex];
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
      const album = landscapeAlbums[albumIndex];

      switch (e.key) {
        case 'ArrowRight':
          if (imageIndex < album.images.length - 1) {
            setLightboxState({ albumIndex, imageIndex: imageIndex + 1 });
          } else if (albumIndex < landscapeAlbums.length - 1) {
            setLightboxState({ albumIndex: albumIndex + 1, imageIndex: 0 });
          }
          break;
        case 'ArrowLeft':
          if (imageIndex > 0) {
            setLightboxState({ albumIndex, imageIndex: imageIndex - 1 });
          } else if (albumIndex > 0) {
            const prevAlbum = landscapeAlbums[albumIndex - 1];
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
      const prevAlbum = landscapeAlbums[albumIndex - 1];
      setLightboxState({ albumIndex: albumIndex - 1, imageIndex: prevAlbum.images.length - 1 });
    }
  }, [lightboxState]);

  const goToNext = useCallback(() => {
    if (!lightboxState) return;
    const { albumIndex, imageIndex } = lightboxState;
    const album = landscapeAlbums[albumIndex];
    if (imageIndex < album.images.length - 1) {
      setLightboxState({ albumIndex, imageIndex: imageIndex + 1 });
    } else if (albumIndex < landscapeAlbums.length - 1) {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[#0a0a0a] min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Landscape photography"
            className="w-full h-full object-cover"
          />
          {/* Stronger dark overlay for text legibility */}
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
            <Mountain size={16} className="text-[#c9a962] drop-shadow-lg" />
            <span className="text-[#c9a962] text-sm tracking-[0.3em] uppercase drop-shadow-lg">Landscape Photography</span>
            <Mountain size={16} className="text-[#c9a962] drop-shadow-lg" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-wedding-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-2xl"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5), 0 2px 10px rgba(0,0,0,0.8)' }}
          >
            American <span className="text-[#c9a962]">Landscapes</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-10 drop-shadow-lg"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
          >
            The beauty of the American Southwest and beyond, captured in golden light
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
              Landscape Galleries
            </h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              Select a gallery to explore, or scroll to view all collections
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-2 gap-4">
            {landscapeAlbums.map((album, index) => (
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
                    src={album.coverImage}
                    alt={album.title}
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <Mountain size={16} className="text-[#c9a962]" />
                      <span className="text-[#c9a962] text-xs tracking-wider uppercase">{album.location}</span>
                    </div>
                    <h3 className="font-wedding-display text-2xl text-white mb-1 group-hover:text-[#c9a962] transition-colors">
                      {album.title}
                    </h3>
                    <p className="text-[#a0a0a0] text-sm">{album.images.length} Photos</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Galleries */}
      {landscapeAlbums.map((album, albumIndex) => (
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
              <p className="text-[#a0a0a0] mt-2">{album.location}</p>
            </motion.div>

            {/* Masonry Grid */}
            <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
              {album.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
                  className="group relative break-inside-avoid mb-2 cursor-pointer"
                  onClick={() => openLightbox(albumIndex, index)}
                >
                  <div className="relative overflow-hidden border border-[#2a2a2a] group-hover:border-[#c9a962]/50 group-hover:shadow-[0_0_20px_rgba(201,169,98,0.15)] transition-all duration-500 bg-[#1a1a1a]">
                    <img
                      src={image}
                      alt={`${album.title} ${index + 1}`}
                      className="w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                      loading="lazy"
                    />
                    {/* Hover overlay with image number */}
                    <div className="absolute inset-0 bg-[#0a0a0a]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-xs font-medium bg-[#0a0a0a]/80 px-2 py-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {String(index + 1).padStart(3, '0')}
                      </span>
                    </div>
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
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
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors p-2 disabled:opacity-0"
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              disabled={lightboxState.albumIndex === 0 && lightboxState.imageIndex === 0}
            >
              <ChevronLeft size={48} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors p-2 disabled:opacity-0"
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              disabled={lightboxState.albumIndex === landscapeAlbums.length - 1 && lightboxState.imageIndex === landscapeAlbums[landscapeAlbums.length - 1].images.length - 1}
            >
              <ChevronRight size={48} />
            </button>

            {/* Image counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-wider">
              {landscapeAlbums[lightboxState.albumIndex].title} — {lightboxState.imageIndex + 1} / {landscapeAlbums[lightboxState.albumIndex].images.length}
            </div>

            {/* Image with loading state */}
            <motion.img
              key={lightboxImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={lightboxImage}
              alt="Landscape"
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

      {/* Prints CTA */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Mountain size={32} className="text-[#c9a962] mx-auto mb-6" />
            <h2 className="font-wedding-display text-4xl md:text-6xl text-white mb-6">
              Fine Art <span className="text-[#c9a962]">Prints</span>
            </h2>
            <p className="text-[#a0a0a0] mb-10 max-w-xl mx-auto">
              Bring the beauty of the American landscape into your home or office. 
              Limited edition prints available on archival paper and metal.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-3 bg-[#c9a962] text-[#0a0a0a] px-10 py-5 rounded-none font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300"
            >
              <span>Inquire About Prints</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Landscapes;
