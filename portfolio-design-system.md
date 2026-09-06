# Portfolio Design System — extracted, and audited

**Source:** `E:\Personal-Portfolio-Website` — read out of `tailwind.config.ts`, `globals.css`, `layout.tsx` and every component. Nothing here is invented; every value below is one the code actually ships today.

**Two parts:** what the system *is* right now, and where it breaks the design fundamentals it should be holding to. The second part is the useful half.

> **Status, 2026-09-06.** Findings A, B and C are fixed in commit `3580799`.
> The audit text below is kept as written — it records the state that
> prompted the work and the reasoning behind each fix. Where a finding has
> been resolved, a **Resolved** note says what shipped.

---

# PART 1 — What ships today

## 1. Typography

| | Value |
|---|---|
| Font actually rendered | **the browser's default `sans-serif`** — set in `globals.css` |
| Fonts downloaded | `GeistVF.woff` (66 KB), `GeistMonoVF.woff` (68 KB) — 134 KB total |
| Fonts referenced anywhere | **none** |
| Weights in use | `font-semibold` (9), `font-bold` (6), `font-normal` (1) |

`layout.tsx` loads both Geist faces and puts their variable classes on `<body>`. Those classes only *define* `--font-geist-sans` and `--font-geist-mono`. Nothing ever consumes them: there is no `fontFamily` entry in `tailwind.config.ts`, and no `font-[family-name:var(--font-geist-sans)]` anywhere in the tree. Meanwhile `globals.css` hardcodes `body { font-family: sans-serif; }`.

**The site has no typeface.** It renders in whatever the visitor's browser defaults to — Arial on most Windows machines, Helvetica on most Macs. Two font files are fetched on every page load and thrown away.

> **Resolved (2026-09-06).** Geist Sans and Geist Mono are now wired: a
> `fontFamily` entry maps `font-sans` and `font-mono` onto the two CSS
> variables, and the `font-family: sans-serif` line is gone from
> `globals.css`. The 134 KB is now paid for something the visitor sees.

### Type scale as shipped

Tailwind steps and arbitrary pixel values are mixed freely. Twenty-three distinct sizes:

**Tailwind steps** — `text-sm` (38), `text-base` (36), `text-2xl` (28), `text-xl` (15), `text-xs` (7), `text-lg` (7)

**Arbitrary px** — 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 18, 24, 25, 26, 28, 30

There is no scale. `text-[12px]`, `text-[12.5px]` and `text-[13px]` all appear, and no reader can tell them apart — but they guarantee that two sections built a week apart will not line up.

## 2. Colour

**41 distinct hex values across the codebase.**

### Accent — three oranges doing one job

| Hex | Uses | Where |
|---|---|---|
| `#FD6F00` | 63 | the real accent — headings underline, links, highlights |
| `#E46400` | 9 | hover / pressed |
| `#FA6E00` | 4 | no distinguishable role |
| `#984300` | 1 | no distinguishable role |

`#FD6F00` and `#FA6E00` are three points apart on one channel. They are the same colour with two names.

### Grounds and surfaces — ten near-identical darks

`#0F0E0E` (page ground, 27) · `#141313` (2) · `#191818` (1) · `#1A1919` (1) · `#1C1B1B` (1) · `#1F1E1E` (23, card surface) · `#201F1F` (3) · `#282828` (3) · `#2A2929` (13) · `#2B2929` (7, footer + `--background`)

Two of these are load-bearing (`#0F0E0E` ground, `#1F1E1E` surface). The other eight are drift.

### Text

`#E5E7EB` (7, primary) · `#D1D5DB` (2) · `#B4B3B3` (4) · `#6B6A6A` (7, dim) · `#4B4A4A` (10) · `#3A3939`, `#3A3838` (1 each)

### Borders

`#262525` (2) · `#201F1F` (3) · `#363637` (2) · `#38352F` (1)

### Semantic / status

`#FF0000` (3) · `#E60026` (4) · `#C9492C` (4) · `#FF6347` (1) — four reds, no defined meanings

### Brand marks (legitimate, leave alone)

`#E4405F` Instagram · `#1877F2` Facebook · `#0A66C2` LinkedIn · `#EA4B71` n8n · `#DC244C` Qdrant · `#4285F4` Google · `#4169E1` PostgreSQL · `#3776AB` Python · `#2496ED` Docker · `#10A37F` OpenAI · `#009688` FastAPI

### The variables that lie

```css
:root {
  --background: #2b2929;   /* but the page ground is rgb(15,14,14) */
  --foreground: #171717;   /* near-black text — on a near-black page */
}
body { color: var(--foreground); }
```

`--background` is not the background. `--foreground` is `#171717` on a `#0F0E0E` ground — a contrast ratio near 1:1. Every readable piece of text on the site is readable only because a Tailwind class overrode this. Any element that forgets to set a colour renders invisible.

## 3. Layout

### Breakpoints — ranged, not mobile-first

