export default function sitemap() {
  const baseUrl = getBaseUrl();

  const routes = [
    "",
    "/features",
    "/download",
    "/how-it-works",
    "/about",
    "/contact",
    "/docs",
    "/faq",
    "/privacy",
    "/terms",
    "/responsible-use",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}

function getBaseUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  if (explicit) return normalizeUrl(explicit);

  if (process.env.NODE_ENV === "production") {
    return "https://www.rekordly.in";
  }

  return "http://localhost:3000";
}

function normalizeUrl(url) {
  return String(url).replace(/\/$/, "");
}
