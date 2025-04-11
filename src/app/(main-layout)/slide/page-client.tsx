/* eslint-disable @next/next/no-img-element */
"use client";

import { slidesConfig } from "./data";
import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/lib/fonts";
import SlideCard from "./components/slide-card";

export function SlidePageClient() {
    return (
        <>
            <h2
                className={cn(
                    "~text-2xl/3xl font-bold mb-6",
                    bricolageGrotesque.className
                )}
            >
                My Slides
            </h2>
            <div className="flex flex-col gap-6">
                {Object.entries(slidesConfig).map(([slug, slides], index) => (
                    <SlideCard
                        key={slug}
                        slug={slug}
                        title={slides[0]?.title || "Untitled Presentation"}
                        content={slides[0]?.content || "No description available"}
                        slideCount={slides.length}
                        index={index}
                    />
                ))}
            </div>
        </>
    );
}
