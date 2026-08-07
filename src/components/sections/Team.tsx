"use client";

import Image from "next/image";
import { team } from "@/constants/content";
import { SectionHeader } from "@/components/common/SectionHeader";
import { SocialIcon } from "@/components/common/SocialIcon";
import { StaggerGroup } from "@/components/animations/Reveal";

export function Team() {
  return (
    <section id="equipo" className="bg-card/20 relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Nuestro Equipo"
          title="Las manos detrás de tu estilo"
          description="Barberos apasionados por el oficio, certificados y en constante formación para traerte lo mejor de la barbería mundial."
        />

        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article
              key={member.name}
              className="group border-border hover:border-gold/50 relative overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
                <div
                  className="from-background via-background/30 absolute inset-0 bg-gradient-to-t to-transparent"
                  aria-hidden="true"
                />
                <a
                  href={member.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram de ${member.name}`}
                  className="border-gold/30 bg-background/50 text-gold hover:bg-gold hover:text-background absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full border opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100"
                >
                  <SocialIcon name="instagram" className="h-4 w-4" aria-hidden="true" />
                </a>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-gold text-xs tracking-[0.2em] uppercase">{member.role}</p>
                  <h3 className="font-display text-foreground mt-2 text-2xl">{member.name}</h3>
                  <div className="text-muted-foreground mt-3 space-y-1 text-sm">
                    <p>{member.specialty}</p>
                    <p className="inline-flex items-center gap-2 text-xs">
                      <span className="bg-gold/50 h-px w-4" aria-hidden="true" />
                      {member.experience} de experiencia
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
