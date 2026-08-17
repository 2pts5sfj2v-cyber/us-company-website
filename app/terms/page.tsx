import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Summit Ridge Trading LLC.",
};

const sections: { title: string; body: string; id?: string }[] = [
  {
    title: "1. Acceptance of Terms",
    body: 'By accessing this website or engaging Summit Ridge Trading LLC ("we," "our," or "us"), you agree to these Terms of Service. If you do not agree, please do not use our website or services.',
  },
  {
    title: "2. Services",
    body: "We provide advisory and execution services for cross-border e-commerce, including strategy, store operations, supply chain, marketing, brand, and risk management. Specific deliverables, timelines, and fees are described in individual service packages or a written engagement.",
  },
  {
    id: "disclaimer",
    title: "3. No Formal Legal or Accounting Advice",
    body: "Our services are advisory in nature. Legal, tax, and customs matters are coordinated with licensed professionals and do not constitute formal legal or accounting advice. You should consult qualified counsel for decisions with legal or tax consequences.",
  },
  {
    title: "4. Fees & Payment",
    body: "Fixed-price packages are quoted in US dollars. Payment terms and any applicable expenses are set out in the engagement agreement. Fees are non-refundable except as expressly stated in writing.",
  },
  {
    title: "5. Client Responsibilities",
    body: "You agree to provide accurate information and timely access to the accounts and data needed to perform the services. Results depend on many factors outside our control, and we do not guarantee specific revenue or profitability outcomes.",
  },
  {
    title: "6. Intellectual Property",
    body: "Deliverables produced for you are licensed for your use upon full payment. Our pre-existing methodologies, templates, and tools remain our property, subject to a limited license for your internal use.",
  },
  {
    title: "7. Confidentiality",
    body: "We treat non-public information you share as confidential and will not disclose it except as necessary to provide the services or as required by law.",
  },
  {
    title: "8. Limitation of Liability",
    body: "To the maximum extent permitted by law, our aggregate liability arising from any engagement is limited to the fees paid for the specific service giving rise to the claim. We are not liable for indirect, incidental, or consequential damages.",
  },
  {
    title: "9. Governing Law",
    body: "These Terms are governed by the laws of the State of Colorado, United States, without regard to conflict-of-law principles.",
  },
  {
    title: "10. Contact",
    body: "Questions about these Terms can be directed to gtmsummitridge@outlook.com.",
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-32 lg:pt-40">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="container-x relative">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: August 2026</p>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="mx-auto max-w-3xl space-y-6">
          {sections.map((s) => (
            <div key={s.title} id={s.id} className="card p-6 sm:p-8">
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
