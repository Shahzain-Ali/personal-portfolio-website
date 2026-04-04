"use client"
// import { send } from "process";
import React from "react";
import { useState } from "react";

const Contact = () => {
  const [text, setText] = useState("Project Details...");
  return (
    
    
    <div className="px-4 pt-3  sm:landscape:mb-[140px] md:landscape:mb-[100px] " id="contact-sec">
      <div className="text-center customsm:mt-10 customsm:leading-8">
        <h1 className="text-gray-200 text-center mx-auto mb-2">
          <span className="border-b border-[#FD6F00] pb-[2px]">Contact Me</span>
        </h1>
        <p className="text-gray-400 customsm:text-[12px]">
          Reach Out: Let&apos;s Turn Ideas into Action and Drive Results
        </p>
        <form action="" className="text-gray-200 my-4">
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="bg-[#282828] text-xs h-8 pl-3 rounded-[6px] mb-4 w-72 focus:outline-none focus:none"
            required
          />{" "}
          <br />

          <input
              type="number"
              placeholder="Phone Number"
              className="bg-[#282828] text-xs h-8 pl-3 rounded-[6px] mb-4 w-72 focus:outline-none focus:none"
              required
            />
            <br />

          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="bg-[#282828] text-xs h-8 pl-3 rounded-[6px] mb-4 w-72 focus:outline-none"
            required
          />
          <br />

          <select
            name=""
            id=""
            className="bg-[rgb(40,40,40)] text-xs h-8 pl-3 rounded-[6px] mb-4 w-72"
          >
            <option value="" className="tracking-[12px]">
              Service Of Interest
            </option>
            <option value="">Frontend Development</option>
            <option value="">UI/UX design</option>
            <option value="">Landing Page</option>
            <option value="">Responsive Web Design</option>
            <option value="">Next.js Development</option>
          </select>
          <br />

          <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "288px",
          height: "150px",
          backgroundColor: 'rgb(40,40,40)',
          fontSize:"12px",
          color:"rgb(156 163 175)",
          resize:"none",
          padding: "10px",
          borderRadius: "6px",
          // border: "1px solid #ccc",
        }}
      /> <br />
      <button value="send" className="border border-gray-400 inline-block hover:text-white rounded-md py-[2px] px-3 hover:bg-[#363637]">Send</button>
          
        </form>
      </div>
      
    </div>
  );
};

export default Contact;
