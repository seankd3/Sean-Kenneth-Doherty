import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isAerospace = location.pathname === '/aerospace';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/weddings', label: 'Weddings' },
    { path: '/aerospace', label: 'Aerospace' },
    { path: '/events', label: 'Events' },
    { path: '/landscapes', label: 'Landscapes' },
    { path: '/contact', label: 'Contact' },
  ];

  const bgClass = isAerospace 
    ? 'bg-[#e8e6e1]/95 border-[#1a1a1a]' 
    : 'bg-[#0a0a0a]/95 border-[#2a2a2a]';
  
  const textClass = isAerospace 
    ? 'text-[#1a1a1a]' 
    : 'text-white';

  const accentClass = isAerospace 
    ? 'text-[#c41e3a]' 
    : 'text-[#c9a962]';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? `${bgClass} border-b backdrop-blur-md` : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className={`font-wedding-display text-xl md:text-2xl font-semibold tracking-wide ${textClass}`}>
                SEAN <span className={accentClass}>KENNETH</span> DOHERTY
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`link-underline text-sm tracking-wider uppercase transition-colors duration-300 ${
                    location.pathname === link.path ? accentClass : `${textClass} hover:${accentClass}`
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 ${textClass}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-40 pt-20 ${isAerospace ? 'bg-[#e8e6e1]' : 'bg-[#0a0a0a]'}`}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`font-wedding-display text-3xl tracking-wide transition-colors duration-300 ${
                      location.pathname === link.path ? accentClass : `${textClass} hover:${accentClass}`
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
