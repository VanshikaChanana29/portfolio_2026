/**
 * ONE FILE FOR ALL SITE CONTENT.
 *
 * Edit text, links, prices, case studies, FAQs and testimonials here.
 * Every section of the page and the "Ask Vanshika's AI" chatbot read from this file.
 *
 * Rules:
 *  - Leave a value as "" (empty) if you don't have it yet. Empty items are hidden
 *    on the site instead of showing a broken link or a fake number.
 *  - `npm run check` lists everything that is still empty or marked [ADD ...].
 */

// ---------------------------------------------------------------------------
// About you
// ---------------------------------------------------------------------------
export const person = {
  name: "Vanshika Chanana",
  shortName: "Vanshika",
  role: "Freelance Full-Stack & AI Developer",
  location: "Gurugram, India",
  timezone: "IST (UTC+5:30)",
  timezoneNote: "I work across US, UK and EU hours, with daily overlap for calls.",
  email: "vanshikachanana29@gmail.com",
  phone: "+91 93897 63574",
  photo: "/images/vanshika.webp",
  photoAlt: "Vanshika Chanana, freelance full-stack developer",
  resume: "/vanshika_chanana_resume.pdf",
  siteUrl: "https://vanshikachanana.netlify.app",
};

export const links = {
  linkedin: "https://www.linkedin.com/in/vanshikachanana",
  github: "https://github.com/VanshikaChanana29",
  // [ADD] Calendly or Cal.com link for a 15-min call. While empty, "Book a call" scrolls to the contact details.
  booking: "",
  // Click-to-chat link. Swap for a WhatsApp Business short link (wa.me/message/XXXX) to hide the number from page source.
  whatsapp: "https://wa.me/919389763574?text=Hi%20Vanshika%2C%20I%20found%20your%20portfolio%20and%20have%20a%20project%20in%20mind.",
  // Optional. Shown in the contact section only when filled in.
  upwork: "",
  fiverr: "",
};

export const availability = {
  open: true,
  // [ADD] e.g. "December 2026". While empty the badge just says "Available for new projects".
  from: "",
};

// Privacy-friendly analytics. Fill ONE of these; leave both empty to disable.
export const analytics = {
  plausibleDomain: "", // e.g. "vanshikachanana.netlify.app"
  umamiWebsiteId: "", // from cloud.umami.is
};

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------
export const hero = {
  headline: "I build custom business software, dashboards and AI tools for growing companies.",
  subheadline:
    "From idea to live product. I design, build and deploy the whole thing, and keep you updated every week.",
  points: ["Live products used every day", "Clear weekly updates", "You own the code"],
};

// ---------------------------------------------------------------------------
// Numbers. Only real, client-relevant facts.
// ---------------------------------------------------------------------------
export const stats = [
  { value: "4", label: "Apps I built that are live today" },
  { value: "200+", label: "YouTube channels managed in a revenue platform I built", short: "YouTube channels managed" },
  { value: "100+", label: "Employees using an HR system I built", short: "employees use my HRMS" },
  { value: "2+ yrs", label: "Building production software at product companies" },
];

export const companies = [
  { name: "TechBridge Consultancy Services", note: "Software Developer" },
  { name: "GoKwik", note: "Software Developer Intern" },
  { name: "Taggify", note: "Freelance client" },
];

