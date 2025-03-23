/* eslint-disable @next/next/no-img-element */
import { getProjects } from "@/data/resume";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Github } from "lucide-react";
import { useState } from "react";
import { TProject } from "@/services/github/github.service";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const data = useQuery<TProject[]>({
    queryKey: ["projects"],
    queryFn: () => getProjects(),
  });

  if (data.isLoading) {
    return <div>Loading...</div>;
  }

  if (data.isError) {
    return <div>Error: {data.error.message}</div>;
  }

  return (
    <section id="projects">
      <h2
        className={cn(
          "~text-xl/2xl font-bold mb-4",
          bricolageGrotesque.className
        )}
      >
        Projects
      </h2>
      <div className="flex flex-col gap-6">
        {data.data?.map((project, index) => (
          <div
            key={project.id}
            className={cn(
              "relative border p-4 sm:p-6",
              "hover:border-green-400 transition-colors",
              "bg-black/10 backdrop-blur-sm",
              hoveredIndex === index
                ? "border-green-400"
                : "border-green-400/20"
            )}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute top-4 right-4 flex gap-2 opacity-70 hover:opacity-100">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors p-1 hover:bg-green-400/10"
              >
                <Github size={16} />
              </a>
            </div>

            <div className="mb-4">
              <h3
                className={cn(
                  "~text-xl/2xl mb-2 text-green-50",
                  bricolageGrotesque.className
                )}
              >
                {project.name}
              </h3>
              <p className="text-green-300 ~text-sm/base">
                {project.description || "No description available"}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.language && (
                <span
                  key={project.language}
                  className="text-sm px-2 py-1 bg-green-400/10 text-green-300"
                >
                  {project.language}
                </span>
              )}
              {project.topics.map((topic, index) => (
                <span
                  key={topic + index}
                  className="text-sm px-2 py-1 bg-green-400/10 text-green-300"
                >
                  {topic}
                </span>
              ))}
            </div>

            <div className="flex gap-4 text-sm text-green-300">
              <span>⭐ {project.stars}</span>
              <span>🔄 {project.forks}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
