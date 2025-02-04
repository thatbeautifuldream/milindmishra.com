import { experience } from "@/data/resume";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn, formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";

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
      <div className="border border-green-400/20 hover:border-green-400 transition-colors bg-black/50 backdrop-blur-sm p-6 space-y-6">
        <h2
          className={cn(
            "text-3xl font-bold text-green-50",
            bricolageGrotesque.className
          )}
        >
          {job.title}
        </h2>

        <div className="flex items-center text-sm text-green-300 space-x-4">
          <p className="font-medium">{job.organization.name}</p>
          <p className="italic">{job.location}</p>
        </div>

        {job.start_date && (
          <p className="text-xs text-green-400/70">
            {formatDate(job.start_date)} - {formatDate(job.end_date)}
          </p>
        )}

        <div className="space-y-4">
          <p className="text-base text-green-300/90 leading-relaxed">
            {job.description}
          </p>

          {job.skills && (
            <div className="flex flex-wrap gap-2 pt-4">
              {job.skills.map((skill, index) => (
                <span
                  key={skill + index}
                  className="text-sm px-2 py-1 bg-green-400/10 text-green-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
