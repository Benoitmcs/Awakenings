/**
 * Single source of truth for office and provider information.
 *
 * Every address, phone number, and set of hours on the site is read from here:
 * the location pages, the homepage locations section, the footer, the sitemap,
 * and the JSON-LD structured data. Editing an address in one place keeps the
 * site's NAP (Name / Address / Phone) consistent everywhere, which is what
 * search engines check when matching the site to a Google Business Profile.
 *
 * If an office detail changes, change it HERE and nowhere else.
 */

export const SITE_URL = 'https://www.awakeningsmentalhealth.com';

export const PRACTICE_NAME = 'Awakenings Mental Health';

/** Shared across both offices. */
export const FACEBOOK_URL =
  'https://www.facebook.com/people/Awakenings-Mental-Health/61573782132122/';

export const PATIENT_PORTAL_URL = 'https://www.therapyportal.com/p/awakenings83703/';

export const INTEREST_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeeYABYxDoscWL3jH-SNU51X0hgomcb0bEqshRIUnCRg7aSgA/viewform';

/** Mon-Fri 8:00am to 4:00pm, closed weekends. Identical at both offices. */
export const OFFICE_HOURS = {
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  schemaDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  opens: '08:00',
  closes: '16:00',
  display: 'Monday to Friday, 8:00am to 4:00pm',
  closedDisplay: 'Closed Saturday and Sunday',
};

/**
 * Builds the Google Maps place-embed URL for an address. This is the plain
 * single-place embed, which has no personal-info bar, so pages using it do not
 * need the `.map-cover` overlay that the homepage My Maps embed requires.
 */
function mapEmbedUrl(street, city, state, zip) {
  const query = encodeURIComponent(`${street}, ${city}, ${state} ${zip}`);
  return `https://maps.google.com/maps?q=${query}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
}

export const locations = [
  {
    slug: 'boise-office',
    city: 'Boise',
    label: 'Boise Office',
    /** Distinguishes the two listings for search engines. */
    listingName: `${PRACTICE_NAME} - Boise`,
    street: '6126 W State St #104',
    addressLocality: 'Boise',
    addressRegion: 'ID',
    postalCode: '83703',
    phone: '(208) 295-0297',
    phoneHref: 'tel:2082950297',
    /** Google Business Profile for this office. */
    googleBusinessProfile: 'https://maps.app.goo.gl/vzv4VpVGnR4QaTZF6',
    /** Third-party citation corroborating this listing. */
    citations: ['https://www.saintalphonsus.org/location/awakenings-mental-health'],
    mapEmbed: mapEmbedUrl('6126 W State St #104', 'Boise', 'ID', '83703'),
    neighborhood: 'just off State Street in northwest Boise',
    provider: {
      name: 'Heidi Posey',
      credentials: 'PA-C',
      fullName: 'Heidi Posey, PA-C',
      jobTitle: 'Psychiatric Physician Assistant',
      photo: '/images/heidi-mugshot.png',
      email: 'heidi@awakeningsmentalhealth.com',
      psychologyToday:
        'https://www.psychologytoday.com/us/psychiatrists/heidi-posey-boise-id/1233174',
      psychologyTodayProfile: 'https://www.psychologytoday.com/profile/1233174',
      psychologyTodayId: '1233174',
      bio: [
        'Need to be heard? That is what I am here for. To listen and to explore what hasn’t worked, and what has. Regardless of diagnosis, I want to help you with whatever symptoms are affecting you the most, and are your priority to address.',
        'I am well versed in psychopharmacology and want my patients to understand and feel comfortable with all our options, from prescription medications, supplements to brief psychotherapy; your situation is unique and your needs are too. Whether it’s your first time reaching out, or if you want someone new to explore diagnosis and medications, it can be intimidating. Lets take those next steps together today.',
      ],
      specialties: [
        'Psychopharmacology',
        'Medication Management',
        'Brief Psychotherapy',
        'Holistic Approaches',
        'Patient Education',
      ],
      bookingUrl: INTEREST_FORM_URL,
      /** No telehealth join link exists for this provider yet. */
      telehealthUrl: null,
    },
  },
  {
    slug: 'meridian-office',
    city: 'Meridian',
    label: 'Meridian Office',
    listingName: `${PRACTICE_NAME} - Meridian`,
    street: '1510 W Ustick Rd #110',
    addressLocality: 'Meridian',
    addressRegion: 'ID',
    postalCode: '83646',
    phone: '(208) 295-0297',
    phoneHref: 'tel:2082950297',
    googleBusinessProfile: 'https://maps.app.goo.gl/bjxVLqnD5TSt1DTs6',
    citations: ['https://www.saintalphonsus.org/location/awakenings-mental-health-ustick'],
    mapEmbed: mapEmbedUrl('1510 W Ustick Rd #110', 'Meridian', 'ID', '83646'),
    neighborhood: 'on West Ustick Road in Meridian',
    provider: {
      name: 'Talia Sierra',
      credentials: 'PA-C, DMSc',
      fullName: 'Talia Sierra, PA-C, DMSc',
      jobTitle: 'Psychiatric Physician Assistant',
      photo: '/images/talia-mugshot.png',
      email: 'talia@awakeningsmentalhealth.com',
      psychologyToday:
        'https://www.psychologytoday.com/us/psychiatrists/talia-sierra-meridian-id/1226261',
      psychologyTodayProfile: 'https://www.psychologytoday.com/profile/1226261',
      psychologyTodayId: '1226261',
      bio: [
        'Welcome! Are you ready to embark on your journey to well-being? I provide compassionate, personalized care tailored to meet your unique needs. Mental health can profoundly impact your well-being and I want to help you develop your individual path to healing.',
        'As a doctorally trained PA I specialize in understanding the unique nuances of each individual’s mental health journey and address concerns such as depression, anxiety, ADHD, bipolar disorder, PTSD, and more. I fully understand the impact mental health disorders can have on all aspects of your life, so reach out and let’s start a conversation!',
      ],
      specialties: [
        'Depression',
        'Anxiety Disorders',
        'ADHD Management',
        'Bipolar Disorder',
        'PTSD',
        'Personalized Care',
      ],
      bookingUrl: INTEREST_FORM_URL,
      telehealthUrl: 'https://sessions.psychologytoday.com/talia-sierra',
    },
  },
];

/** Look up one office by its URL slug. */
export function getLocation(slug) {
  return locations.find((location) => location.slug === slug);
}

/** The other office, for cross-linking between location pages. */
export function getOtherLocation(slug) {
  return locations.find((location) => location.slug !== slug);
}

/** "6126 W State St #104, Boise, ID 83703" */
export function formatAddress(location) {
  return `${location.street}, ${location.addressLocality}, ${location.addressRegion} ${location.postalCode}`;
}
