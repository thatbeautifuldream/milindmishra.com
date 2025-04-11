/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { Experience } from "@/data/resume/resume-schema";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn, formatDate } from "@/lib/utils";
import { Link } from "next-view-transitions";
interface ExperienceCardProps {
  job: Experience;
  isTimelineItem?: boolean;
}

export function ExperienceCard({
  job,
  isTimelineItem = true,
}: ExperienceCardProps) {
  const CardContent = () => (
    <div className="border border-green-400/20 p-4 sm:p-6 hover:border-green-400 transition-colors relative">
      <Badge className="absolute font-mono uppercase text-xs top-4 sm:top-6 right-4 sm:right-6 truncate">
        {job.location}
      </Badge>
      <h3
        className={cn(
          "~text-xl/2xl mb-2 text-green-50 flex items-center",
          bricolageGrotesque.className
        )}
      >
        {job.title}
      </h3>
      <div className="text-green-300 flex items-center font-semibold ~text-xs/base">
        <div className="flex items-center cursor-pointer hover:text-green-400 transition-colors">
          <img
            src={job.organization.logo}
            alt={`${job.organization.name} Logo`}
            className="h-6 w-6 mr-2 rounded-full border border-green-400/20"
          />
          {job.organization.name}
        </div>
      </div>
      {job.start_date && (
        <p className="text-green-300 ~text-xs/sm mb-2 sm:mb-3 ~mt-1/2">
          {formatDate(job.start_date)} - {formatDate(job.end_date)}
        </p>
      )}
      <p className="text-green-300 ~text-sm/base leading-relaxed">
        {job.description}
      </p>
      {job.skills && (
        <div className="flex flex-wrap gap-2 pt-4">
          {job.skills.map((skill, index) => (
            <Badge key={skill + index}>{skill}</Badge>
          ))}
        </div>
      )}
    </div>
  );

  if (!isTimelineItem) {
    return <CardContent />;
  }

  return (
    <Link href={`/experience/${job.organization.slug}`}>
      <CardContent />
    </Link>
  );
}
