import Link from 'next/link';
import Separator from '@/components/Separator';
import ProviderProfile from '@/components/ProviderProfile';
import LocationSchema from '@/components/LocationSchema';
import {
  OFFICE_HOURS,
  PATIENT_PORTAL_URL,
  getOtherLocation,
  formatAddress,
} from '@/data/locations';

/**
 * Shared body for both office pages. The two route files pass in their location
 * and differ only in data, so the markup lives here once.
 */
export default function LocationPage({ location }) {
  const other = getOtherLocation(location.slug);
  const { provider } = location;
  const firstName = provider.name.split(' ')[0];

  return (
    <>
      <Separator variant="top" />

      <div className="content-capsule" data-aos="fade-up">
        <h1 className="page-title">
          Psychiatric Medication Management in {location.city}, Idaho
        </h1>

        <p className="page-intro location-intro">
          Awakenings Mental Health provides psychiatric evaluation and medication
          management {location.neighborhood}. In person appointments at this office are
          with {provider.fullName}, who treats anxiety, depression, ADHD, PTSD, bipolar
          disorder, and more.
        </p>

        {/* Name, address, phone, hours. Everything here comes from src/data/locations.js */}
        <div className="location-details" data-aos="fade-up" data-aos-delay="100">
          <div className="location-detail-block">
            <h2 className="location-detail-heading">Our {location.city} Office</h2>
            <address className="location-address">
              {location.street}
              <br />
              {location.addressLocality}, {location.addressRegion} {location.postalCode}
            </address>
            <p className="location-phone">
              <a href={location.phoneHref}>{location.phone}</a>
            </p>
          </div>

          <div className="location-detail-block">
            <h2 className="location-detail-heading">Office Hours</h2>
            <p className="location-hours">{OFFICE_HOURS.display}</p>
            <p className="location-hours location-hours-closed">
              {OFFICE_HOURS.closedDisplay}
            </p>
          </div>
        </div>

        <div className="location-actions" data-aos="fade-up" data-aos-delay="150">
          <a
            href={location.googleBusinessProfile}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
          <a href={location.phoneHref} className="btn secondary">
            Call {location.phone}
          </a>
          <a
            href={PATIENT_PORTAL_URL}
            className="btn secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Patient Portal
          </a>
        </div>

        <div className="map-wrapper" data-aos="fade-up" data-aos-delay="200">
          <iframe
            className="skeleton lazy-embed map-iframe-rounded"
            src={location.mapEmbed}
            title={`Map of Awakenings Mental Health in ${location.city}, Idaho`}
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>

      {/* Provider subsection: this office's provider, on this office's page. */}
      <div className="content-capsule" data-aos="fade-up">
        <h2>
          Meet {provider.fullName} at our {location.city} Office
        </h2>
        <p className="page-intro">
          {firstName} sees patients in person at our {location.city} office at{' '}
          {formatAddress(location)}, and is also available for telehealth visits.
        </p>

        <ProviderProfile
          provider={provider}
          phone={location.phone}
          phoneHref={location.phoneHref}
        />

        <p className="location-cross-link">
          Looking for {other.provider.name.split(' ')[0]} instead? In person visits with{' '}
          {other.provider.fullName} are held at our{' '}
          <Link href={`/${other.slug}`}>{other.city} office</Link>.
        </p>
      </div>

      <Separator variant="bottom" />

      <LocationSchema location={location} />
    </>
  );
}
