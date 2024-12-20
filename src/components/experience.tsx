"use client";

import { experience } from "@/data/resume";
import { serif } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function formatDate(timestamp: number | null) {
  if (!timestamp) return "Present";
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
  }).format(new Date(timestamp * 1000));
}

export function Experience() {
  return (
    <section className="~space-y-8/6">
      <h2 className="~text-2xl/3xl font-bold">Experience</h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-3 top-3 h-full w-[2px] bg-green-400/20" />

        <div className="space-y-6 sm:space-y-8">
          {experience.map((job, index) => (
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
                <div className="absolute left-[7px] top-[14px] h-[12px] w-[12px] rounded-full border-2 border-green-400 bg-black" />
              </div>

              <div className="space-y-3 bg-black/10 backdrop-blur-sm">
                <div className="border border-green-400/20 p-4 sm:p-6 hover:border-green-400 transition-colors">
                  <h3
                    className={cn(
                      "~text-3xl/6xl mb-2 text-green-50",
                      serif.className
                    )}
                  >
                    {job.title}
                  </h3>
                  <p className="text-green-300 ~text-sm/base">
                    {job.organization.name} • {job.location}
                  </p>
                  {job.start_date && (
                    <p className="text-green-300 ~text-sm/base mb-2 sm:mb-3">
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
    </section>
  );
}
