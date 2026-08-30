export const projectsData = [
  {
    id: 1,
    name: 'Smart PDF RAG Assistant — Document Intelligence Q&A',
    category: 'AI / LLM Application',
    badge: '🤖 RAG & Streamlit AI',
    timeline: '2024 - 2025',
    company: 'Personal AI Project',
    tools: ['Python', 'Streamlit', 'LangChain', 'ChromaDB / FAISS', 'Google Gemini API', 'PyPDF2'],
    role: "AI Engineer",
    code: 'https://github.com/VanshikaChanana29',
    demo: 'https://pdfuploadrag-wejfgxsmsebw2svulqd2pn.streamlit.app/',
    youtube: '',
    image: '/projects/analytics.png',
    problem: 'Users needed a fast, reliable way to ask natural-language questions about dense PDF documents without hallucinations or tedious manual text searching.',
    solution: 'Built a RAG-based chatbot using Streamlit, LangChain, and ChromaDB/FAISS to answer natural-language questions from uploaded PDFs. Designed a full document ingestion pipeline covering text extraction, chunking, and embedding generation via Gemini text-embedding. Implemented vector similarity search and Gemini API for context-grounded responses.',
    impact: [
      'Context-grounded, hallucination-resistant PDF query engine',
      'Streamlit web interface with real-time file upload & indexing',
      'Full document ingestion pipeline with semantic chunking & embeddings'
    ],
    highlights: [
      'LangChain & Vector Database integration for similarity search',
      'Google Gemini API integration for context-grounded Q&A',
      'Live Streamlit Cloud deployment with interactive document querying'
    ]
  },

  {
    id: 2,
    name: 'AI Multi-Agent Autonomous Research System',
    category: 'AI / Autonomous Agents',
    badge: '🧠 Multi-Agent Autonomous Pipeline',
    timeline: '2025',
    company: 'Personal AI Project',
    tools: ['Python', 'Mistral AI', 'LangChain', 'Tavily Search API', 'BeautifulSoup', 'SQLite', 'Flask / HTML5'],
    role: "AI Engineer",
    code: 'https://github.com/VanshikaChanana29',
    demo: 'https://ai-research-system-3tk6.onrender.com',
    youtube: '',
    image: '/projects/analytics.png',
    problem: 'Conducting in-depth technical or web research manually requires querying multiple sources, scraping web pages, synthesizing findings, and verifying accuracy.',
    solution: 'Architected a multi-agent autonomous intelligence engine powered by Mistral AI featuring a 4-stage pipeline: Search Agent (Tavily), Reader Agent (BeautifulSoup Web Scraper), Writer Chain (Synthesizer), and Critic Chain (Independent Quality Evaluator). Integrated SQLite persistence for historical research reports.',
    impact: [
      'Automated end-to-end deep web research with real-time status tracking',
      'Dual report generation: full research breakdown & independent critic review',
      'SQLite database integration for saving & replaying past research reports'
    ],
    highlights: [
      '4-Stage autonomous multi-agent pipeline (Search, Read, Write, Critic)',
      'Tavily Web Search & BeautifulSoup scraping integration',
      'Mistral AI LLM synthesis & independent critic review chain',
      'Render deployment with live execution pipeline progress tracker'
    ]
  },

  {
    id: 3,
    name: 'ObservaX — Enterprise Release Management Module',
    category: 'Enterprise ITSM Platform',
    badge: '🏢 ITIL v4 Certified ITSM',
    timeline: 'Aug 2025 - Present',
    company: 'TechBridge Consultancy Services',
    tools: ['Next.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'Micro-frontend Architecture'],
    role: "Software Developer",
    code: 'https://github.com/VanshikaChanana29',
    demo: '',
    youtube: '',
    image: '/projects/keptel.png',
    problem: 'Enterprise client required multi-stage approval workflows, interactive deployment calendars, and real-time release dashboards for independent module deployability within a 9-tool ITSM platform.',
    solution: 'Architected the Release Management module using Next.js, Redux Toolkit, and a micro-frontend architecture for independent module deployability. Designed and integrated RESTful APIs with Node.js/Express.js backend services with structured error handling.',
    impact: [
      'Multi-stage approval workflows & interactive deployment calendars',
      'Real-time release dashboards maintaining cross-tool data consistency',
      'Micro-frontend architecture enabling independent module deployability'
    ],
    highlights: [
      'Independently owned full-stack development across 5 of 9 ObservaX tools',
      'Aligned technical design with ITIL v4-certified process standards',
      'RESTful API design with Node.js & Express.js'
    ]
  },

  {
    id: 4,
    name: 'Shopify App Modules & Checkout Enhancements',
    category: 'E-Commerce Platform',
    badge: '🛍️ Shopify App Architecture',
    timeline: 'Aug 2024 - Jul 2025',
    company: 'GoKwik Solutions Pvt. Ltd.',
    tools: ['React.js', 'Node.js', 'Express.js', 'REST API', 'Shopify API'],
    role: "Software Developer",
    code: 'https://github.com/VanshikaChanana29',
    demo: '',
    youtube: '',
    image: '/projects/scanner.png',
    problem: 'Fast-growing e-commerce merchants required highly responsive, low-latency checkout, side-cart, and payment integrations with minimal page load overhead.',
    solution: 'Spearheaded development of key Shopify app modules including Dashboard UI, Login Flow, Payment Integrations, and Side Cart Components using a reusable component architecture. Shipped bundle size and lazy-loading optimizations.',
    impact: [
      'Accelerated future feature development with reusable component architecture',
      'Reduced page load times and optimized checkout experience for end users',
      'Streamlined frontend-backend communication with consistent API contracts'
    ],
    highlights: [
      'Built secure, scalable REST APIs using React.js, Node.js, and Express.js',
      'Debugged and shipped fixes for critical production issues',
      'Bundle size & lazy-loading optimizations'
    ]
  }
];