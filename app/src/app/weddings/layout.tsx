import type { Metadata } from 'next';
import { getFirstImage } from '@/lib/gallery-config';
import { breadcrumbSchema } from '@/lib/schema';

const ogImage = getFirstImage('weddings/lauren-elphin') || '/og-image.jpg';

export const metadata: Metadata = {
  title: 'Wedding Photography & Cinematography | Austin, TX',
  description:
    'Elegant wedding photography and cinematography in Austin, TX. View full galleries from real weddings. Collections starting at $1,400. Available for destination weddings nationwide.',
  openGraph: {
    title: 'Wedding Photography | Sean Kenneth Doherty',
    description:
      'Capturing your love story with timeless elegance. View galleries from real weddings and explore packages.',
    images: [{ url: ogImage, alt: 'Wedding photography by Sean Kenneth Doherty' }],
  },
  alternates: {
    canonical: '/weddings',
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Weddings', url: '/weddings' },
]);

export default function WeddingsLayout({
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
