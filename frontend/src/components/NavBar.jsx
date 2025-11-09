import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [open, setopen] = useState(false);
  const location = useLocation();

  const isOpen = () => {
    setopen(!open);
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
      
      <nav className="fixed bg-white/40 backdrop-blur-sm left-2 right-2 rounded top-2 h-14 px-3 md:px-6 z-50">
        <div className="flex flex-row justify-between items-center h-full">
          

          <div className="flex w-32 md:w-40 h-8">
            <img className="w-full h-full object-contain" src="/src/assets/images/logo.png" alt="logo" />
          </div>

          <div className="flex items-center">
            
           
            <div
              className={`hidden md:flex gap-4 mx-3 transition-all duration-500 ease-in-out ${
                open
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full pointer-events-none"
              }`}
            >
              <a  
                href="#services"
                onClick={(e) => handleScroll(e, 'services')}
                className="text-zinc-800 text-sm p-2 font-instrument font-normal hover:bg-white/50 rounded-lg transition-all"
              >
                Services
              </a>
              
              <a  
                href="#their-story"
                onClick={(e) => handleScroll(e, 'their-story')}
                className="text-zinc-800 text-sm p-2 font-instrument font-normal hover:bg-white/50 rounded-lg transition-all"
              >
                Their Story
              </a>
              
              <a 
                href="#our-story"
                onClick={(e) => handleScroll(e, 'our-story')}
                className="text-zinc-800 text-sm p-2 font-instrument font-normal hover:bg-white/50 rounded-lg transition-all"
              >
                Our Story
              </a>
              
              <a  
                href="#"
                className="text-zinc-800 text-sm p-2 font-instrument font-normal hover:bg-white/50 rounded-lg transition-all"
              >
                Varnan
              </a>
              
              <button 
                onClick={(e) => handleScroll(e, 'contact')}
                className="flex flex-row items-center justify-center bg-[rgba(241,93,43,1)] w-24 h-8 gap-1 rounded-full px-3 py-1 hover:shadow-lg transition-all"
              >
                <p className="text-xs text-white font-instrument">Let's Talk</p>
                <img src="/src/assets/images/mail.svg" className="h-4 w-4" alt="mail"/>
              </button>
            </div>

          
            <button onClick={isOpen} className="mx-2 z-50 hover:cursor-pointer">
              {open ? 
                <img src="/src/assets/images/Open.svg" alt="close-menu" className="h-8 w-12"/> :
                <img src="/src/assets/images/Menu.svg" alt="open-menu" className="h-8 w-12"/>
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Dropdown Menu - Only shows on small screens */}
      <div className={`md:hidden fixed top-20 left-2 right-2 rounded bg-white/95 backdrop-blur-md shadow-lg z-40 transform transition-all duration-300 ease-in-out ${
        open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        
        {/* Menu Items */}
        <div className="flex flex-col items-center gap-4 px-6 py-6">
          <a  
            href="#services"
            onClick={(e) => handleScroll(e, 'services')}
            className="text-zinc-800 text-base p-3 font-instrument font-normal hover:bg-gray-100 rounded-lg transition-all w-full text-center"
          >
            Services
          </a>
          
          <a  
            href="#their-story"
            onClick={(e) => handleScroll(e, 'their-story')}
            className="text-zinc-800 text-base p-3 font-instrument font-normal hover:bg-gray-100 rounded-lg transition-all w-full text-center"
          >
            Their Story
          </a>
          
          <a 
            href="#our-story"
            onClick={(e) => handleScroll(e, 'our-story')}
            className="text-zinc-800 text-base p-3 font-instrument font-normal hover:bg-gray-100 rounded-lg transition-all w-full text-center"
          >
            Our Story
          </a>
          
          <a  
            href="#"
            className="text-zinc-800 text-base p-3 font-instrument font-normal hover:bg-gray-100 rounded-lg transition-all w-full text-center"
          >
            Varnan
          </a>
          
          <button 
            onClick={(e) => handleScroll(e, 'contact')}
            className="flex flex-row items-center justify-center bg-[rgba(241,93,43,1)] w-full h-10 gap-2 rounded-full px-4 py-2 hover:shadow-lg transition-all mt-2"
          >
            <p className="text-sm text-white font-instrument">Let's Talk</p>
            <img src="/src/assets/images/mail.svg" className="h-4 w-4" alt="mail"/>
          </button>
        </div>
      </div>

      {open && (
        <div 
          className="md:hidden fixed inset-0 bg-black/30 z-30 transition-opacity duration-300"
          onClick={isOpen}
        />
      )}
    </div>
  );
};

export default NavBar;