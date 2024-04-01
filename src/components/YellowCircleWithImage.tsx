import React from 'react'
import { Cairo, Roboto_Slab } from 'next/font/google'
import Image from 'next/image'

import { TOCOutcomesComponentProps, OutcomeCardProps } from '@/types/global'

const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

const YellowCircleWithImage: React.FC<OutcomeCardProps> = ({
  text,
  image,
  alt,
  height,
  width,
  iconColor
}) => {
  return (
    <>
      <div className=" flex flex-row sm:flex-col items-center mt-6">
        <div
          className={`rounded-full p-7 pb-5 relative ${height} ${width} ${
            iconColor ? `bg-[${iconColor}]` : 'bg-orange-dark'
          }`}
        >
          <Image fill src={image} alt={alt} className="p-5" />
        </div>
        <h2 className={`${cairo.className} mt-2 ml-3 font-semibold`}>{text}</h2>
      </div>
    </>
  )
}

export default YellowCircleWithImage
