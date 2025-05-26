import { YouTubeEmbed } from "@next/third-parties/google";
import { mockInterviews } from "../interview";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/lib/fonts";

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

  return (
    <>
      <div className="space-y-3 mb-8">
        <h1
          className={cn(
            "text-3xl font-bold text-white",
            bricolageGrotesque.className
          )}
        >
          {mockInterview.title}
        </h1>
        <p className="text-md text-gray-300">{mockInterview.description}</p>
      </div>
      <div className="">
        <YouTubeEmbed
          videoid={mockInterview.videoId}
          height={400}
          params="controls=1"
        />
      </div>
    </>
  );
}
