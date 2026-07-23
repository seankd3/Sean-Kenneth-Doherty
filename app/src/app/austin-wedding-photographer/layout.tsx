import type { Metadata } from 'next';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Austin Wedding Photographer',
  description:
    'Austin wedding photographer and cinematographer. Timeless, documentary-style wedding photography. Collections from $1,400. Now booking 2026–2027. Available for destination weddings across Texas and beyond.',
  keywords: [
    'Austin wedding photographer',
    'Austin TX wedding photography',
    'Texas wedding cinematographer',
    'documentary wedding photographer Austin',
    'wedding packages Austin',
  ],
  openGraph: {
    title: 'Austin Wedding Photographer | Sean Kenneth Doherty',
    description:
      'Documentary wedding photography in Austin, TX. View galleries, transparent packages from $1,400, and check availability.',
    images: [{ url: '/images/hero/home-hero.webp', alt: 'Austin wedding photography' }],
  },
  alternates: {
    canonical: '/austin-wedding-photographer',
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Austin Wedding Photographer', url: '/austin-wedding-photographer' },
]);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {children}
    </>
  );
}
