import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aerospace & Launch Photography',
  description:
    'Documenting the new space age. SpaceX Starship launches, astrophotography, and aerospace documentation from Starbase, Texas.',
  openGraph: {
    title: 'Aerospace Photography | Sean Kenneth Doherty',
    description:
      'Launch coverage, astrophotography, and aerospace documentation from Starbase, TX.',
  },
  alternates: {
    canonical: '/aerospace',
  },
};

export default function AerospaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
