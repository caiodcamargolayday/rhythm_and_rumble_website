/**
 * RHYTHM & RUMBLE — META PIXEL & CONVERSIONS API (CAPI) TRACKING ENGINE
 * 
 * Implements high-match-rate hybrid tracking (Browser Pixel + Conversions API),
 * persistent first-party attribution (_fbp, _fbc, UTMs), deduplicated event IDs,
 * and Cloudbeds cross-domain tracking parameter forwarding.
 * 
 * Based on krob-tracking-stack architecture.
 */

export const TRACKING_CONFIG = {
  pixelId: (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_META_PIXEL_ID) || "1378123243698294",
  accessToken: (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_META_CAPI_TOKEN) || "EAAhi5NZBoHXcBSWRfZCu7wqDbghHa3oNeCAjZAvTnnkOQy2LDDPZAHYPskPIjIIMjkTPZB74dOmqd4EnqyHNo0HTNZBndtZBVH0BMZBhWZBjXD9eZAwYF791ouIJiNS1elaWs6Dv6seXoUfHgTeEZBNZAFQD7bDzIlwHr3wfVdN8SmjZAeqpnMZAjcsQxredP5Oj837wZDZD",
  apiVersion: "v19.0",
  cookieDomain: typeof window !== 'undefined' ? window.location.hostname : ''
};

// =========================================================
// COOKIE & FIRST-PARTY STORAGE HELPERS
// =========================================================

export function getCookie(name) {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
  return match ? decodeURIComponent(match[3]) : null;
}

export function setCookie(name, value, days = 400) {
  if (typeof document === 'undefined') return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  const domain = window.location.hostname === 'localhost' ? '' : `; domain=.${window.location.hostname.replace(/^www\./, '')}`;
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/${domain}; SameSite=Lax`;
}

// Generate or retrieve persistent _fbp (Facebook Browser ID)
export function getOrSetFbp() {
  let fbp = getCookie('_fbp');
  if (!fbp && typeof localStorage !== 'undefined') {
    fbp = localStorage.getItem('_fbp');
  }
  if (!fbp) {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000000000);
    fbp = `fb.1.${timestamp}.${random}`;
  }
  setCookie('_fbp', fbp, 400);
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('_fbp', fbp);
  }
  return fbp;
}

// Generate or retrieve persistent _fbc (Facebook Click ID)
export function getOrSetFbc() {
  if (typeof window === 'undefined') return null;
  const urlParams = new URLSearchParams(window.location.search);
  const fbclid = urlParams.get('fbclid');

  let fbc = getCookie('_fbc');
  if (!fbc && typeof localStorage !== 'undefined') {
    fbc = localStorage.getItem('_fbc');
  }

  if (fbclid) {
    const timestamp = Date.now();
    fbc = `fb.1.${timestamp}.${fbclid}`;
    setCookie('_fbc', fbc, 400);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('_fbc', fbc);
    }
  }
  return fbc;
}

// Persist and retrieve all UTM & Ad click parameters
export function captureAttribution() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const trackedKeys = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    'gclid',
    'gbraid',
    'wbraid',
    'fbclid',
    'campaign_id',
    'adset_id',
    'ad_id'
  ];

  let stored = {};
  if (typeof localStorage !== 'undefined') {
    try {
      stored = JSON.parse(localStorage.getItem('rr_attribution') || '{}');
    } catch(e) {}
  }

  let updated = false;
  trackedKeys.forEach((key) => {
    const val = params.get(key);
    if (val) {
      stored[key] = val;
      setCookie(key, val, 400);
      updated = true;
    }
  });

  if (updated && typeof localStorage !== 'undefined') {
    localStorage.setItem('rr_attribution', JSON.stringify(stored));
  }

  return stored;
}

export function getAttribution() {
  if (typeof localStorage === 'undefined') return {};
  try {
    return JSON.parse(localStorage.getItem('rr_attribution') || '{}');
  } catch(e) {
    return {};
  }
}

// Generate unique, collision-free event ID for Meta Deduplication (Browser <-> CAPI)
export function generateEventId(prefix = 'rr') {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 9);
  return `${prefix}_${timestamp}_${random}`;
}

// =========================================================
// META CONVERSIONS API (CAPI) DISPATCHER
// =========================================================

export async function sendMetaCapiEvent(eventName, eventId, customData = {}, userData = {}) {
  try {
    const fbp = getOrSetFbp();
    const fbc = getOrSetFbc();
    const attribution = getAttribution();

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: typeof window !== 'undefined' ? window.location.href : '',
          action_source: "website",
          user_data: {
            client_user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
            fbp: fbp || undefined,
            fbc: fbc || undefined,
            ...userData
          },
          custom_data: {
            ...customData,
            ...attribution
          }
        }
      ]
    };

    const endpoint = `https://graph.facebook.com/${TRACKING_CONFIG.apiVersion}/${TRACKING_CONFIG.pixelId}/events?access_token=${TRACKING_CONFIG.accessToken}`;
    
    // Non-blocking fetch with keepalive to guarantee delivery on page exit
    await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      keepalive: true
    });
  } catch (err) {
    // Fail silently in production to preserve user experience
    console.debug('[Meta CAPI] Dispatch error:', err);
  }
}

