import Separator from '@/components/Separator';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'Our Providers - Awakenings Mental Health',
  description: 'Meet our dedicated psychiatric mental health PA-Cs at Awakenings Mental Health in Boise, Idaho.',
};

export default function OurProviders() {
  return (
    <>
      <div className="content-capsule">
        <h2 className="provider-section-title" data-aos="fade-up">Meet Our Providers</h2>
        <p className="page-intro" data-aos="fade-up" data-aos-delay="100" style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.1rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          At Awakenings Mental Health, our dedicated team of psychiatric mental health PA-C&apos;s are committed to providing compassionate and comprehensive care. We believe in a collaborative approach, working closely with you to understand your unique needs and develop a personalized treatment plan. Get to know our skilled providers below.
        </p>

        <section className="provider-profile" data-aos="fade-up" data-aos-delay="200">
          <div className="provider-photo-container">
            <img src="/images/talia-mugshot.png" alt="Talia Sierra, PA-C, DMSc" className="provider-photo" />
          </div>
          <div className="provider-info">
            <h3>Talia Sierra PA-C, DMSc</h3>
            <div className="content-capsule">
              <div className="provider-contact-info">
                <p><strong>Call or Text:</strong> <a href="tel:2082950297">(208) 295-0297</a></p>
                <p><strong>Email:</strong> <a href="mailto:talia@awakeningsmentalhealth.com">talia@awakeningsmentalhealth.com</a></p>
                <p><strong>More About Me:</strong> <a href="https://www.psychologytoday.com/us/psychiatrists/talia-sierra-boise-id/1226261" target="_blank" rel="noopener noreferrer">Psychology Today</a></p>
              </div>
            </div>
            <p>Welcome! Are you ready to embark on your journey to well-being? I provide compassionate, personalized care tailored to meet your unique needs. Mental health can profoundly impact your well-being and I want to help you develop your individual path to healing.</p>
            <p>As a doctorally trained PA I specialize in understanding the unique nuances of each individual&apos;s mental health journey and address concerns such as depression, anxiety, ADHD, bipolar disorder, PTSD, and more. I fully understand the impact mental health disorders can have on all aspects of your life, so reach out and let&apos;s start a conversation!</p>

            <div className="provider-specialties">
              <h4>Specialties:</h4>
              <ul>
                <li>Depression</li>
                <li>Anxiety Disorders</li>
                <li>ADHD Management</li>
                <li>Bipolar Disorder</li>
                <li>PTSD</li>
                <li>Personalized Care</li>
              </ul>
            </div>

            <div className="psychology-today-embed-wrapper">
              <a href="https://www.psychologytoday.com/profile/1226261" className="sx-verified-seal"></a>
            </div>
            <div className="provider-actions">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeeYABYxDoscWL3jH-SNU51X0hgomcb0bEqshRIUnCRg7aSgA/viewform" className="btn-provider-action" target="_blank" rel="noopener noreferrer">Book Appointment with Talia</a>
              <a href="https://sessions.psychologytoday.com/talia-sierra" className="btn-provider-action" target="_blank" rel="noopener noreferrer">Join Your Appointment</a>
              <Link href="/privacy-policy" className="btn-provider-secondary">Privacy Policy</Link>
            </div>
          </div>
        </section>

        <section className="provider-profile" data-aos="fade-up" data-aos-delay="100">
          <div className="provider-photo-container">
            <img src="/images/heidi-mugshot.png" alt="Heidi Posey, PA-C" className="provider-photo" />
          </div>
          <div className="provider-info">
            <h3>Heidi Posey, PA-C</h3>
            <div className="content-capsule">
              <div className="provider-contact-info">
                <p><strong>Call or Text:</strong> <a href="tel:2082950297">(208) 295-0297</a></p>
                <p><strong>Email:</strong> <a href="mailto:heidi@awakeningsmentalhealth.com">heidi@awakeningsmentalhealth.com</a></p>
                <p><strong>More About Me:</strong> <a href="https://www.psychologytoday.com/us/psychiatrists/heidi-posey-boise-id/1233174" target="_blank" rel="noopener noreferrer">Psychology Today</a></p>
              </div>
            </div>
            <p>Need to be heard? That is what I am here for. To listen and to explore what hasn&apos;t worked, and what has. Regardless of diagnosis, I want to help you with whatever symptoms are affecting you the most, and are your priority to address.</p>
            <p>I am well versed in psychopharmacology and want my patients to understand and feel comfortable with all our options, from prescription medications, supplements to brief psychotherapy; your situation is unique and your needs are too. Whether it&apos;s your first time reaching out, or if you want someone new to explore diagnosis and medications, it can be intimidating. Lets take those next steps together today.</p>

            <div className="provider-specialties">
              <h4>Specialties:</h4>
              <ul>
                <li>Psychopharmacology</li>
                <li>Medication Management</li>
                <li>Brief Psychotherapy</li>
                <li>Holistic Approaches</li>
                <li>Patient Education</li>
              </ul>
            </div>

            <div className="psychology-today-embed-wrapper">
              <a href="https://www.psychologytoday.com/profile/1233174" className="sx-verified-seal"></a>
            </div>
            <div className="provider-actions">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeeYABYxDoscWL3jH-SNU51X0hgomcb0bEqshRIUnCRg7aSgA/viewform" className="btn-provider-action" target="_blank" rel="noopener noreferrer">Book Appointment with Heidi</a>
              <Link href="/privacy-policy" className="btn-provider-secondary">Privacy Policy</Link>
            </div>
          </div>
        </section>
      </div>

      <Separator variant="bottom" />

      {/* Psychology Today Verification Scripts */}
      <Script
        src="https://member.psychologytoday.com/verified-seal.js"
        data-badge="13"
        data-id="1226261"
        strategy="lazyOnload"
      />
      <Script
        src="https://member.psychologytoday.com/verified-seal.js"
        data-badge="13"
        data-id="1233174"
        strategy="lazyOnload"
      />
    </>
  );
}
