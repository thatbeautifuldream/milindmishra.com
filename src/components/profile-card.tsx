/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Github, Twitter, Mail } from "lucide-react";
import { useState } from "react";
import { contact, skills } from "@/data/resume";
import { ResumeModal } from "./resume-modal";
import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/lib/fonts";

export function ProfileCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut", filter: { duration: 0.6, ease: "easeOut" } }}
        className="w-full max-w-sm mx-auto perspective"
      >
        <div
          className={cn(
            "relative transition-transform duration-700 preserve-3d cursor-pointer w-full max-w-sm mx-auto",
            isFlipped ? "rotate-y-180" : ""
          )}
          onClick={() => setIsFlipped((f) => !f)}
        >
          {/* Front Side */}
          <div className="backface-hidden">
            <Tilt
              scale={1.05}
              transitionSpeed={1000}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#00FF00"
              glarePosition="all"
              className="w-full"
            >
              <div className="border border-green-400/20 hover:border-green-400 transition-colors bg-black/50 backdrop-blur-lg overflow-hidden shadow flex flex-col items-center px-8 py-10">
                <div className="flex flex-col items-center">
                  <img
                    className="w-32 h-32 border-4 border-black object-cover"
                    src={contact.profilePicture}
                    alt={`${contact.name}'s Profile picture`}
                  />
                  <h2
                    className={cn(
                      "mt-4 text-2xl font-bold text-white select-none",
                      bricolageGrotesque.className
                    )}
                  >
                    {contact.name}
                  </h2>
                  <p
                    className={cn(
                      "text-green-300 mt-1 select-none",
                      bricolageGrotesque.className
                    )}
                  >
                    {contact.title}
                  </p>
                </div>
                <div className="mt-6 flex justify-center space-x-6">
                  <a
                    href={contact.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={contact.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href={contact.socialLinks.email}
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {["TypeScript", "React", "Node.js"].map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-2 py-1 bg-green-400/10 text-center text-green-300 select-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 w-full">
                  <button
                    className="w-full border border-green-400 text-green-400 py-2 hover:bg-green-400/10 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsModalOpen(true);
                    }}
                  >
                    View Resume
                  </button>
                </div>
              </div>
            </Tilt>
          </div>
          {/* Back Side */}
          <div className="absolute inset-0 rotate-y-180 backface-hidden">
            <Tilt
              scale={1.05}
              transitionSpeed={1000}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#00FF00"
              glarePosition="all"
              className="w-full h-full"
            >
              <div className="border border-green-400/20 hover:border-green-400 transition-colors bg-black/50 backdrop-blur-lg overflow-hidden shadow flex flex-col items-center px-8 py-10 h-full">
                <h3
                  className={cn(
                    "text-xl font-bold text-white mb-4",
                    bricolageGrotesque.className
                  )}
                >
                  About Me
                </h3>
                <p className="text-green-300 mb-4 text-center select-none">
                  Software Engineer passionate about creating beautiful and functional web experiences.
                </p>
                <h3
                  className={cn(
                    "text-xl font-bold text-white mb-4 select-none",
                    bricolageGrotesque.className
                  )}
                >
                  Skills
                </h3>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-2 py-1 bg-green-400/10 text-center text-green-300 select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-auto w-full">
                  <button
                    className="w-full border border-green-400 text-green-400 py-2 hover:bg-green-400/10 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsModalOpen(true);
                    }}
                  >
                    View Resume
                  </button>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </motion.div>
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
