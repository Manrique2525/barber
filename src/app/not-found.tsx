import Link from "next/link";
import { site } from "@/config/site";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-gold text-7xl">404</p>
      <h1 className="font-display text-foreground mt-4 text-2xl">Página no encontrada</h1>
      <p className="text-muted-foreground mt-3 max-w-md text-sm leading-relaxed">
        La página que buscas no existe o fue movida. Vuelve al inicio y agenda tu cita en{" "}
        {site.name}.
      </p>
      <Link href="/" className="mt-8">
        <Button>Volver al inicio</Button>
      </Link>
    </div>
  );
}
