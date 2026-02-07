import type { Metadata } from 'next';
import { getFirstImage } from '@/lib/gallery-config';
import { breadcrumbSchema } from '@/lib/schema';

const ogImage = getFirstImage('events/beach-house-concert') || '/og-image.jpg';

export const metadata: Metadata = {
  title: 'Event Photography | Austin, TX',
  description:
    'Live event photography capturing the energy of concerts, performances, and special occasions in Austin, TX and beyond.',
  openGraph: {
    title: 'Event Photography | Sean Kenneth Doherty',
    description:
      'Concerts, performances, and live events frozen in time.',
    images: [{ url: ogImage, alt: 'Event photography by Sean Kenneth Doherty' }],
  },
  alternates: {
    canonical: '/events',
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Events', url: '/events' },
]);

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
