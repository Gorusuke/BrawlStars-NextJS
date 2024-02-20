/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-old.brawlify.com',
        port: '',
        pathname: '/brawler-bs/**',
      },
    ],
  },
};

export default nextConfig;
