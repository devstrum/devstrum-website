import { THEME, gridBg, CornerTicks, SiteNav, SiteFooter, BOOKING_URL, PAD_X, useIsMobile, Reveal, SEO } from './theme.jsx';

// FittingWizardPage - Devstrum x Fitting Wizard partner brochure
// Standalone landing page for Fitting Wizard's client base (not in main nav).
// No pricing anywhere on this page by design.

const CHANNELS = [
  {
    n: 'Text', t: 'Messenger & WhatsApp',
    d: "Patients message you on the apps they already use. The AI answers routine questions and books straight into your Fitting Wizard calendar - no new inbox to check.",
    get: ['Messenger & WhatsApp coverage', 'Bookings written directly into Fitting Wizard', '24/7 response, no missed enquiries'],
  },
  {
    n: 'Portals', t: 'Booking Portals',
    d: 'A public portal for new-patient enquiries and a private portal for existing patients to reschedule, confirm, or follow up - without picking up the phone.',
    get: ['Public portal for new enquiries', 'Private portal for existing patients', 'Reminders that cut no-shows'],
  },
  {
    n: 'Voice', t: 'AI Voice Receptionist',
    d: "Answers your clinic line, handles bookings and common questions in a natural voice, and hands off to your team for anything it can't resolve.",
    get: ['Answers & triages inbound calls', 'Books appointments by voice', 'Escalates to your team when needed'],
  },
];

const STEPS = [
  ['01', 'Introduction', "Your Fitting Wizard rep introduces us - we don't contact your patients or your practice cold."],
  ['02', 'Demo', "We demo the system live against a real setup, so you can see exactly how it behaves before committing."],
  ['03', 'Integration', 'Once you’re happy, we connect it to your existing Fitting Wizard calendar and booking flow.'],
  ['04', 'Live in about a week', 'From introduction to a working system typically takes under five days.'],
];

const WHY = [
  ['Books straight into Fitting Wizard', 'No separate calendar, no double entry, no data migration - it writes into the system you already run.'],
  ['Runs on your own infrastructure', 'Deployed to your own server, virtual machine, or remote desktop environment, the same way Fitting Wizard itself does.'],
  ['Alongside your team, not instead of them', 'Handles the repetitive first touch - enquiries, bookings, reminders - and hands off anything it can’t resolve.'],
  ['Built with audiology in mind', 'Shaped around how hearing and audiology clinics actually take bookings and follow up with patients.'],
];

const FAQS = [
  ['Is this an official Fitting Wizard integration?', 'Yes. It’s built in direct partnership with Fitting Wizard, and bookings write straight into your existing Fitting Wizard calendar.'],
  ['Where does it run?', 'On your own infrastructure - your own server, a virtual machine, or a remote desktop environment - the same way Fitting Wizard itself typically runs today.'],
  ['Who do we contact if something goes wrong?', 'Devstrum supports the AI system directly, alongside your existing Fitting Wizard support - you’re never left without a point of contact.'],
  ['How long does setup take?', 'Once you’ve seen a demo and are happy to proceed, most clinics are live within about a week.'],
];

