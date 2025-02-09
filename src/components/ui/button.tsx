import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-green-500 text-black shadow-sm hover:bg-green-600 active:scale-95",
        destructive:
          "bg-destructive/90 text-destructive-foreground shadow-sm hover:bg-destructive/80",
        outline:
          "border border-green-400/20 bg-black/50 text-green-400 shadow-sm backdrop-blur-sm hover:border-green-400 hover:bg-green-400/10",
        secondary:
          "bg-black/50 text-green-300 shadow-sm backdrop-blur-sm border border-green-400/20 hover:bg-green-400/10 hover:border-green-400",
        ghost: "text-green-400 hover:bg-green-400/10 hover:text-green-300",
        link: "text-green-400 underline-offset-4 hover:text-green-300 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
