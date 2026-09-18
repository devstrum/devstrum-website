import { THEME, gridBg, CornerTicks, SiteNav, SiteFooter, PAD_X, useIsMobile, Reveal, SEO } from './theme.jsx';

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

const CHANNELS = ['Phone', 'Facebook Messenger', 'Website booking', 'Email', 'SMS', 'WhatsApp', 'Instagram', 'GP referral'];

const PROOF_TILES = [
  ['Answers every call', '24 hours, seven days. Books, reschedules and cancels straight into Fitting Wizard. Hands anything urgent or clinical to a person immediately.'],
  ['Replies to your ads in seconds', 'A Facebook enquiry at 11pm gets a reply at 11pm, with real availability, and a confirmed appointment before they close the app.'],
  ['Fills the slot that just opened', 'A cancellation is offered to your waiting list automatically. The diary refills without anyone picking up the phone.'],
  ['Gets the recall right', 'Checks Fitting Wizard nightly before it contacts anyone, so the patient you saw last month is never asked to come in for an annual review.'],
  ['Knows HSP, DVA and private apart', 'Asks the funding question up front, tags it correctly in Fitting Wizard, and leaves the government portal work to your team, where it belongs.'],
  ['Shows you the month', 'Revenue by month, by site, by clinician, by device. Not a three-month cumulative figure you have to re-run and paste into Excel.'],
];

const TRUST = [
  ['Your staff always win', 'Any change your team makes directly in Fitting Wizard takes priority over the assistant. It never overwrites human decisions.'],
  ['Hosted in Australia', 'Patient data is processed and hosted on Australian infrastructure, handled in line with the Privacy Act and the Australian Privacy Principles.'],
  ['Built with the maker of Fitting Wizard', "The integration respects the Wizard's record locking, indexing and client linking, and is developed and tested directly with Biotronic."],
  ['Live in about five days', 'We install the connector remotely, connect whichever channels you run, and test with your team before anything is patient-facing. No hardware, no migration.'],
];

const COMPARE_ROWS = [
  ['Time to live', '—', '5 days', '4–6 months'],
  ['Staff retraining', 'None', 'None', 'Every person, every site'],
  ['Data migration risk', 'None', 'None', 'Full export and reimport'],
  ['Answers the phone', '✕', '✓', '✕ (add-on, if available)'],
  ['Facebook / Instagram / WhatsApp', '✕', '✓', 'Usually ✕'],
  ['Online booking page', '✕', '✓', '✓'],
  ['HSP / DVA voucher handling', '✓', '✓', 'Often ✕ (US-built)'],
  ['Support in your time zone', '✓', '✓', 'Frequently offshore'],
];

// Packages - cumulative tiers (Growth = Basic + more, Premium = Growth +
// more). No pricing on this page by design - quoted per practice on the
// demo call. Each card ends in a Book a Demo button instead of a price.
// Each item is [what it costs you if you don't have this, the feature that
// fixes it, how]. The first part carries the weight - a practice owner
// weighs the subscription cost against what happens if they do nothing,
// not against a list of feature names.
const PACKAGES = [
  {
    tier: 'Basic',
    tagline: "Every patient who wants to book, books — even at 9pm, even from a Google ad.",
    plus: 'What this changes',
    items: [
      ['Stop the logistical overload.', 'Online booking page', 'on your website showing your real availability. Patients book themselves in at any hour, including anyone arriving from a paid ad, so your front desk stops being the bottleneck between an interested patient and a booked appointment.'],
      ['Reduce no-shows drastically.', 'Confirmations by text', 'before every visit. Patients confirm with one reply, so you walk into the day knowing who is actually coming instead of finding out at 9am.'],
      ['Boost your SEO, fast.', 'Google review requests', 'sent automatically after every completed appointment. Review volume is the single biggest lever on where you rank in local search, and most clinics never ask.'],
    ],
  },
  {
    tier: 'Growth',
    tagline: 'No enquiry goes cold and no recall is missed. Every channel answered within seconds.',
    plus: 'Everything in Basic, plus',
    items: [
      ['Never miss an HSP voucher renewal or annual review again.', 'Automated recalls', 'contact pensioner, DVA and private patients when their maintenance renewal, annual review or five-year voucher upgrade is due. Checked against Fitting Wizard first, so nobody who was just seen gets called and nobody due falls through.'],
      ['Stop wasting ad spend on leads you never reply to.', 'Facebook, Instagram and WhatsApp agents', 'answer and book within seconds of a patient messaging — not the next morning, by which point you have paid for a lead that booked somewhere else.'],
      ['Stop wasting admin hours on the diary.', 'Cancel, reschedule and two-way text conversations', 'let patients move their own appointment by replying. Your diary updates itself and your reception stops playing phone tag.'],
      ['Stop losing what is sitting in your inbox.', 'Email agent', 'reads your clinic inbox, replies and books directly from it, so an enquiry sent at 10pm is handled at 10pm.'],
      ['Turn every referrer into a direct booking channel.', 'Private referral portal', 'GPs, ENTs, aged care homes and corporate partners see only your free slots and book the patient themselves, with no access to patient information.'],
    ],
  },
  {
    tier: 'Premium',
    tagline: 'Run the front office like a business you can see, not one you have to guess at.',
    plus: 'Everything in Growth, plus',
    items: [
      ['Never leave a cancelled slot empty.', 'Waiting-list backfill', 'offers it straight to your waiting list the moment it opens up, so a late cancellation costs you nothing.'],
      ['Answer the questions patients ask before they call.', 'Website chat', 'handles common questions and books the appointment itself.'],
      ['Get paid, and cut no-shows further.', 'Payments and deposits', 'taken at the time of booking.'],
      ['Bring dormant patients back without a call list.', 'Reactivation campaigns', 'reach an old database in one go, on your terms.'],
      ['See what is actually working.', 'Owner dashboard', 'shows revenue, bookings, cancellations, no-shows, devices sold and which advertising genuinely brought patients in. A number, not a guess.'],
    ],
    soon: [
      ['Get hours back every month.', 'Accounting integration', 'pushes sales from Fitting Wizard into Xero, MYOB or QuickBooks, instead of exporting a file and accepting every invoice by hand.'],
      ['Go paperless without losing anything.', 'Paperless forms and signatures', 'consent, HSP and history forms signed on an iPad or by link, filed straight back into the patient record.'],
    ],
    soonNote: 'Accounting integration and paperless forms are in active development. Premium includes both on release at no extra cost.',
  },
];

