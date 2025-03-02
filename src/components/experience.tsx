/* eslint-disable @next/next/no-img-element */
"use client";

import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { experience } from "@/data/resume";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "./ui/button";
import { MAX_EXPERIENCES_TO_SHOW } from "@/lib/constants";
import { ExperienceCard } from "./experience-card";

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
            <ExperienceCard job={job} />
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
