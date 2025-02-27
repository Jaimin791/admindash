/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    API_PROD_URL: 'https://api.medchoiceone.com/api/admin', // Change only the domain part, keeping "/api/admin" intact
    storageURL: 'https://api.medchoiceone.com' // change only the laravel primary domain
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/dashboard",

        permanent: true,
      },
    ];
  },
  images: {
   remotePatterns: [
      {
        protocol: "https",
        hostname: "api.medchoiceone.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
