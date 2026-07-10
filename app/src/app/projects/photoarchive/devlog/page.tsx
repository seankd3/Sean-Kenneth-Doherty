import type { Metadata } from 'next';
import PhotoArchiveDevlogPage from '@/components/photoarchive/PhotoArchiveDevlogPage';

export const metadata: Metadata = {
  title: 'photoArchive Development Log',
  description:
    'A newest-first editorial development log for photoArchive, from the original PhotoRanker through the current local-first product.',
  alternates: {
    canonical: 'https://seankennethdoherty.com/projects/photoarchive/devlog',
  },
  openGraph: {
    title: 'photoArchive Development Log',
    description:
      'Product-era notes on how photoArchive evolved: problem, change, and effect for each major milestone.',
    url: 'https://seankennethdoherty.com/projects/photoarchive/devlog',
    images: [
      {
        url: '/images/photoarchive/refine-mosaic.jpg',
        width: 2400,
        height: 1500,
        alt: 'photoArchive Refine mosaic ranking UI.',
      },
    ],
  },
};

export default function PhotoArchiveDevlogRoute() {
  return <PhotoArchiveDevlogPage />;
}
