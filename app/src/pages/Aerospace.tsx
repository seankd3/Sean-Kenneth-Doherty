import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Target, X } from 'lucide-react';
import { 
  getGalleryImagePaths, 
  getFirstImage 
} from '@/lib/gallery-config';

interface AerospaceAlbum {
  id: string;
  designation: string;
  title: string;
  description: string;
  images: string[];
  coverImage: string;
  status: string;
  statusColor: string;
  specs: string[];
}

const Aerospace = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const galleryRefs = useRef<Record<string, HTMLElement | null>>({});
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  const [showMissionControl, setShowMissionControl] = useState(true);
  const lastScrollY = useRef(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 100) {
        setShowMissionControl(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowMissionControl(false);
      } else {
        setShowMissionControl(true);
      }
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const [counts, setCounts] = useState({
    launches: 0,
    photos: 0,
    cameras: 0,
    years: 0,
  });

  useEffect(() => {
    if (statsInView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      
      const targets = {
        launches: 8,
        photos: 75000,
        cameras: 6,
        years: 2,
      };

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setCounts({
          launches: Math.round(targets.launches * easeOut),
          photos: Math.round(targets.photos * easeOut),
          cameras: Math.round(targets.cameras * easeOut),
          years: Math.round(targets.years * easeOut),
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [statsInView]);

  // Define sub-albums with the existing project card style
  const aerospaceAlbums: AerospaceAlbum[] = [
    {
      id: 'starbase',
      designation: 'TX-STARBASE',
      title: 'STARBASE OPERATIONS',
      description: 'Full-time documentation of SpaceX Starship program development and launches at Starbase, Texas. Capturing history as it happens from the launch pad to the production line.',
      images: getGalleryImagePaths('aerospace-starbase'),
      coverImage: getFirstImage('aerospace-starbase') || '',
      status: 'ACTIVE',
      statusColor: 'bg-[#c41e3a]',
      specs: ['4K VIDEO', 'REMOTE CAMERAS', 'LAUNCH COVERAGE', 'PAD DOCUMENTATION'],
    },
    {
      id: 'starbase-film',
      designation: 'TX-FILM',
      title: 'STARBASE ON FILM',
      description: '35mm film photography documenting the Starship program. A nostalgic look at the future of space exploration through analog photography.',
      images: getGalleryImagePaths('aerospace-starbase-film'),
      coverImage: getFirstImage('aerospace-starbase-film') || '',
      status: 'DOCUMENTING',
      statusColor: 'bg-[#1a3a5c]',
      specs: ['35MM FILM', 'KODAK GOLD', 'PORTRA 400', 'CINESTILL'],
    },
    {
      id: 'astronauts',
      designation: 'NASA-LEGACY',
      title: 'APOLLO ASTRONAUTS',
      description: 'Portrait sessions with Apollo-era astronauts, preserving the legacy of America\'s lunar pioneers who paved the way for future exploration.',
      images: getGalleryImagePaths('aerospace-astronauts'),
      coverImage: getFirstImage('aerospace-astronauts') || '',
      status: 'ARCHIVE',
      statusColor: 'bg-[#1a3a5c]',
      specs: ['PORTRAIT', 'HISTORICAL', '35MM FILM', 'ARCHIVAL'],
    },
    {
      id: 'astro',
      designation: 'ASTRO-OBS',
      title: 'ASTRONOMY IMAGING',
      description: 'Deep sky and planetary astrophotography from dark sky locations across the American Southwest. Capturing the cosmos in stunning detail.',
      images: getGalleryImagePaths('aerospace-astro'),
      coverImage: getFirstImage('aerospace-astro') || '',
      status: 'ACTIVE',
      statusColor: 'bg-[#c41e3a]',
      specs: ['DEEP SKY', 'PLANETARY', 'TRACKING MOUNT', 'LONG EXPOSURE'],
    },
    {
      id: 'rallycross',
      designation: 'RACE-TX',
      title: 'LONE STAR RALLYCROSS',
      description: 'High-speed motorsport photography at rallycross events across Texas. Capturing the thrill and adrenaline of competitive racing.',
      images: getGalleryImagePaths('aerospace-lone-star-rallycross'),
      coverImage: getFirstImage('aerospace-lone-star-rallycross') || '',
      status: 'DOCUMENTING',
      statusColor: 'bg-[#1a3a5c]',
      specs: ['MOTORSPORT', 'PANNING SHOTS', 'RALLY', 'ACTION'],
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

  const equipment = [
    { code: 'CAM-01', name: 'Canon R5', type: 'PRIMARY BODY', status: 'ACTIVE' },
    { code: 'CAM-02', name: 'Canon RP', type: 'REMOTE BODY', status: 'ACTIVE' },
    { code: 'CAM-03', name: 'Canon A-1', type: '35MM FILM', status: 'DESTROYED' },
    { code: 'CAM-04', name: 'Minolta Maxxium 5000', type: '35MM FILM', status: 'ACTIVE' },
    { code: 'CAM-05', name: 'Polaroid Now+', type: 'INSTANT FILM', status: 'ACTIVE' },
    { code: 'LENS-01', name: 'RF 85mm f/1.2L', type: 'PRIME', status: 'ACTIVE' },
    { code: 'LENS-02', name: 'RF 50mm f/1.8', type: 'PRIME', status: 'ACTIVE' },
    { code: 'LENS-03', name: 'RF 24-105mm f/4L', type: 'STANDARD ZOOM', status: 'ACTIVE' },
    { code: 'LENS-04', name: 'RF 500mm f/6.3', type: 'SUPER TELEPHOTO', status: 'ACTIVE' },
    { code: 'LENS-05', name: 'Helios 44-2 f/2', type: 'VINTAGE PRIME', status: 'ACTIVE' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[#e8e6e1] min-h-screen tech-grid"
    >
      {/* Mission Control Header */}
      <motion.div 
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: showMissionControl ? 0 : -100,
          opacity: showMissionControl ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-[#e8e6e1] border-b-2 border-[#1a1a1a]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-xs font-aerospace-display tracking-wider">
            <div className="flex items-center space-x-6">
              <span className="text-[#1a1a1a]">LOC: <span className="text-[#c41e3a]">STARBASE, TX</span></span>
              <span className="text-[#1a1a1a]">STATUS: <span className="text-[#1a3a5c]">ACTIVE</span></span>
            </div>
            <div className="hidden sm:flex items-center space-x-6">
              <span className="text-[#1a1a1a]">EXP: <span className="text-[#c41e3a]">2+ YEARS</span></span>
              <span className="text-[#1a1a1a]">CLS: <span className="bg-[#f4d03f] px-1">UNCLASSIFIED</span></span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-40 md:pt-48 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 mb-8 border-2 border-[#1a1a1a] px-4 py-2">
              <div className="w-2 h-2 bg-[#c41e3a] animate-pulse" />
              <span className="font-aerospace-display text-xs tracking-[0.3em] text-[#1a1a1a]">
                SPACE GRADE // UNCLASSIFIED
              </span>
            </div>

            <h1 className="font-aerospace-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#1a1a1a] mb-6 tracking-tight">
              AEROSPACE
            </h1>
            <p className="font-aerospace-display text-lg sm:text-xl text-[#4a4a4a] tracking-wider mb-4">
              // DOCUMENTING HUMANITY'S REACH FOR THE STARS
            </p>
            
            <div className="flex items-center justify-center space-x-4 mb-12">
              <div className="h-px w-16 bg-[#1a1a1a]" />
              <span className="font-aerospace-body text-[#4a4a4a] text-sm tracking-wider">
                PHOTOGRAPHY // CINEMATOGRAPHY // DOCUMENTATION
              </span>
              <div className="h-px w-16 bg-[#1a1a1a]" />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => document.getElementById('albums')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center space-x-2 bg-[#1a1a1a] text-[#e8e6e1] px-8 py-4 font-aerospace-display text-sm tracking-wider hover:bg-[#c41e3a] transition-colors duration-300 cursor-pointer"
              >
                <span>VIEW GALLERIES</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                to="/contact"
                className="group flex items-center space-x-2 border-2 border-[#1a1a1a] text-[#1a1a1a] px-8 py-4 font-aerospace-display text-sm tracking-wider hover:bg-[#1a1a1a] hover:text-[#e8e6e1] transition-colors duration-300"
              >
                <span>CONTACT</span>
                <ExternalLink size={16} />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="font-aerospace-display text-xs text-[#4a4a4a] tracking-wider">SCROLL</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-8 bg-[#1a1a1a]"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 border-y-2 border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'LAUNCHES DOCUMENTED', value: counts.launches, suffix: '+' },
              { label: 'PHOTOS CAPTURED', value: counts.photos, suffix: '+' },
              { label: 'REMOTE CAMERAS', value: counts.cameras, suffix: '+' },
              { label: 'YEARS AT STARBASE', value: counts.years, suffix: '+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-aerospace-display text-4xl md:text-5xl text-[#1a1a1a] mb-2">
                  {stat.value.toLocaleString()}{stat.suffix}
                </p>
                <p className="font-aerospace-display text-xs text-[#4a4a4a] tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Album Cards Section */}
      <section id="albums" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-8 h-px bg-[#1a1a1a]" />
              <span className="font-aerospace-display text-xs tracking-[0.3em] text-[#4a4a4a]">
                ARCHIVE
              </span>
            </div>
            <h2 className="font-aerospace-display text-4xl md:text-5xl text-[#1a1a1a]">
              MISSION GALLERIES
            </h2>
          </motion.div>

          {/* Project Cards */}
          <div className="space-y-12">
            {aerospaceAlbums.map((album, index) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-2 border-[#1a1a1a] bg-[#d4d0c8] cursor-pointer"
                onClick={() => scrollToGallery(album.id)}
              >
                {/* Card Header */}
                <div className="flex flex-wrap items-center justify-between p-4 border-b-2 border-[#1a1a1a]">
                  <div className="flex items-center space-x-4">
                    <span className="font-aerospace-display text-xs text-[#4a4a4a] tracking-wider">
                      {album.designation}
                    </span>
                    <span className={`${album.statusColor} text-white text-xs px-2 py-1 font-aerospace-display tracking-wider`}>
                      {album.status}
                    </span>
                  </div>
                  <span className="font-aerospace-display text-xs text-[#4a4a4a] tracking-wider">
                    {String(album.images.length).padStart(3, '0')} PHOTOS
                  </span>
                </div>

                {/* Card Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-6 lg:p-8">
                    <h3 className="font-aerospace-display text-2xl md:text-3xl text-[#1a1a1a] mb-4">
                      {album.title}
                    </h3>
                    <p className="font-aerospace-body text-[#4a4a4a] mb-6 leading-relaxed">
                      {album.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {album.specs.map((spec) => (
                        <span
                          key={spec}
                          className="tech-badge bg-[#1a1a1a] text-[#e8e6e1]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-2 text-[#c41e3a] font-aerospace-display text-sm tracking-wider">
                      <span>VIEW GALLERY</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                  
                  <div className="overflow-hidden bg-[#1a1a1a]">
                    <img
                      src={album.coverImage}
                      alt={album.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Galleries */}
      {aerospaceAlbums.map((album, albumIndex) => (
        <section
          key={album.id}
          ref={(el) => { galleryRefs.current[album.id] = el; }}
          className={`py-12 md:py-20 border-y-2 border-[#1a1a1a] ${albumIndex % 2 === 0 ? 'bg-[#e8e6e1]' : 'bg-[#d4d0c8]'}`}
        >
          <div className="max-w-[1920px] mx-auto px-2 sm:px-4">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="mb-8 px-2"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-8 h-px bg-[#1a1a1a]" />
                <span className="font-aerospace-display text-xs tracking-[0.3em] text-[#4a4a4a]">
                  {album.designation}
                </span>
                <span className={`${album.statusColor} text-white text-xs px-2 py-1 font-aerospace-display tracking-wider`}>
                  {album.status}
                </span>
              </div>
              <h2 className="font-aerospace-display text-3xl md:text-5xl text-[#1a1a1a]">
                {album.title}
              </h2>
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
                  <div className="relative overflow-hidden border-2 border-[#1a1a1a]">
                    <img
                      src={image}
                      alt={`${album.title} ${index + 1}`}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute top-1 left-1 bg-[#1a1a1a] text-[#e8e6e1] text-[10px] px-1.5 py-0.5 font-aerospace-display opacity-80">
                      {String(index + 1).padStart(3, '0')}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Back to Top */}
            <div className="mt-12 text-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-[#4a4a4a] hover:text-[#c41e3a] font-aerospace-display text-sm tracking-wider uppercase transition-colors"
              >
                Return to Top
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
            alt="Aerospace photo"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}

      {/* Equipment Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-8 h-px bg-[#1a1a1a]" />
              <span className="font-aerospace-display text-xs tracking-[0.3em] text-[#4a4a4a]">
                SPECIFICATIONS
              </span>
            </div>
            <h2 className="font-aerospace-display text-4xl md:text-5xl text-[#1a1a1a]">
              EQUIPMENT MANIFEST
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-2 border-[#1a1a1a]"
          >
            <div className="grid grid-cols-4 gap-4 p-4 border-b-2 border-[#1a1a1a] bg-[#1a1a1a] text-[#e8e6e1]">
              <span className="font-aerospace-display text-xs tracking-wider">ID</span>
              <span className="font-aerospace-display text-xs tracking-wider">EQUIPMENT</span>
              <span className="font-aerospace-display text-xs tracking-wider">TYPE</span>
              <span className="font-aerospace-display text-xs tracking-wider">STATUS</span>
            </div>

            {equipment.map((item, index) => (
              <div
                key={item.code}
                className={`grid grid-cols-4 gap-4 p-4 ${index !== equipment.length - 1 ? 'border-b border-[#1a1a1a]/20' : ''}`}
              >
                <span className="font-aerospace-display text-sm text-[#4a4a4a]">{item.code}</span>
                <span className="font-aerospace-body text-sm text-[#1a1a1a] font-medium">{item.name}</span>
                <span className="font-aerospace-display text-xs text-[#4a4a4a] tracking-wider">{item.type}</span>
                <span className="font-aerospace-display text-xs text-[#1a3a5c] tracking-wider">{item.status}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 border-t-2 border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 mb-8 border-2 border-[#1a1a1a] px-4 py-2">
              <Target size={16} className="text-[#c41e3a]" />
              <span className="font-aerospace-display text-xs tracking-[0.3em] text-[#1a1a1a]">
                AVAILABLE FOR ASSIGNMENT
              </span>
            </div>
            
            <h2 className="font-aerospace-display text-4xl md:text-6xl text-[#1a1a1a] mb-6">
              READY FOR<br />
              <span className="text-[#c41e3a]">LAUNCH</span>
            </h2>
            
            <p className="font-aerospace-body text-[#4a4a4a] mb-10 max-w-xl mx-auto">
              Available for aerospace documentation, launch coverage, and technical photography projects.
            </p>
            
            <Link
              to="/contact"
              className="inline-flex items-center space-x-3 bg-[#1a1a1a] text-[#e8e6e1] px-10 py-5 font-aerospace-display text-sm tracking-wider hover:bg-[#c41e3a] transition-colors duration-300"
            >
              <span>INITIATE CONTACT</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Aerospace;
