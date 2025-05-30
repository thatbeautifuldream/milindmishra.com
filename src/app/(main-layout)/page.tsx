"use client";

import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Testimonials } from "@/components/testimonials";
import { testimonials } from "@/data/resume";
import GitHubCalendar from "react-github-calendar";

export default function Home() {
  return (
    <>
      <div className="~space-y-12/16">
        <Hero />
        <Experience />
        <div className="flex justify-center">
          <GitHubCalendar username="thatbeautifuldream" />
        </div>
        <Projects />
        <Testimonials testimonials={testimonials} />
        <Skills />
      </div>
    </>
  );
}
