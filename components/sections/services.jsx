import { HiArrowRight, HiCheck } from "react-icons/hi";
import { caseStudies, services } from "@/content/site-data";

export default function Services() {
  return (
    <section aria-label="All services" className="section container">
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <li key={s.id} id={s.id} className="card flex scroll-mt-24 flex-col">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-muted">{s.summary}</p>
            <p className="mt-4 text-sm text-ink">
              <span className="font-semibold">For: </span>
              <span className="text-muted">{s.forWho}</span>
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {s.deliverables.map((d) => (
                <li key={d} className="flex gap-2">
                  <HiCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center justify-between gap-3 pt-6">
              <span className="text-sm text-muted">{s.timeline ? `Typical timeline: ${s.timeline}` : ""}</span>
              {caseStudies.some((c) => c.services.includes(s.id)) ? (
                <a href={`/work/?service=${s.id}`} className="text-sm font-semibold text-accent hover:underline">
                  See examples
                </a>
              ) : s.examples ? (
                <a href={s.examples} className="text-sm font-semibold text-accent hover:underline">
                  See examples
                </a>
              ) : (
                <a href="/contact/" className="text-sm font-semibold text-accent hover:underline">
                  Ask about this
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Short version for the homepage. The full detail lives on /services/.
export function ServicesPreview() {
  return (
    <section aria-labelledby="services-preview-title" className="section border-y border-line bg-surface">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Services</p>
            <h2 id="services-preview-title" className="h2">What I can build for you</h2>
          </div>
          <a href="/services/" className="btn-secondary">All services and plans</a>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.id}>
              <a href={`/services/#${s.id}`} className="group flex h-full flex-col rounded-2xl border border-line bg-bg p-6 transition-colors duration-150 hover:border-accent">
                <h3 className="text-lg font-semibold group-hover:text-accent">{s.title}</h3>
                <p className="mt-2 flex-1 text-muted">{s.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Learn more
                  <HiArrowRight aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
