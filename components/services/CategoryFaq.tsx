"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CategoryFaq({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((f, i) => (
        <div key={f.question} className="card overflow-hidden">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
          >
            <span className="font-semibold text-white">{f.question}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 shrink-0 text-slate-400 transition",
                open === i && "rotate-180"
              )}
            />
          </button>
          {open === i && (
            <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">
              {f.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
