import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, X, ChevronDown } from 'lucide-react';
import { 
  abstractMainImages, 
  abstractFromAboveImages, 
  abstractHeroImage,
  getFirstImage 
} from '@/lib/gallery-config';

interface SubAlbum {
  id: string;
  title: string;
  description: string;
  images: string[];
  coverImage: string;
}

const Abstract = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const galleryRefs = useRef<Record<string, HTMLElement | null>>({});

  const subAlbums: SubAlbum[] = [
    {
      id: 'abstract',
      title: 'Fleeting Time',
      description: 'Abstract photography series exploring form and color',
      images: abstractMainImages,
      coverImage: getFirstImage('abstract') || abstractMainImages[0],
    },
    {
      id: 'from-above',
      title: 'From Above',
      description: 'Aerial perspectives and patterns',
      images: abstractFromAboveImages,
      coverImage: getFirstImage('abstract-from-above') || abstractFromAboveImages[0],
    },
  ];

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
            src={abstractHeroImage}
            alt="Abstract photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/30 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center space-x-2 mb-6"
          >
            <Sparkles size={16} className="text-[#c9a962]" />
            <span className="text-[#c9a962] text-sm tracking-[0.3em] uppercase">Abstract Photography</span>
            <Sparkles size={16} className="text-[#c9a962]" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-wedding-display text-5xl md:text-7xl lg:text-8xl text-white mb-6"
          >
            Beyond <span className="text-[#c9a962]">Reality</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Exploring form, color, and texture through experimental photography
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

      {/* Album Cover Cards */}
      <section id="galleries-start" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {subAlbums.map((album, index) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => scrollToGallery(album.id)}
                className="group cursor-pointer"
              >
                {/* Cover Image - Original Aspect Ratio */}
                <div className="relative overflow-hidden border-2 border-[#2a2a2a] hover:border-[#c9a962] transition-colors duration-300 bg-[#141414]">
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
                
                {/* Text Below Image */}
                <div className="mt-4 text-center">
                  <p className="text-[#c9a962] text-xs tracking-wider uppercase mb-1">
                    {album.images.length} Photos
                  </p>
                  <h3 className="font-wedding-display text-xl text-white group-hover:text-[#c9a962] transition-colors">
                    {album.title}
                  </h3>
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
            </motion.div>

            {/* Masonry Grid */}
            <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
              {album.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.2 }}
                  className="group relative break-inside-avoid mb-2 cursor-pointer"
                  onClick={() => setLightboxImage(image)}
                >
                  <div className="relative overflow-hidden border border-[#2a2a2a] hover:border-[#c9a962] transition-colors">
                    <img
                      src={image}
                      alt={`${album.title} ${index + 1}`}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#0a0a0a]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <span className="text-white text-xs font-medium bg-[#0a0a0a]/80 px-2 py-1">
                        {String(index + 1).padStart(3, '0')}
                      </span>
                    </div>
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
      {lightboxImage && (
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
            src={lightboxImage}
            alt="Abstract"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}

      {/* Prints CTA */}
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
              Fine Art <span className="text-[#c9a962]">Prints</span>
            </h2>
            <p className="text-[#a0a0a0] mb-10 max-w-xl mx-auto">
              These abstract works are available as museum-quality fine art prints,
              perfect for adding a touch of artistic sophistication to any space.
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

export default Abstract;
