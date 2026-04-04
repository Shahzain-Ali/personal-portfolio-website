# AGENTS.md — Portfolio Website Updates Log

## Commit: b6ba192 — Update portfolio: replace stats with skills icons, fix hero image

### 1. Stats Section → Skills Icons Grid
- **Removed:** Old stats section (5 Projects | 31+ AI Tools | 1+ Experience | 7 MCP Servers)
- **Added:** 8 skill icons grid with official SVG icons and brand colors:
  - Row 1: Python, OpenAI, MCP, Streamlit
  - Row 2: FastAPI, n8n, Next.js, Docker
- MCP icon sourced from official `modelcontextprotocol` GitHub repo

### 2. Hero Image Fix
- **Removed:** Rectangular photo with white border (`shahzain-hero.png`)
- **Added:** Transparent cutout image (`shahzain-no-bg.png`) with:
  - Dark gray oval background (`bg-gray-800/60` with `blur-sm`)
  - Increased image size to `1300x1200` with `lg:scale-150` for large screens
  - Container width set to `w-[60%]` / `lg:w-[65%]`

### 3. Horizontal Scrollbar Fix
- Added `overflow-x: hidden` on `body` in `globals.css` to prevent horizontal scroll caused by image overflow

### 4. Identity Update
- Updated identity to **AI Automation Developer** across all sections

### 5. New Pages & Sections
- Added portfolio page (`src/app/(pages)/portfolio/page.tsx`)
- Updated services, about, contact, footer, and header sections
- Added personal images to `public/images/`

---

**27 files changed** | **Co-Authored-By:** Claude Opus 4.6
