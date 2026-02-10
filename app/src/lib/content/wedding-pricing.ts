// Wedding pricing data — single source of truth for the interactive pricing builder.
// Update prices here; the component reads everything from these constants.

export interface WeddingPackage {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  hours: string;
  photoCount: string;
  features: string[];
  /** Add-on IDs that are already included in this package */
  includedAddOns: string[];
  popular?: boolean;
}

export interface WeddingAddOn {
  id: string;
  name: string;
  price: number;
  /** Whether this add-on supports a quantity selector */
  hasQuantity?: boolean;
  maxQuantity?: number;
}

export interface PricingConfig {
  payInFullDiscount: number;
  retainerPercent: number;
}

export const pricingConfig: PricingConfig = {
  payInFullDiscount: 200,
  retainerPercent: 25,
};

export const weddingPackages: WeddingPackage[] = [
  {
    id: 'elopement',
    name: 'Elopement',
    subtitle: 'Intimate ceremonies & micro-weddings',
    price: 1400,
    hours: '2',
    photoCount: '150+',
    features: [
      '2 hours of coverage',
      '1 photographer',
      '150+ edited photos',
      'Online gallery with downloads',
      'Location scouting guidance',
      'Print release included',
    ],
    includedAddOns: [],
  },
  {
    id: 'collection-i',
    name: 'Collection I',
    subtitle: 'Essential full-day coverage',
    price: 2600,
    hours: '6',
    photoCount: '350+',
    features: [
      '6 hours of coverage',
      '1 photographer',
      '350+ edited photos',
      'Online gallery with downloads',
      'Engagement session (30 min)',
      'Wedding day timeline assist',
      'Sneak peeks within 48 hours',
      'Print release included',
    ],
    includedAddOns: ['engagement-session'],
  },
  {
    id: 'collection-ii',
    name: 'Collection II',
    subtitle: 'Complete full-day coverage',
    price: 3800,
    hours: '8',
    photoCount: '500+',
    features: [
      '8 hours of coverage',
      '1 photographer',
      '500+ edited photos',
      'Online gallery with downloads',
      'Full engagement session (1 hr)',
      'Wedding day timeline assist',
      'Sneak peeks within 48 hours',
      'Print release included',
    ],
    includedAddOns: ['engagement-session'],
    popular: true,
  },
  {
    id: 'collection-iii',
    name: 'Collection III',
    subtitle: 'Photo + cinema, the full experience',
    price: 5400,
    hours: '10+',
    photoCount: '700+',
    features: [
      '10+ hours of coverage',
      '1 photographer',
      '700+ edited photos',
      'Online gallery with downloads',
      'Full engagement session (1 hr)',
      'Rehearsal dinner coverage',
      '3-5 min highlight film',
      'Premium album (40 pages)',
      'Sneak peeks within 48 hours',
      'Rush editing available',
      'Print release included',
    ],
    includedAddOns: [
      'engagement-session',
      'rehearsal-dinner',
      'highlight-film',
      'premium-album',
      'rush-editing',
    ],
  },
];

export const weddingAddOns: WeddingAddOn[] = [
  { id: 'additional-hour', name: 'Additional hour of coverage', price: 300, hasQuantity: true, maxQuantity: 4 },
  { id: 'engagement-session', name: 'Engagement session', price: 400 },
  { id: 'rehearsal-dinner', name: 'Rehearsal dinner coverage (3 hrs)', price: 650 },
  { id: 'premium-album', name: 'Premium photo album (40 pages)', price: 750 },
  { id: 'parent-albums', name: 'Parent albums (set of 2)', price: 450 },
  { id: 'highlight-film', name: 'Highlight film (3-5 min)', price: 1600 },
  { id: 'full-ceremony-film', name: 'Full ceremony film', price: 1200 },
  { id: 'rush-editing', name: 'Rush editing (2-week delivery)', price: 350 },
];

export function formatPrice(cents: number): string {
  return `$${cents.toLocaleString('en-US')}`;
}
