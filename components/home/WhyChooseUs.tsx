import { valueProps, trustBadges } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyChooseUs() {
  return (
    <section className="container-x py-20 lg:py-28">
      <SectionHeading
        align="center"
        eyebrow="Why Summit Ridge"
        title="Why Choose Us"
        subtitle="A senior team, transparent pricing, and a margin-first operating philosophy — applied to every engagement."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {valueProps.map((v) => {
          const Icon = v.icon;
          return (
            <div key={v.title} className="card p-6 transition hover:border-white/20">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-emerald-500/20">
                <Icon className="h-5 w-5 text-emerald-400" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-white">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {v.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {trustBadges.map((b) => (
          <span
            key={b}
            className="glass rounded-full px-4 py-2 text-xs font-semibold text-slate-300"
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}
