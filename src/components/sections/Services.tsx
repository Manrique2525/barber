"use client";

import { ArrowUpRight, Clock } from "lucide-react";
import { services } from "@/constants/services";
import { SmartImage } from "@/components/common/SmartImage";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/common/SectionHeader";
import { StaggerGroup } from "@/components/animations/Reveal";
import { useBookingStore } from "@/stores/booking";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/utils/format";

function ServiceCard({
  id,
  name,
  description,
  duration,
  price,
  image,
  alt,
  badge,
  featured,
}: (typeof services)[number]) {
  const setSelectedService = useBookingStore((state) => state.setSelectedService);

  const handleSelect = () => {
    setSelectedService(id);
  };

  return (
    <a
      href="#contacto"
      onClick={handleSelect}
      className={cn(
        "group bg-card relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-500",
        featured ? "border-gold/40 shadow-[0_0_40px_rgba(200,161,92,0.12)]" : "border-border",
        "hover:border-gold/50 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <SmartImage
          src={image}
          alt={alt}
          fill
          hoverZoom
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          imgClassName="duration-[1100ms]"
        />
        <div
          className="from-card absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-80"
          aria-hidden="true"
        />
        {badge ? (
          <div className="absolute top-4 left-4">
            <Badge>{badge}</Badge>
          </div>
        ) : null}
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-start justify-between gap-4">
          <h3 className="font-display text-foreground group-hover:text-gold text-xl transition-colors duration-300">
            {name}
          </h3>
          <p className="font-display text-gold shrink-0 text-xl">{formatPrice(price)}</p>
        </div>
        <p className="text-muted-foreground mb-5 flex-1 text-sm leading-relaxed">{description}</p>
        <div className="border-border/60 flex items-center justify-between border-t pt-4">
          <span className="text-muted-foreground inline-flex items-center gap-2 text-xs">
            <Clock className="text-gold h-3.5 w-3.5" aria-hidden="true" />
            {duration} min
          </span>
          <span className="text-gold inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.16em] uppercase">
            Reservar
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </a>
  );
}

export function Services() {
  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Servicios"
          title="Rituales de cuidado masculino"
          description="Cada servicio es una experiencia. Técnicas de barbería clásica combinadas con estilos modernos, ejecutadas con precisión por nuestro equipo."
        />

        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
