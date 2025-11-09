import React from 'react'

const PolOne = ({ onBack }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center mt-14 justify-center">
        <p style={{ fontFamily: "'Halant', sans-serif" }} className="flex text-base md:text-lg text-center px-4">"Filmmaking is a chance to live many lifetimes." - Robert Altman</p>
        <img
          src="src/assets/images/swatch.svg"
          className="flex h-8 w-100 md:h-8 md:w-lg"
        />
      </div>
      <div  className='flex flex-row items-stretch justify-between px-8 md:px-16 lg:px-24 mt-4 mb-2 gap-8 min-h-[300px]'>
        <div style={{ fontFamily: "'Halant', sans-serif" }} className='flex flex-col justify-end items-start'>
            <button 
              onClick={onBack}
              className='self-end text-sm mb-auto text-red-500 text-center pt-1 pb-1 pl-2 pr-3 border rounded-full border-red-500 flex flex-row items-center justify-center hover:cursor-pointer hover:shadow'
            > 
                <img className='h-4 w-4' src="src/assets/images/chev.svg"/>
                <p className='items-center justify-center text-center'>Back</p>
             </button>
            <img src="src/assets/images/Cam4.svg" className='w-20 md:w-24'/>
        </div>
        <div style={{ fontFamily: "'Instrument Sans', sans-serif" }} className='flex flex-col items-center justify-center flex-1 max-w-3xl'>
            <div className='flex flex-row gap-8 items-center w-full'>
                <img className='flex h-64 w-56 md:h-80 md:w-64 object-cover' src="src/assets/images/pic1.svg" />
                <div className='flex flex-col items-start justify-start pt-4 pr-8 flex-1'>
                    <p className='text-sm md:text-6'>Who says films are just an escape?</p>
                    <p className='text-sm md:text-6 leading-relaxed '>We see them as a way to live many lives - to feel, to explore, and to tell stories that stay. And with each film, we carry new memories and new reasons to keep creating.</p>
                    <p className='text-sm md:text-6 mb-2'>V crafts:</p>
                    <ul className='text-sm md:text-6 list-disc list-inside space-y-1 ml-2'>
                        <li>Documentaries</li>
                        <li>Corporate Videos</li>
                        <li>2D Animation Videos</li>
                        <li>3D Animation Videos</li>
                    </ul>
                </div>
            </div>
            <div style={{ fontFamily: "'Instrument Sans', sans-serif" }}  className='flex flex-col items-center justify-center'>
                <p className='text-base md:text-5 '>Explore Now</p>
                <img className='h-6 w-16' src='src/assets/images/Arrow.svg'/>
            </div>
        </div>
        <div className='flex flex-col justify-between items-end'>
            <img src="src/assets/images/Cam1.svg" className='w-16 md:w-20'/>
            <img src="src/assets/images/Cam2.svg" className='w-20 md:w-24 mr-auto'/>
            <img src="src/assets/images/Cam3.svg" className='w-16 md:w-20'/>
        </div>
      </div>
      
    </div>
  )
}

export default PolOne