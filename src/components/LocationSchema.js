import {
  SITE_URL,
  OFFICE_HOURS,
  FACEBOOK_URL,
  formatAddress,
} from '@/data/locations';

/**
 * Emits MedicalClinic JSON-LD for a single office.
 *
 * This is what ties the page to its Google Business Profile: the `sameAs` array
 * points at the profile, and `@id` gives the clinic a stable identity that the
 * homepage Organization schema references as a department.
 *
 * `areaServed` is deliberately a single city per office. Keeping the two service
 * areas disjoint stops the Boise and Meridian pages from competing with each
 * other for the same local searches.
 */
export default function LocationSchema({ location }) {
  const pageUrl = `${SITE_URL}/${location.slug}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': `${pageUrl}#clinic`,
    name: location.listingName,
    url: pageUrl,
    telephone: location.phone,
    medicalSpecialty: 'Psychiatric',
    description: `Psychiatric medication management in ${location.city}, Idaho, located ${location.neighborhood}. In person visits with ${location.provider.fullName}.`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.street,
      addressLocality: location.addressLocality,
      addressRegion: location.addressRegion,
      postalCode: location.postalCode,
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: location.city,
      containedInPlace: {
        '@type': 'State',
        name: 'Idaho',
      },
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: OFFICE_HOURS.schemaDays.map((day) => `https://schema.org/${day}`),
        opens: OFFICE_HOURS.opens,
        closes: OFFICE_HOURS.closes,
      },
    ],
    hasMap: location.googleBusinessProfile,
    sameAs: [location.googleBusinessProfile, ...location.citations, FACEBOOK_URL],
    parentOrganization: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Awakenings Mental Health',
      url: SITE_URL,
    },
    employee: {
      '@type': 'Person',
      name: location.provider.fullName,
      givenName: location.provider.name.split(' ')[0],
      familyName: location.provider.name.split(' ').slice(1).join(' '),
      jobTitle: location.provider.jobTitle,
      email: location.provider.email,
      telephone: location.phone,
      sameAs: [location.provider.psychologyToday],
      worksFor: {
        '@id': `${pageUrl}#clinic`,
      },
      workLocation: {
        '@type': 'Place',
        name: location.listingName,
        address: formatAddress(location),
      },
      knowsAbout: location.provider.specialties,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
