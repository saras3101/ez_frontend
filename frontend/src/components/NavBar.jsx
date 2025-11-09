import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [open, setopen] = useState(false);
  const location = useLocation();

  const isOpen = () => {
    if (!open) {
      setopen(true);
    } else {
      setopen(false);
    }
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    
    setopen(false);
    
    if (location.pathname !== '/') {
      window.location.href = `/#${targetId}`;
      return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 56;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div>
      <nav className="fixed bg-white/40 w-full h-14 px-3 md:px-6 mt-2 z-50">
        <div className="flex flex-row justify-between items-center h-14">
          <div className="flex w-32 md:w-40 h-8">
            <img className="object-contain" src="/src/assets/images/logo.png" alt="logo" />
          </div>

          <div className="flex mx-4 justify-center items-center">
            <div
              className={`flex gap-4 mx-3 transition-all duration-500 ease-in-out ${
                open
                  ? "md:opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full pointer-events-none"
              }`}
            >
              
              <a  href="#services"
                onClick={(e) => handleScroll(e, 'services')}
                className="text-zinc-800 text-sm p-2 font-instrument font-normal hover:bg-white/50 rounded-4"
              >
                Services
              </a>
              
              <a  href="#their-story"
                onClick={(e) => handleScroll(e, 'their-story')}
                className="text-zinc-800 text-sm p-2 font-instrument font-normal hover:bg-white/50 rounded-4"
              >
                Their Story
              </a>
              
              <a href="#our-story"
                onClick={(e) => handleScroll(e, 'our-story')}
                className="text-zinc-800 text-sm p-2 font-instrument font-normal hover:bg-white/50 rounded-4"
              >
                Our Story
              </a>
              
              <a  href="#"
                className="text-zinc-800 text-sm p-2 font-instrument font-normal hover:bg-white/50 rounded-4"
              >
                Varnan
              </a>
              <button 
                onClick={(e) => handleScroll(e, 'contact')}
                className="flex flex-row items-center justify-center bg-[rgba(241,93,43,1)] w-24 h-8 gap-1 rounded-full px-1 py-1 hover:shadow hover:cursor-pointer"
              >
                <p className="flex text-xs text-white font-instrument">
                  Let's Talk
                </p>
                <img
                  src="/src/assets/images/mail.svg"
                  className="flex h-4 w-4"
                  alt="mail"
                />
              </button>
            </div>

            <button onClick={isOpen} className="hover:cursor-pointer mx-4">
              {open ? (
                <img
                  src="/src/assets/images/Open.svg"
                  alt="menu-btn"
                  className="h-8 w-12"
                />
              ) : (
                <img
                  src="/src/assets/images/Menu.svg"
                  alt="menu-btn"
                  className="h-8 w-12"
                />
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;