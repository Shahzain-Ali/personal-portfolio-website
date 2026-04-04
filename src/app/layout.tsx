import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Services from "./(pages)/services/page";
import About from "./(pages)/about/page";
import Contact from "./(pages)/contact/page";
import Portfolio from "./(pages)/portfolio/page";
import Footer from "./components/Footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shahzain Ali — AI Automation Developer",
  description: "I build intelligent AI agents and automation systems that help businesses save time and scale faster. Specializing in Python, OpenAI Agent SDK, MCP Servers, n8n, and FastAPI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Services/>
        <Portfolio/>
        <About/>
        <Contact/>
        <Footer/>
      </body>
      
    </html>
  );
}
