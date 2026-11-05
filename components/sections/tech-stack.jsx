import { techIcons } from "@/components/tech-icons";
import { stack } from "@/content/site-data";

export default function TechStack() {
  return (
    <section aria-labelledby="stack-title" className="section container">
      <p className="eyebrow">Tech stack</p>
      <h2 id="stack-title" className="h2">Proven tools, chosen for your project</h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {stack.map((g) => (
          <div key={g.group} className="card !p-5">
            <h3 className="text-sm font-semibold text-muted">{g.group}</h3>
            <ul className="mt-4 space-y-3">
              {g.items.map(([name, key]) => {
                const Icon = techIcons[key];
                return (
                  <li key={name} className="flex items-center gap-3 font-medium">
                    {Icon && <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-accent" />}
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
