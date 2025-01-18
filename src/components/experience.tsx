/* eslint-disable @next/next/no-img-element */
"use client";

import ExperienceTooltip from "@/components/experience-tooltip";
import { experience } from "@/data/resume";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn, formatDate } from "@/lib/utils";
import { motion } from "framer-motion";
import { Minus } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Experience() {
  const [showAll, setShowAll] = useState(false);
  const maxDisplayed = 2;

  const experiencesToShow = showAll
    ? experience
    : experience.slice(0, maxDisplayed);

  return (
    <section className="~space-y-8/6 select-none">
      <h2
        className={cn("~text-2xl/3xl font-bold", bricolageGrotesque.className)}
      >
        Experience
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-3 top-3 h-full w-[2px] bg-green-400/20" />

        <div className="space-y-6 sm:space-y-8">
          {experiencesToShow.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative grid grid-cols-[24px_1fr] ~gap-4/6"
            >
              {/* Timeline dot */}
              <div className="relative">
                <div className="absolute left-[7px] top-[14px]">
                  {index === 0 && (
                    <span className="absolute inline-flex h-[12px] w-[12px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
                    </span>
                  )}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    className={cn(
                      "relative h-[12px] w-[12px] rounded-full border-2",
                      index === 0
                        ? "border-green-400 bg-green-400"
                        : "border-green-400 bg-black"
                    )}
                  />
                </div>
              </div>

              <div className="space-y-3 bg-black/10 backdrop-blur-sm">
                <div className="border border-green-400/20 p-4 sm:p-6 hover:border-green-400 transition-colors">
                  <h3
                    className={cn(
                      "~text-3xl/6xl mb-2 text-green-50 flex items-center",
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {experience.length > maxDisplayed && !showAll && (
        <div className="flex float-right mt-4">
          <Button variant="ghost" onClick={() => setShowAll(true)}>
            Read More
          </Button>
        </div>
      )}
    </section>
  );
}
