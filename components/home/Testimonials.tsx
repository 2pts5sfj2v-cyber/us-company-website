import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  return (
    <section className="container-x py-20 lg:py-28">
      <SectionHeading
        align="center"
        eyebrow="Client results"
        title="Trusted by Growth-Stage Brands"
        subtitle="Real outcomes from sellers and exporters who scaled with Summit Ridge."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <figure key={t.author} className="card flex flex-col p-6">
            <div className="flex items-center justify-between">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <Quote className="h-6 w-6 text-white/10" />
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
              <div>
                <div className="font-semibold text-white">{t.author}</div>
                <div className="text-xs text-slate-400">
                  {t.role}, {t.company}
                </div>
              </div>
              <span className="shrink-0 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                {t.metric}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
