import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Event Photography | Austin, TX',
  description:
    'Live event photography capturing the energy of concerts, performances, and special occasions in Austin, TX and beyond.',
  openGraph: {
    title: 'Event Photography | Sean Kenneth Doherty',
    description:
      'Concerts, performances, and live events frozen in time.',
  },
  alternates: {
    canonical: '/events',
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
