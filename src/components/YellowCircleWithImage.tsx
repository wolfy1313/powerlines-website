import React from 'react'
import { Cairo, Roboto_Slab } from "next/font/google";
import Image from 'next/image'

import { TOCOutcomesComponentProps, OutcomeCardProps } from "@/types/global";


const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

const YellowCircleWithImage: React.FC<OutcomeCardProps> = ({ text, image, alt, height, width }) => {
  return (
    <div>
      <div className=" flex flex-col items-center"></div>
      <div className={` bg-main-one rounded-full p-4 pb-5 relative  ${height} ${width}`} >
        <Image fill src={image} alt={alt} className="p-5" />
      </div>
      <h2 className={`${cairo.className} mt-2 font-semibold`}>{text}</h2>
    </div>

  )
}

export default YellowCircleWithImage


