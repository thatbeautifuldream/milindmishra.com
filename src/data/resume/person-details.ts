import { PersonDetails } from "./schema";
import { experience } from "./experience";
import { projects } from "./projects";

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

export { details };
