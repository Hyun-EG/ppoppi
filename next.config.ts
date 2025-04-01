import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["openweathermap.org"], // HTTPS로 도메인 설정
  },
};

module.exports = withPWA({
  ...nextConfig,
  dest: "build",
});
