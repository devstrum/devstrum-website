// tracking.js - click-id capture + funnel event forwarding for the demo
// booking flow. Posts to our own /api/track (api/track.js), not directly
// to Slack - an incoming webhook URL is the only auth Slack checks, and
// this file ships inside the public JS bundle, so it can never hold a
// real secret. api/track.js holds the actual Slack URL server-side (as
// the SLACK_WEBHOOK_URL environment variable in the Vercel dashboard) and
// forwards on our behalf.

const CLICK_ID_KEY = 'devstrum_cid';

// Same-origin, not a secret - this is our own endpoint.
const TRACKING_WEBHOOK_URL = '/api/track';

// Reads ?c=... from the URL on first landing and persists it to
// localStorage, so it survives across every page the visitor views
// afterwards - including pages other than /demo, which is why this runs
// once from App.jsx rather than only from the booking page.
export function captureClickId() {
  if (typeof window === 'undefined') return;
  try {
    const params = new URLSearchParams(window.location.search);
    const c = params.get('c');
    if (c) localStorage.setItem(CLICK_ID_KEY, c);
  } catch {
    // localStorage can throw in locked-down browser contexts - tracking
    // is best-effort and should never break page load.
  }
}

export function getClickId() {
  if (typeof window === 'undefined') return 'unknown';
  try {
    return localStorage.getItem(CLICK_ID_KEY) || 'unknown';
  } catch {
    return 'unknown';
  }
}

// Forwards a Calendly funnel event (or anything else worth tracking) to
// api/track.js, tagged with the click id and a timestamp. That function
// decides what's worth posting to Slack and drops the rest.
export function trackEvent(event, extra = {}) {
  fetch(TRACKING_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ event, code: getClickId(), ts: Date.now(), ...extra }),
    keepalive: true, // event may fire as the visitor navigates away
  }).catch(() => {});
}
