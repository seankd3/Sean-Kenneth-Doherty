import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Space_Mono, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SkipLink from '@/components/SkipLink';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { testimonials } from '@/lib/testimonials';
import { withBasePath } from '@/lib/site-paths';

const cormorantGaramond = Cormorant_Garamond({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
});

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex-sans',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://seankennethdoherty.com'),
  title: {
    default: 'Sean Kenneth Doherty Photography | Austin, TX',
    template: '%s | Sean Kenneth Doherty Photography',
  },
  description: 'Professional photographer and cinematographer specializing in weddings, aerospace documentation, events, landscapes, and portraits. Based in Austin, TX.',
  keywords: ['photography', 'wedding photographer', 'aerospace photographer', 'Austin TX photographer', 'portrait photographer', 'event photographer', 'landscape photography', 'SpaceX photographer', 'cinematographer'],
  authors: [{ name: 'Sean Kenneth Doherty' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://seankennethdoherty.com',
    siteName: 'Sean Kenneth Doherty Photography',
    title: 'Sean Kenneth Doherty Photography | Austin, TX',
    description: 'Professional photographer specializing in weddings, aerospace documentation, events, landscapes, and portraits.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Sean Kenneth Doherty Photography' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sean Kenneth Doherty Photography | Austin, TX',
    description: 'Professional photographer specializing in weddings, aerospace documentation, events, landscapes, and portraits.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: withBasePath('/favicon.svg'),
    apple: withBasePath('/apple-touch-icon.png'),
  },
  other: {
    'theme-color': '#0a0a0a',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Sean Kenneth Doherty Photography',
  url: 'https://seankennethdoherty.com',
  logo: 'https://seankennethdoherty.com/favicon.svg',
  image: 'https://seankennethdoherty.com/og-image.jpg',
  description: 'Professional photographer and cinematographer specializing in weddings, aerospace documentation, events, landscapes, and portraits.',
  telephone: '+1-856-803-6982',
  email: 'SeanDohertyPhotos@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '30.2672',
    longitude: '-97.7431',
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: '30.2672',
      longitude: '-97.7431',
    },
    geoRadius: '500000',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Photography Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding Photography & Cinematography' }, priceRange: '$1,400 - $5,400' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aerospace & Launch Documentation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Event Photography' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Portrait Sessions' } },
    ],
  },
  sameAs: [
    'https://instagram.com/Seankd_photos',
    'https://x.com/SeanKD_Photos',
  ],
  priceRange: '$$$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '16:00',
      closes: '23:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  ...(testimonials.length > 0
    ? {
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          reviewCount: String(testimonials.length),
          bestRating: '5',
          worstRating: '1',
        },
        review: testimonials.map((t) => ({
          '@type': 'Review',
          author: { '@type': 'Person', name: t.name },
          datePublished: t.date,
          reviewBody: t.quote,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: String(t.rating),
            bestRating: '5',
          },
        })),
      }
    : {}),
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sean Kenneth Doherty',
  jobTitle: 'Photographer & Cinematographer',
  url: 'https://seankennethdoherty.com',
  image: 'https://seankennethdoherty.com/og-image.jpg',
  sameAs: [
    'https://instagram.com/Seankd_photos',
    'https://x.com/SeanKD_Photos',
  ],
  worksFor: { '@type': 'Organization', name: 'Firefly Aerospace' },
  knowsAbout: [
    'Wedding Photography',
    'Aerospace Photography',
    'SpaceX Starship',
    'Avionics',
    'Cinematography',
    'Launch Documentation',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${inter.variable} ${spaceMono.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <ErrorBoundary>
          <SkipLink />
          <Navigation />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
