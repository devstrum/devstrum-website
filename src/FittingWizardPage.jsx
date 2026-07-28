import { THEME, gridBg, CornerTicks, SiteNav, SiteFooter, BOOKING_URL, PAD_X, useIsMobile, Reveal, SEO } from './theme.jsx';

// FittingWizardPage - product page for the Fitting Wizard plugin, built in
// partnership with Biotronic (the makers of Fitting Wizard). Linked from the
// Products nav tab and used as the landing page Francois points his clients to.
// Depends on: theme.jsx

const STEPS = [
  {
    tag: 'ANY HOUR', t: 'A patient enquires',
    d: 'Through Facebook Messenger, WhatsApp, Instagram, email, SMS, your website — whichever channels you choose to run — including the 9 pm to 2 am window where enquiries currently go unanswered until morning, if they come back at all.',
  },
  {
    tag: 'ANSWERED INSTANTLY', t: 'The assistant qualifies and books',
    d: 'It answers questions, checks pension card and referral status, finds the patient in your existing client records or creates them properly, and offers real availability for the right site and practitioner.',
  },
  {
    tag: 'IN YOUR WIZARD', t: 'The appointment appears, tagged',
    d: 'Created against the correct planner with the record correctly linked and indexed, and clearly tagged so your front desk can see it was booked automatically. If your staff move or edit it, their change wins.',
  },
];

// No pricing on this page by design - it's quoted per practice on the demo call.
// These describe what a subscription covers, without naming a number.
const INCLUDED = [
  ['Text', 'Facebook Messenger, WhatsApp, Instagram, email, SMS and any other channel you choose — answered instantly and booked straight into Fitting Wizard.'],
  ['Booking portals', 'Public and private online booking off your website, running against the same real availability.'],
  ['Voice', 'An AI phone receptionist that answers, qualifies and books calls, with a generous monthly call allowance.'],
];

const TRUST = [
  ['Your staff always win', 'Any change your team makes directly in Fitting Wizard takes priority over the assistant. It never overwrites human decisions.'],
  ['Hosted in Australia', 'Patient data is processed and hosted on Australian infrastructure, handled in line with the Privacy Act and the Australian Privacy Principles.'],
  ['Built with the maker of Fitting Wizard', "The integration respects the Wizard's record locking, indexing and client linking, and is developed and tested directly with Biotronic."],
  ['Live in about five days', 'We install the connector remotely, connect whichever channels you run, and test with your team before anything is patient-facing. No hardware, no migration.'],
];

const FAQS = [
  ['Does anything change in how we use Fitting Wizard?', "No. Your Wizard, your data and your workflow stay exactly as they are. The assistant creates properly linked, tagged appointments alongside your team's — it doesn't replace anything your staff do."],
  ['What if the assistant books something wrong?', 'Every automated appointment is tagged so your front desk can spot it instantly. Your staff can move, edit or cancel it like any other appointment, and their change always takes priority.'],
  ['We run multiple clinics on one server. Does that work?', 'Yes. The connector is installed per system, including Habitat3-hosted and other remote-desktop environments, and books against the correct site and practitioner for each location.'],
  ['How long does setup take?', "Once you've seen a demo and are happy to proceed, most practices are live in about five days. We install the connector remotely, connect your channels, and test with your team before anything is patient-facing."],
  ['Who supports it?', 'Devstrum supports the plugin during Australian business hours. Biotronic remains your support contact for Fitting Wizard itself, exactly as today.'],
];

// The after-hours booking conversation - the signature element of this page.
const CHAT = [
  ['them', 'Hi, do you have anything for a hearing test this week? I have a pension card'],
  ['us', 'We do. Thursday has 10:15 am at Moonee Ponds with Sarah, or 2:30 pm at Essendon. Which suits?'],
  ['them', "10:15 please. It's for my dad, Ted Marsh"],
  ['us', "Booked — Ted Marsh, Thursday 10:15 am, Moonee Ponds. We've texted the details. Anything else?"],
];

