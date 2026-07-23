import type { Metadata } from 'next';
import { getFirstImage } from '@/lib/gallery-config';
import { breadcrumbSchema } from '@/lib/schema';

const og =
  getFirstImage('events/beach-house-concert') ||
  getFirstImage('events/fire-dancer') ||
  '/og-image.jpg';

export const metadata: Metadata = {
  title: 'Austin Event & Concert Photographer',
  description:
    'Austin event and concert photographer. Live music, festivals, private events, and high-energy coverage. Available for concerts, corporate events, and special occasions across Texas.',
  keywords: [
    'Austin event photographer',
    'Austin concert photographer',
    'live music photographer Austin',
    'festival photographer Texas',
    'corporate event photography Austin',
    'concert photography',
  ],
  openGraph: {
    title: 'Austin Event & Concert Photographer | Sean Kenneth Doherty',
    description:
      'Live music, festivals, and event photography in Austin, TX — energy, atmosphere, and the moments between songs.',
    images: [{ url: og, alt: 'Austin concert and event photography' }],
  },
  alternates: {
    canonical: '/austin-event-concert-photographer',
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Austin Event & Concert Photographer', url: '/austin-event-concert-photographer' },
]);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {children}
    </>
  );
}
