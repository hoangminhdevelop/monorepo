import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  // allow image host from external
  images: {
    domains: ["fakestoreapi.com"],
    unoptimized: true,
  },
};

export default nextConfig;
