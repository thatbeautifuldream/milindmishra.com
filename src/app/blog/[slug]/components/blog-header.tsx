"use client";

import { FetchPostDetailsResponse } from "@/services/blog/blog.service";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

interface BlogHeaderProps {
  post: FetchPostDetailsResponse["data"]["publication"]["post"];
}

export function BlogHeader({ post }: BlogHeaderProps) {
  return (
    <header className="sticky top-12 left-0 right-0 bg-black/80 backdrop-blur-sm z-10 py-4">
      <div className="mx-auto px-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl sm:text-3xl text-white font-bold break-words sm:break-normal">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-1.5 sm:max-w-[75%]">
            <span className="text-sm px-2 py-0.5 bg-green-400/5 text-green-400 border border-green-400/20 backdrop-blur-sm">
              {dayjs(post.publishedAt).fromNow()}
            </span>
            {post.tags.map((tag: { id: string; name: string }) => (
              <span
                key={tag.id}
                className="text-sm px-2 py-0.5 bg-green-400/10 backdrop-blur-sm lowercase"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
