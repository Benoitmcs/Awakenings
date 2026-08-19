import { SITE_URL, locations } from '@/data/locations';
import { articles, resources } from '@/data/articles';

// Required by output: 'export' so this route is emitted as a static file at build time.
export const dynamic = 'force-static';

/**
 * Generates sitemap.xml at build time.
 *
 * Every URL is derived from src/data/locations.js and src/data/articles.js, so
 * adding an office or an article puts it in the sitemap automatically. Nothing
 * here is hardcoded.
 *
 * Articles carry their real published date as `lastmod` rather than the build
 * time. Stamping every URL with "now" on each deploy tells search engines the
 * whole site changed when it did not, which makes the signal worthless.
 *
 * /our-providers is deliberately excluded: it is a noindex signpost kept only
 * so old inbound links resolve, and should not be submitted for indexing.
 */
export default function sitemap() {
  const buildTime = new Date();

  /* Pages whose content genuinely changes as the practice changes. */
  const dynamicPages = [
    { path: '', priority: 1.0, changeFrequency: 'monthly' },
    { path: '/articles', priority: 0.8, changeFrequency: 'monthly' },
  ].map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: buildTime,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const locationPages = locations.map((location) => ({
    url: `${SITE_URL}/${location.slug}`,
    lastModified: buildTime,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const articlePages = articles.map((article) => ({
    url: `${SITE_URL}/articles/${article.slug}`,
    lastModified: new Date(article.published),
    changeFrequency: 'yearly',
    priority: 0.64,
  }));

  /* Patient handouts. Only files linked from the site are listed. */
  const resourceFiles = resources.map((resource) => ({
    url: `${SITE_URL}${encodeURI(resource.path)}`,
    lastModified: buildTime,
    changeFrequency: 'yearly',
    priority: 0.4,
  }));

  const staticPages = [
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: buildTime,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return [
    ...dynamicPages,
    ...locationPages,
    ...articlePages,
    ...resourceFiles,
    ...staticPages,
  ];
}
