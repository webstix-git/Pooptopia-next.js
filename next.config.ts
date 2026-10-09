import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [{ source: "/about", destination: "/about/our-why", permanent: true }];
  },
};

export default nextConfig;
