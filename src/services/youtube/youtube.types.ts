// TypeScript types for YouTube Data API v3 /search endpoint response

export interface YouTubeSearchListResponse {
    kind: string;
    etag: string;
    nextPageToken?: string;
    prevPageToken?: string;
    regionCode?: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    items: Array<{
        kind: string;
        etag: string;
        id: {
            kind: string;
            videoId?: string;
            playlistId?: string;
            channelId?: string;
        };
        snippet: {
            publishedAt: string;
            channelId: string;
            title: string;
            description: string;
            thumbnails: {
                default?: { url: string; width: number; height: number };
                medium?: { url: string; width: number; height: number };
                high?: { url: string; width: number; height: number };
            };
            channelTitle: string;
            liveBroadcastContent: string;
            publishTime: string;
        };
    }>;
} 