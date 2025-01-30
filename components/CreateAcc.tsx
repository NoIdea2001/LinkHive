import Image from 'next/image'
import React from 'react'
import people from '@/public/people.svg'

const CreateAcc = () => {
  return (
    <div className='w-[10.5rem] h-[1.5rem] flex flex-row gap-[0.625rem] items-center' >
        <Image src={people} alt='Create Account' />
        <p className='text-[1.25rem] whitespace-nowrap'>Create Account</p>
    </div>
  )
}

export default CreateAcc