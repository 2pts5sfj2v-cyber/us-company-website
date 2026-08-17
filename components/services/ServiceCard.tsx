"use client";

import Link from "next/link";
import { Check, Plus, CheckCheck, Clock, ArrowRight } from "lucide-react";
import { getCategory } from "@/lib/data";
import { useScope } from "@/lib/scope-context";
import { useUI } from "@/lib/ui-context";
import { cn, formatCurrency } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import type { Service } from "@/lib/types";

const tierStyles: Record<string, string> = {
  Essential: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  Growth: "border-blue-500/30 bg-blue-500/10 text-blue-300",
  Enterprise: "border-violet-500/30 bg-violet-500/10 text-violet-300",
};

export default function ServiceCard({
  service,
  compact = false,
}: {
  service: Service;
  compact?: boolean;
}) {
  const category = getCategory(service.category);
  const Icon = category.icon;
  const scope = useScope();
  const { openBooking } = useUI();
  const selected = scope?.isSelected(service.id) ?? false;

  return (
    <div className="card group relative flex flex-col p-6 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-slate-900/80">
      {service.popular && (
        <Badge className="absolute -top-3 right-5 bg-emerald-500 text-slate-950 shadow-glow-emerald">
          Popular
        </Badge>
      )}

      <div className="flex items-center justify-between gap-3">
        <Link
          href={`/services/${category.slug}`}
          className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-xs font-semibold uppercase tracking-wide transition hover:opacity-80"
          style={{ color: category.accent, backgroundColor: `${category.accent}1a` }}
        >
          <Icon className="h-3.5 w-3.5" />
          {category.shortName}
        </Link>
        <Badge className={cn("border", tierStyles[service.tier])}>
          {service.tier}
        </Badge>
      </div>

      <h3 className="mt-4 font-display text-lg font-bold leading-snug text-white">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
        {service.description}
      </p>

      <div className="mt-4 flex items-end gap-3">
        <span className="font-display text-2xl font-extrabold text-white">
          {formatCurrency(service.price)}
        </span>
        <span className="mb-1 inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
          <Clock className="h-3.5 w-3.5" />
          {service.duration}
        </span>
      </div>

      {!compact && (
        <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
          {service.deliverables.map((d) => (
            <li
              key={d}
              className="flex items-start gap-2.5 text-sm text-slate-300"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              {d}
            </li>
          ))}
        </ul>
      )}

      {!compact && (
        <div className="mt-5 flex flex-wrap gap-2">
          {service.tags.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-slate-400"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-6 flex gap-3">
        {scope && (
          <button
            type="button"
            onClick={() => scope.toggle(service.id)}
            className={cn(
              "inline-flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition",
              selected
                ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-300"
                : "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
            )}
          >
            {selected ? (
              <CheckCheck className="h-4 w-4" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
            {selected ? "Added to Scope" : "Add to Scope"}
          </button>
        )}
        <button
          type="button"
          onClick={() => openBooking({ service: service.name })}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          Inquire
        </button>
      </div>

      {compact && (
        <Link
          href={`/services/${category.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition hover:opacity-80"
          style={{ color: category.accent }}
        >
          Explore practice area
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
