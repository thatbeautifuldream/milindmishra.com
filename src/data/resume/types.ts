// Types for Experience
export interface Organization {
  name: string;
  slug?: string;
  description: string;
  logo: string;
}

export interface Experience {
  title: string;
  description: string;
  organization: Organization;
  skills?: string[];
  start_date: number;
  end_date: number | null;
  location: string;
  job_type: "full_time" | "part_time" | "contract" | "internship";
}

// Types for Projects
export interface Award {
  link: string;
  img: string;
}

export interface Project {
  title: string;
  description: string;
  moreDetails: string;
  link: string;
  repo: string;
  tech: string[];
  awards?: Record<string, Award>;
}

// Types for Person Details
export interface PersonName {
  full_name: string;
  first_name: string;
  last_name: string;
}

export interface Profile {
  bio: string;
  shortBio: string;
}

export interface KeyStat {
  name: string;
  value: number;
}

export interface Statistics {
  key_stats: KeyStat[];
}

export interface Socials {
  github: string;
  linkedin: string;
  twitter: string;
}

export interface PersonDetails {
  person: {
    name: PersonName;
    profile: Profile;
    statistics: Statistics;
    socials: Socials;
  };
}

// Types for Testimonials
export interface TestimonialAuthor {
  name: string;
  bio: string;
  image: string;
  social: string;
}

export interface Testimonial {
  message: string;
  linkToTestimony: string;
  author: TestimonialAuthor;
}

// Types for Contact
export interface SocialLinks {
  github: string;
  twitter: string;
  email: string;
}

export interface Contact {
  profilePicture: string;
  name: string;
  title: string;
  socialLinks: SocialLinks;
}
