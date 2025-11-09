import React from "react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div className="flex flex-row relative h-screen w-screen  ">
      <div className="flex  flex-col w-1/6 justify-end items-center">
        <button onClick={handleBack} className=" self-end text-sm text-red-500 text-center pt-1 pb-1 pl-2 pr-3 border rounded-full border-red-500 flex flex-row items-center justify-center hover:cursor-pointer hover:shadow">
          <img className="h-4 w-4" src="src/assets/images/chev.svg" />
          <p className="items-center justify-center text-center">Back</p>
        </button>
        <img src="src/assets/images/Cam.svg" className="flex h-102 w-34" />
      </div>

      <div className="flex flex-col w-4/6 pt-2 items-center justify-center">
        <div className="flex flex-col items-center mb-8">
          <p
            style={{ fontFamily: "'Halant', sans-serif" }}
            className="flex text-xl "
          >
            The Highlight Reel
          </p>
          <p
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            className="flex"
          >
            Watch the magic we've captured.
          </p>
        </div>

        <div className="flex relative justify-center items-center">
          <div className="relative">
            <img
              src="src/assets/images/Subtract.svg"
              className="w-124 h-auto"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <iframe
                className="w-8/10 h-6/10 rounded-lg"
                src="https://www.youtube.com/embed/Cjw1p80nlgE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <button className="absolute left-0 top-1/2 -translate-y-1/2 hover:shadow hover:cursor-pointer">
              <img
                src="src/assets/images/left-arrow.svg"
                className="w-12 h-46 "
                alt="Previous"
              />
            </button>

            <button className="absolute right-0 top-1/2 -translate-y-1/2 hover:shadow hover:cursor-pointer">
              <img
                src="src/assets/images/right-arrow.svg"
                className="w-12 h-46"
                alt="Next"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute overflow-hidden bottom-0 right-0">
        <img src="src/assets/images/footer-mandala.svg" className="h-72 w-34" />
      </div>
    </div>
  );
};

export default Portfolio;
