/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  distDir: 'docs',
};

module.exports = nextConfig;
