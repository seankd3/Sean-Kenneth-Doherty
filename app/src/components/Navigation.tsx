'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  primaryNavigationLinks,
  contactCta,
  workNavigationLinks,
} from '@/lib/content';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isAerospace = pathname === '/aerospace' || pathname?.startsWith('/aerospace/');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const bgClass = isAerospace
    ? 'bg-[#e8e6e1]/95 border-[#1a1a1a]'
    : 'bg-[#0a0a0a]/95 border-[#2a2a2a]';

  const textClass = isAerospace ? 'text-[#1a1a1a]' : 'text-white';
  const accentClass = isAerospace ? 'text-[#c41e3a]' : 'text-[#c9a962]';
  const hoverClass = isAerospace ? 'hover:text-[#c41e3a]' : 'hover:text-[#c9a962]';
  const ctaClass = isAerospace
    ? 'bg-[#c41e3a] text-white hover:bg-[#1a1a1a]'
    : 'bg-[#c9a962] text-[#0a0a0a] hover:bg-white';
  const ringClass = isAerospace
    ? 'focus-visible:ring-[#c41e3a] focus-visible:ring-offset-[#e8e6e1]'
    : 'focus-visible:ring-[#c9a962] focus-visible:ring-offset-[#0a0a0a]';

  const isActive = (path: string) =>
    path === '/'
      ? pathname === '/'
      : pathname === path || pathname?.startsWith(`${path}/`);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? `${bgClass} border-b backdrop-blur-md` : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 gap-4">
            {/* Logo — is Home */}
            <Link
              href="/"
              className="flex items-center min-w-0 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm"
              aria-label="Sean Kenneth Doherty — Home"
            >
              <span
                className={`font-wedding-display text-lg sm:text-xl md:text-2xl font-semibold tracking-wide ${textClass}`}
              >
                <span className="hidden sm:inline">
                  SEAN <span className={accentClass}>KENNETH</span> DOHERTY
                </span>
                <span className="sm:hidden">
                  SEAN <span className={accentClass}>KD</span>
                </span>
              </span>
            </Link>

            {/* Desktop — short primary + CTA */}
            <nav
              className="hidden lg:flex items-center gap-7 xl:gap-9"
              aria-label="Main navigation"
            >
              {primaryNavigationLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    aria-current={active ? 'page' : undefined}
                    className={`link-underline text-sm tracking-[0.14em] uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${ringClass} ${
                      active ? accentClass : `${textClass} ${hoverClass}`
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href={contactCta.path}
                className={`ml-1 px-5 py-2.5 text-xs tracking-[0.16em] uppercase font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${ringClass} ${ctaClass}`}
              >
                {contactCta.label}
              </Link>
            </nav>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className={`lg:hidden p-2 ${textClass} focus:outline-none focus-visible:ring-2 ${ringClass}`}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-0 z-40 pt-20 overflow-y-auto ${
              isAerospace ? 'bg-[#e8e6e1]' : 'bg-[#0a0a0a]'
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="max-w-lg mx-auto px-6 pb-16">
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {primaryNavigationLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      href={link.path}
                      aria-current={active ? 'page' : undefined}
                      className={`font-wedding-display text-3xl py-3 tracking-wide transition-colors ${
                        active ? accentClass : `${textClass} ${hoverClass}`
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className={`mt-8 pt-8 border-t ${isAerospace ? 'border-[#1a1a1a]/25' : 'border-[#2a2a2a]'}`}>
                <p
                  className={`text-xs tracking-[0.25em] uppercase mb-4 ${
                    isAerospace ? 'text-[#4a4a4a]' : 'text-[#666]'
                  }`}
                >
                  All work
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {workNavigationLinks
                    .filter((l) => l.path !== '/galleries')
                    .map((link) => (
                      <Link
                        key={link.path}
                        href={link.path}
                        className={`text-sm tracking-wider uppercase ${
                          isActive(link.path) ? accentClass : `${textClass} opacity-80 ${hoverClass}`
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                </div>
              </div>

              <Link
                href={contactCta.path}
                className={`mt-10 flex items-center justify-center w-full py-4 text-sm tracking-[0.18em] uppercase font-medium transition-colors ${ctaClass}`}
              >
                {contactCta.label}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
