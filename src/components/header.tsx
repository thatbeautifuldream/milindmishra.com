"use client";

import Link from "next/link";
import { Sign } from "./sign";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "nextjs-toploader/app";
import { Badge } from "@/components/ui/badge";

export function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "1":
          router.push("/");
          break;
        case "2":
          router.push("/contact");
          break;
        case "3":
          router.push("/blog");
          break;
        case "4":
          router.push("/links");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  function ShortcutBadge({ children }: { children: React.ReactNode }) {
    return (
      <Badge
        variant="shortcut"
        className="hidden md:block ml-1 text-xs absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
      >
        {children}
      </Badge>
    );
  }

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
              className="hover:text-green-300 transition-colors relative"
            >
              Contact
              <ShortcutBadge>2</ShortcutBadge>
            </Link>
            <Link
              href="/blog"
              className="hover:text-green-300 transition-colors relative"
            >
              Blog
              <ShortcutBadge>3</ShortcutBadge>
            </Link>
            <Link
              href="/links"
              className="hover:text-green-300 transition-colors relative"
            >
              Links
              <ShortcutBadge>4</ShortcutBadge>
            </Link>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
