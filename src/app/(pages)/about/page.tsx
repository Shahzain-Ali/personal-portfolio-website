import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";

const About = () => {
  return (
    <div className="py-8 w-full mt-10 sm:landscape:mt-12 overflow-x-hidden" id="about-sec">
      <h1 className="text-gray-200 text-center mb-8 mx-auto w-fit text-lg smm:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
        <span className="border-b border-[#FD6F00] pb-[2px]">About Me</span>
      </h1>
      <div className=" box-border overflow-hidden ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(2,420px)] xl:grid-cols-[repeat(2,420px)] 2xl:grid-cols-[repeat(2,420px)] gap-6 md:gap-8 lg:gap-8 xl:gap-8 2xl:gap-8 items-start justify-center mx-auto w-[90%] md:w-[85%] lg:w-auto xl:w-auto 2xl:w-auto">
        {/* Image Container */}
        <div className="w-full max-w-[420px] mx-auto md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0 h-[320px] md:h-[480px] lg:h-[550px] xl:h-[550px] 2xl:h-[550px] flex items-start justify-center">
          <div className="relative h-[280px] w-[280px] md:h-[440px] md:w-[440px] lg:h-[500px] lg:w-[500px] xl:h-[500px] xl:w-[500px] 2xl:h-[500px] 2xl:w-[500px]">
            <Image src="/AI_about_3-removebg-preview.png" alt="Artificial Intelligence" fill className="object-contain"/>
          </div>
        </div>

        {/* Text Container */}
        <div className="w-full max-w-[420px] mx-auto md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0 h-auto pt-0 md:pt-0">

          <div className="bg-gray-800 rounded-md p-4 shadow-custom h-auto relative ">
            <p className="text-gray-300 text-justify text-sm md:text-sm lg:text-base xl:text-base 2xl:text-base" >
              I&apos;m Shahzain Ali, an AI Automation Developer from Pakistan. While
              most developers build apps, I build digital employees — autonomous
              AI agents that think, plan, and execute business tasks 24/7. I&apos;ve
              shipped an AI receptionist that books appointments end-to-end on
              WhatsApp, an autonomous AI Employee running on 7 MCP servers with
              31 tools, an agentic RAG tutor that answers only from source
              material with citations, and an invoice pipeline that goes from raw
              data to a delivered PDF in under a minute. Every system is built
              the same way: real tools, real deployment, and human approval where
              it matters. I work with Python, Google ADK, the OpenAI Agents SDK,
              MCP servers, RAG with vector databases, n8n, FastAPI, and Docker.
              Whether you need a custom AI agent, a workflow automation, or an
              intelligent chatbot — I build systems that work while you sleep.
            </p>

            {/* Download CV Button */}
            <a href="/Shahzain-Ali-Resume.pdf" download className="mt-4 bg-[#E46400] hover:bg-[#c9492c]
              text-gray-200 px-4 py-2 rounded-md
              inline-flex items-center justify-center
              min-h-11 md:min-h-0
              text-sm transition-colors duration-300
              hover:text-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e0e]">
              <i className="fa-solid fa-download mr-2"></i>
              Download CV
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;


