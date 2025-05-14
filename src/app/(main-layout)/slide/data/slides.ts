import { Slide } from "./schema";

// const MAX_LINES = 24;

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
    backgroundIframe: "https://milindmishra.com",
    backgroundInteractive: true,
    transition: "zoom",
  },
  {
    title: "Why should backend developers have all the fun? 😁",
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
    ul: [
      "AI SDK Core: Unified API for text generation, tool calls, and LLM interactions with any provider",
      "AI SDK UI: Ready-to-use React hooks for chat, completion, and streaming interfaces",
      "AI SDK RSC: Special functions for AI-native applications with React Server Components",
    ],
    ulItemClassName: "fragment",
    listItemsAutoReveal: true,
    verticalGroup: "vercel-ai-intro",
  },
  {
    title: "Today's Mission 🎯",
    content:
      "We'll explore three powerful AI capabilities: text generation, streaming text, and structured data streaming. All with a beautiful React UI!",
    titleId: "mission-title",
    contentId: "mission-content",
  },
  {
    title: "Let the AI Experimentation Begin! 🧪",
    content: "Let's get hands dirty with some code!",
    titleId: "hands-on-title",
    contentId: "hands-on-content",
  },
  {
    backgroundIframe: "https://sdk.vercel.ai/demo",
    backgroundInteractive: true,
    transition: "zoom",
  },
  {
    backgroundIframe:
      "https://milindmishra.com/gist/81b5d579e38fb79432ac2f5d525d80ba",
    backgroundInteractive: true,
    transition: "zoom",
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
    ],
    ulItemClassName: "fragment fade-in",
    listItemsAutoReveal: true,
  },
  {
    backgroundIframe: "https://sdk.vercel.ai/docs/introduction",
    backgroundInteractive: true,
    transition: "zoom",
  },
  {
    title: "Find these Slides! 📱",
    image: "https://www.milindmishra.com/assets/qr/ai-slides.png",
    imageId: "qr-code",
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


export const buildingRealtimeApplicationsWithReactiveDatabaseSlides: Slide[] = [
  {
    title: "Building Real-Time Applications with Reactive Databases 🔄",
    content: "Simplifying Real-Time App Development with Convex and React",
    footer: "React Bangalore | Milind Mishra",
    state: "title-slide",
    titleId: "main-title",
    contentId: "subtitle",
    footerId: "footer",
  },
  {
    title: "Pain Points of Real-Time Application Development 😓",
    content:
      "1. High complexity of managing live data across client-server\n2. Inefficiencies of handling real-time updates in traditional backends\n3. Scalability and performance challenges\n4. Difficult and laggy user experiences due to manual sync",
    ulItemClassName: "fragment fade-in",
    listItemsAutoReveal: true,
  },
  {
    title: "Enter Convex 🚀",
    content: "A reactive database designed for the modern web.",
    ul: [
      "Reactive Queries - Automatic reactivity to changes",
      "Live Mutations - Simplified state manipulation",
      "Serverless Scalability - Built-in scaling without manual intervention",
      "TypeScript Integration - Strong typing across the tech stack",
    ],
    ulItemClassName: "fragment fade-in",
    listItemsAutoReveal: true,
    titleId: "enter-convex",
    contentId: "why-convex",
  },
  {
    title: "How Convex Works 🔍",
    ul: [
      "Database: Fully managed, serverless backend",
      "Server-side Functions: TypeScript-written logic",
      "Real-Time Queries: Auto-runs queries on changes",
      "Reactive Updates: Syncs data seamlessly with the UI",
    ],
    ulItemClassName: "fragment fade-in-then-out",
    listItemsAutoReveal: true,
    titleId: "how-title",
    contentId: "how-content",
  },
  {
    title: "Quickstart: Convex with Next.js 🧑‍💻",
    content: "Setting up Convex & React integration with Next.js",
    transition: "slide",
    titleId: "quickstart-title",
    contentId: "quickstart-content",
  },
  {
    title: "Step 1: Install Convex SDK 📦",
    code: `npm install convex`,
    showLineNumbers: false,
    codeLanguage: "bash",
    titleId: "install-title",
    contentId: "install-content",
  },
  {
    title: "Step 2: Initialize Convex in your React App ⚙️",
    code: `import { ConvexProvider, ConvexReactClient } from 'convex/react';

// Initialize the Convex client
const convex = new ConvexReactClient('<CONVEX_URL>');

// Wrap your app
export default function App({ Component, pageProps }) {
  return (
    <ConvexProvider client={convex}>
      <Component {...pageProps} />
    </ConvexProvider>
  );
};
    `,
    codeLanguage: "tsx",
    highlightLines: "1, 4, 9-11",
    showLineNumbers: true,
    titleId: "initialize-title",
    contentId: "initialize-content",
  },
  {
    title: "Step 3: Write Backend Queries ✍️",
    code: `
// Define backend logic to fetch messages
import { query } from './_generated/server';

export default query(async ({ db }) => {
  return await db.query("messages").collect();
});
    `,
    codeLanguage: "tsx",
    highlightLines: "1-5",
    showLineNumbers: true,
    titleId: "queries-title",
    contentId: "queries-content",
  },
  {
    title: "Step 4: Use Queries in React Components ⚛️",
    code: `
import { useQuery } from 'convex/react';

// Fetch live-updating messages
const Messages = () => {
  const messages = useQuery('getMessages');
  if (!messages) return <p>Loading...</p>;
  return (
    <ul>
      {messages.map(msg => (
        <li key={msg.id}>{msg.text}</li>
      ))}
    </ul>
  );
};
    `,
    codeLanguage: "tsx",
    highlightLines: "2, 4-12",
    showLineNumbers: true,
    titleId: "use-query-title",
    contentId: "use-query-content",
  },
  {
    title: "Step 5: Handle User Interactions with Mutations 🤖",
    code: `
import { useMutation } from 'convex/react';

const SendMessage = () => {
  const addMessage = useMutation('sendMessage');

  const handleClick = async () => {
    await addMessage({ text: 'Hello, Convex!' });
  };

  return (
    <button onClick={handleClick}>Send Message</button>
  );
};
    `,
    codeLanguage: "tsx",
    highlightLines: "2, 4-11",
    showLineNumbers: true,
    titleId: "mutation-title",
    contentId: "mutation-content",
  },
  {
    backgroundIframe: "https://docs.convex.dev/home",
    backgroundInteractive: true,
    transition: "zoom",
  },
  {
    title: "Benefits of Convex with Next.js 💡",
    ul: [
      "Seamless integration with React's reactive state",
      "Serverless scalability and infrastructure-free",
      "Better developer experience through TypeScript-first queries",
      "Improved user experiences with live-updating UIs",
    ],
    ulItemClassName: "fragment fade-in",
    listItemsAutoReveal: true,
    id: "benefits-slide",
    state: "benefits-state",
  },
  {
    backgroundIframe: "https://chef.convex.dev/",
    backgroundInteractive: true,
    transition: "zoom",
  },
  {
    title: "More Resources 📚",
    ul: [
      "Convex Documentation - https://docs.convex.dev/",
      "Convex Chef - https://chef.convex.dev/",
    ],
    ulItemClassName: "fragment fade-in",
    listItemsAutoReveal: true,
    titleId: "resources-title",
    contentId: "resources-content",
  },
  {
    title: "Thank You! 🙏",
    content: "Have fun building real-time apps today!",
    footer: "Share your feedback to help improve this talk!",
    footerId: "feedback-footer",
    transition: "fade",
  },
];



