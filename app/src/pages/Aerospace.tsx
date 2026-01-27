import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Target } from 'lucide-react';
import { aerospaceGalleryImages, aerospaceProjects } from '@/lib/gallery-config';

const Aerospace = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  
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
        launches: 15,
        photos: 50000,
        cameras: 100,
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

  const projects = aerospaceProjects;

  const galleryImages = aerospaceGalleryImages;

  const equipment = [
    { code: 'CAM-01', name: 'Canon R5', type: 'PRIMARY BODY', status: 'ACTIVE' },
    { code: 'CAM-02', name: 'Canon RP', type: 'REMOTE BODY', status: 'ACTIVE' },
    { code: 'CAM-03', name: 'Canon A-1', type: '35mm Film', status: 'DESTROYED' },
    { code: 'LENS-01', name: '85mm f/1.2', type: 'PRIME', status: 'ACTIVE' },
    { code: 'LENS-02', name: '70-200mm f/2.8', type: 'TELEPHOTO ZOOM', status: 'ACTIVE' },
    { code: 'LENS-03', name: '400mm f/2.8', type: 'SUPER TELEPHOTO', status: 'ACTIVE' },
    { code: 'LENS-04', name: '14mm f/1.8', type: 'ULTRA WIDE', status: 'ACTIVE' },
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
      <div className="fixed top-16 left-0 right-0 z-30 bg-[#e8e6e1] border-b-2 border-[#1a1a1a]">
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
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Classification Badge */}
            <div className="inline-flex items-center space-x-2 mb-8 border-2 border-[#1a1a1a] px-4 py-2">
              <div className="w-2 h-2 bg-[#c41e3a] animate-pulse" />
              <span className="font-aerospace-display text-xs tracking-[0.3em] text-[#1a1a1a]">
                SPACE GRADE // UNCLASSIFIED
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-aerospace-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#1a1a1a] mb-6 tracking-tight">
              AEROSPACE
            </h1>
            <p className="font-aerospace-display text-lg sm:text-xl text-[#4a4a4a] tracking-wider mb-4">
              // DOCUMENTING HUMANITY'S REACH FOR THE STARS
            </p>
            
            {/* Subtitle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <div className="h-px w-16 bg-[#1a1a1a]" />
              <span className="font-aerospace-body text-[#4a4a4a] text-sm tracking-wider">
                PHOTOGRAPHY // CINEMATOGRAPHY // DOCUMENTATION
              </span>
              <div className="h-px w-16 bg-[#1a1a1a]" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="#projects"
                className="group flex items-center space-x-2 bg-[#1a1a1a] text-[#e8e6e1] px-8 py-4 font-aerospace-display text-sm tracking-wider hover:bg-[#c41e3a] transition-colors duration-300"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
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

        {/* Scroll Indicator */}
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

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
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
                MISSIONS
              </span>
            </div>
            <h2 className="font-aerospace-display text-4xl md:text-5xl text-[#1a1a1a]">
              FEATURED PROJECTS
            </h2>
          </motion.div>

          {/* Projects */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.designation}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-2 border-[#1a1a1a] bg-[#d4d0c8]"
              >
                {/* Project Header */}
                <div className="flex flex-wrap items-center justify-between p-4 border-b-2 border-[#1a1a1a]">
                  <div className="flex items-center space-x-4">
                    <span className="font-aerospace-display text-xs text-[#4a4a4a] tracking-wider">
                      {project.designation}
                    </span>
                    <span className={`${project.statusColor} text-white text-xs px-2 py-1 font-aerospace-display tracking-wider`}>
                      {project.status}
                    </span>
                  </div>
                  <span className="font-aerospace-display text-xs text-[#4a4a4a] tracking-wider">
                    TX-{String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Project Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-6 lg:p-8">
                    <h3 className="font-aerospace-display text-2xl md:text-3xl text-[#1a1a1a] mb-4">
                      {project.title}
                    </h3>
                    <p className="font-aerospace-body text-[#4a4a4a] mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Specs */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.specs.map((spec) => (
                        <span
                          key={spec}
                          className="tech-badge bg-[#1a1a1a] text-[#e8e6e1]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center space-x-2 text-[#1a1a1a] font-aerospace-display text-sm tracking-wider hover:text-[#c41e3a] transition-colors"
                    >
                      <span>INQUIRE</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                  
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-32 border-y-2 border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
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
              PHOTO GALLERY
            </h2>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative border-2 border-[#1a1a1a] overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#1a1a1a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <p className="font-aerospace-display text-[#e8e6e1] text-lg tracking-wider mb-2">
                    {image.title}
                  </p>
                  <p className="font-aerospace-display text-[#c41e3a] text-xs tracking-wider">
                    {image.params}
                  </p>
                </div>

                {/* Corner Labels */}
                <div className="absolute top-2 left-2 bg-[#1a1a1a] text-[#e8e6e1] text-xs px-2 py-1 font-aerospace-display">
                  IMG-{String(index + 1).padStart(3, '0')}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
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

          {/* Equipment Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-2 border-[#1a1a1a]"
          >
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-4 border-b-2 border-[#1a1a1a] bg-[#1a1a1a] text-[#e8e6e1]">
              <span className="font-aerospace-display text-xs tracking-wider">ID</span>
              <span className="font-aerospace-display text-xs tracking-wider">EQUIPMENT</span>
              <span className="font-aerospace-display text-xs tracking-wider">TYPE</span>
              <span className="font-aerospace-display text-xs tracking-wider">STATUS</span>
            </div>

            {/* Table Rows */}
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
