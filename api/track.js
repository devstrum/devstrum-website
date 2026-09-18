// api/track.js - Vercel serverless function. Receives Calendly funnel
// events from the client (src/tracking.js) and posts a readable message to
// Slack, so an incoming-webhook URL never has to live in the shipped JS
// bundle - anyone can view-source or read the Network tab on a public
// site, and a Slack incoming webhook has no other auth: whoever has the
// URL can post to the channel. This function is the only thing that ever
// sees it.
//
// Set SLACK_WEBHOOK_URL in the Vercel dashboard (Project -> Settings ->
// Environment Variables), not in this file and not in git. Until it's
// set, this endpoint accepts requests and silently drops them - the
// client never sees an error either way.
//
// This intentionally reuses the same Slack webhook/channel as
// scaffoldvs-website's api/track.js, so events are prefixed "[Devstrum]"
// to stay distinguishable from Scaffold's own funnel events landing in
// the same channel.
//
// Calendly's browser postMessage payload only ever contains the event and
// invitee *URIs* - never the booker's name, email or phone, by design
// (that data shouldn't be readable from client-side JS). To surface it in
// Slack, calendly.event_scheduled additionally fetches the invitee record
// server-side from Calendly's API, using a Personal Access Token set as
// CALENDLY_API_TOKEN. Without that env var, the Slack message still posts,
// just without the name/email/phone line.

const EVENT_COPY = {
  'calendly.date_and_time_selected': (code) => `🟡 [Devstrum] Picked a time, didn't finish booking — click id \`${code}\``,
  'calendly.event_scheduled': (code) => `✅ [Devstrum] Booked a demo — click id \`${code}\``,
};

// Fetches the invitee's name, email and (if the event type asks for it)
// phone number from Calendly's API. Returns null on any failure - a
// booking notification without these details is far better than no
// notification at all.
async function fetchInviteeDetails(inviteeUri) {
  const token = process.env.CALENDLY_API_TOKEN;
  if (!token || !inviteeUri) return null;

  try {
    const res = await fetch(inviteeUri, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return null;
    const { resource } = await res.json();
    return {
      name: resource?.name || null,
      email: resource?.email || null,
      phone: resource?.text_reminder_number || null,
    };
  } catch {
    return null;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'POST only' });
    return;
  }

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  const { event, code, payload } = req.body || {};
  const formatMessage = EVENT_COPY[event];

  // Not configured yet, or an event we deliberately don't post to Slack
  // (profile/event-type page views are too noisy to be useful there) -
  // accept the request either way so the client never sees an error.
  if (!webhookUrl || !formatMessage) {
    res.status(200).json({ ok: true, forwarded: false });
    return;
  }

  let text = formatMessage(code || 'unknown');

  if (event === 'calendly.event_scheduled') {
    const invitee = await fetchInviteeDetails(payload?.invitee?.uri);
    if (invitee) {
      const lines = [];
      if (invitee.name) lines.push(`*${invitee.name}*`);
      if (invitee.email) lines.push(invitee.email);
      if (invitee.phone) lines.push(invitee.phone);
      if (lines.length) text += `\n${lines.join(' · ')}`;
    }
  }

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    res.status(200).json({ ok: true, forwarded: true });
  } catch (err) {
    // Best-effort - a failed Slack post shouldn't surface to the visitor.
    res.status(200).json({ ok: false, error: String(err) });
  }
}
