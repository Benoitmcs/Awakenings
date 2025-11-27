import Separator from '@/components/Separator';

export const metadata = {
  title: 'Can Psychiatry Really Help You Take Less Medication? - Awakenings Mental Health',
  description: 'Explore how good psychiatric care can help reduce medication dependency through lifestyle changes and careful de-prescribing.',
};

export default function ReducingMeds() {
  return (
    <>
      <Separator variant="top" />

      <section className="content-capsule" data-aos="fade-up">
        <h2 data-aos="fade-up">Can Psychiatry Really Help You Take Less Medication?</h2>
        <p style={{ textAlign: 'center', fontStyle: 'italic' }} data-aos="fade-up" data-aos-delay="100">
          &ldquo;Our goal is to untangle the mess of medications so people aren&apos;t treating side-effects with more meds.&rdquo; -- Heidi and Talia, Providers at Awakenings
        </p>

        <div data-aos="fade-up" data-aos-delay="200">
          <p>When people picture psychiatry, they often imagine prescription pads flying. A pill for anxiety, another for sleep, another to cancel out the side effects of the first two, and finally yet another pill for the side effects of the third. Every week, we meet someone completely overwhelmed by medications. Some patients come in taking over a dozen different medications. To be clear, there are situations where people do need to take multiple medications and those medications may have side effects that can be treated properly with other medications. Nobody should ever feel ashamed of their treatment, but oftentimes it can be easy to rely too heavily on medication, especially for psychiatrists.</p>

          <h3>Why So Many Meds?</h3>
          <img src="/images/pills-stock-photo.png" alt="Assortment of pills" style={{ display: 'block', margin: '1rem auto', maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
          <p>Over usage of poly-pharmacy is shockingly common in mental health, and not always for the right reasons. Symptoms snowball, Providers rotate, and side effects get medicated. The result? Plans that are more complicated than the problems they aimed to treat in the first place. We see over-complicated med plans constantly, sometimes providers and patients don&apos;t even know what&apos;s helping and what&apos;s hurting anymore. This leads a lot of people to become distrusting of pharmacology in psychiatry, and rightfully so. That being said, the question then becomes, &ldquo;what can we do about it?&rdquo;</p>

          <h3>The Truth About De-prescribing</h3>
          <p style={{ fontStyle: 'italic', marginTop: '1rem', marginBottom: '1rem' }}>&ldquo;How do you know when it&apos;s time to reduce or remove a medication?&rdquo;</p>
          <p>The answer is: it depends. There&apos;s no universal formula. We look at clinical data like the PHQ-9 or GAD-7, but they&apos;re just tools. The real indicators come from stability, usually six to twelve months of consistent function, plus the patient&apos;s own awareness of their warning signs and support system.</p>
          <p>We also have to consider timing. For example, we rarely initiate a major change between Halloween and Valentine&apos;s Day unless someone has a strong support network and loves winter (most people don&apos;t unless they ski or snowboard). Even if symptoms improve quickly, we often recommend staying on a medication for six to nine months before making changes, just to allow the changes to solidify as oftentimes quick results can be deceptive to the lasting effects of changes.</p>
          <p>It is worth noting that sometimes reducing medication can be scary for patients, especially if they associate them with feeling better. That&apos;s valid. Our job isn&apos;t to force anything&mdash;it&apos;s to walk through the options, make sure the risks are managed, and collaborate on what&apos;s next. Like we mentioned in the intro, it isn&apos;t uncommon for people to have legitimate needs for a higher number of medications, and taking those medications away too quickly can also cause a lot of harm.</p>

          <h3>What Else Can I Do?</h3>
          <img src="/images/sleep-stock-photo.png" alt="Person sleeping peacefully" style={{ display: 'block', margin: '1rem auto', maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
          <p>Sleep is one of the first things we ask about in every visit. Without good sleep, it&apos;s almost impossible to make progress. We coach patients on behavioral sleep hygiene, and we&apos;ll sometimes recommend Magnesium, L-theanine, or even Light Therapy if seasonal depression is at play (which is common here in Idaho).</p>
          <p>Exercise is another powerful tool&mdash;at least 30 minutes, three times a week, has shown to match or exceed medication benefits for certain types of depression. Nutrition plays a role too. Depending on a patient&apos;s situation, we often suggest Fish oil with a high EPA:DHA ratio, Vitamin D supplementation, L-methylfolate for those with MTHFR variants, and again Magnesium for sleep and anxiety management.</p>
          <p>These supplements aren&apos;t replacements for medication&mdash;they&apos;re just a part of the toolbox that makes tapering realistic.</p>

          <h3>What We Want Every Patient (And Therapist) To Know</h3>
          <p>Medication is just one piece of the picture. Without consistent therapy or some kind of mental health support, medication often falls short. With a heavy respect placed on the patient&apos;s wishes and HIPAA compliance, we occasionally use input from therapists, family members, and anyone else who sees the patient regularly&mdash;because as psychiatrists, our time is limited. Even a quick message or observation from a therapist, parent, or loved one can make a huge difference when tapering or adjusting a medication. When collaboration happens, outcomes are better.</p>
          <p>Every patient is different, that&apos;s why feedback matters so much. If a change in medication doesn&apos;t sit right, or a symptom is more disruptive than we realized, tell us. Our job in psychiatry isn&apos;t just to medicate symptoms&mdash;it&apos;s to manage what matters most to the patient; that takes communication, trust, and a shared goal.</p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }} data-aos="fade-up">
          <p>Medications can be complicated. If you&apos;re in need of an experienced psychiatrist, click the button below to fill out our appointment interest form!</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeeYABYxDoscWL3jH-SNU51X0hgomcb0bEqshRIUnCRg7aSgA/viewform" className="btn secondary" target="_blank" rel="noopener noreferrer">
            Appointment Interest Form
          </a>
        </div>
      </section>

      <Separator variant="bottom" />
    </>
  );
}
