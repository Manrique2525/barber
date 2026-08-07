"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Plus } from "lucide-react";
import { faqs } from "@/constants/content";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Reveal } from "@/components/animations/Reveal";
import { whatsappUrl } from "@/services/whatsapp";

function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `faq-panel-${question.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-colors duration-400 ${
        open ? "border-gold/40 bg-card" : "border-border bg-card/50 hover:border-gold/25"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-foreground text-lg">{question}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="border-gold/30 text-gold inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-muted-foreground px-6 pb-6 text-sm leading-relaxed">{answer}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bg-card/20 relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Preguntas Frecuentes"
          title="Resolvemos tus dudas"
          description="Todo lo que necesitas saber antes de tu primera visita."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-16">
          <Reveal className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <FaqItem key={faq.question} {...faq} defaultOpen={index === 0} />
            ))}
          </Reveal>

          <Reveal delay={0.2}>
            <div className="lg:sticky lg:top-28">
              <div className="border-gold/30 from-gold/10 to-card rounded-3xl border bg-gradient-to-b p-8">
                <div className="bg-gold/15 text-gold mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-foreground text-2xl">¿Tienes otra pregunta?</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                  Escríbenos por WhatsApp y nuestro equipo te responde al momento, en horario de
                  atención.
                </p>
                <a
                  href={whatsappUrl("Hola, tengo una pregunta sobre sus servicios.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold hover:bg-gold-light mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-[#0a0a0a] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(200,161,92,0.4)]"
                >
                  Preguntar por WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
