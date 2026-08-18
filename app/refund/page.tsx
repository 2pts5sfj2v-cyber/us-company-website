import type { Metadata } from "next";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Refund and cancellation policy for Summit Ridge Trading LLC advisory and execution services.",
};

const sections = [
  {
    title: "1. Overview",
    body: "This Refund & Cancellation Policy applies to all advisory and execution services purchased from Summit Ridge Trading LLC. It explains when refunds are available, how to cancel an engagement, and how disputes are handled.",
  },
  {
    title: "2. Services & Physical Goods",
    body: "Summit Ridge Trading LLC sells consulting and advisory services only. We do not sell physical goods, so no product return (Return) policy applies.",
  },
  {
    title: "3. Full Refunds",
    body: "If you cancel an engagement within 48 hours of payment and before any work has begun, you are entitled to a full refund.",
  },
  {
    title: "4. Partial Refunds",
    body: "Once work has begun, a refund is available for the portion of the engagement that has not yet been performed, calculated on a pro-rata basis. Work already delivered or milestones already completed are non-refundable.",
  },
  {
    title: "5. Non-Refundable Items",
    body: "No refund is issued after the final deliverables have been accepted or the engagement has been completed. Third-party costs already incurred on your behalf are also non-refundable.",
  },
  {
    title: "6. How to Cancel",
    body: `To cancel, send a written notice to ${contactInfo.email}. Cancellation is effective on the date we receive your notice. We will confirm receipt and tell you whether any refund applies.`,
  },
  {
    title: "7. Refund Processing",
    body: "Approved refunds are issued to the original payment method within 5–10 business days.",
  },
  {
    title: "8. Disputes & Chargebacks",
    body: "Please contact us before opening a payment dispute or chargeback. We respond within one business day and will work in good faith to resolve the issue. If a chargeback is opened without first contacting us, any chargeback fees may be deducted from a later refund.",
  },
  {
    title: "9. Contact",
    body: `Questions about refunds or cancellations can be directed to ${contactInfo.email}${contactInfo.phone ? ` or by phone at ${contactInfo.phone}` : ""}.`,
  },
];

export default function RefundPolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-32 lg:pt-40">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="container-x relative">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: August 2026</p>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="mx-auto max-w-3xl space-y-6">
          {sections.map((s) => (
            <div key={s.title} className="card p-6 sm:p-8">
              <h2 className="font-display text-lg font-bold text-white">
                {s.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
