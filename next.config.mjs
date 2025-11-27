/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  turbopack: {
    root: '.'
  }
};

export default nextConfig;
