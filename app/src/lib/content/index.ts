/**
 * Centralized content management.
 *
 * To update any text on the site, edit the corresponding file:
 *   - site.ts    → Contact info, social links, SEO defaults
 *   - albums.ts  → Album titles, descriptions, locations, dates
 *   - pages.ts   → Page hero text, CTAs, section copy
 *   - projects.ts → Hidden project index and active build notes
 *
 * All page components import from here instead of hardcoding strings.
 */

export {
  siteConfig,
  primaryNavigationLinks,
  footerNavigationLinks,
  seoDefaults,
} from './site';

export {
  weddingAlbums,
  aerospaceAlbums,
  eventAlbums,
  landscapeAlbums,
  portraitAlbums,
  abstractAlbums,
} from './albums';

export {
  homePage,
  weddingsPage,
  aerospacePage,
  eventsPage,
  landscapesPage,
  portraitsPage,
  abstractPage,
  galleriesPage,
  contactPage,
} from './pages';

export { projectsPage, projects } from './projects';
export type { Project, ProjectUpdate, ProjectLink } from './projects';

export {
  weddingPackages,
  weddingAddOns,
  pricingConfig,
  formatPrice,
} from './wedding-pricing';
export type { WeddingPackage, WeddingAddOn, PricingConfig } from './wedding-pricing';
