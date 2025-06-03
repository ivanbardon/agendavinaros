import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.vinarosnews.net",
        port: "",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
