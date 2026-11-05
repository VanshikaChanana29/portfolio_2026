import PageHeader from "@/components/sections/page-header";
import CaseStudies from "@/components/sections/case-studies";
import Cta from "@/components/sections/cta";
import { brand } from "@/content/site-data";

export const metadata = {
  title: `Work | ${brand.name}`,
  description: "Case studies of live business software: the problem, what was built and what changed.",
  alternates: { canonical: "/work/" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Real products, real results"
        lead="Each one started with a business problem. Here's what I built and what changed."
      />
      <CaseStudies />
      <Cta />
    </>
  );
}
