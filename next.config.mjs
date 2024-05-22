/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos.com',
        port: '',
        pathname: '/seed/picsum/800/600',
      },
    ],
  },
};

export default nextConfig;
