import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Sectors from "@/components/sections/Sectors";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Testimonial from "@/components/sections/Testimonial";
import CTA from "@/components/sections/CTA";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <About />
      <Sectors />
      <PortfolioPreview />
      <Testimonial />
      <CTA />
    </>
  );
}
