import { Metadata } from "next";
import { SlidePageClient } from "./page-client";

export const metadata: Metadata = {
  title: "Slides by Milind Mishra",
  description: "A collection of slides by Milind Mishra",
};

export default function SlidePage() {
  return (
    <SlidePageClient />
  );
}
