import { fetchAllPosts } from "@/lib/services/blog";
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post, index) => (
          <BlogPostCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </>
  );
}
