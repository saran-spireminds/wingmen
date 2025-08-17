/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'inspired-smile-a787e5587c.media.strapiapp.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
