import React from 'react'
import { Josefin_Sans, Playfair_Display } from "next/font/google";
import Image from 'next/image'

import {OurTeamProps } from "@/types/global";


const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

const OurPrinciplesCard: React.FC<OurTeamProps> = ({name, role, image, alt}) => {
  return (
    // card container
    <div className=" flex-1 mb-4 w-full sm:min-w-[165px]  md:max-w-[295px] xl:max-w-sm   h-auto sm:min-h-[197px] md:h-[352px] overflow-hidden bg-[#B08B1A26]">
        <Image 
        src={image}
        alt={`${alt}'s photo`}
        className="relative h-full bg-no-repeat bg-contain bg-center"
        />
        
        
        <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
            <p className={`${josefinSans.className} text-base md:text-[20px]  text-white mx-2 font-bold leading-normal` }>{name}</p>
            <p className={`${playfairDisplay.className} text-small  text-white mx-2 font-normal leading-normal` }>{role}</p>
        </section>
        
    </div>
    

  )
}

export default OurPrinciplesCard

