import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   output: `export`
   distDir: '.vercel/output/static',
};

export default nextConfig;
