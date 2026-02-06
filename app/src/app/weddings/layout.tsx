import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Photography & Cinematography | Austin, TX',
  description:
    'Elegant wedding photography and cinematography in Austin, TX. View full galleries from real weddings. Packages from $3,500. Available for destination weddings nationwide.',
  openGraph: {
    title: 'Wedding Photography | Sean Kenneth Doherty',
    description:
      'Capturing your love story with timeless elegance. View galleries from real weddings and explore packages.',
  },
  alternates: {
    canonical: '/weddings',
  },
};

export default function WeddingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
