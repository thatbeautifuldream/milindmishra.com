import { Octokit, RestEndpointMethodTypes } from "@octokit/rest";

export type TProject = {
  id: number;
  name: string;
  description: string | null;
  stars: number;
  forks: number;
  url: string;
  language: string | null;
  owner: {
    login: string;
    avatar_url: string;
  };
  topics: string[];
  created_at: string;
  updated_at: string;
};

export class GitHubService {
  private readonly octokit: Octokit;
  private readonly DEFAULT_PER_PAGE = 100;

  constructor() {
    this.octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });
  }

  /**
   * Fetches gists for a specific user
   * @param username GitHub username
   * @returns Promise<RestEndpointMethodTypes["gists"]["listForUser"]["response"]["data"]>
   * @throws {Error} If the API request fails
   */
  public async getGists(
    username: string
  ): Promise<
    RestEndpointMethodTypes["gists"]["listForUser"]["response"]["data"]
  > {
    try {
      const response = await this.octokit.rest.gists.listForUser({
        username,
        per_page: this.DEFAULT_PER_PAGE,
      });

      return response.data;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      throw new Error(`Failed to fetch gists: ${errorMessage}`);
    }
  }

  /**
   * Fetches content of a specific gist
   * @param gistId ID of the gist to fetch
   * @returns Promise<RestEndpointMethodTypes["gists"]["get"]["response"]["data"]>
   */
  public async fetchGistContent(
    gistId: string
  ): Promise<
    RestEndpointMethodTypes["gists"]["get"]["response"]["data"] | null
  > {
    try {
      const response = await this.octokit.rest.gists.get({
        gist_id: gistId,
      });

      return response.data;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      console.error(`Error fetching gist content: ${errorMessage}`);
      return null;
    }
  }

  /**
   * Fetches repositories with the 'portfolio-project' topic
   * @returns Promise<TrendingProject[]>
   * @throws {Error} If the API request fails
   */
  public async getPortfolioProjects(username: string) {
    try {
      // Fetch repositories with portfolio-project topic
      const { data } = await this.octokit.rest.search.repos({
        q: `topic:portfolio-project user:${username}`,
        per_page: this.DEFAULT_PER_PAGE,
      });

      const projects: TProject[] = data.items.map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        url: repo.html_url,
        language: repo.language,
        owner: {
          login: repo.owner?.login || "",
          avatar_url: repo.owner?.avatar_url || "",
        },
        topics: repo.topics || [],
        created_at: repo.created_at,
        updated_at: repo.updated_at,
      }));

      return projects;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      throw new Error(
        `Failed to fetch portfolio projects by topic: ${errorMessage}`
      );
    }
  }
}

const githubService = new GitHubService();

export default githubService;
