import { cn } from "@/lib/utils";
import MockInterviewCard from "./_components/mock-interview-card";
import { mockInterviews } from "./interview";
import { bricolageGrotesque } from "@/lib/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mock Interviews | Milind Mishra",
  description: "Mock interviews to prepare for your next big opportunity.",
};

export default function Page() {
  return (
    <>
      <section className="space-y-3 mb-8">
        <h1
          className={cn(
            "text-3xl font-bold text-white",
            bricolageGrotesque.className
          )}
        >
          Mock Interviews
        </h1>
        <p className="text-md">
          Explore mock interviews to prepare for your next big opportunity. Each
          session is designed to simulate real interview conditions, helping you
          refine your skills and boost your confidence.
        </p>
      </section>
      <div className="flex flex-col gap-4">
        {mockInterviews.map((interview) => (
          <MockInterviewCard
            key={interview.id}
            slug={`${interview.id}`}
            title={interview.title}
            description={interview.description}
            index={interview.id - 1}
          />
        ))}
      </div>
    </>
  );
}
