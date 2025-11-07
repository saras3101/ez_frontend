import React from "react";
import NavBar from "./NavBar";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-row justify-between items-center">
        <div className="flex relative items-center m-32">
          {/* Mandala SVG (background) */}
          <img
            src="src/assets/images/heroMandala.svg"
            className="h-72 w-72"
            alt="Mandala"
          />
          {/* Logo PNG (above, centered over mandala) */}
          <img
            src="src/assets/images/logo.png"
            className="h-12 w-32 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="Logo"
          />
        </div>

        <div className="flex w-1/2 p-24 flex-col gap-12 justify-center items-center">
          <div
            style={{ fontFamily: "'Island Moments', sans-serif" }}
            className="flex flex-col justify-center text-4xl items-center font-island"
          >
            <p className="flex">Varnan is where stories find</p>
            <p className="flex">their voice and form</p>
          </div>
          <div className="flex">
            <p
              style={{ fontFamily: "'  Halant', sans-serif" }}
              className="text-[#F15D2B] text-2xl "
            >
              Films . Brands . Art
            </p>
          </div>
          <div
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            className="flex "
          >
            <p className="text-center">
              Since 2009, V’ve been telling stories - stories of people, their
              journeys, and the places that shape them. Some begin in polished
              boardrooms, others in humble village squares. But every story
              starts the same way - by listening with intention. V believes it
              takes trust, patience, and an eye for the unseen to capture what
              truly matters. V doesn’t just tell stories - V honors them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
