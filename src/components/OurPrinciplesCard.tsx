import React from 'react'
import { Josefin_Sans, Playfair_Display } from "next/font/google";
import Image from 'next/image'

import {OurPrinciplesProps } from "@/types/global";


const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

const OurPrinciplesCard: React.FC<OurPrinciplesProps> = ({ heading, text, image, alt}) => {
  return (
    // card container
    <div className='flex flex-col items-center justify-center bg-white our-principles-shadow px-8  max-h-[379px] xs:w-[611px] md:h-[379px] '>
        
        <section>
            
            {/* Image and header Section */}
            <section className="flex items-center justify-center gap-4" >
                {/* Image */}
                <div>
                    <Image
                        src={image}
                        alt={`${alt} icon`}
                        width={94}
                        height={80}
                    />  
                </div>
                {/* Heading*/}
                <h1 className={`text-xl sm:text-3xl font-semibold leading-9 ${josefinSans.className}`}> {heading}</h1>
            </section>
        
            {/* Text Section */}
            <section>
                <p className={`text-xl font-normal leading-7 mt-[2rem] pr-4 ${playfairDisplay.className}`}>{text}</p>
            </section>
        </section>
    </div>

  )
}

export default OurPrinciplesCard

