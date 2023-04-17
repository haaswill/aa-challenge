/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'agencyanalytics-api.vercel.app',
      },
    ],
  },
};

module.exports = nextConfig;
