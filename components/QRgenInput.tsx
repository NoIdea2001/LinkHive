import Image from 'next/image'
import React from 'react'
import arrow from '@/public/line-md_arrow-up.svg'
import clipboard from '@/public/clipboard.svg'
import qrman from '@/public/QRman.svg'

const QRgenInput = () => {
  return (
    <div className="relative flex flex-row bg-white bg-opacity-[0.01] w-[69.5625rem] h-[26rem] mx-auto mt-[3.5rem] py-[2.1875rem] rounded-[1.5rem] overflow-hidden
      before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-[1px]
      before:bg-gradient-to-r before:from-white/50 before:via-white/30 before:to-transparent before:[--tw-gradient-stops:theme(colors.grey)_0%,theme(colors.white)_50%,theme(colors.white/0)_90%]
      after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-[1px]
      after:bg-gradient-to-r after:from-white/50 after:via-[#0064FF] after:[--tw-gradient-stops:theme(colors.white)_0%,theme(colors.blue-600)_50%,theme(colors.transparent)_90%]
      border-l-[1px] border-l-white/70">
      {/* Top blur circle */}
      <div className='w-[1000px] h-[1000px] rounded-full blur-[60px] absolute 
        bg-white/20
        bg-gradient-radial from-white/90 via-white/50 to-transparent 
        -top-[12rem] left- transform -translate-x-1/2 -translate-y-1/2 
        z-[1]'/>
      {/* Bottom blur circle */}
      <div className='w-[1000px] h-[1000px] rounded-full blur-[60px] absolute 
        bg-[#72A9FF]/20
        bg-gradient-radial from-[#72A9FF]/90 to-transparent 
        top-[52rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        z-[1]'/>
      <div className='flex flex-col ml-12 gap-[2.1875rem] relative z-[2]'>
        <p className='text-[2.25rem]'>QR Code Generator</p>
        <p className='text-[1.375rem] font-[200]'>Paste your long link here</p>
        <div className="relative w-[45.375rem]">
            <input 
            type="text" 
            placeholder='https://example.com/your-long-url.com'
            className="w-[39rem] h-[3.375rem] 
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
            <div className="absolute right-28 top-1/2 -translate-y-1/2">
            <Image src={clipboard} alt='clipboard'/>
            </div>
        </div>
        <button className="w-[17.5rem] h-[3.25rem] 
            rounded-[1.625rem] mt-[2.1875rem]
            bg-gradient-to-b from-[#3C83F1] via-[#00327E] to-[#003382]
            text-[1.25rem] text-white font-medium 
            hover:opacity-90 transition-opacity
            flex items-center justify-center gap-2">
            Generate my QR Code
            <Image src={arrow} alt='arrow'/>
        </button>
      </div>
      <div className='w-[19.563rem] h-[19.563rem] bg-[#D9D9D9] rounded-[1.688rem] flex items-center justify-center mr-[3.25rem] mt-3 relative z-[2]'>
        <Image src={qrman} alt='qr man'/>
      </div>
    </div>
  )
}

export default QRgenInput