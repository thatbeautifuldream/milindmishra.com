"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type TMockInterviewCardProps = {
  slug: string;
  title: string;
  description: string;
  index: number;
};

export default function MockInterviewCard({
  slug,
  title,
  description,
  index,
}: TMockInterviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="border border-green-700 p-6 hover:border-green-500 hover:bg-green-900/20 transition-colors h-full backdrop-blur-sm"
    >
      <Link href={`/mock-interview/${slug}`} className="block h-full">
        <article className="flex flex-col h-full">
          <h2
            className={cn(
              "text-xl font-bold text-white mb-3",
              bricolageGrotesque.className
            )}
          >
            {title || "Mock Interview"}
          </h2>
          <p className="text-green-300 font-mono text-sm mb-6 flex-grow">
            {description || "Mock interview description not available."}
          </p>
        </article>
      </Link>
    </motion.div>
  );
}
