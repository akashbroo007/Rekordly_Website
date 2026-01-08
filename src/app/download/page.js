export const metadata = {
  title: "Rekordly - Download",
};

export default function DownloadPage() {
  return (
    <main className="flex-1">
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-[100%] blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1 text-sm text-primary mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            v1.0.0 is now available
          </div>
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl mb-8 leading-tight">
            Capture Every Stream <br />
            <span className="bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
              Automatically.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-text-dim mb-16 leading-relaxed">
            The professional live stream recorder for Windows. Experience background recording, instant replay, and zero
            performance impact.
          </p>
          <div className="@container mx-auto max-w-5xl perspective-1000">
            <div className="flex flex-col md:flex-row overflow-hidden rounded-3xl bg-surface-card border border-white/5 shadow-2xl relative group transition-transform duration-500 hover:scale-[1.01] hover:shadow-[0_0_40px_-10px_rgba(189,252,187,0.1)]">
              <div className="relative w-full h-64 md:h-auto md:w-[45%] bg-[#080808] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDD9W7jpjyqsO-Em7bAEA19OhFKhQvAvrmnHO5ZBPcKojZA3jvPxqU1ZwE4iu0mZ38uFQV-mLH1dxm_MUmtQTyjfyErInWhyGmHtEkLjsDGAb3zbY3-fwyoxK5NQPynlCgL1jzWVxvFYiemQ-HlYhRoa7ZPXUH0FWC6nHdswTd0QSWk3rFKahm-TOOBdLdFYHANmvWEVuBhMFqoYe1bf0I9uUdR-FPTqY-dl-yyJ7YPjejSL1eQ8FQC5Ridi5qmuygMJpT19WO57Q')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-surface-card"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
                  <div className="w-20 h-20 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-xl">
                    <span className="material-symbols-outlined text-5xl text-primary">desktop_windows</span>
                  </div>
                  <span className="text-xs font-mono text-primary/70 tracking-widest uppercase">Windows Native</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-center p-8 md:p-12 text-left relative z-20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary border border-primary/20">
                      Beta
                    </span>
                    <span className="text-text-dim text-xs">v1.0.0</span>
                  </div>
                  <div className="flex items-center text-text-dim text-xs gap-1.5 opacity-60">
                    <span className="material-symbols-outlined text-[14px]">verified_user</span>
                    <span>Signed Binary</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Download for Windows</h3>
                <p className="text-text-dim text-sm mb-8 leading-relaxed">
                  Requires Windows 10 or 11 (64-bit). <br className="hidden sm:block" />
                  File size: 200MB • Last updated: Jan, 2026
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="relative overflow-hidden group flex h-14 flex-1 items-center justify-center gap-3 rounded-xl bg-primary px-8 text-base font-bold text-black transition-all hover:bg-primary-hover shadow-[0_0_20px_-5px_rgba(189,252,187,0.3)] hover:shadow-[0_0_30px_-5px_rgba(189,252,187,0.5)] active:scale-[0.98]">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                    <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform duration-300">download</span>
                    Download Installer
                  </button>
                  <button className="flex h-14 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 text-sm font-medium text-white hover:bg-white/[0.08] hover:border-white/20 transition-all active:scale-[0.98]">
                    <span className="material-symbols-outlined text-gray-400">description</span>
                    Changelog
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#080808] py-24 border-y border-white/5 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-white/5 pb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">System Requirements</h2>
              <p className="text-text-dim">Ensure optimal performance for your recordings.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#0c0c0c] border border-white/5 hover:border-primary/20 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50">
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black text-white transition-all duration-300">
                <span className="material-symbols-outlined text-2xl">window</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Operating System</h3>
              <p className="text-text-dim text-sm leading-relaxed">
                Windows 10 (Version 2004+) or Windows 11. <br /> <span className="text-white/40">64-bit architecture only.</span>
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#0c0c0c] border border-white/5 hover:border-primary/20 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50">
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black text-white transition-all duration-300">
                <span className="material-symbols-outlined text-2xl">memory</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Memory</h3>
              <p className="text-text-dim text-sm leading-relaxed">
                8 GB RAM minimum. <br /> <span className="text-primary/80 font-medium">16 GB recommended</span> for 4K/60fps.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#0c0c0c] border border-white/5 hover:border-primary/20 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50">
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black text-white transition-all duration-300">
                <span className="material-symbols-outlined text-2xl">hard_drive</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Storage</h3>
              <p className="text-text-dim text-sm leading-relaxed">
                500 MB for installation. <br /> <span className="text-white/40">NVMe SSD recommended for recording path.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">How to Install</h2>
            <p className="text-text-dim text-lg max-w-xl mx-auto">
              Get up and running in less than 2 minutes with our streamlined setup process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-[2.5rem] left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-[#0e0e0e] border border-white/10 flex items-center justify-center z-10 mb-8 shadow-2xl shadow-black ring-4 ring-background-dark transition-transform duration-300 group-hover:scale-110 group-hover:border-primary/40">
                <span className="material-symbols-outlined text-3xl text-primary">download</span>
              </div>
              <div className="absolute -top-4 -right-4 text-[100px] font-bold text-white/[0.02] select-none pointer-events-none">1</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">Download</h3>
              <p className="text-sm text-text-dim leading-relaxed px-2">
                Click the download button above to get the latest signed <code>.exe</code> installer.
              </p>
            </div>
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-[#0e0e0e] border border-white/10 flex items-center justify-center z-10 mb-8 shadow-2xl shadow-black ring-4 ring-background-dark transition-transform duration-300 group-hover:scale-110 group-hover:border-primary/40">
                <span className="material-symbols-outlined text-3xl text-primary">install_desktop</span>
              </div>
              <div className="absolute -top-4 -right-4 text-[100px] font-bold text-white/[0.02] select-none pointer-events-none">2</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">Install</h3>
              <p className="text-sm text-text-dim leading-relaxed px-2">
                No setup required. Simply open the app and it’s ready to use.
              </p>
            </div>
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-[#0e0e0e] border border-white/10 flex items-center justify-center z-10 mb-8 shadow-2xl shadow-black ring-4 ring-background-dark transition-transform duration-300 group-hover:scale-110 group-hover:border-primary/40">
                <span className="material-symbols-outlined text-3xl text-primary">videocam</span>
              </div>
              <div className="absolute -top-4 -right-4 text-[100px] font-bold text-white/[0.02] select-none pointer-events-none">3</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">Record</h3>
              <p className="text-sm text-text-dim leading-relaxed px-2">
                Launch the app and start capturing your favorite streams instantly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
