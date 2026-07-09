import { THEME, gridBg, CornerTicks, SiteNav, SiteFooter, IntegrationsBanner, PAD_X, Reveal, SEO } from './theme.jsx';

// ServicesPage - Devstrum services detail page
// Depends on: theme.jsx

const SERVICES_DETAIL = [
  {
    n: 'A.1', t: 'Automation Audit',
    d: 'A free diagnostic across your operations. We map your workflows, spot the bottlenecks, and pick the highest-leverage wedge - the one automation that pays for the rest. No commitment, 30-minute call.',
    who: 'Founders who know they need AI but not where to start.',
    get: ['Workflow map + automation opportunities', 'Ranked list, sized by time & cost saved', 'A recommended first build + budget'],
    time: 'free · 30-min call',
  },
  {
    n: 'A.2', t: 'AI Workflow Automation',
    d: 'Custom workflows that eliminate repetitive work - customer service, data entry, lead qualification and routing - embedded directly in the tools your team already uses.',
    who: 'Teams buried in repeatable, manual admin.',
    get: ['Working automations in your stack', 'Guardrails on what runs automatically', 'Handoff runbook + full documentation'],
    time: '2–6 weeks',
  },
  {
    n: 'A.3', t: 'WhatsApp & Communication',
    d: 'Respond to customers instantly on WhatsApp, email, and social - 24/7, without hiring more staff. Appointment reminders, follow-up sequences, and pre/post-sales support that converts.',
    who: 'Businesses losing leads to slow, manual replies.',
    get: ['WhatsApp Business API integration', 'Automated reminders & follow-ups', 'Usage analytics + a feedback loop'],
    time: '2–6 weeks',
  },
  {
    n: 'A.4', t: 'Websites & Maintenance',
    d: 'Fast, modern, mobile-first websites that actually convert - plus ongoing maintenance and updates so you never worry about tech again. AI chatbot lead capture built in.',
    who: 'Businesses with an outdated, slow, or unmaintained site.',
    get: ['Custom, conversion-optimised website', 'Ongoing maintenance & updates', 'AI chatbot for lead capture'],
    time: '2–5 weeks · + monthly upkeep',
  },
  {
    n: 'A.5', t: 'Custom Tool Integrations',
    d: 'Connect your CRM, email, calendar, and business apps so nothing falls through the cracks. We automate the data flow between the systems you already pay for.',
    who: 'Teams stuck copy-pasting between disconnected tools.',
    get: ['CRM integrations (HubSpot, Salesforce, Zoho)', 'Calendar, scheduling & payment automation', 'Custom API development'],
    time: '2–6 weeks',
  },
  {
    n: 'A.6', t: 'Monthly Growth Partnership',
    d: 'An ongoing partner, not a one-off project. We monitor, optimise, and expand your automations as your business grows - senior, async-first, month-to-month.',
    who: 'Businesses who want continuous improvement, not a hand-off and goodbye.',
    get: ['A dedicated senior builder', 'Continuous monitoring & optimisation', 'Cancel anytime, no lock-in'],
    time: 'monthly',
  },
];

const ServicesPage = () => {
  const { bg, ink, accent, muted, rule } = THEME;
  return (
    <div style={{ background: bg, color: ink, fontFamily: '"Geist Mono", monospace', minHeight: '100%' }} data-screen-label="Services">
      <SEO
        title="AI Automation Services — Audits, Workflows, WhatsApp & Websites"
        description="Six ways Devstrum's AI automation agency puts AI to work: free automation audits, AI workflow automation, WhatsApp & communication agents, websites & maintenance, custom tool integrations, and a monthly growth partnership."
        path="/services"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: SERVICES_DETAIL.map((s, i) => ({
            '@type': 'Service',
            position: i + 1,
            name: s.t,
            description: s.d,
            provider: { '@type': 'ProfessionalService', name: 'Devstrum' },
          })),
        }}
      />
      <SiteNav active="services" />

      <Reveal as="section" style={{ position: 'relative', padding: `clamp(48px, 10vw, 72px) ${PAD_X} clamp(36px, 8vw, 56px)`, backgroundImage: gridBg, textAlign: 'center' }}>
        <CornerTicks />
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 24 }}>SERVICES</div>
        <h1 style={{ fontFamily: '"Geist", sans-serif', fontWeight: 600, fontSize: 'clamp(38px, 9vw, 80px)', lineHeight: .96, letterSpacing: '-0.05em', margin: '0 auto 24px', maxWidth: 780 }}>
          Six ways we make AI <span style={{ color: accent }}>pay for itself.</span>
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.5, color: muted, maxWidth: 620, margin: '0 auto' }}>
          Every engagement is scoped to a measurable outcome - hours reclaimed, labour cost cut, revenue created. Start with a free audit, then pick one or run several in sequence.
        </p>
      </Reveal>

      <IntegrationsBanner />

      <section style={{ padding: `clamp(48px, 10vw, 96px) ${PAD_X}`, textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {SERVICES_DETAIL.map((s, i) => (
            <Reveal key={s.n} delay={Math.min(i * 0.06, 0.3)} style={{ padding: '48px 0', borderTop: i === 0 ? 'none' : `1px solid ${rule}` }}>
              <div style={{ fontSize: 12, color: accent, letterSpacing: '.15em', fontFamily: '"Geist Mono", monospace', marginBottom: 12 }}>{s.n}</div>
              <h3 style={{ fontFamily: '"Geist", sans-serif', fontSize: 'clamp(28px, 6vw, 36px)', fontWeight: 600, letterSpacing: '-0.03em', margin: '0 0 16px' }}>{s.t}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.6, color: muted, margin: '0 auto 16px', maxWidth: 560 }}>{s.d}</p>
              <div style={{ fontSize: 13, color: ink, fontFamily: 'Inter, sans-serif', marginBottom: 24 }}>
                <span style={{ color: muted }}>Best for: </span>{s.who}
              </div>
              <div style={{ fontSize: 10, color: muted, letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: 14 }}>What you get</div>
              <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.9, color: ink, padding: 0, listStyle: 'none', margin: '0 0 20px' }}>
                {s.get.map(g => <li key={g}>{g}</li>)}
              </ul>
              <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 11, color: accent, letterSpacing: '.1em', paddingTop: 12, borderTop: `1px dashed ${rule}`, display: 'inline-block' }}>{s.time}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter heading="Pick a wedge." headingAccent="Let's start there." />
    </div>
  );
};

export default ServicesPage;
