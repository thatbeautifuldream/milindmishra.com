"use client";

import { Experience } from "@/components/experience";
import { FeaturedProjects } from "@/components/featured-projects";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 sm:py-16">
      <div className="space-y-12 sm:space-y-16">
        <Hero />
        <Experience />
        <FeaturedProjects />
        <Skills />
      </div>
    </main>
  );
}
