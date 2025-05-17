import { Slide } from "../slides-schema";

export const buildingRealtimeApplicationsWithReactiveDatabaseSlides: Slide[] = [
    {
        title: "Building Real-Time Applications with Reactive Databases 🔄",
        content: "with React & Convex",
        footer: "React Bangalore · Milind Mishra",
        notes: "Introduce scope: why real-time apps? Why Convex?",
    },
    {
        backgroundIframe: "https://milindmishra.com",
        backgroundInteractive: true,
    },
    {
        title: "Challenges in Real-Time App Development 😓",
        ul: [
            "Difficult manual sync between client & server",
            "Complex real-time logic",
            "Scalability pains and infra complexity",
            "Poor/lossy UX due to lags & stale data",
        ],
        footer: "Let's see how Convex solves these…",
        notes: "Highlight pain points to set up contrast for Convex.",
    },
    {
        title: "Enter Convex 🚀",
        content: "Convex is an open source, reactive database platform that enables simpler, live-updating full-stack apps.",
        ul: [
            "Reactive serverless DB, functions & sync in one",
            "TypeScript throughout (queries = TS code)",
            "Automated live-updating queries and UI",
            "Built-in scaling, file storage, auth, search"
        ],
        footer: "From the creators of Convex",
        notes: "Enumerate Convex's pillars: DB, Functions, Sync"
    },
    {
        title: "Modern Full-Stack App – The Big Picture",
        ul: ["Client (UI)", "Server: Functions & DB", "3rd-Party APIs (AI, email, payments)"],
        footer: "Lets talk about modern development landscape",
        notes: "Explain how Convex replaces/manage server & DB; clients use their favorite framework."
    },
    {
        image: "/assets/slides/02/modern-arch.png",
    },
    {
        image: "/assets/slides/02/modern-arch-convex.png",
    },
    {
        title: "Convex = Database + Functions + Sync",
        ul: [
            "Database — Hybrid relational with flexible schemas, relations, TypeScript like unions",
            "Functions — Serverless: actions, queries, mutations (all TS)",
            "Sync — Real-time, cache-less client updates"
        ],
        notes: "Emphasize how Convex's three pillars fit app needs."
    },
    {
        title: "The Database: Flexible & Strongly-Typed",
        ul: [
            "Document/relational hybrid",
            "TypeScript unions for dynamic models",
            "Safe migrations and relations",
            "Schema: Hybrid of doc & relational",
            "Type safe like PostgreSQL"
        ],
        notes: "Describe schema, unions, and how types match TS interfaces."
    },
    {
        code: `import { defineSchema, defineTable, v } from "convex/schema";

export default defineSchema({
  tasks: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
    createdAt: v.number(),
  }).index("byCreatedAt", ["createdAt"]),
});`,
        codeLanguage: "tsx",
        showLineNumbers: true,
        footer: "Schema: Hybrid of doc & relational · Type safe like PostgreSQL",
    },
    {
        backgroundIframe: "https://docs.convex.dev/database/schemas",
        backgroundInteractive: true,
    },
    {
        title: "Functions: Actions, Queries, Mutations",
        ul: [
            "Actions — arbitrary logic; perfect for calling APIs",
            "Queries — fetch data; transactional, cached, live",
            "Mutations — safely change data; all-or-nothing consistency"
        ],
        notes: "Highlight transactional safety of queries & mutations."
    },
    {
        code: `// Query: fetch all tasks
export const get = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("tasks").collect();
    },
});

// Mutation: toggle task completion
export const toggleComplete = mutation({
    args: { id: v.id("tasks") },
    handler: async (ctx, args) => {
        const task = await ctx.db.get(args.id);
        if (!task) {
            throw new Error("Task not found");
        }
        await ctx.db.patch(args.id, { isCompleted: !task.isCompleted });
    },
});`,
        codeLanguage: "tsx",
        showLineNumbers: true,
    },
    {
        backgroundIframe: "https://docs.convex.dev/functions",
        backgroundInteractive: true,
    },
    {
        backgroundIframe: "https://docs.convex.dev/realtime",
        backgroundInteractive: true,
    },
    {
        title: "Automatic Real-Time Sync 🎯",
        content: "Convex clients re-run queries and update state on every relevant DB change. No cache-invalidation, no manual dirty flags!",
        ul: [
            "UI automatically live-updating as data changes",
            "No stale state, no manual syncing, no race bugs",
            "Built-in deterministic caching"
        ],
        notes: "Demo how UI is always fresh—compare with traditional async fetching."
    },
    {
        title: "Quickstart: Convex + React/Next.js",
        content: "Let's boot a live app in minutes!",
        footer: "Lets get our hands dirty!",
        notes: "Show how Convex gets devs productive—live updating in minutes."
    },
    {
        code: `// Scaffold Project
pnpm create convex@latest -- -t nextjs`,
        codeLanguage: "bash",
        showLineNumbers: false,
        content: "Create a Next.js + Convex app scaffold.",
        notes: "Show how quick it is. Mention alternatives (Remix, SvelteKit)."
    },
    {
        code: `// Set up Convex Provider
import { ConvexProvider, ConvexReactClient } from "convex/react";
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}`,
        codeLanguage: "tsx",
        showLineNumbers: true,
        highlightLines: "2,5",
        notes: "Boilerplate for React Context with Convex client."
    },
    {
        code: `// Binding Your Root Layout
import { ConvexClientProvider } from "./ConvexClientProvider";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}`,
        codeLanguage: "tsx",
        showLineNumbers: true,
        notes: "Shows top-level context wrapping for app."
    },
    {
        code: `// Fetching Data
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

const tasks = useQuery(api.tasks.get);`,
        codeLanguage: "tsx",
        showLineNumbers: true,
        notes: "Show how to fetch tasks reactively from Convex. Explain that useQuery gives you live, always-up-to-date data.",
    },
    {
        code: `// Rendering Data
if (!tasks) return <p>Loading...</p>;
return <ul>{tasks.map(t => <li key={t._id}>{t.text}</li>)}</ul>;`,
        codeLanguage: "tsx",
        showLineNumbers: true,
        notes: "Show how to render the live data. UI updates automatically as data changes in Convex.",
    },
    {
        code: `// Add Task Mutation
import { useMutation } from "convex/react";
const add = useMutation(api.tasks.add);

<input value={text} onChange={...} />
<button onClick={() => add({ text })}>Add</button>`,
        codeLanguage: "tsx",
        showLineNumbers: true,
        notes: "Show how to add a new task using useMutation. Explain the input and button for adding.",
    },
    {
        code: `// Toggle Complete Mutation
const toggleComplete = useMutation(api.tasks.toggleComplete);

<button onClick={() => toggleComplete({ id: _id })}>
  <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{text}</span>
</button>`,
        codeLanguage: "tsx",
        showLineNumbers: true,
        notes: "Show how to toggle task completion. UI reflects changes instantly.",
    },
    {
        code: `// Delete Task Mutation
const deleteTask = useMutation(api.tasks.deleteTask);

<button onClick={() => deleteTask({ id: _id })}>(delete)</button>`,
        codeLanguage: "tsx",
        showLineNumbers: true,
        notes: "Show how to delete a task in real-time. Emphasize instant UI update.",
    },
    {
        code: `// Full Example: Real-Time Task App
"use client";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const tasks = useQuery(api.tasks.get);
  const toggleComplete = useMutation(api.tasks.toggleComplete);
  const add = useMutation(api.tasks.add);
  const deleteTask = useMutation(api.tasks.deleteTask);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="flex items-center justify-between space-x-2">
        <input type="text" placeholder="Add a task" value={text} onChange={(e) => setText(e.target.value)} />
        <button className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer" onClick={() => add({ text })}>Add</button>
      </div>
      {tasks?.map(({ _id, text, isCompleted }) => (
        <div className="flex items-center justify-between space-x-2" key={_id}>
          <button
            onClick={() => toggleComplete({ id: _id })}
            className="mb-2 text-left cursor-pointer"
          >
            <span className="hover:text-gray-500" style={{ textDecoration: isCompleted ? "line-through" : "none" }}>{text}</span>
          </button>
          <button className="text-red-500 hover:text-red-700 cursor-pointer" onClick={() => deleteTask({ id: _id })}>(delete)</button>
        </div>
      ))}
    </main>
  );
}`,
        codeLanguage: "tsx",
        showLineNumbers: true,
        notes: "Show the complete real-time task app. Recap how queries and mutations work together for a live, collaborative UI.",
    },
    {
        content: "accountabillibuddy.com",
        qrCodeLink: "https://accountabillibuddy.com/",
    },
    {
        title: "Beyond CRUD: Convex Power Features",
        ul: [
            "Scheduled Functions (cron jobs, reminders)",
            "File Storage & Serving",
            "Integrated Authentication",
            "Full-text & Vector Search",
            "Self-hosted or cloud, permissive license",
            "Composable components (plugin model)"
        ],
        notes: "Highlight productive features and why they matter."
    },
    {
        title: "Bonus: Components = Plug-ins for Convex",
        ul: [
            "Isolated mini-apps (e.g. rate limiting, AI agents)",
            "Each has its own database namespace and API",
            "No direct DB access, only via API for better isolation",
            "Like WordPress Plugins but safer"
        ],
        footer: "See Convex Docs: Components (https://docs.convex.dev/components)",
        notes: "Mention new Convex component model as future growth area."
    },
    {
        backgroundIframe: "https://docs.convex.dev/components",
        backgroundInteractive: true,
    },
    {
        title: "When Not To Use Convex? 🚫",
        ul: [
            "Ultra-high-frequency/low-latency apps (e.g. FPS games, IoT, heavy AI/ML, GPU compute)",
            "Massive scale requiring custom infra or raw database tuning",
            "If vendor lock-in or specific compliance forbidden (though Convex is self-hostable!)"
        ],
        footer: "Honest limitations: use right tool for right job.",
        notes: "Honest answer: For most web apps it's perfect, but know the edge cases."
    },
    {
        title: "Great Use Cases for Convex ✅",
        ul: [
            "Chat & Collaboration (live docs, editors)",
            "Dashboards that always reflect latest data",
            "Games with turn-based or collaborative mechanics",
            "Apps that benefit from serverless, live sync"
        ],
        footer: "Explore the budding community of Convex developers!",
        notes: "Give specific best-fit scenarios."
    },
    {
        title: "Learn More & Get Started",
        ul: [
            "https://docs.convex.dev/",
            "https://chef.convex.dev/",
            "https://github.com/get-convex"
        ],
        footer: "Resources for self-paced exploration.",
        notes: "Resources for self-paced exploration."
    },
    {
        content: "Get the slides",
        qrCodeLink: "https://milindmishra.com/slide/building-realtime-applications-with-reactive-databases",
    },
    {
        title: "Q & A & Ideas!",
        content: "Got a budding idea for a real-time app?",
        footer: "Let's chat!",
        notes: "Open the floor to the audience."
    },
    {
        title: "Thank You! 🙏",
        content: "Have fun building real-time apps with Convex.",
        footer: "Milind Mishra · React Bangalore",
        notes: "Close and invite further questions in hallway chat."
    }
];