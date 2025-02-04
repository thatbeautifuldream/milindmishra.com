import { Experience } from "./types";

const experience: Experience[] = [
  {
    title: "Software Engineer",
    description: "Fresh Hire!",
    organization: {
      name: "SARAL",
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
    start_date: 1735689600,
    end_date: null,
    location: "Remote",
    job_type: "full_time",
  },
  {
    title: "Founding Product Engineer",
    description:
      "Part of ideation and design involving multiple user flows. Built multimodal AI chatbot for better skill understanding using OpenAI. Led UI for skill validator, recruiter & candidate flows. Architected deployment processes for multiple Next.js applications on AWS EC2.",
    organization: {
      name: "Proof of Skill",
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
      "SQLite",
      "Typescript",
      "OpenAI",
      "Vercel AI SDK",
      "Framer Motion",
      "AWS",
      "EC2",
      "SQS",
      "S3",
      "Redis",
      "Figma",
    ],
    start_date: 1714521600,
    end_date: 1735257600,
    location: "Bangalore, India",
    job_type: "full_time",
  },
  {
    title: "Software Engineer",
    description:
      "Led UI for consultant hiring flows involving search, filtering, sorting on various parameters. Built an in-house implementation for email resume requests and email scheduling feature. Built AI Agentic Workflows for resume parsing and email scheduling using Vercel AI SDK.",
    organization: {
      name: "Freelance Consulting",
      slug: "freelance-consulting",
      description: "Consulting for startups and scaleups",
      logo: "/assets/logos/milind_mishra_technologies_logo.jpeg",
    },
    start_date: 1704067200,
    end_date: 1714521600,
    location: "Remote",
    job_type: "full_time",
  },
  {
    title: "Lead Software Engineer",
    description:
      "Built consumer-facing landing page using Framer Motion, Next.js and gazed over 5k+ impressions. Led a team of 3 to build a job poster application, with candidate tracking capabilities. Integrated popular Job Boards into the platform and added value to the recruiter pipeline.",
    organization: {
      name: "StartupHire",
      description:
        "The easiest way to find and hire top talent for your startup",
      logo: "/assets/logos/startuphire_logo.jpeg",
    },
    start_date: 1690848000,
    end_date: 1701388800,
    location: "Remote",
    job_type: "full_time",
  },
  {
    title: "Software Engineer",
    description:
      "Created a portal application helping Locus clients to efficiently manage location tracking needs, configure floor plans, and manage Locus hardware. Implemented robust file management, floor plan processing, and 3D-HDOP map generation capabilities on the portal server.",
    organization: {
      name: "Locus Connect",
      slug: "locus-connect",
      description: "Indoor location tracking for your business",
      logo: "/assets/logos/locus_connect_logo.jpeg",
    },
    start_date: 1661990400,
    end_date: 1688169600,
    location: "Hsinchu, Taiwan",
    job_type: "full_time",
  },
  {
    title: "UI/UX Design Intern",
    description:
      "Prototyped screens for Findcoder.io using Figma to enhance user interaction and overall UX. Developed a version of a Design System for the entire product line, promoting consistency and efficiency in UI design across multiple platforms.",
    organization: {
      name: "iNeuron.ai",
      slug: "ineuron-ai",
      description:
        "Gateway to affordable, high-quality education in emerging technologies.",
      logo: "/assets/logos/ineuron_ai_logo.jpeg",
    },
    start_date: 1648771200,
    end_date: 1654041600,
    location: "Bangalore, India",
    job_type: "full_time",
  },
];

export { experience };
