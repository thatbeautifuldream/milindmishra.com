import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { experience, projects, skills, contact } from "@/data/resume";

export const runtime = "edge";

const systemPrompt = `You are an AI assistant for Milind Mishra. Your role is to help potential employers, collaborators, or anyone interested in learning more about Milind's professional background.

Here is Milind's resume information:

Experience:
${JSON.stringify(experience, null, 2)}

Projects:
${JSON.stringify(projects, null, 2)}

Skills:
${JSON.stringify(skills, null, 2)}

Contact:
${JSON.stringify(contact, null, 2)}

Use this information to answer questions about Milind's background, experience, skills, and qualifications. Be professional, friendly, and highlight relevant experiences and skills based on the questions asked. If you don't know something or if it's not in the provided information, say so honestly.`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const { textStream } = streamText({
    model: openai("gpt-4o"),
    prompt: systemPrompt,
    messages: messages,
  });

  return new Response(textStream);
}
