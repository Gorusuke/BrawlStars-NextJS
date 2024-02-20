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
      {
        protocol: 'https',
        hostname: 'cdn-fankit.brawlify.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
