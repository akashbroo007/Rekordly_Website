export const metadata = {
  title: "Rekordly - FAQ & System Requirements",
};

export default function FaqPage() {
  return (
    <main className="flex-1 flex flex-col items-center py-12 px-4 md:px-10 lg:px-40 w-full">
      <div className="w-full max-w-[980px]">
        <div className="flex flex-col gap-3 mb-8">
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-white">
            Troubleshooting &amp; System Requirements
          </h1>
          <p className="text-text-dim text-base font-normal leading-normal">
            Quick answers and requirements for running the packaged Rekordly Windows app.
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none text-gray-300 leading-relaxed">
          <h2>System Requirements (Windows)</h2>

          <h3>Supported Operating Systems</h3>
          <ul>
            <li>Windows 10 (64-bit)</li>
            <li>Windows 11 (64-bit)</li>
          </ul>
          <p>Windows 7/8/8.1 are not supported.</p>

          <h3>Minimum Requirements (Runs, but may be slower)</h3>
          <ul>
            <li>
              <strong>CPU</strong>: 2-core 64-bit CPU (Intel i3 / AMD Ryzen 3 class or equivalent)
            </li>
            <li>
              <strong>RAM</strong>: 4 GB
            </li>
            <li>
              <strong>Storage (free space)</strong>: 3 GB free for the app and its built-in components, plus additional
              space for recordings
            </li>
            <li>
              <strong>GPU</strong>: Integrated graphics is OK
            </li>
            <li>
              <strong>Internet</strong>: Stable broadband connection
            </li>
          </ul>

          <h3>Recommended Requirements (Best experience)</h3>
          <ul>
            <li>
              <strong>CPU</strong>: 4-core or higher 64-bit CPU
            </li>
            <li>
              <strong>RAM</strong>: 8 GB or more
            </li>
            <li>
              <strong>Storage (free space)</strong>: 10 GB+ free (especially if you record often)
            </li>
            <li>
              <strong>GPU</strong>: Any modern integrated or dedicated GPU
            </li>
            <li>
              <strong>Internet</strong>: Stable broadband (wired or strong Wi‑Fi)
            </li>
          </ul>

          <h3>Storage for Recordings</h3>
          <p>
            Recording files can become large quickly. Typical space usage depends on stream quality, recording length,
            and bitrate.
          </p>
          <ul>
            <li>As a rough guideline, 1 hour of recording can range from ~0.5 GB to several GB</li>
            <li>If you plan to record many hours, ensure you have tens to hundreds of GB of free disk space</li>
          </ul>

          <h3>Runtime Dependencies</h3>
          <ul>
            <li>No separate installation is required for Node.js or Python</li>
            <li>All required components are bundled with the packaged app</li>
          </ul>

          <h3>Notes</h3>
          <ul>
            <li>If your region blocks certain sites, Rekordly may require a VPN/proxy depending on your network</li>
            <li>Performance depends heavily on available RAM and disk speed (SSD recommended)</li>
          </ul>

          <div className="not-prose mt-10">
            <a className="text-primary font-bold hover:underline" href="/contact">
              Back to Support
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
