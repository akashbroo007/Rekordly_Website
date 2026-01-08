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
        <a href="/" className="flex items-center gap-3 text-white group cursor-pointer">
          <div className="size-8 flex items-center justify-center group-hover:scale-110 transition-transform">
            <img alt="Rekordly" className="size-8" src="/rekordly-logo.svg" />
          </div>
          <h2 className="text-white text-xl font-bold tracking-tight">Rekordly</h2>
        </a>
        <div className="hidden md:flex flex-1 justify-center gap-8">
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
        <div className="flex items-center gap-4">
          <a
            href="/download"
            className="flex items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-5 bg-primary hover:bg-primary-hover text-black text-sm font-bold shadow-glow transition-all hover:scale-105 active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">download</span>
            <span className="truncate">Download</span>
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
        <a href="/download" className="text-primary font-bold text-sm">
          Download
        </a>
      </div>
    </nav>
  );
}
