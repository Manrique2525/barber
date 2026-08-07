import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
}

export function Marquee({ items, className }: MarqueeProps) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li
          key={item}
          className="text-muted-foreground flex items-center gap-6 pr-6 text-sm tracking-[0.22em] uppercase"
        >
          {item}
          <span className="text-gold" aria-hidden="true">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={cn(
        "mask-fade-x border-border bg-card/40 relative flex w-full overflow-hidden border-y py-4",
        className
      )}
    >
      <div className="animate-marquee flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
