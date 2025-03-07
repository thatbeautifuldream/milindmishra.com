"use client";

import { Projects } from "@/components/projects";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, CheckCircleIcon } from "lucide-react";

export default function PitchPage() {
  return (
    <div className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7">
        <p className="text-base/7 font-semibold text-green-400">
          Software Engineer
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
          Hi, I&apos;m Milind Mishra
        </h1>
        <p className="mt-6 text-xl/8 text-green-400/80">
          Full-Stack Software Engineer with a proven track record of building
          successful products from concept to launch. Specializing in modern web
          technologies and cloud infrastructure.
        </p>

        <div className="mt-10 max-w-2xl">
          <p className="text-green-400/70">
            With international experience across India, Taiwan, and the US, I
            bring a global perspective to software development. My latest
            achievement includes developing the AI Roadmap Generator, which has
            helped over 10,000 developers plan their learning journey.
          </p>

          <ul role="list" className="mt-8 max-w-xl space-y-8 text-green-400/70">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-green-400"
              />
              <span>
                <strong className="font-semibold text-white">
                  Product Leadership
                </strong>{" "}
                - Led development of multiple successful products with focus on
                user experience and scalability
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-green-400"
              />
              <span>
                <strong className="font-semibold text-white">
                  Technical Expertise
                </strong>{" "}
                - Deep experience in React ecosystem, TypeScript, and cloud
                infrastructure
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-green-400"
              />
              <span>
                <strong className="font-semibold text-white">
                  Full-Stack Capabilities
                </strong>{" "}
                - Comprehensive experience from UX design to DevOps, enabling
                end-to-end product development
              </span>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            <Badge>TypeScript</Badge>
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>AWS</Badge>
            <Badge>DevOps</Badge>
          </div>

          <h2 className="mt-16 text-2xl font-semibold tracking-tight text-pretty text-white">
            Notable Projects
          </h2>

          <Projects />

          <div className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-white">
              Let&apos;s Connect
            </h2>
            <p className="mt-6 text-green-400/70">
              I&apos;m always excited to discuss new opportunities and
              collaborate on innovative projects.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="mailto:milindmishra4@gmail.com"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
              >
                milindmishra4@gmail.com
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/mishramilind"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
              >
                linkedin.com/in/mishramilind
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
