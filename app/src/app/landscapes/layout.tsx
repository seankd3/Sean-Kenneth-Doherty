import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landscape Photography & Fine Art Prints',
  description:
    'Landscape photography from the American Southwest, Big Bend, Costa Rica, and beyond. Limited edition fine art prints available.',
  openGraph: {
    title: 'Landscape Photography | Sean Kenneth Doherty',
    description:
      'The beauty of the American landscape captured in golden light. Fine art prints available.',
  },
  alternates: {
    canonical: '/landscapes',
  },
};

export default function LandscapesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
