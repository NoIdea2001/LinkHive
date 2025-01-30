import React from 'react'
import grid from '../public/grids.svg'
const GradientBackground = () => {
  return (
    <div className="relative flex min-h-screen h-96 w-full items-center justify-center bg-[#080A0C] p-4 overflow-hidden">
      {/* Top left circle */}
      <div className="absolute z-0 -top-[20rem] -left-[20rem] h-[50rem] w-[50rem] rounded-full bg-[#0064FF] opacity-20 blur-[128px]"></div>
      
      {/* Bottom right circle */}
      <div className="absolute z-0 bottom-[8rem] right-[-20rem] h-[40.25rem] w-[40.25rem] rounded-full bg-[#0064FF] opacity-20 blur-[128px]"></div>
      
      {/* Left Grid overlay */}
      <div 
        className="absolute left-0 z-10 w-1/2 h-full"
        style={{
          backgroundImage: `url(${grid.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '200%',
          backgroundPosition: 'left',
        }}
      ></div>

      {/* Right Grid overlay (mirrored) */}
      <div 
        className="absolute right-0 z-10 w-1/2 h-full"
        style={{
          backgroundImage: `url(${grid.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '200%',
          backgroundPosition: 'left',
          transform: 'scaleX(-1)'
        }}
      ></div>
    </div>
  )
}

export default GradientBackground