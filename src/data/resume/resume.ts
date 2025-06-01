import { indianDateToUnixTimestamp } from "@/lib/utils";
import {
  type Project,
  type PersonDetails,
  type Testimonial,
  type Contact,
  type Experience,
} from "./resume-schema";

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
      "Next.js",
      "Tailwind",
      "Shadcn",
      "Zustand",
      "Zod",
      "Typescript",
    ],
  },
  {
    title: "Sideprojects Directory",
    description: "A directory of sideprojects",
    moreDetails:
      "A directory of sideprojects. It is built using React, Next.js, Tailwind and Shadcn.",
    link: "https://sideprojects.directory/",
    repo: "https://github.com/thatbeautifuldream/sideprojects.directory",
    tech: [
      "Next.js",
      "Octokit.js",
      "Shadcn",
      "Typescript",
    ],
  },
  {
    title: "Sideprojects Directory",
    description: "A directory of sideprojects",
    moreDetails:
      "A curated space for developers to share and discover amazing side projects.",
    link: "https://sideprojects.directory/",
    repo: "https://github.com/thatbeautifuldream/sideprojects.directory",
    tech: [
      "Next.js",
      "Octokit.js",
      "Shadcn",
      "Typescript",
    ],
  },
  {
    title: "Accountabillibuddy [WIP]",
    description: "Share Your Accountability Goals with fellow buddies.",
    moreDetails:
      "Post what you want to be accountable for and inspire others to join you on your journey.",
    link: "https://www.accountabillibuddy.com/",
    repo: "https://github.com/thatbeautifuldream/accountabillibuddy",
    tech: [
      "Next.js",
      "Convex",
      "WebSocket",
      "Zustand",
      "Typescript",
    ],
  },
];

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

const details: PersonDetails = {
  person: {
    name: {
      full_name: "Milind Mishra",
      first_name: "Milind",
      last_name: "Mishra",
    },
    profile: {
      bio: "Passionate about design engineering and crafting elegant, intuitive interfaces.",
      shortBio: "Design + Engineering",
    },
    statistics: {
      key_stats: [
        {
          name: "total_exp_months",
          value: experience.reduce((acc, exp) => {
            const startDate = new Date(exp.start_date * 1000);
            const endDate = exp.end_date
              ? new Date(exp.end_date * 1000)
              : new Date();
            const months =
              (endDate.getFullYear() - startDate.getFullYear()) * 12 +
              (endDate.getMonth() - startDate.getMonth());
            return acc + months;
          }, 0),
        },
        {
          name: "total_projects",
          value: projects.length,
        },
      ],
    },
    socials: {
      github: "https://github.com/thatbeautifuldream",
      linkedin: "https://www.linkedin.com/in/mishramilind/",
      twitter: "https://x.com/milindmishra_",
    },
  },
};

const testimonials: Testimonial[] = [
  {
    message:
      "Welcome onboard, Milind! Cannot wait to see where you take us next <3",
    linkToTestimony:
      "https://www.linkedin.com/feed/update/urn:li:ugcPost:7303644803752247296?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7303644803752247296%2C7303666709750562817%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287303666709750562817%2Curn%3Ali%3AugcPost%3A7303644803752247296%29",
    author: {
      name: "Merlin AI by Foyer",
      bio: "Personal AI assistant",
      image: "/assets/testimonials/merlin.jpeg",
      social: "https://getmerlin.in",
    },
    show: true,
  },
  {
    message:
      "I'm so impressed by your work on the UI so far, I can't wait to deliver those SMOOOTH experiences to our customers. Excited to see you growing into a fullstack role here too. Glad to have you on the team!",
    linkToTestimony:
      "https://www.linkedin.com/feed/update/urn:li:activity:7279841521690890241?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7279841521690890241%2C7279842437064278016%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287279842437064278016%2Curn%3Ali%3Aactivity%3A7279841521690890241%29",
    author: {
      name: "Yash Chavan",
      bio: "Founder & CEO at SARAL",
      image: "/assets/testimonials/yash.jpeg",
      social: "https://www.linkedin.com/in/yctheman",
    },
    show: false,
  },
  {
    message:
      "100% AGREE! Also, the way team has launched the project is commendable. This is by far the most successful project launch on Peerlist",
    linkToTestimony:
      "https://peerlist.io//milind/project/ai-roadmap-generator?commentId=CH6AJBDNQGQRPR8CG9DBBQE6LDDD",
    author: {
      name: "Akash Bhadange",
      bio: "CEO at Peerlist",
      image: "/assets/testimonials/akash.webp",
      social: "https://peerlist.io/designerdada",
    },
    show: true,
  },
];

const contact: Contact = {
  profilePicture: "https://avatars.githubusercontent.com/u/28717686?v=4",
  name: "Milind Mishra",
  title: "Software Engineer & Designer",
  socialLinks: {
    github: "https://github.com/thatbeautifuldream",
    twitter: "https://twitter.com/milindmishra_",
    email: "mailto:contact@milindmishra.com",
  },
};

const skills: string[] = [
  "TypeScript",
  "JavaScript",
  "CSS",
  "Shell",
  "MDX",
  "Astro",
];

export { projects, experience, details, testimonials, contact, skills };
