"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function PageTransition({ children, className }: PageTransitionProps) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
