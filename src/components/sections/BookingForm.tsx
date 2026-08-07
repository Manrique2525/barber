"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, CalendarCheck } from "lucide-react";
import { bookingSchema, type BookingInput } from "@/schemas/booking";
import { services } from "@/constants/services";
import { useBookingStore } from "@/stores/booking";
import { buildBookingMessage, whatsappUrl } from "@/services/whatsapp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const TIME_SLOTS = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
];

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="text-destructive mt-1.5 text-xs">
      {message}
    </p>
  );
}

export function BookingForm() {
  const selectedService = useBookingStore((state) => state.selectedService);
  const [today, setToday] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setToday(new Date().toISOString().split("T")[0]);
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "default",
      date: "",
      time: "",
      notes: "",
    },
  });

  useEffect(() => {
    if (selectedService !== "default") {
      setValue("service", selectedService);
    }
  }, [selectedService, setValue]);

  const onSubmit = (data: BookingInput) => {
    setSubmitting(true);
    const message = buildBookingMessage(data);
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    window.setTimeout(() => setSubmitting(false), 1200);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5"
      aria-label="Formulario de reserva"
    >
      <div>
        <Label htmlFor="booking-name">Nombre completo</Label>
        <Input
          id="booking-name"
          placeholder="Ej. Carlos Mendoza"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "booking-name-error" : undefined}
          {...register("name")}
        />
        <FieldError id="booking-name-error" message={errors.name?.message} />
      </div>

      <div>
        <Label htmlFor="booking-phone">WhatsApp / Teléfono</Label>
        <Input
          id="booking-phone"
          type="tel"
          placeholder="Ej. 55 1234 5678"
          autoComplete="tel"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "booking-phone-error" : undefined}
          {...register("phone")}
        />
        <FieldError id="booking-phone-error" message={errors.phone?.message} />
      </div>

      <div>
        <Label htmlFor="booking-service">Servicio</Label>
        <div className="relative">
          <select
            id="booking-service"
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "booking-service-error" : undefined}
            className={cn(
              "border-input bg-card/60 text-foreground focus-visible:border-gold/60 focus-visible:ring-gold/25 h-12 w-full appearance-none rounded-lg border px-4 text-sm transition-all duration-300 focus-visible:ring-2 focus-visible:outline-none"
            )}
            {...register("service")}
          >
            <option value="default" disabled>
              Selecciona un servicio
            </option>
            {services.map((service) => (
              <option key={service.id} value={service.id} className="bg-card text-foreground">
                {service.name} — ${service.price}
              </option>
            ))}
          </select>
          <ChevronDown
            className="text-muted-foreground pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2"
            aria-hidden="true"
          />
        </div>
        <FieldError id="booking-service-error" message={errors.service?.message} />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="booking-date">Fecha</Label>
          <Input
            id="booking-date"
            type="date"
            min={today ?? undefined}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? "booking-date-error" : undefined}
            {...register("date")}
          />
          <FieldError id="booking-date-error" message={errors.date?.message} />
        </div>

        <div>
          <Label htmlFor="booking-time">Horario</Label>
          <div className="relative">
            <select
              id="booking-time"
              aria-invalid={Boolean(errors.time)}
              aria-describedby={errors.time ? "booking-time-error" : undefined}
              className="border-input bg-card/60 text-foreground focus-visible:border-gold/60 focus-visible:ring-gold/25 h-12 w-full appearance-none rounded-lg border px-4 text-sm transition-all duration-300 focus-visible:ring-2 focus-visible:outline-none"
              {...register("time")}
            >
              <option value="" disabled>
                Selecciona un horario
              </option>
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot} className="bg-card text-foreground">
                  {slot}
                </option>
              ))}
            </select>
            <ChevronDown
              className="text-muted-foreground pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2"
              aria-hidden="true"
            />
          </div>
          <FieldError id="booking-time-error" message={errors.time?.message} />
        </div>
      </div>

      <div>
        <Label htmlFor="booking-notes">Notas (opcional)</Label>
        <Textarea
          id="booking-notes"
          placeholder="Referencia de corte, barbero de preferencia, alergias…"
          aria-invalid={Boolean(errors.notes)}
          aria-describedby={errors.notes ? "booking-notes-error" : undefined}
          {...register("notes")}
        />
        <FieldError id="booking-notes-error" message={errors.notes?.message} />
      </div>

      <Button type="submit" size="lg" disabled={submitting} className="w-full">
        <CalendarCheck className="h-4 w-4" aria-hidden="true" />
        {submitting ? "Abriendo WhatsApp…" : "Reservar mi cita"}
      </Button>

      <p className="text-muted-foreground text-center text-xs leading-relaxed">
        Al enviar, se abrirá WhatsApp con tu reserva prellenada para confirmarla. Sin cargos ni
        compromiso.
      </p>
    </form>
  );
}
