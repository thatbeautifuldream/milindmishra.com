import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/resume",
        destination:
          "https://cdn.jsdelivr.net/gh/thatbeautifuldream/resume-cron/resume.pdf",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/li",
        destination: "https://www.linkedin.com/in/mishramilind/",
        permanent: true,
      },
      {
        source: "/gh",
        destination: "https://github.com/thatbeautifuldream",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://twitter.com/milindmishra_",
        permanent: true,
      },
      {
        source: "/ig",
        destination: "https://www.instagram.com/thatbeautifuldream",
        permanent: true,
      },
      {
        source: "/bsky",
        destination: "https://bsky.app/profile/milindmishra.bsky.social",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
