import type { Metadata } from 'next';
import { getFirstImage } from '@/lib/gallery-config';
import { breadcrumbSchema } from '@/lib/schema';

const ogImage = getFirstImage('abstract/from-above') || '/og-image.jpg';

export const metadata: Metadata = {
  title: 'Abstract Photography',
  description:
    'Abstract photography exploring form, color, texture, and perspective. Aerial and experimental photography by Sean Kenneth Doherty.',
  openGraph: {
    title: 'Abstract Photography | Sean Kenneth Doherty',
    description:
      'Exploring form, color, texture, and the spaces between.',
    images: [{ url: ogImage, alt: 'Abstract photography by Sean Kenneth Doherty' }],
  },
  alternates: {
    canonical: '/abstract',
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Abstract', url: '/abstract' },
]);

export default function AbstractLayout({
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
