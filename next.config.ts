import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withPWA({
  ...nextConfig,
  dest: "build",
});
