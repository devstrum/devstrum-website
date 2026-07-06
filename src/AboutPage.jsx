import React from 'react';
import { THEME, gridBg, CornerTicks, SiteNav, SiteFooter, IntegrationsBanner, FaviconOrInitials, PAD_X, useIsMobile } from './theme.jsx';

// AboutPage - Devstrum About/Team page
// Depends on: theme.jsx

const PRINCIPLES = [
  ['P.1', 'Ship over strategize', 'Decks don\'t move metrics. We scope small, build fast, and measure in production within weeks, not quarters.'],
  ['P.2', 'Handoff, not lock-in', 'Every engagement ends with your team fully briefed and equipped to run the system - documentation, guardrails, and the judgment to operate it day to day.'],
  ['P.3', 'Metrics, not vibes', 'Every project is scoped to a number: hours reclaimed, cost cut, revenue created. If we can\'t measure it, we don\'t sell it.'],
  ['P.4', 'Small, senior team', 'No account managers, no bench. Everyone on your project has shipped production AI systems before.'],
];

const PARTNERS = [
  { name: 'Ringg', domain: 'ringg.ai', tag: 'PREFERRED · VOICE AI', desc: 'Our default stack for any conversational deployment - inbound, outbound, IVR replacement.' },
  { name: 'Meta', domain: 'about.meta.com', tag: 'PREFERRED · WHATSAPP BSP', desc: 'Business Solution Provider partnership backing every WhatsApp agent we deploy.' },
];

const AboutPage = () => {
  const { bg, ink, accent, muted, rule } = THEME;
  const isMobile = useIsMobile();
  return (
    <div style={{ background: bg, color: ink, fontFamily: '"Geist Mono", monospace', minHeight: '100%' }} data-screen-label="About">
      <SiteNav active="about" />

      <section style={{ position: 'relative', padding: `clamp(48px, 10vw, 72px) ${PAD_X} clamp(36px, 8vw, 56px)`, backgroundImage: gridBg, textAlign: 'center' }}>
        <CornerTicks />
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 24 }}>ABOUT</div>
        <h1 style={{ fontFamily: '"Geist", sans-serif', fontWeight: 600, fontSize: 'clamp(36px, 8vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.04em', margin: '0 auto 28px', maxWidth: 780 }}>
          Every company will be <span style={{ color: accent }}>AI-native.</span><br />We just get you there faster.
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.55, color: muted, maxWidth: 640, margin: '0 auto' }}>
          Devstrum is an AI automation studio - engineers and builders who ship production systems for founders and scaling businesses across the UK, UAE, India, and Australia. We don't sell strategy decks - we build the scaffold, ship the system, and hand you the keys.
        </p>
      </section>

      <IntegrationsBanner />

      {/* Backed by Saad */}
      <section style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 24 }}>BACKED BY</div>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ width: 180, height: 180, margin: '0 auto 24px', background: 'rgba(14,26,43,.04)', border: `1px solid ${rule}`, overflow: 'hidden', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
            <img src="/images/saad-mohammed.png" alt="Saad Mohammed" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
          <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(28px, 6vw, 44px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 0 8px' }}>Saad Mohammed</h2>
          <div style={{ fontSize: 12, color: muted, letterSpacing: '.1em', marginBottom: 24 }}>
            FOUNDER, HOUSE OF SHAFAQ · <a href="https://www.instagram.com/saadsells" target="_blank" rel="noopener" style={{ color: accent, textDecoration: 'none' }}>@saadsells</a>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.65, color: 'rgba(14,26,43,.8)', maxWidth: 600, margin: '0 auto 24px' }}>
            Saad built House of Shafaq into one of Dubai's top production and brand studios, working with names like{' '}
            <a href="https://mokobara.com" target="_blank" rel="noopener" style={{ color: 'inherit', borderBottom: `1px solid ${accent}`, textDecoration: 'none' }}>Mokobara</a>,{' '}
            <a href="https://www.rebelfoods.com" target="_blank" rel="noopener" style={{ color: 'inherit', borderBottom: `1px solid ${accent}`, textDecoration: 'none' }}>Rebel Foods</a>, and{' '}
            <a href="https://albacars.ae" target="_blank" rel="noopener" style={{ color: 'inherit', borderBottom: `1px solid ${accent}`, textDecoration: 'none' }}>Alba Cars</a>. As a creator with a large following at{' '}
            <a href="https://www.instagram.com/saadsells" target="_blank" rel="noopener" style={{ color: 'inherit', borderBottom: `1px solid ${accent}`, textDecoration: 'none' }}>@saadsells</a>, Saad backs Devstrum and opens warm doors across his Dubai network - and House of Shafaq is a Devstrum client too. Every engagement starts with an introduction, not a cold pitch.
          </p>
          <div style={{ maxWidth: 600, margin: '0 auto', paddingTop: 20, borderTop: `2px solid ${accent}` }}>
            <p style={{ fontFamily: '"Geist", sans-serif', fontSize: 19, fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.45, margin: '0 0 12px', fontStyle: 'italic' }}>
              "You don't count the pennies. The game is long-term, not short-term - that's true for brand work, and it's true for AI."
            </p>
            <div style={{ fontSize: 12, color: muted, fontFamily: 'Inter, sans-serif' }}>Saad Mohammed · Founder, House of Shafaq</div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, borderTop: `1px solid ${ink}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>PARTNERS</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 auto 56px' }}>The network we build on.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, background: rule, border: `1px solid ${rule}`, maxWidth: 900, margin: '0 auto' }}>
          {PARTNERS.map((p) => (
            <div key={p.name} style={{ background: bg, padding: 28 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
                <FaviconOrInitials name={p.name} domain={p.domain} size={26} />
                <span style={{ fontFamily: '"Geist", sans-serif', fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em' }}>{p.name}</span>
              </div>
              <div style={{ fontSize: 9, color: accent, letterSpacing: '.12em', marginBottom: 10 }}>{p.tag}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.6, color: muted, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 16 }}>HOW WE OPERATE</div>
        <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 600, letterSpacing: '-0.04em', margin: '0 auto 56px' }}>Four principles.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 1, background: rule, border: `1px solid ${rule}`, maxWidth: 900, margin: '0 auto' }}>
          {PRINCIPLES.map(([n, t, d]) => (
            <div key={n} style={{ background: bg, padding: 32 }}>
              <div style={{ fontSize: 10, color: accent, letterSpacing: '.15em', marginBottom: 10 }}>{n}</div>
              <div style={{ fontFamily: '"Geist", sans-serif', fontSize: 24, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12 }}>{t}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.6, color: muted, margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter heading="Want to work" headingAccent="with us?" />
    </div>
  );
};

export default AboutPage;
