import Contact from "@/components/sections/contact";
import { brand } from "@/content/site-data";

export const metadata = {
  title: `Contact | ${brand.name}`,
  description: "Email, call or WhatsApp to talk about your project. Replies within one working day.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return <Contact />;
}
