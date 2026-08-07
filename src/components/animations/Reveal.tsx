"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export type RevealVariant = "fade" | "slide-up" | "scale" | "blur";

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  as?: React.ElementType;
  once?: boolean;
}

export function Reveal({
  children,
  variant = "slide-up",
  delay = 0,
  duration = 1,
  distance = 36,
  className,
  as: Tag = "div",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    const from: gsap.TweenVars = { opacity: 0 };
    if (variant === "slide-up" || variant === "blur") from.y = distance;
    if (variant === "scale") from.scale = 0.94;
    if (variant === "fade") from.filter = "blur(6px)";
    if (variant === "blur") from.filter = "blur(14px)";

    const tween = gsap.fromTo(el, from, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 86%",
        once,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [variant, delay, duration, distance, once, reduced]);

  return (
    <Tag ref={ref as React.Ref<never>} className={cn("will-change-transform", className)}>
      {children}
    </Tag>
  );
}

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  duration?: number;
  variant?: RevealVariant;
  distance?: number;
  as?: React.ElementType;
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.12,
  delay = 0,
  duration = 1,
  variant = "slide-up",
  distance = 36,
  as: Tag = "div",
}: StaggerGroupProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    const items = gsap.utils.toArray<HTMLElement>(el.children);

    const from: gsap.TweenVars = { opacity: 0 };
    if (variant === "slide-up" || variant === "blur") from.y = distance;
    if (variant === "scale") from.scale = 0.95;
    if (variant === "fade") from.filter = "blur(6px)";
    if (variant === "blur") from.filter = "blur(12px)";

    const tween = gsap.fromTo(items, from, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration,
      delay,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [variant, stagger, delay, duration, distance, reduced]);

  return (
    <Tag ref={ref as React.Ref<never>} className={className}>
      {children}
    </Tag>
  );
}
