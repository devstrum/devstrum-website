import { THEME, gridBg, CornerTicks, SiteNav, SiteFooter, BOOKING_URL, IntegrationsBanner, TrustedByBar, PartnersStrip, PAD_X } from './theme.jsx';

// HomePage - Devstrum homepage (fully centered layout)
// Depends on: theme.jsx

const HomePage = () => {
  const { bg, ink, accent, muted, rule } = THEME;

  return (
    <div style={{ background: bg, color: ink, fontFamily: '"Geist Mono", monospace', minHeight: '100%' }} data-screen-label="Home">
      <SiteNav active="home" />

      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', padding: `clamp(48px, 10vw, 72px) ${PAD_X} clamp(36px, 8vw, 56px)`, backgroundImage: gridBg, textAlign: 'center' }}>
        <CornerTicks />
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <span style={{ width: 24, height: 1, background: accent }}></span>
            AI AUTOMATION FOR FOUNDERS &amp; SCALING BUSINESSES
            <span style={{ width: 24, height: 1, background: accent }}></span>
          </div>
          <h1 style={{ fontFamily: '"Geist", sans-serif', fontWeight: 600, fontSize: 'clamp(44px, 11vw, 104px)', lineHeight: .94, letterSpacing: '-0.05em', margin: 0 }}>
            AI that pays<br />for <span style={{ color: accent }}>itself.</span>
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 19, lineHeight: 1.5, color: muted, maxWidth: 620, margin: '32px auto 0' }}>
            We build custom AI automations that cut labour costs and free your team to focus on revenue - workflows, WhatsApp, websites, and the tools in between. Delivered in weeks, not quarters.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={BOOKING_URL} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '14px 26px', background: ink, color: bg, border: 0, fontSize: 12, fontWeight: 600, letterSpacing: '.18em', fontFamily: 'inherit', cursor: 'pointer' }}>BOOK A FREE AUDIT →</button>
            </a>
            <a href="/services" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '14px 26px', background: bg, color: ink, border: `1px solid ${ink}`, fontSize: 12, fontWeight: 600, letterSpacing: '.18em', fontFamily: 'inherit', cursor: 'pointer' }}>SEE SERVICES</button>
            </a>
          </div>
          <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24, maxWidth: 620, margin: '56px auto 0' }}>
            {[['40–60%', 'labour cost cut on repetitive work'], ['24/7', 'automations that never sleep'], ['2–6 wks', 'from audit to live']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(22px, 4vw, 28px)', fontWeight: 600, letterSpacing: '-0.03em', color: ink }}>{n}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: muted, marginTop: 4, letterSpacing: '.05em' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUSTED BY ─── */}
      <TrustedByBar center />

      {/* ─── SOCIAL PROOF ─── */}
      <div style={{ padding: `14px ${PAD_X}`, borderBottom: `1px solid ${rule}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap', fontSize: 12, color: muted, fontFamily: '"Geist Mono", monospace', textAlign: 'center' }}>
        <span>BACKED &amp; VOUCHED FOR BY DUBAI CREATOR →</span>
        <a href="https://www.instagram.com/saadsells" target="_blank" rel="noopener" style={{ color: ink, borderBottom: `1px solid ${accent}`, textDecoration: 'none' }}>@saadsells</a>
        <span style={{ opacity: .5 }}>·</span>
        <span>Saad Mohammed, House of Shafaq — supporter &amp; client</span>
      </div>

      {/* ─── PARTNERS ─── */}
      <PartnersStrip center />

      {/* ─── INTEGRATIONS ─── */}
      <IntegrationsBanner center />

      {/* ─── WORK INDEX TEASER ─── */}
      <section id="work" style={{ padding: `clamp(48px, 10vw, 80px) ${PAD_X}`, borderTop: `1px solid ${ink}`, borderBottom: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>SELECTED WORK</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(28px, 6vw, 40px)', fontWeight: 600, letterSpacing: '-0.03em', margin: '0 0 40px' }}>What we've shipped.</h2>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {[
            ['WhatsApp support agent', 'ENTERPRISE', '24/7 coverage', '2026'],
            ['Voice agent · pre & post-sales support', 'ENTERPRISE', 'instant response', '2026'],
            ['Documentation & admin automation', 'ENTERPRISE', '−40% admin hours', '2025'],
            ['Lead qualification & routing', 'ENTERPRISE', '2× qualified leads', '2025'],
          ].map(([item, v, o, y], i) => (
            <a key={item} href="/work" className="ds-card-link" style={{ textDecoration: 'none', color: 'inherit', display: 'block', padding: '22px 0', borderTop: i === 0 ? 'none' : `1px solid ${rule}` }}>
              <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(19px, 4vw, 24px)', letterSpacing: '-0.02em', marginBottom: 8 }}>{item}</div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', fontSize: 11, alignItems: 'baseline' }}>
                <span style={{ letterSpacing: '.15em', color: muted }}>{v}</span>
                <span style={{ opacity: .4 }}>·</span>
                <span style={{ color: ink, fontFamily: '"Geist Mono", monospace' }}>{o}</span>
                <span style={{ opacity: .4 }}>·</span>
                <span style={{ letterSpacing: '.15em', color: muted }}>{y}</span>
              </div>
            </a>
          ))}
        </div>
        <a href="/work" style={{ display: 'inline-block', marginTop: 32, fontSize: 11, color: muted, letterSpacing: '.15em', textDecoration: 'none', borderBottom: `1px solid ${accent}`, paddingBottom: 3 }}>VIEW ALL WORK →</a>
      </section>

      {/* ─── SERVICES TEASER ─── */}
      <section style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>SERVICES</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 0 48px' }}>What we deliver.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 1, background: rule, border: `1px solid ${rule}`, maxWidth: 1000, margin: '0 auto' }}>
          {[
            ['A.1', 'Automation Audit', 'Free diagnostic. We map your workflows, find where AI saves the most, and pick the wedge.'],
            ['A.2', 'AI Workflow Automation', 'Automate customer service, data entry, and lead qualification - embedded in the tools you run.'],
            ['A.3', 'Websites & Maintenance', 'Fast, modern sites that convert, plus ongoing upkeep so tech is never your headache.'],
          ].map(([n, t, d]) => (
            <a key={n} href="/services" className="ds-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ background: bg, padding: 28, height: '100%', boxSizing: 'border-box' }}>
                <div style={{ fontSize: 10, color: accent, letterSpacing: '.15em', marginBottom: 12 }}>{n}</div>
                <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12 }}>{t}</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.6, color: muted, margin: 0 }}>{d}</p>
                <div style={{ fontSize: 11, color: accent, letterSpacing: '.1em', marginTop: 16 }}>LEARN MORE →</div>
              </div>
            </a>
          ))}
        </div>
        <a href="/services" style={{ display: 'inline-block', marginTop: 32, fontSize: 11, color: muted, letterSpacing: '.15em', textDecoration: 'none', borderBottom: `1px solid ${accent}`, paddingBottom: 3 }}>ALL SERVICES →</a>
      </section>

      {/* ─── AUTHORITY STRIP ─── */}
      <section style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>WHY DEVSTRUM</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 auto 56px', maxWidth: 760 }}>Senior builders. Real outcomes. No lock-in.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 1, background: rule, border: `1px solid ${rule}`, maxWidth: 1000, margin: '0 auto' }}>
          {[
            ['Senior, not staffed-out', 'Everyone on your project has shipped production AI systems before. No account managers, no bench.'],
            ['Backed by the right people', "Supported by Saad Mohammed of House of Shafaq - his Dubai network opens warm doors, and HOS is a Devstrum client too."],
            ['Model & vendor agnostic', "We don't force one stack. We curate and select whatever model or vendor is best for your use case."],
          ].map(([t, d]) => (
            <div key={t} style={{ background: bg, padding: 32 }}>
              <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12 }}>{t}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.6, color: muted, margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter heading="Let's build your" headingAccent="automation." center />
    </div>
  );
};

export default HomePage;
