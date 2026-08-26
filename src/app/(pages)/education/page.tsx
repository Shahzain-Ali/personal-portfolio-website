import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

type Entry = {
  qualification: string;
  institution: string;
  period: string;
  note?: string;
};

// Most recent first.
const education: Entry[] = [
  {
    qualification: "BS Computer Science",
    institution: "Virtual University of Pakistan",
    period: "2024 — Expected 2028",
  },
  {
    qualification: "Agentic AI Architect",
    institution: "Governor Initiative for Artificial Intelligence & Computing (GIAIC)",
    period: "2024 — 2026",
    note: "Agentic AI, multi-agent systems and modern Python for production services.",
  },
];

const Education = () => {
  return (
    <div className="pt-10 pb-10 customsm:px-2 smm:px-2 overflow-x-hidden" id="education-sec">
      <h1 className="mx-auto my-0 text-gray-300 text-center w-fit border-b border-[#FD6F00] text-lg smm:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
        Education
      </h1>

      <section className="mt-10 relative w-[90%] md:w-[85%] max-w-[820px] mx-auto pl-8">
        <span
          className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#FD6F00] to-[#3a3838]"
          aria-hidden="true"
        />
        <ul className="list-none p-0 m-0 flex flex-col gap-5">
          {education.map((entry) => (
            <li key={entry.qualification} className="relative">
              <span
                className="absolute -left-8 top-[22px] w-[15px] h-[15px] rounded-full bg-[#0f0e0e] border-[3px] border-[#FD6F00]"
                aria-hidden="true"
              />
              <div className="bg-[#1f1e1e] rounded-lg p-5">
                <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                  <h2 className="text-gray-200 text-[1rem] font-semibold m-0">{entry.qualification}</h2>
                  <span className="text-gray-500 text-[11.5px] whitespace-nowrap">{entry.period}</span>
                </div>
                <p className="text-[#FD6F00] text-[12.5px] m-0">{entry.institution}</p>
                {entry.note && (
                  <p className="text-gray-400 text-[12.5px] leading-relaxed mt-2.5 m-0">{entry.note}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Education;
