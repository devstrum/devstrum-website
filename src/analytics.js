const VISITOR_COOKIE = 'dv_visitor_id';
const SESSION_KEY = 'dv.analytics.session.v1';
const SESSION_STARTED_KEY = 'dv.analytics.session_started.v1';

const env = import.meta.env;
const endpoint = env.VITE_ANALYTICS_ENDPOINT?.trim();
const posthogToken = (env.VITE_POSTHOG_TOKEN || env.VITE_POSTHOG_KEY)?.trim();
const posthogHost = (env.VITE_POSTHOG_HOST?.trim() || 'https://us.i.posthog.com').replace(/\/$/, '');
const heartbeatMs = Math.max(10_000, Number(env.VITE_ANALYTICS_HEARTBEAT_MS) || 15_000);

const IDENTITY_KEYS = {
  email: ['email', 'user_email', 'contact_email'],
  linkedin: ['linkedin', 'linkedin_url', 'linkedin_profile'],
};

const ATTRIBUTION_PARAMS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
];
const CLICK_ID_PARAMS = ['gclid', 'fbclid', 'msclkid', 'ttclid', 'li_fat_id'];
const ATTRIBUTION_COOKIES = [/^_ga(?:_|$)/, /^_fb[pc]$/, /^hubspotutk$/, /^__hstc$/, /^li_fat_id$/];

const runtime = {
  started: false,
  visitorId: null,
  sessionId: null,
  page: null,
  heartbeat: null,
  clickCounts: new Map(),
  listeners: [],
  identityFingerprint: null,
};

const canUseBrowser = () => typeof window !== 'undefined' && typeof document !== 'undefined';

const safeStorage = (storage, operation, fallback = null) => {
  try {
    return operation(storage);
  } catch {
    return fallback;
  }
};

const randomId = () => {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
};

const parseCookies = () => {
  if (!canUseBrowser() || !document.cookie) return {};
  return document.cookie.split(';').reduce((cookies, part) => {
    const separator = part.indexOf('=');
    if (separator === -1) return cookies;
    try {
      const name = decodeURIComponent(part.slice(0, separator).trim());
      const value = decodeURIComponent(part.slice(separator + 1).trim());
      cookies[name] = value;
    } catch {
      // Ignore malformed cookie pairs so one bad value cannot disable tracking.
    }
    return cookies;
  }, {});
};

const setVisitorCookie = (id) => {
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${VISITOR_COOKIE}=${encodeURIComponent(id)}; Max-Age=31536000; Path=/; SameSite=Lax${secure}`;
};

const deleteVisitorCookie = () => {
  document.cookie = `${VISITOR_COOKIE}=; Max-Age=0; Path=/; SameSite=Lax`;
};

const getOrCreateVisitorId = () => {
  const existing = parseCookies()[VISITOR_COOKIE];
  if (existing) return existing;
  const id = randomId();
  setVisitorCookie(id);
  return id;
};

const getOrCreateSessionId = () => {
  const existing = safeStorage(window.sessionStorage, (storage) => storage.getItem(SESSION_KEY));
  if (existing) return existing;
  const id = randomId();
  safeStorage(window.sessionStorage, (storage) => storage.setItem(SESSION_KEY, id));
  return id;
};

export const hasGlobalPrivacySignal = () => {
  if (!canUseBrowser()) return false;
  return navigator.globalPrivacyControl === true || navigator.doNotTrack === '1';
};

const normalizeEmail = (value) => {
  const email = String(value || '').trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : null;
};

const normalizeLinkedIn = (value) => {
  const input = String(value || '').trim();
  if (!input) return null;
  try {
    const candidate = /^https?:\/\//i.test(input) ? input : `https://${input.replace(/^\/+/, '')}`;
    const url = new URL(candidate);
    const host = url.hostname.toLowerCase().replace(/^www\./, '');
    if (host !== 'linkedin.com' || !/^\/(in|company)\//i.test(url.pathname)) return null;
    return `https://www.linkedin.com${url.pathname.replace(/\/$/, '')}`;
  } catch {
    return null;
  }
};

const firstValue = (keys, sources) => {
  for (const source of sources) {
    for (const key of keys) {
      const value = source.values[key];
      if (value) return { value, source: `${source.name}:${key}` };
    }
  }
  return null;
};

const storageValues = (storage, keys) => keys.reduce((values, key) => {
  const value = safeStorage(storage, (target) => target.getItem(key));
  if (value) values[key] = value;
  return values;
}, {});

