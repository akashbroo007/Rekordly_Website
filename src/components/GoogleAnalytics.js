"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const STORAGE_KEY = "rekordly_cookie_consent";

export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    function check() {
      try {
        const choice = window.localStorage.getItem(STORAGE_KEY);
        setEnabled(choice === "accepted");
      } catch {
        setEnabled(false);
      }
    }

    check();

    function onCustom(e) {
      const choice = e?.detail?.choice;
      if (choice === "accepted") setEnabled(true);
      if (choice === "rejected") setEnabled(false);
    }

    window.addEventListener("storage", check);
    window.addEventListener("rekordly:cookie-consent", onCustom);

    return () => {
      window.removeEventListener("storage", check);
      window.removeEventListener("rekordly:cookie-consent", onCustom);
    };
  }, []);

  if (!gaId || !enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
