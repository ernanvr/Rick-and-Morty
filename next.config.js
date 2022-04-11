/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['rickandmortyapi.com', 'img.icons8.com', 'https://about.me'],
  },
};

module.exports = nextConfig;
