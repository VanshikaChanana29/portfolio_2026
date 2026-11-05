import { processSteps, whyMe } from "@/content/site-data";

export function WhyMe() {
  return (
    <section aria-labelledby="why-title" className="section container">
      <p className="eyebrow">Why work with me</p>
      <h2 id="why-title" className="h2">Less managing, more shipping</h2>
      <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {whyMe.map((w) => (
          <li key={w.title} className="border-l-2 border-accent pl-4">
            <h3 className="font-semibold">{w.title}</h3>
            <p className="mt-1.5 text-muted">{w.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="section border-y border-line bg-surface">
      <div className="container">
        <p className="eyebrow">Process</p>
        <h2 id="process-title" className="h2">How a project runs</h2>
        <p className="lead">Simple and predictable. You always know what's done and what's next.</p>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-line bg-bg p-6">
              <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-full bg-accent-soft text-sm font-bold text-accent">
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
