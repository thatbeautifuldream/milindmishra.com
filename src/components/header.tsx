"use client";

import { navigation } from "@/config/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";
import { useEffect, useState } from "react";
import { Sign } from "./sign";
import { usePathname } from "next/navigation";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [clickCount, setClickCount] = useState<number>(0);
  const [lastClickTime, setLastClickTime] = useState<number>(0);

  // Handle navigation when click count reaches threshold within time window
  useEffect(() => {
    if (clickCount >= 5) {
      router.push('/sign');
      setClickCount(0);
    }
  }, [clickCount, router]);

  // Reset click count after timeout
  useEffect(() => {
    if (clickCount > 0) {
      const timeout = setTimeout(() => {
        setClickCount(0);
      }, 2000); // Reset after 2 seconds of inactivity

      return () => clearTimeout(timeout);
    }
  }, [clickCount, lastClickTime]);

  // tracks scroll position to adjust header padding
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // handles keyboard shortcuts for navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const navItem = navigation.find((item) => item.shortcut === event.key);
      if (navItem) {
        router.push(navItem.href);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

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
          <Link
            href="/"
            className="text-xl font-bold"
            onClick={(e) => {
              const now = Date.now();
              const timeSinceLastClick = now - lastClickTime;

              // If clicks are rapid (within 1 second), count them for easter egg
              if (timeSinceLastClick < 1000) {
                setClickCount(prev => prev + 1);
                setLastClickTime(now);

                // If we're about to trigger the easter egg, prevent navigation
                if (clickCount >= 4) {
                  e.preventDefault();
                  return;
                }
              } else {
                // Reset count for non-rapid clicks
                setClickCount(1);
                setLastClickTime(now);
              }

              // Allow normal navigation to "/" for regular clicks
            }}
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: isScrolled ? 0.8 : 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Sign color="#49DE80" className="size-12" />
            </motion.div>
          </Link>

          <div className="flex items-center">
            {navigation
              .slice(1)
              .filter((item) => item.visible !== false)
              .map((item, idx) => {
                const isActive = pathname === item.href || (pathname?.startsWith(item.href) && item.href !== "/");
                return (
                  <Link
                    href={item.href}
                    className={`transition-colors relative px-2 py-1 text-sm hover:text-green-300 ${isActive ? "text-green-400 border border-green-400 border-dashed" : ""}`}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                    key={idx}
                  >
                    {hovered === idx && (
                      <motion.span
                        layoutId="hovered-span"
                        className="absolute inset-0 h-full w-full bg-green-500/20"
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
