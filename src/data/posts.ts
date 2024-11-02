export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    description: "Learn how to build modern web applications with Next.js",
    date: "2024-03-20",
    content: `
Next.js is a powerful React framework that makes building web applications a breeze.

## Why Next.js?

- Server-side rendering
- File-based routing
- API routes
- Built-in optimizations

## Getting Started

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`
    `,
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    slug: "mastering-typescript",
    title: "Mastering TypeScript",
    description: "Essential TypeScript concepts for modern development",
    date: "2024-03-19",
    content: `
TypeScript adds static typing to JavaScript, making your code more reliable.

## Key Features

- Static typing
- Interface definitions
- Generics
- Decorators

## Basic Types

\`\`\`typescript
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
\`\`\`
    `,
    tags: ["TypeScript", "JavaScript", "Programming"],
  },
];
