import Script from 'next/script';

/**
 * One provider's profile block. Rendered inside the location page for the office
 * where that provider sees patients in person.
 *
 * All styling comes from existing rules in globals.css (.provider-profile,
 * .provider-photo, .provider-info, .provider-contact-info, .provider-specialties,
 * .provider-actions). No new CSS is needed here.
 */
export default function ProviderProfile({ provider, phone, phoneHref }) {
  return (
    <>
      <section className="provider-profile" data-aos="fade-up" data-aos-delay="100">
        <div className="provider-photo-container">
          <img
            src={provider.photo}
            alt={`${provider.fullName}, psychiatric provider at Awakenings Mental Health`}
            className="provider-photo"
          />
        </div>
        <div className="provider-info">
          <div className="content-capsule">
            <div className="provider-contact-info">
              <p><strong>Call or Text:</strong> <a href={phoneHref}>{phone}</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${provider.email}`}>{provider.email}</a></p>
              <p>
                <strong>More About Me:</strong>{' '}
                <a href={provider.psychologyToday} target="_blank" rel="noopener noreferrer">
                  Psychology Today
                </a>
              </p>
            </div>
          </div>

          {provider.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <div className="provider-specialties">
            <h4>Specialties:</h4>
            <ul>
              {provider.specialties.map((specialty) => (
                <li key={specialty}>{specialty}</li>
              ))}
            </ul>
          </div>

          <div className="psychology-today-embed-wrapper">
            <a href={provider.psychologyTodayProfile} className="sx-verified-seal"></a>
          </div>

          <div className="provider-actions">
            <a
              href={provider.bookingUrl}
              className="btn-provider-action"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Appointment with {provider.name.split(' ')[0]}
            </a>
            {provider.telehealthUrl && (
              <a
                href={provider.telehealthUrl}
                className="btn-provider-action"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Your Appointment
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Psychology Today verified seal */}
      <Script
        src="https://member.psychologytoday.com/verified-seal.js"
        data-badge="13"
        data-id={provider.psychologyTodayId}
        strategy="lazyOnload"
      />
    </>
  );
}
