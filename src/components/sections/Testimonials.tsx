"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { testimonials } from "@/constants/content";
import { StarRating } from "@/components/common/StarRating";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="opiniones" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Opiniones"
          title="Clientes que vuelven una y otra vez"
          description={`Calificación promedio de ${site.rating.value} estrellas basada en +${site.rating.count.toLocaleString("es-MX")} reseñas de Google.`}
        />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {testimonials.map((testimonial, index) => (
              <figure
                key={testimonial.name}
                className={cn(
                  "border-border bg-card flex min-w-[100%] flex-col justify-between rounded-2xl border p-8 transition-colors duration-500 sm:min-w-[50%] lg:min-w-[33.333%]",
                  selectedIndex === index && "border-gold/40"
                )}
              >
                <div>
                  <StarRating rating={testimonial.rating} size={15} />
                  <blockquote className="text-foreground/90 mt-5 text-base leading-relaxed">
                    “{testimonial.text}”
                  </blockquote>
                </div>
                <figcaption className="border-border/60 mt-8 flex items-center gap-4 border-t pt-6">
                  {testimonial.avatar ? (
                    <Image
                      src={testimonial.avatar}
                      alt=""
                      aria-hidden="true"
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      className="from-gold-dark to-leather inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br text-sm font-semibold text-white"
                      aria-hidden="true"
                    >
                      {testimonial.initials}
                    </span>
                  )}
                  <div>
                    <p className="text-foreground font-medium">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.service} · {testimonial.date}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="flex gap-2" aria-hidden="true">
            {testimonials.map((testimonial, index) => (
              <span
                key={testimonial.name}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-400",
                  selectedIndex === index ? "bg-gold w-8" : "bg-muted-foreground/30 w-1.5"
                )}
              />
            ))}
          </div>
          <Reveal>
            <a
              href="#contacto"
              className="text-muted-foreground hover:text-gold inline-flex items-center gap-2 text-sm transition-colors"
            >
              Escribe tu reseña
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <Reveal className="mt-10 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Opiniones anteriores"
            className="border-border text-foreground hover:border-gold/60 hover:text-gold inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Más opiniones"
            className="border-border text-foreground hover:border-gold/60 hover:text-gold inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
