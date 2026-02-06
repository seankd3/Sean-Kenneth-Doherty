import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Abstract Photography',
  description:
    'Abstract photography exploring form, color, texture, and perspective. Aerial and experimental photography by Sean Kenneth Doherty.',
  openGraph: {
    title: 'Abstract Photography | Sean Kenneth Doherty',
    description:
      'Exploring form, color, texture, and the spaces between.',
  },
  alternates: {
    canonical: '/abstract',
  },
};

export default function AbstractLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
