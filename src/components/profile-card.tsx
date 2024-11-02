/* eslint-disable @next/next/no-img-element */
"use client";

import { Tilt } from "react-tilt";
import { Github, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

const defaultOptions = {
  reverse: false,
  max: 25,
  perspective: 1000,
  scale: 1.05,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

export function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Tilt options={defaultOptions} className="w-full max-w-sm mx-auto">
        <div className="border border-green-400/20 hover:border-green-400 transition-colors bg-black/50 backdrop-blur-lg overflow-hidden">
          <div className="relative h-32 bg-gradient-to-r from-green-400/20 to-green-400/10" />
          <div className="relative px-6 pb-6">
            <div className="relative -mt-16 mb-4">
              <img
                className="w-32 h-32 border-4 border-black mx-auto object-cover"
                src="https://github.com/thatbeautifuldream.png"
                alt="Milind Mishra's Profile picture"
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white">Milind Mishra</h2>
              <p className="text-green-300 mt-1">Design Engineer</p>
            </div>
            <div className="mt-6 flex justify-center space-x-6">
              <a
                href="https://github.com/thatbeautifuldream"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com/milindmishra_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:contact@milindmishra.com"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {["TypeScript", "React", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-2 py-1 bg-green-400/10 text-center text-green-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <button className="w-full border border-green-400 text-green-400 py-2 hover:bg-green-400/10 transition-colors">
                View Resume
              </button>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}
