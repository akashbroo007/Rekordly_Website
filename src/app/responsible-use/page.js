export const metadata = {
  title: "Rekordly - Responsible Use",
};

export default function ResponsibleUsePage() {
  return (
    <main className="relative z-10 flex-grow flex flex-col items-center w-full flex-1">
      <section className="w-full flex justify-center py-20 md:py-32 px-4 md:px-10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="flex flex-col items-center max-w-[960px] w-full text-center gap-8 relative z-10">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-2 shadow-[0_0_15px_rgba(74,222,128,0.1)] backdrop-blur-sm animate-[pulse_3s_ease-in-out_infinite]">
            Our Mission
          </div>
          <h1 className="text-gray-900 dark:text-white text-5xl md:text-7xl font-black leading-tight tracking-[-0.033em]">
            Power with <br className="hidden md:block" />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-300 to-primary animate-gradient bg-300%">
              Responsibility
            </span>
          </h1>
          <p className="text-gray-600 dark:text-text-dim text-lg md:text-xl font-normal leading-relaxed max-w-[720px]">
            Rekordly gives you the power to archive the internet, but we believe that power comes with a duty to respect
            the creators who make it.
          </p>
        </div>
      </section>

      <section className="w-full flex justify-center py-16 px-4 md:px-10">
        <div className="flex flex-col max-w-[1024px] w-full gap-16">
          <div className="flex flex-col gap-4 text-center md:text-left border-l-4 border-primary pl-6 py-2">
            <h2 className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">Core Principles</h2>
            <p className="text-gray-600 dark:text-text-dim text-base max-w-[640px]">
              Our community is built on trust and respect. Here is how we expect Rekordly to be used.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative flex flex-col gap-6 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-surface-dark p-8 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative size-14 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-[32px]">copyright</span>
              </div>
              <div className="relative flex flex-col gap-3">
                <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                  Respect IP
                </h3>
                <p className="text-gray-600 dark:text-text-dim text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  Don't re-upload content as your own. Always credit creators and respect their distribution rights. Your
                  recording is for you, not for your channel.
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col gap-6 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-surface-dark p-8 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="relative size-14 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-[32px]">lock</span>
              </div>
              <div className="relative flex flex-col gap-3">
                <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                  Private Archival
                </h3>
                <p className="text-gray-600 dark:text-text-dim text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  Tools are for personal time-shifting and offline viewing. They are not intended to facilitate piracy or
                  unauthorized redistribution of paid content.
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col gap-6 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-surface-dark p-8 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="relative size-14 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-[32px]">gavel</span>
              </div>
              <div className="relative flex flex-col gap-3">
                <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                  Platform Rules
                </h3>
                <p className="text-gray-600 dark:text-text-dim text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  Adhere to Twitch, YouTube, and other platform TOS regarding recording. Respect the platform rules and
                  the creator's wishes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center py-20 px-4 md:px-10">
        <div className="relative w-full max-w-[1024px] overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 glass-panel shadow-2xl">
          <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="relative flex flex-col items-center justify-center gap-10 px-6 py-16 md:py-24 text-center z-10">
            <div className="flex flex-col gap-6 items-center max-w-[720px]">
              <div className="p-4 rounded-full bg-primary/10 border border-primary/20 mb-2">
                <span className="material-symbols-outlined text-primary text-4xl">handshake</span>
              </div>
              <h2 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-tight">
                The Ethical Pledge
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed font-light">
                "I agree to use Rekordly for <span className="text-primary font-medium">personal archival purposes only</span> and to respect the rights of all content creators."
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
