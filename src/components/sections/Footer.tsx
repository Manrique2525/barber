import { MapPin, MessageCircle, Phone, Mail } from "lucide-react";
import { nav, site } from "@/config/site";
import { Logo } from "@/components/common/Logo";
import { SocialIcon } from "@/components/common/SocialIcon";
import { services } from "@/constants/services";
import { whatsappUrl, telUrl, mailUrl } from "@/services/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/60 bg-card/30 relative border-t">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="text-muted-foreground mt-5 max-w-xs text-sm leading-relaxed">
              {site.description}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="border-border text-muted-foreground hover:border-gold/50 hover:text-gold inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
              >
                <SocialIcon name="instagram" className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="border-border text-muted-foreground hover:border-gold/50 hover:text-gold inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
              >
                <SocialIcon name="facebook" className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Mapa del sitio">
            <h3 className="text-foreground text-xs font-medium tracking-[0.18em] uppercase">
              Navegación
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-gold text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Servicios">
            <h3 className="text-foreground text-xs font-medium tracking-[0.18em] uppercase">
              Servicios
            </h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href="#servicios"
                    className="text-muted-foreground hover:text-gold text-sm transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-foreground text-xs font-medium tracking-[0.18em] uppercase">
              Contacto
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold flex items-start gap-3 transition-colors"
                >
                  <MapPin className="text-gold mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    {site.address.street}
                    <br />
                    {site.address.area}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold flex items-center gap-3 transition-colors"
                >
                  <MessageCircle className="text-gold h-4 w-4 shrink-0" aria-hidden="true" />
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={telUrl()}
                  className="text-muted-foreground hover:text-gold flex items-center gap-3 transition-colors"
                >
                  <Phone className="text-gold h-4 w-4 shrink-0" aria-hidden="true" />
                  Llamar a la barbería
                </a>
              </li>
              <li>
                <a
                  href={mailUrl()}
                  className="text-muted-foreground hover:text-gold flex items-center gap-3 transition-colors"
                >
                  <Mail className="text-gold h-4 w-4 shrink-0" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
            </ul>

            <div className="border-border/60 mt-5 space-y-2 border-t pt-5 text-sm">
              {site.schedule.map((entry) => (
                <div key={entry.days} className="text-muted-foreground flex justify-between">
                  <span>{entry.days}</span>
                  <span className="text-foreground">{entry.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-border/60 text-muted-foreground mt-14 flex flex-col gap-4 border-t pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#contacto" className="hover:text-gold transition-colors">
              Aviso de privacidad
            </a>
            <a href="#contacto" className="hover:text-gold transition-colors">
              Términos y condiciones
            </a>
            <a href="#contacto" className="hover:text-gold transition-colors">
              Políticas de reserva
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
