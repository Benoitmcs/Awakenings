import TestimonialCarousel from '@/components/TestimonialCarousel';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true"></div>
        <div className="hero-content">
          <h1 className="hero-title">Your Journey to Wellness Starts Here</h1>
          <p className="hero-subtitle">
            Personalized psychiatric care in Boise, Idaho. We specialize in treating anxiety, depression, ADHD, PTSD, and more with compassion and expertise.
          </p>
          <div className="hero-cta">
            <a href="https://www.therapyportal.com/p/awakenings83703/" className="btn" target="_blank" rel="noopener noreferrer">
              Patient Portal
            </a>
            <Link href="/our-providers" className="btn secondary">
              Meet Our Providers
            </Link>
          </div>
          <div className="hero-badges">
            <span className="badge">Est. 2023</span>
            <span className="badge">In-Person & Telehealth</span>
            <span className="badge">Boise, ID</span>
          </div>
        </div>
      </section>

      <div style={{ paddingTop: '4rem' }}>
        <div className="content-capsule services-wrapper">
          <div className="services-bg-arrow" aria-hidden="true"></div>
          <section id="services" data-aos="fade-up" style={{ textAlign: 'center' }}>
            <h2>Medication Management</h2>
            <div className="content" style={{ textAlign: 'center' }}>
              <p className="page-intro" data-aos="fade-up">
                Awakenings started in 2023 with the goal of providing better service to our patients than we could at big generic clinics. Located right off of state street, both of our providers are available for in person or for tele-health visits. Our providers are both a little bit different in their styles, but whatever your needs may be, our goal is to always provide you with the highest quality care. We specialize in treating a large variety of mental health concerns from anxiety and depression to ADHD, PTSD, and more.
              </p>
            </div>
          </section>
        </div>
      </div>

      <div style={{ padding: '4rem 0' }}>
        <TestimonialCarousel />
      </div>

      <section id="location" data-aos="fade-right">
        <div className="content-capsule">
          <h2>Our Locations</h2>
          <p className="locations-blurb">
            We now have two convenient locations to serve you! Your appointment location will depend on your provider — in-person visits with Heidi are held at our Boise office, while in-person visits with Talia are held at our new Meridian location.
          </p>
          <div className="locations-grid">
            <div className="location-card">
              <h3>Boise</h3>
              <address>
                6126 W State St #104<br />
                Boise, ID 83703
              </address>
            </div>
            <div className="location-card">
              <h3>Meridian <span className="new-location-badge">New</span></h3>
              <address>
                1510 W. Ustick Rd. #110<br />
                Meridian, Idaho 83646
              </address>
            </div>
          </div>
          <iframe
            className="skeleton lazy-embed map-iframe-rounded"
            src="https://www.google.com/maps/d/u/5/embed?mid=1rGi6IQQv3jW2n45mNB9oHQ-yCnKHYkE&ehbc=2E312F"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </section>

      <section id="insurance" style={{ paddingTop: '4rem' }} data-aos="fade-left">
        <div className="accordion card">
          <button className="acc-header">What insurances do you accept?</button>
          <div className="acc-body">
            <p>
              We accept most major private insurances, however there are some exceptions. We can work out of network, but you will have to make the insurance claim yourself, so check with your insurance to make sure you will be covered.
              Blue Cross, Select Health, Pacific Source, Saint Luke&apos;s Health Plan, Mountain Health Co-op, Anthem Blue Cross, Blue Shield, Regence, Aetna, Cash Pay
            </p>
          </div>
          <button className="acc-header">How do I verify coverage?</button>
          <div className="acc-body">
            <div className="verify-coverage-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
              <p style={{ margin: 0 }}>Contact our office:</p>
              <a href="tel:2082950297" className="provider-contact">(208)295-0297</a>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" style={{ paddingTop: '4rem' }} data-aos="zoom-in-up">
        <div className="content-capsule" style={{ textAlign: 'center' }}>
          <h2>Book an Appointment</h2>
          <p className="page-intro" data-aos="fade-up" data-aos-delay="100">
            Each of our wonderful providers manage their patients themselves to ensure that you can be seen as soon as possible. To schedule an appointment, give us a call and we will try to fit you in to be seen as soon as possible, typically within two weeks of your initial call. If you want to be seen by a specific provider, just let us know and we will make sure you get your appointment scheduled with them. Alternatively, you can fill out the interest form below and we will contact you within two business days. Before your first appointment, we&apos;ll have you fill out some basic paperwork to make sure we are prepared to give you the best possible care as a part of our integrative medication management experience.
          </p>
          <div className="booking-button-container">
            <a href="https://www.therapyportal.com/p/awakenings83703/" className="btn" target="_blank" rel="noopener noreferrer">
              Patient Portal
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeeYABYxDoscWL3jH-SNU51X0hgomcb0bEqshRIUnCRg7aSgA/viewform" className="btn secondary" target="_blank" rel="noopener noreferrer">
              Appointment Interest Form
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
