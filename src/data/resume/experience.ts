import { Experience } from "./types";

const experience: Experience[] = [
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
    start_date: 1704067200, // January 2024
    end_date: null,
    location: "Bengaluru, Karnataka, India",
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
    start_date: 1717286400, // June 2024
    end_date: 1735689600, // December 2024
    location: "Bengaluru, Karnataka, India",
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
    start_date: 1706745600, // February 2024
    end_date: 1714521600, // May 2024
    location: "Bengaluru, Karnataka, India",
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
    start_date: 1690848000, // August 2023
    end_date: 1704067200, // January 2024
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
    start_date: 1675209600, // February 2023
    end_date: 1688169600, // July 2023
    location: "Hsinchu City, Taiwan",
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
    start_date: 1656633600, // July 2022
    end_date: 1672531200, // January 2023
    location: "Bengaluru, Karnataka, India",
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
    start_date: 1651363200, // May 2022
    end_date: 1656633600, // June 2022
    location: "Bengaluru, Karnataka, India",
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
    start_date: 1640995200, // January 2022
    end_date: 1648771200, // April 2022
    location: "Remote",
    job_type: "contract",
  },
];

export { experience };
