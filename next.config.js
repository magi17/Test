/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true, // Ensures proper routing
    images: {
      unoptimized: true, // Needed since Cloudflare does not support Next.js image optimization
    },
  };
  
  module.exports = nextConfig;



