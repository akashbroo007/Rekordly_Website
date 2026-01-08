export const metadata = {
  title: "Rekordly - Automatic Stream Recorder",
};

export default function Home() {
  return (
    <>
      <header className="relative flex flex-col items-center justify-center min-h-[650px] w-full px-4 py-12 md:py-20 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-hero-radial"></div>
        <div
          className="absolute inset-0 z-0 bg-[url('https://placeholder.pics/svg/300')] bg-center bg-cover opacity-[0.03] mix-blend-overlay pointer-events-none"
          data-alt="Abstract subtle digital grid pattern background"
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-6 items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wide mb-2 backdrop-blur-sm animate-pulse">
            <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(104,238,154,0.6)]"></span>
            v1.0.0 Now Available
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight drop-shadow-2xl">
            Automatically Record <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-green-400">
              Your Favorite Streams.
            </span>
          </h1>
          <h2 className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Rekordly sits quietly in your tray and captures live streams the moment they go online. No setup required,
            just pure automation.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href="/download"
              className="flex items-center justify-center gap-3 rounded-lg h-14 px-8 bg-primary hover:bg-primary-hover text-black text-lg font-bold shadow-glow-lg transition-all hover:-translate-y-1"
            >
              <span className="material-symbols-outlined">window</span>
              <span>Download for Windows</span>
            </a>
            <a
              href="/how-it-works"
              className="flex items-center justify-center gap-3 rounded-lg h-14 px-8 border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 text-white text-lg font-bold backdrop-blur-sm transition-all hover:border-zinc-500"
            >
              <span>How It Works</span>
            </a>
          </div>
          <div className="flex items-center gap-2 mt-4 text-zinc-500 text-xs">
            <span className="material-symbols-outlined text-[16px]">check_circle</span>
            <p>Compatible with Windows 10 &amp; 11 (64-bit)</p>
          </div>
        </div>
      </header>

      <section
        className="py-24 px-4 md:px-10 bg-background-dark relative border-t border-white/5"
        id="how-it-works-preview"
      >
        <div className="max-w-[1024px] mx-auto flex flex-col gap-16 relative z-10">
          <div className="text-center flex flex-col gap-4">
            <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight">How It Works</h2>
            <p className="text-zinc-400 text-base max-w-2xl mx-auto">
              Three simple steps to never miss a moment. Set it up once, and let Rekordly handle the rest.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px border-t border-dashed border-zinc-700 z-0"></div>
            <div className="relative z-10 flex flex-col items-center text-center gap-5 group">
              <div className="size-24 rounded-2xl bg-surface-card border border-border-dark flex items-center justify-center shadow-lg group-hover:border-primary/50 group-hover:shadow-glow transition-all duration-300">
                <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors text-4xl">
                  link
                </span>
              </div>
              <div className="flex flex-col gap-2 p-2">
                <h3 className="text-white text-lg font-bold">1. Add Streamer URL</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Simply paste the link to the Twitch or YouTube channel you want to track.
                </p>
              </div>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center gap-5 group">
              <div className="size-24 rounded-2xl bg-surface-card border border-border-dark flex items-center justify-center shadow-lg group-hover:border-primary/50 group-hover:shadow-glow transition-all duration-300 delay-75">
                <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors text-4xl">
                  desktop_windows
                </span>
              </div>
              <div className="flex flex-col gap-2 p-2">
                <h3 className="text-white text-lg font-bold">2. Background Monitor</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Rekordly minimizes to your system tray, using less than 1% CPU while waiting.
                </p>
              </div>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center gap-5 group">
              <div className="size-24 rounded-2xl bg-surface-card border border-border-dark flex items-center justify-center shadow-lg group-hover:border-primary/50 group-hover:shadow-glow transition-all duration-300 delay-150">
                <span className="material-symbols-outlined text-primary text-4xl animate-pulse">
                  radio_button_checked
                </span>
              </div>
              <div className="flex flex-col gap-2 p-2">
                <h3 className="text-white text-lg font-bold">3. Auto-Record</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Recording triggers instantly when the stream goes live. No manual action needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-10 overflow-hidden bg-background-dark">
        <div className="max-w-[1200px] mx-auto perspective-container">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[960px] aspect-[16/10] bg-surface-card rounded-xl border border-border-dark shadow-2xl tilted-image overflow-hidden relative group flex flex-col">
              <div className="h-10 bg-black border-b border-border-dark flex items-center px-4 justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-zinc-700"></div>
                  <div className="size-3 rounded-full bg-zinc-700"></div>
                  <div className="size-3 rounded-full bg-zinc-700"></div>
                </div>
                <div className="text-xs text-zinc-600 font-mono">Rekordly v1.0.0</div>
              </div>
              <div
                className="w-full flex-1 bg-contain bg-center bg-no-repeat opacity-90 transition-opacity group-hover:opacity-100"
                data-alt="Screenshot of the Rekordly desktop application dashboard showing a list of monitored streamers and recording status"
                style={{
                  backgroundImage:
                    "url('https://i.ibb.co/C3xRBqcN/image.png')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
            </div>
            <p className="text-zinc-500 mt-8 text-sm italic">Clean dashboard, powerful controls.</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-10 bg-background-dark" id="features-preview">
        <div className="max-w-[1024px] mx-auto">
          <div className="flex flex-col gap-4 mb-12">
            <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight max-w-[720px]">
              Power User Features
            </h2>
            <p className="text-zinc-400 text-base max-w-[720px]">
              Designed for gamers, archivists, and content creators who need reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-card p-6 hover:bg-zinc-900 transition-colors group">
              <div className="size-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined">notifications_off</span>
              </div>
              <div>
                <h3 className="text-white text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Silent Tray Mode
                </h3>
                <p className="text-text-dim text-sm leading-relaxed">
                  Runs efficiently in the background without disturbing your workflow or gaming session.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-card p-6 hover:bg-zinc-900 transition-colors group">
              <div className="size-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined">video_file</span>
              </div>
              <div>
                <h3 className="text-white text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  MP4 &amp; MKV Support
                </h3>
                <p className="text-text-dim text-sm leading-relaxed">
                  Flexible format support for high-quality video capture. Remux instantly after recording.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-card p-6 hover:bg-zinc-900 transition-colors group">
              <div className="size-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined">calendar_clock</span>
              </div>
              <div>
                <h3 className="text-white text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Schedule Management
                </h3>
                <p className="text-text-dim text-sm leading-relaxed">
                  Only record during specific hours? Automate your recording times to match specific schedules.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-card p-6 hover:bg-zinc-900 transition-colors group">
              <div className="size-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined">folder_open</span>
              </div>
              <div>
                <h3 className="text-white text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Auto-Organize
                </h3>
                <p className="text-text-dim text-sm leading-relaxed">
                  Automatically sort recordings into folders by streamer name and date.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-card p-6 hover:bg-zinc-900 transition-colors group">
              <div className="size-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <div>
                <h3 className="text-white text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Low Resource Usage
                </h3>
                <p className="text-text-dim text-sm leading-relaxed">
                  Built with native code to ensure minimal impact on CPU and RAM.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-card p-6 hover:bg-zinc-900 transition-colors group">
              <div className="size-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined">cloud_upload</span>
              </div>
              <div>
                <h3 className="text-white text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Auto-Upload (Beta)
                </h3>
                <p className="text-text-dim text-sm leading-relaxed">
                  Automatically upload finished recordings to your Google Drive or custom server.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-10 bg-gradient-to-b from-background-dark to-black border-t border-border-dark">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
          <h2 className="text-white text-4xl md:text-5xl font-black tracking-tight">Ready to start recording?</h2>
          <p className="text-zinc-400 text-lg">Join thousands of users who never miss a live moment.</p>
          <a
            href="/download"
            className="flex items-center justify-center gap-3 rounded-full h-16 px-10 bg-primary hover:bg-primary-hover text-black text-xl font-bold shadow-glow-lg transition-transform hover:scale-105 active:scale-95"
          >
            <span className="material-symbols-outlined">download</span>
            <span>Get Rekordly for Windows</span>
          </a>
        </div>
      </section>
    </>
  );
}
