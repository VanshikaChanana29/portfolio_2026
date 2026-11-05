// Sends a custom event to whichever privacy-friendly analytics is configured (Plausible or Umami).
// Safe to call when neither is loaded.
export function track(name, props) {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.plausible === "function") window.plausible(name, props ? { props } : undefined);
    if (window.umami && typeof window.umami.track === "function") window.umami.track(name, props);
  } catch {
    // Analytics must never break the page.
  }
}
