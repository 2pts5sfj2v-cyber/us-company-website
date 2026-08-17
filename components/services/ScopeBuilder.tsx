"use client";

import { useMemo, useState } from "react";
import {
  Check,
  ChevronDown,
  Trash2,
  Copy,
  Mail,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";
import { categories, getServicesByCategory } from "@/lib/data";
import { useScope } from "@/lib/scope-context";
import { useUI } from "@/lib/ui-context";
import {
  buildScopeSummary,
  buildMailto,
  formatCurrency,
  getServicesByIds,
  cn,
} from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function ScopeBuilder() {
  const scope = useScope();
  const { openBooking } = useUI();
  const [openCats, setOpenCats] = useState<string[]>(
    categories.map((c) => c.slug)
  );
  const [copied, setCopied] = useState(false);

  const selected = useMemo(
    () => getServicesByIds(scope?.selectedIds ?? []),
    [scope?.selectedIds]
  );
  const total = selected.reduce((sum, s) => sum + s.price, 0);

  if (!scope) return null;

  const toggleCat = (slug: string) =>
    setOpenCats((prev) =>
      prev.includes(slug) ? prev.filter((x) => x !== slug) : [...prev, slug]
    );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildScopeSummary(selected));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="space-y-4 lg:col-span-2">
        {categories.map((c) => {
          const Icon = c.icon;
          const items = getServicesByCategory(c.slug);
          const open = openCats.includes(c.slug);
          const catSelected = items.filter((s) => scope.isSelected(s.id)).length;
          return (
            <div key={c.slug} className="card overflow-hidden">
              <button
                type="button"
                onClick={() => toggleCat(c.slug)}
                className="flex w-full items-center justify-between px-5 py-4"
              >
                <span className="flex items-center gap-3">
                  <span
                    className={cn(
                      "grid h-9 w-9 place-items-center rounded-lg",
                      c.accentSoft
                    )}
                  >
                    <Icon className="h-4 w-4" style={{ color: c.accent }} />
                  </span>
                  <span className="text-left">
                    <span className="block font-display text-sm font-bold text-white">
                      {c.name}
                    </span>
                    <span className="block text-xs text-slate-400">
                      {catSelected}/{items.length} selected
                    </span>
                  </span>
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-slate-400 transition",
                    open && "rotate-180"
                  )}
                />
              </button>

              {open && (
                <div className="border-t border-white/10">
                  {items.map((s) => {
                    const checked = scope.isSelected(s.id);
                    return (
                      <label
                        key={s.id}
                        className="flex cursor-pointer items-center gap-3 px-5 py-3 transition hover:bg-white/5"
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => scope.toggle(s.id)}
                          className="sr-only"
                        />
                        <span
                          className={cn(
                            "grid h-5 w-5 shrink-0 place-items-center rounded-md border transition",
                            checked
                              ? "border-emerald-500 bg-emerald-500"
                              : "border-white/20 bg-white/5"
                          )}
                        >
                          {checked && (
                            <Check className="h-3.5 w-3.5 text-slate-950" />
                          )}
                        </span>
                        <span className="flex-1 text-sm text-slate-200">
                          {s.name}
                        </span>
                        <span className="text-sm font-semibold text-slate-300">
                          {formatCurrency(s.price)}
                        </span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="lg:col-span-1">
        <div className="card sticky top-24 p-6">
          <h3 className="font-display text-lg font-bold text-white">
            Your Scope
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            Total estimated investment
          </p>
          <div className="mt-3 font-display text-4xl font-extrabold text-white">
            {formatCurrency(total)}
          </div>
          <p className="mt-1 text-xs text-slate-500">
            {selected.length} service{selected.length === 1 ? "" : "s"} selected
          </p>

          {selected.length > 0 ? (
            <>
              <ul className="mt-5 max-h-60 space-y-2 overflow-y-auto pr-1">
                {selected.map((s) => (
                  <li
                    key={s.id}
                    className="flex items-start justify-between gap-2 rounded-lg bg-white/5 px-3 py-2"
                  >
                    <span className="text-xs text-slate-300">{s.name}</span>
                    <span className="flex shrink-0 items-center gap-2">
                      <span className="text-xs font-semibold text-slate-200">
                        {formatCurrency(s.price)}
                      </span>
                      <button
                        type="button"
                        onClick={() => scope.remove(s.id)}
                        className="text-slate-500 transition hover:text-red-400"
                        aria-label="Remove"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => scope.clear()}
                className="mt-3 w-full text-center text-xs text-slate-500 transition hover:text-slate-300"
              >
                Clear all
              </button>
            </>
          ) : (
            <p className="mt-5 text-sm text-slate-500">
              Select services above to build a custom inquiry summary.
            </p>
          )}

          <div className="mt-6 space-y-3">
            <Button
              className="w-full"
              onClick={handleCopy}
              disabled={selected.length === 0}
              variant="secondary"
            >
              {copied ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              {copied ? "Copied!" : "Copy Summary"}
            </Button>

            {selected.length > 0 ? (
              <Button
                className="w-full"
                href={buildMailto(selected)}
                external
                variant="outline"
              >
                <Mail className="h-4 w-4" /> Email Inquiry
              </Button>
            ) : (
              <Button className="w-full" variant="outline" disabled>
                <Mail className="h-4 w-4" /> Email Inquiry
              </Button>
            )}

            <Button
              className="w-full"
              variant="emerald"
              disabled={selected.length === 0}
              onClick={() =>
                openBooking({ message: buildScopeSummary(selected) })
              }
            >
              <CalendarCheck className="h-4 w-4" /> Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
