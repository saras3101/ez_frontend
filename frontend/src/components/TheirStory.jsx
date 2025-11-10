import React from "react";
import { useNavigate } from "react-router-dom";

const TheirStory = () => {
  const navigate = useNavigate();

  const handleViewPortfolio = () => {
    navigate("/portfolio");
  };

  return (
    <div className="relative min-h-screen px-4 md:px-8 py-10">
    
      <div className="absolute top-18 md:top-16 left-4 md:left-22 z-10 w-64 md:w-auto">
        <img
          className="h-42 w-32 md:h-64 md:w-102"
          src="/images/note-1.svg"
          alt="Note"
        />
      </div>

    
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto pt-32 md:pt-12">
      
        <div className="flex w-full md:w-1/3 justify-center md:justify-start items-center md:items-start pt-12 md:pt-42 mt-4 md:mt-8 order-2 md:order-1">
          <img
            className="h-40 w-40 md:h-56 md:w-56"
            src="/images/indiaGate.svg"
            alt="India Gate"
          />
        </div>

      
        <div className="flex flex-col w-full md:w-2/3 items-center justify-center order-1 md:order-2">
          <img
            className="h-48 w-auto md:h-68 mt-4 md:mt-8 mb-6 md:mb-8"
            src="/images/grp-ppl.svg"
            alt="Team"
          />
          <div className="flex flex-col items-center gap-3 px-4">
            <p
              style={{ fontFamily: "'Halant', sans-serif" }}
              className="text-sm md:text-lg text-gray-800 text-center"
            >
              Take a closer look at the stories V bring to life.
            </p>
            <button
              onClick={handleViewPortfolio}
              className="text-xs md:text-sm text-white bg-[#F15D2B] px-5 md:px-6 py-2 rounded-full hover:shadow-lg hover:bg-[#d94d1f] transition-all"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheirStory;