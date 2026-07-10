import type { Metadata } from 'next';
import PhotoArchiveShowcase from '@/components/photoarchive/PhotoArchiveShowcase';

export const metadata: Metadata = {
  title: 'photoArchive — The photo system I wanted to exist',
  description:
    'A local-first photo archive with fast library browsing, Elo taste learning, three-engine search, mobile PWA access, private publishing, and Lightroom-class Develop tools.',
};

export default function PhotoArchivePage() {
  return <PhotoArchiveShowcase />;
}
