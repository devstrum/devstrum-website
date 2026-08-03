import { THEME, gridBg, CornerTicks, SiteNav, SiteFooter, PAD_X, Reveal, SEO } from './theme.jsx';

// PrivacyPolicyPage - Devstrum privacy policy
// Depends on: theme.jsx

const SECTIONS = [
  {
    h: '1. Who we are',
    body: [
      `Devstrum ("Devstrum", "we", "us", "our") is an AI automation agency and consultancy that designs and builds AI automation, WhatsApp Business Platform integrations, voice AI, and CRM integration systems for founders and growing businesses across Australia, the UK, and the UAE. Devstrum operates this website, devstrum.com, and also operates scaffoldvs.com under the Scaffold Venture Studio brand.`,
      `This Privacy Policy explains how we collect, use, and protect information when you visit devstrum.com, contact us, or book a call with us, and when we provide automation and integration services - including WhatsApp Business Platform services and our Fitting Wizard product - to a client business on that client's behalf.`,
    ],
  },
  {
    h: '2. Information we collect',
    body: [
      `Contact & booking information. When you submit our contact form, email us, or book a call through our scheduling tools, we collect your name, email address, phone number, company name, and any details you choose to share about your project.`,
      `Website usage data. Like most websites, we automatically collect information about how you use devstrum.com - such as IP address, browser and device type, pages viewed, and referring URLs - through standard analytics tools.`,
      `Client and WhatsApp / voice AI data. When we build or operate automations for a client business - including WhatsApp Business Platform (Meta) integrations, voice AI deployments with Ringg, CRM connections such as HubSpot, Zoho, or Salesforce, or Fitting Wizard bookings for audiology clinics - we may process data on that client's behalf, such as message content and metadata, call transcripts, or appointment details exchanged between the client and its own customers. We only access this data to build, test, and operate the systems the client has engaged us to deliver.`,
    ],
  },
  {
    h: '3. How we use information',
    body: [
      `We use the information above to respond to enquiries and book calls; scope, build, test, and support automation and integration projects; operate WhatsApp Business Platform, voice AI, and CRM workflows for clients as instructed; improve this website; and meet our legal and contractual obligations.`,
    ],
  },
  {
    h: '4. WhatsApp Business Platform & Meta data',
    body: [
      `Devstrum acts as a technology and solution provider integrating the WhatsApp Business Platform on behalf of client businesses. Where we process WhatsApp message data or other data through Meta's platforms:`,
    ],
    list: [
      `We process that data solely on behalf of, and per the instructions of, the client business - never for our own independent purposes, and never sold or shared with unrelated third parties.`,
      `Meta processes message data as part of operating the WhatsApp Business Platform (for example, message delivery, security, and platform integrity), consistent with Meta's Business Tools terms and the WhatsApp Business Solution Terms.`,
      `The client business remains responsible for obtaining its own end users' consent and providing its own notices for the messages it sends and receives.`,
      `We retain access to this data only for as long as necessary to deliver and support the client's systems, and we apply reasonable technical and organizational safeguards to protect it.`,
    ],
  },
  {
    h: '5. Cookies & analytics',
    body: [
      `This website uses cookies and similar technologies to remember basic preferences and to understand aggregate traffic through analytics tools. You can control cookies through your browser settings; disabling them may limit some site functionality.`,
    ],
  },
  {
    h: '6. How we share information',
    body: [`We do not sell your personal information. We may share it with:`],
    list: [
      `Service providers who help us run this business and deliver client projects - including Meta / the WhatsApp Business Platform, Ringg (voice AI), scheduling tools, CRM platforms such as HubSpot, Zoho, and Salesforce, and hosting and analytics providers - each acting under their own applicable terms;`,
      `Professional advisors or authorities, where required by law; and`,
      `A successor entity in the event of a merger, acquisition, or sale of business assets.`,
    ],
  },
  {
    h: '7. Data retention',
    body: [
      `We retain contact and booking information for as long as needed to respond to your enquiry and maintain business records, and client / WhatsApp / voice AI data for as long as we support that client's systems, after which it is deleted or anonymized unless a longer period is required by law or a client agreement.`,
    ],
  },
  {
    h: '8. Data security',
    body: [
      `We use reasonable administrative, technical, and physical safeguards designed to protect information against unauthorized access, loss, or misuse. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.`,
    ],
  },
  {
    h: '9. Your rights & choices',
    body: [
      `Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal information, or to withdraw consent. To exercise these rights, contact us at sumanth@devstrum.com.`,
    ],
  },
  {
    h: '10. International data transfers',
    body: [
      `We and our service providers - including Meta, Ringg, and the other tools listed above - may process information outside your country of residence, including in the United States. Where this happens, we take reasonable steps to ensure it is handled consistently with this Policy.`,
    ],
  },
  {
    h: "11. Children's privacy",
    body: [
      `Our services are directed at businesses, not children. We do not knowingly collect personal information from individuals under 18.`,
    ],
  },
  {
    h: '12. Changes to this policy',
    body: [
      `We may update this Privacy Policy from time to time. Material changes will be reflected by an updated effective date at the top of this page.`,
    ],
  },
  {
    h: '13. Contact us',
    body: [`Questions about this Privacy Policy or your data? Email us at sumanth@devstrum.com.`],
  },
];

const PrivacyPolicyPage = () => {
  const { bg, ink, accent, muted, rule } = THEME;
  return (
    <div style={{ background: bg, color: ink, fontFamily: '"Geist Mono", monospace', minHeight: '100%' }} data-screen-label="Privacy Policy">
      <SEO
        title="Privacy Policy"
        description="How Devstrum collects, uses, and protects information across devstrum.com and the AI automation, WhatsApp Business Platform, and voice AI services we provide."
        path="/privacy-policy"
      />
      <SiteNav active="privacy-policy" />

      <Reveal as="section" style={{ position: 'relative', padding: `clamp(48px, 10vw, 72px) ${PAD_X} clamp(28px, 6vw, 40px)`, backgroundImage: gridBg, textAlign: 'center' }}>
        <CornerTicks />
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 24 }}>LEGAL</div>
        <h1 style={{ fontFamily: '"Geist", sans-serif', fontWeight: 600, fontSize: 'clamp(32px, 6vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.04em', margin: '0 auto 12px' }}>
          Privacy Policy
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: muted }}>Effective August 4, 2026</p>
      </Reveal>

      <section style={{ padding: `0 ${PAD_X} clamp(56px, 12vw, 96px)` }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'left' }}>
          {SECTIONS.map((s) => (
            <div key={s.h} style={{ marginBottom: 40, paddingTop: 24, borderTop: `1px solid ${rule}` }}>
              <h2 style={{ fontFamily: '"Geist", sans-serif', fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12 }}>{s.h}</h2>
              {s.body.map((p, i) => (
                <p key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.75, color: muted, margin: '0 0 12px' }}>{p}</p>
              ))}
              {s.list && (
                <ul style={{ margin: '0 0 12px', paddingLeft: 20 }}>
                  {s.list.map((li, i) => (
                    <li key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.75, color: muted, marginBottom: 8 }}>{li}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <SiteFooter heading="Want to work" headingAccent="with us?" />
    </div>
  );
};

export default PrivacyPolicyPage;
