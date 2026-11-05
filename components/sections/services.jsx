import { HiCheck } from "react-icons/hi";
import { caseStudies, services } from "@/content/site-data";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section container">
      <p className="eyebrow">Services</p>
      <h2 id="services-title" className="h2">What I can build for you</h2>
      <p className="lead">Pick what fits, or tell me the problem and I'll suggest the simplest way to solve it.</p>

      <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <li key={s.id} className="card flex flex-col">
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
                <a href="#work" className="text-sm font-semibold text-accent hover:underline" data-service-link={s.id}>
                  See examples
                </a>
              ) : s.examples ? (
                <a href={s.examples} className="text-sm font-semibold text-accent hover:underline">
                  See examples
                </a>
              ) : (
                <a href="#contact" className="text-sm font-semibold text-accent hover:underline">
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
