export const metadata = {
  title: "About Rekordly",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="relative flex flex-col items-center justify-center py-20 px-4 md:px-10 min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-glow pointer-events-none"></div>
        <div className="relative z-10 flex flex-col items-center text-center max-w-[800px] gap-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold text-primary tracking-wide uppercase">Open Source &amp; Free</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] text-[#111418] dark:text-white">
            Recording streams <br />
            <span className="text-primary text-glow">shouldn't be a chore.</span>
          </h1>
          <p className="text-lg text-[#637588] dark:text-text-dim max-w-[600px] leading-relaxed">
            We built Rekordly because we were tired of complex setups and missed moments. It watches your favorite
            streamers so you don't have to—built for automation, designed for simplicity.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a
              href="/download"
              className="flex items-center gap-2 h-12 px-6 rounded-lg bg-primary text-black text-base font-bold hover:bg-primary-hover transition-all transform hover:scale-105"
            >
              <span className="material-symbols-outlined !text-[20px]">download</span>
              <span>Download for Windows</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 h-12 px-6 rounded-lg border border-[#e5e7eb] dark:border-white/20 bg-transparent text-[#111418] dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all"
            >
              <span className="material-symbols-outlined !text-[20px]">code</span>
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 bg-[#f8fafc] dark:bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-4 mb-12 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[#111418] dark:text-white">Why we built it</h2>
            <p className="text-[#637588] dark:text-text-dim max-w-[720px]">
              Most recording tools are overkill. We focused on the three things that actually matter for stream
              archivists.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-4 rounded-xl border border-[#e5e7eb] dark:border-white/10 bg-white dark:bg-surface-dark p-6 transition-transform hover:-translate-y-1 duration-300 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined !text-3xl">smart_toy</span>
              </div>
              <h3 className="text-xl font-bold text-[#111418] dark:text-white">Fully Automated</h3>
              <p className="text-[#637588] dark:text-text-dim leading-relaxed">
                Set your favorite streamers and Rekordly silently waits in the background. It starts recording the
                second they go live, no input needed.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-xl border border-[#e5e7eb] dark:border-white/10 bg-white dark:bg-surface-dark p-6 transition-transform hover:-translate-y-1 duration-300 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined !text-3xl">bolt</span>
              </div>
              <h3 className="text-xl font-bold text-[#111418] dark:text-white">Dead Simple</h3>
              <p className="text-[#637588] dark:text-text-dim leading-relaxed">
                No complex OBS scenes, no bitrates to calculate. It runs quietly in the system tray as a lightweight
                process that doesn't eat your CPU.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-xl border border-[#e5e7eb] dark:border-white/10 bg-white dark:bg-surface-dark p-6 transition-transform hover:-translate-y-1 duration-300 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined !text-3xl">lock_open</span>
              </div>
              <h3 className="text-xl font-bold text-[#111418] dark:text-white">Early User Program</h3>
              <p className="text-[#637588] dark:text-text-dim leading-relaxed">
                Full access for early adopters.
Early users get access to all features while Rekordly is under active development. Your feedback directly influences what we build next.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-10">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-[#111418] dark:text-white mb-12 text-center">The Journey</h2>
          <div className="grid grid-cols-[60px_1fr] gap-x-4">
            <div className="flex flex-col items-center gap-1 pt-2">
              <div className="w-10 h-10 rounded-full bg-[#f0f4f1] dark:bg-surface-dark flex items-center justify-center text-primary z-10 border border-primary/20">
                <span className="material-symbols-outlined !text-xl">pest_control</span>
              </div>
              <div className="w-[2px] bg-[#e5e7eb] dark:bg-zinc-800 h-full grow"></div>
            </div>
            <div className="flex flex-col pb-12 pt-2">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-[#111418] dark:text-white">The Frustration</h3>
                <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">2025</span>
              </div>
              <p className="text-[#637588] dark:text-text-dim">
                We kept missing legendary streams because we were asleep or at work. Existing tools were either too
                expensive, too heavy, or required manual startup every single time.
              </p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-[2px] bg-[#e5e7eb] dark:bg-zinc-800 h-8"></div>
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black z-10 shadow-[0_0_15px_rgba(104,238,154,0.4)]">
                <span className="material-symbols-outlined !text-xl">rocket_launch</span>
              </div>
            </div>
            <div className="flex flex-col pt-12">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-[#111418] dark:text-white">The Release</h3>
                <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">Now</span>
              </div>
              <p className="text-[#637588] dark:text-text-dim">
                We built Rekordly to solve our own problem and decided to share it with others. It’s still evolving, but it already does what we needed most — reliable, automatic recording.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 bg-[#f8fafc] dark:bg-[#0a0a0a]">
        <div className="max-w-[600px] mx-auto text-center">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-[-0.033em] text-[#111418] dark:text-white">Why This Exists</h2>
            <div className="flex flex-col gap-4">
              <p className="text-[#637588] dark:text-text-dim leading-relaxed">
                I built this app because I kept missing live streams and important moments.
              </p>
              <p className="text-[#637588] dark:text-text-dim leading-relaxed">
                Archiving content was often complicated, unreliable, or required too much setup.
              </p>
              <p className="text-[#637588] dark:text-text-dim leading-relaxed">
                To solve this, I created a simple solution — a lightweight, pre-built app that lets you capture and save
                streams effortlessly.
              </p>
              <p className="text-[#637588] dark:text-text-dim leading-relaxed">
                What started as a personal tool is now shared publicly, so anyone can archive without friction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
