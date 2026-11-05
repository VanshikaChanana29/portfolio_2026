// Lists content that still needs real values. Run: npm run check
// Runs automatically before every build (warnings only, never fails the build).
import * as d from "../content/site-data.js";

const todo = [];
const need = (cond, msg) => !cond && todo.push(msg);

need(d.links.booking, "links.booking: Calendly/Cal.com link (until then, 'Book a call' goes to the contact details)");
need(d.availability.from, "availability.from: month you're available, e.g. 'December 2026'");
need(d.analytics.plausibleDomain || d.analytics.umamiWebsiteId, "analytics: Plausible domain or Umami website ID");
d.services.forEach((s) => need(s.timeline, `services["${s.id}"].timeline: typical timeline`));
d.engagements.forEach((e) => need(e.price, `engagements["${e.title}"].price: starting price`));
need(d.testimonials.length, "testimonials: at least one real testimonial (section is hidden until then)");
d.caseStudies
  .filter((c) => !c.nda)
  .forEach((c) => {
    const p = c.proof;
    if (c.slug.startsWith("taggify")) need(p.video || p.embed, `caseStudies["${c.slug}"].proof.video: 60-sec demo (anonymized)`);
    need(p.screenshots?.length, `caseStudies["${c.slug}"].proof.screenshots: screenshots in public/work/${c.slug}/`);
  });

if (todo.length) {
  console.warn(`\n⚠  ${todo.length} placeholder(s) still to fill in content/site-data.js:\n`);
  todo.forEach((t) => console.warn("   • " + t));
  console.warn("");
} else {
  console.log("✓ All placeholders filled.");
}
