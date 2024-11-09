"use client";

import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { KineticTypography } from "@/components/kinetic-typography";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { useState } from "react";

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 sm:py-16">
      {showAnimation && (
        <KineticTypography onComplete={() => setShowAnimation(false)} />
      )}
      <div className="space-y-12 sm:space-y-16">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </div>
    </main>
  );
}