// ---------------------------------------------------------------------------
// Services. `id` is used by the case-study filter.
// ---------------------------------------------------------------------------
export const services = [
  {
    id: "web-apps",
    title: "Full-stack web apps",
    summary: "Your product, from first version to a stable live app.",
    forWho: "Founders who need an MVP, or a business that needs a custom tool instead of another spreadsheet.",
    deliverables: [
      "Working app with login, roles and a clean, mobile-friendly UI",
      "Database and API designed to grow with you",
      "Deployed live, with the code handed over to you",
    ],
    timeline: "", // [ADD] e.g. "MVP: 4–8 weeks"
  },
  {
    id: "dashboards",
    title: "Dashboards & internal tools",
    summary: "HR systems, admin panels and revenue or analytics dashboards.",
    forWho: "Teams running operations, HR or finance from spreadsheets and chat messages.",
    deliverables: [
      "One dashboard that pulls your data together",
      "Role-based access, approvals and an audit log",
      "Exports and reports your team actually uses",
    ],
    timeline: "", // [ADD]
  },
  {
    id: "ai",
    title: "AI automation & agents",
    summary: "Chatbots on your documents, AI workflows and LLM features in your app.",
    forWho: "Companies that want AI to save real hours, not just a demo.",
    deliverables: [
      "RAG chatbot that answers from your company documents",
      "Multi-step AI workflows (research, summarise, review)",
      "LLM features added to your existing app",
    ],
    timeline: "", // [ADD]
  },
  {
    id: "backend",
    title: "Backend APIs & microservices",
    summary: "Secure, documented APIs your frontend and partners can rely on.",
    forWho: "Product teams that need a backend built, split up or made secure.",
    deliverables: [
      "REST APIs with authentication and role-based access",
      "Background jobs and queues for heavy work",
      "Docker setup and CI/CD for safe releases",
    ],
    timeline: "", // [ADD]
  },
  {
    id: "performance",
    title: "Performance fixes & production support",
    summary: "Slow pages, slow queries and production fires, fixed.",
    forWho: "Live products that are slow, unstable or need someone to look after them.",
    deliverables: [
      "Find the real cause: slow queries, CPU spikes, heavy pages",
      "Fix it and show before-and-after numbers",
      "Ongoing support on a monthly retainer",
    ],
    timeline: "", // [ADD]
    examples: "#experience", // examples live in the Experience section (e.g. the 3 s → 200 ms fix)
  },
  {
    id: "redesign",
    title: "Website redesign & maintenance",
    summary: "Your existing site made modern, fast and easy to update, then kept running.",
    forWho: "Businesses whose website or web app looks dated, loads slowly or is hard to change.",
    deliverables: [
      "Modern, mobile-friendly redesign that keeps your content and Google rankings",
      "Faster loading, plus accessibility and SEO fixes",
      "Monthly care: updates, backups, bug fixes and small changes",
    ],
    timeline: "", // [ADD]
  },
];

