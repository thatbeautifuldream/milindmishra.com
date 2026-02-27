export type TBlogPosts = {
  data: {
    publication: {
      id: string;
      posts: {
        edges: {
          node: {
            author: {
              name: string;
              profilePicture: string;
            };
            title: string;
            subtitle: string | null;
            brief: string;
            slug: string;
            coverImage: {
              url: string;
            };
            tags: Array<{
              name: string;
              slug: string;
              id: string;
            }>;
            publishedAt: string;
            readTimeInMinutes: number;
          };
        }[];
      };
    };
  };
};

const ALL_POSTS_QUERY = `
  query allPosts($tags: [ObjectId!]) {
    publication(host: "blog.milind.live") {
      id
      title
      posts(first: 20, filter: { tags: $tags }) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            author {
              name
              profilePicture
            }
            title
            subtitle
            brief
            slug
            coverImage {
              url
            }
            tags {
              name
              slug
              id
            }
            publishedAt
            readTimeInMinutes
          }
        }
      }
    }
  }
`;

export async function fetchAllPosts(): Promise<
  TBlogPosts["data"]["publication"]["posts"]["edges"][number]["node"][]
> {
  try {
    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: ALL_POSTS_QUERY }),
      next: { revalidate: 3600, tags: ["blog-posts"] },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    const data: TBlogPosts["data"] = await response.json();
    return data?.publication?.posts?.edges.map((edge) => edge.node) ?? [];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export type TBlogPostDetails = {
  data: {
    publication: {
      id: string;
      post: {
        author: {
          name: string;
          profilePicture: string;
        };
        publishedAt: string;
        title: string;
        subtitle: string | null;
        readTimeInMinutes: number;
        content: {
          html: string;
        };
        tags: Array<{
          name: string;
          slug: string;
          id: string;
        }>;
        coverImage: {
          url: string;
        };
      };
    };
  };
};

const POST_DETAILS_QUERY = `
  query postDetails($slug: String!) {
    publication(host: "blog.milind.live") {
      id
      post(slug: $slug) {
        author {
          name
          profilePicture
        }
        publishedAt
        title
        subtitle
        readTimeInMinutes
        content {
          html
        }
        tags {
          name
          slug
          id
        }
        coverImage {
          url
        }
      }
    }
  }
`;

export async function fetchPostDetails(
  slug: string
): Promise<TBlogPostDetails["data"]["publication"]["post"] | null> {
  try {
    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: POST_DETAILS_QUERY, variables: { slug } }),
      next: { revalidate: 3600, tags: [`blog-post-${slug}`] },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.statusText}`);
    }

    const data: TBlogPostDetails["data"] = await response.json();
    return data?.publication?.post ?? null;
  } catch (error) {
    console.error("Error fetching blog post details:", error);
    return null;
  }
}
