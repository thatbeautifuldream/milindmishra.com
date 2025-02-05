"use client";

import FullPageLoader from "@/components/full-page-loader";
import { bricolageGrotesque } from "@/lib/fonts";
import { fetchAllPosts } from "@/lib/services/blog";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";

dayjs.extend(relativeTime);

export default function BlogPage() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: fetchAllPosts,
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) {
    return <FullPageLoader />;
  }

  if (!posts) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <h2
        className={cn(
          "~text-2xl/3xl font-bold mb-6",
          bricolageGrotesque.className
        )}
      >
        My Blog
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post, index) => (
          <motion.div
            key={post.slug}
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
                  {dayjs(post?.publishedAt).fromNow()}
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
        ))}
      </div>
    </div>
  );
}
