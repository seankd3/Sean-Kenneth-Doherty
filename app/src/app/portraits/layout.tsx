import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portrait Photography | Austin, TX',
  description:
    'Professional and artistic portrait photography in Austin, TX. Individual, couple, and creative portrait sessions.',
  openGraph: {
    title: 'Portrait Photography | Sean Kenneth Doherty',
    description:
      'Professional portraits that reveal the essence of each subject.',
  },
  alternates: {
    canonical: '/portraits',
  },
};

export default function PortraitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
