import { env } from "@/env";
import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { unstable_cache } from "next/cache";

export const maxDuration = 30;

const FALLBACK_RESUME = {
  name: "Milind Mishra",
  title: "Software Engineer",
  skills: ["TypeScript", "React", "Next.js", "Node.js"],
  experience: [
    {
      company: "Company",
      role: "Software Engineer",
      duration: "2020 - Present"
    }
  ]
};

const fetchResumeJson = unstable_cache(
  async () => {
    try {
      const response = await fetch(
        process.env.RESUME_GIST_URL || "https://gist.githubusercontent.com/thatbeautifuldream/0d70e38808751c8b7b53167303bd7df5/raw/resume.json",
        { next: { revalidate: 3600, tags: ['resume'] } }
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch resume: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching resume, using fallback:", error);
      return FALLBACK_RESUME;
    }
  },
  ['resume-data'],
  { revalidate: 3600 }
);

const groq = createOpenAI({
  apiKey: env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

const SYSTEM_PROMPT_BASE = `You are Milind Mishra's personal AI assistant, designed to help people learn about his professional background and expertise.

Your primary goals are to:
1. Help potential employers understand Milind's skills and experience
2. Assist in explaining his technical expertise and project work
3. Provide insights into his problem-solving approach and development philosophy
4. Guide discussions about his professional background and capabilities
5. Help identify how his skills could benefit their team or project

Be professional, knowledgeable, and helpful while maintaining a conversational tone. If asked about specific technical details you're not certain about, be honest and suggest reaching out to Milind directly for clarification.

Be consise and answer as short as possible.
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const resumeData = await fetchResumeJson();

    const SYSTEM_PROMPT = {
      role: "system",
      content: `${SYSTEM_PROMPT_BASE}

Here's what you should know about Milind:
${JSON.stringify(resumeData)}`,
    };

    const augmentedMessages =
      messages.length === 1 ? [SYSTEM_PROMPT, ...messages] : messages;

    const result = streamText({
      model: groq("llama3-70b-8192"),
      messages: augmentedMessages,
      maxTokens: 500,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process chat request" }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
