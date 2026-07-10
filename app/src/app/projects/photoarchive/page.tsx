import type { Metadata } from 'next';
import PhotoArchiveProductPage from '@/components/photoarchive/PhotoArchiveProductPage';

export const metadata: Metadata = {
  title: 'photoArchive — Local-first photo archive',
  description:
    'photoArchive is open-source, self-hosted photo software for finding, choosing, developing, and sharing a local-first photography archive.',
  alternates: {
    canonical: 'https://seankennethdoherty.com/projects/photoarchive',
  },
  openGraph: {
    title: 'photoArchive — Local-first photo archive',
    description:
      'A self-hosted photo system for search, taste learning, Develop workflows, mobile access, and publishing without giving up local originals.',
    url: 'https://seankennethdoherty.com/projects/photoarchive',
    images: [
      {
        url: '/images/photoarchive/library-grid.jpg',
        width: 2400,
        height: 1500,
        alt: 'photoArchive desktop library grid.',
      },
    ],
  },
};

export default function PhotoArchiveRoute() {
  return <PhotoArchiveProductPage />;
}