// ---------------------------------------------------------------------------
// Case studies (in display order)
// proof.video:       "/work/<slug>/demo.mp4" (self-hosted) or
// proof.embed:       a YouTube/Loom embed URL
// proof.screenshots: [{ src: "/work/<slug>/1.webp", alt: "..." }]
// Use ANONYMIZED data only in screenshots and videos.
// ---------------------------------------------------------------------------
export const caseStudies = [
  {
    slug: "taggify-monetization-os",
    title: "Taggify Monetization OS",
    client: "Taggify, a YouTube channel management company",
    type: "Freelance client project",
    status: "Live in production",
    services: ["dashboards", "web-apps", "backend"],
    problem:
      "Revenue for 200+ YouTube channels was reconciled in spreadsheets every month. Working out what each channel earned, which fees applied and what partners were owed took manual checking, and past months could change by mistake.",
    solution:
      "A revenue platform for the founders. It syncs channel data from the YouTube API, manages deals and revenue splits, and runs the monthly reconciliation in one place. Closed months are locked, and every change is logged.",
    features: [
      "Month-close locking, so past numbers can't change",
      "Audit log of every login and edit",
      "Deal and revenue-split management",
      "Multi-company founder dashboard",
    ],
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "YouTube API", "Docker"],
    results: [
      "Replaced spreadsheet-based monthly reconciliation",
      "200+ channels managed in one dashboard",
      "Founders see earned, received and outstanding revenue at a glance",
      // [ADD METRIC] e.g. "Month-end close: ~X days → Y hours"
    ],
    proof: {
      video: "", // [ADD] 60-sec demo with anonymized data
      embed: "",
      poster: "",
      screenshots: [], // [ADD] 3–5 anonymized screenshots
      live: "https://taggify-monetization.onrender.com/",
      liveNote: "Login required. Accounts are for the client's founders only.",
    },
  },
  {
    slug: "taggify-hrms",
    title: "Taggify HRMS",
    client: "Taggify",
    type: "Freelance client project",
    status: "Live in production",
    services: ["dashboards", "web-apps"],
    problem:
      "Attendance, leave and payroll lived in spreadsheets and chat messages. Every month-end meant chasing people and checking numbers by hand.",
    solution:
      "An HR system the whole team uses every day. Employees punch in and out with a location check, apply for leave and download payslips. HR approves requests and runs payroll from each person's CTC.",
    features: [
      "Geolocation-verified punch-in and punch-out",
      "Leave requests, approvals and balances",
      "Payroll calculated from CTC, with payslips",
      "Secure document storage on Cloudflare R2",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Cloudflare R2"],
    results: [
      "Used by 100+ employees",
      "HR no longer collects attendance by hand at month-end",
      "Employees check leave and payslips themselves instead of asking HR",
      // [ADD METRIC] e.g. "Payroll run time: X hours → Y minutes"
    ],
    proof: {
      video: "", // [ADD] 60-sec demo with fake employees
      embed: "",
      poster: "",
      screenshots: [], // [ADD] 3–5 anonymized screenshots
      live: "https://dayflow-hrms-y7mc.onrender.com/login",
      liveNote: "Login required. This is the client's live system.",
    },
  },
  {
    slug: "pdf-recognizer",
    title: "PDF Recognizer: chat with your documents",
    client: "Personal product",
    type: "AI demo you can try",
    status: "Live demo",
    services: ["ai"],
    problem:
      "Finding one answer in a long PDF means reading or searching page by page.",
    solution:
      "Upload a PDF and ask questions in plain English. Answers come from the document itself using retrieval-augmented generation (RAG), so they stay grounded in your content. The same approach powers a chatbot on your company's documents.",
    features: [
      "Upload any PDF and ask questions",
      "Answers grounded in the document",
      "Vector search with ChromaDB",
    ],
    stack: ["Python", "LangChain", "ChromaDB", "Mistral AI", "Streamlit"],
    results: [
      "Working demo anyone can try in the browser",
      "Same pipeline adapts to policies, manuals or contracts",
    ],
    proof: {
      video: "",
      embed: "",
      poster: "",
      screenshots: [], // [ADD] 1–2 screenshots
      live: "https://pdfuploadrag-wejfgxsmsebw2svulqd2pn.streamlit.app/",
      liveNote: "Free hosting. The first load may take a few seconds to wake up.",
    },
  },
  {
    slug: "ai-research-system",
    title: "AI Multi-Agent Research System",
    client: "Personal product",
    type: "AI demo you can try",
    status: "Live demo",
    services: ["ai"],
    problem:
      "Good research means searching many sources, reading them, writing a summary and checking it. That takes hours.",
    solution:
      "Four AI agents work as a team: one searches the web, one reads the sources, one writes the report and one critiques it for gaps and accuracy.",
    features: [
      "Search → reader → writer → critic pipeline",
      "Live web search with Tavily",
      "Separate critic review of every report",
    ],
    stack: ["Python", "LangChain", "Mistral AI", "Tavily", "Flask"],
    results: [
      "A research report with sources in minutes",
      "Same pattern fits market research, lead research or content briefs",
    ],
    proof: {
      video: "",
      embed: "",
      poster: "",
      screenshots: [], // [ADD] 1–2 screenshots
      live: "https://ai-research-system-3tk6.onrender.com",
      liveNote: "Free hosting. The first load may take up to a minute to wake up.",
    },
  },
];


// ---------------------------------------------------------------------------
// Why work with me
// ---------------------------------------------------------------------------
export const whyMe = [
  {
    title: "Production experience",
    text: "I've shipped software at product companies and for paying clients. My work runs live, with real users.",
  },
  {
    title: "End-to-end ownership",
    text: "Design, frontend, backend, database and deployment. One person, no hand-offs to lose details in.",
  },
  {
    title: "Clear weekly updates",
    text: "Every week you get what's done, what's next and anything I need from you. No chasing.",
  },
  {
    title: "Your code stays private",
    text: "I'm happy to sign an NDA. I never show client code or data without permission.",
  },
  {
    title: "Timezone overlap",
    text: "Based in India (IST). I keep regular overlap with US, UK and EU working hours.",
  },
  {
    title: "Support after launch",
    text: "I fix bugs in what I built after launch, and offer ongoing support if you need it.",
  },
];

// ---------------------------------------------------------------------------
// Process
// ---------------------------------------------------------------------------
export const processSteps = [
  { title: "Discovery", text: "A free 15-minute call to understand your goal, your users and your deadline." },
  { title: "Plan & estimate", text: "A written scope with milestones, timeline and a fixed quote or hourly estimate." },
  { title: "Build in milestones", text: "I build in small steps. You get a working version and an update every week." },
  { title: "Test", text: "I test each feature, and you review it before we call it done." },
  { title: "Deploy", text: "I set up hosting and launch. You get the code, access and a short guide." },
  { title: "Support", text: "Bug fixes after launch, and optional monthly support as you grow." },
];

