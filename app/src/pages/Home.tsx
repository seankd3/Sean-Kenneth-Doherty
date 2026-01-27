import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Camera, Rocket, Music, Mountain, User, Sparkles } from 'lucide-react';
import { homeCategoryCards, homeHeroImage, homeAboutImage } from '@/lib/gallery-config';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const iconMap: Record<string, React.ElementType> = {
    Camera,
    Rocket,
    Music,
    Mountain,
    User,
    Sparkles,
  };
  
  const categoryCards = homeCategoryCards.map(card => ({
    ...card,
    icon: iconMap[card.icon],
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
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
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={homeHeroImage}
            alt="Hero background"
            className="w-full h-auto object-contain opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-6"
          >
            Photographer & Cinematographer
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-wedding-display text-5xl md:text-7xl lg:text-8xl text-white mb-6"
          >
            SEAN <span className="text-[#c9a962]">KENNETH</span><br />DOHERTY
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-[#a0a0a0] text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            From weddings to rocket launches — capturing life's most extraordinary moments
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/weddings"
              className="group flex items-center space-x-2 bg-[#c9a962] text-[#0a0a0a] px-8 py-4 rounded-none font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300"
            >
              <span>View Weddings</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/aerospace"
              className="group flex items-center space-x-2 border border-white/30 text-white px-8 py-4 rounded-none font-medium tracking-wider uppercase text-sm hover:border-[#c9a962] hover:text-[#c9a962] transition-colors duration-300"
            >
              <span>Explore Aerospace</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/50"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
            <h2 className="font-wedding-display text-4xl md:text-5xl text-white mb-6">
              Explore My Work
            </h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              Each category represents a different facet of my photography journey. 
              Click through to see dedicated galleries and learn more about my approach.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {categoryCards.map((card, index) => (
              <motion.div key={card.title} variants={itemVariants}>
                <Link to={card.link} className="group block relative overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="flex items-center space-x-3 mb-3">
                      <card.icon size={20} className="text-[#c9a962]" />
                      <span className="text-[#c9a962] text-xs tracking-[0.2em] uppercase">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="font-wedding-display text-2xl md:text-3xl text-white mb-2 group-hover:text-[#c9a962] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[#a0a0a0] text-sm mb-4">{card.description}</p>
                    <div className="flex items-center text-white text-sm tracking-wider uppercase">
                      <span>View Gallery</span>
                      <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">About</p>
              <h2 className="font-wedding-display text-4xl md:text-5xl text-white mb-6">
                Building Rockets by Day,<br />
                <span className="text-[#c9a962]">Capturing Moments</span> by Night
              </h2>
              <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                From a childhood passion ignited by shooting home movies with my grandfather, 
                I've built a career doing what I love. I've had the honor of documenting 
                SpaceX's Starship program as lead cinematographer for NASASpaceflight, 
                and I've captured countless weddings, creating lifetime keepsakes for couples.
              </p>
              <p className="text-[#a0a0a0] mb-8 leading-relaxed">
                Currently based in Austin, TX and available for weddings, events, 
                and commercial projects worldwide.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <p className="text-[#c9a962] font-wedding-display text-3xl">2+</p>
                  <p className="text-[#a0a0a0] text-sm">Years at Starbase</p>
                </div>
                <div>
                  <p className="text-[#c9a962] font-wedding-display text-3xl">50+</p>
                  <p className="text-[#a0a0a0] text-sm">Weddings Captured</p>
                </div>
                <div>
                  <p className="text-[#c9a962] font-wedding-display text-3xl">15+</p>
                  <p className="text-[#a0a0a0] text-sm">Launches Documented</p>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 text-[#c9a962] hover:text-white transition-colors duration-300"
              >
                <span className="tracking-wider uppercase text-sm">Get In Touch</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="overflow-hidden">
                <img
                  src={homeAboutImage}
                  alt="Sean at work"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#c9a962] text-[#0a0a0a] p-6">
                <p className="font-wedding-display text-2xl">Austin, TX</p>
                <p className="text-sm">Available for travel worldwide</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-wedding-display text-4xl md:text-6xl text-white mb-6">
              Let's Create Something<br />
              <span className="text-[#c9a962]">Extraordinary</span>
            </h2>
            <p className="text-[#a0a0a0] mb-10 max-w-xl mx-auto">
              Whether you're planning your dream wedding or need commercial photography, 
              I'd love to hear about your project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-3 bg-[#c9a962] text-[#0a0a0a] px-10 py-5 rounded-none font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300"
            >
              <span>Start a Conversation</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
