import React from "react";

const OurStory = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="flex w-full lg:w-1/2 flex-col gap-4 p-8 md:p-16 lg:p-34">
        <div
          style={{ fontFamily: "'Halant', sans-serif" }}
          className="flex text-center justify-center text-lg md:text-xl"
        >
          A montage of familiar faces and names.
        </div>

        <div
          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          className="flex text-center justify-center text-xs md:text-sm px-4 md:px-6"
        >
          Some stories come from the biggest names. Others begin with bold,
          rising voices. We've been fortunate to walk alongside both -
          listening, creating, and building stories that matter.
        </div>

        <div className="flex items-center justify-center">
          <img className="w-64 h-40 md:w-80 md:h-48 lg:w-92 lg:h-56 mt-6 md:mt-8" src="src/assets/images/notes.svg" />
        </div>
      </div>

      <div className='flex w-full lg:w-1/2 flex-col pt-8 px-8 md:pt-10 md:px-10 lg:pt-12 lg:px-12 pb-8 lg:pb-0'>
        <div style={{ fontFamily: "'Island Moments', sans-serif" }} className='text-2xl md:text-3xl text-center mt-4 md:mt-6 lg:mt-8 px-4 md:px-0'>
          Every project is more than just a brief - it's a new chapter waiting
          to be written. Together, we've crafted tales that inspire, connect,
          and endure.
        </div>
        <div className='overflow-hidden h-[50vh] md:h-[30vh] lg:h-[55%] relative mt-6'>
          <img src='src/assets/images/mountain-ring.svg' className='w-full h-full object-cover object-top scale-80'  />
        </div>
      </div>
    </div>
  );
};

export default OurStory;