"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import type { GalleryItem } from "@/types";
import { gallery } from "@/constants/gallery";
import { SectionHeader } from "@/components/common/SectionHeader";
import { StaggerGroup } from "@/components/animations/Reveal";

interface LightboxProps {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const current = index;

  useEffect(() => {
    if (current === null) return;

    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight" && current !== null) onNavigate((current + 1) % items.length);
      if (event.key === "ArrowLeft" && current !== null)
        onNavigate((current - 1 + items.length) % items.length);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [current, items.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {current !== null ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-background/95 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xl sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ${current + 1} de ${items.length}`}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar galería"
            className="border-border bg-card/60 text-foreground hover:border-gold/50 hover:text-gold absolute top-5 right-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur transition-colors"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex max-h-full w-full max-w-5xl flex-col items-center">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="border-border bg-ink relative w-full overflow-hidden rounded-2xl border"
            >
              <Image
                src={items[current].src}
                alt={items[current].alt}
                width={1600}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="max-h-[70vh] w-full object-contain"
              />
            </motion.div>

            <div className="mt-5 flex w-full items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => onNavigate((current - 1 + items.length) % items.length)}
                aria-label="Imagen anterior"
                className="border-border text-foreground hover:border-gold/50 hover:text-gold inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="text-center">
                <p className="text-foreground text-sm">{items[current].caption}</p>
                <p className="text-muted-foreground mt-1 text-xs tracking-[0.2em] uppercase">
                  {current + 1} / {items.length}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onNavigate((current + 1) % items.length)}
                aria-label="Imagen siguiente"
                className="border-border text-foreground hover:border-gold/50 hover:text-gold inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

interface GalleryTileProps {
  item: GalleryItem;
  onOpen: () => void;
}

export function GalleryTile({ item, onOpen }: GalleryTileProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Ver ${item.caption} ampliado`}
      className="group border-border focus-visible:ring-gold relative block w-full overflow-hidden rounded-2xl border text-left focus-visible:ring-2 focus-visible:outline-none"
    >
      <Image
        src={item.src}
        alt={item.alt}
        width={800}
        height={600}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="aspect-[4/5] w-full object-cover transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
      />
      <div
        className="from-background/95 via-background/20 absolute inset-0 bg-gradient-to-t to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
        <p className="font-display text-foreground translate-y-1 text-lg transition-transform duration-500 group-hover:translate-y-0">
          {item.caption}
        </p>
        <span className="border-gold/40 bg-gold/10 text-gold inline-flex h-9 w-9 items-center justify-center rounded-full border opacity-0 transition-all duration-500 group-hover:opacity-100">
          <ZoomIn className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </button>
  );
}

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="galeria" className="bg-card/20 relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Galería"
          title="Un espacio diseñado para el detalle"
          description="Interiores que combinan la barbería clásica con un confort moderno. Así se vive la experiencia."
        />

        <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <GalleryTile key={item.src} item={item} onOpen={() => setLightboxIndex(index)} />
          ))}
        </StaggerGroup>
      </div>

      <Lightbox
        items={gallery}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
