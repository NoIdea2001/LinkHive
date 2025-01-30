import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import CreateAcc from './CreateAcc'

const Navbar = () => {
  return (
    <div className="relative">
      <div className='flex flex-row justify-between items-center w-full h-[6.4rem] px-[5.4vw]'>
        <Logo/> 
        <Navigation/>
        <CreateAcc/>
      </div>
      <div className="absolute w-[93.125rem] bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
    </div>
  )
}

export default Navbar