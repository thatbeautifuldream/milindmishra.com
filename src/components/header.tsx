"use client";

import Link from "next/link";
import { Sign } from "./sign";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ paddingTop: "12px", paddingBottom: "12px" }}
      animate={{
        paddingTop: isScrolled ? "0px" : "12px",
        paddingBottom: isScrolled ? "0px" : "12px",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="sticky top-0 z-50 bg-black border-b border-green-400/20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex flex-wrap items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: isScrolled ? 0.8 : 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Sign color="#49DE80" className="w-12 h-12" />
            </motion.div>
          </Link>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <Link
              href="/contact"
              className="hover:text-green-300 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="hover:text-green-300 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/links"
              className="hover:text-green-300 transition-colors"
            >
              Links
            </Link>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
