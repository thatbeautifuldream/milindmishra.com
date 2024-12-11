export interface LinkItem {
  title: string;
  url: string;
  description?: string;
  icon?: string; // You can add icons later if needed
}

export const links: LinkItem[] = [
  {
    title: "GitHub",
    url: "https://github.com/thatbeautifuldream",
    description: "Check out my open source projects and contributions",
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/mishramilind",
    description: "Connect with me professionally",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/milindmishra_",
    description: "Follow me for tech insights and updates",
  },
];
