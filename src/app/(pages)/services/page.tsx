import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {

  return (
    <div className="pt-10 customsm:px-0 sm:p-1 customsm:mt-10 smm:p-1 smm:landscape:mt-36  md:landscape:mt-20 sm:landscape:mt-36" id="service-sec">
      <div className="">
      <h1 className=" mx-auto my-0 text-gray-300 text-center w-16 border-b border-[#FD6F00]">
        Services
        <span className="absolute bottom-0 left-0 block w-0 h-0.5 bg-gray-200 transition-all duration-300 group-hover:w-16"></span>
      </h1>
      <section className="md:w-auto customsm:grid-cols-2  customsm:mt-10 customsm:place-items-center sm:pt-1 smm:mt-3 smm:gap-y-4  sm:gap-y-4 customsm:w-auto  customsm:gap-y-6 smm:grid-cols-2 smm:py-0 smm:w-auto md:gap-y-4 lg:gap-y-4 smm:place-items-center mt-2   sm:place-items-center smm:text-[12px] sm:text-[12px] md:text-[16px]   sm:w-[80%] sm:grid-cols-2 md:grid-cols-3  custom2:w-[90vw] custom:w-[82vw]  custom:text-[16px]  mx-auto py-4 md:place-items-center grid grid-cols-3 grid-rows-2 ">
        <div className=" w-[240px] md:w-[240px] md:h-44 custom:w-60 customsm:w-[160px] customsm:h-[120px] customsm:pt-2 sm:w-[220px] sm:h-[140px] sm:pt-1 smm:p-1 smm:w-[220px]  smm:text-center smm:h-[140px] h-44 rounded-lg bg-[#1f1e1e] text-gray-200 text-center  transition-transform duration-[0.2s] hover:-translate-y-2 hover:shadow-secondary">
          <i className="fas fa-robot text-[#FD6F00]"></i>
          <h2 className="leading-10 md:leading-8  customsm:text-[0.7rem] customsm:leading-[18px] smm:leading-[20px] sm:leading-[20px]  smm:text-[11px]  md:text-[14px]   text-gray-300">AI Agent Development</h2>
          <p className="customsm:hidden smm:text-[12px] sm:text-[12px] md:text-[14px]  text-gray-400 text-centertext-gray-400">
            Custom AI agents using OpenAI Agent SDK that think, plan, and act autonomously to handle complex tasks.
          </p>
          <p className="text-xs customsm:block hidden smm:text-[8px] sm:text-[10px] md:text-[14px]  text-gray-400 text-centertext-gray-400">
            Custom AI agents that think, plan, and act autonomously.
          </p>
        </div>
        <div className=" w-60   custom:w-60 customsm:w-[160px]  customsm:h-[120px] customsm:pt-2 sm:w-[220px] sm:h-[140px] sm:pt-1 smm:w-[220px] smm:h-[140px] smm:p-1 md:w-[240px]  md:h-44 rounded-lg bg-[#1f1e1e] text-gray-100 text-center p-2  transition-transform duration-[0.2s] hover:-translate-y-2 hover:shadow-secondary">
          <i className="fas fa-cogs text-[#FD6F00] sm:p-0"></i>
          <h2 className="smm:leading-[20px] md:leading-8  leading-10 customsm:text-[0.7rem] customsm:leading-[18px]  smm:text-[12px] sm:leading-[20px]  md:text-[14px]  text-gray-300">Workflow Automation</h2>
          <p className="text-xs customsm:hidden smm:text-[12px] sm:text-[12px]  md:text-[14px]  text-gray-400">
            Business process automation using n8n and Python. Streamline repetitive tasks and boost productivity.
          </p>
          <p className="text-xs customsm:block hidden smm:text-[8px] sm:text-[12px] md:text-[14px]  text-gray-400">
             Business process automation using n8n and Python.
          </p>
        </div>
        <div className=" w-60 md:w-[240px] custom:w-60 customsm:w-[160px]  customsm:h-[120px] customsm:pt-2 sm:w-[220px] sm:h-[140px] sm:pt-1 md:h-44 smm:w-[220px]  smm:h-[140px] smm:p-1  h-44 rounded-lg bg-[#1f1e1e] text-gray-200 text-center p-2 transition-transform duration-[0.2s] hover:-translate-y-2 hover:shadow-secondary">
          <i className="fas fa-comments text-[#FD6F00]"></i>
          <h2 className="md:leading-8  leading-10 customsm:text-[0.7rem] customsm:leading-[18px]   smm:leading-[20px] sm:leading-[20px]  smm:text-[12px]  md:text-[14px]   text-gray-300">Chatbot Development</h2>
          <p className="text-xs customsm:hidden smm:text-[12px] sm:text-[12px] md:text-[14px]  text-gray-400">
            AI-powered chatbots for WhatsApp, Telegram, Websites and apps. Intelligent conversations that serve your customers 24/7.
          </p>
          <p className="text-xs customsm:block hidden  smm:text-[8px] sm:text-[12px] md:text-[14px]  text-gray-400">
            AI-powered chatbots for WhatsApp, Telegram, and websites.
          </p>
        </div>
        <div className=" w-60 md:w-[240px] md:h-44 custom:w-60 customsm:w-[160px]  customsm:h-[120px] customsm:pt-2 sm:w-[220px] sm:h-[140px] sm:pt-1 smm:w-[220px]  smm:h-[140px] smm:p-1  h-44 rounded-lg bg-[#1f1e1e] text-gray-200 text-center p-2 transition-transform duration-[0.2s] hover:-translate-y-2 hover:shadow-secondary">
          <i className="fas fa-laptop-code text-[#FD6F00]"></i>{" "}
          <h2 className="smm:leading-[20px] md:leading-8  leading-10 customsm:text-[0.7rem] customsm:leading-[18px] sm:leading-[20px] smm:text-[12px]   md:text-[14px]   text-gray-300">AI-Powered Web Apps</h2>
          <p className="text-xs customsm:hidden smm:text-[12px] sm:text-[12px] md:text-[14px] text-gray-400">
            Full-stack applications with AI integration built using Next.js and Python for intelligent user experiences.
          </p>
          <p className="text-xs customsm:block hidden smm:text-[8px] sm:text-[12px] md:text-[14px] text-gray-400">
            Full-stack apps with AI integration (Next.js + Python).
          </p>
        </div>
        <div className=" w-60 md:w-[240px] md:h-44 custom:w-60 customsm:w-[160px]  customsm:h-[120px] customsm:pt-2 sm:w-[220px] sm:h-[140px] sm:pt-1 smm:h-[140px] smm:p-1  smm:w-[220px] h-44 rounded-lg bg-[#1f1e1e] text-gray-200 text-center p-2 transition-transform duration-[0.2s] hover:-translate-y-2 hover:shadow-secondary">
          <i className="fas fa-share-alt text-[#FD6F00]"></i>{" "}
          <h2 className="smm:leading-[20px] md:leading-8  leading-10 customsm:text-[0.7rem] customsm:leading-[18px] sm:leading-[20px] smm:text-[12px]  md:text-[14px]   text-gray-300">Social Media Automation</h2>
          <p className="text-xs customsm:hidden smm:text-[12px] sm:text-[12px] md:text-[14px]  text-gray-400">
            Automated posting and management across platforms. Schedule, publish, and engage without lifting a finger.
          </p>
          <p className="text-xs customsm:block hidden smm:text-[8px] sm:text-[12px] md:text-[14px]  text-gray-400">
            Automated posting and management across platforms.
          </p>
        </div>
        <div className=" w-60  md:w-[240px] md:h-44 customsm:w-[160px]  customsm:h-[120px] customsm:pt-2 sm:w-[220px] sm:h-[140px] sm:pt-1 smm:w-[220px]  smm:h-[140px] smm:p-1  custom:w-60 h-44 rounded-lg bg-[#1f1e1e] text-gray-200 text-center p-2 transition-transform duration-[0.2s] hover:-translate-y-2 hover:shadow-secondary">
          <i className="fas fa-database text-[#FD6F00]"></i>{" "}
          <h2 className="smm:leading-[20px] md:leading-8  leading-10 customsm:text-[0.7rem] customsm:leading-[18px] sm:leading-[20px]  smm:text-[12px] md:text-[14px]   text-gray-300">Data Processing & Integration</h2>
          <p className="text-xs customsm:hidden smm:text-[12px] sm:text-[12px] md:text-[14px]  text-gray-400">
            API integrations, data pipelines, and dashboards. Connect your tools and make your data work for you.
          </p>
          <p className="customsm:block hidden text-xs smm:text-[8px]  text-gray-400">
            API integrations, data pipelines, and dashboards.
          </p>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Services;
