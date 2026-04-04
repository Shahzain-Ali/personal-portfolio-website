"use client"
import React from "react";
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="px-4 lg:px-8 pt-3 sm:landscape:mb-[140px] md:landscape:mb-[100px] overflow-x-hidden" id="contact-sec">
      <div className="text-center customsm:mt-10 customsm:leading-8">
        <h1 className="text-gray-200 text-center mx-auto mb-2 w-fit text-lg smm:text-xl sm:text-xl md:text-2xl lg:text-2xl">
          <span className="border-b border-[#FD6F00] pb-[2px]">Contact Me</span>
        </h1>
        <p className="text-gray-400 customsm:text-[12px] lg:text-base">
          Reach Out: Let&apos;s Turn Ideas into Action and Drive Results
        </p>
        <form onSubmit={handleSubmit} className="text-gray-200 my-4 lg:my-6">
          <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ""} />

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="bg-[#282828] text-xs lg:text-sm h-8 lg:h-10 pl-3 rounded-[6px] mb-4 w-72 lg:w-96 focus:outline-none"
            required
          />
          <br />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="bg-[#282828] text-xs lg:text-sm h-8 lg:h-10 pl-3 rounded-[6px] mb-4 w-72 lg:w-96 focus:outline-none"
          />
          <br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#282828] text-xs lg:text-sm h-8 lg:h-10 pl-3 rounded-[6px] mb-4 w-72 lg:w-96 focus:outline-none"
            required
          />
          <br />

          <select
            name="service"
            className="bg-[rgb(40,40,40)] text-xs lg:text-sm h-8 lg:h-10 pl-3 rounded-[6px] mb-4 w-72 lg:w-96 text-gray-400"
          >
            <option value="">Service Of Interest</option>
            <option value="AI Agent Development">AI Agent Development</option>
            <option value="Workflow Automation">Workflow Automation</option>
            <option value="AI Chatbot Development">AI Chatbot Development</option>
            <option value="AI-Powered Web App">AI-Powered Web App</option>
            <option value="Social Media Automation">Social Media Automation</option>
            <option value="Data Processing & Integration">Data Processing & Integration</option>
            <option value="Other">Other</option>
          </select>
          <br />

          <textarea
            name="message"
            placeholder="Project Details..."
            className="bg-[rgb(40,40,40)] text-xs lg:text-sm text-gray-400 w-72 lg:w-96 h-[150px] lg:h-[180px] p-[10px] rounded-[6px] resize-none focus:outline-none"
          />
          <br />

          <button
            type="submit"
            disabled={status === "sending"}
            className="border border-gray-400 inline-block hover:text-white rounded-md py-[2px] px-3 lg:py-2 lg:px-4 hover:bg-[#363637] disabled:opacity-50 mt-2 lg:text-sm"
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm mt-2">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
