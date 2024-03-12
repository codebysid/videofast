import React, { FC, ReactNode } from 'react'

type TTemplateNavItem = {
  navItem: {
    id: number,
    name: string,
    icon?: ReactNode
  },
  selectedItem: string
}

const TemplateNavItem: FC<TTemplateNavItem> = ({ navItem, selectedItem }) => {
  return (
    <p key={navItem.id} className={`cursor-pointer templateNavItem ${selectedItem?.toLowerCase() === navItem.name.toLowerCase() && "templateNavActiveItem"}`}>
      {navItem.icon && navItem.icon}
      {navItem.name}</p>

  )
}

export default TemplateNavItem
