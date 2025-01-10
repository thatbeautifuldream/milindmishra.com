import { experience } from "@/data/resume";
import { formatDate } from "@/lib/utils";

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ org: string }>;
}) {
  const { org } = await params;

  const job = experience.find(
    (job) => job.organization.name.toLowerCase() === org
  );

  if (!job) {
    return <p>Experience not found</p>;
  }

  return (
    <section className="~space-y-8/6">
      <h2 className="~text-2xl/3xl font-bold">{job.title}</h2>
      <div className="text-green-300 flex items-center ~text-sm/base">
        <p>{job.organization.name}</p>
        <p>{job.location}</p>
      </div>
      {job.start_date && (
        <p className="text-green-300 ~text-xs/sm mb-2 sm:mb-3 ~mt-1/2">
          {formatDate(job.start_date)} - {formatDate(job.end_date)}
        </p>
      )}
      <p className="text-green-300 ~text-sm/base leading-relaxed">
        {job.description}
      </p>
    </section>
  );
}
