import React from 'react'
import { Cairo, Roboto_Slab } from 'next/font/google'
import Image from 'next/image'
const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

interface TwoColumnLayoutWithImageProps {
  header: string;
  body: string;
  body2?: string;
  imageSrc: string;
  alt: string;
  width: number | `${number}`;
  height: number | `${number}`;
}

const TwoColumnLayoutWithImage: React.FC<TwoColumnLayoutWithImageProps> = ({ header, imageSrc, body, body2, width, height, alt }) => {
  return (
    <section className="min-w-full max-w-full mx-auto">
      <section className="flex flex-wrap bg-white p-10 md:p-20  mb-[90px] md:mb-[150px] mt-20 md:mt-0">
        {/* header visible on small screens */}
        <section className="w-full order-1 md:order-1  md:hidden">
          <h2 className={`text-xl md:text-3xl font-bold mb-4 text-darker-yellow ${cairo.className}`}>{header}</h2>
        </section>
        {/* 
Text Column  */}
        <section className="w-full md:w-1/2 pt-12   md:pl-12flex items-center justify-center h-auto order-3 md:order-2 ">
          <section className=" mt-0 md:mt-12 lg:mt-20">
            {/* Header hidden on small screens, shown on medium and larger screens */}
            <h2 className={`text-xl md:text-3xl font-bold mb-4 lg:mb-20 text-darker-yellow hidden md:block ${cairo.className}`}>{header}</h2>
            <p className={`text-base md:text-xl font-normal leading-9 mb-8  ${robotoSlab.className}`}>{body}</p> <p className={`text-base md:text-sm font-normal leading-9 ${robotoSlab.className}`}>{body2}</p>

          </section>
        </section>
        {/* Image Column  */}
        <section className="w-full  pt-12 pl-0 md:w-1/2 md:pl-12 order-2 md:order-3  mb-[50px] md:mb-[120px] " >
          <section className=" w-full sm:min-w-*[186px] h-auto md:max-w-*[555px] md:max-h-*[356px]  mt-0 md:mt-20 flex justify-center">
            <Image width={width} height={height} src={imageSrc} alt={alt} />
          </section>
        </section>
      </section>

    </section>
  )
}

export default TwoColumnLayoutWithImage