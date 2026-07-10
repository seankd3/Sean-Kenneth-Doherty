import type { Metadata } from 'next';
import PhotoArchiveLegacyRedirect from '@/components/photoarchive/PhotoArchiveLegacyRedirect';

export const metadata: Metadata = {
  title: 'photoArchive moved',
  description:
    'The canonical photoArchive product page now lives at /projects/photoarchive.',
  alternates: {
    canonical: 'https://seankennethdoherty.com/projects/photoarchive',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PhotoArchivePage() {
  return <PhotoArchiveLegacyRedirect />;
}
