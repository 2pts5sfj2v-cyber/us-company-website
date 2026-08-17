import type { Service } from "./types";
import { services } from "./data/services";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function formatCurrency(amount: number) {
  return currency.format(amount);
}

export function getServicesByIds(ids: string[]): Service[] {
  const map = new Map(services.map((s) => [s.id, s]));
  return ids.map((id) => map.get(id)).filter((s): s is Service => Boolean(s));
}

export function buildScopeSummary(selected: Service[]): string {
  const total = selected.reduce((sum, s) => sum + s.price, 0);
  const lines = [
    "Summit Ridge Trading LLC",
    "Custom Service Inquiry Summary",
    "",
    "Selected Services:",
    ...selected.map(
      (s) => `  • ${s.name} (${s.tier}) — ${formatCurrency(s.price)}`
    ),
    "",
    `Total Estimated Investment: ${formatCurrency(total)}`,
    "",
    "I'd like to schedule a consultation to discuss this scope.",
  ];
  return lines.join("\n");
}

export function buildMailto(selected: Service[], message?: string) {
  const subject = encodeURIComponent(
    "Service Inquiry — Summit Ridge Trading LLC"
  );
  const body = encodeURIComponent(message ?? buildScopeSummary(selected));
  return `mailto:gtmsummitridge@outlook.com?subject=${subject}&body=${body}`;
}
