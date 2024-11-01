"use client";

import { FeaturedProjects } from "@/components/featured-projects";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8 sm:py-16">
        <div className="space-y-12 sm:space-y-16">
          <Hero />
          <FeaturedProjects />
          <Skills />
        </div>
      </main>

      <Footer />
    </div>
  );
}
