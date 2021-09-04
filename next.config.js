/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require("next-pwa");

module.exports = withPWA({
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV !== "production",
  },
});
