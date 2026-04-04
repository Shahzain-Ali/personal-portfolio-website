import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";

const About = () => {
  return (
    <div className="py-8 w-[100vw] mt-10 sm:landscape:mt-12" id="about-sec">
      <h1 className="text-gray-200 text-center mb-8">
        <span className="border-b border-[#FD6F00] pb-[2px]">About Me</span>
      </h1>
      <div className=" box-border overflow-hidden ">
      <div className="grid grid-cols-[repeat(2,350px)] sm:w-auto lg:w-auto w-auto mx-auto sm:grid-cols-[repeat(2,350px)]  customsm:grid-cols-[repeat(1,300px)]  smm:grid-cols-[repeat(1,400px)] smm:gap-y-7 customsm:gap-y-5  customsm:justify-center smm:justify-center sm:justify-center sm:gap-0 md:gap-x-10 md:justify-center box-border ">
        {/* Image Container */}
        <div className="w-[100%]  max-w-[400px]  md:w-[380px] smm:w-[400px]  customsm:h-[270px] sm:w-[280px] sm:mx-auto smm:order-2 customsm:order-2 smm:justify-center  md:mx-auto sm:h-[320px] md:h-[540px]">
          <div className="h-[540px] smm:w-[100%] customsm:h-[320px]">
              <Image src="/AI_about_3-removebg-preview.png" alt="Artificial Intelligence" width={1000} height={400} className="sm:w-[100%] smm:w-[100%] customsm:h-[270px] sm:h-[320px] w-full h-full"/>
          </div>
        </div>
        
        {/* Text Container */}
        <div className="md:w-[380px]  h-[540px] sm:mx-auto sm:w-[280px] customsm:h-[270px]  smm:h-[340px]  box-border  smm:order-1 ">

          <div className="bg-gray-800 rounded-md p-4 shadow-custom h-[540px] customsm:h-[270px] smm:h-[320px] sm:h-[320px]  relative ">
            {/* Large Screen Text */}
            <p className="text-gray-300 text-justify text-base md:text-[14px] md:block smm:block sm:hidden customsm:hidden" >
              I&apos;m Shahzain Ali, an AI Automation Developer from Pakistan. While
              most developers build apps, I build digital employees — autonomous
              AI agents that think, plan, and execute business tasks 24/7.
              I&apos;ve delivered AI solutions for 2 paid clients, including a
              Full-Time Equivalent AI Employee with 7 MCP servers and 31 tools
              that manages Gmail, WhatsApp, social media, and accounting — saving
              businesses 20+ hours weekly. I also built AutoInvoice AI, an agentic
              pipeline that generates and delivers PDF invoices in seconds, and a
              RAG-powered chatbot for a Physical AI course book with 500+ students.
              I specialize in Python, OpenAI Agent SDK, MCP Servers, n8n, and
              FastAPI. I also build modern web applications with Next.js, TypeScript,
              and Tailwind CSS. My mission is to replace repetitive business work
              with intelligent systems that run autonomously — making AI automation
              accessible for companies of every size. I share my learnings on
              YouTube at @SolutionsWithShahzain.
            </p>
          <div className="sm:block ">
            {/* Mobile Screen Text */}
            <p className="text-gray-300 text-justify text-sm  md:hidden smm:hidden customsm:block ">
              I&apos;m Shahzain Ali, an AI Automation Developer from Pakistan.
              I build digital employees — autonomous AI agents that think,
              plan, and execute business tasks 24/7. I specialize in Python,
              OpenAI Agent SDK, MCP Servers, n8n, FastAPI, Next.js, and
              Tailwind CSS. My mission is to replace repetitive work with
              intelligent systems that run autonomously.
            </p>
            </div>

            {/* Download CV Button */}
            <button className="mt-4 bg-[#E46400] hover:bg-[#c9492c] 
              text-gray-200 px-4 customsm:px-2 customsm:py-2 py-2 rounded-md  b
              items-center justify-center absolute  bottom-4
              text-sm transition duration-300 text-[12px]
              hover:text-gray-50">
              <i className="fa-solid fa-download mr-2 customsm:text-[12px]"></i>
              Download CV
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;