const ChatMock = () => {
  const { bg, ink, accent, muted, rule } = THEME;
  return (
    <div
      aria-label="Example of a patient booking after hours"
      style={{ background: bg, border: `1px solid ${rule}`, padding: 22, maxWidth: 400, margin: '0 auto', textAlign: 'left', boxShadow: '0 12px 40px rgba(14,26,43,.07)' }}
    >
      <div style={{ fontSize: 10, color: muted, letterSpacing: '.2em', textAlign: 'center', marginBottom: 18, fontFamily: '"Geist Mono", monospace' }}>
        TUESDAY · 9:47 PM
      </div>
      {CHAT.map(([side, text], i) => (
        <div key={i} className="fw-bubble" style={{ display: 'flex', justifyContent: side === 'us' ? 'flex-end' : 'flex-start', marginBottom: 10, animationDelay: `${i * 0.35}s` }}>
          <div style={{
            maxWidth: '86%', padding: '10px 14px', fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.5,
            background: side === 'us' ? ink : 'rgba(14,26,43,.05)',
            color: side === 'us' ? bg : ink,
          }}>
            {text}
          </div>
        </div>
      ))}
      <div className="fw-bubble" style={{ marginTop: 14, borderLeft: `2px solid ${accent}`, background: 'rgba(29,78,216,.04)', padding: '12px 14px', animationDelay: '1.55s' }}>
        <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 13, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 6 }}>
          ✓ Appointment created in Fitting Wizard
        </div>
        <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 10, color: muted, letterSpacing: '.08em', lineHeight: 1.6 }}>
          CLIENT RECORD LINKED · SITE: MOONEE PONDS · TAGGED: BOOKED BY AI
        </div>
      </div>
    </div>
  );
};

