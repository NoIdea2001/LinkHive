import React from 'react'
import grid from '../public/grids.svg'
import Image from 'next/image'
import star from '@/public/Star2.svg'
import flower from '@/public/Periwinkle.svg'

const GradientBackground = () => {
  return (<>
    <div className="relative flex min-h-screen h-[250vh] w-[100vw] items-center justify-center bg-[#080A0C] p-4 overflow-clip">
      {/* Top left circle */}
      <div className="absolute z-0 -top-[20rem] -left-[20rem] h-[50rem] w-[50rem] rounded-full bg-[#0064FF] opacity-20 blur-[128px]"></div>
      
      {/* Bottom right circle */}
      <div className="absolute z-0 top-[13rem] right-[-20rem] h-[40.25rem] w-[40.25rem] rounded-full bg-[#0064FF] opacity-20 blur-[128px]"></div>
      
      {/* Left Grid overlay */}
      <div 
        className="absolute left-0 z-10 w-1/2 h-[70rem] top-0"
        style={{
          backgroundImage: `url(${grid.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '200%',
          backgroundPosition: 'left',
        }}
      ></div>

      {/* Right Grid overlay (mirrored) */}
      <div 
        className="absolute right-0 z-10 w-1/2 h-[70rem] top-0"
        style={{
          backgroundImage: `url(${grid.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '200%',
          backgroundPosition: 'left',
          transform: 'scaleX(-1)'
        }}
      ></div>
      <Image 
        src={star} 
        alt='star' 
        className='hidden sm:block absolute top-[60vh] right-[18vw]'
      />
      <Image 
        src={flower} 
        alt='flower'
        className="hidden sm:block absolute top-[50vw] left-[15vw]"
      />
      <div className='h-[60rem] w-[60rem] absolute rounded-full bg-[#0064FF] opacity-20 blur-[128px] top-[75rem]'></div>
    </div>
    {/* <div className="relative flex min-h-screen h-[70rem] w-full items-center justify-center bg-[#080A0C] p-4 overflow-hidden">
    </div> */}

  </>
  )
}

export default GradientBackground