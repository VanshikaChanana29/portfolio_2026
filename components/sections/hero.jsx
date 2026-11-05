import { HiArrowRight, HiCheck } from "react-icons/hi";
import { availability, availabilityText, bookingHref, caseStudies, hero, links } from "@/content/site-data";

export default function Hero() {
  const external = Boolean(links.booking);
  const shipped = caseStudies.slice(0, 3);

  return (
    <section id="top" aria-labelledby="hero-title" className="container grid items-center gap-12 pb-16 pt-12 sm:pt-20 lg:grid-cols-[1.25fr_1fr] lg:pb-24">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium text-ink">
          <span aria-hidden="true" className={`h-2 w-2 rounded-full ${availability.open ? "bg-success" : "bg-muted"}`} />
          {availabilityText}
        </p>

        <h1 id="hero-title" className="mt-6 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
          {hero.headline}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted sm:text-xl">{hero.subheadline}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={bookingHref}
            {...(external ? { target: "_blank", rel: "noopener" } : {})}
            className="btn-primary !px-6 !py-3 text-base"
            data-track="book_call"
            data-track-label="hero"
          >
            Book a free 15-min call
            <HiArrowRight aria-hidden="true" />
          </a>
          <a href="/work/" className="btn-secondary !px-6 !py-3 text-base" data-track="see_work">
            See my work
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {hero.points.map((p) => (
            <li key={p} className="flex items-center gap-1.5">
              <HiCheck aria-hidden="true" className="h-4 w-4 text-success" />
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className="card animate-in shadow-sm [animation-delay:120ms]">
        <p className="text-sm font-semibold text-muted">Recently shipped</p>
        <ul className="mt-4 divide-y divide-line">
          {shipped.map((c) => (
            <li key={c.slug} className="py-4 first:pt-0 last:pb-0">
              <a href={`/work/#${c.slug}`} className="group block">
                <span className="flex items-center justify-between gap-3">
                  <span className="font-semibold text-ink group-hover:text-accent">{c.title}</span>
                  <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">{c.status}</span>
                </span>
                <span className="mt-1 block text-sm text-muted">{c.results[0]}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
