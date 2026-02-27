/* eslint-disable @next/next/no-img-element */
"use client";

import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { experience } from "@/data/resume";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useState, useMemo } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ExperienceCard } from "./experience-card";
import Fuse from "fuse.js";
import { motion, AnimatePresence } from "motion/react";
import { Search, X } from "lucide-react";

export function Experience() {
  const [searchQuery, setSearchQuery] = useState("");

  // Configure Fuse.js for fuzzy search
  const fuse = useMemo(
    () =>
      new Fuse(experience, {
        keys: [
          { name: "title", weight: 0.3 },
          { name: "description", weight: 0.25 },
          { name: "organization.name", weight: 0.2 },
          { name: "organization.description", weight: 0.1 },
          { name: "skills", weight: 0.1 },
          { name: "location", weight: 0.05 },
        ],
        threshold: 0.4,
        includeScore: true,
        ignoreLocation: true,
      }),
    []
  );

  // Filter experiences based on search query
  const experiencesToShow = useMemo(() => {
    if (!searchQuery.trim()) {
      return experience;
    }
    const results = fuse.search(searchQuery);
    return results.map((result) => result.item);
  }, [fuse, searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <section className="~space-y-8/6 select-none">
      <div className="space-y-4">
        <h2
          className={cn("~text-xl/2xl font-bold", bricolageGrotesque.className)}
        >
          Experience
        </h2>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search experiences by role, company, skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 rounded-none"
            />
            {searchQuery && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={clearSearch}
                className="absolute right-2 inset-y-0 my-auto text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center w-6 h-6"
              >
                <X className="h-4 w-4" />
              </motion.button>
            )}
          </div>

          {/* Search Results Count */}
          <AnimatePresence>
            {searchQuery && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-sm text-muted-foreground mt-2"
              >
                {experiencesToShow.length === 0
                  ? "No experiences found"
                  : `${experiencesToShow.length} experience${experiencesToShow.length === 1 ? "" : "s"
                  } found`}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Timeline with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={searchQuery} // Re-animate when search changes
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Timeline>
            <AnimatePresence>
              {experiencesToShow.map((job, index) => (
                <motion.div
                  key={`${job.organization.slug}-${job.title}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  layout
                >
                  <TimelineItem key={index} isActive={index === 0} index={index}>
                    <ExperienceCard job={job} />
                  </TimelineItem>
                </motion.div>
              ))}
            </AnimatePresence>
          </Timeline>
        </motion.div>
      </AnimatePresence>

      {/* No Results Message */}
      <AnimatePresence>
        {searchQuery && experiencesToShow.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-8 space-y-2"
          >
            <p className="text-muted-foreground">
              No experiences match your search criteria.
            </p>
            <Button variant="outline" onClick={clearSearch} className="mt-2">
              Clear Search
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
