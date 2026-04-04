import React, { useState, useEffect, useRef } from "react";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const sidenavRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "#service-sec" },
    { name: "About me", link: "#about-sec" },
    { name: "Contact me", link: "#contact-sec" },
    { name: "Portfolio", link: "#portfolio-sec" },
  ];

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close menu if click is outside hamburger and sidenav
      if (
        isMenuOpen &&
        hamburgerRef.current && !hamburgerRef.current.contains(event.target as Node) &&
        sidenavRef.current && !sidenavRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Add event listeners
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listeners
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <div className="lg:hidden md:hidden sm:block smm:block customsm:block">
      <div
        ref={hamburgerRef}
        className="relative flex items-center justify-center w-10 h-8 cursor-pointer z-50"
        onClick={toggleMenu}
      >
        <div
          className={`w-[30px] h-[3px] bg-white rounded-md relative transition-all duration-500 ease-in-out
            ${isMenuOpen ? ' bg-transparent before:rotate-45 before:translate-x-[5px] before:translate-y-[5px] after:-rotate-45 after:translate-x-[5px] after:-translate-y-[5px]' : ''}
            before:content-[''] before:absolute before:w-[30px] before:h-[3px] before:bg-white before:rounded-md before:transition-all before:duration-500 before:ease-in-out before:-translate-y-[10px]
            after:content-[''] after:absolute after:w-[30px] after:h-[3px] after:bg-white after:rounded-md after:transition-all after:duration-500 after:ease-in-out after:translate-y-[10px]
          `}
        />
      </div>

      <div
        ref={sidenavRef}
        className={`
          fixed top-0 left-0 h-screen bg-gradient-to-b from-[rgba(46,46,46,0.7)] to-[rgba(128,0,32,0.7)]
          transition-all duration-300 ease-in-out overflow-hidden z-40
          ${isMenuOpen ? 'sm:w-[180px] md:hidden lg:hidden customsm:w-[160px] smm:w-[180px]' : 'w-0'}
        `}
      >
        <ul className="list-none p-0 m-0 flex flex-col justify-center customsm:justify-normal customsm:pt-12 smm:justify-normal smm:pt-12 h-full">
          {menuItems.map((item, index) => (
            <li 
              key={index} 
              className="px-5 py-4 customsm:py-6 smm:py-6 hover:bg-white/10 transition-colors duration-300"
            >
              <a 
                href={item.link} 
                className="text-white text-base no-underline transition-colors duration-300 hover:text-[#ff6347]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;