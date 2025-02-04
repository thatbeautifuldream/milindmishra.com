import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { techTimeline } from "@/data/tech-timeline";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn, formatDate } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Stack Timeline | Milind Mishra",
  description: "My journey through different technology stacks and tools",
};

export default function TechStackTimeline() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto">
        <h1
          className={cn(
            "~text-2xl/3xl font-bold mb-6",
            bricolageGrotesque.className
          )}
        >
          Tech Stack Timeline
        </h1>

        <Timeline>
          {techTimeline.map((entry, index) => (
            <TimelineItem key={index} isActive={index === 0} index={index}>
              <div className="border border-green-400/20 p-4 sm:p-6 hover:border-green-400 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Image
                    src={entry.icon}
                    alt={entry.name}
                    width={24}
                    height={24}
                    className="rounded-sm"
                  />
                  <h3
                    className={cn(
                      "~text-xl/2xl text-green-50",
                      bricolageGrotesque.className
                    )}
                  >
                    {entry.name}
                  </h3>
                  {entry.url && (
                    <Link
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400/60 hover:text-green-400 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  )}
                </div>

                <p className="text-green-300 ~text-xs/sm mb-3">
                  {formatDate(entry.period.start)} -{" "}
                  {formatDate(entry.period.end)}
                </p>

                <p className="text-green-300 ~text-sm/base leading-relaxed mb-4">
                  {entry.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-2 py-1 bg-green-400/10 text-green-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}
