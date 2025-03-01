/* eslint-disable @next/next/no-img-element */
"use client";

import ExperienceTooltip from "@/components/experience-tooltip";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { experience } from "@/data/resume";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn, formatDate } from "@/lib/utils";
import { Minus } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { MAX_EXPERIENCES_TO_SHOW } from "@/lib/constants";
import { Link } from "next-view-transitions";

export function Experience() {
  const [showAll, setShowAll] = useState(false);

  const experiencesToShow = showAll
    ? experience
    : experience.slice(0, MAX_EXPERIENCES_TO_SHOW);

  return (
    <section className="~space-y-8/6 select-none">
      <h2
        className={cn("~text-xl/2xl font-bold", bricolageGrotesque.className)}
      >
        Experience
      </h2>

      <Timeline>
        {experiencesToShow.map((job, index) => (
          <TimelineItem key={index} isActive={index === 0} index={index}>
            <Link href={`/experience/${job.organization.slug}`}>
              <div className="border border-green-400/20 p-4 sm:p-6 hover:border-green-400 transition-colors">
                <h3
                  className={cn(
                    "~text-xl/2xl mb-2 text-green-50 flex items-center",
                    bricolageGrotesque.className
                  )}
                >
                  {job.title}
                </h3>
                <div className="text-green-300 flex items-center ~text-sm/base">
                  <ExperienceTooltip organization={job.organization} />
                  <Minus className="h-2 w-2 m-2" />
                  {job.location}
                </div>
                {job.start_date && (
                  <p className="text-green-300 ~text-xs/sm mb-2 sm:mb-3 ~mt-1/2">
                    {formatDate(job.start_date)} - {formatDate(job.end_date)}
                  </p>
                )}
                <p className="text-green-300 ~text-sm/base leading-relaxed">
                  {job.description}
                </p>
              </div>
            </Link>
          </TimelineItem>
        ))}
      </Timeline>

      {experience.length > MAX_EXPERIENCES_TO_SHOW && !showAll && (
        <div className="flex float-right mt-4">
          <Button variant="ghost" onClick={() => setShowAll(true)}>
            Read More
          </Button>
        </div>
      )}
    </section>
  );
}
