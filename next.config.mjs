/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: false,
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:path*.html",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
