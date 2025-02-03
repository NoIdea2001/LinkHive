import React from 'react'
import logo from '@/public/logo.svg'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='logo flex flex-row space-x-2 gap-[0.5rem] items-center'>
        <Image src={logo} alt="logo" className="w-[24px] h-[24px] md:w-[27px] md:h-[27px] lg:w-[30px] lg:h-[30px]" />
        <p className='text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] font-sf-display leading-[2rem] md:leading-[2.25rem] lg:leading-[2.5rem] text-white'>
          <strong className='font-[450]'>Link</strong><strong className='font-[100]'>Hive</strong>
        </p>
    </div>
  )
}

export default Logo