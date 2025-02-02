export const experience = [
  {
    title: "Software Engineer",
    description: "Fresh Hire!",
    organization: {
      name: "SARAL",
      description:
        "The easiest way to seed influencers and build your ambassador program",
      logo: "/assets/logos/getsaral_logo.jpeg",
    },
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
      description: "Proven Skills. Trusted Signals. Faster Hires.",
      logo: "/assets/logos/proofofskill_logo.jpeg",
    },
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
      bio: "Helping teams and businesses build digital products that work beautifully.",
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

export const testimonials: {
  message: string;
  linkToTestimony: string;
  author: {
    name: string;
    bio: string;
    image: string;
    social: string;
  };
}[] = [
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
  },
];

export const contact = {
  profilePicture: "https://avatars.githubusercontent.com/u/28717686?v=4",
  name: "Milind Mishra",
  title: "Software Engineer & Designer",
  socialLinks: {
    github: "https://github.com/thatbeautifuldream",
    twitter: "https://twitter.com/milindmishra_",
    email: "mailto:contact@milindmishra.com",
  },
};
