"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

interface TimelineItemProps {
  children: ReactNode;
  isActive?: boolean;
  index?: number;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Timeline line */}
      <div className="absolute left-3 top-3 h-full w-[2px] bg-green-400/20" />
      <div className="space-y-6 sm:space-y-8">{children}</div>
    </div>
  );
}

export function TimelineItem({
  children,
  isActive = false,
  index = 0,
  className,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className={cn("relative grid grid-cols-[24px_1fr] ~gap-4/6", className)}
    >
      {/* Timeline dot */}
      <div className="relative">
        <div className="absolute left-[7px] top-[14px]">
          {isActive && (
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
              isActive
                ? "border-green-400 bg-green-400"
                : "border-green-400 bg-black"
            )}
          />
        </div>
      </div>
      <div className="space-y-3 bg-black/10 backdrop-blur-sm">{children}</div>
    </motion.div>
  );
}
