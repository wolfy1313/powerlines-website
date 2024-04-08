import React from 'react'
import { Cairo, Roboto_Slab } from "next/font/google";
import Image from 'next/image'

import { OurPrinciplesProps } from "@/types/global";


const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

const OurPrinciplesCard: React.FC<OurPrinciplesProps> = ({ heading, text, image, alt }) => {
    return (
        // card container
        <div className='flex flex-col bg-white border-2 rounded-lg px-6 pt-4 md:pt-16 max-h-[379px] xs:w-[611px] md:h-[380px]' >
            
            {/* Image and header Section */}
            <section className="flex top-[100px] gap-4 h-[83px] max-w-[543px] items-center pb-2 md:pb-10" >
                {/* Image */}
                <div className='
                flex
                w-[45px] h-[45px]
                max-w-[45px] max-h-[45px] 
                min-w-[45px] min-h-[45px]
                md:w-[80px] md:h-[80px] 
                max-w-[80px] max-h-[80px] 
                md:min-w-[80px] md:min-h-[80px]'>
                    <Image
                        src={image}
                        alt={`${alt} icon`}
                        width={80}
                        height={80}
                        className='object-fill w-full h-full'
                    />
                </div>

                {/* Header*/}
                <h1 className={`text-xl  sm:text-2xl lg:text-3xl font-bold leading-5 sm:leading-9 ${cairo.className}`}> {heading}
                </h1>
            </section>

            {/* Text Section */}
            <section>
                <p className={`text-sm sm:text-md lg:text-xl font-light  ${robotoSlab.className}`}>{text}</p>
            </section>
            
        </div>

    )
}

export default OurPrinciplesCard

