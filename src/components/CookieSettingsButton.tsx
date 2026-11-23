"use client";

import { openCookiePreferences } from "@/lib/cookieConsent";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className="btn-tactile rounded-lg bg-revio-black px-4 py-2.5 text-xs font-bold text-white hover:shadow-md"
    >
      Manage Cookie Settings
    </button>
  );
}
