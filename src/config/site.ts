/**
 * Configuración central del negocio.
 * NAP consistente: Nombre, Dirección y Teléfono.
 * Todo el contenido de la landing se deriva de aquí.
 */

export const site = {
  name: "Barber & Co.",
  legalName: "Barber & Co. Barbería Premium",
  tagline: "Barbería Premium",
  description:
    "Barbería premium en Ciudad de México. Cortes de cabello modernos, fades, barba y afeitado tradicional con barberos profesionales. Agenda tu cita.",
  url: "https://barber-co.example.com",
  city: "Ciudad de México",
  region: "CDMX",
  country: "México",
  countryCode: "MX",
  address: {
    street: "Av. Presidente Masaryk 221",
    area: "Polanco, Miguel Hidalgo",
    zip: "11560",
    city: "Ciudad de México",
  },
  phone: {
    display: "+52 55 0000 0000",
    international: "5215500000000",
    tel: "+525500000000",
  },
  whatsapp: "5215500000000",
  email: "hola@barber-co.mx",
  mapsUrl: "https://maps.google.com/?q=Av.+Masaryk+221+Polanco+CDMX",
  mapsEmbed:
    "https://maps.google.com/maps?q=Av.%20Presidente%20Masaryk%20221%2C%20Polanco%2C%20Ciudad%20de%20M%C3%A9xico&t=&z=15&ie=UTF8&iwloc=&output=embed",
  rating: {
    value: "4.9",
    count: 1200,
  },
  yearsExperience: 10,
  clientsServed: 5000,
  haircutsDone: 20000,
  schedule: [
    { days: "Lun — Sáb", hours: "10:00 — 20:00" },
    { days: "Domingo", hours: "11:00 — 17:00" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "11:00",
      closes: "17:00",
    },
  ],
  social: {
    instagram: "https://instagram.com/barberco.mx",
    facebook: "https://facebook.com/barberco.mx",
    tiktok: "https://tiktok.com/@barberco.mx",
  },
  geo: {
    latitude: 19.4287,
    longitude: -99.1898,
  },
} as const;

export const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Equipo", href: "#equipo" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Contacto", href: "#contacto" },
] as const;
