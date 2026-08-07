import type { FaqItem, ProcessStep, Promotion, Stat, TeamMember, Testimonial } from "@/types";
import { CalendarCheck, Scissors, Coffee, MessagesSquare, Sparkles } from "lucide-react";

export const team: TeamMember[] = [
  {
    name: "Jorge Valdés",
    role: "Master Barber / Fundador",
    experience: "12 años",
    specialty: "Fades y cortes clásicos",
    image: "/images/team/team-1.jpg",
    alt: "Master barber Jorge Valdés en la ventana de la barbería",
    social: { instagram: "https://instagram.com/barberco.mx" },
  },
  {
    name: "Luis Herrera",
    role: "Barbero Especialista",
    experience: "8 años",
    specialty: "Barba y afeitado tradicional",
    image: "/images/team/team-2.jpg",
    alt: "Barbero Luis Herrera con camisa en la barbería",
    social: { instagram: "https://instagram.com/barberco.mx" },
  },
  {
    name: "Diego Ríos",
    role: "Barbero Stylist",
    experience: "6 años",
    specialty: "Cortes modernos y texturizados",
    image: "/images/team/team-3.jpg",
    alt: "Barbero Diego Ríos sonriendo frente a cámara",
    social: { instagram: "https://instagram.com/barberco.mx" },
  },
  {
    name: "Marco Ávila",
    role: "Barbero Clásico",
    experience: "10 años",
    specialty: "Navaja y perfilado",
    image: "/images/team/team-4.jpg",
    alt: "Barbero Marco Ávila en retrato en blanco y negro",
    social: { instagram: "https://instagram.com/barberco.mx" },
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Carlos Mendoza",
    initials: "CM",
    text: "El mejor fade que me han hecho en la ciudad. Llegué con una referencia y salí con un trabajo de precisión. Ambiente de primera.",
    service: "High Fade",
    rating: 5,
    avatar: "/images/avatars/avatar-1.jpg",
    date: "hace 2 semanas",
  },
  {
    name: "Andrés Salgado",
    initials: "AS",
    text: "El afeitado tradicional con toalla caliente es otra experiencia. Cierras los ojos y vuelves a 1950. Volveré cada mes.",
    service: "Afeitado Tradicional",
    rating: 5,
    avatar: "/images/avatars/avatar-2.jpg",
    date: "hace 3 semanas",
  },
  {
    name: "Iván Torres",
    initials: "IT",
    text: "Reservé por WhatsApp en 2 minutos. El paquete premium vale cada peso: corte, barba, lavado y un café mientras esperas.",
    service: "Paquete Premium",
    rating: 5,
    avatar: "/images/avatars/avatar-3.jpg",
    date: "hace 1 mes",
  },
  {
    name: "Ricardo Pineda",
    initials: "RP",
    text: "Profesionalismo de otro nivel. Puntual, limpio y con un ojo impresionante para los detalles. Mi barbería de cabecera.",
    service: "Corte Clásico",
    rating: 5,
    date: "hace 1 mes",
  },
  {
    name: "Emilio Castañeda",
    initials: "EC",
    text: "Traje a mi hijo por su quinceañero y quedó increíble. El trato al cliente es de las mejores experiencias que he vivido.",
    service: "Corte Ejecutivo",
    rating: 5,
    date: "hace 2 meses",
  },
  {
    name: "Sebastián Lima",
    initials: "SL",
    text: "El perfilado con navaja es un arte. Detalles que en otros lugares ignoran, aquí los cuidan al milímetro.",
    service: "Perfilado",
    rating: 4.9,
    date: "hace 2 meses",
  },
];

export const stats: Stat[] = [
  { value: 4.9, decimals: 1, label: "Calificación promedio" },
  { value: 5000, label: "Clientes atendidos" },
  { value: 10, suffix: "+", label: "Años de experiencia" },
  { value: 20000, suffix: "+", label: "Cortes realizados" },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Reserva",
    description: "Agenda tu cita en menos de 2 minutos por WhatsApp, calendario o formulario.",
    icon: CalendarCheck,
  },
  {
    step: "02",
    title: "Llegada",
    description: "Te recibimos con una bebida mientras te relajas en nuestra sala.",
    icon: Coffee,
  },
  {
    step: "03",
    title: "Asesoría",
    description: "Analizamos tu rostro, tipo de cabello y estilo para definir el look ideal.",
    icon: MessagesSquare,
  },
  {
    step: "04",
    title: "Corte",
    description: "Tu barbero trabaja con precisión y técnica hasta el último detalle.",
    icon: Scissors,
  },
  {
    step: "05",
    title: "Resultado",
    description: "Sal con estilo renovado y con el retoque final que marca la diferencia.",
    icon: Sparkles,
  },
];

export const promotions: Promotion[] = [
  {
    name: "Primera Visita",
    description: "Ritual de bienvenida para quien visita la barbería por primera vez.",
    price: 199,
    originalPrice: 280,
    badge: "-30%",
    includes: ["Corte clásico o fade", "Perfilado con navaja", "Asesoría de estilo"],
  },
  {
    name: "Corte + Barba",
    description: "El combo favorito. Corta el cabello y armoniza tu barba en una sola sesión.",
    price: 450,
    originalPrice: 520,
    badge: "Más vendido",
    highlighted: true,
    includes: ["Corte a elección", "Barba completa", "Lavado de cabello", "Estilizado final"],
  },
  {
    name: "Cliente Frecuente",
    description: "Programa de lealtad: cortes ilimitados y beneficios exclusivos cada mes.",
    price: 999,
    originalPrice: 1240,
    badge: "Suscripción",
    includes: ["2 cortes al mes", "10% en productos", "Prioridad de agenda"],
  },
];

export const faqs: FaqItem[] = [
  {
    question: "¿Cómo reservo una cita?",
    answer:
      "Puedes reservar en menos de 2 minutos por nuestro formulario, por WhatsApp al +52 55 0000 0000 o directamente en la barbería. Te confirmamos el horario al instante.",
  },
  {
    question: "¿Aceptan pagos con tarjeta?",
    answer:
      "Sí. Aceptamos efectivo, tarjetas de crédito y débito, así como transferencias. El pago se realiza al finalizar tu servicio.",
  },
  {
    question: "¿Cuánto dura una cita?",
    answer:
      "Un corte clásico toma entre 30 y 40 minutos. Los fades y el paquete premium requieren de 50 a 90 minutos para asegurar un resultado impecable.",
  },
  {
    question: "¿Puedo llegar sin cita?",
    answer:
      "Aceptamos walk-ins sujetos a disponibilidad, pero recomendamos reservar para garantizar tu horario y evitar esperas, especialmente en fines de semana.",
  },
  {
    question: "¿Qué pasa si llego tarde?",
    answer:
      "Si llegas con más de 10 minutos de retraso, reprogramaremos tu cita según la disponibilidad del día para no retrasar a los demás clientes.",
  },
  {
    question: "¿Manejan productos para el cuidado del cabello?",
    answer:
      "Sí. Contamos con una línea de productos premium de pomadas, cera, aceites para barba y shampoo que puedes adquirir en la barbería o al finalizar tu servicio.",
  },
];
