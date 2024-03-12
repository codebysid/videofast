import React from 'react'
import AddVideoBtn from './AddVideoBtn'
import { Play } from 'lucide-react'

const AddandDisplayVideo = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row items-center justify-between'>
        <h2 className='text-lg flex flex-row items-center gap-2 font-bold border-b-2 border-black'><Play fill='black' className='h-4 w-4' />My Videos</h2>
        <AddVideoBtn />
      </div>
      <div className='flex flex-col items-center gap-5 text-customGray'>
        <Play className='border-2 border-customGray p-4 h-20 w-20' />
        <h2 className='text-2xl font-bold'>Create your first video</h2>
        <p className='w-1/2'>Click on the below button to quick start your video creation journey with video fast</p>
        <AddVideoBtn />
      </div>
    </div >

  )
}

export default AddandDisplayVideo
