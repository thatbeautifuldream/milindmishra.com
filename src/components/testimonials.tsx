"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/lib/fonts";
import { Testimonial } from "@/data/resume/resume-schema";

type TTestimonialsProps = {
  testimonials: Testimonial[];
  className?: string;
};

export function Testimonials({ testimonials, className }: TTestimonialsProps) {
  const filteredTestimonials = testimonials.filter(
    (testimonial) => testimonial.show
  );
  return (
    <section className={cn("~mt-22/32 ~mb-22/32", className)}>
      <h2 className={cn("~text-xl/2xl font-bold", bricolageGrotesque.className)}>Testimonials</h2>
      <div className="grid grid-cols-1 grid-rows-[auto_1fr] gap-x-10 max-lg:gap-y-10 lg:grid-cols-2 lg:gap-y-5">
        {filteredTestimonials.map((testimonial, index) => (
          <figure
            key={index}
            className="group row-span-2 grid max-lg:mx-auto max-lg:max-w-3xl max-lg:gap-y-5 lg:grid-rows-subgrid lg:border-white/5 lg:first:border-r lg:last:border-l hover:text-sky-400"
          >
            <blockquote className="mx-auto flex items-center px-8 py-2 text-xl/9 font-medium tracking-tight text-white sm:px-16 sm:text-2xl/10">
              <p
                className={cn(
                  "relative before:pointer-events-none before:absolute before:top-4 before:-left-6 before:text-[6rem] before:text-white/10 before:content-['“'] sm:before:-left-8 lg:before:text-[8rem]",
                  bricolageGrotesque.className
                )}
              >
                {testimonial.message}
              </p>
            </blockquote>
            <figcaption className="max-lg:line-y lg:group-first:line-y grid grid-cols-[max-content_1fr] gap-6 px-8 py-2 sm:px-16">
              <Image
                src={testimonial.author.image}
                alt={testimonial.author.name}
                width={56}
                height={56}
                className="aspect-square size-14 rounded-full outline -outline-offset-1 outline-white/5"
              />
              <div className="text-sm/7">
                <p className="font-semibold text-white">
                  <Link
                    href={testimonial.author.social}
                    className="underline decoration-green-400 underline-offset-4 hover:text-green-400"
                    target="_blank"
                  >
                    {testimonial.author.name}
                  </Link>
                </p>
                <p className="text-white/70">
                  {testimonial.author.bio.split(" at ").map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 ? " at " : ""}
                    </span>
                  ))}
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
