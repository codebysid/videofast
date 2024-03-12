import React from 'react'
import { Triangle } from 'lucide-react';

const Logo = () => {
  return (
    <div className='flex flex-row items-center gap-2'>
      <Triangle color='white' fill='white' className='rotate-90 bg-customPurple p-2 h-10 w-10 rounded-xl' />
      <p className='text-xl font-bold'>Video<span className='text-customPurple italic'>fast</span></p>
    </div>
  )
}

export default Logo
