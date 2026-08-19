# Awakenings Mental Health

Website for Awakenings Mental Health, a psychiatric medication management practice with
offices in Boise and Meridian, Idaho.

Built with Next.js 16 (App Router) and React 19, and published as a fully static site.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # static export into out/
```

`next.config.mjs` sets `output: 'export'`, so `npm run build` writes a complete static
site to `out/`. There is no Node server at runtime: every route, including
`sitemap.xml` and `robots.txt`, is a file on disk.

Because of that, two constraints apply:

- Image optimization is off (`images.unoptimized`), which is why pages use plain `<img>`
  rather than `next/image`.
- There are **no server-side redirects.** A retired URL has to be handled with a real
  page (see `/our-providers` below), not a 301.

## Editing content facts

**Content facts live in `src/data/`, never inline in a component.**

- **`src/data/locations.js`** — office addresses, phones, hours, providers, accepted
  insurances, and the booking links. Feeds the location pages, the homepage, the footer,
  the sitemap, `llms.txt`, and the JSON-LD structured data.
- **`src/data/articles.js`** — articles (slug, title, blurb, published date) and the
  downloadable patient handouts. Feeds the sitemap and `llms.txt`.

Changing a value in one of these updates it everywhere at once. Do not type an address,
phone number, set of hours, or article URL directly into a component: search engines
cross-check the site's name/address/phone against each Google Business Profile, and a
stale copy left behind in one component is exactly how those fall out of sync.

Adding an article means adding an entry to `src/data/articles.js`; it then appears in
`sitemap.xml` and `llms.txt` automatically.

## Routes

| Route | Source | Notes |
|---|---|---|
| `/` | `src/app/page.js` | Hero, services, testimonials, both locations, insurance, booking |
| `/boise-office` | `src/app/boise-office/page.js` | Boise office and Heidi Posey, PA-C |
| `/meridian-office` | `src/app/meridian-office/page.js` | Meridian office and Talia Sierra, PA-C, DMSc |
| `/articles` | `src/app/articles/page.js` | Article hub and PDF resources |
| `/articles/*` | `src/app/articles/*/page.js` | Individual articles |
| `/privacy-policy` | `src/app/privacy-policy/page.js` | |
| `/our-providers` | `src/app/our-providers/page.js` | Retired. See below. |
| `/sitemap.xml` | `src/app/sitemap.js` | Generated at build |
| `/robots.txt` | `src/app/robots.js` | Generated at build. Explicitly allows AI crawlers |
| `/llms.txt` | `src/app/llms.txt/route.js` | Generated at build. See below |

Both location route files are thin: they export page metadata and render the shared
`LocationPage` component with their own entry from `src/data/locations.js`.

### About `/our-providers`

Provider profiles used to live on a combined `/our-providers` page. They now live on the
office page where each provider actually sees patients, so that each page targets one
city and one provider rather than diluting both.

The old route still exists as a signpost linking to the two office pages, so existing
bookmarks and inbound links do not dead-end. It carries `robots: { index: false, follow:
true }`, which keeps it out of search results while still passing link equity to the
office pages. It is intentionally **not** blocked in `robots.txt` — a crawler has to be
able to fetch the page to see the `noindex`.

## Structured data

Each location page emits `MedicalClinic` JSON-LD via `src/components/LocationSchema.js`,
including the office address, hours, `areaServed` (one city per office, so the two pages
do not compete), the provider as an `employee`, and `sameAs` pointing at that office's
Google Business Profile.

The homepage emits `MedicalOrganization` JSON-LD via
`src/components/OrganizationSchema.js`, which references both clinics by `@id` as
departments so the two offices read as one practice.

After changing any of it, paste a built page's JSON-LD into the
[Google Rich Results Test](https://search.google.com/test/rich-results) before shipping.

## llms.txt

`/llms.txt` is a plain-text summary of the practice aimed at AI assistants, following the
[llms.txt convention](https://llmstxt.org/). It inlines the facts people actually ask
assistants about — both offices' addresses, phones and hours, who works where, insurances,
and how to book — so a model can answer without fetching more pages.

It is generated from `src/data/locations.js` and `src/data/articles.js` by
`src/app/llms.txt/route.js`. **Do not hand-write facts into it.** If it drifts from the
pages, assistants reading it will confidently repeat whichever version is stale.

`robots.txt` names the AI crawlers explicitly and allows them. Being citable when someone
asks an assistant "psychiatrist near me in Meridian" is the point of publishing the file.

## Project layout

```
src/
  app/            routes, globals.css, sitemap.js, robots.js
  components/     Header, Footer, LocationPage, ProviderProfile,
                  LocationSchema, OrganizationSchema, Separator, ...
  data/
    locations.js  offices, providers, hours, insurances
    articles.js   articles + downloadable resources
public/
  images/  pdfs/  favicon.ico
```

`DESIGN-AUDIT.md` records an earlier design and UX review; resolved findings are marked
inline.
