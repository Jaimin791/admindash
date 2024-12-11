/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_PROD_URL: 'http://3.28.50.238/api',
    baseURL: 'http://localhost:3001',
    URL: 'http://3.28.50.238/api',
    storageURL: 'http://3.28.50.238',
  },
  images: {
    domains: ['3.28.50.238', 'localhost'],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "3.28.50.238",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;