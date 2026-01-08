"use client";

import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const active = useMemo(() => {
    const p = pathname || "/";
    return {
      features: p === "/features",
      howItWorks: p === "/how-it-works",
      about: p === "/about",
    };
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-xl">
      <div className="px-4 md:px-10 py-3 max-w-[1280px] mx-auto flex items-center justify-between">
        <a href="/" className="text-white text-xl font-bold tracking-tight whitespace-nowrap">
          Rekordly
        </a>
        <div className="flex items-center">
          <div className="hidden md:flex justify-end gap-8">
            <a
              className={
                active.features
                  ? "text-white transition-colors text-sm font-medium"
                  : "text-zinc-400 hover:text-white transition-colors text-sm font-medium"
              }
              href="/features"
            >
              Features
            </a>
            <a
              className={
                active.howItWorks
                  ? "text-white transition-colors text-sm font-medium"
                  : "text-zinc-400 hover:text-white transition-colors text-sm font-medium"
              }
              href="/how-it-works"
            >
              How it works
            </a>
            <a
              className={
                active.about
                  ? "text-white transition-colors text-sm font-medium"
                  : "text-zinc-400 hover:text-white transition-colors text-sm font-medium"
              }
              href="/about"
            >
              About
            </a>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen((v) => !v)}
            type="button"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`${mobileOpen ? "" : "hidden "}md:hidden bg-background-dark border-b border-white/5 p-4 flex flex-col gap-4`}
      >
        <a
          className={
            active.features
              ? "text-white font-medium"
              : "text-zinc-400 hover:text-white transition-colors text-sm font-medium"
          }
          href="/features"
        >
          Features
        </a>
        <a
          className={
            active.howItWorks
              ? "text-white font-medium"
              : "text-zinc-400 hover:text-white transition-colors text-sm font-medium"
          }
          href="/how-it-works"
        >
          How it works
        </a>
        <a
          className={
            active.about
              ? "text-white font-medium"
              : "text-zinc-400 hover:text-white transition-colors text-sm font-medium"
          }
          href="/about"
        >
          About
        </a>
      </div>
    </nav>
  );
}
