"use client";

// import { posts } from "@/data/posts";
import { fetchPostDetails } from "@/lib/services/blog";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { motion } from "framer-motion";
import { AlertTriangle, Loader } from "lucide-react";
import { useParams } from "next/navigation";

dayjs.extend(relativeTime);

export default function BlogPost() {
  const { slug } = useParams();
  const { data: post, isLoading } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPostDetails(slug as string),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="animate-spin -mt-16" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex gap-x-4 items-center justify-center">
        <AlertTriangle className="-mt-16 w-5 h-5" />
        <div className="-mt-16">Post not found</div>
      </div>
    );
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
            {dayjs(post.publishedAt).fromNow()}
          </div>
          <h1 className="text-3xl sm:text-4xl text-white font-bold mb-4">
            {post.title}
          </h1>
          <div className="flex gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="text-sm px-2 py-1 bg-green-400/10 backdrop-blur-sm"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
          <div className="prose prose-invert prose-green max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
          </div>
        </motion.article>
      </main>
    </div>
  );
}
