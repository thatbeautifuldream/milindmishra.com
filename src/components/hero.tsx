"use client";

import { details } from "@/data/resume";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import TextRotate from "./text-rotate";
// import BookACallButton from "./book-a-call-button";
import { LayoutGroup, motion } from "motion/react";
import BookACallButton from "./book-a-call-button";

export function Hero() {
  const gradient =
    "bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent";

  const rotatingTexts = [
    "that delivers results",
    "with precision ✨",
    "that scales 🚀",
    "you can trust 🤝",
  ];

  return (
    <>
      <section className="flex items-center">
        <div className="w-full">
          <div className="~max-w-4xl/5xl mx-auto ~space-y-4/8 text-center">
            <div className="~space-y-1/3">
              <LayoutGroup>
                <motion.div className="flex flex-col items-center" layout>
                  <h1
                    className={cn(
                      "~text-4xl/6xl font-bold",
                      gradient,
                      bricolageGrotesque.className
                    )}
                  >
                    <span className="hidden sm:inline">
                      Designing & developing software
                    </span>
                    <span className="inline sm:hidden">Building software</span>
                  </h1>
                  <motion.div
                    className="flex ~mt-2/4"
                    layout
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  >
                    <TextRotate
                      texts={rotatingTexts}
                      rotationInterval={4000}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                      }}
                      staggerDuration={0.025}
                      staggerFrom="last"
                      splitLevelClassName="overflow-hidden"
                      elementLevelClassName="inline-block"
                      mainClassName={cn(
                        "~text-4xl/6xl font-bold",
                        bricolageGrotesque.className
                      )}
                    />
                  </motion.div>
                </motion.div>
              </LayoutGroup>
            </div>
            <p className="text-gray-400 ~text-sm/lg ~max-w-sm/lg mx-auto">
              {details.person.profile.bio}
            </p>
            <BookACallButton />
          </div>
        </div>
      </section>
    </>
  );
}
