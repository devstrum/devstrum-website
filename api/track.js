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

const EVENT_COPY = {
  'calendly.date_and_time_selected': (code) => `🟡 [Devstrum] Picked a time, didn't finish booking — click id \`${code}\``,
  'calendly.event_scheduled': (code) => `✅ [Devstrum] Booked a demo — click id \`${code}\``,
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'POST only' });
    return;
  }

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  const { event, code } = req.body || {};
  const formatMessage = EVENT_COPY[event];

  // Not configured yet, or an event we deliberately don't post to Slack
  // (profile/event-type page views are too noisy to be useful there) -
  // accept the request either way so the client never sees an error.
  if (!webhookUrl || !formatMessage) {
    res.status(200).json({ ok: true, forwarded: false });
    return;
  }

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: formatMessage(code || 'unknown') }),
    });
    res.status(200).json({ ok: true, forwarded: true });
  } catch (err) {
    // Best-effort - a failed Slack post shouldn't surface to the visitor.
    res.status(200).json({ ok: false, error: String(err) });
  }
}
