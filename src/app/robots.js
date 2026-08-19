import { SITE_URL } from '@/data/locations';

// Required by output: 'export' so this route is emitted as a static file at build time.
export const dynamic = 'force-static';

/**
 * Generates robots.txt at build time.
 *
 * /our-providers is intentionally NOT disallowed here. It carries a `noindex,
 * follow` meta tag, and a crawler has to be able to fetch the page to see that
 * tag. Blocking it in robots.txt would leave the old URL indexed indefinitely
 * and stop link equity flowing on to the two office pages. Keeping it
 * crawlable but noindexed is what actually retires it.
 *
 * The old static site's `Crawl-delay: 5` is deliberately not carried over:
 * Google ignores it and Bing honors it, so it only slowed crawling.
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
