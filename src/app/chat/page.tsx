import Assistant from "@/components/assistant";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milind's AI Assistant",
  description:
    "Milind's AI Assistant that can help you learn about his professional background and expertise.",
};

export default async function Chat() {
  return <Assistant />;
}