const FittingWizardPage = () => {
  const { bg, ink, accent, muted, rule } = THEME;
  const isMobile = useIsMobile();
  return (
    <div style={{ background: bg, color: ink, fontFamily: '"Geist Mono", monospace', minHeight: '100%' }} data-screen-label="Fitting Wizard Partnership">
      <SEO
        title="Fitting Wizard Partner — AI Reception for Audiology Clinics"
        description="Devstrum is an official Fitting Wizard partner, building AI reception for audiology and hearing clinics - WhatsApp & Messenger, booking portals, and an AI voice receptionist that books straight into Fitting Wizard."
        path="/fitting-wizard"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQS.map(([q, a]) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
          })),
        }}
      />
      <SiteNav active="fitting-wizard" />

      {/* Hero */}
      <Reveal as="section" style={{ position: 'relative', padding: `clamp(48px, 10vw, 72px) ${PAD_X} clamp(36px, 8vw, 56px)`, backgroundImage: gridBg, textAlign: 'center' }}>
        <CornerTicks />
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 24 }}>DEVSTRUM × FITTING WIZARD</div>
        <h1 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(38px, 9vw, 80px)', fontWeight: 600, letterSpacing: '-0.05em', margin: '0 auto 24px', lineHeight: .96, maxWidth: 820 }}>
          AI reception, built for your <span style={{ color: accent }}>Fitting Wizard practice.</span>
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.55, color: muted, maxWidth: 660, margin: '0 auto' }}>
          A plugin for audiology and hearing clinics running Fitting Wizard - AI agents that answer, book, and follow up with patients on WhatsApp, Messenger, and voice, and write straight into the calendar you already use.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href={BOOKING_URL} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
            <button style={{ padding: '14px 26px', background: ink, color: bg, border: 0, fontSize: 12, fontWeight: 600, letterSpacing: '.18em', fontFamily: 'inherit', cursor: 'pointer' }}>BOOK A DEMO →</button>
          </a>
        </div>
      </Reveal>

      {/* Reference client */}
      <div style={{ padding: `18px ${PAD_X}`, borderBottom: `1px solid ${rule}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, flexWrap: 'wrap', fontSize: 12, color: muted, fontFamily: '"Geist Mono", monospace', textAlign: 'center' }}>
        <span>ALREADY LIVE WITH →</span>
        <a href="https://activeaudiology.com.au" target="_blank" rel="noopener" style={{ color: ink, borderBottom: `1px solid ${accent}`, textDecoration: 'none' }}>Active Audiology</a>
        <span style={{ opacity: .5 }}>·</span>
        <span>a multi-location hearing clinic on Fitting Wizard</span>
      </div>

      {/* Why we built this */}
      <Reveal as="section" style={{ padding: `clamp(48px, 10vw, 88px) ${PAD_X}`, borderTop: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>WHY WE BUILT THIS</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(26px, 5vw, 40px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 auto 20px', maxWidth: 720 }}>
          Every missed call is a patient who books somewhere else.
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.6, color: muted, maxWidth: 620, margin: '0 auto' }}>
          Clinics lose enquiries between appointments - calls that go unanswered, messages that sit overnight, patients who never got a reminder. This plugs directly into Fitting Wizard so those patients get answered, booked, and followed up automatically.
        </p>
      </Reveal>

      {/* What's included */}
      <Reveal as="section" style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>WHAT'S INCLUDED</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(28px, 6vw, 44px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 auto 48px' }}>Three ways to cover reception.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 1, background: rule, border: `1px solid ${rule}`, maxWidth: 1000, margin: '0 auto' }}>
          {CHANNELS.map((c) => (
            <div key={c.n} style={{ background: bg, padding: 32, textAlign: 'left' }}>
              <div style={{ fontSize: 11, color: accent, letterSpacing: '.15em', marginBottom: 12 }}>{c.n.toUpperCase()}</div>
              <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12 }}>{c.t}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.6, color: muted, margin: '0 0 18px' }}>{c.d}</p>
              <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.8, color: ink, padding: 0, listStyle: 'none', margin: 0 }}>
                {c.get.map(g => <li key={g}>{g}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: muted, maxWidth: 560, margin: '32px auto 0' }}>
          Each clinic picks the mix of channels that fits how they run - your Devstrum contact will walk you through it during the demo.
        </p>
      </Reveal>

      {/* How it works */}
      <Reveal as="section" style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>HOW IT WORKS</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(28px, 6vw, 44px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 auto 48px' }}>From introduction to live.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 1, background: rule, border: `1px solid ${rule}`, maxWidth: 1000, margin: '0 auto' }}>
          {STEPS.map(([n, t, d]) => (
            <div key={n} style={{ background: bg, padding: 28, textAlign: 'left' }}>
              <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 11, color: accent, letterSpacing: '.15em', marginBottom: 12 }}>{n}</div>
              <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 17, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 10 }}>{t}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.6, color: muted, margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Why clinics choose it */}
      <Reveal as="section" style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>WHY CLINICS CHOOSE IT</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(28px, 6vw, 44px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 auto 16px' }}>Built for how clinics actually run.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 1, background: rule, border: `1px solid ${rule}`, maxWidth: 1000, margin: '48px auto 0' }}>
          {WHY.map(([t, d]) => (
            <div key={t} style={{ background: bg, padding: 32, textAlign: 'left' }}>
              <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 17, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 10 }}>{t}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.6, color: muted, margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* FAQ */}
      <Reveal as="section" style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>QUESTIONS</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(28px, 6vw, 44px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 auto 48px' }}>Common questions.</h2>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'left' }}>
          {FAQS.map(([q, a], i) => (
            <div key={q} style={{ padding: '28px 0', borderTop: i === 0 ? 'none' : `1px solid ${rule}` }}>
              <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 17, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 10 }}>{q}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.6, color: muted, margin: 0 }}>{a}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <SiteFooter heading="Ask your rep about" headingAccent="the Fitting Wizard plugin." />
    </div>
  );
};

export default FittingWizardPage;
