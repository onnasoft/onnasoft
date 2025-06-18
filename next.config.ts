import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3200",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4200",
      },
      {
        protocol: "https",
        hostname: "onnasoft.us",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.onnasoft.us",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/**",
      },
    ],
  },
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
