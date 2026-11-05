import { links, person } from "@/content/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {person.name}. Freelance full-stack & AI developer, {person.location}.
        </p>
        <ul className="flex flex-wrap gap-5">
          <li><a className="hover:text-ink" href={`mailto:${person.email}`}>Email</a></li>
          <li><a className="hover:text-ink" href={links.linkedin} target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a className="hover:text-ink" href={links.github} target="_blank" rel="noopener">GitHub</a></li>
          <li><a className="hover:text-ink" href={person.resume} target="_blank" rel="noopener" data-track="resume_download" data-track-label="footer">Resume</a></li>
        </ul>
      </div>
    </footer>
  );
}
