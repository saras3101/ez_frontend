import React from "react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div className="flex flex-row relative h-screen w-screen">
      <div className="hidden lg:flex flex-col w-1/6 justify-end items-center">
        <button onClick={handleBack} className="self-end text-sm text-red-500 text-center pt-1 pb-1 pl-2 pr-3 border rounded-full border-red-500 flex flex-row items-center justify-center hover:cursor-pointer hover:shadow">
          <img className="h-4 w-4" src="/images/chev.svg" />
          <p className="items-center justify-center text-center">Back</p>
        </button>
        <img src="/images/Cam.svg" className="flex h-102 w-34" />
      </div>

      <div className="flex flex-col w-full lg:w-4/6 pt-8 md:pt-12 lg:pt-2 items-center justify-center px-4 md:px-8 pb-32 md:pb-40 lg:pb-0">
        <button onClick={handleBack} className="lg:hidden self-start mb-6 text-xs md:text-sm text-red-500 text-center pt-1 pb-1 pl-2 pr-3 border rounded-full border-red-500 flex flex-row items-center justify-center hover:cursor-pointer hover:shadow">
          <img className="h-3 w-3 md:h-4 md:w-4" src="/images/chev.svg" />
          <p className="items-center justify-center text-center">Back</p>
        </button>

        <div className="flex flex-col items-center mb-6 md:mb-8">
          <p
            style={{ fontFamily: "'Halant', sans-serif" }}
            className="flex text-lg md:text-xl text-center"
          >
            The Highlight Reel
          </p>
          <p
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            className="flex text-sm md:text-base text-center"
          >
            Watch the magic we've captured.
          </p>
        </div>

        <div className="flex relative justify-center items-center w-full lg:w-auto">
          <div className="relative w-full lg:w-auto">
            <img
              src="/images/Subtract.svg"
              className="w-full lg:w-124 h-auto"
            />

            <div className="absolute inset-0 flex items-center justify-center px-12 py-10 md:px-16 md:py-12 lg:px-20 lg:py-14">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/Cjw1p80nlgE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <button className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 hover:shadow hover:cursor-pointer">
              <img
                src="/images/left-arrow.svg"
                className="w-8 h-32 md:w-10 md:h-40 lg:w-12 lg:h-46"
                alt="Previous"
              />
            </button>

            <button className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 hover:shadow hover:cursor-pointer">
              <img
                src="/images/right-arrow.svg"
                className="w-8 h-32 md:w-10 md:h-40 lg:w-12 lg:h-46"
                alt="Next"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute overflow-hidden bottom-0 right-0">
        <img src="/images/footer-mandala.svg" className="h-48 w-48 md:h-60 md:w-60 lg:h-72 lg:w-34" />
      </div>
    </div>
  );
};

export default Portfolio;