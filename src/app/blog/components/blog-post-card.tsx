"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { TBlogPosts } from "@/services/blog/blog.service";
import { Badge } from "@/components/ui/badge";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";

dayjs.extend(relativeTime);

type TBlogPostCardProps = {
  post: TBlogPosts["data"]["publication"]["posts"]["edges"][number]["node"];
  index: number;
};

export default function BlogPostCard({ post, index }: TBlogPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="border border-green-700 p-6 hover:border-green-500 hover:bg-green-900/20 transition-colors h-full backdrop-blur-sm"
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <article className="flex flex-col h-full">
          <h2
            className={cn(
              "text-xl font-bold text-white mb-3",
              bricolageGrotesque.className
            )}
          >
            {post.title}
          </h2>
          <p className="text-green-300 font-mono text-sm mb-6 flex-grow">
            {post.brief}
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="uppercase text-xs font-mono font-extralight"
            >
              {dayjs(post.publishedAt).fromNow()}
            </Badge>
            {post.tags.map((tag) => (
              <Badge
                className="uppercase text-xs font-mono font-extralight"
                key={tag.id}
              >
                {tag.name}
              </Badge>
            ))}
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
