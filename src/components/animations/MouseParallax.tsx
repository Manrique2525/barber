"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

export interface ParallaxLayer {
  depth: number;
  className?: string;
  children: React.ReactNode;
}

interface MouseParallaxProps {
  layers: ParallaxLayer[];
  className?: string;
  maxDistance?: number;
}

interface LayerProps {
  layer: ParallaxLayer;
  x: MotionValue<number>;
  y: MotionValue<number>;
  active: boolean;
}

function Layer({ layer, x, y, active }: LayerProps) {
  const translateX = useTransform(x, (value) => (active ? value * layer.depth : 0));
  const translateY = useTransform(y, (value) => (active ? value * layer.depth : 0));

  return (
    <motion.div
      className={cn("absolute inset-0", layer.className)}
      style={{ x: translateX, y: translateY }}
    >
      {layer.children}
    </motion.div>
  );
}

export function MouseParallax({ layers, className, maxDistance = 14 }: MouseParallaxProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 120, damping: 20, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 120, damping: 20, mass: 0.6 });

  const handleMove = (event: React.MouseEvent) => {
    if (reduced) return;
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const normX = (event.clientX - rect.left) / rect.width - 0.5;
    const normY = (event.clientY - rect.top) / rect.height - 0.5;
    rawX.set(normX * maxDistance);
    rawY.set(normY * maxDistance);
  };

  const handleLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {layers.map((layer, index) => (
        <Layer key={index} layer={layer} x={x} y={y} active={!reduced} />
      ))}
    </div>
  );
}
