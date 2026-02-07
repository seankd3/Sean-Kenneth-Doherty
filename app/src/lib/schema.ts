/**
 * Structured data (JSON-LD) helpers for SEO.
 * Used by layout.tsx server components at build time.
 */

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://seankennethdoherty.com${item.url}`,
    })),
  };
}
