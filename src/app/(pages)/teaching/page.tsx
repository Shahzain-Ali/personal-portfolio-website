import React from "react";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Teaching = () => {
  return (
    <div className="pt-10 pb-10 customsm:px-2 smm:px-2 overflow-x-hidden" id="teaching-sec">
      <h1 className="mx-auto my-0 text-gray-300 text-center w-fit border-b border-[#FD6F00] text-lg smm:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
        Teaching what I build
      </h1>
      <p className="text-center text-gray-500 text-[13px] mt-4 max-w-[640px] mx-auto px-4 leading-relaxed">
        The quickest way to know whether I actually understand a system is to watch me explain it.
      </p>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 w-[90%] md:w-[85%] max-w-[1000px] mx-auto">
        <article className="bg-[#1f1e1e] rounded-lg p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <i className="fas fa-book-open text-[#FD6F00] text-[18px]" aria-hidden="true"></i>
            <h2 className="text-gray-200 text-[1.05rem] font-semibold m-0">Agentive Solutions</h2>
          </div>
          <p className="text-gray-400 text-[13.5px] leading-relaxed m-0">
            An interactive book on AI automation that I build and write. It covers what I actually work with: n8n
            workflows, webhooks and MCP, RAG, agents, and taking them to production. Every lesson pairs a video with a
            written chapter and an exercise. The AI tutor from the project above runs on it.
          </p>
          <Link
            href="https://shahzain-ali.github.io/agentive-solutions-book/"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-md px-5 min-h-[44px] text-[14px] font-semibold tracking-[0.01em] bg-accent hover:bg-accent-hover text-white transition-colors duration-200 mt-auto w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ground"
          >
            Read it <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </Link>
        </article>

        <article className="bg-[#1f1e1e] rounded-lg p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <FaYoutube className="text-[#FF0000] w-[19px] h-[19px]" aria-hidden="true" />
            <h2 className="text-gray-200 text-[1.05rem] font-semibold m-0">
              YouTube — SolutionsWithShahzain
            </h2>
          </div>
          <p className="text-gray-400 text-[13.5px] leading-relaxed m-0">
            Walkthroughs of the platforms I actually work with — WhatsApp Cloud API and Instagram webhook setup, n8n
            workflows, agent architecture. New videos as I ship.
          </p>
          <Link
            href="https://www.youtube.com/@SolutionsWithShahzain"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-md px-5 min-h-[44px] text-[14px] font-semibold tracking-[0.01em] bg-accent hover:bg-accent-hover text-white transition-colors duration-200 mt-auto w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ground"
          >
            Channel <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </Link>
        </article>
      </section>
    </div>
  );
};

export default Teaching;
