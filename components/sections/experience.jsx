import { HiExternalLink } from "react-icons/hi";
import RichText from "@/components/rich-text";
import { experience, person, skills } from "@/content/site-data";

// Full work history: the same content as the resume PDF.
export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section border-t border-line bg-surface">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title" className="h2">Where I've built and shipped</h2>
          </div>
          <a href={person.resume} target="_blank" rel="noopener" className="btn-secondary" data-track="resume_download" data-track-label="experience">
            Download resume (PDF)
          </a>
        </div>

        <ol className="mt-10 space-y-6">
          {experience.map((job) => (
            <li key={job.company + job.role} className="rounded-2xl border border-line bg-bg p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="text-xl font-bold">{job.role}</h3>
                <p className="text-sm font-semibold text-muted">{job.period}</p>
              </div>
              <p className="mt-1 font-medium text-accent">
                {job.company}
                {job.location && <span className="text-muted"> · {job.location}</span>}
              </p>

              {job.points && <Points points={job.points} />}

              {job.projects?.map((p) => (
                <div key={p.name} className="mt-6 border-t border-line pt-5 first-of-type:mt-5">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h4 className="font-semibold text-ink">{p.name}</h4>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline" data-track="open_live_app" data-track-label={p.name}>
                        Live
                        <HiExternalLink aria-hidden="true" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted">{p.stack}</p>
                  <Points points={p.points} />
                </div>
              ))}
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-2xl border border-line bg-bg p-6 sm:p-8">
          <h3 className="text-lg font-bold">Technical skills</h3>
          <dl className="mt-4 grid gap-x-8 gap-y-3 md:grid-cols-2">
            {skills.map(([group, list]) => (
              <div key={group}>
                <dt className="text-sm font-semibold text-ink">{group}</dt>
                <dd className="text-sm text-muted">{list}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Points({ points }) {
  return (
    <ul className="mt-3 space-y-2 text-muted">
      {points.map((pt) => (
        <li key={pt} className="flex gap-2.5">
          <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>
            <RichText text={pt} />
          </span>
        </li>
      ))}
    </ul>
  );
}
