export const metadata = {
  title: "Rekordly - How It Works",
};

export default function HowItWorksPage() {
  return (
    <main className="flex flex-col items-center w-full flex-1">
      <section className="w-full relative px-4 py-8 md:py-16 max-w-[1280px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none blur-3xl">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-600 rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>
        </div>
        <div
          className="relative w-full rounded-3xl overflow-hidden min-h-[520px] flex flex-col items-center justify-center text-center p-8 gap-10 border border-white/5 shadow-2xl group"
          data-alt="Abstract digital waveform pattern representing audio recording and technology"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXCa1eEXPiT5Gi6HC7xxftEX9F0cDbCEkj6B8xhvDP-4V-FErn6RI_0L9d6-cQElIcUQrDMHp3s0DSG-S_V-yBxiSugZyt0WB4A-WcmrmjrWSJVe2DgwpoUVLhN4Xlq0ZukY2z5CVT5H7-iKYnGsfroJ213UKAKfd5xW93ZG4G-fLRppNbNvHLDqYPPZZyfSCMB8LsmIHS7-HFh27q_oa8B3MVq6mg_roEuv-0orGYbOQgMvzsmWHUDWGaCiE4VpglpVPiEeS3ig')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-black/40"></div>
          <div className="flex flex-col gap-6 max-w-4xl z-10 animate-[fadeIn_1s_ease-out]">
            <div className="inline-flex items-center justify-center gap-2 mx-auto px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-primary font-bold uppercase tracking-widest text-xs">Seamless Automation</span>
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.1] tracking-[-0.033em] drop-shadow-xl">
              Automate Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Archives</span>
            </h1>
            <h2 className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              Never miss a live stream again. Rekordly runs silently in the background, capturing every moment
              automatically with a sleek, dark-mode first experience.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 z-10 mt-2">
            <a
              href="/download"
              className="flex items-center justify-center gap-2 rounded-xl h-14 px-8 bg-primary text-black text-base font-bold hover:scale-105 hover:shadow-glow transition-all duration-300"
            >
              <span className="material-symbols-outlined">download</span>
              Start Recording Now
            </a>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-16 max-w-[960px] relative">
        <div className="text-center mb-20">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">How It Works</h3>
          <p className="text-gray-400 max-w-lg mx-auto">Setup takes less than 2 minutes. Once configured, it's completely hands-free.</p>
        </div>
        <div className="grid grid-cols-[50px_1fr] gap-x-8 px-2 md:px-0">
          <div className="flex flex-col items-center gap-1 pt-1">
            <div className="flex items-center justify-center size-12 rounded-full bg-black text-primary border border-primary shadow-[0_0_15px_rgba(74,222,128,0.4)] z-10 relative">
              <span className="material-symbols-outlined">link</span>
              <div className="absolute inset-0 rounded-full bg-primary opacity-20 animate-pulse"></div>
            </div>
            <div className="w-[1px] bg-gradient-to-b from-primary to-gray-800 h-full grow min-h-[80px]"></div>
          </div>
          <div className="flex flex-1 flex-col py-2 pb-16">
            <div className="flex items-baseline justify-between mb-3 group">
              <p className="text-white text-2xl font-bold group-hover:text-primary transition-colors duration-300">Add Creator</p>
              <p className="text-primary/70 text-sm font-bold uppercase tracking-wider">Step 01</p>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg">
              Simply paste the Twitch or YouTube URL. We'll verify the channel instantly and pull the metadata.
            </p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-[1px] bg-gray-800 h-8"></div>
            <div className="flex items-center justify-center size-12 rounded-full bg-surface text-gray-400 border border-gray-800 group-hover:border-primary/50 transition-colors z-10">
              <span className="material-symbols-outlined">radar</span>
            </div>
            <div className="w-[1px] bg-gray-800 h-full grow min-h-[80px]"></div>
          </div>
          <div className="flex flex-1 flex-col py-2 pb-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-baseline justify-between mb-3">
              <p className="text-white text-2xl font-bold">Smart Detection</p>
              <p className="text-gray-600 text-sm font-medium">Step 02</p>
            </div>
            <p className="text-gray-500 text-lg">
              Rekordly minimizes to the system tray, polling for activity with minimal resource usage (less than 1% CPU).
            </p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-[1px] bg-gray-800 h-8"></div>
            <div className="flex items-center justify-center size-12 rounded-full bg-surface text-gray-400 border border-gray-800 z-10">
              <span className="material-symbols-outlined">fiber_manual_record</span>
            </div>
            <div className="w-[1px] bg-gray-800 h-full grow min-h-[80px]"></div>
          </div>
          <div className="flex flex-1 flex-col py-2 pb-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-baseline justify-between mb-3">
              <p className="text-white text-2xl font-bold">Instant Auto-Record</p>
              <p className="text-gray-600 text-sm font-medium">Step 03</p>
            </div>
            <p className="text-gray-500 text-lg">
              The moment they go live, recording begins. No input required. We handle connection drops automatically.
            </p>
          </div>

          <div className="flex flex-col items-center gap-1 pb-3">
            <div className="w-[1px] bg-gray-800 h-8"></div>
            <div className="flex items-center justify-center size-12 rounded-full bg-surface text-gray-400 border border-gray-800 z-10">
              <span className="material-symbols-outlined">folder_open</span>
            </div>
          </div>
          <div className="flex flex-1 flex-col py-2 opacity-60 hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-baseline justify-between mb-3">
              <p className="text-white text-2xl font-bold">Save &amp; Organize</p>
              <p className="text-gray-600 text-sm font-medium">Step 04</p>
            </div>
            <p className="text-gray-500 text-lg">
              Videos are saved with custom filenames in your preferred directory, ready for editing or archiving.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-24 px-4 bg-gradient-to-t from-primary/5 via-black to-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-10 p-12 relative z-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">Archive the Internet.</h2>
            <p className="text-gray-400 text-xl max-w-xl mx-auto">
              Join thousands of archivists and fans who trust Rekordly to keep their favorite content safe.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mt-2">
            <a
              href="/download"
              className="flex items-center justify-center gap-3 rounded-xl h-14 px-8 bg-primary text-black text-lg font-bold hover:shadow-glow hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto shadow-lg"
            >
              <span className="material-symbols-outlined">download</span>
              Download for Windows
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
