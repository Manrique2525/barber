import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre completo").max(60, "El nombre es demasiado largo"),
  phone: z
    .string()
    .min(10, "Ingresa un teléfono válido")
    .max(15, "Teléfono demasiado largo")
    .regex(/^[+\d\s-]+$/, "Solo se permiten números"),
  service: z
    .string()
    .min(1, "Selecciona un servicio")
    .refine((v) => v !== "default", "Selecciona un servicio"),
  date: z.string().min(1, "Selecciona una fecha"),
  time: z.string().min(1, "Selecciona un horario"),
  notes: z.string().max(300, "Máximo 300 caracteres").optional().or(z.literal("")),
});

export type BookingInput = z.infer<typeof bookingSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre").max(60, "El nombre es demasiado largo"),
  email: z.string().email("Ingresa un correo válido"),
  message: z.string().min(10, "Cuéntanos un poco más").max(1000, "Mensaje demasiado largo"),
});

export type ContactInput = z.infer<typeof contactSchema>;
