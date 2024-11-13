import { gql, GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://gql.hashnode.com", {
  method: "POST",
});

export type FetchAllPostsResponse = {
  data: {
    publication: {
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
  FetchAllPostsResponse["data"]["publication"]["posts"]["edges"][number]["node"][]
> {
  const data: FetchAllPostsResponse["data"] = await client.request(gql`
    query allPosts($tags: [ObjectId!]) {
      publication(host: "blog.milind.live") {
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

export type FetchPostDetailsResponse = {
  data: {
    publication: {
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
): Promise<FetchPostDetailsResponse["data"]["publication"]["post"]> {
  const data: FetchPostDetailsResponse["data"] = await client.request(
    gql`
      query postDetails($slug: String!) {
        publication(host: "blog.milind.live") {
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
