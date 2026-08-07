"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  const imageClasses = cn(
    "object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
    loaded ? "blur-0 opacity-100" : "opacity-0 blur-md",
    hoverZoom && "group-hover:scale-[1.06]",
    imgClassName
  );

  return (
    <div className={cn("bg-ink relative overflow-hidden", hoverZoom && "group", className)}>
      {fill ? (
        <Image
          ref={imgRef}
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          onLoad={() => setLoaded(true)}
          className={imageClasses}
        />
      ) : (
        <Image
          ref={imgRef}
          src={src}
          alt={alt}
          width={width ?? 1200}
          height={height ?? 800}
          priority={priority}
          sizes={sizes}
          onLoad={() => setLoaded(true)}
          className={cn("h-auto w-full", imageClasses)}
        />
      )}
    </div>
  );
}
