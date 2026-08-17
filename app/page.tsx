import Hero from "@/components/home/Hero";
import ServiceCategories from "@/components/home/ServiceCategories";
import FeaturedServices from "@/components/home/FeaturedServices";
import TeamShowcase from "@/components/home/TeamShowcase";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import LeadCapture from "@/components/home/LeadCapture";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceCategories />
      <FeaturedServices />
      <TeamShowcase />
      <WhyChooseUs />
      <Testimonials />
      <LeadCapture />
    </>
  );
}
