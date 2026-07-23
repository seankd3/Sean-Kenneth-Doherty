import type { Metadata } from 'next';
import { getFirstImage } from '@/lib/gallery-config';
import { breadcrumbSchema } from '@/lib/schema';

const og = getFirstImage('aerospace/starbase') || '/images/hero/home-hero.webp';

export const metadata: Metadata = {
  title: 'Starbase & Aerospace Photographer | Texas',
  description:
    'Aerospace and launch photographer based in Texas. Starbase documentation, remote cameras, press and commercial coverage. Former SpaceX and Firefly avionics technician. Available for assignment.',
  keywords: [
    'Starbase photographer',
    'aerospace photographer Texas',
    'SpaceX launch photographer',
    'Starship photography',
    'launch documentation',
    'commercial aerospace photographer',
  ],
  openGraph: {
    title: 'Starbase & Aerospace Photographer | Sean Kenneth Doherty',
    description:
      'Launch coverage, remote cameras, and technical storytelling from Starbase, TX and beyond.',
    images: [{ url: og, alt: 'Aerospace photography' }],
  },
  alternates: {
    canonical: '/starbase-aerospace-photographer',
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Starbase Aerospace Photographer', url: '/starbase-aerospace-photographer' },
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
