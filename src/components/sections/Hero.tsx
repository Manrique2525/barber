"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Calendar, Sparkles } from "lucide-react";
import { site } from "@/config/site";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/common/StarRating";
import { ScrollParallax } from "@/components/animations/ScrollParallax";
import { Floating } from "@/components/animations/Floating";
import { MouseParallax } from "@/components/animations/MouseParallax";

const EASE = [0.22, 1, 0.36, 1] as const;

const titleLines = [
  { text: "Tu Estilo", gold: false },
  { text: "Comienza Aquí", gold: true },
];

function TitleLine({ text, gold, delay }: { text: string; gold: boolean; delay: number }) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className={`block will-change-transform ${gold ? "text-gold-gradient" : ""}`}
        initial={{ y: "115%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {text}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-svh flex-col overflow-hidden">
      <MouseParallax
        maxDistance={16}
        className="absolute inset-0"
        layers={[
          {
            depth: 0.7,
            className: "",
            children: (
              <ScrollParallax speed={10} className="absolute inset-0">
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.15 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 2.2, ease: EASE }}
                >
                  <Image
                    src="/images/hero/hero.jpg"
                    alt="Barbería premium con barberos trabajando con clientes"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                  />
                </motion.div>
              </ScrollParallax>
            ),
          },
        ]}
      />

      <div
        className="from-background via-background/40 to-background/70 absolute inset-0 bg-gradient-to-t"
        aria-hidden="true"
      />
      <div
        className="from-background/90 via-background/30 absolute inset-0 bg-gradient-to-r to-transparent"
        aria-hidden="true"
      />
      <div className="bg-grain absolute inset-0" aria-hidden="true" />

      <Floating
        amplitude={8}
        duration={7}
        className="absolute top-[24%] right-[8%] hidden md:block"
      >
        <div className="bg-card/70 w-64 rounded-2xl border border-white/10 p-5 shadow-2xl backdrop-blur-xl">
          <div className="text-gold mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            <span className="text-xs tracking-[0.18em] uppercase">Experiencia premium</span>
          </div>
          <p className="font-display text-foreground text-lg">
            +{site.yearsExperience} años de oficio
          </p>
          <p className="text-muted-foreground mt-1 text-xs">
            Barberos certificados con técnica de alto nivel.
          </p>
        </div>
      </Floating>

      <Floating
        amplitude={10}
        duration={8}
        delay={1.2}
        className="absolute right-[22%] bottom-[30%] hidden lg:block"
      >
        <div className="bg-card/70 rounded-full border border-white/10 px-5 py-3 shadow-xl backdrop-blur-xl">
          <p className="text-muted-foreground text-xs">
            Próximo horario <span className="text-gold ml-1 font-medium">Hoy · 4:30 PM</span>
          </p>
        </div>
      </Floating>

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-32 pb-20 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="border-gold/25 bg-gold/8 mb-6 inline-flex w-fit items-center gap-3 rounded-full border py-2 pr-4 pl-3 backdrop-blur-sm"
        >
          <StarRating rating={4.9} size={14} />
          <span className="text-foreground text-xs">
            4.9 · {site.rating.count.toLocaleString("es-MX")}+ reseñas en Google
          </span>
        </motion.p>

        <h1 className="font-display text-foreground text-[13vw] leading-[1.02] sm:text-7xl lg:text-[6.5rem]">
          {titleLines.map((line, index) => (
            <TitleLine
              key={line.text}
              text={line.text}
              gold={line.gold}
              delay={0.3 + index * 0.16}
            />
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
          className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
        >
          Barbería premium en {site.city}. Cortes de precisión, barba y afeitado tradicional en un
          ambiente diseñado para el hombre moderno.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a href="#contacto" className="inline-block">
            <Button size="lg">
              Reserva Ahora
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Button>
          </a>
          <a href="#servicios" className="inline-block">
            <Button size="lg" variant="outline">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Ver Servicios
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.15 }}
          className="mt-14 flex items-center gap-5"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3].map((avatar) => (
              <span
                key={avatar}
                className="border-background from-gold-dark to-leather inline-flex h-10 w-10 items-center justify-center rounded-full border-2 bg-gradient-to-br text-xs font-semibold text-white"
                aria-hidden="true"
              >
                {["CM", "AS", "IT"][avatar - 1]}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground max-w-[220px] text-sm">
            <span className="text-foreground font-medium">+5,000 clientes</span> ya confiaron en
            nosotros
          </p>
        </motion.div>
      </div>

      <motion.a
        href="#servicios"
        aria-label="Desplazarse a servicios"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="text-muted-foreground hover:text-gold absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="border-border flex h-11 w-7 items-start justify-center rounded-full border p-1.5"
        >
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}
