"use client";

import { posts } from "@/data/posts";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-16">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-green-400 mb-2">
            {dayjs(post.date).fromNow()}
          </div>
          <h1 className="text-3xl sm:text-4xl text-white font-bold mb-4">
            {post.title}
          </h1>
          <div className="flex gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-sm px-2 py-1 bg-green-400/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="prose prose-invert prose-green max-w-none">
            <ReactMarkdown
              components={{
                // @ts-expect-error : TODO : fix this
                code({ inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      // @ts-expect-error : TODO : fix this
                      style={atomDark}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </motion.article>
      </main>
    </div>
  );
}
