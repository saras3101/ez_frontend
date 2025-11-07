import React, { useState } from 'react'


const NavBar = () => {
  const [open, setopen] = useState(false);
  
  const isOpen = () => {
    if(!open){
      setopen(true);

    }else{
      setopen(false);
    }
  }

  return (
    <div>
      <nav className='fixed bg-white/40 w-full h-14 mx-3 mt-2'>
       <div className='flex flex-row justify-between items-center h-14'>

        <div className='flex w-54 h-8 mx-4'>
          <img src="/src/assets/images/logo.png" />
        </div>
        
        <div className='flex mx-4 justify-center items-center'>
        
            <div className={`flex gap-4 mx-3 transition-all duration-500 ease-in-out ${
              open 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-full pointer-events-none'
            }`}>
            <a href="#" className='text-zinc-800 text-sm p-2 font-instrument font-normal hover:bg-white/50 rounded-4  '>
            Services
            </a>
            <a href="#" className='text-zinc-800 text-sm p-2 font-instrument font-normal hover:bg-white/50 rounded-4 '>
            Their Story
            </a>
            <a href="#" className='text-zinc-800 text-sm p-2 font-instrument font-normal hover:bg-white/50 rounded-4 '>
            Our Story
            </a>
            <a href="#" className='text-zinc-800 text-sm p-2 font-instrument font-normal hover:bg-white/50 rounded-4 '>
            Varnan
            </a>
            <button className='flex flex-row items-center justify-center  bg-[rgba(241,93,43,1)] w-24 h-8 gap-1 rounded-full px-1 py-1 hover:shadow'>
              <p className='flex text-xs text-white font-instrument'>Let's Talk</p>
              <img src="/src/assets/images/mail.svg" className='flex h-4 w-4'/>
            </button>
            </div>
        



          <button onClick={isOpen} className='mx-4'>
            {open ? 
              <img src="/src/assets/images/Open.svg" alt='menu-btn' className='h-8 w-12'/> :
              <img src="/src/assets/images/Menu.svg" alt='menu-btn' className='h-8 w-12'/>
            }
            
          </button>

        </div>

       </div>

      </nav>
    </div>
  )
}

export default NavBar