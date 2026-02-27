import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ProgressiveBlurProps {
  className?: string;
  blurIntensity?: number;
  animate?: string;
  variants?: {
    hidden: { opacity: number };
    visible: { opacity: number };
  };
  transition?: {
    duration: number;
    ease: string;
  };
}

export function ProgressiveBlur({
  className,
  blurIntensity = 0.5,
  animate,
  variants,
  transition,
}: ProgressiveBlurProps) {
  return (
    <motion.div
      className={cn(
        "bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm",
        className
      )}
      animate={animate}
      variants={variants}
      transition={transition}
      style={{
        opacity: blurIntensity,
      }}
    />
  );
}
