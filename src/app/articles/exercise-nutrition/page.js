import Separator from '@/components/Separator';

export const metadata = {
  title: 'How Exercise and Nutrition Transform Psychiatry - Awakenings Mental Health',
  description: 'Discover how daily habits like movement and mindful eating can powerfully support psychiatric treatment and overall mental wellness.',
};

export default function ExerciseNutrition() {
  return (
    <>
      <Separator variant="top" />

      <section className="content-capsule" data-aos="fade-up">
        <h2 data-aos="fade-up">How Exercise and Nutrition Transform Psychiatry</h2>
        <p style={{ textAlign: 'center', fontStyle: 'italic' }} data-aos="fade-up" data-aos-delay="100">
          &ldquo;If something is worth doing, it is worth doing badly.&rdquo; -G.K. Chesterson
        </p>

        <div data-aos="fade-up" data-aos-delay="200">
          <p>At Awakenings, we often remind our patients that the path to wellness doesn&apos;t begin with perfection, it begins with intention. One of the most powerful ways to support psychiatric treatment isn&apos;t found in a bottle it&apos;s in your daily habits like movement and mindful eating.</p>
          <p>It&apos;s easy for nutrition and exercise to sound overwhelming, especially when you&apos;re already struggling to find energy or motivation, but here&apos;s what we want you to know: starting a diet or exercise routine doesn&apos;t need to be dramatic to be effective. In fact, the smallest step is often the most powerful.</p>

          <h3>Medications Work Better When You Support Them</h3>
          <img src="/images/food.png" alt="Healthy food options" style={{ display: 'block', margin: '1rem auto', maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
          <p>Many types of medications we prescribed throughout psychiatry are affected by what and how you eat. For example, some antipsychotics require 500+ calories shortly before or after taking them for full absorption. Medications like trazodone are more effective when taken on an empty stomach. Certain foods (like grapefruit) and habits (like high-fat breakfasts) can delay or reduce medication absorption. Nicotine consumption, especially from tobacco, can change how some psychiatric drugs are processed although this is marginally less impactful today with the lessening of tobacco consumption than in recent history. All of this isn&apos;t to say that you always have to follow strict rules to get anything out of your medications, however, It&apos;s always important to understand how fueling our body can directly impact both the medications we take and our general mental health.</p>

          <h3>Exercise as a Prescription</h3>
          <p>When we talk to patients about exercise, we don&apos;t mean hitting the gym six days a week. We mean finding something that feels doable and showing up for it, whatever that looks like. Like walking around the block, yoga at home, dance, swimming, or even gardening. What&apos;s really important is starting, for some people we recommend making changes as small as possible, even parking at the back of the Walmart parking lot can get you an extra two hundred steps or standing up while you work or watch tv can be enough to start. In the context of psychiatry, we aren&apos;t necessarily chasing a &ldquo;perfect body&rdquo; or a six-pack, it&apos;s about supporting your brain with the boosts to mood, cognition, and productivity that exercise brings.</p>
          <p>If you&apos;re struggling to get started, here&apos;s some of the best advice we give to our patients. Firstly, sharing our goals with our loved ones increases the chances we&apos;ll follow through, and you may discover that your friends and family want to participate with you which further increases your likelihood of success. If you can&apos;t find a buddy, it may be worth looking into getting a coach/trainer, these people&apos;s lives revolve around being able to help you get started and stay consistent. Finally, focus on what you enjoy doing, not what is the &ldquo;best&rdquo; for you on paper. Finding something you love doing makes you more likely to do it consistently, which outweighs any marginal benefit between differences in exercise selection.</p>
          <p style={{ fontStyle: 'italic', marginTop: '1rem', marginBottom: '1rem' }}>Bonus: Reframing exercise as a prescription can be helpful for some people, think of your daily walk around the block as something that you do because you know it has a positive impact on your life similarly to how you take your medications because they have a positive impact on your life.</p>

          <h3>Medication is a Tool, Not the Whole Toolbox</h3>
          <img src="/images/people.png" alt="Group of diverse people" style={{ display: 'block', margin: '1rem auto', maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
          <p>Yes, medication can help, especially taken in the correct context. Sometimes, it&apos;s exactly what someone needs to begin moving forward. But it&apos;s just one tool. Over time, many of our patients find that as their nutrition and activity improve, their need for higher doses, or even certain medications altogether, can begin to diminish.</p>
          <p>Our goal at Awakenings isn&apos;t just symptom management. It&apos;s empowered, sustainable wellness. And that starts with small, consistent changes&mdash;no matter how imperfect.</p>
          <p style={{ fontStyle: 'italic', marginTop: '1rem', marginBottom: '1rem' }}>&ldquo;If something is worth doing, it is worth doing badly.&rdquo; -G.K. Chesterson</p>
          <p>Even the smallest effort is still a step forward.</p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }} data-aos="fade-up">
          <p>Need Help Starting? If you&apos;re not sure where to begin, we&apos;re here to support you. For medication management and support, Awakenings Mental Health is committed to walking with you, step by imperfect step. Click the button below to get an appointment on your schedule today!</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeeYABYxDoscWL3jH-SNU51X0hgomcb0bEqshRIUnCRg7aSgA/viewform" className="btn secondary" target="_blank" rel="noopener noreferrer">
            Appointment Interest Form
          </a>
        </div>
      </section>

      <Separator variant="bottom" />
    </>
  );
}
