"use client";

import { stats } from "@/constants/content";
import { Counter } from "@/components/animations/Counter";
import { StaggerGroup } from "@/components/animations/Reveal";

export function Stats() {
  return (
    <section
      aria-label="Cifras de la barbería"
      className="border-border/60 bg-card/30 relative border-y"
    >
      <StaggerGroup className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group border-border/60 flex flex-col items-center gap-2 border-b px-6 py-10 text-center last:border-b-0 sm:py-14 lg:border-r lg:border-b-0 lg:last:border-r-0"
          >
            <Counter
              value={stat.value}
              decimals={stat.decimals}
              suffix={stat.suffix}
              prefix={stat.prefix}
              className="font-display text-gold-gradient text-4xl sm:text-5xl"
            />
            <p className="text-muted-foreground text-xs tracking-[0.18em] uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </StaggerGroup>
    </section>
  );
}
