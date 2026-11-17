/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes the whole site to /out for plain static hosting.
  output: "export",
  // Static hosts have no image optimiser, so images are served as-is (they are already WebP).
  images: { unoptimized: true },
  // /about -> /about/index.html, which every static host serves without extra rewrites.
  trailingSlash: true,
  experimental: {
    agentFeedback: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
