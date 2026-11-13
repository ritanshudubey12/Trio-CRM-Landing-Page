// Consent-aware analytics stub. Wire to your real provider and cookie-consent state.
export function track(event, props = {}) {
  try {
    const consent = window.localStorage.getItem('analytics-consent');
    if (consent === 'denied') return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...props });
  } catch { /* analytics must never break the page */ }
}
