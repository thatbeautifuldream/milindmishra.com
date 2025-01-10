"use client";

import { fetchPostDetails } from "@/lib/services/blog";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { motion, useScroll, useTransform } from "framer-motion";
import { Loader } from "lucide-react";
import { notFound, useParams } from "next/navigation";

dayjs.extend(relativeTime);

export default function BlogPost() {
  const { slug } = useParams();
  const { scrollY } = useScroll();
  const { data: post, isLoading } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPostDetails(slug as string),
  });

  // Adjust the transform values
  const headerPadding = useTransform(scrollY, [0, 200], [24, 12]);
  const titleScale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const containerY = useTransform(scrollY, [0, 200], [0, -15]);

  // New transforms for layout changes
  const titleWidth = useTransform(scrollY, [0, 200], ["100%", "75%"]);
  const tagsScale = useTransform(scrollY, [0, 200], [1, 0.75]);
  const tagsY = useTransform(scrollY, [0, 200], [0, -8]);

  // New transforms for spacing - reduced padding values
  const containerGap = useTransform(scrollY, [0, 200], [12, 6]);
  const headerVerticalPadding = useTransform(scrollY, [0, 200], [24, 12]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="animate-spin w-5 h-5 -mt-16" />
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <motion.header
        style={{
          paddingTop: headerPadding,
          paddingBottom: headerPadding,
        }}
        className="fixed top-20 left-0 right-0 bg-black/80 backdrop-blur-sm z-10"
      >
        <motion.div
          style={{
            paddingTop: headerVerticalPadding,
            paddingBottom: headerVerticalPadding,
          }}
          className="max-w-4xl mx-auto px-4"
        >
          <motion.div style={{ y: containerY }} className="relative w-full">
            <motion.div style={{ gap: containerGap }} className="flex flex-col">
              <motion.h1
                style={{
                  scale: titleScale,
                  width: titleWidth,
                }}
                className="text-2xl sm:text-3xl text-white font-bold break-words sm:break-normal flex-1 min-w-0 origin-left mb-1"
              >
                {post.title}
              </motion.h1>
              <motion.div
                style={{
                  scale: tagsScale,
                  y: tagsY,
                }}
                className="flex flex-wrap gap-1.5 sm:max-w-[75%] origin-left"
              >
                <span className="text-sm px-2 py-0.5 bg-green-400/5 text-green-400 border border-green-400/20 backdrop-blur-sm">
                  {dayjs(post.publishedAt).fromNow()}
                </span>
                {post.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="text-sm px-2 py-0.5 bg-green-400/10 backdrop-blur-sm"
                  >
                    {tag.name}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.header>

      <main className="max-w-4xl mx-auto px-4">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div style={{ paddingTop: "160px" }}>
            <div className="prose prose-invert prose-green max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: post.content.html }}
              ></div>
            </div>
          </div>
        </motion.article>
      </main>
    </div>
  );
}
