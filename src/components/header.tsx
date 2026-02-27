"use client";

import { navigation } from "@/config/navigation";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";
import { useEffect, useState, useCallback } from "react";
import { Sign } from "./sign";
import { usePathname } from "next/navigation";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [clickCount, setClickCount] = useState<number>(0);
  const [lastClickTime, setLastClickTime] = useState<number>(0);

  const incrementClickCount = useCallback(() => {
    const now = Date.now();
    const timeSinceLastClick = now - lastClickTime;

    if (timeSinceLastClick < 1000) {
      setClickCount(prev => prev + 1);
      setLastClickTime(now);
      if (clickCount >= 4) {
        setClickCount(0);
        router.push('/sign');
      }
    } else {
      setClickCount(1);
      setLastClickTime(now);
    }
  }, [lastClickTime, clickCount, router]);

  useEffect(() => {
    if (clickCount > 0) {
      const timeout = setTimeout(() => {
        setClickCount(0);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [clickCount]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsScrolled(!entry.isIntersecting);
        });
      },
      { threshold: 0 }
    );

    const sentinel = document.createElement('div');
    sentinel.style.position = 'absolute';
    sentinel.style.top = '50px';
    sentinel.style.left = '0';
    sentinel.style.width = '1px';
    sentinel.style.height = '1px';
    document.body.prepend(sentinel);
    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      if (sentinel.parentNode) {
        sentinel.parentNode.removeChild(sentinel);
      }
    };
  }, []);

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

              if (timeSinceLastClick < 1000) {
                incrementClickCount();
                if (clickCount >= 4) {
                  e.preventDefault();
                  return;
                }
              } else {
                setClickCount(1);
                setLastClickTime(now);
              }
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
                    key={item.href}
                    href={item.href}
                    className={`transition-colors relative px-2 py-1 text-sm hover:text-green-300 ${isActive ? "text-green-400 border border-green-400 border-dashed" : ""}`}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
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
