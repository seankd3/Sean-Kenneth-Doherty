import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SkipLink from '@/components/SkipLink';
import { ErrorBoundary } from '@/components/ErrorBoundary';

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
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
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
  telephone: '+1-512-555-0100',
  email: 'sean@seankennethdoherty.com',
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
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding Photography & Cinematography' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aerospace & Launch Documentation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Event Photography' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Portrait Sessions' } },
    ],
  },
  sameAs: [
    'https://instagram.com/seankennethdoherty',
    'https://x.com/seankdoherty',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@300;400;500;600&family=Inter:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Netlify Forms detection */}
        <meta name="netlify" content="edge" />
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
        {/* Hidden form for Netlify Forms detection */}
        <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="text" name="phone" />
          <input type="text" name="eventType" />
          <input type="text" name="eventDate" />
          <textarea name="message"></textarea>
        </form>
      </body>
    </html>
  );
}
