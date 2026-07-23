/**
 * Site-wide content configuration.
 * Edit this file to update contact info, social links, and global copy.
 */

export const siteConfig = {
  name: 'Sean Kenneth Doherty',
  title: 'Sean Kenneth Doherty Photography',
  tagline: 'Photographer & Cinematographer',
  location: 'Austin, TX',
  email: 'SeanDohertyPhotos@gmail.com',
  phone: '(856) 803-6982',
  phoneHref: 'tel:+18568036982',
  url: 'https://seankennethdoherty.com',
  availability: 'Available weekdays 4pm-11pm\nWeekends anytime',
  social: {
    instagram: 'https://instagram.com/Seankd_photos',
    twitter: 'https://x.com/SeanKD_Photos',
  },
  about: {
    shortBio:
      'Photographer & Cinematographer based in Austin, TX. Capturing everything from weddings to rocket launches.',
  },
};

/**
 * Compact primary nav — keep top bar short and intentional.
 * Logo is Home. Contact is a CTA, not a plain link.
 */
export const primaryNavigationLinks = [
  { path: '/weddings', label: 'Weddings' },
  { path: '/aerospace', label: 'Aerospace' },
  { path: '/galleries', label: 'Portfolio' },
  { path: '/pricing', label: 'Pricing' },
];

/** Prominent inquire action in the header */
export const contactCta = { path: '/contact', label: 'Inquire' };

/** Full work catalog — mobile “All work” + footer Work column */
export const workNavigationLinks = [
  { path: '/weddings', label: 'Weddings' },
  { path: '/aerospace', label: 'Aerospace' },
  { path: '/events', label: 'Events' },
  { path: '/landscapes', label: 'Landscapes' },
  { path: '/portraits', label: 'Portraits' },
  { path: '/abstract', label: 'Abstract' },
  { path: '/galleries', label: 'All galleries' },
];

export const footerNavGroups = [
  {
    title: 'Work',
    links: workNavigationLinks,
  },
  {
    title: 'Plan',
    links: [
      { path: '/pricing', label: 'Wedding pricing' },
      { path: '/austin-wedding-photographer', label: 'Austin weddings' },
      { path: '/starbase-aerospace-photographer', label: 'Aerospace / Starbase' },
      { path: '/austin-event-concert-photographer', label: 'Events & concerts' },
      { path: '/contact', label: 'Inquire' },
      { path: '/projects', label: 'Projects' },
    ],
  },
];

/** Legacy flat list for any remaining consumers */
export const footerNavigationLinks = [
  ...workNavigationLinks,
  { path: '/pricing', label: 'Pricing' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export const seoDefaults = {
  title: 'Sean Kenneth Doherty Photography | Austin, TX',
  description:
    'Professional photographer and cinematographer specializing in weddings, aerospace documentation, events, landscapes, and portraits. Based in Austin, TX.',
  keywords: [
    'photography',
    'wedding photographer',
    'aerospace photographer',
    'Austin TX photographer',
    'portrait photographer',
    'event photographer',
    'landscape photography',
    'SpaceX photographer',
    'cinematographer',
  ],
};
