import { Metadata } from "next";
import { Links } from "@/components/links";

export const metadata: Metadata = {
  title: "Links | Milind Mishra",
  description: "Collection of important links and resources by Milind Mishra",
  openGraph: {
    title: "Links | Milind Mishra",
    description: "Collection of important links and resources by Milind Mishra",
  },
};

export default function LinksPage() {
  return (
    <main className="min-h-screen">
      <Links />
    </main>
  );
}
