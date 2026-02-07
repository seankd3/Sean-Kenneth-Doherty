import type { Metadata } from 'next';
import { getFirstImage } from '@/lib/gallery-config';
import { breadcrumbSchema } from '@/lib/schema';

const ogImage = getFirstImage('landscapes/american-landscapes') || '/og-image.jpg';

export const metadata: Metadata = {
  title: 'Landscape Photography & Fine Art Prints',
  description:
    'Landscape photography from the American Southwest, Big Bend, Costa Rica, and beyond. Limited edition fine art prints available.',
  openGraph: {
    title: 'Landscape Photography | Sean Kenneth Doherty',
    description:
      'The beauty of the American landscape captured in golden light. Fine art prints available.',
    images: [{ url: ogImage, alt: 'Landscape photography by Sean Kenneth Doherty' }],
  },
  alternates: {
    canonical: '/landscapes',
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Landscapes', url: '/landscapes' },
]);

export default function LandscapesLayout({
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
