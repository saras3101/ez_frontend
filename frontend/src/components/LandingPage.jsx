import React from "react";

const LandingPage = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center min-h-screen md:min-h-0">
        <div className="flex relative items-center justify-center m-4 mt-18 md:m-32 w-full md:w-auto">
          
          <img
            src="/images/heroMandala.svg"
            className="h-64 w-64 md:h-86 md:w-86 animate-spin"
            style={{ animationDuration: '20s' }}
            alt="Mandala"
          />
          
          <img
            src="/images/logo.png"
            className="h-12 w-32 md:h-16 md:w-40 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="Logo"
          />
        </div>

        <div className="flex w-full md:w-1/2 p-6 md:p-24 flex-col gap-6 md:gap-12 justify-center items-center">
          <div
            style={{ fontFamily: "'Island Moments', sans-serif" }}
            className="flex flex-col justify-center text-2xl md:text-4xl items-center font-island text-center"
          >
            <p className="flex">Varnan is where stories find</p>
            <p className="flex">their voice and form</p>
          </div>

          <div className="flex">
            <p
              style={{ fontFamily: "'Halant', sans-serif" }}
              className="text-[#F15D2B] text-base md:text-xl"
            >
              Films . Brands . Art
            </p>
          </div>
          <div
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            className="flex w-full md:w-66 px-4 md:px-0"
          >

            <p className='text-center text-xs md:text-[0.625rem] leading-relaxed'>
              Since 2009, V've been telling stories - stories of people, their
              journeys, and the places that shape them. Some begin in polished
              boardrooms, others in humble village squares. But every story
              starts the same way - by listening with intention. V believes it
              takes trust, patience, and an eye for the unseen to capture what
              truly matters. V doesn't just tell stories - V honors them.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;