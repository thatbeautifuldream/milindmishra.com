import { z } from "zod";

export const AwardSchema = z.object({
  link: z.string().url(),
  img: z.string().startsWith("/"),
});

export const ProjectSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(10).max(500),
  moreDetails: z.string().min(10),
  link: z.string().url(),
  repo: z.string().url(),
  tech: z.array(z.string()).min(1),
  awards: z.record(z.string(), AwardSchema).optional(),
});

export const PersonNameSchema = z.object({
  full_name: z.string().min(2).max(100),
  first_name: z.string().min(1).max(50),
  last_name: z.string().min(1).max(50),
});

export const ProfileSchema = z.object({
  bio: z.string().min(50).max(1000),
  shortBio: z.string().min(10).max(200),
});

export const KeyStatSchema = z.object({
  name: z.string().min(1).max(50),
  value: z.number().positive(),
});

export const StatisticsSchema = z.object({
  key_stats: z.array(KeyStatSchema).min(1),
});

export const SocialsSchema = z.object({
  github: z.string().url(),
  linkedin: z.string().url(),
  twitter: z.string().url(),
});

export const PersonDetailsSchema = z.object({
  person: z.object({
    name: PersonNameSchema,
    profile: ProfileSchema,
    statistics: StatisticsSchema,
    socials: SocialsSchema,
  }),
});

export const TestimonialAuthorSchema = z.object({
  name: z.string().min(2).max(100),
  bio: z.string().min(10).max(300),
  image: z.string().startsWith("/"),
  social: z.string().url(),
});

export const TestimonialSchema = z.object({
  message: z.string().min(20).max(1000),
  linkToTestimony: z.string().url(),
  author: TestimonialAuthorSchema,
  show: z.boolean(),
});

export const SocialLinksSchema = z.object({
  github: z.string().url(),
  twitter: z.string().url(),
  email: z.string().email(),
});

export const ContactSchema = z.object({
  profilePicture: z.string().startsWith("/"),
  name: z.string().min(2).max(100),
  title: z.string().min(2).max(100),
  socialLinks: SocialLinksSchema,
});

export const OrganizationSchema = z.object({
  name: z.string().min(1).max(100),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  description: z.string().min(10).max(500),
  logo: z.string().startsWith("/assets/logos/").endsWith(".jpeg"),
});

export const JobTypeSchema = z.enum(["full_time", "contract", "internship"]);

export const ExperienceSchema = z
  .object({
    title: z.string().min(2).max(100),
    description: z.string().min(10).max(1000),
    organization: OrganizationSchema,
    skills: z.array(z.string()).min(1).max(15),
    start_date: z.number().int().positive(),
    end_date: z.number().int().positive().nullable(),
    location: z.string().min(2).max(100),
    job_type: JobTypeSchema,
  })
  .refine(
    (data) => {
      if (data.end_date === null) return true;
      return data.start_date <= data.end_date;
    },
    {
      message: "End date must be after start date",
      path: ["end_date"],
    }
  );

export const ExperienceArraySchema = z.array(ExperienceSchema);

export type Award = z.infer<typeof AwardSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type PersonName = z.infer<typeof PersonNameSchema>;
export type Profile = z.infer<typeof ProfileSchema>;
export type KeyStat = z.infer<typeof KeyStatSchema>;
export type Statistics = z.infer<typeof StatisticsSchema>;
export type Socials = z.infer<typeof SocialsSchema>;
export type PersonDetails = z.infer<typeof PersonDetailsSchema>;
export type TestimonialAuthor = z.infer<typeof TestimonialAuthorSchema>;
export type Testimonial = z.infer<typeof TestimonialSchema>;
export type SocialLinks = z.infer<typeof SocialLinksSchema>;
export type Contact = z.infer<typeof ContactSchema>;
export type Organization = z.infer<typeof OrganizationSchema>;
export type JobType = z.infer<typeof JobTypeSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type ExperienceArray = z.infer<typeof ExperienceArraySchema>;
