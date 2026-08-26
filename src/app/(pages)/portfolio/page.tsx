"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

type Status = "deployed" | "live" | "progress" | "repo";

type Project = {
  title: string;
  year: string;
  status: Status;
  statusLabel: string;
  outcome: string;
  description: string;
  tech: string[];
  /** Screenshot in /public. Null renders the dashed placeholder instead. */
  image: string | null;
  imageAlt: string;
  /** YouTube id. Null hides the play overlay — no promise of a video that doesn't exist. */
  videoId: string | null;
  caseStudy: string | null;
  github: string | null;
  live: string | null;
  liveLabel?: string;
};

const projects: Project[] = [
  {
    title: "WhatsApp AI Receptionist",
    year: "2026",
    status: "deployed",
    statusLabel: "Deployed",
    outcome: "Clinics stop losing after-hours bookings — the agent books them 24/7.",
    description:
      "An AI receptionist on WhatsApp that answers patient questions strictly from the clinic's knowledge base and books appointments end-to-end against real-time Google Sheets availability. Built on Google ADK with tool calling, a guardrail that blocks repeat requests from the same number, an owner-approval step that runs on the owner\u2019s own phone, and full trace/span observability.",
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
    image: null,
    imageAlt: "A WhatsApp conversation ending in a confirmed booking",
    videoId: null,
    caseStudy: "/projects/whatsapp-ai-receptionist",
    github: "https://github.com/Shahzain-Ali/whatsapp-ai-receptionist",
    live: null,
  },
  {
    title: "AI Tutor — Agentive Solutions Book",
    year: "2026",
    status: "live",
    statusLabel: "Live — try it",
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
    image: null,
    imageAlt: "The tutor answering a question with citations back to the chapter",
    videoId: null,
    caseStudy: null,
    github: "https://github.com/Shahzain-Ali/agentive-solutions-book",
    live: "https://shahzain-ali.github.io/agentive-solutions-book/docs/n8n-mastery/lesson-01",
    liveLabel: "Try the AI Tutor",
  },
  {
    title: "AutoInvoice AI",
    year: "2026",
    status: "repo",
    statusLabel: "Public repo",
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
    image: null,
    imageAlt: "A generated PDF invoice delivered by email",
    videoId: null,
    caseStudy: null,
    github: "https://github.com/Shahzain-Ali/agentic-invoice-generator",
    live: null,
  },
  {
    title: "FTE AI Employee",
    year: "2026",
    status: "progress",
    statusLabel: "In progress — production phase",
    outcome: "One autonomous agent covering work a full-time assistant would do.",
    description:
      "An AI employee that manages email, social media, and accounting workflows — architected with 7 MCP servers exposing 31 tools and 17 agent skills, with human-in-the-loop approval for every sensitive action. Currently finishing the production phase and the operator dashboard.",
    tech: ["Python", "MCP Servers", "Streamlit", "Odoo 17", "PostgreSQL", "Playwright", "Docker"],
    image: null,
    imageAlt: "The operator dashboard, in build",
    videoId: null,
    caseStudy: null,
    github: null,
    live: null,
  },
];

const statusColor: Record<Status, string> = {
  deployed: "text-green-400",
  live: "text-green-400",
  progress: "text-amber-400",
  repo: "text-gray-500",
};

