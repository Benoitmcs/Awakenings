import LocationPage from '@/components/LocationPage';
import { getLocation } from '@/data/locations';

const location = getLocation('boise-office');

export const metadata = {
  title: 'Psychiatric Medication Management in Boise, ID | Awakenings',
  description:
    'Psychiatric medication management in Boise, Idaho, just off State Street. In person and telehealth visits with Heidi Posey, PA-C. Mon to Fri, 8am to 4pm. Call (208) 295-0297.',
  alternates: {
    canonical: '/boise-office',
  },
  openGraph: {
    title: 'Psychiatric Medication Management in Boise, ID | Awakenings',
    description:
      'Psychiatric care and medication management at our Boise office with Heidi Posey, PA-C.',
    url: '/boise-office',
    type: 'website',
  },
};

export default function BoiseOffice() {
  return <LocationPage location={location} />;
}
