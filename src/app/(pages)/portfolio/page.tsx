import React from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";

const projects = [
  {
    title: "FTE AI Employee",
    description:
      "An autonomous AI agent that manages personal and business affairs 24/7. Reads Gmail, monitors WhatsApp, posts on social media (Facebook, Instagram, Twitter/X, LinkedIn), creates invoices in Odoo, and generates weekly CEO Briefings — all with human-in-the-loop approval.",
    tech: [
      "Python",
      "Claude Code",
      "MCP Servers",
      "Streamlit",
      "Odoo 17",
      "PostgreSQL",
      "Playwright",
      "API Integration",
    ],
    github: "https://github.com/Shahzain-Ali/ai-employee-fte-system",
    live: "#",
  },
  {
    title: "AutoInvoice AI",
    description:
      "Agentic invoice automation pipeline with 3 specialized AI agents (Validation → Template → Delivery). Pulls data from forms, Google Sheets, or Excel, generates PDF invoices, and emails them to clients — all in seconds.",
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
    live: "#",
  },
  {
    title: "Agentic Todo Evolution",
    description:
      "Full-stack todo app evolving through 3 phases: Console → Web App → AI Chatbot. Phase 3 adds an AI-powered chatbot using MCP Protocol for natural language task management.",
    tech: [
      "Python",
      "FastAPI",
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "OpenAI Agents SDK",
      "Better Auth",
      "ChatKit",
    ],
    github: "https://github.com/Shahzain-Ali/agentic-todo-evolution",
    live: "#",
  },
  {
    title: "FurniStore E-Commerce",
    description:
      "Modern furniture e-commerce platform with product management, payments, authentication, shipping, and internationalization.",
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
    live: "#",
  },
  {
    title: "Physical AI Course Book",
    description:
      "Interactive Docusaurus-based course book covering Physical AI & Humanoid Robotics with a built-in RAG AI chatbot. Users can ask questions and get instant, cited answers from the book content. Features floating chat widget, text selection Ask AI, and source citations.",
    tech: [
      "Docusaurus",
      "React",
      "FastAPI",
      "OpenAI Agents SDK",
      "GPT-4o-mini",
      "Qdrant Cloud",
      "Neon Postgres",
    ],
    github:
      "https://github.com/Shahzain-Ali/physical-ai-humanoid-robotics-course",
    live: "https://shahzain-ali.github.io/physical-ai-humanoid-robotics-course/",
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
              <h2 className="text-gray-200 text-[1.1rem] font-semibold mb-2">
                {project.title}
              </h2>
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
              <Link
                href={project.github}
                target="_blank"
                className="inline-flex items-center gap-1 text-[12px] text-gray-300 border border-gray-500 px-3 py-1 rounded-md hover:bg-gray-700 hover:text-gray-50 transition-colors"
              >
                <i className="fab fa-github"></i> GitHub
              </Link>
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-[12px] text-gray-300 bg-[#E46400] px-3 py-1 rounded-md hover:bg-[#c9492c] hover:text-gray-50 transition-colors"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
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
