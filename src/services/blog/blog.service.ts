import { gql, GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://gql.hashnode.com", {
  method: "POST",
});

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

export async function fetchAllPosts(): Promise<
  TBlogPosts["data"]["publication"]["posts"]["edges"][number]["node"][]
> {
  const data: TBlogPosts["data"] = await client.request(gql`
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
  `);

  return data?.publication?.posts?.edges.map((edge) => edge.node) ?? [];
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

export async function fetchPostDetails(
  slug: string
): Promise<TBlogPostDetails["data"]["publication"]["post"]> {
  const data: TBlogPostDetails["data"] = await client.request(
    gql`
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
    `,
    { slug }
  );
  return data?.publication?.post;
}
