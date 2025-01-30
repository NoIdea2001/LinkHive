import Image from 'next/image'
import React from 'react'
import arrow from '@/public/line-md_arrow-up.svg'
import clipboard from '@/public/clipboard.svg'

const URLshortInput = () => {
  return (
    <div className="flex flex-col items-center bg-white bg-opacity-[0.01] w-[69.5625rem] h-[26rem] mx-auto mt-[3.5rem] py-[2.1875rem] gap-[2.1875rem]">
      <p className='text-[2.25rem]'>URL shortner</p>
      <p className='text-[1.375rem] font-[200]'>Paste your long link</p>
      <div className="relative w-[45.375rem]">
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
        flex items-center justify-center gap-2">
        Shorten my link
        <Image src={arrow} alt='arrow'/>
      </button>
    </div>
  )
}

export default URLshortInput