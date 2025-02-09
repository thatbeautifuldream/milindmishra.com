"use client";

import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { KineticTypography } from "@/components/kinetic-typography";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Testimonials } from "@/components/testimonials";
import { testimonials } from "@/data/resume";
import { useEffect, useState } from "react";

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const hasSeenAnimation = localStorage.getItem("hasSeenAnimation");
    if (!hasSeenAnimation) {
      setShowAnimation(true);
      localStorage.setItem("hasSeenAnimation", "true");
    } else {
      setShowAnimation(false);
    }
  }, []);

  return (
    <>
      {showAnimation && (
        <KineticTypography onComplete={() => setShowAnimation(false)} />
      )}
      <div className="~space-y-12/16">
        <Hero />
        <Experience />
        <Projects />
        <Testimonials testimonials={testimonials} />
        <Skills />
      </div>
    </>
  );
}
