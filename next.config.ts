import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => [
    {
      source: "/li",
      destination: "https://www.linkedin.com/in/mishramilind/",
    },
    {
      source: "/gh",
      destination: "https://github.com/thatbeautifuldream",
    },
    {
      source: "/x",
      destination: "https://twitter.com/milindmishra_",
    },
    {
      source: "/ig",
      destination: "https://www.instagram.com/thatbeautifuldream",
    },
    {
      source: "/bsky",
      destination: "https://bsky.app/profile/milindmishra.bsky.social",
    },
    {
      source: "/resume",
      destination:
        "https://cdn.jsdelivr.net/gh/thatbeautifuldream/resume-cron/resume.pdf",
    },
  ],
};

export default nextConfig;
