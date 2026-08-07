import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/common/Marquee";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { Work } from "@/components/sections/Work";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { Promotions } from "@/components/sections/Promotions";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { Contact } from "@/components/sections/Contact";

const marqueeItems = [
  "Cortes modernos",
  "Fades",
  "Barba y navaja",
  "Afeitado tradicional",
  "Productos premium",
  "Cita previa",
];

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={marqueeItems} />
      <Stats />
      <Services />
      <Gallery />
      <Work />
      <Team />
      <Testimonials />
      <Process />
      <Promotions />
      <Faq />
      <Cta />
      <Contact />
    </>
  );
}
