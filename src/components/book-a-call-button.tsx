import { Button } from "@/components/ui/button";
import { bricolageGrotesque } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";

export default function BookACallButton() {
  return (
    <Button
      className={cn(
        "group transition transform active:scale-95 bg-green-500 text-black hover:bg-green-600",
        bricolageGrotesque.className
      )}
    >
      Book a call
      <ArrowRightIcon
        className="-me-1 ms-2 transition-transform group-hover:translate-x-0.5 w-4 h-4"
        strokeWidth={2}
        aria-hidden="true"
      />
    </Button>
  );
}
