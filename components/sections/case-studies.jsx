"use client";

import { useEffect, useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import ProofMedia from "@/components/proof-media";
import { caseStudies, services } from "@/content/site-data";

// Only show a filter if at least one case study uses that service.
const filters = [
  { id: "all", title: "All work" },
  ...services.filter((s) => caseStudies.some((c) => c.services.includes(s.id))).map((s) => ({ id: s.id, title: s.title })),
];

export default function CaseStudies() {
  const [active, setActive] = useState("all");

  // "See examples" links in the Services section pre-select a filter.
  useEffect(() => {
    const onClick = (e) => {
      const el = e.target.closest?.("[data-service-link]");
      if (el) setActive(el.dataset.serviceLink);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const visible = caseStudies.filter((c) => active === "all" || c.services.includes(active));

  return (
    <section id="work" aria-labelledby="work-title" className="section border-t border-line bg-surface">
      <div className="container">
        <p className="eyebrow">Case studies</p>
        <h2 id="work-title" className="h2">Real products, real results</h2>
        <p className="lead">Each one started with a business problem. Here's what I built and what changed.</p>

        <div role="group" aria-label="Filter case studies by service" className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={active === f.id}
              onClick={() => setActive(f.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === f.id ? "border-accent-solid bg-accent-solid text-white" : "border-line bg-bg text-muted hover:text-ink"
              }`}
            >
              {f.title}
            </button>
          ))}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} case studies
        </p>

        <div className="mt-10 grid gap-6">
          {visible.map((c) => (
            <CaseStudy key={c.slug} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudy({ c }) {

  return (
    <article id={c.slug} aria-labelledby={`${c.slug}-title`} className="scroll-mt-24 rounded-2xl border border-line bg-bg p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-2">
        <span className="chip">{c.type}</span>
        <span className="chip !border-transparent !bg-accent-soft !text-accent">
          {c.status}
        </span>
      </div>

      <h3 id={`${c.slug}-title`} className="mt-4 text-2xl font-bold">
        {c.title}
      </h3>
      <p className="mt-1 text-sm text-muted">{c.client}</p>

      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div className="space-y-5">
          <Block label="The problem">{c.problem}</Block>
          <Block label="What I built">{c.solution}</Block>
          <ul className="grid gap-1.5 text-sm text-muted sm:grid-cols-2">
            {c.features.map((f) => (
              <li key={f} className="flex gap-2">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="rounded-xl border border-line bg-surface p-5">
            <p className="text-sm font-semibold text-ink">Result</p>
            <ul className="mt-3 space-y-2">
              {c.results.map((r) => (
                <li key={r} className="flex gap-2 font-medium text-ink">
                  <span aria-hidden="true" className="text-success">✓</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-5 text-sm font-semibold text-ink">Tech stack</p>
          <ul className="mt-2 flex flex-wrap gap-2" aria-label="Tech stack">
            {c.stack.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>

          <ProofMedia title={c.title} slug={c.slug} proof={c.proof} />
          {c.proof.live && (
            <div className="mt-4">
              <a href={c.proof.live} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline" data-track="open_live_app" data-track-label={c.slug}>
                Open live app
                <HiExternalLink aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              {c.proof.liveNote && <p className="mt-1 text-xs text-muted">{c.proof.liveNote}</p>}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function Block({ label, children }) {
  return (
    <div>
      <p className="text-sm font-semibold text-ink">{label}</p>
      <p className="mt-1 text-muted">{children}</p>
    </div>
  );
}
