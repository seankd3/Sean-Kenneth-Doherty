/**
 * Testimonials data.
 * Replace these placeholder testimonials with real client quotes.
 * Set featured: true for testimonials to show on the home page.
 */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  event: string;
  quote: string;
  rating: number;
  date: string;
  featured: boolean;
}

// TODO: Replace with real client testimonials
export const testimonials: Testimonial[] = [
  {
    id: 'lauren-elphin',
    name: 'Lauren M.',
    role: 'Bride',
    event: 'Lauren & Elphin Wedding',
    quote:
      'Sean captured every moment perfectly. From the quiet getting-ready shots to the wild dance floor, he was everywhere we needed him without ever being intrusive. Our photos are absolutely stunning.',
    rating: 5,
    date: '2024-03',
    featured: true,
  },
  {
    id: 'nicole-kawame',
    name: 'Nicole T.',
    role: 'Bride',
    event: 'Nicole & Kawame Wedding',
    quote:
      'We wanted someone who could document our multicultural ceremony with sensitivity and artistry. Sean exceeded every expectation. The photos tell our story beautifully.',
    rating: 5,
    date: '2024-05',
    featured: true,
  },
  {
    id: 'rachel-andrew',
    name: 'Rachel & Andrew',
    role: 'Couple',
    event: 'Hill Country Wedding',
    quote:
      'The sunset photos Sean took at our reception are the most beautiful images we own. He has an incredible eye for light and timing. Worth every penny.',
    rating: 5,
    date: '2024-04',
    featured: true,
  },
  {
    id: 'catskills-couple',
    name: 'Sarah & James',
    role: 'Couple',
    event: 'Catskills Wedding',
    quote:
      'Sean flew out to New York for our fall wedding and the results were breathtaking. He made our fall foliage backdrop look like something out of a magazine.',
    rating: 5,
    date: '2023-10',
    featured: false,
  },
  {
    id: 'hudson-valley-couple',
    name: 'Emily K.',
    role: 'Bride',
    event: 'Hudson Valley Wedding',
    quote:
      'Working with Sean was the best decision we made for our wedding. He is calm, professional, and his creative vision elevated every single shot. Our friends and family are still raving about the photos.',
    rating: 5,
    date: '2023-09',
    featured: true,
  },
  {
    id: 'corporate-event',
    name: 'Maria C.',
    role: 'Event Coordinator',
    event: 'Corporate Gala',
    quote:
      'We hired Sean for our annual company gala and the photos were exceptional. He captured the energy of the event and delivered polished, professional images on a tight turnaround.',
    rating: 5,
    date: '2024-02',
    featured: false,
  },
];

export const featuredTestimonials = testimonials.filter((t) => t.featured);
