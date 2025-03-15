import { experience } from "@/data/resume";
// import { experienceLetters } from "@/data/experience-letters";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ExperienceCard } from "@/components/experience-card";
// import { ExperienceLetter } from "@/components/experience-letter";

export const metadata: Metadata = {
  title: "Experience | Milind Mishra",
  description: "Work Experience of Milind Mishra",
};

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ org: string }>;
}) {
  const { org } = await params;

  const job = experience.find(
    (job) => job.organization.slug === org.toLowerCase()
  );

  if (!job) {
    notFound();
  }

  // const letterData = experienceLetters[job.organization.slug];

  return (
    <section className="min-h-screen space-y-8">
      <ExperienceCard job={job} isTimelineItem={false} />
      {/* {letterData && <ExperienceLetter {...letterData} />} */}
    </section>
  );
}
