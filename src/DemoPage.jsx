import React from 'react';
import { THEME, SiteNav, SiteFooter, BOOKING_URL, CALENDLY_URL, PAD_X, Reveal, SEO } from './theme.jsx';
import { getClickId, trackEvent } from './tracking.js';

// DemoPage - /demo. Embeds Calendly once CALENDLY_URL (theme.jsx) is set,
// so date_and_time_selected abandons are visible, not just completed
// bookings - linking out to Google Calendar only ever shows who finished.
// Falls back to the existing Google Calendar link until then, since
// Google's scheduler can't be framed at all (X-Frame-Options: sameorigin).
//
// Calendly posts postMessage events as a visitor moves through the
// widget (calendly.profile_page_viewed, event_type_viewed,
// date_and_time_selected, event_scheduled) - each one is forwarded to
// trackEvent() tagged with the click id captured on landing (tracking.js).
// trackEvent() itself no-ops until a real webhook URL is set there, so
// this ships safely today and lights up the moment both pieces exist.
const CalendlyEmbed = () => {
  const { rule } = THEME;
  const iframeSrc = `${CALENDLY_URL}?embed_domain=devstrum.com&embed_type=Inline&utm_source=devstrum&utm_content=${encodeURIComponent(getClickId())}&hide_gdpr_banner=1`;

  React.useEffect(() => {
    const onMessage = (e) => {
      if (typeof e.data?.event !== 'string' || !e.data.event.startsWith('calendly.')) return;
      trackEvent(e.data.event, { payload: e.data.payload });
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', border: `1px solid ${rule}`, borderRadius: 4, overflow: 'hidden' }}>
      <iframe title="Book a demo" src={iframeSrc} style={{ width: '100%', height: 780, border: 0, display: 'block' }} loading="lazy" />
    </div>
  );
};

// Google Calendar can't be embedded, so this stays a plain link-out button
// until CALENDLY_URL is set above.
const GoogleCalendarFallback = () => {
  const { accent, ink, muted, rule } = THEME;
  return (
    <div style={{ maxWidth: 640, margin: '0 auto', border: `1px solid ${rule}`, borderRadius: 4, padding: 48, textAlign: 'center' }}>
      <div style={{ fontFamily: '"Geist Mono", monospace', fontSize: 11, color: muted, letterSpacing: '.1em', marginBottom: 20 }}>PICK A TIME</div>
      <a href={BOOKING_URL} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
        <button style={{ padding: '18px 32px', background: accent, color: '#fff', border: 0, borderRadius: 3, fontSize: 13, fontWeight: 600, letterSpacing: '.12em', fontFamily: '"Geist Mono", monospace', cursor: 'pointer' }}>
          OPEN THE BOOKING CALENDAR →
        </button>
      </a>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: muted, marginTop: 24, marginBottom: 0 }}>
        Opens in a new tab.
      </p>
    </div>
  );
};

const DemoPage = () => {
  const { bg, ink, accent, muted } = THEME;
  return (
    <div style={{ background: bg, color: ink, fontFamily: 'Inter, sans-serif', minHeight: '100%' }} data-screen-label="Book a demo">
      <SEO title="Book a Demo" description="Book a 20-minute demo of Devstrum's AI automations, including the Fitting Wizard plugin." path="/demo" />
      <SiteNav active="demo" />

      <Reveal as="section" style={{ position: 'relative', padding: `clamp(48px, 9vw, 72px) ${PAD_X} clamp(28px, 6vw, 40px)`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: accent, letterSpacing: '.3em', marginBottom: 20, fontFamily: '"Geist Mono", monospace' }}>BOOK A DEMO</div>
        <h1 style={{ fontFamily: '"Geist", sans-serif', fontWeight: 600, fontSize: 'clamp(30px, 5.5vw, 46px)', letterSpacing: '-0.03em', margin: '0 auto 16px', maxWidth: 700, lineHeight: 1.1 }}>
          A 20-minute demonstration: message the assistant, watch the appointment appear.
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.55, color: muted, maxWidth: 560, margin: '0 auto' }}>
          Tell us what you're automating and which channels you actually get enquiries from — we'll bring an exact quote to the call.
        </p>
      </Reveal>

      <Reveal as="section" style={{ padding: `0 ${PAD_X} clamp(48px, 9vw, 80px)` }}>
        {CALENDLY_URL ? <CalendlyEmbed /> : <GoogleCalendarFallback />}
      </Reveal>

      <SiteFooter heading="Prefer to" headingAccent="just call?" />
    </div>
  );
};

export default DemoPage;
