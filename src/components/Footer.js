export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-black py-12 px-4">
      <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 text-white opacity-80 hover:opacity-100 transition-opacity">
          <img alt="Rekordly" className="size-6" src="/rekordly-logo.svg" />
          <span className="font-bold text-lg tracking-tight">Rekordly</span>
        </div>
        <div className="flex gap-8 text-sm text-gray-500 font-medium">
          <a className="hover:text-primary transition-colors" href="/privacy">
            Privacy Policy
          </a>
          <a className="hover:text-primary transition-colors" href="/terms">
            Terms of Service
          </a>
          <a className="hover:text-primary transition-colors" href="/responsible-use">
            Responsible Use
          </a>
          <a className="hover:text-white transition-colors" href="/contact">
            Support
          </a>
        </div>
        <div className="text-xs text-gray-700 font-mono">© 2026 Rekordly. All rights reserved.</div>
      </div>
    </footer>
  );
}
