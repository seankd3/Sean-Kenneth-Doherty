import type { Metadata } from 'next';
import { getFirstImage } from '@/lib/gallery-config';
import { breadcrumbSchema } from '@/lib/schema';

const og = getFirstImage('events/beach-house-concert') || '/og-image.jpg';

export const metadata: Metadata = {
  title: 'Live Music Photographer Austin',
  description:
    'Live music photographer in Austin, TX. Concerts, festivals, club shows, and tour dates. High-energy stage and crowd coverage for artists, venues, and promoters.',
  keywords: [
    'live music photographer Austin',
    'concert photographer Austin TX',
    'band photographer Austin',
    'festival photographer Texas',
  ],
  openGraph: {
    title: 'Live Music Photographer Austin | Sean Kenneth Doherty',
    description: 'Concert and festival photography in Austin — stage, crowd, atmosphere.',
    images: [{ url: og, alt: 'Austin live music photography' }],
  },
  alternates: { canonical: '/live-music-photographer-austin' },
};

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Live Music Photographer Austin', url: '/live-music-photographer-austin' },
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
