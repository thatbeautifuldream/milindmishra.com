import type { YouTubeSearchListResponse } from "./youtube.types";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

export class YouTubeService {
    private readonly BASE_URL = "https://www.googleapis.com/youtube/v3/search";

    /**
     * Fetches videos for a specific YouTube channel
     * @param channelId YouTube channel ID
     * @param apiKey YouTube Data API v3 key
     * @param maxResults Number of results to fetch (default: 25)
     * @param pageToken Optional page token for pagination
     * @returns Promise<YouTubeSearchListResponse>
     * @throws {Error} If the API request fails
     */
    public async getChannelVideos(
        channelId: string,
        maxResults: number = 25,
        pageToken: string = ""
    ): Promise<YouTubeSearchListResponse> {
        let url = `${this.BASE_URL}?part=snippet&channelId=${channelId}&maxResults=${maxResults}&order=date&type=video&key=${YOUTUBE_API_KEY}`;
        if (pageToken) {
            url += `&pageToken=${pageToken}`;
        }
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`YouTube API error: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
            throw new Error(`Failed to fetch YouTube videos: ${errorMessage}`);
        }
    }
}

const youtubeService = new YouTubeService();

export default youtubeService;