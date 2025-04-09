import { Slide } from "./schema";

const MAX_LINES = 24;

export const aiForReactDevelopersSlides: Slide[] = [
  {
    title: "AI for React Developers 🚀",
    content: "A deep-dive into Vercel's AI SDK",
    footer: "React Bangalore | Milind Mishra",
    state: "title-slide",
    titleId: "main-title",
    contentId: "main-subtitle",
    footerId: "main-footer",
  },
  {
    title: "Find these Slides! 📱",
    image: "https://www.milindmishra.com/assets/qr/ai-slides.png",
    imageId: "qr-code",
  },
  {
    title: "Why should backend developers have all the AI fun? 🤖",
    content:
      "AI isn't just for the backend folks! As React developers, we can build intelligent, conversational UIs that feel magical. Let's bring AI to the frontend together!",
    contentId: "why-content",
  },
  {
    title: "What is AI SDK? 🧩",
    content:
      "The AI SDK is a TypeScript toolkit that helps you build AI-powered applications with React, Next.js and more. It's your one-stop shop for adding AI superpowers to your frontend!",
    titleId: "what-is-title",
    contentId: "what-is-content",
    verticalGroup: "vercel-ai-intro",
  },
  {
    title: "Why use the AI SDK? 🤔",
    content:
      "Building with LLMs is complicated! Different providers, complex streaming, managing state... AI SDK handles all of this with a unified, delightful developer experience.",
    verticalGroup: "vercel-ai-intro",
  },
  {
    title: "The Three Pillars of AI SDK 🏛️",
    titleId: "pillars-title",
    verticalGroup: "vercel-ai-intro",
    ul: [
      "AI SDK Core: Unified API for text generation, tool calls, and LLM interactions with any provider",
      "AI SDK UI: Ready-to-use React hooks for chat, completion, and streaming interfaces",
      "AI SDK RSC: Special functions for AI-native applications with React Server Components",
    ],
    ulItemClassName: "fragment fade-in",
    listItemsAutoReveal: true,
  },
  {
    title: "Today's Adventure 🎯",
    content:
      "We'll build a streaming AI chatbot from scratch! Complete with tool calls and multi-step reasoning — all with surprisingly little code.",
    titleId: "mission-title",
    contentId: "mission-content",
  },
  {
    title: "Setting Up Our Project 🛠️",
    content:
      "First things first: let's create a shiny new Next.js app with App Router!",
    titleId: "get-started-title",
    verticalGroup: "implementation",
  },
  {
    code: `pnpm create next-app@latest my-ai-app
cd my-ai-app`,
    codeLanguage: "tsx",
    codeId: "install-code",
    showLineNumbers: true,
    verticalGroup: "implementation",
  },
  {
    title: "Installing AI Superpowers 🧙‍♂️",
    content:
      "Let's add the magical ingredients: ai, @ai-sdk/react, and @ai-sdk/openai — all you need to chat with robots!",
    titleId: "install-title",
    contentId: "install-content",
    verticalGroup: "implementation",
  },
  {
    code: `pnpm add ai @ai-sdk/react @ai-sdk/openai zod`,
    codeLanguage: "tsx",
    codeId: "install-code",
    showLineNumbers: true,
    verticalGroup: "implementation",
  },
  {
    title: "Don't Forget Your Secret Key 🔑",
    content:
      "Create a .env.local file with your OPENAI_API_KEY. No key, no AI magic!",
    titleId: "env-title",
    contentId: "env-content",
    verticalGroup: "implementation",
  },
  {
    code: `// .env.local
OPENAI_API_KEY=your_actual_key_here`,
    codeLanguage: "tsx",
    codeId: "env-code",
    showLineNumbers: true,
    verticalGroup: "implementation",
  },
  {
    title: "Creating Our AI Brain 🧠",
    content: "Let's set up our route handler to connect with OpenAI:",
    titleId: "api-title",
    contentId: "api-content",
  },
  {
    code: `// app/api/chat/route.ts
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Let responses stream for up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o'),
    messages,
  });

  return result.toDataStreamResponse();
}`,
    codeLanguage: "tsx",
    codeId: "api-code",
    showLineNumbers: true,
    highlightLines: "2-3,10-14",
    maxLines: MAX_LINES,
  },
  {
    title: "Building Our Chat UI 💬",
    content:
      "One hook to rule them all! useChat makes building chat UIs ridiculously easy:",
    titleId: "chat-title",
    contentId: "chat-content",
    verticalGroup: "sdk-hooks",
  },
  {
    code: `// app/page.tsx
'use client';

import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map(message => (
        <div key={message.id} className="whitespace-pre-wrap">
          {message.role === 'user' ? 'User: ' : 'AI: '}
          {message.parts.map((part, i) => {
            switch (part.type) {
              case 'text':
                return <div key={\`\${message.id}-\${i}\`}>{part.text}</div>;
            }
          })}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border rounded shadow-xl"
          value={input}
          placeholder="Ask me anything..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}`,
    codeLanguage: "tsx",
    codeId: "chat-code",
    showLineNumbers: true,
    highlightLines: "4,7,13-17",
    maxLines: MAX_LINES,
    verticalGroup: "sdk-hooks",
  },
  {
    title: "Let's Add Some Tools! 🛠️",
    content:
      "LLMs are smart, but they need help with real-world tasks. Let's give our AI some superpowers:",
    titleId: "function-call-title",
    contentId: "function-call-content",
  },
  {
    code: `// app/api/chat/route.ts
import { openai } from '@ai-sdk/openai';
import { streamText, tool } from 'ai';
import { z } from 'zod';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o'),
    messages,
    tools: {
      weather: tool({
        description: 'Get the weather in a location (fahrenheit)',
        parameters: z.object({
          location: z.string().describe('The location to get the weather for'),
        }),
        execute: async ({ location }) => {
          // In real life, we'd call a weather API!
          const temperature = Math.round(Math.random() * (90 - 32) + 32);
          return {
            location,
            temperature,
          };
        },
      }),
    },
  });

  return result.toDataStreamResponse();
}`,
    codeLanguage: "tsx",
    codeId: "function-call-code",
    showLineNumbers: true,
    highlightLines: "3,12-25",
    maxLines: MAX_LINES,
  },
  {
    title: "Displaying Tool Results 🔍",
    content: "Now let's update our UI to show when our AI uses tools:",
    titleId: "tool-display-title",
    contentId: "tool-display-content",
  },
  {
    code: `// Inside app/page.tsx render function
{message.parts.map((part, i) => {
  switch (part.type) {
    case 'text':
      return <div key={\`\${message.id}-\${i}\`}>{part.text}</div>;
    case 'tool-invocation':
      return (
        <pre key={\`\${message.id}-\${i}\`} className="bg-gray-100 p-2 rounded text-xs">
          {JSON.stringify(part.toolInvocation, null, 2)}
        </pre>
      );
  }
})}`,
    codeLanguage: "tsx",
    codeId: "tool-display-code",
    showLineNumbers: true,
    highlightLines: "5-10",
  },
  {
    title: "Multi-Step Reasoning 🧩",
    content:
      "With maxSteps, our AI can use tools, get results, and keep thinking!",
    titleId: "multi-step-title",
    contentId: "multi-step-content",
  },
  {
    code: `// app/page.tsx
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    maxSteps: 5, // Allow up to 5 steps of reasoning with tools
  });
  
  // ... rest of the component
}`,
    codeLanguage: "tsx",
    codeId: "multi-step-code",
    showLineNumbers: true,
    highlightLines: "3-4",
  },
  {
    title: "Weather in Celsius? Let's Add Another Tool! 🌡️",
    content: "Multi-step tools working together - the real magic of AI tools:",
    titleId: "temperature-tool-title",
    contentId: "temperature-tool-content",
  },
  {
    code: `// Add to the tools object
convertFahrenheitToCelsius: tool({
  description: 'Convert a temperature in fahrenheit to celsius',
  parameters: z.object({
    temperature: z
      .number()
      .describe('The temperature in fahrenheit to convert'),
  }),
  execute: async ({ temperature }) => {
    const celsius = Math.round((temperature - 32) * (5 / 9));
    return {
      celsius,
    };
  },
}),`,
    codeLanguage: "tsx",
    codeId: "temperature-tool-code",
    showLineNumbers: true,
    highlightLines: "1-13",
  },
  {
    title: "Cool Features of AI SDK 🌟",
    titleId: "features-title",
    id: "features-slide",
    state: "features-state",
    ul: [
      "Provider Switching - Change models with a single line of code!",
      "Automatic Streaming - No need to manage complex streaming logic",
      "Message History - Tracks the entire conversation automatically",
      "Tool Calling - Easily extend your AI with custom capabilities",
      "Multi-Step Reasoning - Let the AI solve problems in steps",
      "Typescript Support - Full type safety for your AI code",
    ],
    ulItemClassName: "fragment fade-in",
    listItemsAutoReveal: true,
  },
  {
    title: "Beyond The Basics 🚀",
    titleId: "road-ahead-title",
    id: "road-ahead-slide",
    ul: [
      "RAG (Retrieval-Augmented Generation) - Give your AI access to your data",
      "Multi-Modal AI - Working with images and other media types",
      "Persistent Conversations - Save and load chat history",
      "Structured Outputs - Getting formatted data from AI responses",
      "Agent Workflows - Building complex AI-powered agents",
      "Custom Model Providers - Using your own models or other API providers",
    ],
    ulItemClassName: "fragment fade-in",
    listItemsAutoReveal: true,
  },
  {
    title: "Let's Build Together! 🤝",
    content: "AI + React is a powerful combination. What will YOU build?",
    titleId: "connect-title",
    contentId: "connect-content",
  },
  {
    title: "Share your feedback! (anonymous) 💬",
    content: "https://milind.app/feedback",
    transition: "fade",
  },
];
