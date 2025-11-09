import React from "react";
import { useNavigate } from "react-router-dom";

const TheirStory = () => {
  const navigate = useNavigate();

  const handleViewPortfolio = () => {
    navigate("/portfolio");
  };

  return (
    <div className="relative min-h-screen px-8 py-10">
    
      <div className="absolute top-16 left-22 z-10">
        <img
          className="h-64 w-102"
          src="/src/assets/images/note-1.svg"
          alt="Note"
        />
      </div>

    
      <div className="flex flex-row items-center justify-between max-w-7xl mx-auto pt-12">
      
        <div className="flex w-1/3 justify-start items-start pt-42 mt-8">
          <img
            className="h-56 w-56"
            src="/src/assets/images/indiaGate.svg"
            alt="India Gate"
          />
        </div>

      
        <div className="flex flex-col w-2/3 items-center justify-center">
          <img
            className="h-68 w-auto mt-8 mb-8"
            src="/src/assets/images/grp-ppl.svg"
            alt="Team"
          />
          <div className="flex flex-col items-center gap-3">
            <p
              style={{ fontFamily: "'Halant', sans-serif" }}
              className="text-lg text-gray-800"
            >
              Take a closer look at the stories V bring to life.
            </p>
            <button
              onClick={handleViewPortfolio}
              className="text-sm text-white bg-[#F15D2B] px-6 py-2 rounded-full hover:shadow-lg hover:bg-[#d94d1f] transition-all"
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
