import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strapi.ackerlabs.my.id',
      },
      {
        protocol: 'http',
        hostname: 'qb1.vc',
      },
    ],
  },
};

export default nextConfig;
