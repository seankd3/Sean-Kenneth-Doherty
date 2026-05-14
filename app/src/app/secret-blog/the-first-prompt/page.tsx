import type { Metadata } from 'next';

export { default } from '../../the-first-prompt/page';

export const metadata: Metadata = {
  title: 'The Book of the First Prompt',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};
