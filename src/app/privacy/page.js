import ScrollSpyNav from "../../components/ScrollSpyNav";

export const metadata = {
  title: "Rekordly - Privacy Policy",
};

export default function PrivacyPage() {
  const navItems = [
    { id: "introduction", label: "Introduction" },
    { id: "data-collection", label: "Data Collection" },
    { id: "third-party", label: "Third-Party Services" },
    { id: "user-rights", label: "User Rights" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <main className="flex-1">
      <div className="border-b border-white/5 bg-surface-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-bold text-primary">
                Legal
              </span>
              <span className="text-sm text-text-dim">Last updated: January, 2026</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl mb-6">Privacy Policy</h1>
            <p className="text-lg leading-8 text-text-dim">
              At Rekordly, we believe your data belongs to you. This policy outlines how our Windows desktop application
              handles your information, emphasizing our "Local First" architecture.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <aside className="hidden lg:block lg:col-span-3">
            <nav className="sticky top-24 overflow-y-auto pb-10 custom-scrollbar max-h-[calc(100vh-6rem)]">
              <h3 className="font-bold text-white mb-4 px-3">On this page</h3>
              <ScrollSpyNav
                items={navItems}
                defaultActiveId="introduction"
                activeClassName="block rounded-lg bg-surface-dark px-3 py-2 text-sm font-bold text-white border-l-4 border-primary"
                inactiveClassName="block rounded-lg px-3 py-2 text-sm font-medium text-text-dim hover:bg-surface-dark hover:text-white transition-colors"
              />
              <div className="mt-8 rounded-xl bg-surface-dark border border-white/5 p-5 text-white shadow-lg">
                <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">security</span>
                  Trust Center
                </h4>
                <p className="text-xs text-text-dim mb-3 leading-relaxed">
                  View our real-time security status and compliance certifications.
                </p>
                <a
                  className="text-xs font-bold text-white underline decoration-primary underline-offset-2 hover:text-primary"
                  href="#"
                >
                  View Status →
                </a>
              </div>
            </nav>
          </aside>

          <div className="lg:col-span-9 space-y-16">
            <section className="prose max-w-none" id="introduction">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="flex items-center justify-center p-1.5 rounded-lg bg-surface-dark border border-white/10">
                  <span className="material-symbols-outlined text-white">info</span>
                </div>
                Introduction
              </h2>
              <p className="text-text-dim leading-relaxed">
                Rekordly is designed to be a privacy-focused tool for creators. We understand that your streams,
                recordings, and personal moments are sensitive. Unlike many cloud-based services, Rekordly operates
                primarily on your local machine. This Privacy Policy applies to the Rekordly desktop application for
                Windows and our associated website.
              </p>
            </section>

            <div className="rounded-2xl bg-gradient-to-r from-surface-dark to-black p-1 shadow-xl border border-white/5">
              <div className="rounded-xl bg-background-dark p-6 sm:p-10 relative overflow-hidden">
                <div className="absolute right-0 top-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-4 border border-primary/20">
                      Core Principle
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Your Recordings Stay Local</h3>
                    <p className="text-text-dim">
                      All video files, OBS configurations, and application logs are stored directly on your Windows hard
                      drive (e.g.,{" "}
                      <code className="bg-surface-dark px-1.5 py-0.5 rounded text-gray-300 text-sm font-mono border border-white/10">
                        C:\Users\You\Videos\Rekordly
                      </code>
                      ). We do not have access to your content, and nothing is uploaded to our servers without your
                      explicit action.
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center justify-center size-24 rounded-2xl bg-surface-dark border border-white/10">
                    <span className="material-symbols-outlined text-[48px] text-primary">hard_drive</span>
                  </div>
                </div>
              </div>
            </div>

            <section id="data-collection">
              <h2 className="text-2xl font-bold text-white mb-4">Data We Collect</h2>
              <p className="text-text-dim mb-8 leading-relaxed">
                While we minimize data collection, we do gather specific telemetry to ensure the application runs
                smoothly. This data is anonymized wherever possible.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-xl border border-white/5 bg-surface-dark p-6 hover:border-primary/30 transition-colors group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-black rounded-lg text-white group-hover:bg-primary group-hover:text-black transition-colors">
                      <span className="material-symbols-outlined">bug_report</span>
                    </div>
                    <h4 className="font-bold text-white">Crash Logs</h4>
                  </div>
                  <p className="text-sm text-text-dim">
                    Diagnostic data sent automatically if the app crashes, helping us fix bugs quickly.
                  </p>
                </div>
                <div className="rounded-xl border border-white/5 bg-surface-dark p-6 hover:border-primary/30 transition-colors group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-black rounded-lg text-white group-hover:bg-primary group-hover:text-black transition-colors">
                      <span className="material-symbols-outlined">badge</span>
                    </div>
                    <h4 className="font-bold text-white">Account Basics</h4>
                  </div>
                  <p className="text-sm text-text-dim">
                    Your email address and license key status to verify your subscription.
                  </p>
                </div>
              </div>
            </section>

            <section className="border-t border-white/5 pt-12" id="third-party">
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="text-text-dim mb-8 leading-relaxed">
                We use a limited number of trusted third-party services to operate our business. These providers have
                access to your data only to perform specific tasks on our behalf.
              </p>
              <div className="overflow-hidden rounded-xl border border-white/5 bg-surface-dark shadow-sm">
                <table className="min-w-full divide-y divide-white/5">
                  <thead className="bg-black/20">
                    <tr>
                      <th
                        className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-text-dim"
                        scope="col"
                      >
                        Service
                      </th>
                      <th
                        className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-text-dim"
                        scope="col"
                      >
                        Purpose
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-bold text-white">Stripe</td>
                      <td className="px-6 py-4 text-sm text-text-dim">Payment processing and billing management (Future).</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-bold text-white">PostHog</td>
                      <td className="px-6 py-4 text-sm text-text-dim">Anonymized product analytics (Opt-out available).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <div className="border-t border-white/5 pt-12" id="user-rights" />

            <div className="border-t border-white/5 pt-12" id="contact" />
          </div>
        </div>
      </div>
    </main>
  );
}
