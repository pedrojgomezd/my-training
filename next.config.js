/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    domain: "http://localhost:3000/",
  },
};

module.exports = nextConfig;
