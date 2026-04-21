import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="landscape:mt-2 " id='footer-sec'>
        <div>
        <nav className="text-[13px] tracking-[0.5px]  px-auto customsm:px-auto  smm:px-auto py-2 flex text-white flex-col items-center ">
            <Link href="#home-sec" className="text-[1.5rem] pb-4">
           <li className="list-none bg-gradient-to-r from-[#FA6E00] to-[#E60026] text-transparent bg-clip-text font-bold">
                Shahzain Ali
            </li>
            </Link>
            <ul className="flex gap-6 customsm:gap-0 text-gray-300">
            <Link href="#home-sec">
                <li className="hover:bg-gray-700 hover:text-gray-50 rounded-md inline-block px-2 py-[0.2em]">
                Home
                </li>
            </Link>
            <Link href="#service-sec">
                <li className="hover:bg-gray-700 hover:text-gray-50 rounded-md inline-block px-2 py-[0.2em]">
                Services
                </li>
            </Link>
            <Link href="#about-sec">
                <li className= "hover:bg-gray-700 hover:text-gray-50 rounded-md inline-block px-2 py-[0.2em]">About me</li>
            </Link>
            <Link href="#contact-sec">
                <li className= "hover:bg-gray-700 hover:text-gray-50 rounded-md inline-block px-2 py-[0.2em]">Contact me</li>
            </Link>
            <Link href="#portfolio-sec">
                <li className="list-none hover:bg-gray-700 hover:text-gray-50 rounded-md inline-block px-2 py-[0.2em]">Portfolio</li>
            </Link>
        </ul>
        </nav>
        <div className="text-[1.6rem] text-gray-300  mx-auto   w-[60%] smm:w-[90%] customsm:w-[100%]">
        <ul className="flex gap-4 my-3 mx-auto justify-center">
          <li className="border border-gray-500 cursor-pointer hover:shadow-primary hover:scale-110 transition-all duration-300 rounded-full w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center flex-shrink-0">
            <Link href="https://www.linkedin.com/in/shahzain-ali-518b862ba" target="_blank">
              <FaLinkedin className="text-[#0A66C2]" size={18} />
            </Link>
          </li>
          <li className="border border-gray-500 cursor-pointer hover:shadow-primary hover:scale-110 transition-all duration-300 rounded-full w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center flex-shrink-0">
            <Link href="https://github.com/Shahzain-Ali/" target="_blank">
              <FaGithub className="text-white" size={18} />
            </Link>
          </li>
          <li className="border border-gray-500 cursor-pointer hover:shadow-primary hover:scale-110 transition-all duration-300 rounded-full w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center flex-shrink-0">
            <Link href="https://www.youtube.com/@SolutionswithShahzain" target="_blank">
              <FaYoutube className="text-[#FF0000]" size={18} />
            </Link>
          </li>
          <li className="border border-gray-500 cursor-pointer hover:shadow-primary hover:scale-110 transition-all duration-300 rounded-full w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center flex-shrink-0">
            <Link href="">
              <FaFacebook className="text-[#1877F2]" size={18} />
            </Link>
          </li>
          <li className="border border-gray-500 cursor-pointer hover:shadow-primary hover:scale-110 transition-all duration-300 rounded-full w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center flex-shrink-0">
            <Link href="">
              <FaInstagram className="text-[#E4405F]" size={18} />
            </Link>
          </li>
        </ul>
        </div>
        <div className='text-gray-300 flex justify-center gap-6 border-b border-gray-300 customsm:w-[340px] w-[360px]  mx-auto pb-5'>
            <div >
                <span className="fa-solid fa-envelope inline-block mt-1 text-[14px] customsm:text-[12px]"></span>
                <span className="ml-2 text-[14px] customsm:text-[12px] ">enshahzainali110@gmail.com</span>
            </div>
            <div>
                <span className="fa-solid fa-phone mr-2 inline-block mt-1 text-[14px] customsm:text-[12px]"></span>
                <span className="inline-block text-[14px] customsm:text-[12px]">+92 3035498918</span>
            </div>
        </div>
        <div className='text-gray-300 w-[50%] smm:text-[11px] text-[12px] mx-auto text-center landscape:pb-4 '>
            <p className='mt-2 '>Built by Shahzain Ali <span className="block smm:inline sm:inline md:inline lg:inline ">— Agentive Solutions</span>
            </p>
        </div>
        </div>
    </footer>
  )
}

export default Footer