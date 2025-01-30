import React from 'react'
import logo from '@/public/logo.svg'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='logo flex flex-row space-x-2 gap-[0.5rem] items-center'>
        <Image src={logo} alt="logo" />
        <p className='text-[2rem] font-sf-display leading-[2.5rem] text-white'><strong className='font-[450]'>Link</strong><strong className='font-[100]'>Hive</strong></p>
    </div>
  )
}

export default Logo