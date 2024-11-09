import { details } from "@/data/resume";
import { serif } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ResumeModal } from "./resume-modal";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="min-h-[80dvh] flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-6 text-center">
            <h1
              className={cn(
                "text-4xl md:text-6xl text-green-400",
                serif.className
              )}
            >
              Hi I&apos;m {details.person.name.first_name}!
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              I do{" "}
              {details.person.roles.length > 1
                ? `${details.person.roles
                    .slice(0, -1)
                    .join(", ")} & ${details.person.roles.slice(-1)}`
                : details.person.roles[0]}
              .
            </p>
            <p className="text-gray-400">{details.person.profile.bio}</p>
            <button
              className="border border-green-400/20 text-green-400 py-2 px-4 hover:bg-green-400/10 transition-colors"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              View Resume
            </button>
          </div>
        </div>
      </section>
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
