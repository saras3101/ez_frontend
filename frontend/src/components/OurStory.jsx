import React from "react";

const OurStory = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex w-1/2 flex-col gap-4 p-34">
        <div
          style={{ fontFamily: "'Halant', sans-serif" }}
          className="flex text-center justify-center text-xl"
        >
          A montage of familiar faces and names.
        </div>

        <div
          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          className=" flex text-center justify-center text-xs px-6"
        >
          Some stories come from the biggest names. Others begin with bold,
          rising voices. We’ve been fortunate to walk alongside both -
          listening, creating, and building stories that matter.
        </div>

        <div className=" flex items-center justify-center">
          <img className="w-92 h-56 mt-8" src="src/assets/images/notes.svg" />
        </div>
      </div>

      <div className='flex w-1/2 flex-col pt-12 px-12'>
        <div style={{ fontFamily: "'Island Moments', sans-serif" }} className='text-3xl text-center mt-8'>
          Every project is more than just a brief - it’s a new chapter waiting
          to be written. Together, we've crafted tales that inspire, connect,
          and endure.
        </div>
        <div className='overflow-hidden max-h-[65%] relative mt-6'>
          <img src='src/assets/images/mountains-ring.svg' className='w-full object-cover object-top'  />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
