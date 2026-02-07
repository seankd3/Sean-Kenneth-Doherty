import type { Metadata } from 'next';
import { contactPage } from '@/lib/content';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact | Book Your Session',
  description:
    'Get in touch to book wedding photography, portrait sessions, or event coverage. Based in Austin, TX. Available weekdays 4pm-11pm and weekends anytime.',
  openGraph: {
    title: 'Contact Sean Kenneth Doherty Photography',
    description:
      'Book your session or get a quote. Wedding, portrait, and event photography in Austin, TX.',
  },
  alternates: {
    canonical: '/contact',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: contactPage.faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Contact', url: '/contact' },
]);

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {children}
    </>
  );
}
