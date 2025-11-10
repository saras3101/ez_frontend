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
    <div className="flex flex-col transition-opacity duration-500 ease-in-out">
      <div className="flex flex-col items-center mt-14 justify-center">
        <p style={{ fontFamily: "'Halant', sans-serif" }} className="flex text-lg">
          The storyboard reveals the breadth of our craft.
        </p>
        <img src="/images/swatch.svg" className="flex h-6 w-98" />
      </div>
      <div className="flex flex-row items-center justify-center gap-0 mb-8">
        <div
          onClick={() => handlePolClick(1)}
          className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10"
        >
          <img className="flex h-82 w-68" src="/images/polone.svg" />
        </div>
        <div
          onClick={() => handlePolClick(2)}
          className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10"
        >
          <img className="flex h-82 w-68 mt-8" src="/images/poltwo.svg" />
        </div>
        <div
          onClick={() => handlePolClick(3)}
          className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10"
        >
          <img className="flex h-82 w-68" src="/images/polthree.svg" />
        </div>
      </div>
      <div>
        <img
          src="/images/border-mandala.svg"
          className="bottom-0 h-12 w-auto -z-1"
        />
      </div>
    </div>
  );
};

export default Services;