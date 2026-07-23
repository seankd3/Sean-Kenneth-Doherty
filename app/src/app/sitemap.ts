import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const siteUrl = 'https://seankennethdoherty.com';
const lastModified = new Date();

const indexableRoutes = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/weddings', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/aerospace', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/events', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/landscapes', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/portraits', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/abstract', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/pricing', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/austin-wedding-photographer', changeFrequency: 'monthly', priority: 0.95 },
  { path: '/starbase-aerospace-photographer', changeFrequency: 'monthly', priority: 0.95 },
  { path: '/austin-event-concert-photographer', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.8 },
  { path: '/galleries', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/projects/photoarchive', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/projects/photoarchive/devlog', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/openreviews', changeFrequency: 'monthly', priority: 0.6 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
