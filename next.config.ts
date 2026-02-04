import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strapi.ackerlabs.my.id',
      },
      {
        protocol: 'http',
        hostname: 'qb1.vc',
      },
      {
        protocol: 'https',
        hostname: 'qb1.vc',
      },
    ],
  },
};

export default nextConfig;
