"use client";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { contactInfo } from "@/lib/data";
import { useUI } from "@/lib/ui-context";
import Button from "@/components/ui/Button";

export default function LeadCapture() {
  const { openBooking } = useUI();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="container-x pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-slate-900 to-emerald-500/15 p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to scale your global e-commerce?
            </h2>
            <p className="mt-4 text-slate-300">
              Book a no-obligation consultation with a cross-border veteran, or
              reach us directly at{" "}
              <a
                href={`mailto:${contactInfo.email}`}
                className="font-semibold text-emerald-400 hover:text-emerald-300"
              >
                {contactInfo.email}
              </a>
              .
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="emerald" size="lg" onClick={() => openBooking()}>
                Book Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={`mailto:${contactInfo.email}`}
                external
                variant="secondary"
                size="lg"
              >
                <Mail className="h-4 w-4" /> Email Us
              </Button>
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="font-display text-lg font-bold text-white">
              Get our cross-border playbook
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Marketplace insights and margin tactics, monthly. No spam.
            </p>
            {subscribed ? (
              <div className="mt-4 flex items-center gap-2 text-sm text-emerald-300">
                <CheckCircle2 className="h-5 w-5" />
                You&apos;re subscribed. Welcome aboard.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubscribed(true);
                }}
                className="mt-4 flex gap-2"
              >
                <input
                  type="email"
                  required
                  className="input flex-1"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit">Subscribe</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
