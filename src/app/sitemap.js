import { SITE_URL, locations } from '@/data/locations';

// Required by output: 'export' so this route is emitted as a static file at build time.
export const dynamic = 'force-static';

/**
 * Generates sitemap.xml at build time. /our-providers is deliberately excluded:
 * it is a noindexed signpost and should not be submitted for indexing.
 */
export default function sitemap() {
  const lastModified = new Date();

  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'monthly' },
    { path: '/articles', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/articles/exercise-nutrition', priority: 0.64, changeFrequency: 'yearly' },
    { path: '/articles/light-therapy', priority: 0.64, changeFrequency: 'yearly' },
    { path: '/articles/reducing-meds', priority: 0.64, changeFrequency: 'yearly' },
    { path: '/articles/screen-time', priority: 0.64, changeFrequency: 'yearly' },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  ];

  const locationRoutes = locations.map((location) => ({
    path: `/${location.slug}`,
    priority: 0.9,
    changeFrequency: 'monthly',
  }));

  return [...staticRoutes, ...locationRoutes].map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
