import { personalData } from "@/utils/data/personal-data";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaChartLine, FaCheckCircle, FaHandshake, FaLayerGroup, FaUsersCog, FaYoutube } from "react-icons/fa";

const services = [
  {
    icon: FaChartLine,
    title: "Custom Dashboards",
    text: "Your numbers from different tools and spreadsheets in one live dashboard, so you can see what is happening without building reports by hand.",
  },
  {
    icon: FaUsersCog,
    title: "Business Management Systems",
    text: "HR, attendance, payroll, approvals or operations software built around how your team already works, with the right access for each role.",
  },
  {
    icon: FaYoutube,
    title: "Social Media Analytics Tools",
    text: "Tools that pull revenue and performance data from platforms like YouTube, so you know what each channel earns and what you are owed.",
  },
  {
    icon: FaLayerGroup,
    title: "Full-Stack Web Apps",
    text: "From idea to a working product: design, frontend, backend, database, login and deployment, handled end to end.",
  },
];

const steps = [
  { title: "Understand", text: "We talk through your idea, your users and what the product must do." },
  { title: "Plan", text: "You get a clear scope of features and milestones before any code is written." },
  { title: "Build", text: "I build in small steps and share a working version you can try as it grows." },
  { title: "Launch", text: "I deploy it, hand over the code and guides, and fix issues after launch." },
];

function Services() {
  const quoteLink = `mailto:${personalData.email}?subject=${encodeURIComponent("Project enquiry: free quote")}`;

  return (
    <div id="services" className="my-16 lg:my-28 relative z-50">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full theme-badge text-xs font-mono uppercase tracking-widest mb-3">
          <FaHandshake className="text-theme-accent" />
          <span>Work With Me</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
          Have an idea? <span className="text-gradient-theme">I&apos;ll build the product.</span>
        </h2>
        <p className="text-sm text-[var(--text-muted)] max-w-xl mt-2">
          I take on freelance projects for clients worldwide and deliver complete, working software, not just designs or prototypes.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {services.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="glass-panel rounded-2xl p-6 border border-[var(--border-color)] hover:border-[var(--border-accent)] transition-all duration-300 group shadow-md"
          >
            <div className="p-3 w-fit rounded-xl theme-badge mb-4 group-hover:scale-110 transition-transform">
              <Icon className="text-theme-accent" size={22} />
            </div>
            <h3 className="text-lg font-extrabold text-[var(--text-main)] mb-2">{title}</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      {/* How I Work */}
      <div className="glass-panel rounded-3xl p-6 lg:p-10 border border-[var(--border-color)] shadow-2xl">
        <h3 className="text-xs font-mono font-bold text-theme-accent uppercase tracking-widest mb-6 text-center">How I Work</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map((step, index) => (
            <div key={step.title} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full btn-theme-accent flex items-center justify-center text-sm font-bold">
                {index + 1}
              </span>
              <div>
                <h4 className="text-sm font-extrabold text-[var(--text-main)] mb-1">{step.title}</h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center text-center gap-4 border-t border-[var(--border-color)] pt-8">
          <p className="text-sm text-[var(--text-muted)] max-w-lg">
            <FaCheckCircle className="inline text-emerald-400 mr-1.5 -mt-0.5" />
            Tell me what you want to build and I&apos;ll reply with a plan and a free quote.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={quoteLink}
              className="px-6 py-3 rounded-xl btn-theme-accent text-sm font-bold shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get a Free Quote
            </a>
            <a
              href={personalData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[var(--bg-card-hover)] border border-[var(--border-color)] hover:border-[var(--border-accent)] text-[var(--text-main)] text-sm font-bold transition-all duration-300 flex items-center gap-2"
            >
              <BiLogoLinkedin size={18} />
              Message on LinkedIn
            </a>
          </div>
          <p className="text-xs text-[var(--text-sub)] font-mono">{personalData.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
