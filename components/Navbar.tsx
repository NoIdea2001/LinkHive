import React, { useState } from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import CreateAcc from './CreateAcc'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative w-[100vw]">
      <div className='flex flex-row justify-between items-center w-full h-[4rem] md:h-[5rem] lg:h-[6.4rem] px-4 md:px-[4vw] lg:px-[5.4vw]'>
        <Logo/> 
        <Navigation className="hidden md:block"/>
        <CreateAcc className="hidden md:block"/>
        <button 
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Hamburger menu icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`absolute top-[4rem] z-10 left-0 w-full bg-black/95 backdrop-blur-md transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col items-center py-6 space-y-6">
            <ul className='flex flex-col items-center space-y-6 text-[1.125rem]'>
              <li className='text-[#3C83F1]'>Home</li>
              <li className='text-white'>Dashboard</li>
              <li className='text-white'>FAQs</li>
            </ul>
            <div className="pt-4 border-t border-white/10 w-full flex justify-center">
              <CreateAcc className="block" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
    </div>
  )
}

export default Navbar