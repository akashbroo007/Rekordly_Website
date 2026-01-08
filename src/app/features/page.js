export const metadata = {
  title: "Rekordly - Features",
};

export default function FeaturesPage() {
  return (
    <div className="layout-container flex flex-col items-center">
      <header className="w-full max-w-[960px] px-4 md:px-10 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-2xl bg-surface-darker border border-white/10 group">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-[100px] opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary/10 blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
          <div
            className="relative z-10 flex flex-col items-center justify-center gap-8 px-6 py-24 text-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFz5-8QZyAerG9nYl6CPPdO3Vnhi0JkVrp11otwTsq3kta9316VJQVpT60PBZ6PcmnKF_QSjk0pF4hhEYXp1OaZP-urb9ANwAYAUJwGQ8vNY73Rs2MFHhimGJ3TLTgDxPEg0PyJ-Q4Z36R69C9L2GSUR2Ma1SRKFZayCpky_pxlDZXd3bwinW8vnhxRlImh4_tHMQDxPHWh21m1cJhzribShN3c7f6iu-b2Z8UAHqaTTWcTnguz-Ft4FzsVJVPjLnr99gp8xpE1Q')",
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-md shadow-[0_0_15px_rgba(204,255,0,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              v1.0 Now Available
            </div>
            <h1 className="max-w-3xl text-4xl md:text-7xl font-black leading-[1.1] tracking-tight text-white">
              Built for the <br className="hidden md:block" />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 text-glow">
                Obsessive Archivist
              </span>
            </h1>
            <p className="max-w-xl text-base md:text-lg text-gray-400 font-medium leading-relaxed">
              Automatically record your favorite live streams in highest quality. Never miss a moment, even when you're
              asleep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
              <a
                href="/download"
                className="flex items-center justify-center gap-2 rounded-lg h-14 px-8 bg-primary hover:bg-primary-hover text-black text-base font-bold transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_35px_rgba(204,255,0,0.5)] hover:scale-105 active:scale-95"
              >
                <span className="material-symbols-outlined text-[22px]">download</span>
                Download for Windows
              </a>
              <a
                href="/how-it-works"
                className="flex items-center justify-center gap-2 rounded-lg h-14 px-8 border border-white/20 hover:bg-white/10 hover:border-white text-white text-base font-medium transition-all"
              >
                How It Works
              </a>
            </div>
            <p className="text-xs text-gray-600 mt-4 font-mono">Compatible with Windows 10 &amp; 11 (64-bit)</p>
          </div>
        </div>
      </header>

      <section className="w-full max-w-[960px] flex flex-col gap-20 md:gap-32 px-4 md:px-10 pb-24" id="features-list">
        <div className="group flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex flex-1 flex-col gap-6 order-2 md:order-1">
            <div className="w-14 h-14 rounded-2xl bg-surface-dark border border-white/10 flex items-center justify-center text-primary mb-2 shadow-lg group-hover:border-primary/50 transition-colors duration-500">
              <span className="material-symbols-outlined text-3xl">emergency_recording</span>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Never Miss a Moment</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Rekordly acts as your personal digital VCR. It constantly monitors your favorite channels in the
                background and hits record the millisecond they go live.
              </p>
            </div>
          </div>
          <div className="flex-1 w-full order-1 md:order-2">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black group-hover:shadow-[0_0_50px_rgba(204,255,0,0.15)] group-hover:border-primary/30 transition-all duration-700">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbxJX8WJvYnFSD_oDRHXIm5BSkqnnVQbC0x2DXpLHFq22wVNr_OdYH6dw9ztL2g4ED80KRUdtOhpn6ZQJknvzvNwNZMCuvPrONE9rjn5foWnqmrP61w7URroo5EVX8BFy4uljV-Uohe6BeBHyN7OQ-xyYCh8NzaT9Dzy6i-sAlgzJbywFbQoBEKGcfdZd-I0RjZEoO3Ibxx3Jf5lIIyJ4IwxtbbI_sDyH_C1n_AUJLR9WXEOwEuwuGpuQwY8SDO0mT28d8bhf8Sw')",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="group flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 w-full order-1">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black group-hover:shadow-[0_0_50px_rgba(204,255,0,0.15)] group-hover:border-primary/30 transition-all duration-700">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale-[50%]"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDuxpGA4uR5TUXFrFfASdcCBdfRO3A9PtKdFXcHsqvUb_xrGFrqFYJhGC76PnGvTXBL17Rbnmh42IsNTQHP-D8wJu2m_PCASdrBm6qWfpV259knAWuKRl586gXAEbGgq4iiBcZEDMbY6m7oBlmPMsOlvt_GAQ4LxXPAlAIXwrM_fS-cXAe83mvebEi6cZz1cAsDmSHdHCUgmxT82iwO14zZuPKH0abwcn1iTZ-WGMyReYN_qIkF7iZ7ly36ETxPu9nYLVaLDG5SVw')",
                }}
              ></div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-6 order-2">
            <div className="w-14 h-14 rounded-2xl bg-surface-dark border border-white/10 flex items-center justify-center text-primary mb-2 shadow-lg group-hover:border-primary/50 transition-colors duration-500">
              <span className="material-symbols-outlined text-3xl">layers</span>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Record Multiple Streams</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Whether it's 2 or 20 simultaneous broadcasts, our multi-threaded engine handles concurrent recordings
                without breaking a sweat. Perfect for tournament days.
              </p>
            </div>
          </div>
        </div>

        <div className="group flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex flex-1 flex-col gap-6 order-2 md:order-1">
            <div className="w-14 h-14 rounded-2xl bg-surface-dark border border-white/10 flex items-center justify-center text-primary mb-2 shadow-lg group-hover:border-primary/50 transition-colors duration-500">
              <span className="material-symbols-outlined text-3xl">memory</span>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Silent &amp; Efficient</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Designed to be invisible. Rekordly minimizes into the system tray with negligible CPU usage, ensuring
                your own gaming performance remains interrupted (Coming Soon).
              </p>
            </div>
            <div className="flex gap-4 mt-2">
              <div className="flex flex-col gap-1 p-4 rounded-xl bg-surface-dark border border-white/10 min-w-[110px] hover:border-primary/30 transition-colors">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">CPU Usage</span>
                <span className="text-2xl font-black text-white">&lt; 1%</span>
              </div>
              <div className="flex flex-col gap-1 p-4 rounded-xl bg-surface-dark border border-white/10 min-w-[110px] hover:border-primary/30 transition-colors">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">RAM Usage</span>
                <span className="text-2xl font-black text-white">~45 MB</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full order-1 md:order-2">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface-darker group-hover:shadow-[0_0_50px_rgba(204,255,0,0.15)] group-hover:border-primary/30 transition-all duration-700 flex items-center justify-center">
              <div className="relative w-3/4 h-3/4 bg-black rounded-lg border border-white/10 p-6 flex flex-col gap-4 shadow-inner">
                <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[5%] h-full bg-primary rounded-full shadow-[0_0_10px_#ccff00]"></div>
                </div>
                <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[12%] h-full bg-primary/60 rounded-full"></div>
                </div>
                <div className="mt-auto flex justify-end">
                  <span className="material-symbols-outlined text-gray-600">minimize</span>
                </div>
              </div>
              <div className="absolute bottom-6 right-6 bg-primary text-black text-xs font-bold px-3 py-1.5 rounded-md shadow-lg border border-white/20">
                System Tray Mode
              </div>
            </div>
          </div>
        </div>

        <div className="group flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 w-full order-1">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black group-hover:shadow-[0_0_50px_rgba(204,255,0,0.15)] group-hover:border-primary/30 transition-all duration-700">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8cQgNbq3Pct-xzaKpduE7_zntcYxPRXV76pvlqXk8jujLDzU6_Pwu5ed_70h3qj9onvYGjAIH30Om2QTOqePd8TIpsVLXUfxkxDCoo6nJIWKdiDu4I6Gw58TQd5gEXaD6WqSpEWUqgAe5D_pfYTfj4YE5fhx5OlHSWnPvU6B26ysl0SKgENB5q-kjMvxnr33B_q0EFe0H-Jde52QyQNrLeIWvbyYS5NgcIpPQmFttgMJO_LDQ9ZB5QB-Ky0DOAeAY-pnHjYApCQ')",
                }}
              ></div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-6 order-2">
            <div className="w-14 h-14 rounded-2xl bg-surface-dark border border-white/10 flex items-center justify-center text-primary mb-2 shadow-lg group-hover:border-primary/50 transition-colors duration-500">
              <span className="material-symbols-outlined text-3xl">folder_managed</span>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Auto-Organized Files</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Stop spending hours renaming files. Rekordly automatically sorts recordings into folders based on
                streamer name and uses customizable naming templates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[960px] px-4 md:px-10 py-24">
        <h2 className="text-2xl font-bold text-white mb-10 border-l-4 border-primary pl-4">Technical Specifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="group p-6 rounded-xl border border-white/10 bg-surface-dark hover:bg-surface-darker hover:border-primary/30 transition-all duration-300 flex flex-col gap-3">
            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform origin-left">
              high_quality
            </span>
            <span className="text-white font-bold text-sm">Source Quality</span>
            <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
              Records raw stream data (ts/mp4) without re-encoding.
            </span>
          </div>
          <div className="group p-6 rounded-xl border border-white/10 bg-surface-dark hover:bg-surface-darker hover:border-primary/30 transition-all duration-300 flex flex-col gap-3">
            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform origin-left">
              speed
            </span>
            <span className="text-white font-bold text-sm">Low Latency</span>
            <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
              Optimized buffer handling for minimal delay.
            </span>
          </div>
          <div className="group p-6 rounded-xl border border-white/10 bg-surface-dark hover:bg-surface-darker hover:border-primary/30 transition-all duration-300 flex flex-col gap-3">
            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform origin-left">
              terminal
            </span>
            <span className="text-white font-bold text-sm">CLI Support</span>
            <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
              Advanced users can run Rekordly via command line.
              (<strong>Still in development</strong>)
            </span>
          </div>
          <div className="group p-6 rounded-xl border border-white/10 bg-surface-dark hover:bg-surface-darker hover:border-primary/30 transition-all duration-300 flex flex-col gap-3">
            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform origin-left">
              cookie
            </span>
            <span className="text-white font-bold text-sm">Cookie Support</span>
            <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
              Support for subscriber-only streams via cookies.
            </span>
          </div>
        </div>
      </section>

      <section className="w-full px-4 pb-24">
        <div className="max-w-[960px] mx-auto relative rounded-3xl overflow-hidden bg-primary px-6 py-20 text-center shadow-[0_0_120px_rgba(204,255,0,0.15)] group">
          <div
            className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cg%20fill='none'%20fill-rule='evenodd'%3E%3Cg%20fill='%23000000'%20fill-opacity='1'%3E%3Cpath%20d='M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
          <div className="relative z-10 flex flex-col items-center gap-8">
            <h2 className="text-4xl md:text-6xl font-black text-black tracking-tight leading-tight">
              Start Building <br />Your Archive
            </h2>
            <p className="text-black/80 font-semibold text-lg max-w-lg">Join thousands of archivists preserving internet history today.</p>
            <button className="flex items-center justify-center gap-2 rounded-xl h-16 px-10 bg-black hover:bg-white hover:text-black text-white text-lg font-bold transition-all shadow-2xl hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:-translate-y-1">
              <span className="material-symbols-outlined">download</span>
              Download Rekordly Free
            </button>
            <p className="text-xs text-black/60 font-mono font-bold uppercase tracking-widest mt-2">v1.0 • Windows 10/11 • Free for personal use</p>
          </div>
        </div>
      </section>
    </div>
  );
}
