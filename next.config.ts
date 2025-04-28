import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",         // ✅ Static export for GitHub Pages
  images: {
    unoptimized: true,      // ✅ Because GitHub Pages cannot optimize images
  },
  basePath: "",             // ✅ Correct (empty, because your site is at root bhimanbaghel.github.io/)
  trailingSlash: true,      // ✅ Good for static hosting
  assetPrefix: "/",         // 🔥 IMPORTANT: Add this to correctly load static assets (images, CSS, JS) from relative paths
};

export default nextConfig;