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
    <section className="space-y-6 p-6 rounded-lg">
      <h2 className="text-3xl font-bold text-white">{job.title}</h2>
      <div className="flex items-center text-sm text-gray-300 space-x-4">
        <p className="font-medium">{job.organization.name}</p>
        <p className="italic">{job.location}</p>
      </div>
      {job.start_date && (
        <p className="text-xs text-gray-400 mb-3 mt-1">
          {formatDate(job.start_date)} - {formatDate(job.end_date)}
        </p>
      )}
      <p className="text-base text-gray-200 leading-relaxed">
        {job.description}
      </p>
    </section>
  );
}
