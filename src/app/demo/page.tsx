"use client";

import { LayoutGroup, motion } from "motion/react";

import TextRotate from "@/components/text-rotate";
import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/lib/fonts";

export default function Demo() {
  return (
    <div
      className={cn(
        "text-2xl sm:text-3xl md:text-5xl flex flex-row items-center justify-center dark:text-white text-white font-semibold overflow-hidden p-12 sm:p-20 md:p-24",
        bricolageGrotesque.className
      )}
    >
      <LayoutGroup>
        <motion.p className="flex whitespace-pre" layout>
          <TextRotate
            texts={["Indiranagar", "Koramangala"]}
            mainClassName="text-black px-2 sm:px-2 md:px-3 bg-green-500 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
            loop={false}
          />
          <motion.span
            className="pt-0.5 sm:pt-1 md:pt-2 ml-2"
            layout
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            का Product Engineer
          </motion.span>
        </motion.p>
      </LayoutGroup>
    </div>
  );
}
