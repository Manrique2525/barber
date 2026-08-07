"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/services/whatsapp";
import { Floating } from "@/components/animations/Floating";

export function WhatsAppFloat() {
  return (
    <Floating amplitude={6} duration={5} className="fixed right-6 bottom-6 z-50">
      <a
        href={whatsappUrl("Hola, quiero reservar una cita en Barber & Co.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp para reservar una cita"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:outline-none"
      >
        <span
          className="animate-pulse-glow absolute inset-0 rounded-full bg-[#25D366]/40"
          aria-hidden="true"
        />
        <MessageCircle className="relative h-6 w-6" aria-hidden="true" />
        <span className="border-border bg-card text-foreground pointer-events-none absolute right-full mr-3 rounded-lg border px-3 py-1.5 text-xs font-medium whitespace-nowrap opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100 max-sm:hidden">
          Reserva por WhatsApp
        </span>
      </a>
    </Floating>
  );
}
