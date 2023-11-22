/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    domains: ["mks-sistemas.nyc3.digitaloceanspaces.com"],
  },
  experimental: {
    forceSwcTransforms: true,
  },
};
