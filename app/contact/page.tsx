import type { Metadata } from "next";
import { Mail, Clock, MapPin, ShieldCheck, Phone } from "lucide-react";
import { contactInfo } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Consultation",
  description:
    "Get in touch with Summit Ridge Trading LLC for a no-obligation consultation on scaling your global e-commerce.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-8 pt-32 lg:pt-40">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="container-x relative">
          <SectionHeading
            align="center"
            eyebrow="Contact"
            title="Let's Talk About Your Global Growth"
            subtitle="Tell us about your goals and a cross-border veteran will get back to you within one business day."
          />
        </div>
      </section>

      <section className="container-x pb-24 pt-6">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="space-y-4 lg:col-span-2">
            <div className="card p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-emerald-500/20">
                <Mail className="h-5 w-5 text-emerald-400" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-white">
                Email Us
              </h3>
              <a
                href={`mailto:${contactInfo.email}`}
                className="mt-2 block text-sm text-slate-400 transition hover:text-white"
              >
                {contactInfo.email}
              </a>
            </div>

            {contactInfo.phone && (
              <div className="card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-emerald-500/20">
                  <Phone className="h-5 w-5 text-emerald-400" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-white">
                  Call Us
                </h3>
                <a
                  href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`}
                  className="mt-2 block text-sm text-slate-400 transition hover:text-white"
                >
                  {contactInfo.phone}
                </a>
              </div>
            )}

            <div className="card p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-emerald-500/20">
                <MapPin className="h-5 w-5 text-emerald-400" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-white">
                Registered Address
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {contactInfo.address}
              </p>
            </div>

            <div className="card p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-emerald-500/20">
                <Clock className="h-5 w-5 text-emerald-400" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-white">
                Response Time
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Every inquiry receives a reply within one business day.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                No-obligation, confidential consultation.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