// ---------------------------------------------------------------------------
// Tech stack. `icon` keys map to icons in components/tech-icons.js.
// ---------------------------------------------------------------------------
export const stack = [
  { group: "Frontend", items: [["React", "react"], ["Next.js", "next"], ["React Native", "react"], ["TypeScript", "ts"]] },
  { group: "Backend", items: [["Node.js", "node"], ["Python", "python"], ["FastAPI", "fastapi"], ["BullMQ", "queue"]] },
  { group: "AI", items: [["LangChain", "langchain"], ["RAG", "rag"], ["ChromaDB", "vector"], ["Gemini & Mistral", "gemini"]] },
  { group: "Databases", items: [["PostgreSQL", "postgres"], ["MongoDB", "mongo"], ["Redis", "redis"]] },
  { group: "DevOps", items: [["Docker", "docker"], ["AWS", "aws"], ["Cloudflare", "cloudflare"], ["GitHub Actions", "gha"]] },
];

// ---------------------------------------------------------------------------
// Engagement options. Prices: fill `price` with real numbers, e.g. "$1,500".
// While `price` is empty the card says "Quote after a free call".
// ---------------------------------------------------------------------------
export const engagements = [
  {
    id: "project",
    title: "Build something new",
    model: "Fixed price",
    best: "You know what you need: an MVP, a dashboard or an AI chatbot.",
    price: "", // [ADD] "Starting from $X"
    unit: "per project",
    points: ["Scope and price agreed up front", "Pay as each milestone is done", "See progress in a demo every week"],
    cta: "Start a project",
  },
  {
    id: "hourly",
    title: "Fix or change something",
    model: "Hourly",
    best: "You need small changes, bug fixes or open-ended help.",
    price: "", // [ADD] "$X"
    unit: "per hour",
    points: ["Pay only for the hours used", "Get a time report every week", "Start quickly"],
    cta: "Get it fixed",
  },
  {
    id: "retainer",
    title: "Keep it growing",
    model: "Monthly retainer",
    best: "You want ongoing features, support and maintenance.",
    price: "", // [ADD] "Starting from $X"
    unit: "per month",
    points: ["Hours reserved for you each month", "Priority response", "Steady improvements to your product"],
    cta: "Plan monthly support",
  },
];

// ---------------------------------------------------------------------------
// Testimonials. Only REAL quotes, with permission. The section stays hidden while this is empty.
// Example shape: { quote: "...", name: "Full Name", role: "Founder", company: "Company" }
// ---------------------------------------------------------------------------
export const testimonials = [
  // [ADD REAL TESTIMONIAL]
];

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------
export const faqs = [
  {
    q: "How long does a project take?",
    a: "It depends on scope. After a short call I send a written plan with milestones and a timeline, so you know before we start. Small fixes can start within days.",
  },
  {
    q: "How do you price your work?",
    a: "Three ways: a fixed price for a clear scope, hourly for smaller or open-ended work, or a monthly retainer for ongoing work. You get the quote in writing before any work begins.",
  },
  {
    q: "What do you need from me?",
    a: "Your goal, who the users are, any designs or examples you like, and access to existing systems if needed. Then about 30 minutes a week to review progress.",
  },
  {
    q: "How will we communicate?",
    a: "Email, WhatsApp or Slack, whichever you prefer, plus video calls on Google Meet or Zoom. You get a written update every week. Code lives in a GitHub repo you can see.",
  },
  {
    q: "Who owns the code?",
    a: "You do. Once the final payment is made, the code, designs and accounts are yours.",
  },
  {
    q: "Will you sign an NDA?",
    a: "Yes. I'm happy to sign your NDA before we discuss details. I never share client code or data.",
  },
  {
    q: "Can you redesign or maintain my existing website?",
    a: "Yes. I can modernise an existing site or web app without losing your content or search rankings, fix speed and mobile issues, and look after it every month with updates, backups and small changes.",
  },
  {
    q: "What happens after launch?",
    a: "I fix bugs in what I built for an agreed period after launch, set out in the proposal. For new features and ongoing care, there's a monthly retainer.",
  },
  {
    q: "You're in India. What about timezones?",
    a: "I'm on IST (UTC+5:30) and keep regular overlap with US, UK and EU working hours for calls and quick replies.",
  },
  {
    q: "How do payments work?",
    a: "Projects are paid in milestones, so you only pay for work you've seen. I accept international bank transfer and other common payment methods, confirmed in the proposal.",
  },
];

