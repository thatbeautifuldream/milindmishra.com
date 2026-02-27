"use client";

import dynamic from "next/dynamic";
import { details } from "@/data/resume";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { LayoutGroup, motion } from "motion/react";
import BookACallButton from "./book-a-call-button";
import { ChatResumeButton } from "./chat-resume-button";
import Icons from "./icons";
import TextRotate from "./text-rotate";

const ProfileCard = dynamic(() => import("./profile-card").then(mod => ({ default: mod.ProfileCard })), {
  loading: () => (
    <div className="w-full max-w-sm mx-auto h-80 bg-black/50 backdrop-blur-lg border border-green-400/20 animate-pulse" />
  ),
  ssr: false
});

export function Hero() {
  const gradient =
    "bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent";

  const rotatingTexts = [
    "with precision ✨",
    "that scales 🚀",
    "you can trust 🤝",
  ];

  return (
    <>
      <section className="flex items-center py-8">
        <div className="w-full">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:gap-16">
            {/* Left side - Text content */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left ~space-y-4/8">
              <div className="~space-y-1/3">
                <LayoutGroup>
                  <motion.div
                    className="flex flex-col items-center lg:items-start"
                    layout
                  >
                    <h1
                      className={cn(
                        "~text-4xl/6xl lg:text-5xl/7xl font-bold",
                        gradient,
                        bricolageGrotesque.className
                      )}
                    >
                      {/* <span className="hidden sm:inline">
                        Designing & developing software
                      </span> */}
                      {/* <span className="inline sm:hidden">
                        Building software
                      </span> */}
                      Building software
                    </h1>
                    <motion.div
                      className="flex ~mt-2/4"
                      layout
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                      }}
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
                          "~text-4xl/6xl lg:text-5xl/7xl font-bold",
                          bricolageGrotesque.className
                        )}
                      />
                    </motion.div>
                  </motion.div>
                </LayoutGroup>
              </div>
              <p className="text-gray-200 ~text-sm/lg max-w-xl">
                <span className="hidden md:inline">
                  {details.person.profile.bio}
                </span>
                <span className="inline md:hidden">
                  {details.person.profile.shortBio}
                </span>
              </p>
              <div className="max-w-xl flex gap-x-4">
                <Icons.Nextjs className="~w-6/8 ~h-6/8" />
                <Icons.Reactjs className="~w-6/8 ~h-6/8" />
                <Icons.Tanstack className="~w-6/8 ~h-6/8" />
                <Icons.TailwindCSS className="~w-6/8 ~h-6/8" />
                <Icons.Motion className="~w-6/8 ~h-6/8" />
                <Icons.AWS className="~w-6/8 ~h-6/8" />
              </div>
              <div className="flex justify-center gap-x-2">
                <ChatResumeButton variant="outline" />
                <BookACallButton />
              </div>
            </div>

            {/* Right side - Profile Card */}
            <div className="flex items-center justify-center">
              <ProfileCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
