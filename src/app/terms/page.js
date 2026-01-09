import ScrollSpyNav from "../../components/ScrollSpyNav";

export const metadata = {
  title: "Rekordly - Terms & Conditions",
};

export default function TermsPage() {
  const navItems = [
    { id: "introduction", label: "Introduction" },
    { id: "acceptance", label: "1. Acceptance of Terms" },
    { id: "license-grant", label: "2. License Grant" },
    { id: "user-conduct", label: "3. User Conduct" },
  ];

  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-10 py-8 lg:py-12 flex-1">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-24 self-start">
          <nav className="flex flex-col gap-2">
            <p className="text-xs font-bold uppercase tracking-wider text-text-dim mb-4">On this page</p>
            <ScrollSpyNav
              items={navItems}
              defaultActiveId="introduction"
              activeClassName="text-primary font-medium text-sm py-2 border-l-2 border-primary pl-4"
              inactiveClassName="text-gray-400 hover:text-white hover:border-white/20 transition-all font-medium text-sm py-2 border-l-2 border-transparent pl-4"
            />
            <div className="mt-8 pt-6 border-t border-white/10">
              <a className="flex items-center gap-2 text-sm text-text-dim hover:text-primary transition-colors" href="/contact">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Back to Support
              </a>
            </div>
          </nav>
        </aside>

        <div className="lg:col-span-9 flex flex-col gap-8 max-w-3xl">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-white">
              Terms &amp; Conditions
            </h1>
            <p className="text-text-dim text-base font-normal leading-normal">Last updated: January, 2026</p>
          </div>

          <section id="introduction" className="prose dark:prose-invert max-w-none text-gray-300 leading-relaxed">
            <p>
              Please read these terms and conditions carefully before using the Rekordly desktop application operated by
              us. Your access to and use of the Service is conditioned on your acceptance of and compliance with these
              Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
          </section>

          <div className="flex flex-col gap-4">
            <section id="acceptance">
              <details
                className="flex flex-col rounded-lg border border-white/10 bg-surface-dark px-[15px] py-[7px] group transition-colors hover:border-primary/50"
                open
              >
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-3 select-none">
                  <h3 className="text-white text-lg font-bold leading-normal group-hover:text-primary transition-colors">
                    1. Acceptance of Terms
                  </h3>
                  <span className="material-symbols-outlined text-white group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="text-text-dim text-sm font-normal leading-relaxed pb-4 pt-1">
                  <p className="mb-2">
                    By downloading or using the app, these terms will automatically apply to you – you should make sure
                    therefore that you read them carefully before using the app.
                  </p>
                  <p>
                    You’re not allowed to copy, or modify the app, any part of the app, or our trademarks in any way.
                    You’re not allowed to attempt to extract the source code of the app, and you also shouldn’t try to
                    translate the app into other languages, or make derivative versions.
                  </p>
                </div>
              </details>
            </section>

            <section id="license-grant">
              <details className="flex flex-col rounded-lg border border-white/10 bg-surface-dark px-[15px] py-[7px] group transition-colors hover:border-primary/50">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-3 select-none">
                  <h3 className="text-white text-lg font-bold leading-normal group-hover:text-primary transition-colors">
                    2. License Grant
                  </h3>
                  <span className="material-symbols-outlined text-white group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="text-text-dim text-sm font-normal leading-relaxed pb-4 pt-1">
                  <p>
                    Rekordly grants you a revocable, non-exclusive, non-transferable, limited license to download, install
                    and use the Application strictly in accordance with the terms of this Agreement.
                  </p>
                </div>
              </details>
            </section>

            <section id="user-conduct">
              <details className="flex flex-col rounded-lg border border-white/10 bg-surface-dark px-[15px] py-[7px] group transition-colors hover:border-primary/50">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-3 select-none">
                  <h3 className="text-white text-lg font-bold leading-normal group-hover:text-primary transition-colors">
                    3. User Conduct
                  </h3>
                  <span className="material-symbols-outlined text-white group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="text-text-dim text-sm font-normal leading-relaxed pb-4 pt-1">
                  <p>
                    You agree not to use the Application for any unlawful purpose or any purpose prohibited under this
                    clause. You agree not to use the Application in any way that could damage the Application, the
                    Services, or the general business of Rekordly.
                  </p>
                </div>
              </details>
            </section>
          </div>

          <div className="mt-8 p-6 rounded-xl bg-surface-dark border border-white/10">
            <h4 className="text-xl font-bold text-white mb-2">Still have questions?</h4>
            <p className="text-text-dim mb-4 text-sm">Our support team is available to help clarify any aspect of our terms.</p>
            <a className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline" href="/contact">
              Contact Legal Support
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
