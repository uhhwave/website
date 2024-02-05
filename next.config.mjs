/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn.shibe.online',
              port: '',
              pathname: '/shibes/**',
            },
          ],
    },
};

export default nextConfig;
