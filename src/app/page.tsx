"use client";
import React from "react";
import Header from "./components/Header";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";
import { FaLinkedin, FaGithub, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";




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
   
    <div className="min-h-screen w-[100%] landscape:min-h-screen landscape:bg-gradient-to-br landscape:to-[rgb(17, 17, 17)] landscape:from-[rgb(255, 255, 255)] landscape:w-screen landscape:h-auto " id="home-sec box-border">
      <div className=" w-[88%]  box-border mx-auto ">
      <Header></Header>

      {/* #################### Short Personal Info ################# */}

      <div className="customsm:grid customsm:place-items-center  ">
      <main className="md:w-[100%] lg:w-[100%] min-h-[78vh] customsm:w-[100%] mx-auto md:flex lg:flex sm:w-[100%] customsm:min-h-[480px] gap-8 md:gap-12 lg:gap-16 sm:flex-col sm:items-center sm:justify-start customsm:text-center">
        <section id="section-1" className="w-[45%] md:w-[42%] lg:w-[48%] xl:w-[45%] sm:w-full custom:w-[50%] customsm:w-auto customsm:justify-center smm:text-center smm:w-auto md:text-left shrink-0 sm:text-center">
        <div className="pt-8 sm:leading-8 leading-[45px] customsm:leading-[50px]  customsm:mx-auto customsm:w-auto smm:mx-auto smm:w-auto ">
          <h3 className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.2rem] smm:text-[25px] customsm:text-[25px] sm:text-[26px] text-gray-400 tracking-[0.8px]">
            Hi,I am
          </h3>
          <h2 className="text-[2.2rem] md:text-[2.6rem] lg:text-[2.6rem] sm:text-[30px] text-gray-300 tracking-[1.5px]">
            Shahzain Ali
          </h2>
        </div>
        <div className="text-[2.2rem] md:text-[2.4rem] lg:text-[2.4rem] font-bold h-[48px] md:h-[50px] lg:h-[50px] customsm:w-auto whitespace-nowrap overflow-visible">
          <div className="text-[2.2rem] md:text-[2.4rem] lg:text-[2.4rem] customsm:text-[24px] smm:text-[30px] font-bold h-[48px] md:h-[50px] lg:h-[50px] leading-[1.1] relative top-0 sm:text-[28px] whitespace-nowrap overflow-visible">
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
        
        <p className="text-gray-400 text-[0.95rem] sm:text-[1.1rem] md:text-[0.9rem] customsm:text-[0.8rem] mt-2 sm:mt-1 leading-relaxed max-w-[500px] sm:mx-auto">
          I build intelligent AI agents and automation systems that help businesses save time and scale faster.
        </p>

        {/* #######################  Official websites links #################### */}

        <ul className="flex gap-x-4 mt-4 w-auto mx-auto customsm:justify-center md:justify-start smm:justify-center sm:justify-center sm:my-2">
          <Link href="https://www.linkedin.com/in/shahzain-ali-518b862ba" target="_blank" className="border border-gray-600 cursor-pointer hover:shadow-primary hover:scale-110 transition-all duration-300 rounded-full w-9 h-9 flex items-center justify-center">
            <FaLinkedin className="text-[#0A66C2]" size={20} />
          </Link>
          <Link href="https://github.com/Shahzain-Ali/" target="_blank" className="border border-gray-600 cursor-pointer hover:shadow-primary hover:scale-110 transition-all duration-300 rounded-full w-9 h-9 flex items-center justify-center">
            <FaGithub className="text-white" size={20} />
          </Link>
          <Link href="https://www.youtube.com/@SolutionsWithShahzain" target="_blank" className="border border-gray-600 cursor-pointer hover:shadow-primary hover:scale-110 transition-all duration-300 rounded-full w-9 h-9 flex items-center justify-center">
            <FaYoutube className="text-[#FF0000]" size={20} />
          </Link>
          <Link href="" className="border border-gray-600 cursor-pointer hover:shadow-primary hover:scale-110 transition-all duration-300 rounded-full w-9 h-9 flex items-center justify-center">
            <FaFacebook className="text-[#1877F2]" size={20} />
          </Link>
          <Link href="" className="border border-gray-600 cursor-pointer hover:shadow-primary hover:scale-110 transition-all duration-300 rounded-full w-9 h-9 flex items-center justify-center">
            <FaInstagram className="text-[#E4405F]" size={20} />
          </Link>
        </ul>

        {/* ############### Buttons Hire Me and Download CV   #################### */}

        <div className="flex my-6 gap-3 customsm:justify-center smm:justify-center md:justify-start sm:my-4 sm:justify-center customsm:mt-10">
          <Link href="#contact-sec" className="inline-block text-white text-[0.8rem] sm:text-[0.95rem] w-[5.5rem] sm:w-[6.5rem] h-[1.7rem] sm:h-[2.1rem] bg-[#E46400] rounded-md hover:bg-[#c9492c] text-center leading-[1.7rem] sm:leading-[2.1rem]">
            Work With Me
          </Link>

          <a href="/Shahzain-Ali-Resume.pdf" download className="inline-block border border-gray-300 hover:bg-[#363637] hover:text-gray-50 text-[0.8rem] sm:text-[0.95rem] text-gray-300 w-[6.5rem] sm:w-[7.5rem] h-[1.7rem] sm:h-[2.1rem] rounded-md text-center leading-[1.7rem] sm:leading-[2.1rem]">
            Download CV
          </a>
        </div>
        <section className="grid grid-cols-4 gap-x-6 gap-y-3 mt-4 customsm:mx-auto customsm:w-auto customsm:gap-x-4 customsm:gap-y-2 customsm:pt-3 smm:mx-auto md:mx-0 sm:mx-auto shadow-secondary rounded-md w-full max-w-[450px] p-4 border">
          {/* Row 1: Python, OpenAI, MCP, Streamlit */}
          <div className="flex flex-col items-center gap-1.5">
            <svg viewBox="0 0 256 255" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
              <defs><linearGradient id="py1" x1="12.96%" y1="12.07%" x2="79.69%" y2="78.21%"><stop offset="0%" stopColor="#387EB8"/><stop offset="100%" stopColor="#366994"/></linearGradient><linearGradient id="py2" x1="19.13%" y1="20.58%" x2="90.43%" y2="88.01%"><stop offset="0%" stopColor="#FFC836"/><stop offset="100%" stopColor="#FFD43B"/></linearGradient></defs>
              <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 110 22.24 11.12 11.12 0 010-22.24z" fill="url(#py1)"/>
              <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 110-22.24 11.12 11.12 0 010 22.24z" fill="url(#py2)"/>
            </svg>
            <span className="text-gray-300 text-[10px] sm:text-sm md:text-xs whitespace-nowrap">Python</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 0011.05.5 6.074 6.074 0 005.292 4.7a5.993 5.993 0 00-3.962 2.936 6.058 6.058 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.5 23.5a6.056 6.056 0 005.772-4.206 6 6 0 003.957-2.93 6.052 6.052 0 00-.947-6.543zM13.5 21.95a4.483 4.483 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.804 17.93a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.578a4.506 4.506 0 01-5.936-1.649zM2.53 8.275a4.49 4.49 0 012.354-1.97V12.1a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071.005L3.95 14.509A4.504 4.504 0 012.53 8.275zm16.475 3.884l-5.843-3.398 2.02-1.166a.075.075 0 01.071-.005l5.046 2.912a4.495 4.495 0 01-.7 8.108v-5.77a.78.78 0 00-.394-.681zm2.01-3.026l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.49 9.636V7.304a.07.07 0 01.034-.063l5.046-2.908a4.494 4.494 0 016.674 4.66l.001.14zM8.39 12.71L6.37 11.54a.07.07 0 01-.038-.052V5.908a4.494 4.494 0 017.375-3.453l-.142.08L8.79 5.295a.79.79 0 00-.39.677l-.01 6.738zm1.1-2.368l2.6-1.502 2.6 1.502v3.004l-2.6 1.502-2.6-1.502V10.34z" fill="#10A37F"/>
            </svg>
            <span className="text-gray-300 text-[10px] sm:text-sm md:text-xs whitespace-nowrap">OpenAI</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <svg viewBox="15 18 155 175" width="28" height="28" xmlns="http://www.w3.org/2000/svg" fill="none">
              <path d="M25 97.8528L92.8823 29.9706C102.255 20.598 117.451 20.598 126.823 29.9706V29.9706C136.196 39.3431 136.196 54.5391 126.823 63.9117L75.5581 115.177" stroke="white" strokeWidth="12" strokeLinecap="round"/>
              <path d="M76.2653 114.47L126.823 63.9117C136.196 54.5391 151.392 54.5391 160.765 63.9117L161.118 64.2652C170.491 73.6378 170.491 88.8338 161.118 98.2063L99.7248 159.6C96.6006 162.724 96.6006 167.789 99.7248 170.913L112.331 183.52" stroke="white" strokeWidth="12" strokeLinecap="round"/>
              <path d="M109.853 46.9411L59.6482 97.1457C50.2757 106.518 50.2757 121.714 59.6482 131.087V131.087C69.0208 140.459 84.2168 140.459 93.5894 131.087L143.794 80.8822" stroke="white" strokeWidth="12" strokeLinecap="round"/>
            </svg>
            <span className="text-gray-300 text-[10px] sm:text-sm md:text-xs whitespace-nowrap">MCP</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 6.5V11c0 5.25 3.4 10.15 8 11.5 4.6-1.35 8-6.25 8-11.5V6.5L12 2zm-1 15l-4-4 1.41-1.41L11 14.17l5.59-5.59L18 10l-7 7z" fill="#FF4B4B"/>
            </svg>
            <span className="text-gray-300 text-[10px] sm:text-sm md:text-xs whitespace-nowrap">Streamlit</span>
          </div>
          {/* Row 2: FastAPI, n8n, Next.js, Docker */}
          <div className="flex flex-col items-center gap-1.5">
            <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z" fill="#009688"/>
            </svg>
            <span className="text-gray-300 text-[10px] sm:text-sm md:text-xs whitespace-nowrap">FastAPI</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <svg viewBox="0 0 40 28" width="32" height="28" xmlns="http://www.w3.org/2000/svg" fill="none">
              <circle cx="5" cy="20" r="3.5" stroke="#EA4B71" strokeWidth="2.5"/>
              <circle cx="5" cy="20" r="1.2" fill="#EA4B71"/>
              <circle cx="15" cy="20" r="3.5" stroke="#EA4B71" strokeWidth="2.5"/>
              <circle cx="15" cy="20" r="1.2" fill="#EA4B71"/>
              <line x1="8.5" y1="20" x2="11.5" y2="20" stroke="#EA4B71" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M18.5 20 C22 20 24 16 27 10" stroke="#EA4B71" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <path d="M18.5 20 C22 20 24 22 27 25" stroke="#EA4B71" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <circle cx="30" cy="7" r="3.5" stroke="#EA4B71" strokeWidth="2.5"/>
              <circle cx="30" cy="7" r="1.2" fill="#EA4B71"/>
              <circle cx="30" cy="24" r="3.5" stroke="#EA4B71" strokeWidth="2.5"/>
              <circle cx="30" cy="24" r="1.2" fill="#EA4B71"/>
            </svg>
            <span className="text-gray-300 text-[10px] sm:text-sm md:text-xs whitespace-nowrap">n8n</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <svg viewBox="0 0 180 180" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
              <circle cx="90" cy="90" r="85" fill="black" stroke="white" strokeWidth="6"/>
              <path d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a89.552 89.552 0 007.509-7.325z" fill="white"/>
              <rect x="115" y="54" width="12" height="72" rx="2" fill="white"/>
            </svg>
            <span className="text-gray-300 text-[10px] sm:text-sm md:text-xs whitespace-nowrap">Next.js</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.186.186 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.186.186 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185zm-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185zM23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z" fill="#2496ED"/>
            </svg>
            <span className="text-gray-300 text-[10px] sm:text-sm md:text-xs whitespace-nowrap">Docker</span>
          </div>
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
      <section id="section-2" className="w-[55%] md:w-[72%] lg:w-[55%] xl:w-[55%] md:mr-0 hidden md:flex lg:flex items-center justify-center self-center">
        <div className="relative flex items-center justify-center md:translate-x-16 lg:translate-x-0">
          <div className="absolute w-[80%] h-[85%] rounded-full bg-gray-800/60 blur-sm top-[20%] md:top-[10%] lg:top-[10%] lg:w-[85%] lg:h-[90%]"></div>
          <Image
            src="/images/shahzain-no-bg.png"
            alt="Shahzain Ali — AI Automation Developer"
            width={1300}
            height={1200}
            className="relative z-10 object-contain drop-shadow-2xl w-full h-auto min-w-[300px] md:w-[400px] md:min-w-0 lg:w-[500px] lg:min-w-0 md:-translate-y-12 lg:-translate-y-12  rounded-lg"
            priority
          />
        </div>
      </section>

      {/* PERSONAL IMAGE - MOBILE (visible below md) */}
      <section className="w-full md:hidden lg:hidden mt-4 sm:mt-24 smm:mt-24 flex items-center justify-center mb-10 customsm:mb-[30px] sm:mb-[200px] smm:mb-[200px]">
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
    </div>
  );
}
