"use client";
import React from "react";
import Header from "./components/Header";
import Portfolio from "./(pages)/portfolio/page";
import Services from "./(pages)/services/page";
import Teaching from "./(pages)/teaching/page";
import TechStack from "./(pages)/tech-stack/page";
import About from "./(pages)/about/page";
import Education from "./(pages)/education/page";
import Contact from "./(pages)/contact/page";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";
import { FaLinkedin, FaGithub, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import {
  SiPython,
  SiOpenai,
  SiGoogle,
  SiModelcontextprotocol,
  SiFastapi,
  SiN8N,
  SiPostgresql,
  SiNextdotjs,
  SiDocker,
} from "react-icons/si";

// react-icons 5.6.0 has no Qdrant mark yet, so the official SVG is inlined here.
const SiQdrant = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m12 16.5 3.897-2.25v-4.5L12 7.5 8.103 9.75v4.5zM1.607 18 12 24l3.897-2.25v-4.5L12 19.5l-6.495-3.75v-7.5L12 4.5l6.495 3.75v15L22.393 21V6L12 0 1.607 6Z" />
  </svg>
);

// Official brand marks. Nothing is listed here without a shipped project behind it.
const STACK = [
  { label: "Python", Icon: SiPython, color: "#3776AB" },
  { label: "OpenAI SDK", Icon: SiOpenai, color: "#10A37F" },
  { label: "Google ADK", Icon: SiGoogle, color: "#4285F4" },
  { label: "MCP", Icon: SiModelcontextprotocol, color: "#E5E7EB" },
  { label: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { label: "n8n", Icon: SiN8N, color: "#EA4B71" },
  { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { label: "Qdrant", Icon: SiQdrant, color: "#DC244C" },
  { label: "Next.js", Icon: SiNextdotjs, color: "#E5E7EB" },
  { label: "Docker", Icon: SiDocker, color: "#2496ED" },
];




export default function Home() {
  useEffect(() => {
    const handleResize = () => {
      // Handle resize logic here
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener
    };
  }, []);
  
  return (
   
    <div className="min-h-screen w-[100%] landscape:min-h-screen landscape:bg-gradient-to-br landscape:to-[rgb(17, 17, 17)] landscape:from-[rgb(255, 255, 255)] landscape:w-full landscape:h-auto " id="home-sec">
      <div className=" w-[88%] max-w-[1440px]  box-border mx-auto ">
      <Header></Header>

      {/* #################### Short Personal Info ################# */}

      <div className="customsm:grid customsm:place-items-center  ">
      <main className="md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] min-h-[78vh] customsm:w-[100%] mx-auto md:flex lg:flex xl:flex 2xl:flex sm:w-[100%] customsm:min-h-[480px] gap-8 md:gap-12 lg:gap-16 xl:gap-16 2xl:gap-16 xl:items-center 2xl:items-center sm:flex-col sm:items-center sm:justify-start customsm:text-center">
        <section id="section-1" className="w-[45%] md:w-[42%] lg:w-[48%] xl:w-[45%] 2xl:w-[45%] sm:w-full custom:w-[50%] customsm:w-auto customsm:justify-center smm:text-center smm:w-auto md:text-left lg:text-left xl:text-left 2xl:text-left shrink-0 sm:text-center">
        {/* availability strip — the first objection a remote recruiter has */}
        <div className="inline-flex items-center gap-2.5 bg-[#191818] border border-[#262525] rounded-full px-3.5 py-1.5 mb-4 customsm:mx-auto smm:mx-auto sm:mx-auto md:mx-0">
          <span className="w-[7px] h-[7px] rounded-full bg-green-400 shrink-0" aria-hidden="true" />
          <span className="text-[12px] customsm:text-[10.5px] text-gray-300 text-left">
            Open to remote roles &mdash; Karachi (UTC+5), overlaps EU &amp; US-East
          </span>
        </div>
        <div className="pt-2 sm:leading-8 leading-[45px] customsm:leading-[50px]  customsm:mx-auto customsm:w-auto smm:mx-auto smm:w-auto ">
          <h3 className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.2rem] xl:text-[2.2rem] 2xl:text-[2.2rem] smm:text-[25px] customsm:text-[25px] sm:text-[26px] text-gray-400 tracking-[0.8px]">
            Hi, I am
          </h3>
          <h2 className="text-[2.2rem] md:text-[2.6rem] lg:text-[2.6rem] xl:text-[2.6rem] 2xl:text-[2.6rem] sm:text-[30px] text-gray-300 tracking-[1.5px]">
            Shahzain Ali
          </h2>
        </div>
        <div className="text-[2.2rem] md:text-[2.4rem] lg:text-[2.4rem] xl:text-[2.4rem] 2xl:text-[2.4rem] font-bold h-[48px] md:h-[50px] lg:h-[50px] xl:h-[50px] 2xl:h-[50px] customsm:w-auto whitespace-nowrap overflow-visible">
          <div className="text-[2.2rem] md:text-[2.4rem] lg:text-[2.4rem] xl:text-[2.4rem] 2xl:text-[2.4rem] customsm:text-[24px] smm:text-[30px] font-bold h-[48px] md:h-[50px] lg:h-[50px] xl:h-[50px] 2xl:h-[50px] leading-[1.1] relative top-0 sm:text-[28px] whitespace-nowrap overflow-visible">
            <Typewriter
              options={{
                strings: [
                  '<span class="bg-gradient-to-r from-[#984300] to-[#FD6F00] bg-clip-text text-transparent">AI Automation Developer</span>',
                ],
                autoStart: true,
                loop: true,
                delay: 75,

              }}
            />
          </div>
        </div>
        
        <p className="text-gray-400 text-[0.95rem] sm:text-[1.1rem] md:text-[0.9rem] lg:text-[0.95rem] xl:text-[0.95rem] 2xl:text-[0.95rem] customsm:text-[0.8rem] mt-1 sm:mt-1 leading-relaxed max-w-[600px] sm:mx-auto">
          I build digital employees &mdash; AI agents and automation systems that take repetitive work off people&apos;s
          desks. They answer, decide and act on the systems a business already runs on, 24/7, within limits you set and
          with a human in the loop where it matters.
        </p>

        {/* #######################  Official websites links #################### */}

        <ul className="flex gap-x-3 mt-3 lg:mt-2 xl:mt-2 2xl:mt-2 w-auto mx-auto md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0 customsm:justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start smm:justify-center sm:justify-center sm:my-2">
          <Link href="https://www.linkedin.com/in/shahzain-ali1/" target="_blank" aria-label="LinkedIn profile" className="border border-gray-600 cursor-pointer hover:shadow-primary hover:scale-110 transition-transform duration-300 rounded-full w-11 h-11 md:w-9 md:h-9 lg:w-9 lg:h-9 xl:w-9 xl:h-9 2xl:w-9 2xl:h-9 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e0e]">
            <FaLinkedin className="text-[#0A66C2]" size={20} />
          </Link>
          <Link href="https://github.com/Shahzain-Ali/" target="_blank" aria-label="GitHub profile" className="border border-gray-600 cursor-pointer hover:shadow-primary hover:scale-110 transition-transform duration-300 rounded-full w-11 h-11 md:w-9 md:h-9 lg:w-9 lg:h-9 xl:w-9 xl:h-9 2xl:w-9 2xl:h-9 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e0e]">
            <FaGithub className="text-white" size={20} />
          </Link>
          <Link href="https://www.youtube.com/@SolutionsWithShahzain" target="_blank" aria-label="YouTube channel" className="border border-gray-600 cursor-pointer hover:shadow-primary hover:scale-110 transition-transform duration-300 rounded-full w-11 h-11 md:w-9 md:h-9 lg:w-9 lg:h-9 xl:w-9 xl:h-9 2xl:w-9 2xl:h-9 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e0e]">
            <FaYoutube className="text-[#FF0000]" size={20} />
          </Link>
          <Link href="https://www.facebook.com/shahzainalibangash1" target="_blank" aria-label="Facebook profile" className="border border-gray-600 cursor-pointer hover:shadow-primary hover:scale-110 transition-transform duration-300 rounded-full w-11 h-11 md:w-9 md:h-9 lg:w-9 lg:h-9 xl:w-9 xl:h-9 2xl:w-9 2xl:h-9 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e0e]">
            <FaFacebook className="text-[#1877F2]" size={20} />
          </Link>
          <Link href="https://www.instagram.com/shahzainalibangash1" target="_blank" aria-label="Instagram profile" className="border border-gray-600 cursor-pointer hover:shadow-primary hover:scale-110 transition-transform duration-300 rounded-full w-11 h-11 md:w-9 md:h-9 lg:w-9 lg:h-9 xl:w-9 xl:h-9 2xl:w-9 2xl:h-9 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e0e]">
            <FaInstagram className="text-[#E4405F]" size={20} />
          </Link>
        </ul>

        {/* ############### Buttons Hire Me and Download CV   #################### */}

        <div className="flex my-4 lg:my-3 xl:my-3 2xl:my-3 gap-3 customsm:justify-center smm:justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start sm:my-4 sm:justify-center customsm:mt-10">
          <Link href="#portfolio-sec" className="inline-flex items-center justify-center gap-1.5 text-white text-[0.8rem] sm:text-[0.95rem] w-[6.5rem] sm:w-[7.5rem] h-11 md:h-9 lg:h-9 xl:h-9 2xl:h-9 bg-[#E46400] rounded-md hover:bg-[#c9492c] text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e0e]">
            See the work
          </Link>

          <a href="/Shahzain-Ali-Resume.pdf" download className="inline-block border border-gray-300 hover:bg-[#363637] hover:text-gray-50 text-[0.8rem] sm:text-[0.95rem] text-gray-300 w-[6.5rem] sm:w-[7.5rem] h-11 leading-[2.75rem] md:h-9 md:leading-9 lg:h-9 lg:leading-9 xl:h-9 xl:leading-9 2xl:h-9 2xl:leading-9 rounded-md text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e0e]">
            Download CV
          </a>
        </div>
        <section className="grid grid-cols-5 gap-x-4 gap-y-2 mt-3 customsm:mx-auto customsm:w-auto customsm:gap-x-3 customsm:gap-y-2 customsm:pt-3 smm:mx-auto md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0 sm:mx-auto shadow-secondary rounded-md w-full max-w-[520px] p-3 border">
          {STACK.map(({ label, Icon, color }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <Icon className="w-6 h-6 shrink-0" style={{ color }} aria-hidden="true" />
              <span className="text-gray-300 text-[10px] sm:text-sm md:text-xs whitespace-nowrap">{label}</span>
            </div>
          ))}
        </section>
      
      </section>

      {/* SCREEN MOCKUP - COMMENTED OUT FOR REVERSION
      ############## Screen Section #################

      <section id="section-2" className="w-[20%]  md:w-[35%]  md:mr-0 customsm:hidden  smm:hidden md:block sm:w-[40%] sm:mr-0 mx-auto mr-4">
              <div className="mt-8  border border-red-500 bg-[#ffffffc3] sm:w-[15rem]  md:w-[100%] custom:w-[20rem] w-[20rem] sm:landscape:h-[210px] h-[240px] shadow-[0px_0px_5px_rgb(49_48_48),-0px_-0px_10px_rgb(70_69_69)] rounded-lg relative text-ellipsis overflow-hidden group mx-auto" >
                <div className="p-2 rounded-b-lg absolute w-full text-center bg-[#1c1b1b] bottom-0 left-0  h-[50px]">
                 <span className="text-transparent relative text-center bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text font-bold text-[1.2rem]">
                      Shahzain Ali
                </span>
              </div>
              <div className=" w-[50%] sm:w-[70%] mx-auto relative h-full flex flex-col items-center" >
                  <span className="md:w-[220px] md:text-[14px] sm:w-[220px] sm:text-[12px]  custom:text-[16px]  custom:w-[250px] block font-semibold mx-auto md:whitespace-normal md:break-none absolute text-black text-center font-sans opacity-0  h-[120px] bottom-[60%]  group-hover:transition-transform group-hover:duration-[0.6s] ease-in-out group-hover:translate-y-[55%]  group-hover:opacity-100 ">
                          Innovative Solutions for Modern <br /> Challenges. Transforming  <br /> Ideas into Digital <br /> Excellence
                  </span>
              </div>
            </div>
       </section>
      */}

      {/* PERSONAL IMAGE - DESKTOP (hidden below md) */}
      <section id="section-2" className="w-[55%] md:w-[72%] lg:w-[55%] xl:w-[55%] 2xl:w-[55%] md:mr-0 hidden md:flex lg:flex xl:flex 2xl:flex items-center justify-center self-center">
        <div className="relative flex items-center justify-center lg:translate-x-0">
          <div className="absolute w-[80%] h-[85%] rounded-full bg-gray-800/60 blur-sm top-[20%] md:top-[10%] lg:top-[10%] xl:top-[10%] 2xl:top-[10%] lg:w-[85%] lg:h-[90%] xl:w-[85%] xl:h-[90%] 2xl:w-[85%] 2xl:h-[90%]"></div>
          <Image
            src="/images/shahzain-no-bg.png"
            alt="Shahzain Ali — AI Automation Developer"
            width={1300}
            height={1200}
            className="relative z-10 object-contain drop-shadow-2xl w-full h-auto min-w-[300px] md:w-[400px] md:min-w-0 lg:w-[500px] lg:min-w-0 xl:w-[500px] xl:min-w-0 2xl:w-[500px] 2xl:min-w-0 md:-translate-y-12 lg:-translate-y-12 xl:-translate-y-12 2xl:-translate-y-12  rounded-lg"
            priority
          />
        </div>
      </section>

      {/* PERSONAL IMAGE - MOBILE (visible below md) */}
      <section className="w-full md:hidden lg:hidden xl:hidden 2xl:hidden mt-4 sm:mt-24 smm:mt-24 flex items-center justify-center mb-10 customsm:mb-[30px] sm:mb-[200px] smm:mb-[200px]">
        <div className="relative flex items-center justify-center sm:w-[280px] smm:w-[280px] sm:h-[300px] smm:h-[300px]">
          <div className="absolute w-[85%] h-[90%] rounded-full bg-gray-800/60 blur-sm top-[5%] customsm:top-[18%] customsm:w-[90%] customsm:h-[90%] sm:top-[12%] smm:top-[8%] sm:w-[130%] sm:h-[120%] smm:w-[130%]  smm:h-[120%]"></div>
          <Image
            src="/images/shahzain-no-bg.png"
            alt="Shahzain Ali — AI Automation Developer"
            width={450}
            height={420}
            className="relative z-10 object-contain drop-shadow-2xl w-full h-full smm:!min-w-[380px] smm:!min-h-[340px] sm:!min-w-[460px] sm:!min-h-[420px] rounded-lg"
            priority
          />
        </div>
      </section>
      </main>

      </div>

    </div>

      <Portfolio/>
      <Services/>
      <Teaching/>
      <TechStack/>
      <About/>
      <Education/>
      <Contact/>
    </div>
  );
}
