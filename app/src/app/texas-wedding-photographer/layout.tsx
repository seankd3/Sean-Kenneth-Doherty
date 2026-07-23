import type { Metadata } from 'next';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Texas Wedding Photographer',
  description:
    'Texas wedding photographer and cinematographer. Austin-based coverage for Hill Country, Dallas, Houston, San Antonio, and destination weddings. Collections from $1,400. Now booking.',
  keywords: [
    'Texas wedding photographer',
    'Hill Country wedding photographer',
    'Austin TX wedding',
    'destination wedding photographer Texas',
  ],
  openGraph: {
    title: 'Texas Wedding Photographer | Sean Kenneth Doherty',
    description: 'Documentary wedding photography across Texas. Transparent packages, real emotion.',
    images: [{ url: '/images/hero/home-hero.webp', alt: 'Texas wedding photography' }],
  },
  alternates: { canonical: '/texas-wedding-photographer' },
};

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Texas Wedding Photographer', url: '/texas-wedding-photographer' },
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
