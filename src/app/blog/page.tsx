"use client";

import { motion } from "framer-motion";
import { posts } from "@/data/posts";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// Initialize the relative time plugin
dayjs.extend(relativeTime);

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-6xl mx-auto px-4 py-8 sm:py-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Blog Posts</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="border border-green-400/20 p-6 hover:border-green-400 transition-colors h-full"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <article className="flex flex-col h-full">
                  <span className="text-sm text-green-400 mb-2">
                    {dayjs(post.date).fromNow()}
                  </span>
                  <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                  <p className="text-green-300 mb-6 flex-grow">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-2 py-1 bg-green-400/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