// ---------------------------------------------------------------------------
// About, experience and education
// ---------------------------------------------------------------------------
export const about = {
  headline: "A developer who owns the result, not just the ticket.",
  paragraphs: [
    "I'm Vanshika, a full-stack and AI developer based in Gurugram, India. I build software that businesses run on every day, from revenue dashboards and HR systems to AI tools.",
    "I've worked at product companies and with freelance clients, so I know what \"done\" means: tested, deployed and easy for your team to use.",
    "You'll always know where your project stands. I reply quickly, explain things in plain English, and tell you early if something needs a decision.",
  ],
};

// Full work history. Shown in the website's Experience section AND used to build the resume PDF
// (npm run resume). Wrap words in **double stars** to make them bold.
export const experience = [
  {
    role: "Freelance Full-Stack Developer",
    company: "Taggify",
    period: "Jul 2026 – Present",
    location: "Remote",
    projects: [
      {
        name: "Taggify Monetization OS — YouTube Revenue & Rights Platform",
        stack: "Next.js 15, TypeScript, Tailwind CSS, Python, FastAPI, PostgreSQL, YouTube API, Docker, Render, Cloudflare R2",
        link: "https://taggify-monetization.onrender.com/",
        points: [
          "Built the founders' revenue platform for **200+ YouTube channels**, replacing spreadsheet-based monthly reconciliation.",
          "Daily sync of channel revenue and performance from the YouTube API, plus bulk channel import. Upload a CMS partner's monthly statement and get a channel-by-channel reconciliation.",
          "Deal management for content owners and brand partners: contract terms, installments and revenue splits, with fee slabs and tax applied automatically before revenue is shared.",
          "**Month-close locking** so closed periods can't change, and an **audit log** of every login and edit. **Multi-company founder dashboard** with fully separated data per company, showing earned, received and outstanding revenue.",
          "Money stored as exact decimals with currency (never floating point). Secure login with httpOnly session cookies and lockout after failed attempts. Web and API deployed together as one Docker service on Render.",
        ],
      },
      {
        name: "Taggify HRMS — HR, Attendance & Payroll System",
        stack: "React, Vite, Node.js, Express.js, MongoDB, JWT, Cloudflare R2, Brevo, Render",
        link: "https://dayflow-hrms-y7mc.onrender.com/login",
        points: [
          "Built the HR system the company runs on, used by **100+ employees**. It replaced spreadsheets and chat messages for attendance, leave and payroll.",
          "**Geolocation-verified punch-in/out** with a Work From Home mode. Leave requests and approvals, with monthly earned leave and balances calculated automatically.",
          "**Monthly payroll calculated from CTC**, with self-service payslips. Salary advances, reimbursements and office expenses tracked in one place.",
          "**Notification integration:** transactional email via the Brevo HTTP API plus in-app notifications for approvals and updates. Birthday reminders and Employee of the Month certificates.",
          "Role-based access for HR and employees, employee records and documents stored securely on Cloudflare R2, and all times handled in IST.",
        ],
      },
    ],
  },
  {
    role: "Software Developer",
    company: "TechBridge Consultancy Services",
    period: "Aug 2025 – Present",
    location: "Gurugram",
    projects: [
      {
        name: "ObservaX — Enterprise ITSM Platform",
        stack: "Next.js, Redux Toolkit, Node.js, Express.js, Microservices, API Gateway, Micro-frontends",
        points: [
          "Contributed to the architecture of ObservaX, a 9-tool IT service management platform aligned with ITIL v4: **microservices behind an API gateway**, with **JWT authentication and role-based access control**.",
          "Owned full-stack development of **5 of the 9 tools**, from requirement analysis and API/database design to UI, code reviews and production deployment.",
          "Architected the **Release Management module**: multi-stage approval workflows, interactive deployment calendars and real-time release dashboards, built as micro-frontends for independent deployment.",
          "Designed REST APIs with structured validation and error handling, keeping data consistent across tools.",
        ],
      },
      {
        name: "Audio Voice Dialler System — Ericsson",
        stack: "MongoDB, Express.js, React.js, Node.js",
        points: [
          "Resolved recurring **100% CPU incidents** on a live production system by tracing them to slow database queries and optimizing them (indexing and query restructuring). This cut query time from **~3 s to ~200 ms**.",
          "Triaged production incidents by severity and shipped hotfixes and enhancements without disrupting live operations.",
        ],
      },
      {
        name: "Remote Management System — Apache Guacamole",
        stack: "JWT, RBAC, RDP/SSH",
        points: [
          "Refactored legacy session-handling logic to give zero-install, browser-based RDP/SSH access to distributed machines, secured with JWT authentication and RBAC.",
        ],
      },
    ],
  },
  {
    role: "Software Developer Intern",
    company: "GoKwik",
    period: "Aug 2024 – Jul 2025",
    location: "Gurugram",
    points: [
      "Built key Shopify app modules for GoKwik's checkout, including the **Side Cart**, **payment flow**, dashboard UI and login flow, using reusable components.",
      "Built REST APIs and frontend–backend integrations with React.js, Node.js and Express.js, including authentication flows and consistent API contracts.",
      "Fixed critical production issues, including bundle-size and lazy-loading optimizations that reduced page load time.",
    ],
  },
];

