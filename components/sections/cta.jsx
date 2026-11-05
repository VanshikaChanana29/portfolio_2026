import { FaWhatsapp } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { bookingHref, links } from "@/content/site-data";

export default function Cta() {
  const external = Boolean(links.booking);
  return (
    <section aria-labelledby="cta-title" className="section container">
      <div className="rounded-3xl bg-accent-solid px-6 py-12 text-center text-white sm:px-12 sm:py-16">
        <h2 id="cta-title" className="text-3xl font-bold sm:text-4xl">Ready to stop doing it by hand?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
          Tell me what's slowing your team down. You'll get a clear next step within one working day.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={bookingHref}
            {...(external ? { target: "_blank", rel: "noopener" } : {})}
            className="btn bg-white !px-6 !py-3 text-base text-[#1a1033] hover:bg-white/90"
            data-track="book_call"
            data-track-label="cta_band"
          >
            Book a free 15-min call
            <HiArrowRight aria-hidden="true" />
          </a>
          {links.whatsapp && (
            <a href={links.whatsapp} target="_blank" rel="noopener" className="btn border border-white/40 !px-6 !py-3 text-base text-white hover:bg-white/10" data-track="whatsapp_click" data-track-label="cta_band">
              <FaWhatsapp aria-hidden="true" className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
