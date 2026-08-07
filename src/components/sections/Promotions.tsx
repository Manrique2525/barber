"use client";

import { Check, Crown, ArrowUpRight } from "lucide-react";
import { promotions } from "@/constants/content";
import { SectionHeader } from "@/components/common/SectionHeader";
import { StaggerGroup } from "@/components/animations/Reveal";
import { Badge } from "@/components/ui/badge";
import { whatsappUrl } from "@/services/whatsapp";
import { formatPrice } from "@/utils/format";
import { cn } from "@/lib/utils";

export function Promotions() {
  return (
    <section id="promociones" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Promociones"
          title="Precios que valoran tu visita"
          description="Ofertas por tiempo limitado y un programa de lealtad que recompensa a nuestros clientes frecuentes."
        />

        <StaggerGroup className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {promotions.map((promo) => (
            <article
              key={promo.name}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-1.5",
                promo.highlighted
                  ? "border-gold/50 from-gold/12 via-card to-card bg-gradient-to-b shadow-[0_20px_60px_rgba(200,161,92,0.15)]"
                  : "border-border bg-card hover:border-gold/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              )}
            >
              {promo.highlighted ? (
                <div className="absolute top-6 right-6" aria-hidden="true">
                  <Crown className="text-gold h-5 w-5" />
                </div>
              ) : null}

              <Badge className="w-fit">{promo.badge}</Badge>

              <h3 className="font-display text-foreground mt-6 text-2xl">{promo.name}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {promo.description}
              </p>

              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-display text-gold text-4xl">{formatPrice(promo.price)}</span>
                {promo.originalPrice ? (
                  <span className="text-muted-foreground text-sm line-through">
                    {formatPrice(promo.originalPrice)}
                  </span>
                ) : null}
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {promo.includes.map((item) => (
                  <li key={item} className="text-foreground/85 flex items-start gap-3 text-sm">
                    <Check className="text-gold mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappUrl(
                  `Hola, me interesa la promoción "${promo.name}" de ${formatPrice(promo.price)}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300",
                  promo.highlighted
                    ? "bg-gold hover:bg-gold-light text-[#0a0a0a] shadow-[0_8px_30px_rgba(200,161,92,0.35)] hover:shadow-[0_8px_36px_rgba(200,161,92,0.5)]"
                    : "border-border text-foreground hover:border-gold/60 hover:text-gold border"
                )}
              >
                Aprovechar oferta
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
