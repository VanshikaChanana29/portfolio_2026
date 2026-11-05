import { companies, stats } from "@/content/site-data";

export default function Trust() {
  return (
    <section aria-label="Experience and results" className="border-y border-line bg-surface">
      <div className="container py-10">
        <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-sm text-muted">{s.label}</dt>
              <dd className="text-3xl font-bold text-ink sm:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:gap-6">
          <p className="shrink-0 text-sm font-medium text-muted">Worked with</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {companies.map((c) => (
              <li key={c.name} className="text-base font-semibold text-ink">
                {c.name}
                <span className="sr-only">, {c.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
