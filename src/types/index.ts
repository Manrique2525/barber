import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  image: string;
  alt: string;
  featured?: boolean;
  badge?: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  span?: "tall" | "wide";
}

export interface WorkItem {
  src: string;
  alt: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  image: string;
  alt: string;
  specialty: string;
  social: { instagram: string };
}

export interface Testimonial {
  name: string;
  initials: string;
  text: string;
  service: string;
  rating: number;
  avatar?: string;
  date: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Promotion {
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  includes: string[];
  highlighted?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
}
