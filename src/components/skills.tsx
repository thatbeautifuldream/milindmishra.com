import { skills } from "@/data/resume";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/lib/fonts";

export function Skills() {
  return (
    <section id="skills">
      <h2
        className={cn(
          "~text-2xl/3xl font-bold mb-6",
          bricolageGrotesque.className
        )}
      >
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            <Link
              href={`https://github.com/thatbeautifuldream?tab=repositories&q=language:${skill}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-400/20 p-4 text-center hover:border-green-400 transition-colors block w-full bg-black/10 backdrop-blur-sm"
            >
              {skill}
            </Link>
          </motion.div>
        ))}
      </div>
      <p className="text-sm mt-4">
        Generated using{" "}
        <a
          href="https://github.com/thatbeautifuldream/gitcommitfame/commit/8ba05ee0a87b851acaa7b2cc369b7704864ab181"
          className="underline underline-offset-4"
          target="_blank"
        >
          gitcommitfame api
        </a>
      </p>
    </section>
  );
}
