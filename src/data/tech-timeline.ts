export interface TechStackEntry {
  period: {
    start: number; // Unix timestamp
    end: number | null; // null represents "Present"
  };
  name: string;
  description: string;
  icon: string;
  tags: string[];
  url?: string;
}

export const techTimeline: TechStackEntry[] = [
  {
    period: {
      start: 1704067200, // Jan 2024
      end: null,
    },
    name: "Modern Full Stack",
    description:
      "Building scalable applications with Next.js 14, TypeScript, and Tailwind CSS. Implementing server components and streaming patterns.",
    icon: "/assets/icons/nextjs.svg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Node.js"],
    url: "https://nextjs.org",
  },
  {
    period: {
      start: 1672531200, // Jan 2023
      end: 1704067200, // Jan 2024
    },
    name: "React Ecosystem",
    description:
      "Focused on React ecosystem with Redux, React Query, and styled-components. Built responsive and accessible web applications.",
    icon: "/assets/icons/react.svg",
    tags: ["React", "Redux", "React Query", "Styled Components"],
    url: "https://react.dev",
  },
  // Add more entries...
];
