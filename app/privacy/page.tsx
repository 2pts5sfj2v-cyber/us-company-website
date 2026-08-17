import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Summit Ridge Trading LLC.",
};

const sections = [
  {
    title: "1. Overview",
    body: 'Summit Ridge Trading LLC ("we," "our," or "us") respects your privacy. This Privacy Policy explains what information we collect when you visit our website or contact us, how we use it, and the choices available to you.',
  },
  {
    title: "2. Information We Collect",
    body: "We collect information you voluntarily provide, such as your name, email address, company, target marketplace, and the content of your inquiries. We may also automatically collect basic technical information such as browser type, device, and pages visited.",
  },
  {
    title: "3. How We Use Your Information",
    body: "We use your information to respond to inquiries, prepare consultation requests, deliver our advisory services, improve our website, and — with your consent — send occasional updates. We do not sell your personal information.",
  },
  {
    title: "4. Email Communications",
    body: "When you submit a form, your details are used to prepare an email to gtmsummitridge@outlook.com. We may contact you regarding your inquiry or related services. You can opt out of non-essential communications at any time.",
  },
  {
    title: "5. Cookies & Analytics",
    body: "We may use cookies and similar technologies to understand how visitors use our website and to improve the experience. You can control cookies through your browser settings.",
  },
  {
    title: "6. Data Sharing",
    body: "We do not sell or rent your information. We may share information with trusted service providers who help us operate the website, or when disclosure is required by law.",
  },
  {
    title: "7. Data Retention & Security",
    body: "We retain information only as long as necessary for the purposes described in this policy, and we use reasonable safeguards to protect it. No method of transmission over the internet is completely secure.",
  },
  {
    title: "8. Your Rights",
    body: "Depending on your location, you may have rights to access, correct, or delete your personal information. To exercise these rights, contact us at gtmsummitridge@outlook.com.",
  },
  {
    title: "9. Contact",
    body: "Questions about this Privacy Policy can be directed to gtmsummitridge@outlook.com.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-32 lg:pt-40">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="container-x relative">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Privacy Policy
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
