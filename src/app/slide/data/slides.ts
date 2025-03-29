import { Slide } from "./schema";

export const aiForReactDevelopersSlides: Slide[] = [
  {
    title: "AI for React Developers",
    content: "A Deep Dive into the Vercel AI SDK.",
    footer: "By Milind Mishra",
  },
  {
    title: "Why should backend developers have all the fun?",
    content:
      "It's been quite evident from the last 2 years that AI is the future. But why should backend developers have all the fun? Let's explore AI for frontend!",
  },
  {
    title: "What is Vercel's AI SDK?",
    content:
      "The AI SDK is the TypeScript toolkit designed to help developers build AI-powered applications and agents with React, Next.js, Vue, Svelte, Node.js, and more.",
  },
  {
    title: "Why Vercel's AI SDK?",
    content:
      "Let's say you're builiding an AI application with OpenAI. But one fine day, you want to switch to Anthropic. You'll have to rewrite your entire application. But with Vercel's AI SDK, you can switch to any LLM provider with ease.",
  },
  {
    title: "Core Features of Vercel AI SDK",
    content:
      "Comes with support for generating/streaming text and structured outputs, do tool calling and even handle agents.",
  },
  {
    title: "Three parts of Vercel's AI SDK",
    content:
      "1. Core : Used for your backend code (node, bun, deno), 2. UI : Set of framework agnostic hooks and components used for linking up the frontend to the ai sdk backend. 3. RSC : (React Server Components) Used for things like Generative UI.",
  },
  {
    title: "We're going to focus on the Core and UI parts",
    content:
      "We'll be using the Core part to build the backend and the UI part to hook it up to the frontend.",
  },
  {
    title: "Setting Up AI in a Next.js App",
    content:
      "Install dependencies, configure API keys, and making ai chat route.",
  },
  {
    title: "Generating AI Responses",
    content: "Using generateText() to generate text responses from AI.",
  },
  {
    title: "Handling the response",
    content:
      "Managing the response from the api and the related state management.",
  },
  {
    title: "Streaming Protocols !?",
    content:
      "There are bunch of streaming protocols today. Text, Data and Event Streams are the most common ones used in case of AI which come under message-based streaming protocols.",
  },
  {
    title: "Text Streams",
    content:
      "A text stream is a continuous flow of human-readable characters. It is often used for communication in systems that process structured or unstructured text data.",
  },
  {
    title: "Data Streams",
    content:
      "A data stream is a continuous flow of binary or structured data. Unlike text streams, data streams can handle complex information like images, videos, or encoded messages.",
  },
  {
    title: "Event Streams",
    content:
      "An event stream transmits structured event messages over a persistent connection, enabling real-time communication.",
  },
  {
    title: "Streaming AI Responses",
    content:
      "Using streamText() from the api route to stream text in our frontend. Handling the stream with the useChat hook which btw by default handles data stream.",
  },
  {
    title: "Chat & Conversation Management",
    content:
      "Using a messages array to maintain chat history. stop can be used to stop the stream. isLoading can be used to show a loading state. error can be used to show an error state.",
  },
  {
    title: "Generating Structured Outputs",
    content:
      "Using generateObject() to generate structured outputs by providing a zod schema. Handling it on the frontend using the useObject hook.",
  },
  {
    title: "Tool Calling",
    content:
      "Tools are objects that can be called by the model to perform a specific task. We will be using the web_search_preview supported by OpenAi Responses API to search the web and return the results.",
  },
  {
    title: "Areas for future Hacking & Motivation",
    content: `"Chatbot Message Persistence", "Chatbot Tool Usage", "Generative User Interfaces", "Object Generation"`,
  },
  {
    title: "Q&A and Closing Thoughts",
    content: "Recap, key takeaways, and open discussion.",
  },
];
