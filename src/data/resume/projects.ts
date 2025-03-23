import githubService from "@/services/github/github.service";
import { TProject } from "@/services/github/github.service";

export async function getProjects(): Promise<TProject[]> {
  try {
    return await githubService.getPortfolioProjects("thatbeautifuldream");
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
