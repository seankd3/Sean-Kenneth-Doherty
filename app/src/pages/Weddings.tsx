import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Heart, Calendar, Camera, Star, X } from 'lucide-react';
import { weddingGalleryImages, weddingHeroImage, weddingFeatureImages } from '@/lib/gallery-config';

const Weddings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const packages = [
    {
      name: 'Essential',
      price: '$1,800',
      description: 'Perfect for intimate celebrations',
      features: [
        '6 hours of coverage',
        '1 photographer',
        '300+ edited photos',
        'Online gallery',
        'Print release',
        '2-week delivery',
      ],
      popular: false,
    },
    {
      name: 'Classic',
      price: '$2,800',
      description: 'Our most popular choice',
      features: [
        '8 hours of coverage',
        '1 photographer',
        '500+ edited photos',
        'Online gallery',
        'Print release',
        'Engagement session included',
        '1-week delivery',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: '$4,200',
      description: 'The complete experience',
      features: [
        'Full day coverage (up to 12 hours)',
        '2 photographers',
        '800+ edited photos',
        'Online gallery',
        'Print release',
        'Engagement session',
        'Premium photo album',
        '3-day preview gallery',
      ],
      popular: false,
    },
  ];

  const addOns = [
    { name: 'Second Shooter', price: '$600', description: 'Additional photographer' },
    { name: 'Extra Hour', price: '$250/hr', description: 'Extend your coverage' },
    { name: 'Engagement Session', price: '$400', description: '2-hour session' },
    { name: 'Photo Album', price: '$350', description: 'Premium leather-bound album' },
    { name: 'Rush Delivery', price: '$300', description: '48-hour delivery' },
    { name: 'Video Highlight', price: '$800', description: '3-5 minute highlight reel' },
  ];

  const galleryImages = weddingGalleryImages;

  const testimonials = [
    {
      quote: "Sean captured our wedding day perfectly. Every emotion, every moment - we couldn't be happier with the photos.",
      name: "Sarah & Michael",
      date: "June 2024",
    },
    {
      quote: "Working with Sean was an absolute dream. He made us feel so comfortable and the photos are stunning.",
      name: "Emily & James",
      date: "August 2024",
    },
  ];

  const faqs = [
    {
      question: "How far in advance should we book?",
      answer: "I recommend booking 6-12 months in advance, especially for peak wedding season (April-October). Popular dates fill up quickly!",
    },
    {
      question: "What's your photography style?",
      answer: "I specialize in a blend of documentary and fine art photography. I focus on capturing genuine emotions and candid moments while also creating beautiful, timeless portraits.",
    },
    {
      question: "Do you travel for weddings?",
      answer: "Absolutely! I love destination weddings. Travel fees apply for locations outside of Texas, and I'm always excited to explore new venues.",
    },
    {
      question: "How long until we receive our photos?",
      answer: "For the Essential package, delivery is within 2 weeks. Classic package includes 1-week delivery, and Premium includes a 3-day preview gallery with full delivery in 1 week.",
    },
    {
      question: "What happens if you're sick on our wedding day?",
      answer: "I have a network of trusted photographer colleagues who can step in if needed. However, in 5+ years of shooting weddings, I've never missed a wedding due to illness.",
    },
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
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={weddingHeroImage}
            alt="Wedding photography"
            className="w-full h-full object-cover"
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
            <Heart size={16} className="text-[#c9a962]" />
            <span className="text-[#c9a962] text-sm tracking-[0.3em] uppercase">Wedding Photography</span>
            <Heart size={16} className="text-[#c9a962]" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-wedding-display text-5xl md:text-7xl lg:text-8xl text-white mb-6"
          >
            Your Love Story,<br />
            <span className="text-[#c9a962]">Beautifully Told</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Capturing the emotions, the joy, and the unforgettable moments of your most special day
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              to="#packages"
              className="inline-flex items-center space-x-2 bg-[#c9a962] text-[#0a0a0a] px-8 py-4 rounded-none font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300"
            >
              <span>View Packages</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">My Approach</p>
              <h2 className="font-wedding-display text-4xl md:text-5xl text-white mb-6">
                More Than Just Photos — <span className="text-[#c9a962]">Memories</span>
              </h2>
              <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                Your wedding day is one of the most important days of your life. My goal is to capture 
                the genuine emotions, the candid moments, and the beautiful details that make your day unique.
              </p>
              <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                I believe in a documentary-style approach with an editorial eye. While I'll guide you 
                through portraits and key moments, I also focus on capturing the natural, unscripted 
                moments that tell the true story of your day.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <Camera size={20} className="text-[#c9a962] mt-1" />
                  <div>
                    <p className="text-white font-medium">Documentary Style</p>
                    <p className="text-[#a0a0a0] text-sm">Candid moments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star size={20} className="text-[#c9a962] mt-1" />
                  <div>
                    <p className="text-white font-medium">Fine Art Edit</p>
                    <p className="text-[#a0a0a0] text-sm">Timeless quality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar size={20} className="text-[#c9a962] mt-1" />
                  <div>
                    <p className="text-white font-medium">Full Coverage</p>
                    <p className="text-[#a0a0a0] text-sm">No missed moments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart size={20} className="text-[#c9a962] mt-1" />
                  <div>
                    <p className="text-white font-medium">Personal Touch</p>
                    <p className="text-[#a0a0a0] text-sm">Tailored experience</p>
                  </div>
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
              <img
                src={weddingFeatureImages[0]}
                alt="Wedding moment"
                className="w-full h-auto object-contain"
              />
              <img
                src={weddingFeatureImages[1]}
                alt="Wedding details"
                className="w-full h-auto object-contain mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#141414]">
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
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Each package is designed to give you 
              beautiful, timeless memories of your special day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${pkg.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c9a962] text-[#0a0a0a] px-4 py-1 text-xs tracking-wider uppercase font-medium">
                    Most Popular
                  </div>
                )}
                <div className={`h-full p-8 ${pkg.popular ? 'bg-[#1a1a1a] border-2 border-[#c9a962]' : 'bg-[#0a0a0a] border border-[#2a2a2a]'}`}>
                  <h3 className="font-wedding-display text-2xl text-white mb-2">{pkg.name}</h3>
                  <p className="text-[#a0a0a0] text-sm mb-4">{pkg.description}</p>
                  <p className="font-wedding-display text-4xl text-[#c9a962] mb-6">{pkg.price}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <Check size={16} className="text-[#c9a962] mt-1 flex-shrink-0" />
                        <span className="text-[#a0a0a0] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center py-4 tracking-wider uppercase text-sm font-medium transition-colors duration-300 ${
                      pkg.popular
                        ? 'bg-[#c9a962] text-[#0a0a0a] hover:bg-white'
                        : 'border border-[#2a2a2a] text-white hover:border-[#c9a962] hover:text-[#c9a962]'
                    }`}
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Extras</p>
            <h2 className="font-wedding-display text-4xl md:text-5xl text-white mb-6">
              Add-Ons & Upgrades
            </h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              Customize your package with these additional services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="p-6 border border-[#2a2a2a] hover:border-[#c9a962] transition-colors duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-medium">{addon.name}</h3>
                  <span className="text-[#c9a962] font-wedding-display text-xl">{addon.price}</span>
                </div>
                <p className="text-[#a0a0a0] text-sm">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
            <h2 className="font-wedding-display text-4xl md:text-5xl text-white mb-6">
              Recent Weddings
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-auto">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`cursor-pointer overflow-hidden ${index === 0 ? 'col-span-2 md:col-span-2' : ''}`}
                onClick={() => setLightboxImage(image)}
              >
                <img
                  src={image}
                  alt={`Wedding ${index + 1}`}
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
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
            alt="Wedding photo"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}

      {/* Testimonials */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Testimonials</p>
            <h2 className="font-wedding-display text-4xl md:text-5xl text-white mb-6">
              Kind Words from Couples
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border border-[#2a2a2a]"
              >
                <Heart size={24} className="text-[#c9a962] mb-6" />
                <p className="text-white text-lg italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-[#c9a962] font-medium">{testimonial.name}</p>
                  <p className="text-[#a0a0a0] text-sm">{testimonial.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#141414]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">FAQ</p>
            <h2 className="font-wedding-display text-4xl md:text-5xl text-white mb-6">
              Common Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-[#2a2a2a] p-6"
              >
                <h3 className="text-white font-medium mb-3">{faq.question}</h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heart size={32} className="text-[#c9a962] mx-auto mb-6" />
            <h2 className="font-wedding-display text-4xl md:text-6xl text-white mb-6">
              Let's Create Something<br />
              <span className="text-[#c9a962]">Beautiful Together</span>
            </h2>
            <p className="text-[#a0a0a0] mb-10 max-w-xl mx-auto">
              Limited dates available for 2025-2026. Reach out today to secure your date.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-3 bg-[#c9a962] text-[#0a0a0a] px-10 py-5 rounded-none font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300"
            >
              <span>Get In Touch</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Weddings;
