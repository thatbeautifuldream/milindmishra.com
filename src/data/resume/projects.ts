import { Project } from "./schema";

const projects: Project[] = [
  {
    title: "AI Roadmap Generator",
    description: "Generate a roadmap for any topic!",
    moreDetails:
      "It started from the idea of generating roadmap tree from the AI and rendering on canvas, then we added youtube and book recommendations to it.",
    link: "https://airoadmapgenerator.com/",
    repo: "https://github.com/thatbeautifuldream/ai-roadmap-generator",
    tech: [
      "React",
      "Next.js",
      "OpenAI",
      "Tailwind",
      "Shadcn",
      "Zustand",
      "Zod",
      "Typescript",
      "Zustand",
    ],
    awards: {
      "Peerlist Spolight for the week": {
        link: "https://peerlist.io/milind/project/ai-roadmap-generator",
        img: "https://www.airoadmapgenerator.com/images/badge-week.svg",
      },
      "Peerlist Spolight for the month": {
        link: "https://peerlist.io/milind/project/ai-roadmap-generator",
        img: "https://www.airoadmapgenerator.com/images/badge-month.svg",
      },
    },
  },
  {
    title: "JSON Visualiser",
    description: "Visualise JSON data in a various views",
    moreDetails:
      "A tool that visualises JSON data in a various views. It is built using React, Next.js, Tailwind and Shadcn.",
    link: "https://json.milind.live/",
    repo: "https://github.com/thatbeautifuldream/json-visualiser",
    tech: [
      "React",
      "Next.js",
      "Tailwind",
      "Shadcn",
      "Zustand",
      "Zod",
      "Typescript",
    ],
  },
];

export { projects };
