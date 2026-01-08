import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html className="dark" lang="en">
      <head>
        <Script
          src="https://cdn.tailwindcss.com?plugins=forms,container-queries"
          strategy="beforeInteractive"
        />
        <Script src="/js/tailwind-config.js" strategy="beforeInteractive" />

        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossOrigin=""
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/rekordly-logo.svg" type="image/svg+xml" />

        <link href="/styles/global.css" rel="stylesheet" />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased overflow-x-hidden selection:bg-primary selection:text-black min-h-screen flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
