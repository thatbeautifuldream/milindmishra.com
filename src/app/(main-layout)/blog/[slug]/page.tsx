/* eslint-disable @next/next/no-img-element */
import { fetchPostDetails, fetchAllPosts } from "@/services/blog/blog.service";
import { notFound } from "next/navigation";
import { BlogHeader } from "./components/blog-header";
import { Suspense } from "react";
import type { Metadata } from "next";
import { cache } from "react";

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await fetchAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type TProps = {
  params: Promise<{ slug: string }>;
};

// Create a cached version of fetchPostDetails to avoid duplicate fetches
const getCachedPostDetails = cache(async (slug: string) => {
  return await fetchPostDetails(slug);
});

export async function generateMetadata({ params }: TProps): Promise<Metadata> {
  const post = await getCachedPostDetails((await params).slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.subtitle || `Read "${post.title}" by ${post.author.name}`,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.subtitle || `Read "${post.title}" by ${post.author.name}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: post.coverImage
        ? [
          {
            url: post.coverImage.url,
            alt: post.title,
          },
        ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.subtitle || `Read "${post.title}" by ${post.author.name}`,
      images: post.coverImage ? [post.coverImage.url] : undefined,
    },
  };
}

export default async function BlogPost({ params }: TProps) {
  const post = await getCachedPostDetails((await params).slug);

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
          <div className="mt-12">
            {post.coverImage && (
              <img
                src={post.coverImage.url}
                alt={post.title}
                className="w-full h-auto"
              />
            )}
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
