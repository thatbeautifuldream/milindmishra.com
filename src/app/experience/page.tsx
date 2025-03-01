import { Experience } from "@/components/experience";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Experience | Milind Mishra",
  description: "Work Experience of Milind Mishra",
};

export default function ExperiencePage() {
  return (
    <section className="min-h-screen">
      <Experience />
    </section>
  );
}
