"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "rekordly_cookie_consent";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const existing = window.localStorage.getItem(STORAGE_KEY);
      if (existing === "accepted" || existing === "rejected") return;
      setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function setChoice(choice) {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {}

    try {
      window.dispatchEvent(
        new CustomEvent("rekordly:cookie-consent", { detail: { choice } })
      );
    } catch {}

    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4">
      <div className="mx-auto max-w-5xl">
        <div className="bg-surface-dark/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 translate-y-0 animate-[fadeInUp_0.4s_ease-out_forwards]">
          <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-white font-bold">Cookies &amp; Analytics</p>
              <p className="text-text-dim text-sm leading-relaxed mt-1">
                We use cookies to measure site traffic with Google Analytics. You can accept or reject analytics cookies.
              </p>
              <a className="text-primary text-sm font-bold hover:underline mt-2 inline-block" href="/privacy">
                Learn more
              </a>
            </div>
            <div className="flex gap-3 sm:justify-end">
              <button
                type="button"
                className="h-10 px-4 rounded-lg border border-white/10 text-white text-sm font-bold hover:border-white/20 transition-colors"
                onClick={() => setChoice("rejected")}
              >
                Reject
              </button>
              <button
                type="button"
                className="h-10 px-4 rounded-lg bg-primary hover:bg-primary-hover text-black text-sm font-bold transition-colors shadow-glow"
                onClick={() => setChoice("accepted")}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { STORAGE_KEY as COOKIE_CONSENT_STORAGE_KEY };
