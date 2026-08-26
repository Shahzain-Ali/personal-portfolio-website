import Link from "next/link";
import React from "react";
import SideNavbar from "../components/SideNavbar";

const Header = () => {
  return (
    <header className="w-[100%] ">
      {/* <div className="bg-blue-800">
      
      </div> */}
      <div className="border-1  ">
      {/* Navigation bar for larger screens  sm:hidden*/}
      <nav className=" text-[13px] tracking-[0.5px]   py-2 flex justify-between text-white  items-center">
      <SideNavbar/>
        <Link href="#home-sec" className="text-[2rem]">
          <li className="list-none bg-gradient-to-r from-[#FA6E00] to-[#E60026] text-transparent bg-clip-text text-[1.5rem] md:text-[1.2rem] font-bold whitespace-nowrap">
            Shahzain Ali
          </li>
        </Link>
        <ul className="flex gap-6 md:gap-3 text-gray-300 customsm:hidden smm:hidden sm:hidden text-[1.2rem] md:text-[0.9rem]">
          <Link href="#portfolio-sec">
            <li className="hover:bg-gray-700 hover:text-gray-50 rounded-md inline-block px-2 py-[0.2em] whitespace-nowrap">Work</li>
          </Link>
          <Link href="#service-sec">
            <li className="hover:bg-gray-700 hover:text-gray-50 rounded-md inline-block px-2 py-[0.2em] whitespace-nowrap">Services</li>
          </Link>
          <Link href="#about-sec">
            <li className="hover:bg-gray-700 hover:text-gray-50 rounded-md inline-block px-2 py-[0.2em] whitespace-nowrap">About</li>
          </Link>
          <Link href="#contact-sec">
            <li className="hover:bg-gray-700 hover:text-gray-50 rounded-md inline-block px-2 py-[0.2em] whitespace-nowrap">Contact</li>
          </Link>
        </ul>
        <Link href="#contact-sec" className="customsm:block text-gray-50 inline-block text-[0.8rem] w-[5.9rem] h-11 leading-[2.75rem] md:h-9 md:leading-9 lg:h-9 lg:leading-9 xl:h-9 xl:leading-9 2xl:h-9 2xl:leading-9 bg-[#E46400] rounded-md hover:bg-[#c9492c] text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD6F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e0e]">
          Work With Me
        </Link>
      </nav>

      {/* Burger Menu for small screens */}
      </div>
    </header>
  );
};

export default Header;
