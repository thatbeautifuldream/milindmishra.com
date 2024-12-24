export const experience = [
  {
    title: "Founding Product Engineer",
    description:
      "Part of ideation and design involving multiple user flows. Built multimodal AI chatbot for better skill understanding using OpenAI. Led UI for skill validator, recruiter & candidate flows. Architected deployment processes for multiple Next.js applications on AWS EC2.",
    organization: {
      name: "Proof of Skill",
      logo: "https://p1.edge.duggup.com/organizations/213603474374859821.jpg?v=0",
    },
    start_date: 1714521600,
    end_date: null,
    location: "Bangalore, India",
    job_type: "full_time",
  },
  {
    title: "Software Engineer",
    description:
      "Led UI for consultant hiring flows involving search, filtering, sorting on various parameters. Built an in-house implementation for email resume requests and email scheduling feature. Built AI Agentic Workflows for resume parsing and email scheduling using Vercel AI SDK.",
    organization: {
      name: "Freelance Consulting",
      logo: "https://p1.edge.duggup.com/organizations/243215570414711012.jpg?v=0",
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
      logo: "https://p1.edge.duggup.com/organizations/243215570364965091.jpg?v=0",
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
      logo: "https://p1.edge.duggup.com/organizations/243215570426200294.jpg?v=0",
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
      logo: "https://p1.edge.duggup.com/organizations/201185251343749571.jpg?v=0",
    },
    start_date: 1648771200,
    end_date: 1654041600,
    location: "Bangalore, India",
    job_type: "full_time",
  },
];

export const projects = [
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

export const skills = [
  "TypeScript",
  "JavaScript",
  "CSS",
  "Shell",
  "MDX",
  "Astro",
];

export const details = {
  person: {
    name: {
      full_name: "Milind Mishra",
      first_name: "Milind",
      last_name: "Mishra",
    },
    profile: {
      bio: "I am a software engineer based in Bangalore, India. I love studying about design and engineering to build products that solve problems.",
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