```ts
customsm: { min: '200px', max: '480px' }
smm:      { min: '480px', max: '640px' }
sm:       { min: '640px', max: '768px' }
md:       { min: '768px', max: '1024px' }
lg:       { min: '1024px', max: '1280px' }
xl:       { min: '1280px', max: '1536px' }
'2xl':    '1536px'
```

Every step except `2xl` is a closed range, so **nothing cascades upward**. `lg:my-3` applies from 1024 to 1279 and stops. Any spacing or layout rule that should hold on large screens must be written out at `lg:`, `xl:` and `2xl:` separately. This is the single most expensive decision in the codebase — it is the root cause of the footer collapsing above 1280px and of the 1366px hero overflow, both fixed this week.

### Radii

`rounded-md` 6px (27) · `rounded-lg` 8px (21) · `rounded-full` (20) · `rounded-[6px]` (5)

`rounded-[6px]` is `rounded-md` written the long way.

### Shadows

```ts
primary:   0px 0px 5px gray
secondary: 2px 2px 5px gray
custom:    10px 10px 10px rgb(15,14,14), 0px -0px 5px rgb(61,60,60)
```

All three use the CSS keyword `gray` (`#808080`) — a pure neutral, unrelated to the palette.

### Spacing

No scale. Tailwind's default 4px step is used ad hoc: `gap-1`, `gap-1.5`, `gap-2`, `gap-2.5`, `gap-3`, `gap-x-3`, `gap-x-4`, `mt-1` … `mt-10`, `my-4`, `p-3`, `p-4`. No section rhythm is defined anywhere; each section sets its own padding.

## 4. Global rules that do exist

- `color-scheme: dark` on `:root` — native controls render dark. Correct.
- `#footer-sec` — `height:auto`, `margin-top:150px`, background `#2b2929`.
- `prefers-reduced-motion` block — kills animation, transitions and smooth scroll. Correct.
- `body { min-height: 100vh; margin: 0; background: rgb(15,14,14) }`

---

# PART 2 — Audited against design fundamentals

Compared against the design skill's fundamentals. Ranked by how much each costs.

## A. The page has no typeface — and pays 134 KB for it

**Fundamental:** *typography carries the page even when the page isn't about typography; pair typefaces deliberately and declare a real fallback stack.*

Today the site has no type decision at all. It inherits Arial or Helvetica, which is the most templated possible outcome, and it downloads two unused fonts to get there.

**Fix (small, high payoff):** either wire Geist up properly —

```ts
// tailwind.config.ts → theme.extend
fontFamily: {
  sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
}
```

and delete `font-family: sans-serif` from `globals.css` — or drop the two `.woff` files and stop paying for them. **Doing neither is the only wrong answer**, and it is what ships today.

> **Resolved (2026-09-06) — Geist, wired properly.** This is the first
> option above, taken exactly as written.
>
> The route here is worth recording. The first attempt replaced Geist with
> IBM Plex Sans + IBM Plex Mono, on the reasoning in the paragraph below.
> That shipped, then Shahzain asked to go back to Geist — believing Geist
> was what the site had always rendered in. It was not: the audit above is
> the proof that the site had been drawing in Arial the whole time, so the
> face he liked was the browser default, not Geist.
>
> Told that, he chose Geist anyway, having now seen it wired. That is a
> decision made with the facts in hand, which is the only kind worth
> locking. The caveat in the next paragraph stands and was not withdrawn —
> Geist still will not read as a deliberate choice to anyone who knows
> Next.js. It is accepted, not solved. If the site ever needs to look less
> templated, typography is the cheapest lever left.
>
> `display: "swap"` was added to both faces at the same time; the original
> `localFont` calls had no display strategy.

Worth considering before wiring: Geist is a competent neutral, but it is also the default a Next.js project arrives with — it will not read as a choice. A deliberate pairing (a characterful display face for headings, a quiet body face, Geist Mono kept for code and data) is where this site would gain the most visual identity for the least work. Mono is genuinely earned here — the subject is agents, traces and tool calls.

## B. Forty-one colours where nine would do

**Fundamental:** *choose neutrals, don't default to them; spend boldness in one place and keep everything around it quiet.*

Ten near-identical darks and three oranges are not a palette, they are accumulated decisions. Nobody can see the difference between `#1A1919` and `#1C1B1B`; everybody can feel the inconsistency once three sections use three different ones.

**Proposed token set — nine values, every one already in the code:**

| Token | Hex | Role |
|---|---|---|
| `ground` | `#0F0E0E` | page background |
| `surface` | `#1F1E1E` | cards, panels |
| `surface-2` | `#141313` | inset wells inside a card |
| `border` | `#262525` | all hairlines |
| `text` | `#E5E7EB` | primary |
| `muted` | `#9CA3AF` | secondary |
| `dim` | `#6B6A6A` | labels, captions |
| `accent` | `#FD6F00` | the one bold thing |
| `accent-hover` | `#E46400` | hover / pressed |

