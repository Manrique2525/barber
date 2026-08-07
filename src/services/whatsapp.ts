import { site } from "@/config/site";
import type { BookingInput } from "@/schemas/booking";

const SERVICE_NAMES: Record<string, string> = {
  fade: "Fade",
  "low-fade": "Low Fade",
  "mid-fade": "Mid Fade",
  "high-fade": "High Fade",
  "corte-clasico": "Corte Clásico",
  "corte-ejecutivo": "Corte Ejecutivo",
  barba: "Barba",
  afeitado: "Afeitado Tradicional",
  perfilado: "Perfilado",
  lavado: "Lavado",
  mascarilla: "Mascarilla",
  "paquete-premium": "Paquete Premium",
};

export function buildBookingMessage(data: BookingInput): string {
  const service = SERVICE_NAMES[data.service] ?? data.service;
  const lines = [
    `Hola ${site.name} 👋`,
    "Quiero reservar una cita:",
    `• Nombre: ${data.name}`,
    `• Teléfono: ${data.phone}`,
    `• Servicio: ${service}`,
    `• Fecha: ${data.date}`,
    `• Horario: ${data.time}`,
  ];
  if (data.notes?.trim()) {
    lines.push(`• Notas: ${data.notes.trim()}`);
  }
  return lines.join("\n");
}

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function telUrl(): string {
  return `tel:${site.phone.tel}`;
}

export function mailUrl(subject?: string): string {
  const base = `mailto:${site.email}`;
  if (!subject) return base;
  return `${base}?subject=${encodeURIComponent(subject)}`;
}
