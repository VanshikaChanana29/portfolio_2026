import { HiChevronDown } from "react-icons/hi";
import { about, education, faqs, person, volunteering } from "@/content/site-data";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section container">
      <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
        <img
          src={person.photo}
          alt={person.photoAlt}
          width="560"
          height="747"
          loading="lazy"
          decoding="async"
          className="aspect-[3/4] w-full max-w-[280px] rounded-2xl border border-line object-cover"
        />
        <div>
          <p className="eyebrow">About</p>
          <h1 id="about-title" className="mt-2 text-4xl font-bold leading-[1.1] sm:text-5xl">{about.headline}</h1>
          <div className="mt-5 max-w-prose space-y-4 text-lg text-muted">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-muted">Education & community</h3>
            <ul className="mt-3 grid gap-4 sm:grid-cols-2">
              {[...education, ...volunteering].map((e) => (
                <li key={e.title}>
                  <p className="font-semibold text-ink">{e.title}</p>
                  <p className="text-sm text-muted">
                    {e.place} · {e.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <a href="/work/" className="btn-secondary mt-8">
            See my work
          </a>
        </div>
      </div>
    </section>
  );
}

// Native <details> accordion: keyboard accessible, works without JavaScript.
export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section border-t border-line bg-surface">
      <div className="container">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-title" className="h2">Questions clients ask</h2>
        <div className="mt-8 grid items-start gap-4 md:grid-cols-2">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-line bg-bg transition-colors duration-150 hover:border-accent open:border-accent"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 p-5 text-left font-semibold text-ink [&::-webkit-details-marker]:hidden">
                <span
                  aria-hidden="true"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-line text-sm font-bold text-accent transition-colors duration-150 group-open:border-accent-solid group-open:bg-accent-solid group-open:text-white"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">{f.q}</span>
                <HiChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 text-muted md:pl-[4.25rem]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
