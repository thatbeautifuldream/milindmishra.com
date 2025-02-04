"use client";

import { motion } from "framer-motion";
import { links } from "@/data/links";
import { cn } from "@/lib/utils";
import { bricolageGrotesque } from "@/lib/fonts";

export function Links() {
  return (
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
            className="block p-4 border border-green-500/20 hover:bg-green-500/10 transition-colors backdrop-blur-sm mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.05 + 0.1,
              duration: 0.2,
            }}
          >
            <h2
              className={cn(
                "text-xl font-semibold text-green-400",
                bricolageGrotesque.className
              )}
            >
              {link.title}
            </h2>
            {link.description && (
              <p className="text-gray-400 mt-1 text-sm">{link.description}</p>
            )}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
