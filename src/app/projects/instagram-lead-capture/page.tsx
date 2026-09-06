import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata: Metadata = {
  title: "Instagram Lead Capture",
  description:
    "An n8n system that turns Instagram comments into stored leads: a public reply, a private DM grounded in the real listing, and a phone number captured inside Meta's 24-hour window.",
};

const TECH = [
  "n8n (self-hosted)",
  "Instagram Platform API",
  "OpenAI GPT-5",
  "Supabase Postgres",
  "Slack",
  "Caddy + Let's Encrypt",
  "Oracle Cloud VM",
  "Docker",
];

const SECTIONS = [
  "The problem",
  "Constraints",
  "How it's built",
  "Decisions and what they cost",
  "What it does now",
  "What I'd change next",
];

/* Section heading: mono number, sans title. The number is a real sequence
   here — these sections are read in order — which is why it survives while
   the ghost numbering on Selected Work did not. */
const Heading = ({ n, children }: { n: string; children: React.ReactNode }) => (
  <div className="flex items-baseline gap-3 mb-4">
    <span className="font-mono text-label text-accent">{n}</span>
    <h2 className="text-h2 font-semibold text-ink m-0">{children}</h2>
  </div>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lead leading-[1.75] text-muted m-0">{children}</p>
);

/* A real screenshot, labelled as what it is. Never a fabricated capture. */
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
        height={1000}
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
    <div className="bg-ground min-h-screen pb-16">
      {/* top bar */}
      <div className="flex items-center justify-between px-6 md:px-14 py-4 border-b border-line">
        <Link
          href="/"
          className="text-h3 font-bold bg-gradient-to-r from-[#FA6E00] to-[#E60026] text-transparent bg-clip-text"
        >
          Shahzain Ali
        </Link>
        <Link
          href="/#portfolio-sec"
          className="inline-flex items-center gap-2 text-muted text-small hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ground rounded"
        >
          <i className="fas fa-arrow-left text-[11px]" aria-hidden="true"></i> All projects
        </Link>
      </div>

      {/* ===== header ===== */}
      <div className="max-w-[1080px] mx-auto px-6 md:px-14 pt-12">
        <div className="flex flex-wrap items-center gap-2.5 mb-4 font-mono text-label uppercase text-dim">
          <span>2026</span>
          <span className="w-[3px] h-[3px] rounded-full bg-faint" aria-hidden="true" />
          <span>Solo build</span>
          <span className="w-[3px] h-[3px] rounded-full bg-faint" aria-hidden="true" />
          <span className="inline-flex items-center gap-1.5 text-ok">
            <span className="w-[6px] h-[6px] rounded-full bg-ok" aria-hidden="true" />
            Running · demo business
          </span>
        </div>

        <h1 className="text-[2rem] md:text-[2.6rem] lg:text-[2.6rem] xl:text-[2.6rem] 2xl:text-[2.6rem] leading-[1.15] font-semibold text-ink tracking-[-0.5px] mb-3.5">
          Instagram Lead Capture
        </h1>
        <p className="text-[1.05rem] leading-relaxed text-accent max-w-[720px] mb-6">
          A comment at 11pm belongs to Instagram. A phone number with a budget attached belongs to the
          business. This is the path between them.
        </p>

        <div className="flex flex-wrap gap-2 mb-7">
          {TECH.map((t) => (
            <span
              key={t}
              className="font-mono text-label uppercase bg-surface text-accent-dim px-2.5 py-[3px] rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-11">
          <Link
            href="https://github.com/Shahzain-Ali/instagram-lead-capture"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-small text-ink border border-line px-4 py-2.5 rounded-md min-h-[44px] hover:bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ground"
          >
            <i className="fab fa-github" aria-hidden="true"></i> Code
          </Link>
        </div>
      </div>

      {/* ===== body ===== */}
      <div className="max-w-[1080px] mx-auto px-6 md:px-14 flex gap-14 items-start">
        {/* sticky index — every breakpoint above lg spelled out, because the
            config's ranged screens mean lg: stops at 1279 and cascades to nothing */}
        <nav
          aria-label="On this page"
          className="hidden lg:flex xl:flex 2xl:flex sticky top-8 w-[168px] shrink-0 flex-col gap-3"
        >
          <span className="font-mono text-label uppercase text-dim mb-1">On this page</span>
          {SECTIONS.map((s, i) => (
            <span key={s} className="flex items-center gap-2.5">
              <span
                className={`w-[2px] h-[15px] ${i === 0 ? "bg-accent" : "bg-line"}`}
                aria-hidden="true"
              />
              <span className={`text-small ${i === 0 ? "text-ink" : "text-muted"}`}>{s}</span>
            </span>
          ))}
        </nav>

        <div className="grow min-w-0 flex flex-col gap-14">
          {/* 01 */}
          <section>
            <Heading n="01">The problem</Heading>
            <p className="text-lead leading-[1.75] text-muted mb-4 m-0">
              Someone comments <em>&ldquo;price?&rdquo;</em> on a listing at 11pm. That comment belongs to
              Instagram. It expires with the post&apos;s relevance, and it tells the business nothing it can
              act on — no phone number, no budget, no idea which property they meant by the time anyone reads
              it.
            </p>
            <p className="text-lead leading-[1.75] text-muted mb-5 m-0">
              This is not a problem of replying faster. A dealer replying to fifty comments still ends the
              week with fifty conversations and no records. A <strong className="text-ink font-medium">lead</strong>{" "}
              is attention plus identity plus intent, stored somewhere the business owns.
            </p>

            <div className="bg-surface-inset border border-line rounded-lg p-5 md:p-6 mb-5">
              <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row md:items-center lg:items-center xl:items-center 2xl:items-center gap-3 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2">
                {[
                  ["Public comment", "Instagram's"],
                  ["Private conversation", "shared"],
                  ["Stored record", "the business's — permanent"],
                ].map(([step, owner], i) => (
                  <React.Fragment key={step}>
                    {i > 0 && (
                      <span className="text-faint shrink-0 hidden md:inline lg:inline xl:inline 2xl:inline" aria-hidden="true">
                        →
                      </span>
                    )}
                    <div className="grow">
                      <p className="text-body text-ink m-0">{step}</p>
                      <p className="font-mono text-label uppercase text-dim mt-1 m-0">{owner}</p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <Body>
              Which means the success metric is not &ldquo;the bot answered fifty questions.&rdquo; It is{" "}
              <em>&ldquo;the bot captured twelve phone numbers, each with a budget and a property
              attached.&rdquo;</em>
            </Body>
          </section>

          {/* 02 */}
          <section>
            <Heading n="02">Constraints I was designing against</Heading>
            <p className="text-lead leading-[1.75] text-muted mb-4 m-0">
              Four things, all of them platform facts rather than preferences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-3">
              {[
                [
                  "A bot may send free-form DMs for 24 hours",
                  "The 7-day extension exists but is for human-sent messages. The bot cannot wait for a decision that takes weeks — it has to capture a phone number inside one day, or the lead is gone.",
                ],
                [
                  "One private reply per comment",
                  "Meta allows exactly one. No retry, no correction, no second attempt. The first message has to be right the first time.",
                ],
                [
                  "A wrong price is misrepresentation",
                  "“Yes, it's still available” about a property sold two days ago damages the agency, not the conversation. This is not a UX bug.",
                ],
                [
                  "Zero budget",
                  "No paid hosting, no paid database, no paid monitoring — and it still has to be reachable at 3am.",
                ],
              ].map(([title, text]) => (
                <div key={title} className="bg-surface rounded-lg p-4">
                  <p className="text-body text-ink mb-1.5 m-0">{title}</p>
                  <p className="text-small leading-relaxed text-muted m-0">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 03 */}
          <section>
            <Heading n="03">How it&apos;s built</Heading>
            <p className="text-lead leading-[1.75] text-muted mb-5 m-0">
              The <code className="font-mono text-small text-ink">200</code> goes out{" "}
              <strong className="text-ink font-medium">before</strong> any processing. Meta retries a failed
              delivery for up to 36 hours, and while the signature check was misconfigured that backlog piled
              up and looked exactly like a runaway loop — one of those failures that teaches you the
              platform&apos;s behaviour the hard way.
            </p>

            <div className="mb-6">
              <Shot
                src="/images/projects/ig-workflow.jpg"
                alt="The full n8n workflow: webhook ingress, a comment branch, a DM branch and a shared tail, 44 nodes in total"
                label="The running workflow — 44 nodes"
                note="Bangash Residency is a demonstration business — listings are fictional, nothing is for sale. Runs in Instagram Tester mode against one account."
              />
            </div>

            <p className="text-lead leading-[1.75] text-muted mb-5 m-0">
              Signature verification runs first, on the raw bytes rather than re-serialised JSON. A forged
              request never reaches OpenAI, never sends a DM, and never creates a lead. The worst case it
              removes is not bad data — it is an attacker setting{" "}
              <code className="font-mono text-small text-ink">sender.id</code> to any Instagram user and
              making <em>your</em> account DM that person.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 mb-5">
              <Shot
                src="/images/projects/ig-ingress.jpg"
                alt="The ingress branch: webhook, HMAC signature verification on the raw body, then routing by event type"
                label="Ingress — verify, then route"
              />
              <Shot
                src="/images/projects/ig-comment.jpg"
                alt="The comment branch: listing lookup by media id, then a public reply and a private reply DM"
                label="Comment branch"
              />
              <Shot
                src="/images/projects/ig-dm.jpg"
                alt="The DM branch: lead, history and listing are loaded, then a grounded agent composes the reply"
                label="DM branch — facts before inference"
              />
              <Shot
                src="/images/projects/ig-tail.jpg"
                alt="The shared tail: merge, atomic upsert into Postgres, and a Slack alert when a human is needed"
                label="Shared tail — upsert and alert"
              />
            </div>

            <Body>
              State lives in four Postgres tables: <code className="font-mono text-small text-ink">listings</code>,{" "}
              <code className="font-mono text-small text-ink">leads</code>,{" "}
              <code className="font-mono text-small text-ink">messages</code> and{" "}
              <code className="font-mono text-small text-ink">app_meta</code>.
            </Body>
          </section>

          {/* 04 */}
          <section>
            <Heading n="04">Decisions and what they cost</Heading>
            <div className="flex flex-col gap-3">
              {[
                {
                  title: "The AI agent has no tools and no memory node",
                  why: "Retrieval here is deterministic. A comment arrives carrying media.id, which is an exact key into the listings table — there is no judgement call for a model to make. A lookup tool would add latency and cost, and introduce a failure mode that otherwise cannot exist: the model decides not to call the tool and answers from memory instead. In this domain that failure is a fabricated price. Injecting the facts before inference makes it structurally impossible. Memory is the messages table, not an in-process buffer — the last ten turns are read and written back every time.",
                  cost: "This is grounded generation with structured output, not an autonomous agent, and I would rather say that plainly than blur it. Every turn also pays for the full context whether it needs it or not. When RAG over society guides and transfer processes gets built, that genuinely does need a tool — and the tool layer will have to be added then.",
                },
                {
                  title: "Guarantees live in code, not in the prompt",
                  why: "The model once returned handoff_reason: “phone number captured” with no phone number in the message. That muted the bot — correctly, by its own rules — and the lead was lost silently. My first instinct was to add a prompt rule. That was wrong: it would have been the sixth rule competing with five others, and I had already watched three rules quietly lose to a simpler one. The workflow now refuses that write outright, and rejects anything under ten digits as a phone number.",
                  cost: "More workflow complexity, and two places to maintain instead of one — a guard and a prompt that must not contradict each other. A model that skims a paragraph is not a bug to be argued with; it is a property to design around.",
                },
                {
                  title: "Postgres instead of Google Sheets",
                  why: "The sheet was genuinely attractive: the client can open it, and it is part of the deliverable. Two things ended that. appendOrUpdate is read-then-write, so two DMs arriving together could overwrite one another. And every conversational turn cost four separate reads. The upsert is now atomic, and four reads collapsed into two.",
                  cost: "The client can no longer open the store and look at it. That is a real loss and it is unresolved — I traded a visible system for a correct one, and if this were a paying client I would owe them a dashboard.",
                },
              ].map((d) => (
                <div key={d.title} className="bg-surface rounded-lg p-5 border-l-2 border-accent">
                  <p className="text-body text-ink mb-3 m-0">{d.title}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5">
                    <div>
                      <p className="font-mono text-label uppercase text-dim mb-1.5 m-0">Why</p>
                      <p className="text-small leading-relaxed text-muted m-0">{d.why}</p>
                    </div>
                    <div>
                      <p className="font-mono text-label uppercase text-dim mb-1.5 m-0">What it cost</p>
                      <p className="text-small leading-relaxed text-muted m-0">{d.cost}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 05 */}
          <section>
            <Heading n="05">What it does now</Heading>
            <p className="text-lead leading-[1.75] text-muted mb-4 m-0">
              A comment on a listing gets a public reply and a private DM carrying that property&apos;s real
              price, size, possession status and instalment terms — read fresh from the database on every
              single reply, never cached and never remembered by the model. The conversation continues in DMs,
              extracting budget, purpose, timeline, financing and phone number as they appear naturally. When a
              phone number arrives, or someone tries to negotiate, or asks a legal question, the bot hands off:
              it falls silent for that person and Slack gets an alert with everything known so far.
            </p>
            <p className="text-lead leading-[1.75] text-muted mb-4 m-0">
              The handoff mute is per-channel, not global. A handed-off customer commenting on another post
              still gets a public reply — <em>&ldquo;Our team is already in touch with you.&rdquo;</em> —
              because a public comment left unanswered is visible to everyone reading that post.
            </p>
            <Body>
              It runs on an always-on Oracle Cloud VM behind Caddy with an automatically renewed Let&apos;s
              Encrypt certificate, n8n bound to loopback so it is never publicly reachable, and the Instagram
              token refreshing itself on a daily schedule.
            </Body>

            <div className="bg-surface rounded-lg p-5 mt-5">
              <p className="font-mono text-label uppercase text-dim mb-3 m-0">Honest scope</p>
              <p className="text-small leading-relaxed text-muted m-0">
                Bangash Residency is a demonstration business — the listings and prices are fictional, no real
                society is named, and nothing is for sale. The app runs in Instagram Tester mode against one
                account, at demo volume. This is a working system, not a system that has served paying
                customers.
              </p>
            </div>
          </section>

          {/* 06 */}
          <section>
            <Heading n="06">What I&apos;d change next</Heading>
            <p className="text-lead leading-[1.75] text-muted mb-4 m-0">
              Three things I already know are weak, in the order I&apos;d fix them.
            </p>
            <ol className="flex flex-col gap-3 list-none p-0 m-0">
              {[
                [
                  "The VM has 954 MB of RAM",
                  "n8n's documented minimum is 2 GB. The 6 GB ARM instance I wanted returned “Out of capacity” in every availability domain, and that wait is open-ended, so I shipped on the smaller shape with a 4 GB swap file. It works — 462 MB of live process memory was sitting on disk when I measured it — but swap trades a crash for slowness, and I have only measured it under single-conversation load. This is the first thing to fix, and it is not what I would promise a client.",
                ],
                [
                  "No rate limiting at the edge",
                  "On the old tunnel this was impossible; there was no edge to configure. Caddy has been there since deployment, so this is now merely unbuilt rather than blocked.",
                ],
                [
                  "The image is pinned to :latest",
                  "Migrating hosts upgraded n8n from 2.32.5 to 2.36.9 as a side effect of deploying, and the database migration is one-way. Nothing broke, but that upgrade was an accident rather than a decision. A client system pins the version.",
                ],
              ].map(([title, text], i) => (
                <li key={title} className="bg-surface rounded-lg p-5 flex gap-4">
                  <span className="font-mono text-body text-accent font-semibold shrink-0">{i + 1}</span>
                  <div>
                    <p className="text-body text-ink mb-1.5 m-0">{title}</p>
                    <p className="text-small leading-relaxed text-muted m-0">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* the part interviewers dig into */}
          <section>
            <Heading n="+">One bug worth writing down</Heading>
            <p className="text-lead leading-[1.75] text-muted mb-4 m-0">
              Signature verification failed on every webhook. Two things could be wrong: the secret, or the
              body I was hashing. Meta&apos;s docs say the signature covers &ldquo;the payload,&rdquo; which is
              precise enough to be useless — is that the raw bytes, or the parsed object, or the re-serialised
              JSON?
            </p>
            <p className="text-lead leading-[1.75] text-muted mb-4 m-0">
              I could have tried combinations one at a time, waiting for a real Instagram event between each
              attempt. Instead I made one execution answer the question: the verifier hashed{" "}
              <strong className="text-ink font-medium">six different candidate bodies at once</strong> — raw
              buffer, UTF-8 string, re-serialised JSON, compact JSON, and two whitespace variants — and printed
              all six digests beside the signature Meta had sent.
            </p>
            <p className="text-lead leading-[1.75] text-muted mb-4 m-0">
              Five of the six were <strong className="text-ink font-medium">identical</strong>. That killed the
              entire body hypothesis in a single request. If five different serialisations produce the same
              hash and none matches, the body is not the variable — the secret is.
            </p>
            <p className="text-lead leading-[1.75] text-muted mb-4 m-0">
              And the secret was the surprise. This is an <em>Instagram Login</em> app, and its dashboard
              exposes a second app secret under <strong className="text-ink font-medium">Instagram → API
              setup</strong>, separate from the Facebook App Secret. Both are 32 characters. Both live in the
              same dashboard. Meta&apos;s webhook pages say only <em>&ldquo;your app&apos;s App
              Secret.&rdquo;</em> The Instagram one is what signs these webhooks. That is measured on one
              account, not documented anywhere — so the verifier in production checks{" "}
              <strong className="text-ink font-medium">both</strong> secrets and reports which one matched,
              rather than hard-coding the winner and pretending I know more than I do.
            </p>

            <div className="bg-surface-inset border-l-2 border-accent-line rounded-lg p-5">
              <p className="font-mono text-label uppercase text-dim mb-2 m-0">The habit worth keeping</p>
              <p className="text-small leading-relaxed text-muted m-0">
                When two variables are in play, design the test that eliminates one of them entirely. And when
                the answer turns out to be undocumented, write down that it is undocumented — not just what you
                found.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* next */}
      <div className="max-w-[1080px] mx-auto px-6 md:px-14 mt-16 pt-6 border-t border-line">
        <Link
          href="/#portfolio-sec"
          className="inline-flex items-center gap-2 text-small text-accent hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ground rounded"
        >
          <i className="fas fa-arrow-left text-[11px]" aria-hidden="true"></i> Back to all projects
        </Link>
      </div>
    </div>
  );
};

export default CaseStudy;
