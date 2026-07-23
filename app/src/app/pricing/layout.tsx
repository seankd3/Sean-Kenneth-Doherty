import type { Metadata } from 'next';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Wedding Photography Pricing | Austin, TX',
  description:
    'Wedding photography and cinematography packages starting at $1,400. Build your collection and inquire with pricing already filled in. Austin, TX and destination.',
  openGraph: {
    title: 'Wedding Photography Pricing | Sean Kenneth Doherty',
    description:
      'Transparent wedding collections and add-ons. Build a package and start an inquiry in one step.',
  },
  alternates: {
    canonical: '/pricing',
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Pricing', url: '/pricing' },
]);

export default function PricingLayout({ children }: { children: React.ReactNode }) {
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
