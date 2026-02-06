import type { Metadata } from 'next';

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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
