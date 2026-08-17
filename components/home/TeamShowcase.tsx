import { team } from "@/lib/data";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";

const avatars = [
  "from-blue-500 to-cyan-400",
  "from-emerald-500 to-teal-400",
  "from-violet-500 to-purple-400",
  "from-amber-500 to-orange-400",
  "from-pink-500 to-rose-400",
  "from-sky-500 to-indigo-400",
];

export default function TeamShowcase() {
  return (
    <section className="container-x py-20 lg:py-28">
      <SectionHeading
        align="center"
        eyebrow="The Veteran Collective"
        title="Operators Who've Done It Themselves"
        subtitle="Deep pedigree from top global marketplaces, logistics giants, and brand aggregators."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m, i) => (
          <div key={m.name} className="card p-6 transition hover:border-white/20">
            <div className="flex items-center gap-4">
              <span
                className={cn(
                  "grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br font-display text-lg font-extrabold text-white",
                  avatars[i % avatars.length]
                )}
              >
                {m.initials}
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-white">
                  {m.name}
                </h3>
                <p className="text-sm text-slate-400">{m.role}</p>
              </div>
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              {m.background}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {m.expertise.map((e) => (
                <span
                  key={e}
                  className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-slate-400"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