// =========================================================
// UNIFIED DUAL-TRACKING DISPATCHER (Pixel + CAPI Deduplicated)
// =========================================================

export function trackMetaEvent(eventName, customData = {}, userData = {}) {
  const eventId = generateEventId(eventName.toLowerCase().replace(/[^a-z0-9]/g, ''));

  // 1. Browser Pixel Dispatch (Client-Side)
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, customData, { eventID: eventId });
  }

  // 2. Server CAPI Dispatch (Server-Side with matching eventId for 100% Deduplication)
  sendMetaCapiEvent(eventName, eventId, customData, userData);

  return eventId;
}

// Track Custom Events
export function trackCustomMetaEvent(customEventName, customData = {}) {
  const eventId = generateEventId(customEventName.toLowerCase().replace(/[^a-z0-9]/g, ''));

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', customEventName, customData, { eventID: eventId });
  }

  sendMetaCapiEvent(customEventName, eventId, customData);
  return eventId;
}

// =========================================================
// CLOUDBEDS CROSS-DOMAIN ATTRIBUTION DECORATOR
// =========================================================

export function decorateCloudbedsUrl(targetUrl) {
  try {
    const url = new URL(targetUrl);
    const attribution = getAttribution();
    const fbp = getOrSetFbp();
    const fbc = getOrSetFbc();

    // Append all captured UTM parameters
    Object.entries(attribution).forEach(([k, v]) => {
      if (v) url.searchParams.set(k, v);
    });

    if (fbp && !url.searchParams.has('fbp')) {
      url.searchParams.set('fbp', fbp);
    }
    if (fbc && !url.searchParams.has('fbc')) {
      url.searchParams.set('fbc', fbc);
    }

    return url.toString();
  } catch (e) {
    return targetUrl;
  }
}

// Global handler for Cloudbeds booking clicks (decorates URL with attribution parameters)
export function handleBookingClick(e, destinationUrl) {
  // Decorate destination URL if target is Cloudbeds
  if (e && e.currentTarget && e.currentTarget.href) {
    e.currentTarget.href = decorateCloudbedsUrl(e.currentTarget.href);
  }
}

// =========================================================
// INITIALIZE TRACKING ENGINE (Pixel + CAPI PageView + Auto Link Decorator)
// =========================================================

export function initMetaTracking() {
  if (typeof window === 'undefined') return;

  // 1. Capture and store UTMs, fbclid, _fbp, _fbc
  captureAttribution();
  getOrSetFbp();
  getOrSetFbc();

  // 2. Initialize Browser Pixel if not loaded
  if (!window.fbq) {
    (function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', TRACKING_CONFIG.pixelId);
  }

  // 3. Fire PageView across Browser Pixel & CAPI with matching event_id
  trackMetaEvent('PageView');

  // 4. Auto-decorate all Cloudbeds links across the entire DOM
  const decorateAllLinks = () => {
    document.querySelectorAll('a[href*="cloudbeds.com"]').forEach((anchor) => {
      anchor.href = decorateCloudbedsUrl(anchor.href);
      if (!anchor.dataset.metaTrackingBound) {
        anchor.dataset.metaTrackingBound = 'true';
        anchor.addEventListener('click', (e) => {
          handleBookingClick(e, anchor.href);
        });
      }
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', decorateAllLinks);
  } else {
    decorateAllLinks();
  }

  // Periodic check for any dynamically rendered components
  setTimeout(decorateAllLinks, 1000);
  setTimeout(decorateAllLinks, 3000);
}
