import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChatResumeButton } from "./chat-resume-button";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="w-full max-w-[1200px] h-[90vh] relative"
            >
              <div className="relative h-full w-full rounded-lg border border-green-400/20 bg-black/90 p-1 shadow-xl">
                <div className="absolute top-0 left-0 right-0 h-12 bg-black/90 border-b border-green-400/20 rounded-t-lg flex items-center justify-between px-4">
                  <span
                    className={cn(
                      "text-green-400",
                      bricolageGrotesque.className
                    )}
                  >
                    Milind&apos;s Resume
                  </span>
                  <div className="flex items-center gap-x-2">
                    <ChatResumeButton variant="ghost" />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                      }}
                      className="rounded-full bg-black border border-green-400/20 p-1 text-green-400 hover:bg-green-400 hover:text-black transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <iframe
                  src="/resume"
                  className="h-full w-full rounded-lg pt-12"
                  title="Resume"
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
