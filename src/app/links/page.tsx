"use client";

import { motion } from "framer-motion";
import { links } from "@/data/links";

export default function LinksPage() {
  return (
    <main className="max-w-2xl mx-auto ~px-4/8 ~py-8/16 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="~space-y-4/6"
      >
        <div className="~space-y-6">
          {links.map((link, index) => (
            <motion.a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-green-500/20 hover:bg-green-500/10 transition-colors backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.1 + 0.3,
                duration: 0.3,
              }}
            >
              <h2 className="text-xl font-semibold text-green-400">
                {link.title}
              </h2>
              {link.description && (
                <p className="text-gray-400 mt-1 text-sm">{link.description}</p>
              )}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
