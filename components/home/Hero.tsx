"use client";

import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { trustMetrics } from "@/lib/data";
import { useUI } from "@/lib/ui-context";
import Button from "@/components/ui/Button";
import CountUp from "@/components/ui/CountUp";

export default function Hero() {
  const { openBooking } = useUI();

  return (
    <section className="relative overflow-hidden pb-20 pt-32 lg:pb-28 lg:pt-40">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="container-x relative">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            Boutique Cross-Border Advisory
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Scale Your Global E-Commerce with{" "}
            <span className="text-gradient">Battle-Tested Veterans</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            Summit Ridge Trading partners with Amazon, Shopify, and TikTok Shop
            sellers to deliver senior-level strategy, store operations, supply
            chain resilience, and global expansion — executed by operators
            who&apos;ve done it themselves.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/services" size="lg">
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg" onClick={() => openBooking()}>
              Book Consultation
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            No-obligation consultation · Replies within one business day
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {trustMetrics.map((m) => (
            <div
              key={m.label}
              className="glass rounded-2xl px-4 py-6 text-center"
            >
              <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                <CountUp value={m.value} prefix={m.prefix} suffix={m.suffix} />
              </div>
              <div className="mt-1.5 text-xs font-medium uppercase tracking-wide text-slate-400">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
