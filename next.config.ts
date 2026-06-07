import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // generates static files in /out — ready for Namecheap shared hosting
  trailingSlash: true, // ensures /about/ works on Apache without extra .htaccess rules
  images: { unoptimized: true }, // required for static export (no Next.js image server)
};

export default nextConfig;
