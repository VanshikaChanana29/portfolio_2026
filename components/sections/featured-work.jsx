import { HiArrowRight, HiCheck } from "react-icons/hi";
import { caseStudies } from "@/content/site-data";

export default function FeaturedWork() {
  return (
    <section aria-labelledby="featured-title" className="section container">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Success stories</p>
          <h2 id="featured-title" className="h2">Software businesses run on every day</h2>
        </div>
        <a href="/work/" className="btn-secondary" data-track="see_work" data-track-label="home_featured">
          See all work
        </a>
      </div>

      <ul className="mt-10 grid gap-5 lg:grid-cols-2">
        {caseStudies.slice(0, 2).map((c) => (
          <li key={c.slug} className="card flex flex-col">
            <span className="w-fit rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">{c.status}</span>
            <h3 className="mt-4 text-xl font-bold">{c.title}</h3>
            <p className="mt-1 text-sm text-muted">{c.client}</p>
            <ul className="mt-5 flex-1 space-y-2 text-sm">
              {c.results.slice(0, 3).map((r) => (
                <li key={r} className="flex gap-2">
                  <HiCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  {r}
                </li>
              ))}
            </ul>
            <a href={`/work/#${c.slug}`} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
              Read the full story
              <HiArrowRight aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
