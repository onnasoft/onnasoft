import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4200",
      },
      {
        protocol: "https",
        hostname: "onnasoft.us",
        port: "443",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "443",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "443",
        pathname: "/**",
      },
    ],
  },
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
