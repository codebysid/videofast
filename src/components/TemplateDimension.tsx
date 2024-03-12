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
  let customHeight = ""
  switch (height) {
    case "25": {
      customHeight = 'h-[25vh]'
      break
    }
    case "40": {
      customHeight = 'h-[40vh]'
      break
    }
  }
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