Plus, from the showcase design: `accent-dim` `#C97F3E` for chips, `accent-line` `#3A2A18` for accent-tinted borders.

Status colours need defined meanings rather than four unexplained reds: `#4ADE80` deployed/live, `#FBBF24` in progress, `#6B6A6A` repo-only, and **one** red for genuine errors.

The neutrals should also be *chosen*, not inherited. `#0F0E0E` and `#1F1E1E` are pure greys. Biasing them a few points warm — toward the orange — makes the palette read as one system instead of "grey plus an accent". That is a real refinement, not a repaint.

> **Resolved (2026-09-06).** Shipped as fifteen tokens in `globals.css`,
> mapped in `tailwind.config.ts`: `ground surface surface-inset line ink
> muted dim faint accent accent-hover accent-dim accent-line ok warn`.
> Two names differ from the proposal above — `surface-inset` for
> `surface-2` and `line`/`ink` for `border`/`text` — because they read
> better at the call site. New sections use tokens, never raw hex.
>
> **Still open:** the warm-bias refinement in the paragraph above was not
> done. The neutrals shipped as pure greys.

## C. `--foreground: #171717` is a live hazard

Near-black text declared on a near-black ground. Nothing is broken today only because every text element overrides it. The first element that forgets renders invisible, and it will be invisible in a way that reviews clean in code. **Fix now, not later** — point the variables at the real values.

> **Resolved (2026-09-06).** Fixed in `globals.css` in the same pass.

## D. Twenty-three type sizes, no scale

**Fundamental:** *set a type scale and stay on it.*

`12px`, `12.5px` and `13px` all ship. No reader distinguishes them; every future section inherits the ambiguity.

**Proposed scale — seven steps, all already present:**

| Step | Size | Use |
|---|---|---|
| display | 30px | hero name |
| h2 | 24px | section headings |
| h3 | 19px | project titles |
| lead | 15px | hook lines |
| body | 14px | descriptions |
| small | 12.5px | buttons, meta |
| label | 10.5px | uppercase chips, eyebrows, status |

Uppercase labels get `letter-spacing: 0.05–0.09em`. Body copy should sit near 65 characters per line — the hero's `max-w-[600px]` at 14px is close; the showcase's 40% column is close. Nothing else in the codebase controls measure at all.

## E. The `01 / 02 / 03` numbering has to earn itself

**Fundamental:** *structural devices should encode something true, not decorate. Numbered markers are only appropriate if the content actually is a sequence.*

This is worth stating plainly because the numbering was added on a hunch. Selected Work is **not** a process — it is four independent projects. The numbering is only honest if the order carries real information, and here it does: strongest and most-proven first, unshipped last. That claim has to stay true. **If the order ever becomes arbitrary, the numbers become decoration and should come out.**

## F. Ranged breakpoints — live with them, don't fight them

Rewriting the config to standard mobile-first `min-width` breakpoints would be correct in the abstract and would silently change every one of the ~700 responsive classes in the tree. Not worth it.

**The rule instead:** every spacing or layout value that should hold on large screens is written at `lg:`, `xl:` **and** `2xl:`. This belongs in `AGENTS.md` so it survives whoever touches the code next — it has already caused two shipped bugs.

## G. Shadows use `gray`

Three shadows built on the CSS keyword `gray`. On a near-black page a neutral-grey glow reads as haze, not depth. Shadows on a dark ground should be darker than the surface, not lighter — or the elevation should be carried by the border and surface step instead. Cheap to fix, immediately visible.

## H. Missing entirely

- **No component rules.** Chip, button, status pill, card, section header — each is retyped per file. This is why the showcase chips and the Tech Stack chips do not match.
- **No section rhythm.** Every section invents its own vertical padding.
- **No focus-ring token.** 29 focus rings exist, added by hand, value repeated each time.
- **`public/` is 8.5 MB** and most of it is unreferenced.

---

# Priority

| | Item | Cost | Why now |
|---|---|---|---|
| 1 | Fix `--foreground` / `--background` | minutes | live hazard |
| 2 | Wire the typeface, or drop the files | ~30 min | the site currently has no type decision and pays 134 KB for it |
| 3 | Collapse to the 9-colour token set | ~1 hour | every future section inherits the drift otherwise |
| 4 | Adopt the 7-step type scale | ~1 hour | same |
| 5 | Write component rules (chip / button / pill / card / heading) | ~1 hour | this is what keeps the mobile version consistent with desktop |
| 6 | Put the `lg:`+`xl:`+`2xl:` rule in `AGENTS.md` | minutes | has already caused two shipped bugs |
| 7 | Fix the shadows | minutes | visible immediately |
| 8 | Clean `public/` | ~30 min | 8.5 MB |

Items 3, 4 and 5 should land **before** the mobile design, not after. A mobile version built on top of undefined tokens just doubles the drift.
