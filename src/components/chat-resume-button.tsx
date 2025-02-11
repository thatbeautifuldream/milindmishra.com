import { Button, ButtonProps } from "./ui/button";
import { BotMessageSquare } from "lucide-react";

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
      onClick={() => {
        window.open(
          "https://chatgpt.com/share/67a9272a-3c60-8008-ac34-799d3aa47b04",
          "_blank"
        );
      }}
    >
      <BotMessageSquare className="w-4 h-4" />
      <span className="hidden md:block">Chat with the resume</span>
      <span className="block md:hidden">Chat</span>
    </Button>
  );
}
