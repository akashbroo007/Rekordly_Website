export const metadata = {
  title: "Rekordly - Documentation",
};

export default function DocsPage() {
  return (
    <main className="flex-1 flex flex-col items-center py-12 px-4 md:px-10 lg:px-40 w-full">
      <div className="w-full max-w-[980px]">
        <div className="flex flex-col gap-3 mb-8">
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-white">Documentation</h1>
          <p className="text-text-dim text-base font-normal leading-normal">
            Rekordly is a professional desktop application for automated stream recording, monitoring, and cloud storage
            management.
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none text-gray-300 leading-relaxed">
          <h2>Overview</h2>
          <p>
            <strong>Rekordly</strong> is a desktop application built with Electron to help you manage, monitor, and
            download HLS (.m3u8) streams with a built-in dashboard, favourites tracking, and a download manager.
          </p>

          <h3>What Makes It Special?</h3>
          <ul>
            <li>
              <strong>Smart Detection</strong>: Live status checking for favourites with minimal resource usage
            </li>
            <li>
              <strong>Dashboard</strong>: Real-time status and performance metrics
            </li>
            <li>
              <strong>Download Manager</strong>: Track downloads with progress updates
            </li>
            <li>
              <strong>Scheduling</strong>: Create scheduled jobs and monitor their status
            </li>
            <li>
              <strong>Modern UI</strong>: Clean, responsive interface with real-time updates
            </li>
            <li>
              <strong>Real-time Updates</strong>: WebSocket-powered instant status updates
            </li>
          </ul>

          <h2>Key Features</h2>

          <h3>Streaming</h3>
          <ul>
            <li>
              <strong>HLS Playback</strong>: Built-in HLS player for stream preview
            </li>
            <li>
              <strong>Stream URL Tools</strong>: Validate and load direct .m3u8 URLs
            </li>
          </ul>

          <h3>Downloads</h3>
          <ul>
            <li>
              <strong>Download Manager</strong>: Real-time progress tracking, status, and history
            </li>
            <li>
              <strong>Quality &amp; Duration Limits</strong>: Control output quality and auto-stop after a duration
            </li>
          </ul>

          <h3>Favorites Management</h3>
          <ul>
            <li>
              <strong>Multi-Platform Support</strong>: Chaturbate and Stripchat integration
            </li>
            <li>
              <strong>Automated Monitoring</strong>: Periodic status checks (configurable interval)
            </li>
            <li>
              <strong>Live Notifications</strong>: Real-time alerts when favorites go live
            </li>
            <li>
              <strong>Batch Operations</strong>: Add, remove, and manage multiple favorites
            </li>
            <li>
              <strong>Status History</strong>: Track when models were last online
            </li>
          </ul>

          <h3>Dashboard</h3>
          <ul>
            <li>
              <strong>System Metrics</strong>: Scheduler health, check timing, error rate
            </li>
            <li>
              <strong>Live Models View</strong>: See which favourites are currently live
            </li>
          </ul>

          <h3>Scheduling</h3>
          <ul>
            <li>
              <strong>Scheduled Jobs</strong>: Create, view, and manage scheduled downloads
            </li>
            <li>
              <strong>Job Monitoring</strong>: Live job status and logs in the UI
            </li>
          </ul>

          <h2>Quick Start</h2>

          <h3>For End Users (Pre-built Installer)</h3>
          <ol>
            <li>Download the latest release: <code>Rekordly-2.0.0-Portable.exe</code></li>
            <li>
              Run the installer (click “More info” → “Run anyway” if Windows SmartScreen appears)
            </li>
            <li>
              Configure settings in the Settings tab (output directory, quality, duration, notifications, proxy)
            </li>
          </ol>

          <h1><strong>Architecture</strong></h1>
          <p>
            Rekordly uses an Electron desktop app (Renderer + Main process) communicating with an Express.js backend over
            HTTP/WebSocket. Data is persisted in SQLite and local storage.
          </p>

          <h2>Legal &amp; Ethics</h2>
          <p>
            Use this tool responsibly. Make sure you have permission to record content and follow the rules of the platforms and your local laws.
          </p>

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
