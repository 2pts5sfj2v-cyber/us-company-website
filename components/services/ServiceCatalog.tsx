"use client";

import { useMemo, useState, type ReactNode } from "react";
import { Search, X } from "lucide-react";
import { categories, services, marketplaceTags } from "@/lib/data";
import { cn } from "@/lib/utils";
import ServiceCard from "@/components/services/ServiceCard";

const tiers = ["Essential", "Growth", "Enterprise"] as const;
const durations = [
  "1–2 weeks",
  "2–3 weeks",
  "3–4 weeks",
  "4–6 weeks",
  "6–8 weeks",
];

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition",
        active
          ? "border-blue-500 bg-blue-500/15 text-blue-300"
          : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white"
      )}
    >
      {children}
    </button>
  );
}

export default function ServiceCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [tier, setTier] = useState("all");
  const [duration, setDuration] = useState("all");
  const [tag, setTag] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return services.filter((s) => {
      const matchesQuery =
        !q ||
        [s.name, s.description, ...s.deliverables, ...s.tags].some((v) =>
          v.toLowerCase().includes(q)
        );
      const matchesCategory = category === "all" || s.category === category;
      const matchesTier = tier === "all" || s.tier === tier;
      const matchesDuration = duration === "all" || s.duration === duration;
      const matchesTag = tag === "all" || s.tags.includes(tag);
      return (
        matchesQuery &&
        matchesCategory &&
        matchesTier &&
        matchesDuration &&
        matchesTag
      );
    });
  }, [query, category, tier, duration, tag]);

  const hasFilters =
    query.length > 0 ||
    [category, tier, duration, tag].some((v) => v !== "all");

  const reset = () => {
    setQuery("");
    setCategory("all");
    setTier("all");
    setDuration("all");
    setTag("all");
  };

  return (
    <div>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by keyword or tag (Amazon, TikTok, Shopify, Logistics, Compliance)…"
          className="input py-4 pl-12"
        />
      </div>

      <div className="mt-6 space-y-5">
        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Category
          </div>
          <div className="flex flex-wrap gap-2">
            <FilterChip active={category === "all"} onClick={() => setCategory("all")}>
              All
            </FilterChip>
            {categories.map((c) => (
              <FilterChip
                key={c.slug}
                active={category === c.slug}
                onClick={() => setCategory(c.slug)}
              >
                {c.shortName}
              </FilterChip>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Price Tier
            </div>
            <div className="flex flex-wrap gap-2">
              <FilterChip active={tier === "all"} onClick={() => setTier("all")}>
                All
              </FilterChip>
              {tiers.map((t) => (
                <FilterChip
                  key={t}
                  active={tier === t}
                  onClick={() => setTier(t)}
                >
                  {t}
                </FilterChip>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Duration
            </div>
            <div className="flex flex-wrap gap-2">
              <FilterChip
                active={duration === "all"}
                onClick={() => setDuration("all")}
              >
                All
              </FilterChip>
              {durations.map((d) => (
                <FilterChip
                  key={d}
                  active={duration === d}
                  onClick={() => setDuration(d)}
                >
                  {d}
                </FilterChip>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Marketplace / Tag
          </div>
          <div className="flex flex-wrap gap-2">
            <FilterChip active={tag === "all"} onClick={() => setTag("all")}>
              All
            </FilterChip>
            {marketplaceTags.map((t) => (
              <FilterChip key={t} active={tag === t} onClick={() => setTag(t)}>
                {t}
              </FilterChip>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <p className="text-sm text-slate-400">
          {filtered.length} service{filtered.length === 1 ? "" : "s"}
        </p>
        {hasFilters && (
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400 transition hover:text-white"
          >
            <X className="h-4 w-4" /> Clear filters
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      ) : (
        <div className="card mt-6 p-12 text-center">
          <p className="text-slate-400">No services match your filters.</p>
          <button
            type="button"
            onClick={reset}
            className="mt-3 text-sm font-semibold text-emerald-400"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
