import { z } from "zod";

const AwardSchema = z.object({
  link: z.string().url(),
  img: z.string().startsWith("/"),
});

const ProjectSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(10).max(500),
  moreDetails: z.string().min(10),
  link: z.string().url(),
  repo: z.string().url(),
  tech: z.array(z.string()).min(1),
  awards: z.record(z.string(), AwardSchema).optional(),
});

const PersonNameSchema = z.object({
  full_name: z.string().min(2).max(100),
  first_name: z.string().min(1).max(50),
  last_name: z.string().min(1).max(50),
});

const ProfileSchema = z.object({
  bio: z.string().min(50).max(1000),
  shortBio: z.string().min(10).max(200),
});

const KeyStatSchema = z.object({
  name: z.string().min(1).max(50),
  value: z.number().positive(),
});

const StatisticsSchema = z.object({
  key_stats: z.array(KeyStatSchema).min(1),
});

const SocialsSchema = z.object({
  github: z.string().url(),
  linkedin: z.string().url(),
  twitter: z.string().url(),
});

const PersonDetailsSchema = z.object({
  person: z.object({
    name: PersonNameSchema,
    profile: ProfileSchema,
    statistics: StatisticsSchema,
    socials: SocialsSchema,
  }),
});

const TestimonialAuthorSchema = z.object({
  name: z.string().min(2).max(100),
  bio: z.string().min(10).max(300),
  image: z.string().startsWith("/"),
  social: z.string().url(),
});

const TestimonialSchema = z.object({
  message: z.string().min(20).max(1000),
  linkToTestimony: z.string().url(),
  author: TestimonialAuthorSchema,
});

const SocialLinksSchema = z.object({
  github: z.string().url(),
  twitter: z.string().url(),
  email: z.string().email(),
});

const ContactSchema = z.object({
  profilePicture: z.string().startsWith("/"),
  name: z.string().min(2).max(100),
  title: z.string().min(2).max(100),
  socialLinks: SocialLinksSchema,
});

const OrganizationSchema = z.object({
  name: z.string().min(1).max(100),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  description: z.string().min(10).max(500),
  logo: z.string().startsWith("/assets/logos/").endsWith(".jpeg"),
});

const JobTypeSchema = z.enum(["full_time", "contract", "internship"]);

const ExperienceSchema = z
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

const ExperienceArraySchema = z.array(ExperienceSchema);

type Award = z.infer<typeof AwardSchema>;
type Project = z.infer<typeof ProjectSchema>;
type PersonName = z.infer<typeof PersonNameSchema>;
type Profile = z.infer<typeof ProfileSchema>;
type KeyStat = z.infer<typeof KeyStatSchema>;
type Statistics = z.infer<typeof StatisticsSchema>;
type Socials = z.infer<typeof SocialsSchema>;
type PersonDetails = z.infer<typeof PersonDetailsSchema>;
type TestimonialAuthor = z.infer<typeof TestimonialAuthorSchema>;
type Testimonial = z.infer<typeof TestimonialSchema>;
type SocialLinks = z.infer<typeof SocialLinksSchema>;
type Contact = z.infer<typeof ContactSchema>;
type Organization = z.infer<typeof OrganizationSchema>;
type JobType = z.infer<typeof JobTypeSchema>;
type Experience = z.infer<typeof ExperienceSchema>;
type ExperienceArray = z.infer<typeof ExperienceArraySchema>;

export {
  AwardSchema,
  ProjectSchema,
  PersonNameSchema,
  ProfileSchema,
  KeyStatSchema,
  StatisticsSchema,
  SocialsSchema,
  PersonDetailsSchema,
  TestimonialAuthorSchema,
  TestimonialSchema,
  SocialLinksSchema,
  ContactSchema,
  OrganizationSchema,
  JobTypeSchema,
  ExperienceSchema,
  ExperienceArraySchema,
  type Award,
  type Project,
  type PersonName,
  type Profile,
  type KeyStat,
  type Statistics,
  type Socials,
  type PersonDetails,
  type TestimonialAuthor,
  type Testimonial,
  type SocialLinks,
  type Contact,
  type Organization,
  type JobType,
  type Experience,
  type ExperienceArray,
};
