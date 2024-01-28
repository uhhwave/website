/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.shibe.online'],
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
