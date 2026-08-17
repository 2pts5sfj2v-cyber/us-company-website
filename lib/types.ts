import type { LucideIcon } from "lucide-react";

export type CategorySlug =
  | "market-entry"
  | "store-operations"
  | "performance-marketing"
  | "supply-chain"
  | "brand-creative"
  | "risk-legal";

export type Tier = "Essential" | "Growth" | "Enterprise";

export interface ServiceCategory {
  slug: CategorySlug;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  accentText: string;
  accentSoft: string;
  accentBorder: string;
  framework: { title: string; description: string }[];
  modules: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export interface Service {
  id: string;
  slug: string;
  category: CategorySlug;
  name: string;
  price: number;
  tier: Tier;
  duration: string;
  timeline: string;
  description: string;
  deliverables: string[];
  tags: string[];
  popular?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  background: string;
  initials: string;
  expertise: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  role: string;
  metric: string;
}

export interface TrustMetric {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: LucideIcon;
}