const FittingWizardPage = () => {
  const { bg, ink, accent, muted, rule } = THEME;
  const isMobile = useIsMobile();

  return (
    <div style={{ background: bg, color: ink, fontFamily: '"Geist Mono", monospace', minHeight: '100%' }} data-screen-label="Fitting Wizard plugin">
      <SEO
        title="After-hours bookings for Fitting Wizard"
        description="Patients book, reschedule and cancel through Messenger, WhatsApp, Instagram, email, SMS or your website at any hour. The appointment lands in your Fitting Wizard — correct site, correct practitioner, linked to the client record and tagged for your staff. Built in partnership with Biotronic and already live with a multi-clinic audiology chain in Melbourne."
        path="/products/fitting-wizard"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Devstrum plugin for Fitting Wizard',
          applicationCategory: 'BusinessApplication',
          description: 'An AI booking assistant for audiology clinics that answers patients on Messenger, WhatsApp, Instagram, email, SMS and the web at any hour, and creates correctly linked, tagged appointments inside Fitting Wizard.',
          operatingSystem: 'Windows (Fitting Wizard, incl. remote desktop environments)',
          provider: { '@type': 'ProfessionalService', name: 'Devstrum' },
          areaServed: 'Australia',
        }}
      />
      <SiteNav active="products" />

      <style>{`
        @keyframes fw-pop { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .fw-bubble { opacity: 0; animation: fw-pop .45s ease forwards; }
        @media (prefers-reduced-motion: reduce) { .fw-bubble { opacity: 1; animation: none; } }
      `}</style>

      {/* ─── Partner strip ─── */}
      <div style={{ background: ink, color: bg, padding: `10px ${PAD_X}`, textAlign: 'center', fontFamily: '"Geist Mono", monospace', fontSize: 10, letterSpacing: '.18em' }}>
        BUILT FOR FITTING WIZARD · IN PARTNERSHIP WITH BIOTRONIC, THE MAKERS OF FITTING WIZARD
      </div>

      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', padding: `clamp(48px, 10vw, 80px) ${PAD_X} clamp(40px, 8vw, 64px)`, backgroundImage: gridBg }}>
        <CornerTicks />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.1fr .9fr', gap: isMobile ? 48 : 56, alignItems: 'center', maxWidth: 1100, margin: '0 auto' }}>
          <Reveal>
            <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 24 }}>THE FITTING WIZARD AGENT</div>
            <h1 style={{ fontFamily: '"Geist", sans-serif', fontWeight: 600, fontSize: 'clamp(38px, 6.4vw, 64px)', lineHeight: .98, letterSpacing: '-0.05em', margin: '0 0 28px' }}>
              Your clinic closes at&nbsp;5.<br /><span style={{ color: accent }}>Your diary doesn't.</span>
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.55, color: muted, margin: '0 0 36px', maxWidth: 560 }}>
              Patients book, reschedule and cancel through Facebook Messenger, WhatsApp, Instagram, email, SMS, your website — any channel you choose — at any hour. The appointment lands in your Fitting Wizard: correct site, correct practitioner, linked to the client record, tagged for your staff. Nothing about how you use the Wizard changes.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={BOOKING_URL} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
                <button style={{ padding: '18px 28px', background: ink, color: bg, border: 0, fontSize: 12, fontWeight: 600, letterSpacing: '.15em', fontFamily: 'inherit', cursor: 'pointer' }}>
                  SEE A BOOKING LAND IN FITTING WIZARD →
                </button>
              </a>
              <a href="#how-it-works" style={{ textDecoration: 'none' }}>
                <button style={{ padding: '18px 28px', background: 'transparent', color: ink, border: `1px solid ${ink}`, fontSize: 12, fontWeight: 600, letterSpacing: '.15em', fontFamily: 'inherit', cursor: 'pointer' }}>
                  HOW IT WORKS
                </button>
              </a>
            </div>
            <p style={{ fontFamily: '"Geist Mono", monospace', fontSize: 11, color: muted, letterSpacing: '.1em', marginTop: 24, lineHeight: 1.8 }}>
              LIVE IN ABOUT 5 DAYS · HOSTED IN AUSTRALIA · NO BUILD FEE, NO SETUP FEE
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ChatMock />
          </Reveal>
        </div>
      </section>

      {/* ─── PROOF ─── */}
      {/* The reference practice is deliberately unnamed. */}
      <Reveal as="section" style={{ padding: `28px ${PAD_X}`, borderTop: `1px solid ${ink}`, borderBottom: `1px solid ${rule}`, textAlign: 'center' }}>
        <p style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(17px, 2.4vw, 22px)', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.45, margin: '0 auto', maxWidth: 760 }}>
          We're live with <span style={{ color: accent }}>one of Fitting Wizard's largest clients</span> — a multi-clinic audiology chain in Melbourne, running across their locations.
        </p>
      </Reveal>

      {/* ─── HOW IT WORKS ─── */}
      <Reveal as="section" id="how-it-works" style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>HOW IT WORKS</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 auto 16px' }}>
          No new software to learn.
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.6, color: muted, maxWidth: 620, margin: '0 auto 56px' }}>
          No change to your Fitting Wizard. Your staff keep working exactly as they do today.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 1, background: rule, border: `1px solid ${rule}`, maxWidth: 1000, margin: '0 auto', textAlign: 'left' }}>
          {STEPS.map((s) => (
            <div key={s.t} style={{ background: bg, padding: 32 }}>
              <div style={{ fontSize: 10, color: accent, letterSpacing: '.2em', marginBottom: 16 }}>{s.tag}</div>
              <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 19, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12 }}>{s.t}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.65, color: muted, margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* ─── WHAT'S INCLUDED ─── */}
      {/* Deliberately no prices - quoted per practice on the demo call. */}
      <Reveal as="section" style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>WHAT'S INCLUDED</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 auto 16px' }}>
          One monthly fee, <span style={{ color: accent }}>everything included.</span>
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.6, color: muted, maxWidth: 660, margin: '0 auto 56px' }}>
          Installation, hosting, AI, integrations and support — no build fee and no setup fee for Fitting Wizard practices. Scoped to the number of clinic locations you run, and quoted on the demo call.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 1, background: rule, border: `1px solid ${rule}`, maxWidth: 1000, margin: '0 auto', textAlign: 'left' }}>
          {INCLUDED.map(([t, d]) => (
            <div key={t} style={{ background: bg, padding: 32 }}>
              <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12 }}>{t}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.65, color: muted, margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* ─── TRUST ─── */}
      <Reveal as="section" style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>BUILT FOR HEALTHCARE</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 auto 56px', maxWidth: 760 }}>
          Run the way clinics need.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 1, background: rule, border: `1px solid ${rule}`, maxWidth: 1000, margin: '0 auto', textAlign: 'left' }}>
          {TRUST.map(([t, d]) => (
            <div key={t} style={{ background: bg, padding: 32 }}>
              <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12 }}>{t}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.65, color: muted, margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* ─── FAQ ─── */}
      <Reveal as="section" style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>FAQ</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 auto 56px', maxWidth: 760 }}>
          Questions clinic owners ask.
        </h2>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'left' }}>
          {FAQS.map(([q, a], i) => (
            <div key={q} style={{ padding: '24px 0', borderTop: i === 0 ? `1px solid ${rule}` : 'none', borderBottom: `1px solid ${rule}` }}>
              <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 10 }}>{q}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.6, color: muted, margin: 0 }}>{a}</p>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: '"Geist Mono", monospace', fontSize: 10, color: muted, letterSpacing: '.12em', lineHeight: 1.8, maxWidth: 760, margin: '40px auto 0' }}>
          FITTING WIZARD IS A PRODUCT OF BIOTRONIC PTY. LIMITED. DEVSTRUM IS AN INDEPENDENT PARTNER.
        </p>
      </Reveal>

      <SiteFooter
        heading="Watch a booking land in"
        headingAccent="a live Fitting Wizard."
        ctaLabel="BOOK A 20-MIN DEMO →"
        testimonial={{
          quote: "I built Fitting Wizard. I tested this myself against record locking, indexing and concurrent bookings, and it holds up. It's the first product of its kind I've been comfortable putting my name to.",
          attribution: 'Francois Capmeil · Founder, Biotronic · developer of Fitting Wizard',
        }}
      />
    </div>
  );
};

export default FittingWizardPage;
