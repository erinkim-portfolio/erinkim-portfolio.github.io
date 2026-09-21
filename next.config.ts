import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a fully static site that GitHub Pages can serve.
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
