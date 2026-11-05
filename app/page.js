import Hero from "@/components/sections/hero";
import Trust from "@/components/sections/trust";
import Problems from "@/components/sections/problems";
import { ServicesPreview } from "@/components/sections/services";
import FeaturedWork from "@/components/sections/featured-work";
import { Process } from "@/components/sections/why-process";
import { Testimonials } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/about-faq";
import Cta from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Problems />
      <ServicesPreview />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
