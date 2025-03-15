import { fetchAllPosts } from "@/services/blog/blog.service";
import { notFound } from "next/navigation";
import BlogPostCard from "./components/blog-post-card";
import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/lib/fonts";

export default async function BlogPage() {
  const posts = await fetchAllPosts();
  if (!posts) {
    notFound();
  }

  return (
    <>
      <h2
        className={cn(
          "~text-2xl/3xl font-bold mb-6",
          bricolageGrotesque.className
        )}
      >
        My Blog
      </h2>
      <div className="flex flex-col gap-6">
        {posts?.map((post, index) => (
          <BlogPostCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </>
  );
}
