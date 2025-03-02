import { fetchPostDetails } from "@/services/blog/blog.service";
import { notFound } from "next/navigation";
import { BlogHeader } from "./components/blog-header";
import { Suspense } from "react";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await fetchPostDetails((await params).slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Suspense fallback={null}>
        <BlogHeader post={post} />
      </Suspense>

      <main className="mx-auto px-4">
        <article className="animate-in fade-in-0 duration-700">
          <div style={{ paddingTop: "80px" }}>
            <div className="prose prose-invert prose-green max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: post.content.html }}
              ></div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
