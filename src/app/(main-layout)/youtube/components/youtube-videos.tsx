/* eslint-disable @next/next/no-img-element */
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TYouTubeVideosResponse } from "../data/videos";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/lib/fonts";
import { PlayIcon } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function YouTubeVideos({ videos }: { videos: TYouTubeVideosResponse }) {
    return (
        <div className="space-y-6">
            {videos.items.map((video, index) => (
                <motion.div
                    key={video.id.videoId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                        ease: "easeOut",
                    }}
                >
                    <Link href={`/youtube/${video.id.videoId}`} className="block group">
                        <Card className="border border-green-400/20 hover:border-green-400 transition-colors bg-black/60 backdrop-blur-md p-0 duration-200">
                            <div className="flex flex-col sm:flex-row items-stretch gap-6 p-4">
                                <div className="relative w-full sm:w-56 h-40 sm:h-36 flex-shrink-0 rounded-lg overflow-hidden">
                                    <img
                                        src={video.snippet.thumbnails.medium.url}
                                        alt={video.snippet.title}
                                        width={video.snippet.thumbnails.medium.width}
                                        height={video.snippet.thumbnails.medium.height}
                                        className="w-full h-full object-cover rounded-lg transition-transform duration-200 group-hover:scale-105"
                                    />
                                    <span className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <PlayIcon fill="currentColor" className="text-white w-10 h-10 drop-shadow-lg" />
                                    </span>
                                </div>
                                <div className="flex flex-col justify-between flex-1 min-w-0">
                                    <CardHeader className="p-0 pb-2 sm:pb-0">
                                        <CardTitle className={cn("text-green-50 text-xl font-bold leading-tight line-clamp-2", bricolageGrotesque.className)}>
                                            {video.snippet.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0 flex flex-col gap-2">
                                        <div className="text-xs sm:text-sm text-green-300/80 mb-1 font-medium">
                                            {video.snippet.channelTitle} <span className="mx-1">&bull;</span> <span className="font-normal text-green-200/60">{dayjs(video.snippet.publishedAt).fromNow()}</span>
                                        </div>
                                        <div className="text-sm sm:text-base text-green-200/90 line-clamp-3 font-normal">
                                            {video.snippet.description}
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}
