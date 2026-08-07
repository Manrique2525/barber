import type { Metadata } from "next";
import { site } from "@/config/site";

export function buildMetadata({
  title,
  description = site.description,
  path = "/",
  image = "/images/hero/hero.jpg",
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
} = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${site.name}`
    : `${site.name} — Barbería Premium en ${site.city}`;
  const url = `${site.url}${path}`;

  return {
    metadataBase: new URL(site.url),
    title: fullTitle,
    description,
    alternates: { canonical: url },
    keywords: [
      `barbería en ${site.city}`,
      "barber shop méxico",
      "barbería cerca de mí",
      "corte fade",
      "barbero profesional",
      "barbería premium",
      "fade haircut",
      "corte de cabello hombre",
      "afeitado tradicional",
    ],
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      locale: "es_MX",
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function barbershopJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Barbershop",
    "@id": `${site.url}/#barbershop`,
    name: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phone.display,
    email: site.email,
    image: `${site.url}/images/hero/hero.jpg`,
    priceRange: "$$",
    currenciesAccepted: "MXN",
    paymentAccepted: "Efectivo, Tarjeta de crédito, Tarjeta de débito, Transferencia",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.area,
      postalCode: site.address.zip,
      addressRegion: site.region,
      addressCountry: site.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: site.openingHoursSpecification,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      bestRating: "5",
      reviewCount: String(site.rating.count),
    },
    sameAs: [site.social.instagram, site.social.facebook, site.social.tiktok],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de barbería",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fade" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corte Clásico" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corte Ejecutivo" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Barba" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Afeitado Tradicional" } },
      ],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/images/hero/hero.jpg`,
    sameAs: [site.social.instagram, site.social.facebook, site.social.tiktok],
  };
}

export function breadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Servicios",
        item: `${site.url}/#servicios`,
      },
    ],
  };
}
