import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mountain, MapPin, Sun, X } from 'lucide-react';
import { landscapesGalleryImages, landscapesHeroImage, landscapesFeatureImages } from '@/lib/gallery-config';

const Landscapes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const galleryImages = landscapesGalleryImages;

  const locations = [
    { name: 'Arizona', count: 12 },
    { name: 'Utah', count: 8 },
    { name: 'Wyoming', count: 6 },
    { name: 'Colorado', count: 5 },
    { name: 'New Mexico', count: 4 },
    { name: 'Texas', count: 7 },
  ];

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
            src={landscapesHeroImage}
            alt="Landscape photography"
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
            <Mountain size={16} className="text-[#c9a962]" />
            <span className="text-[#c9a962] text-sm tracking-[0.3em] uppercase">Landscape Photography</span>
            <Mountain size={16} className="text-[#c9a962]" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-wedding-display text-5xl md:text-7xl lg:text-8xl text-white mb-6"
          >
            American <span className="text-[#c9a962]">Landscapes</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            The beauty of the American Southwest and beyond, captured in golden light
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
              <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">The Journey</p>
              <h2 className="font-wedding-display text-4xl md:text-5xl text-white mb-6">
                Chasing <span className="text-[#c9a962]">Golden Hour</span>
              </h2>
              <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                From the red rock formations of the Southwest to the dramatic coastlines of the Pacific, 
                I've spent years exploring and documenting the diverse landscapes of America.
              </p>
              <p className="text-[#a0a0a0] mb-8 leading-relaxed">
                My landscape work is driven by a passion for the outdoors and a desire to capture 
                the fleeting moments when light transforms ordinary scenes into something extraordinary.
              </p>
              
              {/* Locations */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {locations.map((location) => (
                  <div key={location.name} className="flex items-center space-x-2">
                    <MapPin size={14} className="text-[#c9a962]" />
                    <span className="text-[#a0a0a0] text-sm">{location.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-[#141414] p-6 text-center">
                  <Sun size={32} className="text-[#c9a962] mx-auto mb-3" />
                  <p className="text-white font-wedding-display text-3xl">42</p>
                  <p className="text-[#a0a0a0] text-sm">Locations</p>
                </div>
                <img
                  src={landscapesFeatureImages[0]}
                  alt="Landscape"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="pt-8">
                <img
                  src={landscapesFeatureImages[1]}
                  alt="Landscape"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
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
              Featured Landscapes
            </h2>
          </motion.div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.2 }}
                className="break-inside-avoid mb-2 group cursor-pointer"
                onClick={() => setLightboxImage(image.src)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center space-x-1 text-[#c9a962] text-xs mb-1">
                        <MapPin size={12} />
                        <span>{image.location}</span>
                      </div>
                      <h3 className="text-white font-wedding-display text-xl">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            alt="Landscape"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}

      {/* Prints CTA */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
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
