import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - Awakenings Mental Health',
  description: 'Privacy policy for Awakenings Mental Health. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="content-capsule privacy-policy" data-aos="fade-up">
      <h2>Privacy Policy</h2>
      <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--text-dark)', opacity: 0.7 }}>
        Last updated: February 2026
      </p>

      <h3>Introduction</h3>
      <p>
        Awakenings Mental Health (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
      </p>

      <h3>Information We Collect</h3>
      <p>We may collect the following types of information:</p>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
        <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when booking appointments or contacting us.</li>
        <li><strong>Health Information:</strong> Medical history and mental health information provided during the course of treatment, protected under HIPAA regulations.</li>
        <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring URLs, collected through Google Analytics.</li>
      </ul>

      <h3>How We Use Your Information</h3>
      <p>We use the information we collect to:</p>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
        <li>Provide, maintain, and improve our mental health services</li>
        <li>Schedule and manage appointments</li>
        <li>Communicate with you about your care and our services</li>
        <li>Comply with legal and regulatory requirements</li>
        <li>Analyze website usage to improve user experience</li>
      </ul>

      <h3>HIPAA Compliance</h3>
      <p>
        As a mental health care provider, we are subject to the Health Insurance Portability and Accountability Act (HIPAA). All protected health information (PHI) is handled in accordance with HIPAA privacy and security rules. Your health information will not be disclosed without your written authorization except as permitted or required by law.
      </p>

      <h3>Google Analytics</h3>
      <p>
        We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information such as how often users visit the site, what pages they visit, and what other sites they used prior to coming to our site. We use this information solely to improve our website. Google Analytics does not collect your name or other personally identifying information. You can opt out of Google Analytics by installing the{' '}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
          Google Analytics Opt-out Browser Add-on
        </a>.
      </p>

      <h3>Third-Party Services</h3>
      <p>
        We may use third-party services for appointment scheduling (TherapyPortal), forms (Google Forms), and provider verification (Psychology Today). These services have their own privacy policies, and we encourage you to review them.
      </p>

      <h3>Data Security</h3>
      <p>
        We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
      </p>

      <h3>Your Rights</h3>
      <p>You have the right to:</p>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
        <li>Access your personal and health information</li>
        <li>Request corrections to inaccurate information</li>
        <li>Request restrictions on certain uses of your information</li>
        <li>Receive a copy of your health records</li>
        <li>File a complaint if you believe your privacy rights have been violated</li>
      </ul>

      <h3>Contact Us</h3>
      <p>
        If you have questions about this Privacy Policy or our privacy practices, please contact us:
      </p>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8', listStyle: 'none' }}>
        <li><strong>Email:</strong> <a href="mailto:admin@awakeningsmentalhealth.com">admin@awakeningsmentalhealth.com</a></li>
        <li><strong>Phone:</strong> <a href="tel:2082950297">(208) 295-0297</a></li>
        <li><strong>Address:</strong> 6126 W State St #104, Boise, ID 83703</li>
      </ul>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link href="/" className="btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
