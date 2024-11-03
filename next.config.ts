import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => [
    {
      source: "/resume",
      destination:
        "https://cdn.jsdelivr.net/gh/thatbeautifuldream/resume-cron/resume.pdf",
    },
  ],
};

export default nextConfig;
