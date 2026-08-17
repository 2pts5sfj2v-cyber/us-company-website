import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { categories, getServicesByCategory } from "@/lib/data";
import { ScopeProvider } from "@/lib/scope-context";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";
import CategoryFaq from "@/components/services/CategoryFaq";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) return { title: "Not Found" };
  return { title: cat.name, description: cat.tagline };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) notFound();
  const Icon = cat.icon;
  const items = getServicesByCategory(cat.slug);

  return (
    <ScopeProvider>
      <section className="relative overflow-hidden pb-14 pt-32 lg:pt-40">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 50% -10%, ${cat.accent}22, transparent 60%)`,
          }}
        />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
              style={{
                color: cat.accent,
                borderColor: `${cat.accent}55`,
                backgroundColor: `${cat.accent}1a`,
              }}
            >
              <Icon className="h-3.5 w-3.5" />
              Practice Area
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {cat.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
              {cat.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact">Inquire About This Area</Button>
              <Button variant="secondary" href="/services#scope-builder">
                Build Your Scope
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-14">
        <SectionHeading
          eyebrow="Strategic framework"
          title="How We Approach It"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {cat.framework.map((step, i) => (
            <div key={step.title} className="card flex gap-4 p-6">
              <span
                className="font-display text-3xl font-extrabold"
                style={{ color: cat.accent }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-14">
        <SectionHeading eyebrow="What's included" title="Included Modules" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cat.modules.map((m) => (
            <div key={m.title} className="card p-6">
              <CheckCircle2 className="h-6 w-6" style={{ color: cat.accent }} />
              <h3 className="mt-3 font-display text-base font-bold text-white">
                {m.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-14">
        <SectionHeading
          eyebrow="Fixed-price packages"
          title={`Services in ${cat.shortName}`}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      <section className="container-x py-14 pb-24">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <SectionHeading
              eyebrow="FAQs"
              title="Frequently Asked Questions"
            />
            <Button href="/contact" className="mt-6">
              Still have questions?
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="lg:col-span-2">
            <CategoryFaq faqs={cat.faqs} />
          </div>
        </div>
      </section>
    </ScopeProvider>
  );
}
