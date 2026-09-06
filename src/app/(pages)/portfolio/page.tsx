"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Status = "deployed" | "live" | "running" | "repo" | "progress";

type Project = {
  slug: string;
  title: string;
  year: string;
  status: Status;
  statusLabel: string;
  /** The business outcome, in the client's words — not the technology. */
  outcome: string;
  description: string;
  /** The judgement call, and what it cost. This is the part interviewers read. */
  decision: string;
  tech: string[];
  /**
   * A real screenshot in /public. Null renders the honest fallback panel
   * instead — never a fabricated screenshot.
   */
  image: string | null;
  imageAlt: string;
  /** Shown under a real image when the scope needs saying out loud. */
  imageNote?: string;
  /** Label above the panel: says what the reader is looking at. */
  panelLabel: string;
  /** YouTube id. Null hides the play overlay — no promise of a video that doesn't exist. */
  videoId: string | null;
  caseStudy: string | null;
  github: string | null;
  /** Filled button goes to the case study when there is one, else to the live demo. */
  primaryIsCaseStudy?: boolean;
  live: string | null;
  liveLabel?: string;
};

/**
 * Two button shapes, defined once. The first available action on a row is the
 * filled one; everything after it is outlined.
 *
 * Sizing follows the usual control guidance rather than being eyeballed:
 * 44px minimum height (iOS HIG / Material's 48dp floor), 14px label — the
 * bottom of the comfortable range for an action people are meant to click —
 * 600 weight so it holds its own on a saturated fill, and 20px of horizontal
 * padding so the label never crowds the edge.
 */
const BTN_BASE =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 min-h-[44px] " +
  "text-[14px] font-semibold tracking-[0.01em] transition-colors duration-200 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-ground";

const BTN_PRIMARY = `${BTN_BASE} bg-accent hover:bg-accent-hover text-white`;
const BTN_SECONDARY = `${BTN_BASE} bg-surface hover:bg-[#2a2929] text-ink border border-line`;

const STATUS_COLOR: Record<Status, string> = {
  deployed: "text-ok",
  live: "text-ok",
  running: "text-ok",
  repo: "text-muted",
  progress: "text-warn",
};

const STATUS_DOT: Record<Status, string> = {
  deployed: "bg-ok",
  live: "bg-ok",
  running: "bg-ok",
  repo: "bg-dim",
  progress: "bg-warn",
};

const projects: Project[] = [
  {
    slug: "whatsapp-ai-receptionist",
    title: "WhatsApp AI Receptionist",
    year: "2026",
    status: "deployed",
    statusLabel: "Deployed",
    outcome: "Clinics stop losing after-hours bookings — the agent books them 24/7.",
    description:
      "Answers patient questions strictly from the clinic's knowledge base and books appointments end-to-end against real-time Google Sheets availability. Google ADK with tool calling, a guardrail that blocks repeat requests from the same number, and full trace and span observability.",
    decision:
      "Owner approval runs on the owner's own phone, not a dashboard. Nobody had to learn a new tool for the agent to be trusted.",
    tech: [
      "Google ADK",
      "GPT-4o-mini",
      "LiteLLM",
      "FastAPI",
      "WhatsApp Cloud API",
      "Google Sheets",
      "Docker",
      "Render",
    ],
    image: null,
    imageAlt: "A WhatsApp conversation ending in a confirmed booking",
    panelLabel: "Example conversation",
    videoId: null,
    caseStudy: "/projects/whatsapp-ai-receptionist",
    primaryIsCaseStudy: true,
    github: "https://github.com/Shahzain-Ali/whatsapp-ai-receptionist",
    live: null,
  },
  {
    slug: "ai-tutor",
    title: "AI Tutor — Agentive Solutions Book",
    year: "2026",
    status: "live",
    statusLabel: "Live — try it",
    outcome: "Readers get grounded, cited answers instead of hunting through chapters.",
    description:
      "A live tutor embedded in a multi-book learning platform. Agentic RAG with relevance-filtered citations, bilingual replies, per-IP rate limiting, budget caps, and chat history in Postgres.",
    decision:
      "Retrieval is a tool the agent calls, not a step every request pays for. Cheaper, and the agent can say “that isn’t in the book.”",
    tech: [
      "OpenAI Agents SDK",
      "GPT-4o-mini",
      "text-embedding-3-small",
      "Qdrant Cloud",
      "FastAPI",
      "Neon Postgres",
      "Docusaurus",
      "GitHub Actions",
    ],
    image: null,
    imageAlt: "The tutor answering a question with a citation back to the chapter",
    panelLabel: "Example conversation",
    videoId: null,
    caseStudy: null,
    github: "https://github.com/Shahzain-Ali/agentive-solutions-book",
    live: "https://shahzain-ali.github.io/agentive-solutions-book/docs/n8n-mastery/lesson-01",
    liveLabel: "Try the AI Tutor",
  },
  {
    slug: "instagram-lead-capture",
    title: "Instagram Lead Capture",
    year: "2026",
    status: "running",
    statusLabel: "Running · demo business",
    outcome:
      "A comment at 11pm belongs to Instagram. A phone number with a budget attached belongs to the business. This is the path between them.",
    description:
      "A comment on a listing gets a public reply and a private DM carrying that property's real price, size and possession status — read fresh from Postgres on every reply, never cached and never remembered by the model. The conversation continues in DMs, capturing budget, purpose and timeline as they come up. When a phone number is given — or the customer tries to negotiate, or asks for a site visit — the bot falls silent for that person and Slack alerts a human.",
    decision:
      "The model once reported a captured phone number that wasn’t there, and the lead was lost silently. My first instinct was to add a prompt rule — wrong. Guarantees moved into the workflow, which now refuses that write outright.",
    tech: [
      "n8n (self-hosted)",
      "Instagram Platform API",
      "OpenAI GPT-5",
      "Supabase Postgres",
      "Slack",
      "Caddy + Let's Encrypt",
      "Oracle Cloud VM",
      "Docker",
    ],
    image: "/images/projects/ig-workflow.jpg",
    imageAlt:
      "The Instagram lead capture workflow: ingress, comment branch, DM branch and shared tail",
    imageNote:
      "Bangash Residency is a demonstration business — listings are fictional, nothing is for sale. Runs 24/7 in Instagram Tester mode against one account.",
    panelLabel: "The running workflow — 44 nodes",
    videoId: null,
    caseStudy: "/projects/instagram-lead-capture",
    primaryIsCaseStudy: true,
    github: "https://github.com/Shahzain-Ali/instagram-lead-capture",
    live: null,
  },
  {
    slug: "autoinvoice-ai",
    title: "AutoInvoice AI",
    year: "2026",
    status: "repo",
    statusLabel: "Public repo",
    outcome: "Invoice creation drops from ~15 minutes of manual work to under a minute.",
    description:
      "An agentic pipeline of three specialised agents. Pulls client data from web forms, Google Sheets or Excel, generates a PDF invoice and emails it — with no manual step in the middle.",
    decision:
      "Three narrow agents instead of one clever one. Each is testable on its own, and a bad invoice never reaches the client because delivery is a separate gate.",
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
    panelLabel: "Validation → Template → Delivery",
    videoId: null,
    caseStudy: null,
    github: "https://github.com/Shahzain-Ali/agentic-invoice-generator",
    live: null,
  },
  {
    slug: "fte-ai-employee",
    title: "FTE AI Employee",
    year: "2026",
    status: "progress",
    statusLabel: "In progress — production phase",
    outcome: "One autonomous agent covering work a full-time assistant would do.",
    description:
      "Email, social and accounting workflows behind one agent — architected with 7 MCP servers exposing 31 tools and 17 agent skills. Currently finishing the production phase and the operator dashboard.",
    decision:
      "Every sensitive action waits for a human. Autonomy stops where money and reputation start — that boundary is the product, not a limitation of it.",
    tech: ["Python", "MCP Servers", "Streamlit", "Odoo 17", "PostgreSQL", "Playwright", "Docker"],
    image: null,
    imageAlt: "The operator dashboard, in build",
    panelLabel: "Architecture — what exists today",
    videoId: null,
    caseStudy: null,
    github: null,
    live: null,
  },
];

/* -------------------------------------------------------------------------- */

function Chip({ label }: { label: string }) {
  return (
    <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.05em] text-accent-dim border border-accent-line rounded-[3px] px-[9px] py-1">
      {label}
    </span>
  );
}

function StatusPill({ project }: { project: Project }) {
  return (
    <span
      className={`font-mono inline-flex items-center gap-1.5 text-[10px] lg:text-[11px] xl:text-[11px] 2xl:text-[11px] font-medium uppercase tracking-[0.06em] ${STATUS_COLOR[project.status]}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[project.status]}`} />
      {project.statusLabel} · {project.year}
    </span>
  );
}

/**
 * The panel is the proof. It shows a real screenshot when one exists, and an
 * honestly-labelled illustration when one doesn't — never a fabricated
 * screenshot. Swapping in a real asset later is a data change, not a code
 * change: set `image` on the project.
 */
function DemoPanel({
  project,
  onPlay,
}: {
  project: Project;
  onPlay: (videoId: string) => void;
}) {
  const hasVideo = Boolean(project.videoId);

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="relative border border-line rounded-xl bg-surface-inset p-3 md:p-4 lg:p-4 xl:p-[18px] 2xl:p-[18px] flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] xl:w-[9px] xl:h-[9px] 2xl:w-[9px] 2xl:h-[9px] rounded-full bg-[#2c2b2b]" />
            <span className="w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] xl:w-[9px] xl:h-[9px] 2xl:w-[9px] 2xl:h-[9px] rounded-full bg-[#2c2b2b]" />
            <span className="w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] xl:w-[9px] xl:h-[9px] 2xl:w-[9px] 2xl:h-[9px] rounded-full bg-[#2c2b2b]" />
          </span>
          <span className="font-mono text-[9px] lg:text-[10px] xl:text-[10px] 2xl:text-[10px] font-medium uppercase tracking-[0.07em] text-faint">
            {project.panelLabel}
          </span>
        </div>

        <div className="rounded-lg bg-[#0d0c0c] p-2.5 lg:p-3 xl:p-3.5 2xl:p-3.5 overflow-x-auto">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1200}
              height={700}
              sizes="(max-width: 768px) 92vw, 55vw"
              className="w-full h-auto rounded block min-w-[300px]"
            />
          ) : (
            <div className="min-h-[180px] lg:min-h-[240px] xl:min-h-[280px] 2xl:min-h-[300px] flex flex-col items-center justify-center gap-2 text-center px-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-faint">
                Screenshot coming
              </span>
              <span className="text-[12px] leading-relaxed text-dim max-w-[320px]">
                {project.imageAlt}
              </span>
            </div>
          )}
        </div>

        {hasVideo && (
          <button
            type="button"
            onClick={() => onPlay(project.videoId as string)}
            aria-label={`Watch the ${project.title} demo`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[52px] h-[52px] lg:w-[62px] lg:h-[62px] xl:w-[62px] xl:h-[62px] 2xl:w-[62px] 2xl:h-[62px] rounded-full bg-accent-hover/95 flex items-center justify-center shadow-[0_6px_26px_rgba(0,0,0,0.65)] transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ground"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
          </button>
        )}
      </div>

      {project.imageNote && (
        <p className="text-[11px] lg:text-[12px] xl:text-[12px] 2xl:text-[12px] leading-relaxed text-faint m-0">
          {project.imageNote}
        </p>
      )}
    </div>
  );
}

function ProjectRow({
  project,
  onPlay,
}: {
  project: Project;
  onPlay: (videoId: string) => void;
}) {
  return (
    <article className="flex flex-col gap-3.5 md:flex-row md:items-center md:gap-8 lg:flex-row lg:items-center lg:gap-10 xl:flex-row xl:items-center xl:gap-[52px] 2xl:flex-row 2xl:items-center 2xl:gap-[52px]">
      {/* text column */}
      <div className="flex flex-col gap-3.5 md:basis-[42%] md:shrink-0 lg:basis-[40%] lg:shrink-0 xl:basis-[40%] xl:shrink-0 2xl:basis-[40%] 2xl:shrink-0 md:order-1 lg:order-1 xl:order-1 2xl:order-1">
        <StatusPill project={project} />

        <h3 className="m-0 text-[25px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] font-semibold text-ink leading-[1.15] tracking-[-0.01em] [text-wrap:balance]">
          {project.title}
        </h3>

        <p className="m-0 text-[14.5px] lg:text-[15px] xl:text-[15px] 2xl:text-[15px] leading-[1.5] text-accent">
          {project.outcome}
        </p>

        {/* On mobile the panel sits here — right after the promise, so the claim
            is followed immediately by the evidence. */}
        <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
          <DemoPanel project={project} onPlay={onPlay} />
        </div>

        <p className="m-0 text-[13.5px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px] leading-[1.65] text-muted [text-wrap:pretty]">
          {project.description}
        </p>

        <div className="border-l-2 border-accent-line pl-3.5 py-0.5">
          <div className="font-mono text-[9.5px] lg:text-[10px] xl:text-[10px] 2xl:text-[10px] font-medium uppercase tracking-[0.09em] text-dim mb-1">
            The decision that mattered
          </div>
          <div className="text-[12.5px] lg:text-[13px] xl:text-[13px] 2xl:text-[13px] leading-[1.55] text-[#b8b6b6]">
            {project.decision}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Chip key={t} label={t} />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2.5 mt-2">
          {project.caseStudy && (
            <Link
              href={project.caseStudy}
              className={project.primaryIsCaseStudy ? BTN_PRIMARY : BTN_SECONDARY}
            >
              Read case study
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          )}

          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={project.primaryIsCaseStudy ? BTN_SECONDARY : BTN_PRIMARY}
            >
              {project.liveLabel ?? "Try it live"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
          )}

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code on GitHub`}
              className={BTN_SECONDARY}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
              </svg>
              Code
            </Link>
          )}

          {!project.caseStudy && !project.live && !project.github && (
            <span className="font-mono py-2.5 text-[12.5px] font-medium uppercase tracking-[0.09em] text-faint">
              Write-up when it ships
            </span>
          )}
        </div>
      </div>

      {/* demo column — hidden on mobile, where it sits inside the text column above */}
      <div className="hidden md:block md:grow lg:block lg:grow xl:block xl:grow 2xl:block 2xl:grow md:min-w-0 lg:min-w-0 xl:min-w-0 2xl:min-w-0 md:order-2 lg:order-2 xl:order-2 2xl:order-2">
        <DemoPanel project={project} onPlay={onPlay} />
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */

const Portfolio = () => {
  const [openVideo, setOpenVideo] = useState<string | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const open = useCallback((videoId: string) => {
    lastFocused.current = document.activeElement as HTMLElement;
    setOpenVideo(videoId);
  }, []);

  const close = useCallback(() => {
    setOpenVideo(null);
    lastFocused.current?.focus();
  }, []);

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

  return (
    <div className="pt-10 pb-10 px-5 md:px-10 lg:px-12 xl:px-14 2xl:px-16" id="portfolio-sec">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center gap-2 mb-9 lg:mb-12 xl:mb-12 2xl:mb-[52px]">
          <h1 className="m-0 w-fit text-[20px] lg:text-[24px] xl:text-[24px] 2xl:text-[24px] font-semibold text-gray-300 border-b border-accent pb-[3px] tracking-[-0.01em]">
            Selected Work
          </h1>
          <p className="m-0 text-center text-[13px] lg:text-[13.5px] xl:text-[13.5px] 2xl:text-[13.5px] text-dim">
            Five systems. Each one is running, or honest about not being.
          </p>
        </div>

        <div className="flex flex-col gap-10 md:gap-16 lg:gap-16 xl:gap-[76px] 2xl:gap-[76px] divide-y divide-[#1c1b1b] md:divide-y-0 lg:divide-y-0 xl:divide-y-0 2xl:divide-y-0">
          {projects.map((p) => (
            <div key={p.slug} className="pt-10 first:pt-0 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0">
              <ProjectRow project={p} onPlay={open} />
            </div>
          ))}
        </div>
      </div>

      {openVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Project demo video"
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={close}
        >
          <div
            className="relative w-full max-w-[900px] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close video"
              className="absolute -top-11 right-0 w-11 h-11 inline-flex items-center justify-center text-gray-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${openVideo}?autoplay=1&rel=0`}
              title="Project demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
