import React from "react";
import ClientPitchPage from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pitch | Milind Mishra",
  description:
    "Product Engineer with a proven track record of building successful products from concept to launch. Specializing in modern web technologies and cloud infrastructure.",
};

export default function PitchPage() {
  return (
    <div>
      <ClientPitchPage />
    </div>
  );
}
