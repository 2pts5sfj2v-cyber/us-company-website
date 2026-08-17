import type { Metadata } from "next";
import { ScopeProvider } from "@/lib/scope-context";
import SectionHeading from "@/components/ui/SectionHeading";
import ScopeBuilder from "@/components/services/ScopeBuilder";
import ServiceCatalog from "@/components/services/ServiceCatalog";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Explore Summit Ridge Trading's fixed-price service catalog across market entry, store operations, performance marketing, supply chain, brand, and risk management.",
};

export default function ServicesPage() {
  return (
    <ScopeProvider>
      <section className="relative overflow-hidden pb-8 pt-32 lg:pt-40">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="container-x relative mx-auto max-w-3xl text-center">
          <span className="eyebrow">Fixed-price packages</span>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Services &amp; Pricing Directory
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Twenty battle-tested services across six practice areas — with
            transparent pricing, clear deliverables, and timelines.
          </p>
          <a
            href="mailto:gtmsummitridge@outlook.com"
            className="mt-4 inline-block text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
          >
            gtmsummitridge@outlook.com
          </a>
        </div>
      </section>

      <section id="scope-builder" className="container-x py-12">
        <SectionHeading
          eyebrow="Price calculator"
          title="Build Your Scope"
          subtitle="Select the services you need to calculate your total estimated investment, then export a custom inquiry summary."
        />
        <div className="mt-10">
          <ScopeBuilder />
        </div>
      </section>

      <section id="catalog" className="container-x py-12 pb-24">
        <SectionHeading
          eyebrow="Filter & search"
          title="Browse All Services"
          subtitle="Search by keyword or filter by category, price tier, duration, and marketplace tag."
        />
        <div className="mt-8">
          <ServiceCatalog />
        </div>
      </section>
    </ScopeProvider>
  );
}
