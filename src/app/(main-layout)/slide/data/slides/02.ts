import { Slide } from "../schema";

export const buildingRealtimeApplicationsWithReactiveDatabaseSlides: Slide[] = [
    {
        title: "Building Real-Time Applications with Reactive Databases 🔄",
        content: "w/ React & Convex",
        footer: "React Bangalore | Milind Mishra",
        state: "title-slide",
        titleId: "main-title",
        contentId: "subtitle",
        footerId: "footer",
    },
    {
        title: "Pain Points of Real-Time Application Development 😓",
        ul: [
            "High complexity of managing live data across client-server",
            "Inefficiencies of handling real-time updates in traditional backends",
            "Scalability and performance challenges",
            "Difficult and laggy user experiences due to manual sync",
        ],
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
        title: "Step 1: Initialize convex-next app 📦",
        code: `npm create convex@latest`,
        showLineNumbers: false,
        codeLanguage: "bash",
        titleId: "install-title",
        contentId: "install-content",
    },
    {
        title: "Step 2: Initialize Convex in your React App ⚙️",
        code: `"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}`,
        codeLanguage: "tsx",
        highlightLines: "3, 6, 9",
        showLineNumbers: true,
        titleId: "initialize-title",
        contentId: "initialize-convex-provider",
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
