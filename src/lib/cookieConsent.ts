export type CookieCategory = "analytics" | "functionality" | "advertising";

export type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  functionality: boolean;
  advertising: boolean;
  updatedAt: string;
};

export const COOKIE_CONSENT_STORAGE_KEY = "revio-cookie-consent-v1";
export const OPEN_COOKIE_PREFERENCES_EVENT = "revio:open-cookie-preferences";

export function readCookiePreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookiePreferences;
    if (typeof parsed.analytics !== "boolean") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeCookiePreferences(
  prefs: Omit<CookiePreferences, "necessary" | "updatedAt">
) {
  if (typeof window === "undefined") return;
  const value: CookiePreferences = {
    necessary: true,
    ...prefs,
    updatedAt: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(value));
  } catch {
    // localStorage unavailable (private browsing, storage blocked) — the
    // banner will simply reappear next visit rather than hard-failing.
  }
  return value;
}

export function openCookiePreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT));
}