const stripIdentityParams = (url) => {
  let changed = false;
  Object.values(IDENTITY_KEYS).flat().forEach((key) => {
    if (url.searchParams.has(key)) {
      url.searchParams.delete(key);
      changed = true;
    }
  });
  if (changed) window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`);
};

const collectBrowserIdentity = async () => {
  const url = new URL(window.location.href);
  const queryValues = {};
  url.searchParams.forEach((value, key) => { queryValues[key] = value; });
  const cookies = parseCookies();
  const allIdentityKeys = Object.values(IDENTITY_KEYS).flat();
  const sources = [
    { name: 'url', values: queryValues },
    { name: 'cookie', values: cookies },
    { name: 'local_storage', values: storageValues(window.localStorage, allIdentityKeys) },
    { name: 'session_storage', values: storageValues(window.sessionStorage, allIdentityKeys) },
  ];

  const emailCandidate = firstValue(IDENTITY_KEYS.email, sources);
  const linkedinCandidate = firstValue(IDENTITY_KEYS.linkedin, sources);
  const email = normalizeEmail(emailCandidate?.value);
  const linkedin = normalizeLinkedIn(linkedinCandidate?.value);
  const identity = {};

  if (email) {
    identity.email = email;
    identity.email_source = emailCandidate.source;
  }
  if (linkedin) {
    identity.linkedin_url = linkedin;
    identity.linkedin_source = linkedinCandidate.source;
  }

  stripIdentityParams(url);
  return identity;
};

const collectAttribution = async () => {
  const url = new URL(window.location.href);
  const attribution = {};
  ATTRIBUTION_PARAMS.forEach((key) => {
    const value = url.searchParams.get(key);
    if (value) attribution[key] = value.slice(0, 200);
  });
  for (const key of CLICK_ID_PARAMS) {
    const value = url.searchParams.get(key);
    if (value) attribution[key] = value.slice(0, 500);
  }

  const cookieEntries = Object.entries(parseCookies()).filter(([name]) =>
    ATTRIBUTION_COOKIES.some((pattern) => pattern.test(name))
  );
  for (const [name, value] of cookieEntries) {
    attribution[`cookie_${name}`] = value.slice(0, 500);
  }
  return attribution;
};

const safeHash = (hash) => (/^#[a-z0-9_-]{1,80}$/i.test(hash || '') ? hash : '');
const sanitizedPath = () => `${window.location.pathname}${safeHash(window.location.hash)}`;
const referrerOrigin = () => {
  if (!document.referrer) return null;
  try { return new URL(document.referrer).origin; } catch { return null; }
};

const payloadFor = (event, properties = {}) => ({
  event,
  timestamp: new Date().toISOString(),
  anonymous_id: runtime.visitorId,
  session_id: runtime.sessionId,
  page: runtime.page?.path || sanitizedPath(),
  properties,
});

const destinationFor = (payload) => {
  if (posthogToken) {
    const posthogEvent = payload.event === 'page_view'
      ? '$pageview'
      : payload.event === 'page_time'
        ? '$pageleave'
        : payload.event;
    const posthogProperties = {
      distinct_id: payload.anonymous_id,
      $session_id: payload.session_id,
      $current_url: `${window.location.origin}${payload.page}`,
      $host: window.location.host,
      $pathname: payload.properties.path || payload.page.split('#')[0],
      ...payload.properties,
    };
    if (payload.event !== 'identity_linked') {
      posthogProperties.$process_person_profile = false;
    }
    if (payload.event === 'page_view') {
      posthogProperties.$pageview_id = payload.properties.pageview_id;
      posthogProperties.$referrer = payload.properties.referrer_origin || '';
    }
    if (payload.event === 'page_time') {
      posthogProperties.$pageview_id = payload.properties.pageview_id;
      posthogProperties.$prev_pageview_id = payload.properties.pageview_id;
      posthogProperties.$prev_pageview_pathname = payload.properties.path;
      posthogProperties.$prev_pageview_duration = payload.properties.active_ms / 1000;
      posthogProperties.$prev_pageview_max_scroll_percentage = payload.properties.max_scroll_percent;
    }
    if (payload.event === 'identity_linked') {
      posthogProperties.$set = {
        ...(payload.properties.email ? { email: payload.properties.email } : {}),
        ...(payload.properties.linkedin_url ? { linkedin_url: payload.properties.linkedin_url } : {}),
      };
    }
    return {
      url: `${posthogHost}/i/v0/e/`,
      body: {
        api_key: posthogToken,
        event: posthogEvent,
        distinct_id: payload.anonymous_id,
        timestamp: payload.timestamp,
        properties: posthogProperties,
      },
    };
  }
  if (endpoint) return { url: endpoint, body: payload };
  return null;
};

const send = (event, properties = {}, { beacon = false } = {}) => {
  if (!runtime.started || hasGlobalPrivacySignal()) return;
  const payload = payloadFor(event, properties);
  const destination = destinationFor(payload);
  if (!destination) {
    if (env.DEV) console.debug('[analytics]', payload);
    return;
  }

  const body = JSON.stringify(destination.body);
  if (beacon && navigator.sendBeacon) {
    navigator.sendBeacon(destination.url, new Blob([body], { type: 'application/json' }));
    return;
  }
  fetch(destination.url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true,
    credentials: endpoint && destination.url === endpoint ? 'same-origin' : 'omit',
  }).catch(() => {});
};

const syncActiveTime = () => {
  if (!runtime.page) return;
  const now = performance.now();
  if (runtime.page.wasVisible) runtime.page.activeMs += Math.max(0, now - runtime.page.lastTick);
  runtime.page.lastTick = now;
  runtime.page.wasVisible = !document.hidden;
};

const finishPage = (reason, beacon = false) => {
  if (!runtime.page) return;
  syncActiveTime();
  send('page_time', {
    path: runtime.page.path,
    pageview_id: runtime.page.pageViewId,
    active_ms: Math.round(runtime.page.activeMs),
    elapsed_ms: Math.round(performance.now() - runtime.page.startedAt),
    max_scroll_percent: runtime.page.maxScroll,
    reason,
  }, { beacon });
  runtime.page = null;
};

const linkCollectedIdentity = (identity) => {
  if (!Object.keys(identity).length) return;
  const fingerprint = `${identity.email || ''}:${identity.linkedin_url || ''}`;
  if (runtime.identityFingerprint === fingerprint) return;
  runtime.identityFingerprint = fingerprint;
  send('identity_linked', identity);
};

export const trackPageView = (path = sanitizedPath()) => {
  if (!runtime.started || hasGlobalPrivacySignal()) return;
  const [pathname, hash = ''] = String(path).split('#');
  const cleanPath = `${pathname.split('?')[0]}${safeHash(hash ? `#${hash}` : '')}`;
  if (runtime.page?.path === cleanPath) return;
  if (runtime.page) finishPage('route_change');
  runtime.page = {
    path: cleanPath,
    pageViewId: randomId(),
    startedAt: performance.now(),
    lastTick: performance.now(),
    activeMs: 0,
    maxScroll: 0,
    wasVisible: !document.hidden,
  };
  send('page_view', {
    path: cleanPath,
    pageview_id: runtime.page.pageViewId,
    referrer_origin: referrerOrigin(),
  });
  collectBrowserIdentity().then(linkCollectedIdentity).catch(() => {});
};

const elementDescriptor = (element) => {
  const type = element.tagName.toLowerCase();
  const text = (element.getAttribute('aria-label') || element.textContent || element.getAttribute('name') || '')
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, '[redacted-email]')
    .replace(/https?:\/\/(?:www\.)?linkedin\.com\/[^\s]+/gi, '[redacted-linkedin]')
    .replace(/\s+/g, ' ').trim().slice(0, 100);
  const href = element.getAttribute('href');
  let targetPath = null;
  let outbound = false;
  if (href) {
    try {
      const url = new URL(href, window.location.href);
      outbound = url.origin !== window.location.origin;
      targetPath = outbound ? `${url.origin}${url.pathname}` : url.pathname;
    } catch { targetPath = null; }
  }
  const explicitId = element.dataset.analyticsId || element.id;
  const root = element.closest('[data-screen-label]');
  const pathParts = [];
  let node = element;
  while (node && node !== root && pathParts.length < 6) {
    const siblings = node.parentElement
      ? Array.from(node.parentElement.children).filter((sibling) => sibling.tagName === node.tagName)
      : [];
    const position = siblings.length > 1 ? `:${siblings.indexOf(node) + 1}` : '';
    pathParts.unshift(`${node.tagName.toLowerCase()}${position}`);
    node = node.parentElement;
  }
  const elementPath = pathParts.join('>');
  const fallback = [root?.dataset.screenLabel || 'page', type, targetPath || '', text.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 60), elementPath]
    .filter(Boolean).join(':');
  return {
    element_id: explicitId || fallback || type,
    element_path: elementPath || null,
    element_type: type,
    element_text: text || null,
    target_path: targetPath,
    outbound,
    page_section: element.closest('[data-analytics-section]')?.dataset.analyticsSection || null,
  };
};

const handleClick = (event) => {
  const element = event.target instanceof Element
    ? event.target.closest('a, button, input, select, textarea, summary, [role="button"], [data-analytics-id]')
    : null;
  if (!element || element.closest('[data-analytics-ignore]')) return;
  const descriptor = elementDescriptor(element);
  const count = (runtime.clickCounts.get(descriptor.element_id) || 0) + 1;
  runtime.clickCounts.set(descriptor.element_id, count);
  send('element_clicked', { ...descriptor, session_click_count: count });
};

const handleScroll = () => {
  if (!runtime.page) return;
  const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  runtime.page.maxScroll = Math.max(runtime.page.maxScroll, Math.min(100, Math.round((window.scrollY / scrollable) * 100)));
};

const handleVisibility = () => {
  syncActiveTime();
};

const handlePageHide = () => finishPage('page_hide', true);

const addListener = (target, event, handler, options) => {
  target.addEventListener(event, handler, options);
  runtime.listeners.push(() => target.removeEventListener(event, handler, options));
};

export const identify = async (profile, { source = 'explicit' } = {}) => {
  if (!runtime.started || hasGlobalPrivacySignal()) return false;
  const email = normalizeEmail(profile?.email);
  const linkedin = normalizeLinkedIn(profile?.linkedin || profile?.linkedin_url);
  const properties = { identity_source: source };
  if (email) {
    properties.email = email;
  }
  if (linkedin) {
    properties.linkedin_url = linkedin;
  }
  if (!email && !linkedin) return false;
  const fingerprint = `${properties.email || ''}:${properties.linkedin_url || ''}`;
  if (runtime.identityFingerprint === fingerprint) return true;
  runtime.identityFingerprint = fingerprint;
  send('identity_linked', properties);
  return true;
};

export const track = (event, properties = {}) => {
  if (!/^[a-z][a-z0-9_]{1,63}$/.test(event)) throw new Error('Analytics event names must use snake_case.');
  send(event, properties);
};

export const startTracking = () => {
  if (!canUseBrowser() || runtime.started || hasGlobalPrivacySignal()) return;
  runtime.started = true;
  runtime.visitorId = getOrCreateVisitorId();
  runtime.sessionId = getOrCreateSessionId();

  const sessionStarted = safeStorage(window.sessionStorage, (storage) => storage.getItem(SESSION_STARTED_KEY));
  if (!sessionStarted) {
    collectAttribution().then((attribution) => {
      send('session_started', {
        language: navigator.language,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        attribution,
      });
    }).catch(() => {});
    safeStorage(window.sessionStorage, (storage) => storage.setItem(SESSION_STARTED_KEY, '1'));
  }

  addListener(document, 'click', handleClick, true);
  addListener(document, 'visibilitychange', handleVisibility);
  addListener(window, 'scroll', handleScroll, { passive: true });
  addListener(window, 'pagehide', handlePageHide);
  runtime.heartbeat = window.setInterval(() => {
    if (!runtime.page) return;
    syncActiveTime();
    send('page_heartbeat', {
      path: runtime.page.path,
      active_ms: Math.round(runtime.page.activeMs),
      elapsed_ms: Math.round(performance.now() - runtime.page.startedAt),
      max_scroll_percent: runtime.page.maxScroll,
    });
  }, heartbeatMs);
};

export const stopTracking = ({ forget = false } = {}) => {
  if (runtime.started && runtime.page) finishPage('tracking_stopped');
  runtime.listeners.splice(0).forEach((remove) => remove());
  if (runtime.heartbeat) window.clearInterval(runtime.heartbeat);
  runtime.started = false;
  runtime.heartbeat = null;
  runtime.page = null;
  runtime.clickCounts.clear();
  if (forget && canUseBrowser()) {
    deleteVisitorCookie();
    safeStorage(window.sessionStorage, (storage) => {
      storage.removeItem(SESSION_KEY);
      storage.removeItem(SESSION_STARTED_KEY);
    });
    runtime.visitorId = null;
    runtime.sessionId = null;
    runtime.identityFingerprint = null;
  }
};

if (canUseBrowser()) {
  window.devstrumAnalytics = Object.freeze({ identify, track });
}
