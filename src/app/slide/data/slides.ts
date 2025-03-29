import { Slide } from "./schema";

export const aiForReactDevelopersSlides: Slide[] = [
  {
    title: "AI for React Developers 🚀",
    content:
      "A Deep Dive into the Vercel AI SDK @ React Play, March 29th, 2025",
    footer: "By Milind Mishra",
  },
  {
    title: "Find these Slides! 📱",
    content: "https://milind.app/slides",
  },
  {
    title: "Get the Code! 💻",
    content: "https://milind.app/code",
  },
  {
    title: "Why should backend developers have all the fun? ✨",
    content:
      "It's been quite evident from the last few years that AI is the future. But why should backend developers have all the fun? Let's explore AI as frontend developers!",
  },
  {
    title: "What is Vercel's AI SDK?",
    content:
      "The AI SDK is the TypeScript toolkit designed to help developers build AI-powered applications and agents with React, Next.js, Vue, Svelte, Node.js, and more.",
  },
  {
    title: "Why Vercel's AI SDK? 🤔",
    content:
      "Imagine switching from OpenAI to Anthropic without rewriting your entire app! That's the power of Vercel AI SDK - it becomes your universal AI adapter!",
  },
  {
    title: "The Three Pillars of the AI SDK 🏛️",
    content:
      "The SDK consists of three main pillars: 1) Core for backend (Node/Bun/Deno), 2) UI for framework-agnostic frontend components, and 3) RSC for Generative UI. It provides comprehensive support for text generation, streaming, structured outputs, tool calling, and agent handling.",
  },
  {
    title: "Our Mission Today 🎯",
    content:
      "We'll be using the Core part to build the backend and the UI part to hook it up to the frontend.",
  },
  {
    title: "Getting Started 🛠️",
    content:
      "Install dependencies, configure API keys, and making AI chat route.",
  },
  {
    title: "AI Response Generation 🤖",
    content: "Using generateText() to generate text responses from AI.",
  },
  {
    title: "Response Management 🎮",
    content:
      "Managing the response from the api and the related state management on the frontend.",
  },
  {
    title: "Streaming Protocols 101 📡",
    content:
      "There are bunch of streaming protocols today. Text, Data and Event Streams are the most common ones used in case of AI which come under message-based streaming protocols.",
  },
  {
    title: "Text Streams 📝",
    content:
      "A text stream is a continuous flow of human-readable characters. It is often used for communication in systems that process structured or unstructured text data.",
  },
  {
    title: "Data Streams 📊",
    content:
      "A data stream is a continuous flow of binary or structured data. Unlike text streams, data streams can handle complex information like images, videos, or encoded messages.",
  },
  {
    title: "Event Streams ⚡",
    content:
      "An event stream transmits structured event messages over a persistent connection, enabling real-time communication.",
  },
  {
    title: "Streaming AI in Action 🌊",
    content:
      "Using streamText() from the api route to stream text in our frontend. Handling the stream with the useChat hook which btw by default handles data stream.",
  },
  {
    title: "Chat Management Made Easy 💬",
    content:
      "Using a messages array to maintain chat history. stop can be used to stop the stream. isLoading can be used to show a loading state. error can be used to show an error state.",
  },
  {
    title: "Structured Output Magic ✨",
    content:
      "Using generateObject() to generate structured outputs by providing a zod schema. Handling it on the frontend using the useObject hook.",
  },
  {
    title: "Tool Calling: Your AI's Swiss Army Knife 🔧",
    content:
      "Tools are objects that can be called by the model to perform a specific task. We will be using the web_search_preview supported by OpenAi Responses API to search the web and return the results.",
  },
  {
    title: "Future Frontiers 🚀",
    content: `"Chatbot Message Persistence", "Chatbot Tool Usage", "Generative User Interfaces", "Object Generation"`,
  },
  {
    title: "Q&A and Closing Thoughts",
    content: "Recap, key takeaways, and open discussion.",
  },
];
