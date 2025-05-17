"use client"

import Link from "next/link";
import { ArrowUpRightIcon, XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { usePersistedState } from "@/hooks/use-persisted-state";

export default function FloatingBanner() {
    const [visible, setVisible] = usePersistedState("floating-banner-visible", true);
    if (!visible) return null;
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -40,
                filter: "blur(3px)"
            }}
            animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)"
            }}
            transition={{
                duration: 0.6,
                ease: "easeOut"
            }}
            className="pointer-events-none fixed inset-x-0 top-2 z-50 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8"
        >
            <div className="pointer-events-auto flex items-center justify-between gap-x-6 border border-green-400/20 bg-black/50 px-6 py-2.5 sm:py-3 sm:pr-3.5 sm:pl-4 shadow-lg backdrop-blur-sm transition-colors hover:border-green-400">
                <p className="text-sm text-green-300">
                    <strong className="font-semibold text-green-400">Came from my talk?</strong>
                    <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current text-green-400">
                        <circle r={1} cx={1} cy={1} />
                    </svg>
                    <Link href="/slide" onClick={() => setVisible(false)} className="group hover:underline font-semibold text-green-50">
                        See slides&nbsp;<span aria-hidden="true"><ArrowUpRightIcon className="size-4 inline-block transition-transform group-hover:-translate-y-0.5" /></span>
                    </Link>
                </p>
                <button type="button" className="-m-1.5 flex-none p-1.5 hover:bg-green-400/10 transition-colors" onClick={() => setVisible(false)}>
                    <span className="sr-only">Dismiss</span>
                    <XIcon aria-hidden="true" className="size-4 text-green-400" />
                </button>
            </div>
        </motion.div>
    );
} 