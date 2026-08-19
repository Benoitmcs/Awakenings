/**
 * Single source of truth for articles and downloadable resources.
 *
 * Mirrors the pattern in src/data/locations.js: content facts live here, not
 * inline in a component, so the sitemap and llms.txt cannot drift out of sync
 * with what the site actually publishes.
 *
 * Adding an article? Add it here and it appears in the sitemap and llms.txt
 * automatically.
 *
 * `published` dates are best-effort, recovered from the git history of each
 * article's original file, since nothing in the codebase recorded a publish
 * date. Correct them here if any are wrong.
 */

export const articles = [
  {
    slug: 'light-therapy',
    title: 'Let There Be Light: How Light Box Therapy Can Lift Winter Moods',
    shortTitle: 'Light Box Therapy for Winter Blues',
    blurb:
      'How light therapy can help regulate mood and energy through the darker months, and what the evidence says about seasonal affective disorder.',
    image: '/images/light-box.webp',
    published: '2025-11-26',
    featured: true,
  },
  {
    slug: 'reducing-meds',
    title: 'Can Good Psychiatry Really Help You Take Less Medication?',
    shortTitle: 'Taking Less Medication',
    blurb:
      'How careful psychiatric care and lifestyle change can sometimes reduce the need for medication, and when de-prescribing makes sense.',
    image: '/images/pills-stock-photo.png',
    published: '2025-06-11',
    featured: true,
  },
  {
    slug: 'screen-time',
    title: 'Navigating Screen Time: How Digital Habits Shape Mental Health',
    shortTitle: 'Screen Time and Mental Health',
    blurb:
      'How digital habits shape mental health, and practical ways to build a healthier relationship with screens.',
    image: '/images/screen.jpg',
    published: '2025-06-12',
    featured: false,
  },
  {
    slug: 'exercise-nutrition',
    title: 'How Exercise and Nutrition Transform Psychiatry',
    shortTitle: 'Exercise and Nutrition',
    blurb:
      'How movement and mindful eating support psychiatric treatment and overall mental wellness.',
    image: '/images/food.png',
    published: '2025-06-11',
    featured: false,
  },
];

/**
 * Downloadable patient handouts.
 *
 * Only files actually linked from the site are listed. public/pdfs/brochure.pdf
 * is intentionally absent: nothing links to it, and submitting an orphaned file
 * to search engines invites it to rank for queries no page supports.
 */
export const resources = [
  {
    title: 'L-Methylfolate Information Sheet',
    path: '/pdfs/l-methylfolate.pdf',
  },
  {
    title: 'Omega-3s Information Sheet',
    path: '/pdfs/omega3s.pdf',
  },
  {
    title: 'Bright Light Therapy Information Sheet',
    path: '/pdfs/Square Bright Light Therapy Information Sheet.pdf',
  },
];

/** Newest first, by published date. */
export function articlesByDate() {
  return [...articles].sort((a, b) => b.published.localeCompare(a.published));
}
