import React from 'react'
import { Cairo, Roboto_Slab } from "next/font/google";
import Image from 'next/image'

import { OurPrinciplesProps } from "@/types/global";


const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

const OurPrinciplesCard: React.FC<OurPrinciplesProps> = ({ heading, text, image, alt }) => {
    return (
        // card container
        <div className='flex flex-col items-center justify-center bg-white border-2 rounded-lg px-4 max-h-[379px] xs:w-[611px] md:h-[379px] p-10' >

            <section>

                {/* Image and header Section */}
                <section className="flex items-center gap-4" >
                    {/* Image */}
                    <div>
                        <Image
                            src={image}
                            alt={`${alt} icon`}
                            width={45}
                            height={45}
                            className='sm:w-20 sm:w-18 max-w-[94px] max-h-[80px]'
                        />
                    </div>
                    {/* Heading*/}
                    <h1 className={`text-xl  sm:text-2xl lg:text-3xl font-bold leading-5 sm:leading-9 ${cairo.className}`}> {heading}</h1>
                </section>

                {/* Text Section */}
                <section>
                    <p className={`text-sm sm:text-md lg:text-xl font-light leading-7 mt-[2rem] md:pr-4 ${robotoSlab.className}`}>{text}</p>
                </section>
            </section>
        </div>

    )
}

export default OurPrinciplesCard

