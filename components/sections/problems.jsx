import { HiArrowRight } from "react-icons/hi";
import { problems } from "@/content/site-data";

export default function Problems() {
  return (
    <section aria-labelledby="problems-title" className="section container">
      <p className="eyebrow">Sound familiar?</p>
      <h2 id="problems-title" className="h2">Where growing businesses lose time</h2>
      <p className="lead">Most of it isn't hard work. It's the same manual work, repeated every week.</p>

      <ul className="mt-10 grid gap-5 md:grid-cols-2">
        {problems.map((p) => (
          <li key={p.title} className="card flex flex-col">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 flex-1 text-muted">{p.text}</p>
            <p className="mt-4 flex items-start gap-2 border-t border-line pt-4 text-sm font-semibold text-ink">
              <HiArrowRight aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {p.fix}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
