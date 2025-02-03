import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center text-center mt-[6vw] md:mt-[4vw] lg:mt-[3.26vw] w-[100vw] md:w-[80vw] lg:w-[80vw]'>
      <p className='text-[2.25rem] md:text-[3rem] lg:text-[4rem] font-bold leading-[3rem] md:leading-[4rem] lg:leading-[5.25rem]'>
        Trasform Your <strong className='text-transparent bg-clip-text bg-gradient-to-b from-[#4D93FF] to-[#86B5FF]'>Links</strong><br />in a Click
      </p>
      <p className='text-[1rem] md:text-[1.2rem] lg:text-[1.375rem] font-extralight mt-[3vw] md:mt-[2vw] lg:mt-[1.4vw] font-sf-display px-4 md:px-8 lg:px-0'>
        Effortlessly shroten, secure, and optimize your links with cutting-edge tools.
      </p>
    </div>
  )
}

export default HeroSection