import { Link, useLocation } from 'react-router-dom';
import { Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const location = useLocation();
  const isAerospace = location.pathname === '/aerospace';

  const bgClass = isAerospace 
    ? 'bg-[#d4d0c8] border-[#1a1a1a]' 
    : 'bg-[#141414] border-[#2a2a2a]';
  
  const textClass = isAerospace 
    ? 'text-[#1a1a1a]' 
    : 'text-white';
  
  const textSecondaryClass = isAerospace 
    ? 'text-[#4a4a4a]' 
    : 'text-[#a0a0a0]';

  const accentClass = isAerospace 
    ? 'text-[#c41e3a]' 
    : 'text-[#c9a962]';

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/Seankd_photos', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/SeanKD_Photos', label: 'X (Twitter)' },
    // YouTube removed until channel is active
  ];

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/weddings', label: 'Weddings' },
    { path: '/aerospace', label: 'Aerospace' },
    { path: '/events', label: 'Events' },
    { path: '/landscapes', label: 'Landscapes' },
    { path: '/portraits', label: 'Portraits' },
    { path: '/abstract', label: 'Abstract' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className={`${bgClass} border-t`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-block mb-6">
              <span className={`font-wedding-display text-2xl font-semibold ${textClass}`}>
                SEAN <span className={accentClass}>KENNETH</span> DOHERTY
              </span>
            </Link>
            <p className={`${textSecondaryClass} text-sm leading-relaxed mb-6`}>
              Photographer & Cinematographer based in Austin, TX. 
              Capturing everything from weddings to rocket launches.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textSecondaryClass} hover:${accentClass} transition-colors duration-300`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className={`font-wedding-display text-lg ${textClass} mb-6`}>Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`${textSecondaryClass} hover:${accentClass} transition-colors duration-300 text-sm`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={`font-wedding-display text-lg ${textClass} mb-6`}>Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail size={16} className={accentClass} />
                <a 
                  href="mailto:SeanDohertyPhotos@gmail.com"
                  className={`${textSecondaryClass} hover:${accentClass} transition-colors duration-300 text-sm`}
                >
                  SeanDohertyPhotos@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className={accentClass} />
                <a 
                  href="tel:+18568036982"
                  className={`${textSecondaryClass} hover:${accentClass} transition-colors duration-300 text-sm`}
                >
                  (856) 803-6982
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className={`${accentClass} mt-0.5`} />
                <span className={`${textSecondaryClass} text-sm`}>
                  Austin, TX
                </span>
              </li>
            </ul>
            <div className={`mt-6 pt-6 border-t ${isAerospace ? 'border-[#1a1a1a]/20' : 'border-[#2a2a2a]'}`}>
              <p className={`${textSecondaryClass} text-xs`}>
                Available weekdays 4pm-11pm<br />
                Weekends anytime
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-12 pt-8 border-t ${isAerospace ? 'border-[#1a1a1a]/20' : 'border-[#2a2a2a]'} text-center`}>
          <p className={`${textSecondaryClass} text-xs`}>
            © {new Date().getFullYear()} Sean Kenneth Doherty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
