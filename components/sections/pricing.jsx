import { HiCheck, HiCube, HiLightningBolt, HiTrendingUp } from "react-icons/hi";
import { engagements, testimonials } from "@/content/site-data";

const icons = { project: HiCube, hourly: HiLightningBolt, retainer: HiTrendingUp };

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="section border-y border-line bg-surface">
      <div className="container">
        <p className="eyebrow">Ways to work together</p>
        <h2 id="pricing-title" className="h2">Three simple ways to work with me</h2>
        <p className="lead">Pick what fits, or tell me what you need and I'll suggest one. Every project starts with a free call and a written quote, so there are no surprises on the invoice.</p>

        <ul className="mt-10 grid gap-5 lg:grid-cols-3">
          {engagements.map((e) => {
            const Icon = icons[e.id];
            return (
              <li key={e.id} className="flex flex-col rounded-2xl border border-line bg-bg p-6 transition-all duration-150 hover:-translate-y-1 hover:border-accent">
                <div className="flex items-center justify-between gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <span className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-muted">{e.model}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold">{e.title}</h3>
                <p className="mt-2 text-muted">{e.best}</p>
                <ul className="mt-5 flex-1 space-y-2.5 border-t border-line pt-5 text-sm">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <HiCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-6">
                  {e.price ? (
                    <>
                      <span className="text-sm text-muted">Starting from </span>
                      <span className="text-3xl font-bold text-ink">{e.price}</span>
                      <span className="text-sm text-muted"> {e.unit}</span>
                    </>
                  ) : (
                    <span className="font-semibold text-ink">Quote after a free call</span>
                  )}
                </p>
                <a href="#contact" className="btn-primary mt-4" data-track="pricing_cta" data-track-label={e.id}>
                  {e.cta}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

// Hidden until real testimonials are added in content/site-data.js.
export function Testimonials() {
  if (!testimonials.length) return null;
  return (
    <section aria-labelledby="testimonials-title" className="section container">
      <p className="eyebrow">Testimonials</p>
      <h2 id="testimonials-title" className="h2">What clients say</h2>
      <ul className="mt-10 grid gap-5 md:grid-cols-2">
        {testimonials.map((t) => (
          <li key={t.name}>
            <figure className="card h-full">
              <blockquote className="text-lg text-ink">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-muted">
                <span className="font-semibold text-ink">{t.name}</span>
                {t.role && `, ${t.role}`}
                {t.company && `, ${t.company}`}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
