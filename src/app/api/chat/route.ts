import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

export const maxDuration = 30;

async function fetchResumeJson() {
  const response = await fetch(
    "https://gist.githubusercontent.com/thatbeautifuldream/0d70e38808751c8b7b53167303bd7df5/raw/resume.json"
  );
  const data = await response.json();
  return data;
}

const groq = createOpenAI({
  apiKey: process.env.GROQ_API_KEY ?? "",
  baseURL: "https://api.groq.com/openai/v1",
});

const RESUME_JSON = await fetchResumeJson();

const SYSTEM_PROMPT = {
  role: "system",
  content: `You are Milind Mishra's personal AI assistant, designed to help people learn about his professional background and expertise. Here's what you should know:

${JSON.stringify(RESUME_JSON)}

Your primary goals are to:
1. Help potential employers understand Milind's skills and experience
2. Assist in explaining his technical expertise and project work
3. Provide insights into his problem-solving approach and development philosophy
4. Guide discussions about his professional background and capabilities
5. Help identify how his skills could benefit their team or project

Be professional, knowledgeable, and helpful while maintaining a conversational tone. If asked about specific technical details you're not certain about, be honest and suggest reaching out to Milind directly for clarification.

Be consise and answer as short as possible.
`,
};

export async function POST(req: Request) {
  const { messages } = await req.json();

  const augmentedMessages =
    messages.length === 1 ? [SYSTEM_PROMPT, ...messages] : messages;

  console.log(augmentedMessages);

  const result = streamText({
    model: groq("llama3-70b-8192"),
    messages: augmentedMessages,
    maxTokens: 500,
  });

  return result.toDataStreamResponse();
}
