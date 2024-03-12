import React, { FC } from 'react'
import CustomImage from './CustomImage'

type TTemplateDimension = {
  height: string,
}
const templates = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  }
]
const TemplateDimension: FC<TTemplateDimension> = ({ height }) => {
  const customHeight = `h-[${height}vh]`
  return (
    <div className='flex flex-row gap-3 items-center h-[80%]'>
      {
        templates.map((ele) => <div key={ele.id} className={`${customHeight} flex-1 bg-blue-500`}>
          <CustomImage url="/alexandar.jpg" template />
        </div>
        )
      }
    </div>

  )
}

export default TemplateDimension
