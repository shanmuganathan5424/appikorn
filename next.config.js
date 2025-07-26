/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 🔧 disables Image Optimization
  },
};

module.exports = nextConfig;
