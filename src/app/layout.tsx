import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";


/**
 * Geist Sans for everything readable, Geist Mono for every label.
 * Both are variable faces self-hosted from ./fonts via next/font/local, so
 * there is no runtime request to a font CDN.
 *
 * These files shipped for months but never rendered: nothing mapped their CSS
 * variables into Tailwind, and globals.css hardcoded `font-family: sans-serif`
 * over the top. Both of those are fixed now -- do not reintroduce a
 * font-family declaration in globals.css.
 */
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const SITE_URL = "https://shahzainaliportfolio-website-vert.vercel.app";
const DESCRIPTION =
  "I build digital employees — AI agents and automation systems that take repetitive work off people's desks. Python, Google ADK, OpenAI Agents SDK, MCP servers, RAG with Qdrant, n8n, FastAPI and Docker.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shahzain Ali — AI Automation Developer",
    template: "%s — Shahzain Ali",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Shahzain Ali",
    title: "Shahzain Ali — AI Automation Developer",
    description: DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Shahzain Ali — AI Automation Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahzain Ali — AI Automation Developer",
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

// Matches the browser/OS chrome (mobile address bar, PWA surface) to the page background.
export const viewport: Viewport = {
  themeColor: "#0f0e0e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
