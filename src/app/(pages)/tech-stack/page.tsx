import React from "react";

type Group = {
  title: string;
  items: string[];
};

/**
 * Ordered the way a hiring manager scans: agent frameworks first (the differentiator), then the
 * model layer, retrieval, and the infrastructure underneath.
 *
 * Rule: nothing goes in this list until a shipped project proves it.
 * LangGraph joins the day DocPilot exists, not before. There is deliberately
 * no "Evaluation" group yet — that arrives with the DocPilot eval suite.
 */
const groups: Group[] = [
  {
    title: "AGENT FRAMEWORKS",
    items: ["Google ADK", "OpenAI Agents SDK", "MCP servers"],
  },
  {
    title: "LLMs & PROMPTING",
    items: ["GPT-4o-mini", "Gemini 2.5 Flash", "LiteLLM", "Function calling", "Structured output"],
  },
  {
    title: "RETRIEVAL & VECTOR",
    items: ["Qdrant Cloud", "text-embedding-3-small", "Heading-aware chunking", "Relevance filtering"],
  },
  {
    title: "AUTOMATION & INTEGRATION",
    items: ["n8n", "WhatsApp Cloud API", "Instagram webhooks", "Google Sheets API", "Webhooks"],
  },
  {
    title: "BACKEND & DATA",
    items: ["Python", "FastAPI", "PostgreSQL", "Neon", "Pydantic"],
  },
  {
    title: "OBSERVABILITY & SAFETY",
    items: ["ADK traces & spans", "Human-in-the-loop approval", "Rate limiting", "Budget caps"],
  },
  {
    title: "DEPLOYMENT & DEVOPS",
    items: ["Docker", "GitHub Actions", "Render", "Vercel", "Hugging Face Spaces"],
  },
  {
    title: "FRONTEND",
    items: ["Next.js", "TypeScript", "Tailwind CSS", "Streamlit"],
  },
];

const TechStack = () => {
  return (
    <div className="pt-10 pb-10 customsm:px-2 smm:px-2 overflow-x-hidden" id="stack-sec">
      <h1 className="mx-auto my-0 text-gray-300 text-center w-fit border-b border-[#FD6F00] text-lg smm:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
        Tech Stack
      </h1>
      <p className="text-center text-gray-500 text-[13px] mt-4 max-w-[640px] mx-auto px-4 leading-relaxed">
        Nothing is listed here without a shipped project behind it.
      </p>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 w-[90%] md:w-[85%] max-w-[1440px] mx-auto">
        {groups.map((group) => (
          <div key={group.title} className="bg-[#1f1e1e] rounded-lg p-5">
            <h2 className="text-gray-500 text-[10px] tracking-[1.1px] font-normal mb-3 mt-0">
              {group.title}
            </h2>
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="bg-[#2a2929] text-gray-300 text-[11.5px] px-2.5 py-[3px] rounded-md"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TechStack;
