import Image from 'next/image'
import React, { FC } from 'react'
type TCustomImage = {
  url: string,
  template?: boolean
}
const CustomImage: FC<TCustomImage> = ({ url, template }) => {
  return (
    <div className={`relative h-10 w-10 cursor-pointer ${template && "h-20 w-20"}`}>
      <Image src={url} sizes="100vw" className="object-cover rounded-full" alt='dp' fill />
    </div>
  )
}

export default CustomImage
