import { Button, ButtonProps } from "./ui/button";
import { BotMessageSquare } from "lucide-react";
import Link from "next/link";

interface ChatResumeButtonProps {
  variant?: ButtonProps["variant"];
  className?: string;
}

export function ChatResumeButton({
  variant = "default",
  className = "",
}: ChatResumeButtonProps) {
  return (
    <Button
      variant={variant}
      className={`flex items-center gap-x-2 ${className}`}
      asChild
    >
      <Link href="/chat">
        <BotMessageSquare className="w-4 h-4" />
        <span className="hidden md:block">Chat with the resume</span>
        <span className="block md:hidden">Chat</span>
      </Link>
    </Button>
  );
}
