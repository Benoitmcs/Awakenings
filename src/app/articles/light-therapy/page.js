import Separator from '@/components/Separator';

export const metadata = {
  title: 'Light Box Therapy for Winter Blues - Awakenings Mental Health',
  description: 'Learn how light therapy can help lift winter moods and manage seasonal affective disorder (SAD) through simple, evidence-based tools.',
  other: {
    articleOrder: '1',
  },
};

export default function LightTherapy() {
  return (
    <>
      <Separator variant="top" />

      <section className="content-capsule" data-aos="fade-up">
        <h2 data-aos="fade-up">Let There Be Light: How Light Box Therapy Can Lift Winter Moods</h2>
        <p style={{ textAlign: 'center', fontStyle: 'italic' }} data-aos="fade-up" data-aos-delay="100">
          Creating clarity and calm through simple, evidence-based tools.
        </p>

        <div data-aos="fade-up" data-aos-delay="200">
          <p>As the days get shorter and the mornings darker, it&apos;s common to feel our motivation, focus, and energy start to dip. You&apos;re not imagining it&mdash;our brains really do respond to changes in daylight. That&apos;s why many people experience what&apos;s called seasonal affective disorder (SAD), or the &ldquo;winter blues.&rdquo;</p>

          <p>At Awakenings Mental Health, we see this every year as our patients start to say things like:</p>

          <blockquote style={{ fontStyle: 'italic', borderLeft: '3px solid var(--accent)', paddingLeft: '1rem', margin: '1.5rem 0', color: 'var(--text-dark)' }}>
            &ldquo;I can&apos;t wake up in the morning no matter how early I go to bed.&rdquo;
            <br />
            &ldquo;I feel off&mdash;just low and sluggish once the daylight fades.&rdquo;
          </blockquote>

          <p>If that sounds familiar, you&apos;re not alone. But here&apos;s the good news: small, intentional changes&mdash;like using a light therapy box&mdash;can make a meaningful difference.</p>

          <div data-aos="fade-up" data-aos-delay="250" style={{ textAlign: 'center', margin: '1.5rem 0' }}>
            <img src="/images/light-box2.webp" alt="Light therapy box on desk" style={{ maxWidth: '60%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
          </div>

          <h3>How Therapy Works</h3>
          <p>Light therapy uses a specially designed box that emits bright light (usually around 10,000 lux) to mimic natural sunlight. Sitting near one for about 20&ndash;30 minutes each morning can help regulate your body&apos;s internal clock (circadian rhythm) and support the release of mood-boosting neurotransmitters like serotonin and dopamine.</p>

          <p>When we&apos;re exposed to bright light early in the day, it helps our brain recognize that it&apos;s time to wake up&mdash;improving energy and focus. It also helps suppress melatonin during the day, which can lead to better sleep at night.</p>

          <div data-aos="fade-up" data-aos-delay="250" style={{ textAlign: 'center', margin: '1.5rem 0' }}>
            <img src="/images/light-box.webp" alt="Woman using light therapy" style={{ maxWidth: '60%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
          </div>

          <h3>Getting Started</h3>
          <p>If you&apos;re thinking of trying light therapy, here are some simple tips:</p>
          <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
            <li><strong>Timing matters:</strong> Morning exposure (within an hour of waking) is best.</li>
            <li><strong>Choose the right box:</strong> Choose a 10,000 lux, UV-filtered box designed for Seasonal Affective Disorder.</li>
            <li><strong>Distance counts:</strong> Place the box 16&ndash;24 inches from your face at a slight angle.</li>
            <li><strong>Consistency is key:</strong> Use it daily for best results&mdash;most notice improvement within 1&ndash;2 weeks.</li>
          </ul>

          <h3>When to Check In with a Provider</h3>
          <p>While light therapy is safe for most people, it can cause mild eye strain or headaches at first. If you have eye conditions, bipolar disorder, or take medications that increase light sensitivity, check with your clinician before starting.</p>

          <p>And if your low mood, fatigue, or concentration changes are more than &ldquo;just winter blues,&rdquo; it might be time for a deeper look. Our team can help you find what combination of light exposure, supplements, therapy, or medication fits you best.</p>

          <p style={{ fontStyle: 'italic', marginTop: '1.5rem' }}>Winter doesn&apos;t have to feel heavy. With the right support and tools, there&apos;s light ahead&mdash;literally and figuratively.</p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }} data-aos="fade-up">
          <p>Download our Patient Education Sheet on Light Therapy:</p>
          <a href="/pdfs/Square Bright Light Therapy Information Sheet.pdf" download><span>PDF Download</span><span>Light Therapy</span></a>
          <p style={{ marginTop: '1.5rem' }}>Need to schedule an appointment? Click below to fill out our prospective patient form!</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeeYABYxDoscWL3jH-SNU51X0hgomcb0bEqshRIUnCRg7aSgA/viewform" className="btn secondary" target="_blank" rel="noopener noreferrer">
            Prospective Patient Form
          </a>
        </div>
      </section>

      <Separator variant="bottom" />
    </>
  );
}
