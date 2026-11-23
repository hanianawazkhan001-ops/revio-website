"use client";

import { useEffect, useState } from "react";
import {
  OPEN_COOKIE_PREFERENCES_EVENT,
  readCookiePreferences,
  writeCookiePreferences,
  type CookieCategory,
} from "@/lib/cookieConsent";

const TOGGLES: { key: CookieCategory; title: string; desc: string }[] = [
  {
    key: "analytics",
    title: "Analytics",
    desc: "Helps us understand how visitors use the website, which pages are viewed and how the website performs.",
  },
  {
    key: "functionality",
    title: "Functionality",
    desc: "Remembers choices or supports additional features that aren't essential to the basic operation of the website.",
  },
  {
    key: "advertising",
    title: "Advertising",
    desc: "Used to measure advertising performance and provide advertising that's more relevant to you.",
  },
];

export default function CookieConsent() {
  const [bannerVisible, setBannerVisible] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [panelClosing, setPanelClosing] = useState(false);
  const [choices, setChoices] = useState<Record<CookieCategory, boolean>>({
    analytics: false,
    functionality: false,
    advertising: false,
  });

  useEffect(() => {
    const existing = readCookiePreferences();
    if (existing) {
      setChoices({
        analytics: existing.analytics,
        functionality: existing.functionality,
        advertising: existing.advertising,
      });
    } else {
      setBannerVisible(true);
    }

    function onOpenPreferences() {
      const current = readCookiePreferences();
      if (current) {
        setChoices({
          analytics: current.analytics,
          functionality: current.functionality,
          advertising: current.advertising,
        });
      }
      setPanelOpen(true);
    }

    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, onOpenPreferences);
    return () => window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, onOpenPreferences);
  }, []);

  useEffect(() => {
    if (!panelOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePanel();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panelOpen]);

  function closePanel() {
    setPanelClosing(true);
    window.setTimeout(() => {
      setPanelOpen(false);
      setPanelClosing(false);
    }, 200);
  }

  function acceptAll() {
    writeCookiePreferences({ analytics: true, functionality: true, advertising: true });
    setChoices({ analytics: true, functionality: true, advertising: true });
    setBannerVisible(false);
  }

  function rejectNonEssential() {
    writeCookiePreferences({ analytics: false, functionality: false, advertising: false });
    setChoices({ analytics: false, functionality: false, advertising: false });
    setBannerVisible(false);
  }

  function savePreferences() {
    writeCookiePreferences(choices);
    setBannerVisible(false);
    closePanel();
  }

  return (
    <>
      {bannerVisible && (
        <div
          role="region"
          aria-label="Cookie consent"
          className="fade-in-up fixed inset-x-0 bottom-0 z-40 border-t border-revio-line bg-white p-4 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] sm:p-5"
        >
          <div className="mx-auto flex max-w-[1120px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-xs leading-relaxed text-revio-muted">
              We use cookies to keep Revio working properly and, with your
              permission, to understand website usage and improve your
              experience. See our{" "}
              <a href="/cookies" className="font-bold text-revio-black underline">
                Cookie Policy
              </a>{" "}
              for details.
            </p>
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-none sm:flex-wrap">
              <button
                type="button"
                onClick={() => setPanelOpen(true)}
                className="btn-tactile rounded-xl border border-revio-line bg-white px-4 py-2.5 text-xs font-black text-revio-black hover:bg-revio-paper"
              >
                Manage Preferences
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className="btn-tactile rounded-xl border border-revio-line bg-white px-4 py-2.5 text-xs font-black text-revio-black hover:bg-revio-paper"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="btn-tactile col-span-2 rounded-xl bg-revio-yellow px-4 py-2.5 text-xs font-black text-revio-black hover:shadow-lg sm:col-span-1"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {panelOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Cookie preferences"
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 transition-opacity duration-200 ${
            panelClosing ? "opacity-0" : "opacity-100"
          }`}
          onClick={(e) => {
            if (e.target === e.currentTarget) closePanel();
          }}
        >
          <div
            className={`w-full max-w-[560px] rounded-2xl bg-white p-6 shadow-2xl transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              panelClosing ? "translate-y-2 scale-95 opacity-0" : "translate-y-0 scale-100 opacity-100"
            }`}
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-[10px] font-black uppercase tracking-wider text-revio-yellow-deep">
                  Cookie Preferences
                </p>
                <h2 className="mt-1 text-2xl font-black tracking-tight text-revio-black">
                  Manage your cookie choices.
                </h2>
              </div>
              <button
                type="button"
                onClick={closePanel}
                aria-label="Close"
                className="btn-tactile grid size-9 flex-none place-items-center rounded-full border border-revio-line text-lg hover:bg-revio-paper"
              >
                ×
              </button>
            </div>

            <div className="mt-5 grid gap-2.5">
              <div className="flex items-center justify-between gap-4 rounded-xl border border-revio-line bg-revio-paper p-4">
                <div>
                  <strong className="block text-sm text-revio-black">Strictly necessary</strong>
                  <span className="mt-0.5 block text-xs text-revio-muted">
                    Required for the website to operate. Always on.
                  </span>
                </div>
                <span className="rounded-full bg-revio-line px-2.5 py-1 text-[9px] font-black uppercase tracking-wide text-revio-muted">
                  Always On
                </span>
              </div>

              {TOGGLES.map((t) => (
                <label
                  key={t.key}
                  className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-revio-line p-4 transition-colors duration-150 hover:border-revio-black/30"
                >
                  <div>
                    <strong className="block text-sm text-revio-black">{t.title}</strong>
                    <span className="mt-0.5 block text-xs text-revio-muted">{t.desc}</span>
                  </div>
                  <span className="relative inline-flex h-6 w-11 flex-none items-center rounded-full transition-colors duration-200"
                    style={{ backgroundColor: choices[t.key] ? "var(--revio-yellow)" : "var(--revio-line)" }}
                  >
                    <input
                      type="checkbox"
                      checked={choices[t.key]}
                      onChange={(e) =>
                        setChoices((c) => ({ ...c, [t.key]: e.target.checked }))
                      }
                      className="peer absolute inset-0 size-full cursor-pointer opacity-0"
                    />
                    <span
                      className={`inline-block size-4.5 transform rounded-full bg-white shadow transition-transform duration-200 ${
                        choices[t.key] ? "translate-x-[22px]" : "translate-x-1"
                      }`}
                    />
                  </span>
                </label>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={rejectNonEssential}
                className="btn-tactile rounded-xl border border-revio-line bg-white px-5 py-3 text-xs font-black text-revio-black hover:bg-revio-paper"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={savePreferences}
                className="btn-tactile rounded-xl bg-revio-yellow px-5 py-3 text-xs font-black text-revio-black hover:shadow-lg"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
