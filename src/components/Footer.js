import Link from 'next/link';
import { locations, OFFICE_HOURS } from '@/data/locations';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" data-aos="fade-up">
      <div className="footer-logo-container">
        <img src="/images/rectangle-logo.jpg" alt="Awakenings Mental Health Logo" />
      </div>

      {/*
        Name, address, and phone repeated on every page. Consistent NAP across
        the site is one of the signals search engines use to match the site to
        each Google Business Profile, so this reads from src/data/locations.js
        rather than being typed out again.
      */}
      <div className="footer-locations">
        {locations.map((location) => (
          <div className="footer-location" key={location.slug}>
            <h3>
              <Link href={`/${location.slug}`}>{location.label}</Link>
            </h3>
            <address>
              {location.street}
              <br />
              {location.addressLocality}, {location.addressRegion} {location.postalCode}
              <br />
              <a href={location.phoneHref}>{location.phone}</a>
            </address>
          </div>
        ))}
      </div>

      <p className="footer-hours">{OFFICE_HOURS.display}</p>

      <div className="footer-text-content">
        <p>&copy; {currentYear} Awakenings Mental Health</p>
        <p>
          Questions?{' '}
          <a href="mailto:admin@awakeningsmentalhealth.com">admin@awakeningsmentalhealth.com</a>
        </p>
        <p>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
}
