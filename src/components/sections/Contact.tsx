"use client";

import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/config/site";
import { SectionHeader } from "@/components/common/SectionHeader";
import { SocialIcon } from "@/components/common/SocialIcon";
import { Reveal } from "@/components/animations/Reveal";
import { BookingForm } from "@/components/sections/BookingForm";
import { whatsappUrl, telUrl, mailUrl } from "@/services/whatsapp";

const contactItems = [
  {
    icon: MapPin,
    label: "Dirección",
    value: `${site.address.street}, ${site.address.area}`,
    href: site.mapsUrl,
    action: "Ver en Google Maps",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.phone.display,
    href: whatsappUrl(),
    action: "Escribir ahora",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: site.phone.display,
    href: telUrl(),
    action: "Llamar",
  },
  {
    icon: Mail,
    label: "Correo",
    value: site.email,
    href: mailUrl(),
    action: "Enviar correo",
  },
];

export function Contact() {
  return (
    <section id="contacto" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Contacto"
          title="Reserva tu cita"
          description="Elige el servicio y envíanos tus datos. Confirmamos tu horario por WhatsApp al instante."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-10">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group border-border bg-card hover:border-gold/40 rounded-2xl border p-5 transition-all duration-400 hover:-translate-y-0.5"
                >
                  <item.icon className="text-gold mb-4 h-5 w-5" aria-hidden="true" />
                  <p className="text-muted-foreground text-xs tracking-[0.16em] uppercase">
                    {item.label}
                  </p>
                  <p className="text-foreground mt-1 text-sm font-medium">{item.value}</p>
                  <p className="text-gold mt-2 inline-flex items-center gap-1 text-xs">
                    {item.action}
                  </p>
                </a>
              ))}
            </div>

            <div className="border-border bg-card rounded-2xl border p-6">
              <div className="mb-4 flex items-center gap-3">
                <Clock className="text-gold h-5 w-5" aria-hidden="true" />
                <h3 className="font-display text-foreground text-lg">Horario de atención</h3>
              </div>
              <dl className="space-y-3">
                {site.schedule.map((entry) => (
                  <div key={entry.days} className="flex items-center justify-between text-sm">
                    <dt className="text-muted-foreground">{entry.days}</dt>
                    <dd className="text-foreground font-medium">{entry.hours}</dd>
                  </div>
                ))}
              </dl>
              <div className="border-border/60 mt-5 flex gap-3 border-t pt-5">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de la barbería"
                  className="border-border text-muted-foreground hover:border-gold/50 hover:text-gold inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
                >
                  <SocialIcon name="instagram" className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de la barbería"
                  className="border-border text-muted-foreground hover:border-gold/50 hover:text-gold inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
                >
                  <SocialIcon name="facebook" className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="border-border bg-card overflow-hidden rounded-2xl border">
              <iframe
                src={site.mapsEmbed}
                title={`Mapa de ${site.name} en ${site.address.area}`}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:pl-2">
            <div className="border-border bg-card/60 rounded-3xl border p-6 backdrop-blur-sm sm:p-8">
              <div className="mb-7">
                <p className="text-gold text-xs tracking-[0.2em] uppercase">
                  Formulario de reserva
                </p>
                <h3 className="font-display text-foreground mt-2 text-2xl">
                  Comienza tu cita en 2 minutos
                </h3>
              </div>
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