// Personal projects as listed on the resume
export const projects = [
  {
    name: "PDF Recognizer — RAG Document Q&A",
    stack: "Python, LangChain, ChromaDB, Mistral AI, Streamlit",
    link: "https://pdfuploadrag-wejfgxsmsebw2svulqd2pn.streamlit.app/",
    points: [
      "Upload a PDF and ask questions in plain English. Text extraction, chunking, embeddings and vector search in ChromaDB, with Mistral AI giving answers grounded in the document.",
    ],
  },
  {
    name: "AI Multi-Agent Research System",
    stack: "Python, LangChain, Mistral AI, Tavily, Flask, SQLite",
    link: "https://ai-research-system-3tk6.onrender.com",
    points: [
      "Four-agent pipeline (search → reader → writer → critic) that searches the web, reads the sources, writes a report and has a separate critic review it. Past reports are saved for replay.",
    ],
  },
];

// Full skills list (website Experience section + resume)
export const skills = [
  ["Languages", "JavaScript (ES6+), TypeScript, Python"],
  ["Frontend", "React.js, Next.js, React Native, Redux Toolkit, Tailwind CSS, Micro-frontends"],
  ["Backend", "Node.js, Express.js, FastAPI, REST APIs, Microservices, BullMQ, JWT / RBAC"],
  ["Databases", "PostgreSQL, MongoDB, Redis"],
  ["AI / LLM", "LangChain, RAG, ChromaDB, Gemini API, Mistral AI, Multi-agent workflows, Prompt engineering"],
  ["DevOps & Cloud", "Docker, AWS, Cloudflare (R2), GitHub Actions, Render, Netlify, Git"],
];

export const resumeSummary =
  "Full-stack developer with 2+ years building production software at product companies and for freelance clients. I build and ship business systems end to end, from database and APIs to UI and deployment. Recent work: a YouTube revenue platform managing 200+ channels and an HR and payroll system used by 100+ employees. I also build AI features with LangChain, RAG and LLM APIs.";

export const education = [
  {
    title: "B.Tech, Computer Science and Engineering",
    place: "Chandigarh Group of Colleges, Landran",
    period: "2021 – 2025",
    detail: "CGPA: 8.5",
  },
];

export const volunteering = [
  {
    title: "Technical Core Member (Frontend)",
    place: "GDSC, CGC Landran",
    period: "Jun 2022 – Jun 2023",
    detail: "Ran React.js and frontend workshops for 100+ students and helped organize tech events attended by 500+ students.",
  },
];

// ---------------------------------------------------------------------------
// SEO
// ---------------------------------------------------------------------------
export const seo = {
  title: "Vanshika Chanana | Freelance Full-Stack & AI Developer (Next.js, India)",
  description:
    "Freelance full-stack developer in India building custom web apps, dashboards and AI chatbots for startups and small businesses in the US, UK and EU. Next.js, Node.js, Python, RAG.",
  keywords: [
    "freelance full-stack developer",
    "Next.js developer India",
    "AI chatbot developer",
    "RAG chatbot developer",
    "freelance React developer",
    "dashboard developer",
    "custom business software",
    "hire Node.js developer",
    "website redesign",
    "website maintenance",
  ],
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
export const bookingHref = links.booking || "#contact";
export const availabilityText = availability.open
  ? `Available for new projects${availability.from ? ` from ${availability.from}` : ""}`
  : "Fully booked. Join the waitlist";
