import Image from 'next/image'
import React from 'react'
import arrow from '@/public/line-md_arrow-up.svg'
import clipboard from '@/public/clipboard.svg'

const URLshortInput = () => {
  return (
    <div className="relative flex flex-col items-center bg-white bg-opacity-[0.01] w-[69.5625rem] h-[26rem] mx-auto mt-[3.5rem] py-[2.1875rem] gap-[2.1875rem] rounded-[1.5rem] overflow-hidden
      before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-[1px]
      before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent
      after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-[1px]
      after:bg-gradient-to-r after:from-transparent after:via-[#0064FF] after:to-transparent">
      <div className='w-[1000px] h-[1000px] rounded-full blur-[60px] absolute 
        bg-white/10
        bg-gradient-radial from-white/50 via-white/30 to-transparent 
        -top-[22rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        z-[1]'/>
      <div className='w-[1000px] h-[1000px] rounded-full blur-[60px] absolute 
        bg-[#72A9FF]/20
        bg-gradient-radial from-[#72A9FF]/90 to-transparent 
        top-[50rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        z-[1]'/>
      <p className='text-[2.25rem] relative z-[2]'>URL shortner</p>
      <p className='text-[1.375rem] font-[200] relative z-[2]'>Paste your long link here</p>
      <div className="relative w-[45.375rem] z-[2]">
        <input 
          type="text" 
          placeholder='https://example.com/your-long-url.com'
          className="w-full h-[3.375rem] 
            bg-white/10 
            rounded-[0.625rem]
            pl-4
            text-[1.25rem]
            text-white
            placeholder:text-white/50
            placeholder:text-[1.25rem]
            focus:outline-none
            flex items-center"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <Image src={clipboard} alt='clipboard'/>
        </div>
      </div>
      <button className="w-[14.1875rem] h-[3.25rem] 
        rounded-[1.625rem] mt-[2.1875rem]
        bg-gradient-to-b from-[#3C83F1] via-[#00327E] to-[#003382]
        text-[1.25rem] text-white font-medium 
        hover:opacity-90 transition-opacity
        flex items-center justify-center gap-2
        relative z-[2]">
        Shorten my link
        <Image src={arrow} alt='arrow'/>
      </button>
    </div>
  )
}

export default URLshortInput