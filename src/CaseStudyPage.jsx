import { THEME, gridBg, CornerTicks, SiteNav, SiteFooter, FaviconOrInitials, PAD_X } from './theme.jsx';

// CaseStudyPage - Devstrum Work page (centered): what we've built + work by client/vertical
// Real engagement types described by vertical; no fabricated metrics.

// AI systems Devstrum has shipped - the Home page teasers, in full
const AI_PROJECTS = [
  ['WhatsApp support agent', "Built on Meta's WhatsApp BSP · handles pre-sales, post-sales & FAQ deflection", '24/7 coverage'],
  ['Voice agent · pre & post-sales', 'Built on Ringg · inbound/outbound call handling, booking, follow-up', 'instant response'],
  ['Documentation & admin automation', 'Internal knowledge retrieval, drafting, and back-office workflows', 'less admin overhead'],
  ['Lead qualification & routing', 'Scores and routes inbound leads to the right rep in real time', 'faster follow-up'],
];

// What we've built, by client / vertical (described, not invented)
const CLIENT_WORK = [
  {
    vertical: 'HEALTHCARE & SPORTS MEDICINE',
    who: "Physiotherapy, rehab & sports-medicine teams — including the medical team behind India's Olympic and FIFA athletes.",
    built: ['WhatsApp appointment reminders & confirmations', 'Voice agents for booking & patient intake', 'Patient engagement and follow-up automation'],
  },
  {
    vertical: 'REAL ESTATE',
    who: "One of India's largest property developers.",
    built: ['Lead qualification & instant routing to sales', 'WhatsApp & voice follow-up sequences', 'Reactivation campaigns across the pipeline'],
  },
  {
    vertical: 'MEDIA & PRODUCTION',
    who: "House of Shafaq — one of Dubai's largest media houses (Devstrum supporter & client).",
    built: ['WhatsApp support & enquiry agents', 'Content-operations automation', 'AI lead capture across channels'],
  },
  {
    vertical: 'CLINICS & AUDIOLOGY',
    who: 'Hearing, dental and multi-specialty clinics across the UK, UAE and Australia.',
    built: ['24/7 WhatsApp & website chat agents', 'Automated reminders & no-show reduction', 'CRM & calendar integrations'],
  },
];

// Voice/WhatsApp deployments via our Ringg partnership
const RINGG_PROJECTS = [
  { name: 'noon', domain: 'noon.com' },
  { name: 'Tabby', domain: 'tabby.ai' },
  { name: 'Tamara', domain: 'tamara.co' },
];

// Backer's brand & production work (House of Shafaq) - linked out to houseofshafaq.com
const HOS_PROJECTS = [
  ['Mokobara Ads', 'Mid-level ads', 'https://www.houseofshafaq.com/projects/mokobara-ads'],
  ['Honest Bowl · Organic Content', 'Reels', 'https://www.houseofshafaq.com/projects/honest-bowl'],
  ['Rebel Foods · Adrenaline Campaign', 'Mid-level ads', 'https://www.houseofshafaq.com/projects/the-500-calorie-project'],
  ['Dubai Cares Video', 'Reels', 'https://www.houseofshafaq.com/projects/dubai-cares-video'],
  ['SaadSells · Organic Content', 'Reels', 'https://www.houseofshafaq.com/projects/saadsells-organic-content'],
  ['Adil Qadri Perfumes', 'Reels', 'https://www.houseofshafaq.com/projects/adil-qadri-organic-content'],
  ['Brands for Less · Eid Campaign', 'Mid-level ads', 'https://www.houseofshafaq.com/projects/eid-campaign'],
  ['Kibs', 'Mid-level ads', 'https://www.houseofshafaq.com/projects/kibs'],
];

