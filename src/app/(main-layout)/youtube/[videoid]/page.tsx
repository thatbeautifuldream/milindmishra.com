import { YouTubeEmbed } from "@next/third-parties/google";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "YouTube Video | Milind Mishra",
    description: "Watch a YouTube video on Milind Mishra's channel.",
};

export default async function Page({ params }: { params: Promise<{ videoid: string }> }) {
    const { videoid } = await params;

    return (
        <YouTubeEmbed videoid={videoid} params="controls=1" />
    );
}