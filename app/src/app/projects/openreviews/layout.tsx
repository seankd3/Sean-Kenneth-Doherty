import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OpenReviews - Open Source Review Platform',
  description:
    'OpenReviews is a free, open source review platform for collecting authentic customer feedback without locking business reviews behind expensive SaaS pricing.',
  alternates: {
    canonical: '/projects/openreviews',
  },
  openGraph: {
    title: 'OpenReviews - Open Source Review Platform',
    description:
      'A free, open source review platform for businesses that want to own their customer feedback.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenReviews - Open Source Review Platform',
    description:
      'Collect authentic customer reviews without locking your reputation behind expensive SaaS pricing.',
  },
};

export default function OpenReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
