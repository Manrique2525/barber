"use client";

import { Fragment } from "react";
import { ArrowDown } from "lucide-react";
import { processSteps } from "@/constants/content";
import { SectionHeader } from "@/components/common/SectionHeader";
import { StaggerGroup } from "@/components/animations/Reveal";

export function Process() {
  return (
    <section id="proceso" className="bg-card/20 relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="El Proceso"
          title="Tu experiencia, paso a paso"
          description="Un ritual pensado al detalle, del momento en que reservas hasta que sales con tu mejor versión."
        />

        <StaggerGroup className="lg:grid lg:grid-cols-5 lg:gap-5">
          {processSteps.map((step, index) => (
            <Fragment key={step.step}>
              <div className="group relative flex items-start gap-6 py-6 lg:flex-col lg:py-0">
                <div className="border-gold/30 bg-gold/8 text-gold group-hover:bg-gold group-hover:text-background relative inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:shadow-[0_10px_30px_rgba(200,161,92,0.35)]">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <p className="font-display text-gold/50 text-3xl">{step.step}</p>
                  <h3 className="font-display text-foreground mt-1 text-xl">{step.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < processSteps.length - 1 ? (
                <div className="flex items-center justify-center py-2 lg:hidden" aria-hidden="true">
                  <ArrowDown className="text-gold/60 h-5 w-5" />
                </div>
              ) : null}
            </Fragment>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
