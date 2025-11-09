import React, { useState } from "react";
import PolOne from "./PolOne";
import PolTwo from "./PolTwo";
import PolThree from "./PolThree";

const Services = () => {
  const [selectedPol, setSelectedPol] = useState(null);

  const handlePolClick = (polNumber) => {
    setSelectedPol(polNumber);
  };

  const handleBack = () => {
    setSelectedPol(null);
  };

  if (selectedPol === 1) {
    return (
      <div className="transition-opacity duration-500 ease-in-out">
        <PolOne onBack={handleBack} />
      </div>
    );
  }
  if (selectedPol === 2) {
    return (
      <div className="transition-opacity duration-500 ease-in-out">
        <PolTwo onBack={handleBack} />
      </div>
    );
  }
  if (selectedPol === 3) {
    return (
      <div className="transition-opacity duration-500 ease-in-out">
        <PolThree onBack={handleBack} />
      </div>
    );
  }

  return (
    <div className="flex flex-col transition-opacity duration-500 ease-in-out min-h-screen">
      <div className="flex flex-col items-center mt-8 md:mt-12 lg:mt-14 justify-center px-4">
        <p style={{ fontFamily: "'Halant', sans-serif" }} className="flex text-base md:text-lg text-center">
          The storyboard reveals the breadth of our craft.
        </p>
        <img src="src/assets/images/swatch.svg" className="flex h-4 w-64 md:h-5 md:w-80 lg:h-6 lg:w-98 mt-2" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 lg:gap-0 mb-8 mt-6 md:mt-8 px-4">
        <div
          onClick={() => handlePolClick(1)}
          className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10"
        >
          <img className="flex h-64 w-52 md:h-72 md:w-60 lg:h-82 lg:w-68" src="src/assets/images/polone.svg" />
        </div>
        <div
          onClick={() => handlePolClick(2)}
          className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10"
        >
          <img className="flex h-64 w-52 md:h-72 md:w-60 lg:h-82 lg:w-68 md:mt-8" src="src/assets/images/poltwo.svg" />
        </div>
        <div
          onClick={() => handlePolClick(3)}
          className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10"
        >
          <img className="flex h-64 w-52 md:h-72 md:w-60 lg:h-82 lg:w-68" src="src/assets/images/polthree.svg" />
        </div>
      </div>
      <div className="mt-auto">
        <img
          src="src/assets/images/border-mandala.svg"
          className="bottom-0 h-12 w-full -z-1 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default Services;