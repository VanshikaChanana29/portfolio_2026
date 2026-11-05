import { About } from "@/components/sections/about-faq";
import { WhyMe } from "@/components/sections/why-process";
import Cta from "@/components/sections/cta";
import { brand } from "@/content/site-data";

export const metadata = {
  title: `About | ${brand.name}`,
  description: "Who builds your software, how the work is done and why clients can rely on it.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <About />
      <WhyMe />
      <Cta />
    </>
  );
}