// Sits outside the tiered packages above - priced separately once we know
// what the work actually involves.
const ALSO_AVAILABLE = [
  {
    title: 'AI Phone Receptionist',
    desc: 'Answers your phone around the clock, books, reschedules and cancels straight into Fitting Wizard, and passes urgent calls to a person. Priced on call volume, so it sits outside the packages.',
  },
  {
    title: 'Website, email and technical work',
    items: [
      ['Website fixes or rebuild', 'audited first, then quoted'],
      ['Maintenance, SEO and blog posts', 'fixed monthly retainer'],
      ['Email and IT support', 'fixing email that bounces or goes missing, setting up a proper business address, and looking after it from there'],
      ['Server and network setup', 'remote desktop, cloud or on-premise, after a technical check'],
    ],
  },
];

const FAQS = [
  ['Does anything change in how we use Fitting Wizard?', "No. Your Wizard, your data and your workflow stay exactly as they are. The assistant creates properly linked, tagged appointments alongside your team's — it doesn't replace anything your staff do."],
  ['What if the assistant books something wrong?', 'Every automated appointment is tagged so your front desk can spot it instantly. Your staff can move, edit or cancel it like any other appointment, and their change always takes priority.'],
  ['We run multiple clinics on one server. Does that work?', 'Yes. The connector is installed per system, including Habitat3-hosted and other remote-desktop environments, and books against the correct site and practitioner for each location.'],
  ['How does it handle pensioner, HSP and DVA patients?', 'It asks the funding question during booking and tags it in Fitting Wizard. Your team still does the HSP portal work, because that is a government system and it should stay with a person.'],
  ['What if two patients have the same name?', 'Every record gets a deterministic patient ID built from the name and phone number, so the agent matches the right person or creates a new record.'],
  ['How long does setup take?', "Once you've seen a demo and are happy to proceed, most practices are live in about five days. We install the connector remotely, connect your channels, and test with your team before anything is patient-facing."],
  ['What does it cost?', 'It depends on which channels you actually use — sized to your practice on the demo call, not published as a flat rate.'],
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
              <a href="/demo" style={{ textDecoration: 'none' }}>
                <button style={{ padding: '18px 28px', background: ink, color: bg, border: 0, fontSize: 12, fontWeight: 600, letterSpacing: '.15em', fontFamily: 'inherit', cursor: 'pointer' }}>
                  SEE A BOOKING LAND IN FITTING WIZARD →
                </button>
              </a>
              <a href="#how-it-works" style={{ textDecoration: 'none' }}>
                <button style={{ padding: '18px 28px', background: 'transparent', color: ink, border: `1px solid ${ink}`, fontSize: 12, fontWeight: 600, letterSpacing: '.15em', fontFamily: 'inherit', cursor: 'pointer' }}>
                  HOW IT WORKS
                </button>
              </a>
              <a href="https://wa.me/64221997445" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
                <button style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '18px 24px', background: '#25D366', color: '#fff', border: 0, fontSize: 12, fontWeight: 600, letterSpacing: '.15em', fontFamily: 'inherit', cursor: 'pointer' }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="#fff" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.39a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.13a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.35c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.25 8.24Zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.24.24-.4.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.24-.87.85-.87 2.08s.89 2.41 1.02 2.58c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.07-.11-.23-.17-.48-.29Z"/>
                  </svg>
                  WHATSAPP US
                </button>
              </a>
            </div>
            <p style={{ fontFamily: '"Geist Mono", monospace', fontSize: 11, color: muted, letterSpacing: '.1em', marginTop: 24, lineHeight: 1.8 }}>
              LIVE IN ABOUT 5 DAYS · HOSTED IN AUSTRALIA · NO BUILD FEE, NO SETUP FEE
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13.5, color: muted, marginTop: 10 }}>
              Or call the team directly: <a href="tel:+61468093675" style={{ color: ink, borderBottom: `1px solid ${accent}`, textDecoration: 'none' }}>+61 468 093 675</a>
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ChatMock />
          </Reveal>
        </div>
      </section>

      {/* ─── WHAT DEVSTRUM DOES ─── */}
      <Reveal as="section" style={{ padding: `clamp(48px, 9vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16, fontFamily: '"Geist Mono", monospace' }}>WHAT DEVSTRUM DOES</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 auto 40px', maxWidth: 700 }}>
          Every way a patient reaches you, one system.
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
          {CHANNELS.map(c => (
            <span key={c} style={{ fontFamily: '"Geist Mono", monospace', fontSize: 11, color: muted, border: `1px solid ${rule}`, borderRadius: 3, padding: '5px 10px' }}>{c}</span>
          ))}
        </div>
        <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 18, color: accent, margin: '10px 0' }}>↓</div>
        <div style={{ display: 'inline-block', fontFamily: '"Geist Mono", monospace', fontSize: 12, letterSpacing: '.15em', color: '#fff', background: ink, borderRadius: 3, padding: '10px 22px', marginBottom: 10 }}>DEVSTRUM</div>
        <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 18, color: accent, margin: '10px 0' }}>↓</div>
        <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 12, letterSpacing: '.1em', color: ink, marginBottom: 48 }}>YOUR FITTING WIZARD · DASHBOARD · REMINDERS · RECALLS · REVIEWS</div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 1, background: rule, border: `1px solid ${rule}`, maxWidth: 1000, margin: '0 auto', textAlign: 'left' }}>
          {PROOF_TILES.map(([t, d]) => (
            <div key={t} style={{ background: bg, padding: 28 }}>
              <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 19, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 10 }}>{t}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.6, color: muted, margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </Reveal>

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

      {/* ─── PACKAGES ─── */}
      {/* Deliberately no prices - quoted per practice on the demo call. Each
          card ends in a Book a Demo button instead of a number. */}
      <div id="packages" style={{ scrollMarginTop: 60 }} />
      <Reveal as="section" style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>PACKAGES</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 auto 16px', maxWidth: 760 }}>
          The enquiries you miss tonight don't call back tomorrow.
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.6, color: muted, maxWidth: 660, margin: '0 auto 56px' }}>
          Every package builds on the one before it. Each is priced against what an unanswered enquiry or an empty slot already costs you — scoped to your clinics and quoted on the demo call.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 16, maxWidth: 1100, margin: '0 auto', textAlign: 'left', alignItems: 'start' }}>
          {PACKAGES.map((pkg) => (
            <div key={pkg.tier} style={{ background: bg, border: `1px solid ${rule}`, borderRadius: 4, padding: 28, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 6 }}>{pkg.tier}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13.5, lineHeight: 1.5, color: muted, margin: '0 0 18px' }}>{pkg.tagline}</p>
              <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 10.5, letterSpacing: '.1em', color: accent, textTransform: 'uppercase', marginBottom: 12 }}>{pkg.plus}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
                {pkg.items.map(([hook, feature, desc], i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: accent, fontWeight: 700, fontSize: 14, lineHeight: 1.45, flexShrink: 0 }}>✓</span>
                    <div>
                      <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 13.5, fontWeight: 700, color: ink, lineHeight: 1.45 }}>{hook}</div>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.5, color: muted, margin: '3px 0 0' }}>
                        <span style={{ color: accent, fontWeight: 600 }}>{feature}</span> {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {pkg.soon && (
                <div style={{ marginTop: 16, paddingTop: 14, borderTop: `1px dashed ${rule}` }}>
                  {pkg.soon.map(([hook, feature, desc], i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                      <span style={{ fontSize: 9, color: muted, border: `1px solid ${rule}`, borderRadius: 3, padding: '2px 6px', fontFamily: '"Geist Mono", monospace', letterSpacing: '.08em', whiteSpace: 'nowrap', flexShrink: 0, marginTop: 2 }}>SOON</span>
                      <div>
                        <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 13.5, fontWeight: 700, color: ink, lineHeight: 1.45 }}>{hook}</div>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.5, color: muted, margin: '3px 0 0' }}>
                          <span style={{ color: accent, fontWeight: 600 }}>{feature}</span> {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, lineHeight: 1.5, color: muted, margin: '4px 0 0', fontStyle: 'italic' }}>{pkg.soonNote}</p>
                </div>
              )}
              <a href="/demo" style={{ textDecoration: 'none', marginTop: 22 }}>
                <button style={{ width: '100%', padding: '14px 18px', background: ink, color: bg, border: 0, fontSize: 12, fontWeight: 600, letterSpacing: '.12em', fontFamily: '"Geist Mono", monospace', cursor: 'pointer' }}>
                  BOOK A DEMO →
                </button>
              </a>
            </div>
          ))}
        </div>
      </Reveal>

      {/* ─── ALSO AVAILABLE, QUOTED SEPARATELY ─── */}
      <Reveal as="section" style={{ padding: `clamp(40px, 8vw, 64px) ${PAD_X}`, borderTop: `1px solid ${ink}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 11, color: muted, letterSpacing: '.2em', marginBottom: 24, fontFamily: '"Geist Mono", monospace', textAlign: 'center' }}>ALSO AVAILABLE, QUOTED SEPARATELY</div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 16, textAlign: 'left' }}>
            {ALSO_AVAILABLE.map((block) => (
              <div key={block.title} style={{ background: bg, border: `1px solid ${rule}`, borderRadius: 4, padding: 26 }}>
                <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 17, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 10 }}>{block.title}</div>
                {block.desc && (
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13.5, lineHeight: 1.6, color: muted, margin: 0 }}>{block.desc}</p>
                )}
                {block.items && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {block.items.map(([title, desc], i) => (
                      <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{ color: accent, fontWeight: 700, fontSize: 14, lineHeight: 1.4, flexShrink: 0 }}>✓</span>
                        <div>
                          <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 13.5, fontWeight: 700, color: ink, lineHeight: 1.4 }}>{title}</div>
                          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.5, color: muted, margin: '2px 0 0' }}>{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ─── SHOULD YOU SWITCH INSTEAD ─── */}
      <Reveal as="section" style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>THE ALTERNATIVE</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 auto 16px', maxWidth: 760 }}>
          The migration you are considering costs more than you think.
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.6, color: muted, maxWidth: 700, margin: '0 auto 48px' }}>
          Switching practice management systems is a four-to-six-month operations project, not a software decision. Devstrum goes live in five days on the Fitting Wizard your team already knows.
        </p>
        <div style={{ overflowX: 'auto', maxWidth: 1000, margin: '0 auto' }}>
          <table style={{ width: '100%', minWidth: 600, borderCollapse: 'collapse', textAlign: 'left', fontFamily: 'Inter, sans-serif', fontSize: 13.5 }}>
            <thead>
              <tr>
                <th style={{ padding: '10px 14px', borderBottom: `2px solid ${ink}`, fontFamily: '"Geist Mono", monospace', fontSize: 10.5, letterSpacing: '.1em', color: muted }}></th>
                <th style={{ padding: '10px 14px', borderBottom: `2px solid ${ink}`, fontFamily: '"Geist Mono", monospace', fontSize: 10.5, letterSpacing: '.1em' }}>STAY ON FW</th>
                <th style={{ padding: '10px 14px', borderBottom: `2px solid ${ink}`, fontFamily: '"Geist Mono", monospace', fontSize: 10.5, letterSpacing: '.1em', color: accent }}>FW + DEVSTRUM</th>
                <th style={{ padding: '10px 14px', borderBottom: `2px solid ${ink}`, fontFamily: '"Geist Mono", monospace', fontSize: 10.5, letterSpacing: '.1em', color: muted }}>MIGRATE TO CLOUD PMS</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map(([label, a, b, c], i) => (
                <tr key={label} style={{ background: i % 2 ? 'rgba(14,26,43,.03)' : 'transparent' }}>
                  <td style={{ padding: '10px 14px', fontWeight: 500 }}>{label}</td>
                  <td style={{ padding: '10px 14px', color: muted }}>{a}</td>
                  <td style={{ padding: '10px 14px', color: ink, fontWeight: 600 }}>{b}</td>
                  <td style={{ padding: '10px 14px', color: muted }}>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <a href="/demo" style={{ display: 'inline-block', marginTop: 28, fontSize: 12, color: muted, letterSpacing: '.1em', textDecoration: 'none', borderBottom: `1px solid ${accent}`, paddingBottom: 3, fontFamily: '"Geist Mono", monospace' }}>BOOK A DEMO →</a>
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