const CaseStudyPage = () => {
  const { bg, ink, accent, muted, rule } = THEME;
  return (
    <div style={{ background: bg, color: ink, fontFamily: '"Geist Mono", monospace', minHeight: '100%' }} data-screen-label="Work">
      <SiteNav active="work" />

      {/* Hero */}
      <section style={{ position: 'relative', padding: `clamp(48px, 10vw, 72px) ${PAD_X} clamp(36px, 8vw, 56px)`, backgroundImage: gridBg, textAlign: 'center' }}>
        <CornerTicks />
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 24 }}>WORK</div>
        <h1 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(38px, 9vw, 80px)', fontWeight: 600, letterSpacing: '-0.05em', margin: '0 auto 24px', lineHeight: .96, maxWidth: 820 }}>
          What we've <span style={{ color: accent }}>built.</span>
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.55, color: muted, maxWidth: 660, margin: '0 auto' }}>
          Live AI systems shipped for real teams - across healthcare and sports medicine, real estate, and media - from WhatsApp and voice agents to lead automation and integrations.
        </p>
      </section>

      {/* AI systems shipped */}
      <section style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>AI SYSTEMS SHIPPED</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(28px, 6vw, 44px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 auto 48px' }}>What we build, to name a few.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 1, background: rule, border: `1px solid ${rule}`, maxWidth: 1000, margin: '0 auto' }}>
          {AI_PROJECTS.map(([t, d, o]) => (
            <div key={t} style={{ background: bg, padding: 28 }}>
              <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 10 }}>{t}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.6, color: muted, margin: '0 0 14px' }}>{d}</p>
              <div style={{ fontSize: 11, color: accent, fontFamily: '"Geist Mono", monospace', letterSpacing: '.05em' }}>{o}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Work by client / vertical */}
      <section style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>WORK BY CLIENT</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(28px, 6vw, 44px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 auto 16px' }}>Who we build for.</h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: muted, maxWidth: 620, margin: '0 auto 56px' }}>
          A snapshot of the teams we've shipped for across four continents.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, background: rule, border: `1px solid ${rule}`, maxWidth: 1000, margin: '0 auto' }}>
          {CLIENT_WORK.map((c) => (
            <div key={c.vertical} style={{ background: bg, padding: 32 }}>
              <div style={{ fontSize: 10, color: accent, letterSpacing: '.2em', marginBottom: 12 }}>{c.vertical}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.55, color: ink, margin: '0 auto 20px', maxWidth: 360 }}>{c.who}</p>
              <div style={{ fontSize: 9, color: muted, letterSpacing: '.15em', marginBottom: 12 }}>WHAT WE BUILT</div>
              <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.9, color: muted, padding: 0, listStyle: 'none', margin: 0 }}>
                {c.built.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Voice & WhatsApp via Ringg */}
      <section style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>VOICE &amp; WHATSAPP · VIA RINGG</div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: muted, maxWidth: 560, margin: '0 auto 24px' }}>Our preferred voice AI partner Ringg powers deployments for names like:</p>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
          {RINGG_PROJECTS.map(c => (
            <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <FaviconOrInitials name={c.name} domain={c.domain} size={22} />
              <span style={{ fontFamily: '"Geist", sans-serif', fontSize: 16, color: ink }}>{c.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Backer's track record */}
      <section style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>OUR BACKER'S TRACK RECORD · HOUSE OF SHAFAQ</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: 600, letterSpacing: '-0.03em', margin: '0 auto 12px' }}>The network behind us.</h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: muted, maxWidth: 620, margin: '0 auto 40px' }}>
          Devstrum is backed by Saad Mohammed and House of Shafaq's decade of brand and production work across the region - a sample below, more at{' '}
          <a href="https://www.houseofshafaq.com/projects" target="_blank" rel="noopener" style={{ color: ink, borderBottom: `1px solid ${accent}`, textDecoration: 'none' }}>houseofshafaq.com/projects</a>.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 1, background: rule, border: `1px solid ${rule}`, maxWidth: 1000, margin: '0 auto' }}>
          {HOS_PROJECTS.map(([t, cat, href]) => (
            <a key={t} href={href} target="_blank" rel="noopener" className="ds-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ background: bg, padding: 22, height: '100%', boxSizing: 'border-box' }}>
                <div style={{ fontSize: 9, color: muted, letterSpacing: '.15em', marginBottom: 10 }}>{cat.toUpperCase()}</div>
                <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.3 }}>{t}</div>
                <div style={{ fontSize: 11, color: accent, marginTop: 10 }}>VIEW PROJECT →</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <SiteFooter heading="Want a result" headingAccent="like these?" />
    </div>
  );
};

export default CaseStudyPage;
