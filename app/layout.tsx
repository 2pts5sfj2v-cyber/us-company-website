import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { UIProvider } from "@/lib/ui-context";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/layout/BookingModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Summit Ridge Trading LLC — Cross-Border E-Commerce Advisory & Execution",
  description:
    "Boutique advisory and execution consultancy led by cross-border e-commerce veterans. Scale your global e-commerce with battle-tested strategy, store operations, supply chain resilience, and market expansion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans">
        <UIProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <BookingModal />
        </UIProvider>
      </body>
    </html>
  );
}
