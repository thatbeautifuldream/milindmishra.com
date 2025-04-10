/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { slidesConfig } from "./data";

export function SlidePageClient() {
    return (
        <>
            <div className="flex flex-col gap-6">
                {Object.entries(slidesConfig).map(([slug, slides], index) => (
                    <motion.div
                        key={slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            delay: index * 0.1,
                            ease: "easeOut",
                        }}
                    >
                        <Link href={`/slide/${slug}`}>
                            <div className="border border-green-700 p-6 hover:border-green-500 hover:bg-green-900/20 transition-colors h-full backdrop-blur-sm">
                                <article className="flex flex-col h-full">
                                    <h2
                                        className={cn(
                                            "text-xl font-bold text-white mb-3",
                                            bricolageGrotesque.className
                                        )}
                                    >
                                        {slides[0]?.title || "Untitled Presentation"}
                                    </h2>
                                    <p className="text-green-300 font-mono text-sm mb-6 flex-grow">
                                        {slides[0]?.content || "No description available"}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge
                                            variant="outline"
                                            className="uppercase text-xs font-mono font-extralight"
                                        >
                                            {slides.length} slides
                                        </Badge>
                                        <Badge className="uppercase text-xs font-mono font-extralight">
                                            {slug.replace(/-/g, " ")}
                                        </Badge>
                                    </div>
                                </article>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </>
    );
}
