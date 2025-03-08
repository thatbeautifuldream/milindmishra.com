import { Experience } from "./schema";
import { indianDateToUnixTimestamp } from "@/lib/utils";

const experience: Experience[] = [
  {
    title: "Product Engineer",
    description: "Getting started with Chat related features for Merlin AI.",
    organization: {
      name: "Merlin AI",
      slug: "merlin-ai",
      description:
        "Merlin is an AI Chrome Extension and web app that works as your AI-powered assistant for research, writing, and summarization, providing access to premium AI models.",
      logo: "/assets/logos/merlinai_logo.png",
    },
    skills: [
      "React.js",
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Chrome Extension",
      "AI Integration",
    ],
    start_date: indianDateToUnixTimestamp("20/02/2025"),
    end_date: null,
    location: "Bengaluru, India",
    job_type: "full_time",
  },
  {
    title: "Software Engineer",
    description:
      "Revamped internal dashboard improving key metrics access. Optimized influencer performance monitoring. Enhanced relationship board with multi-select drag-and-drop. Developed UI for content submission system.",
    organization: {
      name: "SARAL - The Influencer OS",
      slug: "saral",
      description:
        "The easiest way to seed influencers and build your ambassador program",
      logo: "/assets/logos/getsaral_logo.jpeg",
    },
    skills: [
      "React.js",
      "SCSS",
      "Redux",
      "MongoDB",
      "Typescript",
      "Mantine",
      "MUI",
      "DND-Kit",
    ],
    start_date: indianDateToUnixTimestamp("28/12/2024"),
    end_date: indianDateToUnixTimestamp("08/02/2025"),
    location: "Bengaluru, India",
    job_type: "full_time",
  },
  {
    title: "Founding Product Engineer",
    description:
      "Led MVP development for core workflows. Designed frontend for Skill Validators. Developed Candidate Flow with real-time assessment. Built Recruiter Flow with skill heatmap. Managed deployment using EC2, NGINX, PM2, Next.js",
    organization: {
      name: "Proof-of-Skill Protocol",
      slug: "proof-of-skill",
      description: "Proven Skills. Trusted Signals. Faster Hires.",
      logo: "/assets/logos/proofofskill_logo.jpeg",
    },
    skills: [
      "React.js",
      "Next.js",
      "Express.js",
      "Zustand",
      "PostgreSQL",
      "Typescript",
      "OpenAI",
      "AWS",
      "EC2",
      "NGINX",
      "PM2",
    ],
    start_date: indianDateToUnixTimestamp("01/06/2024"),
    end_date: indianDateToUnixTimestamp("27/12/2024"),
    location: "Bengaluru, India",
    job_type: "full_time",
  },
  {
    title: "Independent Contractor",
    description:
      "Developed recruiter platform for contractor search. Built AI-powered quiz system. Implemented Next.js frontend.",
    organization: {
      name: "Freelance",
      slug: "freelance",
      description: "Independent consulting and development work",
      logo: "/assets/logos/freelance_logo.jpeg",
    },
    skills: ["Next.js", "React.js", "TypeScript", "AI Integration"],
    start_date: indianDateToUnixTimestamp("01/02/2024"),
    end_date: indianDateToUnixTimestamp("01/05/2024"),
    location: "Bengaluru, India",
    job_type: "contract",
  },
  {
    title: "Lead Software Engineer",
    description:
      "Led team of two developers. Integrated multiple job boards. Built recruiting pipeline prototype.",
    organization: {
      name: "StartupHire",
      slug: "startuphire",
      description:
        "The easiest way to find and hire top talent for your startup",
      logo: "/assets/logos/startuphire_logo.jpeg",
    },
    skills: ["Team Leadership", "Next.js", "React.js", "API Integration"],
    start_date: indianDateToUnixTimestamp("01/08/2023"),
    end_date: indianDateToUnixTimestamp("01/01/2024"),
    location: "Irvine, California, United States",
    job_type: "full_time",
  },
  {
    title: "Research Assistant",
    description:
      "Developed indoor positioning system frontend. Implemented 3D visualization. Optimized HDOP calculations.",
    organization: {
      name: "National Yang Ming Chiao Tung University",
      slug: "nycu",
      description: "Leading research university in Taiwan",
      logo: "/assets/logos/nycu_logo.jpeg",
    },
    skills: [
      "3D Visualization",
      "Frontend Development",
      "Research",
      "Indoor Positioning",
    ],
    start_date: indianDateToUnixTimestamp("01/02/2023"),
    end_date: indianDateToUnixTimestamp("31/07/2023"),
    location: "Hsinchu, Taiwan",
    job_type: "full_time",
  },
  {
    title: "Software Engineer",
    description:
      "Developed 3D indoor positioning platform frontend. Built company marketing site. Managed server infrastructure. Deployed services using Docker.",
    organization: {
      name: "Locus Connect",
      slug: "locus-connect",
      description: "Indoor location tracking for your business",
      logo: "/assets/logos/locus_connect_logo.jpeg",
    },
    skills: [
      "Frontend Development",
      "Docker",
      "Server Management",
      "3D Visualization",
    ],
    start_date: indianDateToUnixTimestamp("01/07/2022"),
    end_date: indianDateToUnixTimestamp("01/01/2023"),
    location: "Bengaluru, India",
    job_type: "full_time",
  },
  {
    title: "UX Designer",
    description:
      "Designed user flows. Managed design system. Created marketing assets.",
    organization: {
      name: "iNeuron.ai",
      slug: "ineuron-ai",
      description:
        "Gateway to affordable, high-quality education in emerging technologies.",
      logo: "/assets/logos/ineuron_ai_logo.jpeg",
    },
    skills: ["UX Design", "Design Systems", "User Flows", "Marketing Design"],
    start_date: indianDateToUnixTimestamp("01/05/2022"),
    end_date: indianDateToUnixTimestamp("30/06/2022"),
    location: "Bengaluru, India",
    job_type: "full_time",
  },
  {
    title: "Technical Writer",
    description: "Authored technical courses. Created learning materials.",
    organization: {
      name: "Plusklass",
      slug: "plusklass",
      description: "Educational technology platform",
      logo: "/assets/logos/plusklass_logo.jpeg",
    },
    skills: ["Technical Writing", "Course Creation", "Educational Content"],
    start_date: indianDateToUnixTimestamp("01/01/2022"),
    end_date: indianDateToUnixTimestamp("30/04/2022"),
    location: "Remote",
    job_type: "contract",
  },
];

export { experience };
