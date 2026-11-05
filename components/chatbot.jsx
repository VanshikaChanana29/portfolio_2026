"use client";

import { useEffect, useRef, useState } from "react";
import { HiChatBubbleLeftRight, HiPaperAirplane, HiXMark } from "react-icons/hi2";
import {
  availabilityText,
  bookingHref,
  caseStudies,
  engagements,
  experience,
  faqs,
  links,
  person,
  processSteps,
  services,
  stack,
} from "@/content/site-data";
import { track } from "@/lib/track";

// A small, fast, rule-based assistant. Every answer is built from content/site-data.js,
// so it stays in sync with the page and never makes things up.
const faq = (start) => faqs.find((f) => f.q.toLowerCase().startsWith(start))?.a ?? "";
const bookLink = { label: links.booking ? "Book a free 15-min call" : "See contact details", href: bookingHref };

const intents = [
  {
    keys: ["book", "call", "meeting", "schedule", "calendly", "talk"],
    answer: () => ({
      text: links.booking
        ? "You can pick a time for a free 15-minute call. We'll talk about your goal, timeline and budget, and there's no obligation."
        : "The quickest way is email or WhatsApp, both in the Contact section. Share a few details and Vanshika will reply within one working day to set up a free 15-minute call.",
      links: [bookLink],
    }),
  },
  {
    keys: ["price", "pricing", "cost", "rate", "budget", "charge", "fee", "hourly", "retainer", "fixed", "expensive", "cheap"],
    answer: () => ({
      text:
        "There are three ways to work together:\n\n" +
        engagements.map((e) => `• ${e.title}: ${e.price ? `from ${e.price} ${e.unit}` : "quote after a free call"}. ${e.best}`).join("\n") +
        "\n\nYou always get a written quote before any work starts.",
      links: [{ label: "See pricing", href: "#pricing" }, bookLink],
    }),
  },
  {
    keys: ["available", "availability", "start", "free", "capacity", "busy", "when can"],
    answer: () => ({ text: `${availabilityText}. ${person.timezoneNote}`, links: [bookLink] }),
  },
  {
    keys: ["service", "offer", "build", "help", "do you do", "what can"],
    answer: () => ({
      text: "Vanshika can help with:\n\n" + services.map((s) => `• ${s.title}: ${s.summary}`).join("\n"),
      links: [{ label: "See services", href: "#services" }],
    }),
  },
  {
    keys: ["ai", "rag", "chatbot", "llm", "agent", "gpt", "automation", "langchain", "mistral", "gemini"],
    answer: () => {
      const ai = services.find((s) => s.id === "ai");
      const demos = caseStudies.filter((c) => c.services.includes("ai"));
      return {
        text:
          `${ai.title}: ${ai.summary}\n\n` +
          ai.deliverables.map((d) => `• ${d}`).join("\n") +
          "\n\nDemos you can try:\n" +
          demos.map((c) => `• ${c.title}`).join("\n"),
        links: demos.filter((c) => c.proof.live).map((c) => ({ label: `Try ${c.title.split(":")[0]}`, href: c.proof.live })),
      };
    },
  },
  {
    keys: ["dashboard", "hr", "hrms", "payroll", "internal tool", "admin", "revenue", "youtube", "analytics"],
    answer: () => {
      const items = caseStudies.filter((c) => c.services.includes("dashboards"));
      return {
        text: "Examples of dashboards and internal tools Vanshika built:\n\n" + items.map((c) => `• ${c.title}: ${c.results[0]}`).join("\n"),
        links: items.map((c) => ({ label: c.title, href: `#${c.slug}` })),
      };
    },
  },
  {
    keys: ["project", "work", "portfolio", "case", "example", "client", "built"],
    answer: () => ({
      text: "Selected work:\n\n" + caseStudies.map((c) => `• ${c.title} (${c.status})`).join("\n"),
      links: [{ label: "See case studies", href: "#work" }],
    }),
  },
  {
    keys: ["stack", "tech", "technology", "language", "framework", "react", "next", "node", "python"],
    answer: () => ({ text: stack.map((g) => `• ${g.group}: ${g.items.map(([n]) => n).join(", ")}`).join("\n") }),
  },
  {
    keys: ["process", "how do you work", "steps", "workflow", "update"],
    answer: () => ({ text: processSteps.map((s, i) => `${i + 1}. ${s.title}: ${s.text}`).join("\n"), links: [{ label: "See process", href: "#process" }] }),
  },
  {
    keys: ["redesign", "maintenance", "maintain", "existing website", "existing site", "old website", "revamp", "update my site"],
    answer: () => {
      const s = services.find((x) => x.id === "redesign");
      return { text: `${s.title}: ${s.summary}\n\n` + s.deliverables.map((d) => `• ${d}`).join("\n"), links: [bookLink] };
    },
  },
  { keys: ["how long", "timeline", "deadline", "weeks", "fast", "quick"], answer: () => ({ text: faq("how long"), links: [bookLink] }) },
  { keys: ["nda", "confidential", "secret", "privacy"], answer: () => ({ text: faq("will you sign") }) },
  { keys: ["own", "ownership", "ip", "rights", "source code"], answer: () => ({ text: faq("who owns") }) },
  { keys: ["timezone", "time zone", "india", "us", "uk", "europe", "hours", "overlap"], answer: () => ({ text: faq("you're in india") }) },
  { keys: ["pay", "payment", "invoice", "milestone", "paypal", "wise", "bank"], answer: () => ({ text: faq("how do payments") }) },
  { keys: ["support", "maintenance", "after launch", "bug"], answer: () => ({ text: faq("what happens after") }) },
  { keys: ["need from me", "requirements", "prepare"], answer: () => ({ text: faq("what do you need") }) },
  {
    keys: ["experience", "resume", "cv", "background", "company", "years"],
    answer: () => ({
      text: experience.map((e) => `• ${e.role}, ${e.company} (${e.period})`).join("\n"),
      links: [{ label: "Download resume", href: person.resume }],
    }),
  },
  {
    keys: ["contact", "email", "reach", "hire", "whatsapp", "linkedin", "message"],
    answer: () => ({
      text: `Email: ${person.email}\nPhone: ${person.phone}\nOr use WhatsApp or LinkedIn. Vanshika replies within one working day.`,
      links: [{ label: "Email", href: `mailto:${person.email}` }, ...(links.whatsapp ? [{ label: "WhatsApp", href: links.whatsapp }] : []), { label: "LinkedIn", href: links.linkedin }],
    }),
  },
];

