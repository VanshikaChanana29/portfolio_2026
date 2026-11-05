import PageHeader from "@/components/sections/page-header";
import Services from "@/components/sections/services";
import { Pricing } from "@/components/sections/pricing";
import TechStack from "@/components/sections/tech-stack";
import Cta from "@/components/sections/cta";
import { brand } from "@/content/site-data";

export const metadata = {
  title: `Services | ${brand.name}`,
  description: "Custom web apps, business dashboards, AI chatbots, backend work and performance fixes, with clear plans and a written quote.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Software built around how your business works"
        lead="Pick what fits, or tell me the problem and I'll suggest the simplest way to solve it."
      />
      <Services />
      <Pricing />
      <TechStack />
      <Cta />
    </>
  );
}
