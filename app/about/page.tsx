import type { Metadata } from "next";
import { Target, TrendingUp, HeartHandshake, Globe2 } from "lucide-react";
import { globalFootprint } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamShowcase from "@/components/home/TeamShowcase";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the Veteran Collective behind Summit Ridge Trading LLC — senior operators from Amazon, Shopify, TikTok Shop, Maersk, and Thrasio.",
};

const principles = [
  {
    icon: Target,
    title: "Outcome over activity",
    description:
      "We measure success in margin, revenue, and compliance — not hours billed.",
  },
  {
    icon: TrendingUp,
    title: "Margin-first, always",
    description:
      "Every recommendation is stress-tested against contribution margin and landed cost.",
  },
  {
    icon: HeartHandshake,
    title: "Operate as one team",
    description:
      "We embed with your operators and own execution through to the outcome.",
  },
  {
    icon: Globe2,
    title: "Global by default",
    description:
      "Cross-border is our home turf — the US, EU, SEA, and APAC.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-14 pt-32 lg:pt-40">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="container-x relative max-w-3xl">
          <span className="eyebrow">About Summit Ridge Trading</span>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            A Veteran Collective, Built for Cross-Border Scale
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Summit Ridge Trading LLC is a boutique advisory and execution
            consultancy founded by operators who spent their careers inside
            Amazon, Shopify, TikTok Shop, Maersk, and Thrasio. We bring that
            senior pedigree to brands that want to scale globally — without the
            learning curve.
          </p>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Our story"
            title="From the Trenches to the Summit"
          />
          <div className="space-y-4 leading-relaxed text-slate-400">
            <p>
              We started Summit Ridge after years on the inside — running
              accounts at Amazon, architecting Shopify storefronts, negotiating
              freight at Maersk, and operating aggregator portfolios at Thrasio.
            </p>
            <p>
              We kept seeing the same thing: ambitious brands losing margin and
              momentum to avoidable mistakes. So we built a consultancy that
              fixes it — with senior operators who have already solved the
              problem, a fixed-price menu with zero surprise billing, and a
              relentless focus on contribution margin.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <SectionHeading eyebrow="Operating philosophy" title="How We Work" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-emerald-500/20">
                  <Icon className="h-5 w-5 text-emerald-400" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container-x py-16">
        <SectionHeading
          eyebrow="Global footprint"
          title="Where We Operate"
          subtitle="On-the-ground expertise across the markets that matter most for cross-border brands."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {globalFootprint.map((g) => (
            <div key={g.region} className="card p-6">
              <h3 className="font-display text-lg font-bold text-white">
                {g.region}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {g.focus}
              </p>
            </div>
          ))}
        </div>
      </section>

      <TeamShowcase />
    </>
  );
}
