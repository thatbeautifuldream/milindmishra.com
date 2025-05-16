import { Slide } from "../schema";

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