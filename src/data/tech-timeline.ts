import Icons from "@/components/icons";

export interface TechStackEntry {
  period: {
    start: number;
    end: number | null;
  };
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
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
    icon: Icons.Nextjs,
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
    icon: Icons.Reactjs,
    tags: ["React", "Redux", "React Query", "Styled Components"],
    url: "https://react.dev",
  },
];
