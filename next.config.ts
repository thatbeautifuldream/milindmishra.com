import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/resume",
        destination: "https://resume.milind.app",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/mishramilind/",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/thatbeautifuldream",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://twitter.com/milindmishra_",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/milindmishra_",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/thatbeautifuldream",
        permanent: true,
      },
      {
        source: "/bsky",
        destination: "https://bsky.app/profile/milindmishra.bsky.social",
        permanent: true,
      },
      {
        source: "/khas",
        destination: "https://forms.gle/LnVszBUwfA2fG6iV6",
        permanent: true,
      },
      {
        source: "/feedback",
        destination: "https://forms.gle/mZKFrYM9P4NAkzK99",
        permanent: true,
      },
      {
        source: "/slides",
        destination: "https://milindmishra.com/slide/ai-for-react-developers",
        permanent: false,
      },
      {
        source: "/code",
        destination:
          "https://milindmishra.com/gist/81b5d579e38fb79432ac2f5d525d80ba",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
