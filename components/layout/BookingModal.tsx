"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle2, Mail, ArrowRight } from "lucide-react";
import { useUI } from "@/lib/ui-context";
import { contactInfo } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function BookingModal() {
  const { bookingOpen, bookingPrefill, closeBooking } = useUI();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    if (bookingOpen) {
      setSubmitted(false);
      setForm({
        name: "",
        email: "",
        company: "",
        message: bookingPrefill.message ?? "",
      });
    }
  }, [bookingOpen, bookingPrefill]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBooking();
    };
    if (bookingOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [bookingOpen, closeBooking]);

  if (!bookingOpen) return null;

  const mailtoHref = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    "Consultation Request — Summit Ridge Trading LLC"
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n${
      bookingPrefill.service ? `Service: ${bookingPrefill.service}\n` : ""
    }Message: ${form.message}`
  )}`;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={closeBooking}
      />
      <div className="relative w-full max-w-lg animate-fade-up overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/50">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div>
            <h3 className="font-display text-lg font-bold text-white">
              {submitted ? "Request Received" : "Book a Consultation"}
            </h3>
            <p className="text-xs text-slate-400">
              {submitted
                ? "We'll be in touch within one business day."
                : "Tell us a little about your goals."}
            </p>
          </div>
          <button
            type="button"
            onClick={closeBooking}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-300 transition hover:bg-white/10 hover:text-white"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {submitted ? (
          <div className="px-6 py-10 text-center">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500/15">
              <CheckCircle2 className="h-8 w-8 text-emerald-400" />
            </span>
            <p className="mt-5 text-sm leading-relaxed text-slate-300">
              Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""}. Your
              consultation request is ready. Send it to our team to lock in your
              slot.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button href={mailtoHref} external>
                <Mail className="h-4 w-4" /> Send via Email
              </Button>
              <Button variant="secondary" onClick={closeBooking}>
                Done
              </Button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4 px-6 py-6"
          >
            {bookingPrefill.service && (
              <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                <ArrowRight className="h-4 w-4" />
                Service: {bookingPrefill.service}
              </div>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="label">Full name</label>
                <input
                  className="input"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="label">Work email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
            </div>
            <div>
              <label className="label">Company</label>
              <input
                className="input"
                placeholder="Company name"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
            </div>
            <div>
              <label className="label">What are your goals?</label>
              <textarea
                className="input min-h-[110px] resize-none"
                placeholder="Briefly describe your current marketplaces, revenue, and objectives."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Request Consultation
            </Button>
            <p className="text-center text-xs text-slate-500">
              No obligation. We respond to every inquiry within one business day.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
