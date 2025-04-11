import { Metadata } from "next";
import { redirect } from "next/navigation";
import { SlideContainer } from "@/app/(main-layout)/slide/components/slide-container";
import { slidesConfig } from "@/app/(main-layout)/slide/data";

export const metadata: Metadata = {
  title: "Slides by Milind Mishra",
  description: "A collection of slides by Milind Mishra",
};

async function SlidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!slug) {
    redirect("/slide");
  }

  if (!slidesConfig[slug]) {
    redirect("/slide");
  }

  const slides = slidesConfig[slug];

  return <SlideContainer slides={slides} />;
}

export default SlidePage;
