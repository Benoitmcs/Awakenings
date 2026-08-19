import LocationPage from '@/components/LocationPage';
import { getLocation } from '@/data/locations';

const location = getLocation('meridian-office');

export const metadata = {
  title: 'Psychiatric Medication Management in Meridian, ID | Awakenings',
  description:
    'Psychiatric medication management in Meridian, Idaho, on West Ustick Road. In person and telehealth visits with Talia Sierra, PA-C, DMSc. Mon to Fri, 8am to 4pm. Call (208) 295-0297.',
  alternates: {
    canonical: '/meridian-office',
  },
  openGraph: {
    title: 'Psychiatric Medication Management in Meridian, ID | Awakenings',
    description:
      'Psychiatric care and medication management at our Meridian office with Talia Sierra, PA-C, DMSc.',
    url: '/meridian-office',
    type: 'website',
  },
};

export default function MeridianOffice() {
  return <LocationPage location={location} />;
}
