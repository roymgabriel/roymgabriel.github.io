/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export static HTML instead of using the Image Optimization API
  output: 'export',
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig
