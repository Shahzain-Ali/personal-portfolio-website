import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata: Metadata = {
  title: "WhatsApp AI Receptionist",
  description:
    "A Google ADK agent that answers a clinic's WhatsApp and books appointments end to end against a live Google Sheet — with a duplicate-booking guardrail and cross-channel owner approval.",
};

const TECH = [
  "Google ADK",
  "OpenAI GPT-4o-mini",
  "LiteLLM",
  "FastAPI",
  "WhatsApp Cloud API",
  "Google Sheets API",
  "Docker",
  "Python 3.12",
];

const SECTIONS = [
  "The problem",
  "Constraints",
  "How it's built",
  "Decisions and what they cost",
  "What it does now",
  "What I'd change next",
];

const Heading = ({ n, children }: { n: string; children: React.ReactNode }) => (
  <div className="flex items-baseline gap-3 mb-4">
    <span className="text-[11px] text-[#FD6F00] font-semibold">{n}</span>
    <h2 className="text-[1.35rem] font-semibold text-gray-200 m-0">{children}</h2>
  </div>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[15px] leading-[1.75] text-[#b4b3b3] m-0">{children}</p>
);

/* A real screenshot, labelled as what it is. Never a fabricated capture.
   Written against the design tokens -- the rest of this file still uses raw
   hex and is due a conversion pass. */
const Shot = ({
  src,
  alt,
  label,
  note,
}: {
  src: string;
  alt: string;
  label: string;
  note?: string;
}) => (
  <figure className="m-0">
    <p className="font-mono text-label uppercase text-dim mb-2 m-0">{label}</p>
    <div className="bg-surface-inset border border-line rounded-lg overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1200}
        className="w-full h-auto block"
        sizes="(max-width: 768px) 100vw, 900px"
      />
    </div>
    {note && (
      <figcaption className="text-small leading-relaxed text-dim mt-2">{note}</figcaption>
    )}
  </figure>
);

const CaseStudy = () => {
  return (
    <div className="bg-[#0f0e0e] min-h-screen pb-16">
      {/* top bar */}
      <div className="flex items-center justify-between px-6 md:px-14 py-4 border-b border-[#201f1f]">
        <Link
          href="/"
          className="text-[1.2rem] font-bold bg-gradient-to-r from-[#FA6E00] to-[#E60026] text-transparent bg-clip-text"
        >
          Shahzain Ali
        </Link>
        <Link
          href="/#portfolio-sec"
          className="inline-flex items-center gap-2 text-gray-400 text-[13px] hover:text-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e0e] rounded"
        >
          <i className="fas fa-arrow-left text-[11px]" aria-hidden="true"></i> All projects
        </Link>
      </div>

      {/* ===== header ===== */}
      <div className="max-w-[1080px] mx-auto px-6 md:px-14 pt-12">
        <div className="flex flex-wrap items-center gap-2.5 mb-4 text-[11px] text-gray-400 tracking-[0.6px]">
          <span>2026</span>
          <span className="w-[3px] h-[3px] rounded-full bg-[#4b4a4a]" aria-hidden="true" />
          <span>Solo build</span>
          <span className="w-[3px] h-[3px] rounded-full bg-[#4b4a4a]" aria-hidden="true" />
          <span className="inline-flex items-center gap-1.5 text-green-400">
            <span className="w-[6px] h-[6px] rounded-full bg-green-400" aria-hidden="true" />
            Running on a WhatsApp Cloud API test number
          </span>
        </div>

        <h1 className="text-[2rem] md:text-[2.6rem] leading-[1.15] font-semibold text-gray-200 tracking-[-0.5px] mb-3.5">
          WhatsApp AI Receptionist
        </h1>
        <p className="text-[1.05rem] leading-relaxed text-[#FD6F00] max-w-[720px] mb-6">
          A clinic&apos;s WhatsApp answers patients and books appointments at 11pm, with nobody at the desk.
        </p>

        <div className="flex flex-wrap gap-2 mb-7">
          {TECH.map((t) => (
            <span key={t} className="text-[11px] bg-[#2a2929] text-[#FD6F00] px-2.5 py-[3px] rounded-md">
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-11">
          <Link
            href="https://github.com/Shahzain-Ali/whatsapp-ai-receptionist"
            target="_blank"
            className="inline-flex items-center gap-2 text-[13px] text-gray-300 border border-gray-600 px-4 py-2.5 rounded-md hover:bg-gray-700 hover:text-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e0e]"
          >
            <i className="fab fa-github" aria-hidden="true"></i> View the code
          </Link>
        </div>
      </div>

      {/* ===== body ===== */}
      <div className="max-w-[1080px] mx-auto px-6 md:px-14 flex gap-14 items-start">
        {/* sticky index */}
        <nav aria-label="On this page" className="hidden lg:flex xl:flex 2xl:flex sticky top-8 w-[168px] shrink-0 flex-col gap-3">
          <span className="text-[10px] text-gray-500 tracking-[1.2px] mb-1">ON THIS PAGE</span>
          {SECTIONS.map((s, i) => (
            <span key={s} className="flex items-center gap-2.5">
              <span className={`w-[2px] h-[15px] ${i === 0 ? "bg-[#FD6F00]" : "bg-[#2a2929]"}`} aria-hidden="true" />
              <span className={`text-[12px] ${i === 0 ? "text-gray-200" : "text-gray-400"}`}>{s}</span>
            </span>
          ))}
        </nav>

        <div className="grow min-w-0 flex flex-col gap-14">
          {/* 01 */}
          <section>
            <Heading n="01">The problem</Heading>
            <Body>
              A small clinic staffs its front desk for part of the day. Every enquiry that arrives outside those
              hours — on WhatsApp, where patients actually message — waits until morning, and a share of those people
              book somewhere else instead. The clinic doesn&apos;t need a smarter website. It needs someone answering
              the same WhatsApp number at 11pm who can check the real calendar and commit to a slot.
            </Body>
          </section>

          {/* 02 */}
          <section>
            <Heading n="02">Constraints I was designing against</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-3">
              {[
                [
                  "Answers must not be invented",
                  "A clinic cannot have a bot improvising medical or pricing answers. Everything comes from the clinic's own profile, or the agent says it doesn't know.",
                ],
                [
                  "No slot taken twice",
                  "Two patients holding the same appointment is worse than a missed booking. Availability has to be read at the moment of booking, not cached.",
                ],
                [
                  "The owner stays in control",
                  "A clinic owner will not hand the diary to an agent on day one. Nothing gets committed without a human saying yes — from their own phone, not the patient's chat.",
                ],
                [
                  "Runs on a small budget",
                  "No dedicated database and no ops team. The calendar had to be something clinic staff already open and edit by hand.",
                ],
              ].map(([title, text]) => (
                <div key={title} className="bg-[#1f1e1e] rounded-lg p-4">
                  <p className="text-[13px] text-gray-200 mb-1.5 m-0">{title}</p>
                  <p className="text-[12.5px] leading-relaxed text-gray-400 m-0">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 03 */}
          <section>
            <Heading n="03">How it&apos;s built</Heading>
            <p className="text-[15px] leading-[1.75] text-[#b4b3b3] mb-5 m-0">
              WhatsApp has no polling API — inbound messages only arrive as a webhook. A message hits a FastAPI
              endpoint, which returns <code className="text-[13px] text-gray-300">200</code> immediately and does the
              work in a background task, because Meta retries anything slow. The same endpoint routes by sender: the
              owner&apos;s number is treated as an approval reply, anyone else as a patient conversation.
            </p>

            <div className="bg-[#141313] border border-[#201f1f] rounded-lg p-5 md:p-6 overflow-x-auto">
              <svg viewBox="0 0 720 250" width="720" height="250" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Architecture: a patient message flows through the WhatsApp Cloud API to a FastAPI webhook, into the ADK agent, which calls tools that read a Google Sheet and request owner approval." className="max-w-full h-auto">
                <defs>
                  <marker id="cs-arw" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                    <path d="M0 0 L8 4 L0 8 z" fill="#4B4A4A" />
                  </marker>
                </defs>
                <rect x="8" y="96" width="110" height="44" rx="7" fill="#1F1E1E" stroke="#2A2929" />
                <text x="63" y="116" textAnchor="middle" fill="#E5E7EB" fontSize="12" fontFamily="sans-serif">Patient</text>
                <text x="63" y="131" textAnchor="middle" fill="#6B6A6A" fontSize="10" fontFamily="sans-serif">WhatsApp</text>
                <line x1="120" y1="118" x2="158" y2="118" stroke="#4B4A4A" strokeWidth="1.4" markerEnd="url(#cs-arw)" />
                <rect x="160" y="96" width="110" height="44" rx="7" fill="#1F1E1E" stroke="#2A2929" />
                <text x="215" y="116" textAnchor="middle" fill="#E5E7EB" fontSize="12" fontFamily="sans-serif">Cloud API</text>
                <text x="215" y="131" textAnchor="middle" fill="#6B6A6A" fontSize="10" fontFamily="sans-serif">webhook</text>
                <line x1="272" y1="118" x2="310" y2="118" stroke="#4B4A4A" strokeWidth="1.4" markerEnd="url(#cs-arw)" />

                <rect x="312" y="24" width="226" height="196" rx="9" fill="none" stroke="#2A2929" strokeDasharray="4 4" />
                <text x="326" y="43" fill="#6B6A6A" fontSize="10" fontFamily="sans-serif">FASTAPI · DOCKER</text>
                <rect x="328" y="54" width="194" height="38" rx="7" fill="#1F1E1E" stroke="#2A2929" />
                <text x="425" y="72" textAnchor="middle" fill="#E5E7EB" fontSize="12" fontFamily="sans-serif">webhook</text>
                <text x="425" y="85" textAnchor="middle" fill="#6B6A6A" fontSize="9.5" fontFamily="sans-serif">200 now · background task · dedupe</text>
                <line x1="425" y1="94" x2="425" y2="108" stroke="#4B4A4A" strokeWidth="1.4" markerEnd="url(#cs-arw)" />
                <rect x="328" y="110" width="194" height="50" rx="7" fill="#1F1E1E" stroke="#FD6F00" />
                <text x="425" y="130" textAnchor="middle" fill="#FD6F00" fontSize="12" fontFamily="sans-serif">ADK agent</text>
                <text x="425" y="146" textAnchor="middle" fill="#6B6A6A" fontSize="9.5" fontFamily="sans-serif">GPT-4o-mini via LiteLLM · profile preloaded</text>
                <line x1="425" y1="162" x2="425" y2="176" stroke="#4B4A4A" strokeWidth="1.4" markerEnd="url(#cs-arw)" />
                <rect x="328" y="178" width="194" height="30" rx="7" fill="#1F1E1E" stroke="#2A2929" />
                <text x="425" y="197" textAnchor="middle" fill="#D1D5DB" fontSize="10.5" fontFamily="sans-serif">check_slot · create_booking_request</text>

                <line x1="540" y1="138" x2="580" y2="84" stroke="#4B4A4A" strokeWidth="1.4" markerEnd="url(#cs-arw)" />
                <rect x="582" y="60" width="128" height="44" rx="7" fill="#1F1E1E" stroke="#2A2929" />
                <text x="646" y="80" textAnchor="middle" fill="#E5E7EB" fontSize="12" fontFamily="sans-serif">Google Sheet</text>
                <text x="646" y="95" textAnchor="middle" fill="#6B6A6A" fontSize="9.5" fontFamily="sans-serif">Availability · Bookings</text>
                <line x1="540" y1="148" x2="580" y2="148" stroke="#4B4A4A" strokeWidth="1.4" markerEnd="url(#cs-arw)" />
                <rect x="582" y="126" width="128" height="44" rx="7" fill="#1F1E1E" stroke="#2A2929" />
                <text x="646" y="146" textAnchor="middle" fill="#E5E7EB" fontSize="12" fontFamily="sans-serif">Owner&apos;s phone</text>
                <text x="646" y="161" textAnchor="middle" fill="#6B6A6A" fontSize="9.5" fontFamily="sans-serif">replies YES / NO</text>
                <line x1="540" y1="158" x2="580" y2="200" stroke="#4B4A4A" strokeWidth="1.4" markerEnd="url(#cs-arw)" />
                <rect x="582" y="184" width="128" height="32" rx="7" fill="#1F1E1E" stroke="#2A2929" />
                <text x="646" y="204" textAnchor="middle" fill="#D1D5DB" fontSize="10.5" fontFamily="sans-serif">traces &amp; spans</text>
              </svg>
            </div>

            <p className="text-[15px] leading-[1.75] text-[#b4b3b3] mt-5 m-0">
              Booking is a two-party flow. The agent never confirms on its own: it records a pending booking and
              messages the <em>owner&apos;s</em> WhatsApp with the details and a YES/NO. The owner answers from their
              own phone, the webhook resolves it, appends the row to the Bookings sheet, and tells the patient. An
              earlier version put the approval prompt in the patient&apos;s chat — which showed the patient the
              internal decision. Splitting it across the two numbers fixed that.
            </p>
          </section>

          {/* 04 */}
          <section>
            <Heading n="04">Decisions and what they cost</Heading>
            <div className="flex flex-col gap-3">
              {[
                {
                  title: "Preload the clinic profile instead of building RAG",
                  why: "The knowledge is a few paragraphs — fees, timings, services, FAQs. Embeddings and a vector search would have added cost and setup for no gain at this size, so the whole profile goes into the agent's instruction.",
                  cost: "It stops scaling somewhere past a few thousand tokens, and it's per-business. The moment a clinic has real document sets, this has to become a retrieval index per tenant — which is exactly what I built on the AI Tutor project.",
                },
                {
                  title: "Google Sheets as the calendar, not a database",
                  why: "Clinic staff already live in a spreadsheet. They can override the agent by typing in a cell, and the booking team gets a live dashboard for free — no admin panel to learn, nothing to deploy.",
                  cost: "No transactions. Reading availability and appending a booking are separate calls, so the write isn't atomic. At clinic volume that hasn't bitten; for a chain it needs a real database with a unique constraint on the slot.",
                },
                {
                  title: "The slot logic is pure functions with no I/O",
                  why: "availability.py takes the schedule and the bookings as plain data and returns the free slots. Keeping Sheets out of it means the awkward parts — Sheets handing back '9:00:00 AM' where the schedule says '09:00' — are unit-testable without touching the network.",
                  cost: "The normalising layer is extra code that only exists because a spreadsheet is the backend. A typed database column would delete it.",
                },
                {
                  title: "The guardrail blocks repeat requests, not slot clashes",
                  why: "Two different things needed protecting. A slot being taken twice is prevented by reading availability minus existing bookings at request time. The same patient spamming 'book' is prevented by an ADK before_tool_callback that blocks the tool when that phone already has an active booking.",
                  cost: "The block is date-based, so it clears on its own once the appointment date passes — no manual 'attended' flag, and no-shows can rebook. The trade is that a patient who genuinely needs a second upcoming appointment has to go through a human.",
                },
                {
                  title: "Approval crosses channels instead of living in one chat",
                  why: "The owner approves from their own number. The patient never sees the internal decision, and the owner doesn't have to sit inside a dashboard.",
                  cost: "It only works while both parties are inside WhatsApp's 24-hour messaging window. Outside it, a message template is required — which is a separate approval process with Meta.",
                },
              ].map((d) => (
                <div key={d.title} className="bg-[#1f1e1e] rounded-lg p-5 border-l-2 border-[#FD6F00]">
                  <p className="text-[14px] text-gray-200 mb-3 m-0">{d.title}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5">
                    <div>
                      <p className="text-[10px] text-gray-500 tracking-[0.8px] mb-1.5 m-0">WHY</p>
                      <p className="text-[12.5px] leading-relaxed text-gray-400 m-0">{d.why}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 tracking-[0.8px] mb-1.5 m-0">WHAT IT COST</p>
                      <p className="text-[12.5px] leading-relaxed text-gray-400 m-0">{d.cost}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* the booking flow, end to end */}
          <section>
            <Shot
              src="/images/projects/whatsapp-booking.jpg"
              alt="A booking: the agent confirms the details, sends them to the owner for approval, reports back the confirmation, then refuses a second booking for the same patient and offers to change the existing one"
              label="One booking, end to end — approval and the guardrail"
              note="The approval round trip and the duplicate-booking block, in one conversation. The owner's YES arrives on their own number; the patient only ever sees the outcome."
            />
          </section>

          {/* 05 */}
          <section>
            <Heading n="05">What it does now</Heading>

            <div className="mb-6">
              <Shot
                src="/images/projects/whatsapp-answers.jpg"
                alt="The clinic assistant greeting a patient, then answering questions about timings and consultation fees with figures from the clinic profile"
                label="Answers, straight from the clinic profile"
                note="Timings and fees are read from the clinic's own profile — the agent has nothing else to answer from, which is what stops it improvising a price."
              />
            </div>

            <Body>
              A patient messages the clinic&apos;s number at any hour. The agent answers from the clinic profile,
              checks a real slot against the live sheet, offers the next open times if it&apos;s taken, and holds the
              request until the owner approves it from their own phone. The confirmed appointment lands in a
              spreadsheet the booking team already has open. Every run emits traces and spans, so a booking that goes
              wrong can be opened and read step by step rather than guessed at.
            </Body>

            <div className="bg-[#1f1e1e] rounded-lg p-5 mt-5">
              <p className="text-[10px] text-gray-500 tracking-[1.1px] mb-3 m-0">HONEST SCOPE</p>
              <p className="text-[12.5px] leading-relaxed text-gray-400 m-0">
                This runs on a WhatsApp Cloud API test number, so it only messages verified recipients — production
                numbers need Meta business verification. The clinic is a worked example, not a paying customer. The
                agent, the sheet, the guardrail and the approval flow are real and end to end; the volume behind them
                is not.
              </p>
            </div>
          </section>

          {/* 06 */}
          <section>
            <Heading n="06">What I&apos;d change next</Heading>
            <p className="text-[15px] leading-[1.75] text-[#b4b3b3] mb-4 m-0">
              Three things I already know are weak, in the order I&apos;d fix them.
            </p>
            <ol className="flex flex-col gap-3 list-none p-0 m-0">
              {[
                [
                  "The pending-booking store is in memory",
                  "It's a dict behind a lock in a single process. Restart the service and anything awaiting approval is gone, and it can't run on more than one worker. Confirmed bookings are safe — they're in the sheet — but the in-flight ones need a real store before this runs anywhere serious.",
                ],
                [
                  "There is no eval suite",
                  "Today it's manual testing plus traces. What's missing is a fixed set of conversations replayed after every change, checking that booking still completes and that the agent still refuses to answer outside the clinic profile. That's the next thing I build.",
                ],
                [
                  "The webhook doesn't verify Meta's signature",
                  "Meta signs each request with X-Hub-Signature-256. I'm not checking it yet, so the endpoint trusts anything that reaches it. On a public production URL that has to be closed first.",
                ],
              ].map(([title, text], i) => (
                <li key={title} className="bg-[#1f1e1e] rounded-lg p-5 flex gap-4">
                  <span className="text-[#FD6F00] text-[13px] font-semibold shrink-0">{i + 1}</span>
                  <div>
                    <p className="text-[13.5px] text-gray-200 mb-1.5 m-0">{title}</p>
                    <p className="text-[12.5px] leading-relaxed text-gray-400 m-0">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* debugging note — the part interviewers dig into */}
          <section>
            <Heading n="+">One bug worth writing down</Heading>
            <Body>
              Inbound messages worked; outgoing replies silently never arrived. The send was timing out after 30
              seconds against graph.facebook.com. My first theory was that IPv4 was broken and I should force IPv6 —
              a raw socket test killed that idea outright, because the host has no IPv6 at all. The real cause was
              that the hostname resolves to several edge IPs and, from this ISP, some of them refuse to connect while
              others answer in about two seconds. A single request with a long timeout kept landing on a dead one.
              The fix was a shared session with a short connect timeout and automatic retries, so a failed attempt
              re-resolves DNS and lands on a reachable IP — sends now complete in roughly two and a half seconds. I
              keep the wrong turn in the log deliberately: the lesson was to verify with a raw test before writing a
              fix for a cause I had guessed at.
            </Body>
          </section>
        </div>
      </div>

      {/* next */}
      <div className="max-w-[1080px] mx-auto px-6 md:px-14 mt-16 pt-6 border-t border-[#201f1f]">
        <Link
          href="/#portfolio-sec"
          className="inline-flex items-center gap-2 text-[13px] text-[#FD6F00] hover:text-[#E46400] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e0e] rounded"
        >
          <i className="fas fa-arrow-left text-[11px]" aria-hidden="true"></i> Back to all projects
        </Link>
      </div>
    </div>
  );
};

export default CaseStudy;
