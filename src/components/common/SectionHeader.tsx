"use client";

import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-14 flex flex-col gap-5 sm:mb-20",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <Reveal variant="fade" as="p" className="flex items-center gap-3">
        <span className="bg-gold/50 h-px w-8" aria-hidden="true" />
        <span className="text-gold text-xs font-medium tracking-[0.24em] uppercase">{eyebrow}</span>
        {align === "center" && <span className="bg-gold/50 h-px w-8" aria-hidden="true" />}
      </Reveal>

      <Reveal as="h2" className="text-foreground max-w-3xl text-4xl leading-[1.1] sm:text-5xl">
        {title}
      </Reveal>

      {description ? (
        <Reveal
          as="p"
          delay={0.15}
          className="text-muted-foreground max-w-2xl text-base leading-relaxed sm:text-lg"
        >
          {description}
        </Reveal>
      ) : null}
    </div>
  );
}
