export const CONSENT_STORAGE_KEY = "arithmiks_cookie_consent";

export const CONSENT_GRANTED = "granted";
export const CONSENT_DENIED = "denied";

export const getStoredConsent = () => {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY);
  } catch {
    return null;
  }
};

export const storeConsent = (value) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    // storage unavailable — banner just reappears next visit
  }
};

export const grantAnalyticsConsent = () => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", { analytics_storage: CONSENT_GRANTED });
};
