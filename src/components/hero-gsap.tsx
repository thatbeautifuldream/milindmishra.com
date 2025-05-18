"use client";

import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { details } from "@/data/resume";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import BookACallButton from "./book-a-call-button";
import { ChatResumeButton } from "./chat-resume-button";
import Icons from "./icons";
import { ProfileCard } from "./profile-card";

// Register the plugin
if (typeof window !== "undefined" && gsap && SplitText) {
  gsap.registerPlugin(SplitText);
}

export function HeroGSAP() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate heading
    if (headingRef.current) {
      const split = new SplitText(headingRef.current, { type: "chars,words" });
      gsap.fromTo(
        split.chars,
        { y: 80, opacity: 0, rotateX: 90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.04,
        }
      );
    }
    // Animate bio
    if (bioRef.current) {
      const split = new SplitText(bioRef.current, { type: "chars,words" });
      gsap.fromTo(
        split.chars,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 1,
          ease: "power4.out",
          stagger: 0.02,
        }
      );
    }
    // Animate icons
    if (iconsRef.current) {
      gsap.fromTo(
        iconsRef.current.children,
        { opacity: 0, scale: 0.7, y: 20, filter: 'blur(10px)' },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 0.7,
          delay: 1.1,
          ease: "back.out(1.7)",
          stagger: 0.08,
        }
      );
    }
    // Animate both action buttons as a group with motion blur
    const actionButtons = gsap.utils.toArray('.hero-action-btn');
    if (actionButtons.length) {
      gsap.fromTo(
        actionButtons,
        { y: 40, opacity: 0, scale: 0.95, filter: 'blur(10px)' },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.7,
          delay: 1.3,
          ease: 'power3.out',
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section className="flex items-center py-16 min-h-[60vh]" ref={containerRef}>
      <div className="w-full">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:gap-20">
          {/* Left side - Text content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6">
            <h1
              ref={headingRef}
              className={cn(
                "text-4xl lg:text-6xl font-extrabold leading-tight text-white",
                bricolageGrotesque.className
              )}
            >
              Building software for ambitious teams
            </h1>
            <p
              ref={bioRef}
              className={cn(
                "text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 font-medium",
              )}
            >
              {details.person.profile.bio}
            </p>
            <div ref={iconsRef} className="flex gap-x-4 justify-center lg:justify-start mt-2">
              <Icons.Nextjs className="w-8 h-8" />
              <Icons.Reactjs className="w-8 h-8" />
              <Icons.Tanstack className="w-8 h-8" />
              <Icons.TailwindCSS className="w-8 h-8" />
              <Icons.Motion className="w-8 h-8" />
              <Icons.AWS className="w-8 h-8" />
            </div>
            <div className="flex gap-x-3 mt-4 justify-center lg:justify-start">
              <ChatResumeButton variant="outline" className="hero-action-btn" />
              <BookACallButton className="hero-action-btn" />
            </div>
          </div>
          {/* Right side - Profile Card */}
          <div className="flex items-center justify-center">
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
}
