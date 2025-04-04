import { Slide } from "./schema";

export const aiForReactDevelopersSlides: Slide[] = [
  {
    title: "AI for React Developers 🚀",
    content: "A Deep Dive into the Vercel's AI SDK",
    footer: "React Bangalore | Milind Mishra",
    state: "title-slide",
    titleId: "main-title",
    contentId: "main-subtitle",
    footerId: "main-footer",
  },
  {
    title: "Find these Slides! 📱",
    image: "http://localhost:3000/assets/qr/ai-slides.png",
    imageId: "qr-code",
  },
  {
    title: "Get the Code! 💻",
    content: "https://milind.app/code",
  },
  {
    title: "Why should backend developers have all the fun? ✨",
    content:
      "It's been quite evident from the last few years that AI is the future. But why should backend developers have all the fun? Let's explore AI as frontend developers!",
    contentId: "why-content",
  },
  {
    title: "What is @vercel/ai?",
    content:
      "The AI SDK is the TypeScript toolkit designed to help developers build AI-powered applications and agents with React, Next.js, Vue, Svelte, Node.js, and more.",
    titleId: "what-is-title",
    contentId: "what-is-content",
    verticalGroup: "vercel-ai-intro",
  },
  {
    title: "Why @vercel/ai? 🤔",
    content:
      "Imagine switching from OpenAI to Anthropic without rewriting your entire app! That's the power of Vercel AI SDK - it becomes your universal AI adapter!",
    verticalGroup: "vercel-ai-intro",
  },
  {
    title: "The Three Pillars of @vercel/ai 🏛️",
    titleId: "pillars-title",
    verticalGroup: "vercel-ai-intro",
    ul: [
      "AI SDK Core for backend (Node/Bun/Deno) - @vercel/ai/core",
      "AI SDK UI for framework-agnostic frontend components - @vercel/ai/react",
      "AI SDK RSC for Generative UI - @vercel/ai/rsc",
    ],
    ulItemClassName: "fragment fade-in",
    listItemsAutoReveal: true,
  },
  {
    title: "Our Mission Today 🎯",
    content:
      "We'll be using the Core part to build the backend and the UI part to hook it up to the frontend using @vercel/ai.",
    titleId: "mission-title",
    contentId: "mission-content",
  },
  {
    title: "Getting Started 🛠️",
    content: "First, install the required dependencies:",
    titleId: "get-started-title",
    verticalGroup: "implementation",
  },
  {
    code: `npm install @vercel/ai ai openai
# or
yarn add @vercel/ai ai openai
# or
pnpm add @vercel/ai ai openai`,
    codeLanguage: "tsx",
    codeId: "install-code",
    showLineNumbers: true,
    verticalGroup: "implementation",
  },
  {
    title: "Setting up Environment",
    content: "Create a .env.local file and add your OpenAI API key:",
    titleId: "env-title",
    contentId: "env-content",
    verticalGroup: "implementation",
  },
  {
    code: `OPENAI_API_KEY=your-api-key-here
# Optional: Configure other providers
ANTHROPIC_API_KEY=your-anthropic-key
COHERE_API_KEY=your-cohere-key`,
    codeLanguage: "tsx",
    codeId: "env-code",
    showLineNumbers: true,
    highlightLines: "1",
    verticalGroup: "implementation",
  },
  {
    title: "API Route Setup with @vercel/ai",
    content: "Create app/api/chat/route.ts for handling AI requests:",
    titleId: "api-title",
    contentId: "api-content",
  },
  {
    code: `import { OpenAIStream, StreamingTextResponse } from '@vercel/ai'
import OpenAI from 'openai'

// Initialize with @vercel/ai recommended patterns
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!
})

export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages } = await req.json()
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages
  })
  // Use @vercel/ai's streaming utilities
  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}`,
    codeLanguage: "tsx",
    codeId: "api-code",
    showLineNumbers: true,
    highlightLines: "1,17-18",
  },
  {
    title: "Basic Text Completion with @vercel/ai",
    content: "Using useCompletion hook for simple text generation:",
    titleId: "completion-title",
    contentId: "completion-content",
    verticalGroup: "sdk-hooks",
  },
  {
    code: `import { useCompletion } from '@vercel/ai/react'
 
export default function Completion() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion()
 
  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <input
          className="w-full p-2 border rounded"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter your prompt..."
        />
        <button 
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          type="submit"
        >
          Generate
        </button>
      </form>
      <p className="mt-4">{completion}</p>
    </div>
  )
}`,
    codeLanguage: "tsx",
    codeId: "completion-code",
    showLineNumbers: true,
    highlightLines: "1,4",
    verticalGroup: "sdk-hooks",
  },
  {
    title: "Chat Interface with @vercel/ai",
    content: "Using useChat hook for interactive conversations:",
    titleId: "chat-title",
    contentId: "chat-content",
    verticalGroup: "sdk-hooks",
  },
  {
    code: `import { useChat } from '@vercel/ai/react'
 
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
 
  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="space-y-4 mb-4">
        {messages.map(m => (
          <div 
            key={m.id}
            className={\`p-3 rounded \${
              m.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'
            }\`}
          >
            <strong>{m.role}:</strong> {m.content}
          </div>
        ))}
      </div>
 
      <form onSubmit={handleSubmit}>
        <input
          className="w-full p-2 border rounded"
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
        />
      </form>
    </div>
  )
}`,
    codeLanguage: "tsx",
    codeId: "chat-code",
    showLineNumbers: true,
    highlightLines: "1,4,9-17",
    verticalGroup: "sdk-hooks",
  },
  {
    title: "Type-Safe AI with @vercel/ai",
    content: "Using useCompletion with TypeScript for type-safe AI responses:",
    titleId: "type-safe-title",
    contentId: "type-safe-content",
    verticalGroup: "sdk-hooks",
  },
  {
    code: `import { useCompletion } from '@vercel/ai/react'
 
type Recipe = {
  title: string
  ingredients: string[]
  instructions: string[]
}

export default function Recipe() {
  const { completion, input, handleInputChange, handleSubmit } = 
    useCompletion<Recipe>({
      api: '/api/recipe',
    })
 
  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Enter a recipe idea..."
        />
      </form>
      
      {completion && (
        <div className="mt-4">
          <h3>{completion.title}</h3>
          <ul>
            {completion.ingredients.map(i => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}`,
    codeLanguage: "tsx",
    codeId: "type-safe-code",
    showLineNumbers: true,
    highlightLines: "3-7,10-12,25-32",
  },
  {
    title: "Function Calling with @vercel/ai",
    content: "Implementing tool calling with enhanced patterns:",
    titleId: "function-call-title",
    contentId: "function-call-content",
  },
  {
    code: `import { OpenAIStream, StreamingTextResponse } from '@vercel/ai'
import OpenAI from 'openai'

const openai = new OpenAI()

export async function POST(req: Request) {
  const { messages } = await req.json()
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
    functions: [
      {
        name: 'search',
        description: 'Search for information',
        parameters: {
          type: 'object',
          properties: {
            query: { type: 'string' }
          }
        }
      }
    ],
    function_call: 'auto'
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}`,
    codeLanguage: "tsx",
    codeId: "function-call-code",
    showLineNumbers: true,
    highlightLines: "12-24",
  },
  {
    title: "@vercel/ai Streaming Protocols 📡",
    content: "The SDK provides multiple streaming protocols optimized for AI:",
    titleId: "streaming-title",
    contentId: "streaming-content",
    ul: [
      "Text Streams - For basic chat and completions",
      "Data Streams - For structured JSON responses",
      "Event Streams - For real-time interactions",
    ],
    ulItemClassName: "fragment fade-right",
    listItemsAutoReveal: true,
  },
  {
    title: "@vercel/ai Streaming in Action 🌊",
    content: "Using the SDK's streaming utilities for optimal performance:",
    titleId: "streaming-action-title",
    contentId: "streaming-action-content",
  },
  {
    code: `import { useChat } from '@vercel/ai/react'
 
export default function Chat() {
  const { 
    messages, 
    input, 
    handleInputChange, 
    handleSubmit,
    isLoading,
    error 
  } = useChat()
 
  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}
 
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
          disabled={isLoading}
        />
        {error && <div className="text-red-500">{error.message}</div>}
      </form>
    </div>
  )
}`,
    codeLanguage: "tsx",
    codeId: "streaming-action-code",
    showLineNumbers: true,
    highlightLines: "8-9,24-25",
  },
  {
    title: "Key Features",
    titleId: "features-title",
    id: "features-slide",
    state: "features-state",
    ul: [
      "Automatic message history management",
      "Built-in loading states",
      "Error handling and recovery",
      "Stream control and cancellation",
      "Real-time token counting",
      "Multi-provider support",
    ],
    ulItemClassName: "fragment fade-in",
    listItemsAutoReveal: true,
  },
  {
    title: "The Road Ahead",
    titleId: "road-ahead-title",
    id: "road-ahead-slide",
    ul: [
      "Enhanced message persistence",
      "Advanced tool usage patterns",
      "Generative UI components",
      "Structured output generation",
      "Agentic workflows",
      "Multi-modal AI support",
      "Fine-tuning capabilities",
    ],
    ulItemClassName: "fragment fade-in",
    listItemsAutoReveal: true,
  },
  {
    title: "Let's Connect!",
    content: "Share your thoughts and experiences",
    titleId: "connect-title",
    contentId: "connect-content",
  },
  {
    title: "Share your feedback! (anonymous) 💬",
    content: "https://milind.app/feedback",
    transition: "fade",
  },
];
