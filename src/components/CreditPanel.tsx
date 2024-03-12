import { ChefHat } from 'lucide-react'
import React, { ChangeEvent, useState } from 'react'

const CreditPanel = () => {
  const [sliderValue, setSliderValue] = useState("10")
  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSliderValue(e.target.value)
  }
  return (
    <div className='absolute bg-white right-[300%] top-[150%] w-[600%] border border-customGray flex flex-col gap-10 items-center p-2 rounded-lg'>
      <div className='flex flex-col gap-10 items-center'>
        <div className='flex flex-col items-center'>
          <ChefHat className='rotate-180' color='#dd571c' />
          <h1 className='text-xl font-bold'>Buy more credits</h1>
          <p>1 video requires around 2 credits</p>
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <input type='range' min="1" max="50" value={sliderValue} onChange={(e) => handleSliderChange(e)} className='slider' />
          <div>
            <span className='border border-customGray p-2 rounded-lg font-semibold text-gray-600'>{sliderValue}</span>
            credits
          </div>
        </div>
      </div>
      <span>1 credit ≈ $2</span>
      <div className='flex flex-row w-full gap-2'>
        <button className='flex-1 border border-customGray rounded-lg'>Cancel</button>
        <button className='btnPrimary flex-1 w-full'>Buy</button>
      </div>
    </div>
  )
}

export default CreditPanel
