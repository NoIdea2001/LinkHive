import Image from 'next/image'
import React from 'react'
import dashboard from '@/public/dashboard.svg'

const Dashboard = () => {
  return (
    <div className='hidden sm:flex items-center justify-center mt-[8vw] w-[90vw]'>
        <Image src={dashboard} alt='dashboard' />
    </div>
  )
}

export default Dashboard