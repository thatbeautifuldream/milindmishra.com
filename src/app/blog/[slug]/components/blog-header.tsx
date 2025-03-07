"use client";

import { Badge } from "@/components/ui/badge";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { TBlogPostDetails } from "@/services/blog/blog.service";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type TBlogHeaderProps = {
  post: TBlogPostDetails["data"]["publication"]["post"];
};

export function BlogHeader({ post }: TBlogHeaderProps) {
  return (
    <header className="sticky top-12 left-0 right-0 bg-black/80 backdrop-blur-sm z-10 py-4">
      <div className="mx-auto px-4">
        <div className="flex flex-col gap-2">
          <h1
            className={cn(
              "text-2xl sm:text-3xl text-white font-bold break-words sm:break-normal",
              bricolageGrotesque.className
            )}
          >
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-1.5 sm:max-w-[75%]">
            <Badge
              variant="outline"
              className="uppercase text-xs font-mono font-extralight"
            >
              {dayjs(post.publishedAt).fromNow()}
            </Badge>
            {post.tags.map((tag: { id: string; name: string }) => (
              <Badge
                key={tag.id}
                className="uppercase text-xs font-mono font-extralight"
              >
                {tag.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
