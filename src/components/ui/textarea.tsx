import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "border-input bg-card/60 text-foreground placeholder:text-muted-foreground/60 focus-visible:border-gold/60 focus-visible:ring-gold/25 flex min-h-[110px] w-full resize-none rounded-lg border px-4 py-3 text-sm transition-all duration-300 focus-visible:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
