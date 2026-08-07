import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { site } from "@/config/site";
import { AnimationProvider } from "@/components/animations/AnimationProvider";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/common/WhatsAppFloat";
import { SkipLink } from "@/components/common/SkipLink";
import { buildMetadata, barbershopJsonLd, organizationJsonLd, breadcrumbJsonLd } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = buildMetadata();

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    barbershopJsonLd(),
    organizationJsonLd(),
    breadcrumbJsonLd(),
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "es-MX",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} bg-background text-foreground font-sans antialiased`}
      >
        <MotionConfig reducedMotion="user">
          <AnimationProvider>
            <SkipLink />
            <Navbar />
            <main id="contenido">{children}</main>
            <Footer />
            <WhatsAppFloat />
          </AnimationProvider>
        </MotionConfig>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
