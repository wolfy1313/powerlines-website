import React from 'react'
import { Josefin_Sans, Playfair_Display } from "next/font/google";
import Image from 'next/image'

import {OurTeamProps } from "@/types/global";


const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

const OurPrinciplesCard: React.FC<OurTeamProps> = ({name, role, image, genre}) => {
  return genre === 'male' ? (
    // card container
    <div className=" max-w-[295px] md:max-w-none w-full overflow-hidden bg-[#F3EEDD] bg-opacity-50">
      <div className="relative pb-[118.64%]"> {/* Aspect ratio padding-bottom hack */}
          <Image 
            src={image}
            alt={`${name}' photo`}
            width={295}
            height={352}
            className="absolute top-0 left-0 w-full h-full object-cover" 
          />
          <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
            <p className={`text-sm sm:text-base lg:text-lg text-white mx-2 font-bold ${josefinSans.className} leading-normal`}>{name}</p>
            <p className={`text-xs sm:text-sm lg:text-base text-white mx-2 font-normal ${playfairDisplay.className} leading-normal`}>{role}</p>
          </section>
      </div>
    </div>   

  ) : 
  <div className=" max-w-[295px] md:max-w-none w-full overflow-hidden bg-[#FFFEE8] bg-opacity-50">
      <div className="relative pb-[118.64%]"> {/* Aspect ratio padding-bottom hack */}
          <Image 
            src={image}
            alt={`${name}' photo`}
            width={295}
            height={352}
            className="absolute top-0 left-0 w-full h-full object-fit" 
          />
          <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
            <p className={`text-sm sm:text-base lg:text-lg text-white mx-2 font-bold ${josefinSans.className} leading-normal`}>{name}</p>
            <p className={`text-xs sm:text-sm lg:text-base text-white mx-2 font-normal ${playfairDisplay.className} leading-normal`}>{role}</p>
          </section>
      </div>
  </div>   
}

export default OurPrinciplesCard

