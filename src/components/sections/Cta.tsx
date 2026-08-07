"use client";

import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/Reveal";
import { ScrollParallax } from "@/components/animations/ScrollParallax";
import { whatsappUrl, telUrl } from "@/services/whatsapp";

export function Cta() {
  return (
    <section aria-label="Agenda tu cita" className="relative overflow-hidden">
      <ScrollParallax speed={14} className="absolute -top-[15%] right-0 -bottom-[15%] left-0">
        <Image
          src="/images/cta/cta-bg.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </ScrollParallax>

      <div className="bg-background/85 absolute inset-0 backdrop-blur-[2px]" aria-hidden="true" />
      <div
        className="from-background to-background absolute inset-0 bg-gradient-to-b via-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 py-28 text-center sm:px-8 sm:py-36">
        <Reveal
          variant="fade"
          as="p"
          className="text-gold mb-6 text-xs font-medium tracking-[0.24em] uppercase"
        >
          Tu mejor versión está a una cita de distancia
        </Reveal>

        <Reveal
          as="h2"
          className="font-display text-foreground text-5xl leading-[1.05] sm:text-7xl"
        >
          Agenda tu cita hoy
        </Reveal>

        <Reveal
          as="p"
          delay={0.15}
          className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
        >
          Espacios limitados por barbero. Asegura tu horario y vive la experiencia de la barbería
          premium en Ciudad de México.
        </Reveal>

        <Reveal delay={0.3} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={whatsappUrl("Hola, quiero agendar una cita.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">
              Reservar por WhatsApp
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </a>
          <a href={telUrl()}>
            <Button size="lg" variant="outline">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Llamar ahora
            </Button>
          </a>
        </Reveal>

        <Reveal
          as="p"
          delay={0.45}
          className="text-muted-foreground mt-8 text-xs tracking-[0.2em] uppercase"
        >
          Respuesta en minutos · Horarios flexibles · Sin costo de reserva
        </Reveal>
      </div>
    </section>
  );
}
