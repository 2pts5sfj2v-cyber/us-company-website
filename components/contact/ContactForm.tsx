"use client";

import { useState } from "react";
import { CheckCircle2, Mail, Send, ArrowLeft } from "lucide-react";
import { marketplaces, gmvBrackets, categories } from "@/lib/data";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    marketplace: "",
    gmv: "",
    notes: "",
  });
  const [services, setServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (name: string) =>
    setServices((prev) =>
      prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name]
    );

  const mailtoHref = `mailto:gtmsummitridge@outlook.com?subject=${encodeURIComponent(
    "New Inquiry — Summit Ridge Trading LLC"
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nTarget marketplace: ${
      form.marketplace || "—"
    }\nCurrent annual GMV: ${form.gmv || "—"}\nServices of interest: ${
      services.join(", ") || "—"
    }\n\nNotes:\n${form.notes}`
  )}`;

  if (submitted) {
    return (
      <div className="card p-8 text-center sm:p-10">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500/15">
          <CheckCircle2 className="h-8 w-8 text-emerald-400" />
        </span>
        <h3 className="mt-5 font-display text-xl font-bold text-white">
          Thanks — your inquiry is ready
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Send it to our team to start the conversation. We reply within one
          business day.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button href={mailtoHref} external>
            <Mail className="h-4 w-4" /> Send via Email
          </Button>
          <Button variant="secondary" onClick={() => setSubmitted(false)}>
            <ArrowLeft className="h-4 w-4" /> Submit another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="card space-y-5 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label">Full name</label>
          <input
            className="input"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label className="label">Work email</label>
          <input
            type="email"
            className="input"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div>
        <label className="label">Company</label>
        <input
          className="input"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          placeholder="Company name"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label">Target marketplace</label>
          <select
            className="input"
            value={form.marketplace}
            onChange={(e) => setForm({ ...form, marketplace: e.target.value })}
          >
            <option value="">Select marketplace…</option>
            {marketplaces.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label">Current annual GMV</label>
          <select
            className="input"
            value={form.gmv}
            onChange={(e) => setForm({ ...form, gmv: e.target.value })}
          >
            <option value="">Select range…</option>
            {gmvBrackets.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="label">Services of interest</label>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => {
            const active = services.includes(c.name);
            return (
              <button
                type="button"
                key={c.slug}
                onClick={() => toggleService(c.name)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition",
                  active
                    ? "border-emerald-500 bg-emerald-500/15 text-emerald-300"
                    : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white"
                )}
              >
                {c.shortName}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="label">Notes / project details</label>
        <textarea
          className="input min-h-[120px] resize-none"
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          placeholder="Tell us about your products, current channels, and goals."
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        <Send className="h-4 w-4" /> Submit Inquiry
      </Button>
      <p className="text-center text-xs text-slate-500">
        Submitting prepares an email to gtmsummitridge@outlook.com — nothing is sent
        automatically.
      </p>
    </form>
  );
}
