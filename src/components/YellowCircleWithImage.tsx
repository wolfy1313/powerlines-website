import React from 'react'
import { Josefin_Sans, Playfair_Display } from "next/font/google";
import Image from 'next/image'

import { TOCOutcomesComponentProps, OutcomeCardProps } from "@/types/global";


const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

const YellowCircleWithImage: React.FC<OutcomeCardProps> = ({ text, image, alt, height, width }) => {
  return (
    <div>
      <div className=" flex flex-col items-center"></div>
      <div className={` bg-main-yellow rounded-full p-4 pb-5 relative  ${height} ${width}`} >
        <Image fill src={image} alt={alt} className="p-5" />
      </div>
      <h2 className={`${josefinSans.className} mt-2 font-semibold`}>{text}</h2>
    </div>

  )
}

export default YellowCircleWithImage


