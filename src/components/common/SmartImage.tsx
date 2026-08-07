"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SmartImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  hoverZoom?: boolean;
}

export function SmartImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className,
  imgClassName,
  priority = false,
  sizes,
  hoverZoom = false,
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("bg-ink relative overflow-hidden", hoverZoom && "group", className)}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          onLoad={() => setLoaded(true)}
          className={cn(
            "object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            loaded ? "blur-0 opacity-100" : "opacity-0 blur-md",
            hoverZoom &&
              "duration-[1100ms] group-hover:scale-[1.06] motion-safe:group-hover:scale-[1.06]",
            imgClassName
          )}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width ?? 1200}
          height={height ?? 800}
          priority={priority}
          sizes={sizes}
          onLoad={() => setLoaded(true)}
          className={cn(
            "h-auto w-full object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            loaded ? "blur-0 opacity-100" : "opacity-0 blur-md",
            hoverZoom && "group-hover:scale-[1.06]",
            imgClassName
          )}
        />
      )}
    </div>
  );
}
