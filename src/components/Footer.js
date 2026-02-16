import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" data-aos="fade-up">
      <div className="footer-logo-container">
        <img src="/images/rectangle-logo.jpg" alt="Awakenings Mental Health Logo" />
      </div>
      <div className="footer-text-content">
        <p>&copy; {currentYear} Awakenings Mental Health</p>
        <p>
          Questions?{' '}
          <a href="mailto:admin@awakeningsmentalhealth.com">admin@awakeningsmentalhealth.com</a>{' '}
          <a href="tel:2082950297">(208) 295-0297</a>
        </p>
        <p>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
}
