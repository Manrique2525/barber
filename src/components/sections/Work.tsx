"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { work } from "@/constants/gallery";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

export function Work() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section id="trabajo" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            align="left"
            className="mb-0"
            eyebrow="Nuestro Trabajo"
            title="Resultados que hablan por sí solos"
          />
          <Reveal delay={0.2} className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canPrev}
              aria-label="Resultados anteriores"
              className="border-border text-foreground hover:border-gold/60 hover:text-gold inline-flex h-12 w-12 items-center justify-center rounded-full border transition-all disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!canNext}
              aria-label="Más resultados"
              className="border-border text-foreground hover:border-gold/60 hover:text-gold inline-flex h-12 w-12 items-center justify-center rounded-full border transition-all disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </Reveal>
        </div>
      </div>

      <Reveal className="pl-5 sm:pl-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5 pr-5 sm:pr-8">
            {work.map((item, index) => (
              <figure
                key={item.src}
                className={cn(
                  "group border-border relative min-w-[78vw] overflow-hidden rounded-2xl border sm:min-w-[420px] lg:min-w-[480px]",
                  "transition-transform duration-500",
                  selectedIndex === index && "border-gold/40"
                )}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 78vw, 480px"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                  />
                  <div
                    className="from-background/90 via-background/10 absolute inset-0 bg-gradient-to-t to-transparent"
                    aria-hidden="true"
                  />
                  <figcaption className="absolute bottom-5 left-5">
                    <span className="border-gold/30 bg-background/60 text-gold inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium tracking-[0.16em] uppercase backdrop-blur-md">
                      <span className="bg-gold h-1.5 w-1.5 rounded-full" aria-hidden="true" />
                      {item.label}
                    </span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-8 flex items-center justify-center gap-2" aria-hidden="true">
        {work.map((item, index) => (
          <span
            key={item.src}
            className={cn(
              "h-1.5 rounded-full transition-all duration-400",
              selectedIndex === index ? "bg-gold w-8" : "bg-muted-foreground/30 w-1.5"
            )}
          />
        ))}
      </div>
    </section>
  );
}
