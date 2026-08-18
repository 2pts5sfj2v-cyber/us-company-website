import Link from "next/link";
import { Mountain, Mail, MapPin, Phone } from "lucide-react";
import { categories, contactInfo } from "@/lib/data";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services & Pricing", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Book a Consultation", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
  { label: "Disclaimer", href: "/terms#disclaimer" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500">
                <Mountain className="h-5 w-5 text-white" />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-lg font-extrabold tracking-tight text-white">
                  Summit Ridge
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Trading LLC
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              A boutique advisory and execution consultancy led by cross-border
              e-commerce veterans. We deliver battle-tested strategy, store
              operations, supply chain resilience, and global market expansion.
            </p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
            >
              <Mail className="h-4 w-4" />
              {contactInfo.email}
            </a>
            <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-slate-400">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
              {contactInfo.address}
            </p>
            {contactInfo.phone && (
              <a
                href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`}
                className="mt-3 flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
              >
                <Phone className="h-4 w-4 text-slate-500" />
                {contactInfo.phone}
              </a>
            )}
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Practice Areas
            </h4>
            <ul className="mt-4 space-y-3">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/services/${c.slug}`}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {c.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h4>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {year} Summit Ridge Trading LLC. All rights reserved.
          </p>
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-xs text-slate-500 transition hover:text-slate-300"
          >
            {contactInfo.email}
          </a>
        </div>

        <p className="mt-6 text-[11px] leading-relaxed text-slate-600">
          Disclaimer: Summit Ridge Trading LLC provides advisory and execution
          services. Legal, tax, and customs matters are coordinated with licensed
          professionals and do not constitute formal legal or accounting advice.
        </p>
      </div>
    </footer>
  );
}
