"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

interface BlogPostCardProps {
  post: {
    slug: string;
    publishedAt: string;
    title: string;
    brief: string;
    tags: Array<{ id: string; name: string }>;
  };
  index: number;
}

export default function BlogPostCard({ post, index }: BlogPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="border border-green-400/20 p-6 hover:border-green-400 transition-colors h-full backdrop-blur-sm"
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <article className="flex flex-col h-full">
          <span className="text-sm text-green-400 mb-2">
            {dayjs(post.publishedAt).fromNow()}
          </span>
          <h2 className="text-xl font-bold mb-3">{post.title}</h2>
          <p className="text-green-300 mb-6 flex-grow">{post.brief}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag.id}
                className="text-sm px-2 py-1 bg-green-400/10 backdrop-blur-sm lowercase"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
