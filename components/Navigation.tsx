import React from 'react'

const Navigation = () => {
  return (
    <div className='relative min-w-[21.813rem] max-w-[30rem] h-[2.5rem]'>
        <div className='rounded-full absolute inset-0 opacity-10 bg-gradient-to-t from-white/50 to-white/5 backdrop-blur-sm border'></div>
        <ul className='absolute inset-0 z-10 flex flex-row gap-[2.25rem] text-[1.25rem] w-full justify-center items-center text-white'>
                <li className='text-[#3C83F1]'>Home</li>
                <li>Dashboard</li>
                <li>FAQs</li>
        </ul>
    </div>
  )
}

export default Navigation