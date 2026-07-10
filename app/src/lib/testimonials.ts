/**
 * Verified testimonials data.
 *
 * Add only real, permission-cleared client quotes here. When this list is empty,
 * testimonial sections and review structured data are intentionally omitted.
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

export const testimonials: Testimonial[] = [];

export const featuredTestimonials = testimonials.filter((t) => t.featured);
