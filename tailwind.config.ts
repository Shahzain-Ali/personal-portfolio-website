import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /**
       * These are RANGES, not mobile-first minimums — every step except 2xl has
       * a max. So nothing cascades upward: lg: applies from 1024 to 1279 and
       * stops. Any spacing or layout rule that should hold on large screens has
       * to be written at lg: AND xl: AND 2xl: separately. This has already
       * caused two shipped bugs; don't assume Tailwind's usual behaviour here.
       */
      screens: {
        customsm: { min: "200px", max: "480px" },
        smm: { min: "480px", max: "640px" },
        sm: { min: "640px", max: "768px" },
        md: { min: "768px", max: "1024px" },
        lg: { min: "1024px", max: "1280px" },
        xl: { min: "1280px", max: "1536px" },
        "2xl": "1536px",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        // The seven steps the design actually uses. Anything outside these is
        // a decision worth questioning.
        label: ["10.5px", { lineHeight: "1.4", letterSpacing: "0.05em" }],
        small: ["12.5px", { lineHeight: "1.5" }],
        body: ["14px", { lineHeight: "1.65" }],
        lead: ["15px", { lineHeight: "1.5" }],
        h3: ["19px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h2: ["24px", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        display: ["30px", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      colors: {
        ground: "var(--ground)",
        surface: "var(--surface)",
        "surface-inset": "var(--surface-inset)",
        line: "var(--line)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        dim: "var(--dim)",
        faint: "var(--faint)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-dim": "var(--accent-dim)",
        "accent-line": "var(--accent-line)",
        ok: "var(--ok)",
        warn: "var(--warn)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        primary: "0px 0px 5px gray",
        secondary: "2px 2px 5px gray",
        custom: "10px 10px 10px rgb(15, 14, 14),0px -0px 5px rgb(61,60,60)",
      },
    },
  },
  plugins: [],
} satisfies Config;
