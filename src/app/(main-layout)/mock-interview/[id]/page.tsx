import { YouTubeEmbed } from "@next/third-parties/google";
import { mockInterviews } from "../interview";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/lib/fonts";
import Markdown from "react-markdown";

export default async function MockInterviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const mockInterview = mockInterviews.find(
    (interview) => String(interview.id) === id
  );

  if (!mockInterview) {
    return notFound();
  }

  const markdown = `## Mock Interview Details
### Title: ${mockInterview.title}
### Description: ${mockInterview.description}
`;

  return (
    <>
      <div className="space-y-4">
        <h1
          className={cn(
            "text-3xl font-bold text-white",
            bricolageGrotesque.className
          )}
        >
          {mockInterview.title}
        </h1>
        <p className="text-md text-gray-300">{mockInterview.description}</p>
        <YouTubeEmbed
          videoid={mockInterview.videoId}
          height={400}
          params="controls=1"
        />
        <Markdown className="prose prose-invert max-w-6xl">{markdown}</Markdown>
      </div>
    </>
  );
}
