import Link from 'next/link';
import Separator from '@/components/Separator';
import { locations, formatAddress } from '@/data/locations';

/**
 * Signpost page. Provider profiles now live on the office page where each
 * provider sees patients, so this route exists only so that old bookmarks and
 * inbound links keep working.
 *
 * It is noindexed on purpose: if search engines indexed it, it would compete
 * with the location pages for the providers' own names. `follow` is kept so
 * link equity still passes through to the two office pages.
 */
export const metadata = {
  title: 'Our Providers - Awakenings Mental Health',
  description:
    'Provider information has moved. Find Heidi Posey, PA-C at our Boise office and Talia Sierra, PA-C, DMSc at our Meridian office.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function OurProviders() {
  return (
    <>
      <Separator variant="top" />

      <div className="content-capsule" data-aos="fade-up">
        <h1 className="page-title">Our Providers</h1>

        <p className="page-intro location-intro">
          Provider information now lives with the office where each provider sees
          patients, along with that location&apos;s address, hours, and directions.
          Choose the office you are visiting.
        </p>

        <div className="locations-grid">
          {locations.map((location) => (
            <div className="location-card" key={location.slug}>
              <h2>{location.label}</h2>
              <address className="location-address">{formatAddress(location)}</address>
              <p>
                In person visits with <strong>{location.provider.fullName}</strong>
              </p>
              <Link href={`/${location.slug}`} className="location-card-link">
                View {location.city} office and provider details
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Separator variant="bottom" />
    </>
  );
}
