import { details } from "@/data/resume";

export function Hero() {
  const { person } = details;

  return (
    <section className="text-center sm:text-left">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 typing-effect inline-block">
        Hey, I&apos;m {person.name.first_name}
      </h1>
      <p className="text-lg sm:text-xl text-green-300 max-w-2xl">
        {person.profile.bio}
      </p>

      <div className="mt-6 flex gap-4 justify-center sm:justify-start">
        {Object.entries(person.socials).map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            {platform.charAt(0).toUpperCase() + platform.slice(1)}
          </a>
        ))}
      </div>
    </section>
  );
}