function reply(query) {
  const q = ` ${query.toLowerCase()} `;
  let best = null;
  let bestScore = 0;
  for (const intent of intents) {
    const score = intent.keys.reduce((n, k) => (k.length <= 3 ? (new RegExp(`\\b${k}\\b`).test(q) ? n + 1 : n) : q.includes(k) ? n + 1 : n), 0);
    if (score > bestScore) {
      best = intent;
      bestScore = score;
    }
  }
  if (best) return best.answer();
  return {
    text: "I can answer questions about services, pricing, availability, past projects, the tech stack, NDAs and how to book a call. Or send Vanshika a message directly.",
    links: [bookLink],
  };
}

const quickPrompts = ["What can you build?", "How does pricing work?", "Are you available?", "Show AI projects", "Book a call"];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: `Hi! I answer questions about ${person.shortName}'s services, pricing, availability and past work. What would you like to know?` },
  ]);
  const inputRef = useRef(null);
  const toggleRef = useRef(null);
  const logRef = useRef(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [messages]);

  const close = () => {
    setOpen(false);
    requestAnimationFrame(() => toggleRef.current?.focus());
  };

  const send = (text) => {
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [...m, { from: "user", text: q }, { from: "bot", ...reply(q) }]);
    setInput("");
    track("chatbot_question");
  };

  return (
    <div className="fixed bottom-4 right-4 z-[60] sm:bottom-6 sm:right-6">
      {!open && (
        <button
          ref={toggleRef}
          type="button"
          onClick={() => {
            setOpen(true);
            track("chatbot_open");
          }}
          className="btn-primary !rounded-full shadow-lg"
          aria-haspopup="dialog"
        >
          <HiChatBubbleLeftRight aria-hidden="true" className="h-5 w-5" />
          Ask Vanshika&apos;s AI
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-labelledby="chat-title"
          onKeyDown={(e) => e.key === "Escape" && close()}
          className="flex h-[min(560px,80vh)] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl sm:w-[380px]"
        >
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <div>
              <p id="chat-title" className="font-semibold text-ink">Ask Vanshika&apos;s AI</p>
              <p className="text-xs text-muted">Instant answers from this site</p>
            </div>
            <button type="button" onClick={close} className="btn-ghost !min-h-0 !p-2" aria-label="Close chat">
              <HiXMark aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>

          <div ref={logRef} role="log" aria-live="polite" className="flex-1 space-y-3 overflow-y-auto p-4 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={m.from === "user" ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={`max-w-[88%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 ${
                    m.from === "user" ? "rounded-br-sm bg-accent-solid text-white" : "rounded-bl-sm bg-surface-2 text-ink"
                  }`}
                >
                  {m.from === "user" && <span className="sr-only">You: </span>}
                  {m.text}
                  {m.links?.length > 0 && (
                    <span className="mt-2 flex flex-wrap gap-2">
                      {m.links.map((l) => {
                        const internal = l.href.startsWith("#");
                        return (
                          <a
                            key={l.href + l.label}
                            href={l.href}
                            {...(internal ? { onClick: close } : { target: "_blank", rel: "noopener" })}
                            data-track={l.href === bookingHref ? "book_call" : undefined}
                            data-track-label="chatbot"
                            className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold text-accent hover:border-accent"
                          >
                            {l.label}
                          </a>
                        );
                      })}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2 overflow-x-auto border-t border-line px-3 py-2">
            {quickPrompts.map((p) => (
              <button key={p} type="button" onClick={() => send(p)} className="shrink-0 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-muted hover:text-ink">
                {p}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex gap-2 border-t border-line p-3"
          >
            <label htmlFor="chat-input" className="sr-only">Your question</label>
            <input
              ref={inputRef}
              id="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, pricing…"
              autoComplete="off"
              className="field !mt-0 flex-1 !py-2"
            />
            <button type="submit" className="btn-primary !px-3" aria-label="Send">
              <HiPaperAirplane aria-hidden="true" className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
