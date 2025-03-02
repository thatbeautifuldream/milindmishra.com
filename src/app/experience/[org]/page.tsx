import { experience } from "@/data/resume";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ExperienceCard } from "@/components/experience-card";

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

  return (
    <section className="min-h-screen">
      <ExperienceCard job={job} isTimelineItem={false} />
    </section>
  );
}
