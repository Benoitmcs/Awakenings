import Separator from '@/components/Separator';

export const metadata = {
  title: 'Screen Time & Mental Health - Awakenings Mental Health',
  description: 'Understanding how digital habits shape mental health and building a healthier relationship with screens.',
};

export default function ScreenTime() {
  return (
    <>
      <Separator variant="top" />

      <section className="content-capsule" data-aos="fade-up">
        <h2 data-aos="fade-up">Screen Time & Mental Health</h2>
        <p style={{ textAlign: 'center', fontStyle: 'italic' }} data-aos="fade-up" data-aos-delay="100">
          Creating a healthier relationship with screens starts with awareness.
        </p>

        <div data-aos="fade-up" data-aos-delay="200" style={{ textAlign: 'center' }}>
          <h3>The Paradox of Digital Connection</h3>
          <p>Screen time has become inseparable from work, school, and social life, but it often leaves people feeling overstimulated and alone. Excessive scrolling, especially on social media, is often linked to fatigue, low self-esteem, and isolation despite the promissory &ldquo;social&rdquo; media namesake. <br /> Additionally, in our experience, screen time disproportionately affects individuals with ADHD or anxiety, often amplifying impulsivity and sleep issues. Youth in particular struggle with self-regulation, making family-led boundaries and behavioral modeling essential for long-term change.</p>

          <div data-aos="fade-up" data-aos-delay="250" style={{ textAlign: 'center', margin: '1rem 0' }}>
            <img src="/images/screen.jpg" alt="Phone displaying social media feed" style={{ maxWidth: '60%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>The constant scroll: social media can connect us&mdash;and leave us feeling disconnected.</p>
          </div>

          <h3>Sleep Disruption & Mental Fatigue</h3>
          <p>We&apos;ve all been hearing for years how bad screen time is for our brains. But why exactly is it so bad? Well, it mostly comes down to two factors, sleep and time lost from doing other things. For sleep, the effect is twofold, Blue-Light emitted by screens can disrupt circadian rhythms causing an uneven hormonal schedule while the addictive nature of scrolling from video to video makes it easier to ignore the cues in our brain to go to sleep. The same addictive nature that keeps you scrolling for hours keeps us from engaging in other meaningful activities such as building connection with family and loved ones, trying new hobbies, and spending time outside.</p>

          <h3>When Screen Time Becomes a Struggle</h3>
          <p>Feeling dependent on screens or overwhelmed by usage is incredibly common, and so is the urge to try to reduce time spent &ldquo;Doom-Scrolling&rdquo; on Instagram, Facebook, and Twitter/X. However, building a reduction plan, whether gradual or immediate, can always help. Every individual is going to have completely different needs when it comes to screen time, thus your plan for reducing screen time has to give respect to the different constraining factors in your life. From person to person, even the reasoning for the desire to reduce screen time can vary widely from wanting to set good examples for your kids to boosting mood and productivity.</p>

          <h3>Intentionality Over Elimination</h3>
          <p>Typically, when a patient comes to us trying to kick a bad habit, we recommend focusing on intentionality over complete elimination. For the same reason quitting cigarettes cold-turkey is so difficult, quitting screen time cold-turkey can be nearly as difficult. However, once we start becoming aware of the pervasiveness of a bad habit in our life, we can begin to make smaller, sustainable changes that over time accumulate into massive changes. Returning to the cigarette analogy, if a person smokes fifty cigarettes a week, it&apos;s unlikely that it would be impossible for them to simply reduce that consumption by one cigarette, they may not even notice. But, over the course of a year they would end up reducing their consumption to nothing. Think of screen time the same way, 30 minutes less screen time per week might not even be noticeable but before you know it, you&apos;ll hit your target screen time.</p>

          <h3>Technology as a Tool</h3>
          <p>Screens aren&apos;t inherently harmful. Mental health apps, fitness trackers, and guided meditations can support treatment when used with intention. At Awakenings, the focus is on balanced use&mdash;integrating digital tools into a lifestyle that prioritizes real-world engagement and emotional well-being.</p>

          <p style={{ fontStyle: 'italic', marginTop: '1rem', marginBottom: '1rem' }}>The goal isn&apos;t just zero screen time, it&apos;s thoughtful screen time.</p>
          <p>Every adjustment, no matter how small, is a step toward better mental health.</p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }} data-aos="fade-up">
          <p>If screen time is impacting your mental health or sleep, support is available. Awakenings Mental Health is here to help you build a sustainable plan for balance. Click below to begin your journey.</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeeYABYxDoscWL3jH-SNU51X0hgomcb0bEqshRIUnCRg7aSgA/viewform" className="btn secondary" target="_blank" rel="noopener noreferrer">
            Appointment Interest Form
          </a>
        </div>
      </section>

      <Separator variant="bottom" />
    </>
  );
}
