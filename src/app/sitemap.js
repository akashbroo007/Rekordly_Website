export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

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
