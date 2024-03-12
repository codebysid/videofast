"use client"
import { LayoutTemplate, RectangleHorizontal, RectangleVertical } from 'lucide-react'
import React, { useState } from 'react'
import TemplateNavItem from './TemplateNavItem'
import TemplateDimension from './TemplateDimension'

const options = [
  {
    id: 1,
    name: "All"
  },
  {
    id: 2,
    name: "Landscape Video (16:9)",
    icon: <RectangleHorizontal />
  },
  {
    id: 3,
    name: "Portrait Video (9:16)",
    icon: <RectangleVertical />
  }
]

const Templates = () => {
  const [selectedItem, setSelectedItem] = useState("all")
  const handleNavItem = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLParagraphElement
    setSelectedItem(target.innerText)
  }
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-row items-center justify-between'>
        <h2 className='flex flex-row items-center gap-1 font-bold border-b-2 border-black pb-2'>
          <LayoutTemplate />
          Templates</h2>
        <div className='flex flex-row items-center gap-2' onClick={(e) => handleNavItem(e)}>
          {
            options.map((ele) => <TemplateNavItem key={ele.id} navItem={ele} selectedItem={selectedItem} />)
          }
        </div>
      </div>
      <div className=' flex flex-col gap-2'>
        <TemplateDimension height="25" />
        <TemplateDimension height="25" />
        <TemplateDimension height="40" />
      </div>
    </div>
  )
}

export default Templates
