"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type TSlideCardProps = {
    slug: string;
    title: string;
    content: string;
    slideCount: number;
    index: number;
};

export default function SlideCard({ slug, title, content, slideCount, index }: TSlideCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
            }}
            className="border border-green-700 p-6 hover:border-green-500 hover:bg-green-900/20 transition-colors h-full backdrop-blur-sm"
        >
            <Link href={`/slide/${slug}`} target="_blank" className="block h-full">
                <article className="flex flex-col h-full">
                    <h2
                        className={cn(
                            "text-xl font-bold text-white mb-3",
                            bricolageGrotesque.className
                        )}
                    >
                        {title || "Untitled Presentation"}
                    </h2>
                    <p className="text-green-300 font-mono text-sm mb-6 flex-grow">
                        {content || "No description available"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <Badge
                            variant="outline"
                            className="uppercase text-xs font-mono font-extralight"
                        >
                            {slideCount} slides
                        </Badge>
                        <Badge className="uppercase text-xs font-mono font-extralight">
                            {slug.replace(/-/g, " ")}
                        </Badge>
                    </div>
                </article>
            </Link>
        </motion.div>
    );
} 