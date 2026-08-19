import { SITE_URL } from '@/data/locations';

// Required by output: 'export' so this route is emitted as a static file at build time.
export const dynamic = 'force-static';

/**
 * Crawlers that read the site to answer questions or to train on. They are
 * already covered by the `*` rule below; naming them is a deliberate, readable
 * statement of policy so nobody has to guess it later.
 *
 * This practice wants to be found. For a local clinic, being citable when
 * someone asks an assistant "psychiatrist near me in Meridian" is free
 * visibility, and it is the point of publishing /llms.txt alongside this file.
 */
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'Bingbot',
  'meta-externalagent',
];

/**
 * Generates robots.txt at build time.
 *
 * A structured summary of the practice for AI consumers lives at /llms.txt.
 * robots.txt has no standard directive for pointing at it, and Next.js's
 * robots() return shape does not allow arbitrary lines, so that file is found
 * by convention rather than being announced here.
 *
 * /our-providers is intentionally NOT disallowed. It carries a `noindex,
 * follow` meta tag, and a crawler has to be able to fetch the page to see that
 * tag. Blocking it here would leave the old URL indexed indefinitely and stop
 * link equity flowing on to the two office pages.
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
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: '/',
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    /* The host directive takes a bare hostname, not a URL with a scheme. */
    host: new URL(SITE_URL).host,
  };
}
