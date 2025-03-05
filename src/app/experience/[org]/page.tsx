import { experience } from "@/data/resume";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ExperienceCard } from "@/components/experience-card";
import { ExperienceLetter } from "@/components/experience-letter";

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

  const showLetter = job.organization.slug === "saral";

  return (
    <section className="min-h-screen space-y-8">
      <ExperienceCard job={job} isTimelineItem={false} />

      {showLetter && (
        <ExperienceLetter
          companyName="SARAL, Inc"
          companyLogo="/assets/logos/getsaral_logo.jpeg"
          companyAddress="16192, Coastal Highway Lewes, DE 19958"
          companyEmail="support@getsaral.com"
          letterDate="February 14th, 2025"
          employeeName="Mr. Milind Kumar Mishra"
          position="Software Engineer"
          startDate="November 25, 2024"
          endDate="February 7, 2025"
          content="During his time at SARAL, Milind has consistently demonstrated a good work ethic and a commendable level of frontend engineering skill. He contributed significantly to building our admin dashboard and a few other critical features. He has a proactive approach to problem-solving and a keen ability to learn new technologies. We wish Milind all the best in his future endeavors. He is a talented and dedicated individual, and we are confident that he will continue to achieve great success."
          signerName="Michael Teves"
          signerPosition="People and HR Manager at SARAL"
        />
      )}
    </section>
  );
}
