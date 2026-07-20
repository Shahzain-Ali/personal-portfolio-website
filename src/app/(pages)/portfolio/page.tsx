import React from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";

type Project = {
  title: string;
  outcome: string;
  description: string;
  tech: string[];
  github: string | null;
  live: string | null;
  liveLabel?: string;
};

const projects: Project[] = [
  {
    title: "WhatsApp AI Receptionist",
    outcome: "Clinics stop losing after-hours bookings — the agent books them 24/7.",
    description:
      "An AI receptionist on WhatsApp that answers patient questions strictly from the clinic's knowledge base and books appointments end-to-end against real-time Google Sheets availability. Built on Google ADK with tool calling, a double-booking guardrail, an optional human-approval mode, and full trace/span observability.",
    tech: [
      "Google ADK",
      "OpenAI GPT-4o-mini",
      "LiteLLM",
      "FastAPI",
      "WhatsApp Cloud API",
      "Google Sheets",
      "Docker",
      "Render",
    ],
    github: "https://github.com/Shahzain-Ali/whatsapp-ai-receptionist",
    live: null,
  },
  {
    title: "FTE AI Employee",
    outcome: "One autonomous agent covering work a full-time assistant would do.",
    description:
      "An autonomous AI employee that manages email, social media (Facebook, Instagram, X, LinkedIn), and accounting workflows 24/7 — architected with 7 MCP servers exposing 31 tools and 17 agent skills, with human-in-the-loop approval for every sensitive action.",
    tech: [
      "Python",
      "Claude Code",
      "MCP Servers",
      "Streamlit",
      "Odoo 17",
      "PostgreSQL",
      "Playwright",
      "Docker",
    ],
    github: "https://github.com/Shahzain-Ali/ai-employee-fte-system",
    live: null,
  },
  {
    title: "AI Tutor — Agentive Solutions Book",
    outcome: "Readers get grounded, cited answers instead of hunting through chapters.",
    description:
      "A live AI tutor embedded in a multi-book learning platform. Agentic RAG: retrieval is a tool the agent calls only when needed, so answers stay grounded in the book with relevance-filtered citations. Bilingual replies, per-IP rate limiting, budget caps, and chat history in Postgres.",
    tech: [
      "OpenAI Agents SDK",
      "GPT-4o-mini",
      "text-embedding-3-small",
      "Qdrant Cloud",
      "FastAPI",
      "Docusaurus",
      "Neon Postgres",
      "GitHub Actions",
    ],
    github: "https://github.com/Shahzain-Ali/agentive-solutions-book",
    live: "https://shahzain-ali.github.io/agentive-solutions-book/",
    liveLabel: "Try the AI Tutor",
  },
  {
    title: "AutoInvoice AI",
    outcome: "Invoice creation drops from ~15 minutes of manual work to under a minute.",
    description:
      "An agentic invoice pipeline with 3 specialized agents (Validation → Template → Delivery). Pulls client data from web forms, Google Sheets, or Excel, generates a PDF invoice, and emails it — end-to-end in under 60 seconds with zero manual steps.",
    tech: [
      "Python",
      "FastAPI",
      "OpenAI Agents SDK",
      "GPT-4o-mini",
      "Streamlit",
      "n8n",
      "Jinja2",
      "pdfkit",
    ],
    github: "https://github.com/Shahzain-Ali/agentic-invoice-generator",
    live: null,
  },
  {
    title: "Agentic Todo Evolution",
    outcome: "Shows the same product rebuilt three ways — console, web, then agent.",
    description:
      "A full-stack task manager evolving through 3 phases: Console → Web App → AI Chatbot. Phase 3 adds an AI assistant using the MCP protocol for natural-language task management, with auth and a modern UI.",
    tech: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "OpenAI Agents SDK",
      "Better Auth",
      "ChatKit",
    ],
    github: "https://github.com/Shahzain-Ali/agentic-todo-evolution",
    live: null,
  },
  {
    title: "FurniStore E-Commerce",
    outcome: "A production storefront: catalog, payments, auth, and shipping.",
    description:
      "Modern furniture e-commerce platform with product management via headless CMS, Stripe payments, authentication, shipping rates, and internationalization.",
    tech: [
      "Next.js 15",
      "Sanity CMS",
      "Stripe",
      "Clerk",
      "ShipEngine",
      "Tailwind CSS",
      "next-intl",
    ],
    github: "https://github.com/Shahzain-Ali/furnistore-ecommerce-nextjs",
    live: null,
  },
];

const Portfolio = () => {
  return (
    <div className="pt-10 pb-10 customsm:px-2 smm:px-2 overflow-x-hidden" id="portfolio-sec">
      <h1 className="mx-auto my-0 text-gray-300 text-center w-16 smm:w-20 sm:w-20 md:w-24 lg:w-24 border-b border-[#FD6F00] text-lg smm:text-xl sm:text-xl md:text-2xl lg:text-2xl">
        Portfolio
      </h1>
      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] md:w-[85%] mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1f1e1e] rounded-lg p-5 flex flex-col justify-between transition-transform duration-[0.2s] hover:-translate-y-2 hover:shadow-secondary"
          >
            <div>
              <h2 className="text-gray-200 text-[1.1rem] font-semibold mb-1">
                {project.title}
              </h2>
              <p className="text-[#FD6F00] text-[12px] leading-snug mb-3">
                {project.outcome}
              </p>
              <p className="text-gray-400 text-[13px] leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-[#2a2929] text-[#FD6F00] px-2 py-[2px] rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 mt-auto">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-[12px] text-gray-300 border border-gray-500 px-3 py-1 rounded-md hover:bg-gray-700 hover:text-gray-50 transition-colors"
                >
                  <i className="fab fa-github"></i> GitHub
                </Link>
              )}
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-[12px] text-gray-300 bg-[#E46400] px-3 py-1 rounded-md hover:bg-[#c9492c] hover:text-gray-50 transition-colors"
                >
                  <i className="fas fa-external-link-alt"></i>{" "}
                  {project.liveLabel ?? "Live Demo"}
                </Link>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
