"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Testimonial {
  message: string;
  linkToTestimony: string;
  author: {
    name: string;
    bio: string;
    image: string;
    social: string;
  };
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
  title?: string;
  description?: string;
  maxDisplayed?: number;
}

export function Testimonials({
  testimonials,
  className,
  title = "Read what people are saying",
  description = "Feedback from people who have worked with me",
  maxDisplayed = 6,
}: TestimonialsProps) {
  const [showAll, setShowAll] = useState(false);

  const openInNewTab = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  return (
    <div className={className}>
      <div className="flex flex-col items-center justify-center pt-5">
        <div className="flex flex-col ~gap-3/5 mb-8">
          <h2
            className={cn(
              "text-center ~text-3xl/4xl font-medium",
              bricolageGrotesque.className
            )}
          >
            {title}
          </h2>
          <p className="text-center ~text-sm/lg text-muted-foreground">
            {description.split("<br />").map((line, i) => (
              <span key={i}>
                {line}
                {i !== description.split("<br />").length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="relative">
        <div
          className={cn(
            "flex justify-center items-center gap-5 flex-wrap",
            !showAll &&
              testimonials.length > maxDisplayed &&
              "max-h-[720px] overflow-hidden"
          )}
        >
          {testimonials
            .slice(0, showAll ? undefined : maxDisplayed)
            .map((testimonial, index) => (
              <Card
                key={index}
                className="w-80 h-auto p-5 relative bg-transparent border-green-400/20 hover:border-green-400 text-white backdrop-blur-sm transition-all duration-300 select-none"
              >
                <div className="flex items-center">
                  <Image
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="flex flex-col pl-4">
                    <Link
                      href={testimonial.author.social}
                      target="_blank"
                      className="text-left hover:opacity-80 transition-opacity"
                    >
                      <span className="font-semibold text-base hover:text-green-400 transition-colors">
                        {testimonial.author.name}
                      </span>
                    </Link>
                    <span className="text-sm text-muted-foreground">
                      {testimonial.author.bio}
                    </span>
                  </div>
                </div>
                <div className="mt-5 mb-5">
                  <p
                    className={cn(
                      "text-green-300 hover:text-green-400 transition-colors duration-300 ~text-sm/base",
                      bricolageGrotesque.className
                    )}
                  >
                    &quot; {testimonial.message} &quot;
                  </p>
                </div>
                <Link
                  href={testimonial.linkToTestimony}
                  target="_blank"
                  className="absolute top-4 right-4 hover:opacity-80 transition-opacity"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Card>
            ))}
        </div>

        {testimonials.length > maxDisplayed && !showAll && (
          <>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent opacity-70" />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
              <Button variant="ghost" onClick={() => setShowAll(true)}>
                Read More
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
