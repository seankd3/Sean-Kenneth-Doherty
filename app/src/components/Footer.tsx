'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { footerNavGroups, siteConfig, contactCta } from '@/lib/content';

const Footer = () => {
  const pathname = usePathname();
  const isAerospace = pathname === '/aerospace' || pathname?.startsWith('/aerospace/');

  const bgClass = isAerospace
    ? 'bg-[#d4d0c8] border-[#1a1a1a]'
    : 'bg-[#141414] border-[#2a2a2a]';

  const textClass = isAerospace ? 'text-[#1a1a1a]' : 'text-white';
  const textSecondaryClass = isAerospace ? 'text-[#4a4a4a]' : 'text-[#a0a0a0]';
  const accentClass = isAerospace ? 'text-[#c41e3a]' : 'text-[#c9a962]';
  const hoverClass = isAerospace ? 'hover:text-[#c41e3a]' : 'hover:text-[#c9a962]';
  const borderClass = isAerospace ? 'border-[#1a1a1a]/20' : 'border-[#2a2a2a]';
  const ctaClass = isAerospace
    ? 'bg-[#c41e3a] text-white hover:bg-[#1a1a1a]'
    : 'bg-[#c9a962] text-[#0a0a0a] hover:bg-white';

  const socialLinks = [
    { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
    { icon: Twitter, href: siteConfig.social.twitter, label: 'X (Twitter)' },
  ];

  return (
    <footer className={`${bgClass} border-t`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <span className={`font-wedding-display text-2xl font-semibold ${textClass}`}>
                SEAN <span className={accentClass}>KENNETH</span> DOHERTY
              </span>
            </Link>
            <p className={`${textSecondaryClass} text-sm leading-relaxed mb-6 max-w-xs`}>
              {siteConfig.about.shortBio}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textSecondaryClass} ${hoverClass} transition-colors duration-300`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {footerNavGroups.map((group) => (
            <div key={group.title}>
              <h3 className={`font-wedding-display text-lg ${textClass} mb-5`}>{group.title}</h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.path + link.label}>
                    <Link
                      href={link.path}
                      className={`${textSecondaryClass} ${hoverClass} transition-colors duration-300 text-sm`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className={`font-wedding-display text-lg ${textClass} mb-5`}>Get in touch</h3>
            <ul className="space-y-3.5 mb-6">
              <li className="flex items-center space-x-3">
                <Mail size={16} className={`${accentClass} shrink-0`} />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className={`${textSecondaryClass} ${hoverClass} transition-colors duration-300 text-sm break-all`}
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className={`${accentClass} shrink-0`} />
                <a
                  href={siteConfig.phoneHref}
                  className={`${textSecondaryClass} ${hoverClass} transition-colors duration-300 text-sm`}
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className={`${accentClass} mt-0.5 shrink-0`} />
                <span className={`${textSecondaryClass} text-sm`}>{siteConfig.location}</span>
              </li>
            </ul>
            <Link
              href={contactCta.path}
              className={`inline-flex items-center px-5 py-2.5 text-xs tracking-[0.16em] uppercase font-medium transition-colors ${ctaClass}`}
            >
              {contactCta.label}
            </Link>
            <p className={`${textSecondaryClass} text-xs mt-5 whitespace-pre-line`}>
              {siteConfig.availability}
            </p>
          </div>
        </div>

        <div className={`mt-12 pt-8 border-t ${borderClass} flex flex-col sm:flex-row items-center justify-between gap-3`}>
          <p className={`${textSecondaryClass} text-xs`}>
            &copy; {new Date().getFullYear()} Sean Kenneth Doherty. All rights reserved.
          </p>
          <p className={`${textSecondaryClass} text-xs tracking-wider uppercase`}>
            Austin, TX · Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
