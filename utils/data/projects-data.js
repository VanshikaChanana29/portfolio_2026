export const projectsData = [
  {
    id: 1,
    name: 'DocuChat — AI Document Q&A Assistant',
    category: 'AI / LLM Application',
    badge: '🤖 RAG & LangChain AI',
    timeline: '2024 - 2025',
    company: 'Personal Project',
    tools: ['Next.js', 'Node.js', 'LangChain', 'ChromaDB', 'Google Gemini API', 'TypeScript'],
    role: "Full Stack Developer",
    code: 'https://github.com/VanshikaChanana29',
    demo: '',
    youtube: '',
    image: '/projects/analytics.png',
    problem: 'Users needed a fast, reliable way to ask natural-language questions about dense PDF documents without hallucinations or tedious manual text searching.',
    solution: 'Built a RAG-based chatbot using LangChain (JS SDK) and ChromaDB to answer natural-language questions from uploaded PDFs. Designed a full document ingestion pipeline covering text extraction, chunking, and embedding generation via Gemini text-embedding-004. Implemented top-k vector similarity search and Gemini 1.5 Flash for context-grounded streaming responses.',
    impact: [
      'Context-grounded, hallucination-resistant responses',
      'Next.js frontend featuring streaming chat and inline source citations',
      'Full document ingestion pipeline with chunking & Gemini text-embedding-004'
    ],
    highlights: [
      'LangChain JS SDK & ChromaDB vector database integration',
      'Gemini 1.5 Flash & text-embedding-004 API integration',
      'Streaming chat UI with inline source citation'
    ]
  },

  {
    id: 2,
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
    id: 3,
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