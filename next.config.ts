import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://d3punaxrhk.ufs.sh/f/**')],
  },
};

export default nextConfig;
