import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function KineticTypography({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const text = "Milind Mishra";
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    isVisible && (
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100vh" }}
        transition={{ duration: 1, delay: 2 }}
        className={cn(
          "fixed inset-0 flex items-center justify-center bg-black z-50",
          bricolageGrotesque.className
        )}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex"
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={childVariants}
              className={cn(
                "~text-4xl/6xl font-bold",
                "bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent"
              )}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    )
  );
}
