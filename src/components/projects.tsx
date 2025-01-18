/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data/resume";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { SquareArrowOutUpRight, Github } from "lucide-react";
import { useState } from "react";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects">
      <h2
        className={cn(
          "~text-2xl/3xl font-bold mb-6",
          bricolageGrotesque.className
        )}
      >
        Projects
      </h2>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={cn(
              "relative border p-6",
              "hover:shadow-lg",
              "bg-black/10 backdrop-blur-sm",
              hoveredIndex === index
                ? "border-green-400"
                : "border-green-400/20"
            )}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {project.awards && Object.keys(project.awards).length > 0 && (
              <div className="flex gap-4 mb-2">
                {Object.keys(project.awards).map((award) => (
                  <a
                    key={award}
                    href={
                      project.awards[award as keyof typeof project.awards].link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={
                        project.awards[award as keyof typeof project.awards].img
                      }
                      alt={award}
                      className="~h-24/36 ~w-24/36"
                    />
                  </a>
                ))}
              </div>
            )}

            <div className="absolute top-4 right-4 flex gap-2 opacity-70 hover:opacity-100">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors p-1 hover:bg-green-400/10"
                >
                  <Github size={16} />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors p-1 hover:bg-green-400/10"
                >
                  <SquareArrowOutUpRight size={16} />
                </a>
              )}
            </div>

            <div className="mb-4">
              <h3
                className={cn(
                  "~text-3xl/6xl mb-2 text-green-50",
                  bricolageGrotesque.className
                )}
              >
                {project.title}
              </h3>
              <p className="text-green-300/90 ~text-sm/base">
                {project.description}
              </p>
            </div>

            <div className="overflow-hidden">
              <p className="text-green-200 mb-4 ~text-sm/base">
                {project.moreDetails}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, index) => (
                <span
                  key={tech + index}
                  className="text-sm px-2 py-1 bg-green-400/10 text-green-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
