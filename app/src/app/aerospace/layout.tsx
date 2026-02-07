import type { Metadata } from 'next';
import { getFirstImage } from '@/lib/gallery-config';
import { breadcrumbSchema } from '@/lib/schema';

const ogImage = getFirstImage('aerospace/starbase') || '/og-image.jpg';

export const metadata: Metadata = {
  title: 'Aerospace & Launch Photography',
  description:
    'Aerospace photography by Sean Kenneth Doherty. Former SpaceX Starship avionics technician and press photographer for NASASpaceFlight. Documenting launches at Starbase, Texas. Astrophotography, Apollo astronaut portraits, and aerospace event coverage.',
  openGraph: {
    title: 'Aerospace Photography | Sean Kenneth Doherty',
    description:
      'Launch coverage, astrophotography, and aerospace documentation from Starbase, TX.',
    images: [{ url: ogImage, alt: 'Aerospace photography by Sean Kenneth Doherty' }],
  },
  alternates: {
    canonical: '/aerospace',
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Aerospace', url: '/aerospace' },
]);

export default function AerospaceLayout({
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
