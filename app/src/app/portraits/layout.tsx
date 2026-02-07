import type { Metadata } from 'next';
import { getFirstImage } from '@/lib/gallery-config';
import { breadcrumbSchema } from '@/lib/schema';

const ogImage = getFirstImage('portraits/hillary-astrid') || '/og-image.jpg';

export const metadata: Metadata = {
  title: 'Portrait Photography | Austin, TX',
  description:
    'Professional and artistic portrait photography in Austin, TX. Individual, couple, and creative portrait sessions.',
  openGraph: {
    title: 'Portrait Photography | Sean Kenneth Doherty',
    description:
      'Professional portraits that reveal the essence of each subject.',
    images: [{ url: ogImage, alt: 'Portrait photography by Sean Kenneth Doherty' }],
  },
  alternates: {
    canonical: '/portraits',
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Portraits', url: '/portraits' },
]);

export default function PortraitsLayout({
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
