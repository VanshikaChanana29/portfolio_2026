import Hero from "@/components/sections/hero";
import Trust from "@/components/sections/trust";
import Services from "@/components/sections/services";
import CaseStudies from "@/components/sections/case-studies";
import { Process, WhyMe } from "@/components/sections/why-process";
import TechStack from "@/components/sections/tech-stack";
import { Pricing, Testimonials } from "@/components/sections/pricing";
import { About, Faq } from "@/components/sections/about-faq";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <CaseStudies />
      <WhyMe />
      <Process />
      <TechStack />
      <Pricing />
      <Testimonials />
      <About />
      <Experience />
      <Faq />
      <Contact />
    </>
  );
}
