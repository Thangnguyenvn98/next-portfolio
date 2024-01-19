/** @type {import('next').NextConfig} */
const nextConfig = {   
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'skillicons.dev',

          },
        ],
        formats: ['image/avif'],
      }
};

export default nextConfig;
