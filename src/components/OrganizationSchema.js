import { SITE_URL, PRACTICE_NAME, FACEBOOK_URL, locations } from '@/data/locations';

/**
 * Organization JSON-LD for the homepage. Ties both offices to one business by
 * referencing the `@id` that each location page's MedicalClinic schema defines,
 * so search engines read them as two departments of one practice rather than
 * two unrelated clinics.
 */
export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    '@id': `${SITE_URL}/#organization`,
    name: PRACTICE_NAME,
    url: SITE_URL,
    medicalSpecialty: 'Psychiatric',
    description:
      'Psychiatric medication management and mental health care with offices in Boise and Meridian, Idaho.',
    foundingDate: '2023',
    sameAs: [FACEBOOK_URL],
    department: locations.map((location) => ({
      '@type': 'MedicalClinic',
      '@id': `${SITE_URL}/${location.slug}#clinic`,
      name: location.listingName,
      url: `${SITE_URL}/${location.slug}`,
      telephone: location.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: location.street,
        addressLocality: location.addressLocality,
        addressRegion: location.addressRegion,
        postalCode: location.postalCode,
        addressCountry: 'US',
      },
      sameAs: [location.googleBusinessProfile],
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
