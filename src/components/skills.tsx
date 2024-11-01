import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="border border-green-400/20 p-4 text-center hover:border-green-400 transition-colors"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
