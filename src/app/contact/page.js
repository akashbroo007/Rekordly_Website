import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Rekordly - Contact Us",
};

export default function ContactPage() {
  return (
    <main className="flex-1 flex flex-col items-center py-12 px-4 md:px-10 lg:px-40 w-full">
      <div className="flex flex-col items-center text-center max-w-[720px] mb-12">
        <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-4">
          How can we help?
        </h1>
        <p className="text-text-dim text-lg font-normal leading-normal">
          Whether you found a bug or have a feature request, the Rekordly team is here.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-[1200px]">
        <div className="lg:col-span-7 flex flex-col">
          <div className="bg-surface-dark rounded-xl border border-border-dark p-6 md:p-8 h-full">
            <div className="mb-6">
              <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] mb-2">Send us a message</h2>
              <p className="text-text-dim text-sm">We usually respond within 24 hours.</p>
            </div>
            <ContactForm />
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-surface-dark rounded-xl border border-border-dark p-6 hover:border-primary/50 transition-colors group">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center size-12 rounded-lg bg-[#18181b] text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                <span className="material-symbols-outlined text-2xl">mail</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-white text-lg font-bold mb-1">Direct Support</h3>
                <p className="text-text-dim text-sm mb-3">Prefer email? Reach us directly.</p>
                <a
                  className="text-primary hover:text-white font-medium text-base transition-colors flex items-center gap-1"
                  href="mailto:support@rekordly.com"
                >
                  support@rekordly.com
                  <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-surface-dark rounded-xl border border-border-dark p-6">
            <h3 className="text-white text-lg font-bold mb-4">Join the Community</h3>
            <div className="flex flex-col gap-3">
              <a
                className="flex items-center justify-between p-4 rounded-lg bg-[#18181b] border border-border-dark hover:border-primary group transition-all"
                href="#"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-text-dim group-hover:text-primary transition-colors">
                    chat
                  </span>
                  <span className="text-white font-medium">Discord Server</span>
                </div>
                <span className="material-symbols-outlined text-border-dark group-hover:text-primary transition-colors">
                  chevron_right
                </span>
              </a>
              <a
                className="flex items-center justify-between p-4 rounded-lg bg-[#18181b] border border-border-dark hover:border-primary group transition-all"
                href="#"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-text-dim group-hover:text-primary transition-colors">
                    alternate_email
                  </span>
                  <span className="text-white font-medium">Twitter / X</span>
                </div>
                <span className="material-symbols-outlined text-border-dark group-hover:text-primary transition-colors">
                  chevron_right
                </span>
              </a>
            </div>
          </div>
          <div className="bg-surface-dark rounded-xl border border-border-dark p-6 flex-1">
            <h3 className="text-white text-lg font-bold mb-4">Quick Resources</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-[#18181b]">
                  <div
                    className="w-full h-full bg-cover bg-center opacity-80"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjeYDvXhlbWpsIENaxpHIL1Cu-3Xw81D0O9x9DX7mGc_6fhjnMumMTmA47CTPG1Kb51TnLfpFLRwy2Ads1SqTcDB2RBa-0PAo8DANbElywkEp5x_mIOutiQyvkiCOks7DsIVocS27KqpAoY-H2_EtQcHzEvvRCLeD5kB6wb3qsjVUOvGvh59KpUC-yFRI-KA2M61J0KpFNxVY8O-yHKm_yBzp9RM7w8_1ypfN3iMpw3_Q0uuHcevwcunEOEVZNr10xT5ygJu_AeA')",
                    }}
                  ></div>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-white font-bold text-base">Documentation</h4>
                  <p className="text-text-dim text-sm mb-2">Detailed guides on how to use Rekordly features.</p>
                  <a className="text-primary text-sm font-bold hover:underline" href="#">
                    Read Docs
                  </a>
                </div>
              </div>
              <div className="h-px bg-border-dark w-full"></div>
              <div className="flex gap-4">
                <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-[#18181b]">
                  <div
                    className="w-full h-full bg-cover bg-center opacity-80"
                    data-alt="Abstract colorful light waves representing live streaming signals"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAagY30BXrbYg0e4krybqjFId8Bpm23YZhFS9zctPivAXA91PDVmHynNEJoWcIZMrFSoLZYxtuUj41T5GPNoFavNO_xmFV3ch-NMzXhNjKjmyB3MWsiNaemPvv1Bz90hzCbpYvTNcsS4wHiFdZXm4GgGFWHJKCri6TyPDDjaaMabr_6nCXJCb2CLHhPkjNprxsh1K0ZZM_QRldHBXE-NqHkJ3h9QfRL2UeuUXrqJjZ3Su2ovyJDYs8RLginqUd1YknHqh4GxW5j3Q')",
                    }}
                  ></div>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-white font-bold text-base">Troubleshooting</h4>
                  <p className="text-text-dim text-sm mb-2">Solutions for common recording issues.</p>
                  <a className="text-primary text-sm font-bold hover:underline" href="#">
                    View FAQ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
