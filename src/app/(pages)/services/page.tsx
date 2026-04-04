import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {

  return (
    <div className="pt-10 customsm:px-0 sm:p-1 customsm:mt-10 smm:p-1 smm:landscape:mt-36  md:landscape:mt-20 sm:landscape:mt-36 overflow-x-hidden" id="service-sec">
      <div className="">
      <h1 className=" mx-auto my-0 text-gray-300 text-center w-16 smm:w-20 sm:w-20 md:w-24 lg:w-24 border-b border-[#FD6F00] text-lg smm:text-xl sm:text-xl md:text-2xl lg:text-2xl">
        Services
        <span className="absolute bottom-0 left-0 block w-0 h-0.5 bg-gray-200 transition-all duration-300 group-hover:w-16"></span>
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8 w-full max-w-7xl mx-auto px-4 py-8 place-items-center">
        <div className="w-60 md:w-[280px] lg:w-[280px] h-44 md:h-48 lg:h-48 p-2 rounded-lg bg-[#1f1e1e] text-gray-200 text-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-secondary">
          <i className="fas fa-robot text-[#FD6F00] text-xl mb-2"></i>
          <h2 className="text-sm md:text-base lg:text-base text-gray-300 mb-2 line-clamp-2">AI Agent Development</h2>
          <p className="text-xs md:text-sm lg:text-sm text-gray-400">
            Custom AI agents using OpenAI Agent SDK that think, plan, and act autonomously to handle complex tasks.
          </p>
        </div>
        <div className="w-60 md:w-[280px] lg:w-[280px] h-44 md:h-48 lg:h-48 p-2 rounded-lg bg-[#1f1e1e] text-gray-100 text-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-secondary">
          <i className="fas fa-cogs text-[#FD6F00]"></i>
          <h2 className="text-sm md:text-base lg:text-base text-gray-300 mb-2">Workflow Automation</h2>
          <p className="text-xs md:text-sm lg:text-sm text-gray-400">
            Business process automation using n8n and Python. Streamline repetitive tasks and boost productivity.
          </p>
        </div>
        <div className="w-60 md:w-[280px] lg:w-[280px] h-44 md:h-48 lg:h-48 p-2 rounded-lg bg-[#1f1e1e] text-gray-200 text-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-secondary">
          <i className="fas fa-comments text-[#FD6F00]"></i>
          <h2 className="text-sm md:text-base lg:text-base text-gray-300 mb-2">Chatbot Development</h2>
          <p className="text-xs md:text-sm lg:text-sm text-gray-400">
            AI-powered chatbots for WhatsApp, Telegram, Websites and apps. Intelligent conversations that serve your customers 24/7.
          </p>
        </div>
        <div className="w-60 md:w-[280px] lg:w-[280px] h-44 md:h-48 lg:h-48 p-2 rounded-lg bg-[#1f1e1e] text-gray-200 text-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-secondary">
          <i className="fas fa-laptop-code text-[#FD6F00]"></i>
          <h2 className="text-sm md:text-base lg:text-base text-gray-300 mb-2">AI-Powered Web Apps</h2>
          <p className="text-xs md:text-sm lg:text-sm text-gray-400">
            Full-stack applications with AI integration built using Next.js and Python for intelligent user experiences.
          </p>
        </div>
        <div className="w-60 md:w-[280px] lg:w-[280px] h-44 md:h-48 lg:h-48 p-2 rounded-lg bg-[#1f1e1e] text-gray-200 text-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-secondary">
          <i className="fas fa-share-alt text-[#FD6F00]"></i>
          <h2 className="text-sm md:text-base lg:text-base text-gray-300 mb-2">Social Media Automation</h2>
          <p className="text-xs md:text-sm lg:text-sm text-gray-400">
            Automated posting and management across platforms. Schedule, publish, and engage without lifting a finger.
          </p>
        </div>
        <div className="w-60 md:w-[280px] lg:w-[280px] h-44 md:h-48 lg:h-48 p-2 rounded-lg bg-[#1f1e1e] text-gray-200 text-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-secondary">
          <i className="fas fa-database text-[#FD6F00]"></i>
          <h2 className="text-sm md:text-base lg:text-base text-gray-300 mb-2">Data Processing & Integration</h2>
          <p className="text-xs md:text-sm lg:text-sm text-gray-400">
            API integrations, data pipelines, and dashboards. Connect your tools and make your data work for you.
          </p>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Services;
