import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";
// import youtubeService from "@/services/youtube/youtube.service";
import { videos } from "./data/videos";
import YouTubeVideos from "./components/youtube-videos";

export default async function Page() {
    // const videos = await youtubeService.getChannelVideos("UCMG4BahZvx70a8fsRcczVpA");

    if (!videos) {
        return notFound();
    }

    return (
        <div className="min-h-screen">
            <h2
                className={cn(
                    "~text-2xl/3xl font-bold mb-6",
                    bricolageGrotesque.className
                )}
            >
                My YouTube Videos
            </h2>

            <YouTubeVideos videos={videos} />
        </div>
    );
}
