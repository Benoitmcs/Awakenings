import Link from 'next/link';
import Separator from '@/components/Separator';
import ExpandableArticles from './ExpandableArticles';

export const metadata = {
  title: 'Articles - Awakenings Mental Health',
  description: 'Resources and articles on mental health, medication management, and wellness from Awakenings Mental Health.',
};

export default function Articles() {
  return (
    <>
      <Separator variant="top" />

      <section className="content-capsule" data-aos="fade-up">
        <h2 data-aos="fade-up">Resource and Article Hub</h2>
        <p data-aos="fade-up" data-aos-delay="100" style={{ textAlign: 'center' }}>
          Every month, Awakenings publishes a blog post style article on our website that relates to how Awakenings likes to practice psychiatry, and what makes us really unique. Each article is written with patients in mind, and typically includes some insight into how/when Psychiatry can be helpful.
        </p>
        <p className="social-cta" data-aos="fade-up" data-aos-delay="150" style={{ textAlign: 'center' }}>
          Follow us on Facebook for monthly post reminders!
          <br />
          <a
            href="https://www.facebook.com/people/Awakenings-Mental-Health/61573782132122/?rdid=d4YskjCFnALTwVeW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1K3tgNywkV%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-social"
            aria-label="Follow us on Facebook"
          >
            <svg viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
            </svg>
            Follow on Facebook
          </a>
        </p>

        <div className="grid-3" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <div className="card" data-aos="zoom-in-up" data-aos-delay="200" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '420px' }}>
            <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
              <img src="/images/light-box.webp" alt="Light therapy box" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <header>Let There Be Light: How Light Box Therapy Can Lift Winter Moods</header>
            <div className="content" style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <p data-aos="fade-up" data-aos-delay="100" style={{ textAlign: 'center' }}>
                As the days get shorter and the mornings darker, many people experience seasonal affective disorder. Learn how light therapy can help regulate your mood and energy.
              </p>
              <Link href="/articles/light-therapy" className="btn">Read More</Link>
            </div>
          </div>

          <div className="card" data-aos="zoom-in-up" data-aos-delay="300" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '420px' }}>
            <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
              <img src="/images/pills-stock-photo.png" alt="Pills and medication" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <header>Can Good Psychiatry Really Help You Take Less Medication?</header>
            <div className="content" style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <p data-aos="fade-up" data-aos-delay="100" style={{ textAlign: 'center' }}>
                Psychiatry is often associated with overmedication. Explore how/when medication can be reduced, and how lifestyle changes can sometimes reduce the need for medication.
              </p>
              <Link href="/articles/reducing-meds" className="btn">Read More</Link>
            </div>
          </div>
        </div>

        <ExpandableArticles />

        <div className="card" data-aos="zoom-in-up" data-aos-delay="300" style={{ textAlign: 'center' }}>
          <h2 data-aos="fade-up">Resource PDF Downloads</h2>
          <p data-aos="fade-up" data-aos-delay="100" style={{ textAlign: 'center' }}>
            Awakenings occasionally releases downloadable factsheets for supplements we commonly suggest for our patients. These are a good source of general information, but please consult with your provider before making any changes in medication. Supplement information is not intended to be a replacement for medication.
          </p>
          <a href="/pdfs/l-methylfolate.pdf" download><span>PDF Download</span><span>L-Methylfolate</span></a>
          <a href="/pdfs/omega3s.pdf" download><span>PDF Download</span><span>Omega3</span></a>
          <a href="/pdfs/Square Bright Light Therapy Information Sheet.pdf" download><span>PDF Download</span><span>Light Therapy</span></a>
        </div>
        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-dark)' }} data-aos="fade-up" data-aos-delay="400"> Disclaimer: None of the information in any of these articles should be considered as medical advice. If you have an emergency, please call 911. </p>
      </section>

      <Separator variant="bottom" />
    </>
  );
}
