import React from "react";

const PolThree = ({ onBack }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center mt-8 md:mt-12 lg:mt-14 justify-center">
        <p
          style={{ fontFamily: "'Halant', sans-serif" }}
          className="flex text-base md:text-lg text-center px-4"
        >
          "Filmmaking is a chance to live many lifetimes." - Robert Altman
        </p>
        <img
          src="/images/swatch.svg"
          className="flex h-4 w-64 md:h-6 md:w-80 lg:h-8 lg:w-100 mt-2"
        />
      </div>
      <div className="flex flex-row items-stretch justify-between px-4 md:px-8 lg:px-24 mt-4 mb-2 gap-4 md:gap-6 lg:gap-8 min-h-[300px]">
        <div
          style={{ fontFamily: "'Halant', sans-serif" }}
          className="hidden lg:flex flex-col justify-end items-start"
        >
          <button
            onClick={onBack}
            className="self-end text-sm mb-auto text-red-500 text-center pt-1 pb-1 pl-2 pr-3 border rounded-full border-red-500 flex flex-row items-center justify-center hover:cursor-pointer hover:shadow"
          >
            <img className="h-4 w-4" src="/images/chev.svg" />
            <p className="items-center justify-center text-center">Back</p>
          </button>
          <img src="/images/cut1.svg" className="w-20 md:w-24" />
        </div>
        <div
          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          className="flex flex-col items-center justify-center flex-1 max-w-3xl"
        >
          <button
            onClick={onBack}
            className="lg:hidden self-start text-xs md:text-sm mb-4 text-red-500 text-center pt-1 pb-1 pl-2 pr-3 border rounded-full border-red-500 flex flex-row items-center justify-center hover:cursor-pointer hover:shadow"
            style={{ fontFamily: "'Halant', sans-serif" }}
          >
            <img className="h-3 w-3 md:h-4 md:w-4" src="/images/chev.svg" />
            <p className="items-center justify-center text-center">Back</p>
          </button>
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 items-center w-full">
            <img
              className="flex h-48 w-40 md:h-56 md:w-48 lg:h-64 lg:w-56 object-cover"
              src="/images/pic3.svg"
            />
            <div className="flex flex-col items-start justify-start pt-2 md:pt-4 lg:pr-8 flex-1 px-4 lg:px-0">
              <p className="text-xs md:text-sm lg:text-base mb-2">
                Art isn't meant to sit on distant walls - it's meant to breathe,
                to travel, to belong.
              </p>
              <p className="text-xs md:text-sm lg:text-base leading-relaxed mb-2">
                Through every festival, every performance, and every gathering,
                we help stories find their stage and their people.
              </p>
              <p className="text-xs md:text-sm lg:text-base mb-2">V crafts:</p>
              <ul className="text-xs md:text-sm lg:text-base list-disc list-inside space-y-1 ml-2">
                <li>Art Festivals</li>
                <li>Live Performances</li>
                <li>Community Events</li>
                <li>Cultural Storytelling</li>
              </ul>
            </div>
          </div>
          <div
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            className="flex flex-col items-center justify-center mt-4 md:mt-6"
          >
            <p className="text-sm md:text-base">Explore Now</p>
            <img className="h-4 w-12 md:h-6 md:w-16" src="/images/Arrow.svg" />
          </div>
        </div>
        <div className="hidden lg:flex flex-col justify-between items-end">
          <img src="/images/cut4.svg" className="w-16 md:w-20" />
          <img
            src="/images/cut3.svg"
            className="w-20 md:w-24 mr-auto"
          />
          <img src="/images/cut2.svg" className="w-16 md:w-20" />
        </div>
      </div>
    </div>
  );
};

export default PolThree;