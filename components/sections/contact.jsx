import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiCalendar, HiMail, HiPhone } from "react-icons/hi";
import { SiFiverr, SiUpwork } from "react-icons/si";
import { availabilityText, links, person } from "@/content/site-data";

export default function Contact() {
  const ext = { target: "_blank", rel: "noopener" };
  const channels = [
    links.booking && { href: links.booking, caption: "Book a call", label: "Free 15-min call", Icon: HiCalendar, track: "book_call", ...ext },
    { href: `mailto:${person.email}`, caption: "Email", label: person.email, Icon: HiMail, track: "email_click" },
    person.phone && { href: `tel:${person.phone.replace(/\s/g, "")}`, caption: "Call", label: person.phone, Icon: HiPhone, track: "phone_click" },
    links.whatsapp && { href: links.whatsapp, caption: "WhatsApp", label: "Chat with me", Icon: FaWhatsapp, track: "whatsapp_click", ...ext },
    { href: links.linkedin, caption: "LinkedIn", label: "Send a message", Icon: FaLinkedin, track: "linkedin_click", ...ext },
    links.upwork && { href: links.upwork, caption: "Upwork", label: "Hire me on Upwork", Icon: SiUpwork, track: "upwork_click", ...ext },
    links.fiverr && { href: links.fiverr, caption: "Fiverr", label: "Hire me on Fiverr", Icon: SiFiverr, track: "fiverr_click", ...ext },
  ].filter(Boolean);

  return (
    <section id="contact" aria-labelledby="contact-title" className="section container">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title" className="h2">Tell me what you want to build</h2>
          <p className="lead">
            Email, call or WhatsApp me with what you have in mind. I'll reply within one working day with questions, a rough plan, or a time to talk.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-success" />
            {availabilityText}. {person.timezoneNote}
          </p>

        </div>

        <ul className="space-y-3">
          {channels.map(({ href, caption, label, Icon, track, target, rel }) => (
            <li key={caption}>
              <a href={href} target={target} rel={rel} data-track={track} data-track-label="contact" className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition-colors duration-150 hover:border-accent">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-muted">{caption}</span>
                  <span className="block break-words font-semibold text-ink group-hover:text-accent">{label}</span>
                </span>
                {target && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
