import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, X } from 'lucide-react';
import { abstractGalleryImages, abstractFromAboveImages, abstractHeroImage } from '@/lib/gallery-config';

const Abstract = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const mainImages = abstractGalleryImages;
  const fromAboveImages = abstractFromAboveImages;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[#0a0a0a] min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={abstractHeroImage}
            alt="Abstract photography"
            className="w-full h-auto object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]" />
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
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Exploring form, color, and texture through experimental photography
          </motion.p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">The Vision</p>
              <h2 className="font-wedding-display text-4xl md:text-5xl text-white mb-6">
                Finding <span className="text-[#c9a962]">Beauty</span> in the Unseen
              </h2>
              <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                Abstract photography allows me to break free from literal representation and explore
                the emotional impact of color, form, and texture. These images invite viewers to
                experience photography as pure visual poetry.
              </p>
              <p className="text-[#a0a0a0] mb-8 leading-relaxed">
                Through long exposures, intentional camera movement, and unique perspectives,
                I create images that transform the ordinary into the extraordinary.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#141414] p-4 text-center">
                  <Sparkles size={20} className="text-[#c9a962] mx-auto mb-2" />
                  <p className="text-white text-sm">Long Exposure</p>
                </div>
                <div className="bg-[#141414] p-4 text-center">
                  <Sparkles size={20} className="text-[#c9a962] mx-auto mb-2" />
                  <p className="text-white text-sm">ICM</p>
                </div>
                <div className="bg-[#141414] p-4 text-center">
                  <Sparkles size={20} className="text-[#c9a962] mx-auto mb-2" />
                  <p className="text-white text-sm">Macro</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {mainImages.slice(0, 4).map((image, index) => (
                <div key={index} className={index % 2 === 1 ? 'pt-8' : ''}>
                  <img
                    src={image}
                    alt={`Abstract ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Abstract Gallery */}
      <section className="py-20 md:py-32 px-2 sm:px-4 bg-[#141414]">
        <div className="max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="text-center mb-16"
          >
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Gallery</p>
            <h2 className="font-wedding-display text-4xl md:text-5xl text-white mb-6">
              Abstract Collection
            </h2>
          </motion.div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
            {mainImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.2 }}
                className="break-inside-avoid mb-2 group cursor-pointer"
                onClick={() => setLightboxImage(image)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={`Abstract ${index + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-wedding-display text-lg">Abstract #{index + 1}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* From Above Section */}
      {fromAboveImages.length > 0 && (
        <section className="py-20 md:py-32 px-2 sm:px-4">
          <div className="max-w-[1920px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
              className="text-center mb-16"
            >
              <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">From Above</p>
              <h2 className="font-wedding-display text-4xl md:text-5xl text-white mb-6">
                Aerial Perspectives
              </h2>
              <p className="text-[#a0a0a0] max-w-2xl mx-auto">
                Patterns and textures revealed from above, transforming landscapes into living paintings.
              </p>
            </motion.div>

            <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
              {fromAboveImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.2 }}
                  className="break-inside-avoid mb-2 group cursor-pointer"
                  onClick={() => setLightboxImage(image)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image}
                      alt={`From Above ${index + 1}`}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-white font-wedding-display text-lg">From Above #{index + 1}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#141414]">
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
