import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  compact?: boolean;
}

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 24 24"
        className="text-gold h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M11.5 5.5 19 13l-1.5 1.5-1-1-1 1 1 1-1.5 1.5-1-1-1 1L3 12.5l1.5-1.5 1 1 1-1-1-1L7 9.5l1 1 1-1-1-1 1.5-1.5 1 1 1-1-1-1L12.5 4.5l-1 1z" />
      </svg>
      <span
        className={cn(
          "font-display text-foreground text-lg leading-none tracking-wide",
          compact && "text-base"
        )}
      >
        Barber<span className="text-gold">&nbsp;&amp;</span>&nbsp;Co.
      </span>
    </span>
  );
}
