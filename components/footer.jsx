import { brand, links, person } from "@/content/site-data";

const pages = [
  { label: "Services", href: "/services/" },
  { label: "Work", href: "/work/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container grid gap-8 py-12 text-sm text-muted sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr]">
        <div>
          <p className="text-base font-semibold text-ink">{brand.name}</p>
          <p className="mt-2 max-w-sm">{brand.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <p className="font-semibold text-ink">Pages</p>
          <ul className="mt-3 space-y-2">
            {pages.map((p) => (
              <li key={p.href}><a className="hover:text-ink" href={p.href}>{p.label}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-semibold text-ink">Get in touch</p>
          <ul className="mt-3 space-y-2">
            <li><a className="break-words hover:text-ink" href={`mailto:${person.email}`}>{person.email}</a></li>
            <li><a className="hover:text-ink" href={`tel:${person.phone.replaceAll(" ", "")}`}>{person.phone}</a></li>
            <li><a className="hover:text-ink" href={links.linkedin} target="_blank" rel="noopener">LinkedIn</a></li>
            <li>{person.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="container py-5 text-sm text-muted">© {new Date().getFullYear()} {brand.name}</p>
      </div>
    </footer>
  );
}
