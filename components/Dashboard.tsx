import Image from 'next/image'
import React from 'react'
import dashboard from '@/public/dashboard.svg'

const Dashboard = () => {
  return (
    <div className='flex items-center justify-center mt-[8rem]'>
        <Image src={dashboard} alt='dashboard'/>
    </div>
  )
}

export default Dashboard