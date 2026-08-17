"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Mountain, ArrowRight } from "lucide-react";
import { categories } from "@/lib/data";
import { useUI } from "@/lib/ui-context";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/services" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const { openBooking } = useUI();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || mobileOpen
          ? "glass-strong shadow-lg shadow-black/30"
          : "bg-transparent"
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between lg:h-20">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setMobileOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 shadow-glow">
            <Mountain className="h-5 w-5 text-white" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-extrabold tracking-tight text-white">
              Summit Ridge
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Trading LLC
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition",
                pathname.startsWith("/services")
                  ? "text-white"
                  : "text-slate-300 hover:text-white"
              )}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown
                className={cn("h-4 w-4 transition", servicesOpen && "rotate-180")}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full w-[440px] pt-3">
                <div className="glass-strong overflow-hidden rounded-2xl p-2 shadow-xl shadow-black/40">
                  <Link
                    href="/services"
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                  >
                    All Services & Pricing
                    <ArrowRight className="h-4 w-4 text-emerald-400" />
                  </Link>
                  <div className="my-2 h-px bg-white/10" />
                  <div className="grid gap-1">
                    {categories.map((c) => {
                      const Icon = c.icon;
                      return (
                        <Link
                          key={c.slug}
                          href={`/services/${c.slug}`}
                          className="flex items-center gap-3 rounded-xl px-4 py-2.5 transition hover:bg-white/5"
                        >
                          <span
                            className={cn(
                              "grid h-8 w-8 shrink-0 place-items-center rounded-lg",
                              c.accentSoft
                            )}
                          >
                            <Icon className="h-4 w-4" style={{ color: c.accent }} />
                          </span>
                          <span className="min-w-0">
                            <span className="block truncate text-sm font-semibold text-slate-100">
                              {c.shortName}
                            </span>
                            <span className="block truncate text-xs text-slate-400">
                              {c.tagline}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition",
                pathname === l.href
                  ? "text-white"
                  : "text-slate-300 hover:text-white"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm" onClick={() => openBooking()}>
            Book Consultation
          </Button>
          <Button href="/contact" size="sm">
            Contact Us
          </Button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl lg:hidden">
          <div className="container-x space-y-1 py-4">
            <Link
              href="/services"
              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-white hover:bg-white/5"
            >
              All Services & Pricing
              <ArrowRight className="h-4 w-4 text-emerald-400" />
            </Link>
            <div className="my-2 h-px bg-white/10" />
            {categories.map((c) => {
              const Icon = c.icon;
              return (
                <Link
                  key={c.slug}
                  href={`/services/${c.slug}`}
                  className="flex items-center gap-3 rounded-xl px-4 py-2.5 hover:bg-white/5"
                >
                  <span
                    className={cn(
                      "grid h-8 w-8 place-items-center rounded-lg",
                      c.accentSoft
                    )}
                  >
                    <Icon className="h-4 w-4" style={{ color: c.accent }} />
                  </span>
                  <span className="text-sm font-medium text-slate-200">
                    {c.shortName}
                  </span>
                </Link>
              );
            })}
            <div className="my-2 h-px bg-white/10" />
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-3">
              <Button
                variant="secondary"
                className="flex-1"
                onClick={() => {
                  setMobileOpen(false);
                  openBooking();
                }}
              >
                Book Consultation
              </Button>
              <Button href="/contact" className="flex-1">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
