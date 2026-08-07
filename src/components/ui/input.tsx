import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "border-input bg-card/60 text-foreground placeholder:text-muted-foreground/60 focus-visible:border-gold/60 focus-visible:ring-gold/25 flex h-12 w-full rounded-lg border px-4 py-2 text-sm transition-all duration-300 focus-visible:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
