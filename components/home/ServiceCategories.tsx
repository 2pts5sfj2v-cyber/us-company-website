import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories, getServicesByCategory } from "@/lib/data";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServiceCategories() {
  return (
    <section className="container-x py-20 lg:py-28">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="What we do"
          title="Six Core Practice Areas"
          subtitle="Battle-tested expertise across the entire cross-border value chain — from market entry to exit."
        />
        <Link
          href="/services"
          className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
        >
          View all services
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => {
          const Icon = c.icon;
          const count = getServicesByCategory(c.slug).length;
          return (
            <Link
              key={c.slug}
              href={`/services/${c.slug}`}
              className="card group p-6 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-slate-900/80"
            >
              <span
                className={cn(
                  "grid h-12 w-12 place-items-center rounded-xl",
                  c.accentSoft
                )}
              >
                <Icon className="h-6 w-6" style={{ color: c.accent }} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-white">
                {c.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {c.tagline}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-xs font-semibold text-slate-400">
                  {count} fixed-price services
                </span>
                <ArrowRight
                  className="h-4 w-4 transition group-hover:translate-x-0.5"
                  style={{ color: c.accent }}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
