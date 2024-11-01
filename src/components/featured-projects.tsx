import { projects } from "@/data/projects";
import { SquareArrowOutUpRight, Github } from "lucide-react";

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Featured Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-green-400/20 p-6 hover:border-green-400 transition-colors relative"
          >
            <div className="absolute top-4 right-4 flex gap-2">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  <Github size={16} />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  <SquareArrowOutUpRight size={16} />
                </a>
              )}
            </div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-green-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="text-sm px-2 py-1 bg-green-400/10">
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
