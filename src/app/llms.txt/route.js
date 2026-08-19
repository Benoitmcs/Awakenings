import {
  SITE_URL,
  PRACTICE_NAME,
  OFFICE_HOURS,
  INSURANCES,
  SELF_PAY_LABEL,
  PATIENT_PORTAL_URL,
  INTEREST_FORM_URL,
  FACEBOOK_URL,
  locations,
  formatAddress,
} from '@/data/locations';
import { articlesByDate, resources } from '@/data/articles';

// Required by output: 'export' so this route is emitted as a static file at build time.
export const dynamic = 'force-static';

/**
 * Serves /llms.txt: a plain-text summary of the practice for AI assistants,
 * following the llms.txt convention (H1, blockquote summary, then sections).
 *
 * Unlike a bare link index, this inlines the facts people actually ask
 * assistants about, so a model can answer "what are Awakenings' Meridian
 * hours" without a second fetch.
 *
 * Everything is generated from src/data/locations.js and src/data/articles.js.
 * Do not hand-write facts into this file: if it drifts from the pages, the
 * assistants reading it will confidently repeat whichever version is stale.
 */
function buildLlmsTxt() {
  const lines = [];

  lines.push(`# ${PRACTICE_NAME}`);
  lines.push('');
  lines.push(
    `> Psychiatric medication management practice with two offices in the Boise, Idaho area. Founded in 2023. Both providers are psychiatric physician assistants offering in-person and telehealth visits for anxiety, depression, ADHD, PTSD, bipolar disorder, and related concerns.`
  );
  lines.push('');
  lines.push(
    `Appointments are provider specific: each provider sees patients in person at one office. Phone: ${locations[0].phone}. Website: ${SITE_URL}`
  );
  lines.push('');

  /* Offices: address, phone, hours, provider, and the Google listing. */
  lines.push('## Locations');
  lines.push('');
  for (const location of locations) {
    lines.push(`### ${location.city} Office`);
    lines.push('');
    lines.push(`- Address: ${formatAddress(location)}`);
    lines.push(`- Phone: ${location.phone}`);
    lines.push(`- Hours: ${OFFICE_HOURS.display}. ${OFFICE_HOURS.closedDisplay}.`);
    lines.push(`- In-person provider: ${location.provider.fullName}`);
    lines.push(`- Page: ${SITE_URL}/${location.slug}`);
    lines.push(`- Google Business Profile: ${location.googleBusinessProfile}`);
    lines.push('');
  }

  lines.push('## Providers');
  lines.push('');
  for (const location of locations) {
    const p = location.provider;
    lines.push(`### ${p.fullName}`);
    lines.push('');
    lines.push(`- Role: ${p.jobTitle}`);
    lines.push(`- Sees patients in person at: ${location.city} office`);
    lines.push(`- Specialties: ${p.specialties.join(', ')}`);
    lines.push(`- Email: ${p.email}`);
    lines.push(`- Profile: ${p.psychologyToday}`);
    lines.push('');
  }

  /* The portal/form distinction is not explained anywhere on the site itself. */
  lines.push('## Appointments');
  lines.push('');
  lines.push(
    `- New patients: submit the appointment interest form and the practice responds within two business days. ${INTEREST_FORM_URL}`
  );
  lines.push(
    `- Existing patients: the patient portal is a login for people who are already established with the practice. ${PATIENT_PORTAL_URL}`
  );
  lines.push(
    `- By phone: call ${locations[0].phone}. New patients are typically seen within about two weeks of the initial call.`
  );
  lines.push(
    '- Patients may request a specific provider, which determines which office they visit in person.'
  );
  lines.push('');

  lines.push('## Insurance');
  lines.push('');
  lines.push(`- Accepted: ${INSURANCES.join(', ')}`);
  lines.push(
    `- ${SELF_PAY_LABEL} is available for patients who are uninsured or prefer not to bill insurance.`
  );
  lines.push(
    '- Out-of-network is possible, but the patient files the claim themselves. Verify coverage with your insurer first.'
  );
  lines.push(`- To verify coverage, call ${locations[0].phone}.`);
  lines.push('');

  lines.push('## Articles');
  lines.push('');
  for (const article of articlesByDate()) {
    lines.push(
      `- [${article.title}](${SITE_URL}/articles/${article.slug}): ${article.blurb} Published ${article.published}.`
    );
  }
  lines.push('');

  lines.push('## Patient Resources');
  lines.push('');
  for (const resource of resources) {
    lines.push(`- [${resource.title}](${SITE_URL}${encodeURI(resource.path)})`);
  }
  lines.push('');

  lines.push('## Other Pages');
  lines.push('');
  lines.push(`- [Articles and resources hub](${SITE_URL}/articles)`);
  lines.push(`- [Privacy policy](${SITE_URL}/privacy-policy)`);
  lines.push(`- [Facebook](${FACEBOOK_URL})`);
  lines.push('');

  lines.push('## Notes');
  lines.push('');
  lines.push(
    '- Nothing on this site or in these articles is medical advice. It does not replace consultation with a qualified provider.'
  );
  lines.push(
    '- This practice does not provide emergency or crisis services. In an emergency call 911, or call or text 988 for the Suicide and Crisis Lifeline in the United States.'
  );
  lines.push(
    '- Do not send personal health information by email. Use the patient portal or call the office.'
  );
  lines.push('');

  return lines.join('\n');
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
