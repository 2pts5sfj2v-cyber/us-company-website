"use client";

import { useState } from "react";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";

const tabs = ["Popular", "Essential", "Growth", "Enterprise"] as const;
type Tab = (typeof tabs)[number];

export default function FeaturedServices() {
  const [active, setActive] = useState<Tab>("Popular");

  const filtered =
    active === "Popular"
      ? services.filter((s) => s.popular)
      : services.filter((s) => s.tier === active);

  return (
    <section className="container-x py-20 lg:py-28">
      <SectionHeading
        align="center"
        eyebrow="Fixed-price packages"
        title="Featured Fixed-Price Services"
        subtitle="Transparent pricing with clear deliverables and timelines. Select a tier to explore popular packages."
      />

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setActive(t)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition",
              active === t
                ? "border-blue-500 bg-blue-500/15 text-blue-300"
                : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <ServiceCard key={s.id} service={s} compact />
        ))}
      </div>
    </section>
  );
}