const Portfolio = () => {
  const [openVideo, setOpenVideo] = useState<Project | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setOpenVideo(null);
    lastTrigger.current?.focus();
  }, []);

  // Esc to close, and lock the page behind the dialog.
  useEffect(() => {
    if (!openVideo) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [openVideo, close]);

  const openFor = (project: Project, trigger: HTMLElement) => {
    lastTrigger.current = trigger;
    setOpenVideo(project);
  };

  return (
    <div className="pt-10 pb-10 customsm:px-2 smm:px-2 overflow-x-hidden" id="portfolio-sec">
      <h1 className="mx-auto my-0 text-gray-300 text-center w-fit border-b border-[#FD6F00] text-lg smm:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
        Selected Work
      </h1>
      <p className="text-center text-gray-500 text-[13px] mt-4">
        Four systems. Everything else lives on GitHub.
      </p>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 w-[90%] md:w-[85%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%] max-w-[1440px] mx-auto">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`rounded-lg p-5 flex flex-col gap-3 transition-transform duration-200 hover:-translate-y-2 hover:shadow-secondary ${
              project.status === "progress"
                ? "bg-[#1a1919] border border-dashed border-[#38352f]"
                : "bg-[#1f1e1e]"
            }`}
          >
            {/* thumbnail */}
            <div className="relative rounded-md bg-[#141313] border border-dashed border-[#3a3939] h-[116px] overflow-hidden flex items-center justify-center">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              ) : (
                <span className="text-[10.5px] text-gray-600 px-3 text-center">
                  {project.imageAlt}
                </span>
              )}

              {project.videoId && (
                <button
                  type="button"
                  onClick={(e) => openFor(project, e.currentTarget)}
                  aria-label={`Watch the ${project.title} demo`}
                  className="absolute inset-0 flex items-center justify-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00] focus-visible:ring-inset"
                >
                  <span className="w-10 h-10 rounded-full bg-[#E46400]/90 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <i className="fas fa-play text-white text-[13px] ml-[2px]" aria-hidden="true"></i>
                  </span>
                  <span className="absolute right-2 bottom-2 bg-black/75 text-gray-300 text-[10px] px-1.5 py-[1px] rounded">
                    Watch demo
                  </span>
                </button>
              )}
            </div>

            {/* meta */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-500">{project.year}</span>
              <span className={`inline-flex items-center gap-1.5 text-[10px] ${statusColor[project.status]}`}>
                {project.status !== "repo" && (
                  <span className="w-[5px] h-[5px] rounded-full bg-current" aria-hidden="true" />
                )}
                {project.statusLabel}
              </span>
            </div>

            <div>
              <h2 className="text-gray-200 text-[1.1rem] font-semibold mb-1">{project.title}</h2>
              <p className="text-[#FD6F00] text-[12px] leading-snug mb-2">{project.outcome}</p>
              <p className="text-gray-400 text-[13px] leading-relaxed">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] bg-[#2a2929] text-[#FD6F00] px-2 py-[2px] rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* actions — same order on every card */}
            <div className="flex flex-wrap gap-2 mt-auto pt-1">
              {project.caseStudy && (
                <Link
                  href={project.caseStudy}
                  className="inline-flex items-center gap-1.5 text-[12px] text-white bg-[#E46400] px-3 min-h-11 md:min-h-0 md:py-1.5 rounded-md hover:bg-[#c9492c] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e0e]"
                >
                  Read case study <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
                </Link>
              )}
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 text-[12px] text-gray-300 border border-gray-500 px-3 min-h-11 md:min-h-0 md:py-1.5 rounded-md hover:bg-gray-700 hover:text-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e0e]"
                >
                  <i className="fas fa-external-link-alt text-[10px]" aria-hidden="true"></i>{" "}
                  {project.liveLabel ?? "Try it live"}
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 text-[12px] text-gray-300 border border-gray-500 px-3 min-h-11 md:min-h-0 md:py-1.5 rounded-md hover:bg-gray-700 hover:text-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e0e]"
                >
                  <i className="fab fa-github" aria-hidden="true"></i> Code
                </Link>
              )}
            </div>
          </article>
        ))}

        {/* everything that is real but off-thesis */}
        <article className="rounded-lg p-5 border border-[#262525] flex flex-col justify-center gap-4">
          <span className="text-[10px] text-gray-500 tracking-[1.1px]">ALSO ON GITHUB</span>
          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            <li>
              <p className="text-gray-300 text-[13.5px] m-0">FurniStore E-Commerce</p>
              <p className="text-gray-500 text-[11.5px] m-0">Next.js 15 · Sanity · Stripe · Clerk</p>
            </li>
            <li>
              <p className="text-gray-300 text-[13.5px] m-0">Agentic Todo Evolution</p>
              <p className="text-gray-500 text-[11.5px] m-0">Console → Web → MCP chatbot</p>
            </li>
            <li>
              <p className="text-gray-300 text-[13.5px] m-0">AI Employee Blueprint</p>
              <p className="text-gray-500 text-[11.5px] m-0">Architecture notes &amp; patterns</p>
            </li>
          </ul>
          <Link
            href="https://github.com/Shahzain-Ali?tab=repositories"
            target="_blank"
            className="inline-flex items-center gap-1.5 text-[12px] text-[#FD6F00] hover:text-[#E46400] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e0e] w-fit"
          >
            All repositories <i className="fas fa-arrow-right text-[10px]" aria-hidden="true"></i>
          </Link>
        </article>
      </section>

      {/* video modal — one instance, opened from any card */}
      {openVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${openVideo.title} demo`}
          onClick={close}
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 sm:p-6"
        >
          <div className="w-full max-w-[860px]" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-2.5 gap-3">
              <p className="text-gray-200 text-sm m-0">{openVideo.title}</p>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close the demo"
                className="w-9 h-9 rounded-md border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00]"
              >
                <i className="fas fa-xmark" aria-hidden="true"></i>
              </button>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden border border-[#2a2929] bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${openVideo.videoId}?autoplay=1&rel=0`}
                title={`${openVideo.title} demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="text-gray-500 text-[11px] mt-2 m-0">Press Esc or click outside to close.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
