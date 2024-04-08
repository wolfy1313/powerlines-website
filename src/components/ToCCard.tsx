import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cairo, Roboto_Slab } from 'next/font/google'
import { ToCCardProps } from '@/types/global'

const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })
const ToCCard = ({ header, imageSrc, checklist, href }: ToCCardProps) => {
  return (
    <div className="group">
      <div className="bg-white p-4 border-x-1 border-t-1 lg:border-x-2 lg:border-t-2 border-[#E8E7E7] rounded-t-lg lg:mt-5 flex lg:flex-col justify-center items-center  w-400 h-[117px] lg:h-[434px] text-center  md:basis-1/3">
        {/* Card Image Section */}
        <section className="flex justify-center items-center relative h-[49px] w-[56px] lg:h-[116px] lg:w-[120px] md:mt-4 mx-auto">
          <div className="lg:mt-4 w-[50px] w-[40px]  lg:w-[110px] lg:h-[105px] rounded-[30px] bg-[#FFEEA975] group-hover:bg-[#D91D4C21] flex ">
            <Image
              src={imageSrc}
              alt={`${header} icon`}
              width={109}
              height={109}
              className="object-contain w-48 h-45 lg:w-[109px] lg:h-[109px]"
            />
          </div>
        </section>

        {/* Text Container Section*/}
        <section className="flex flex-col lg:mt-6 px-6  flex-grow">
          <div className="flex lg:items-center">
            {/* Invisible Aligner for Header Alignment */}
            <div className="hidden lg:block lg:flex-grow-0 lg:flex-shrink-0 w-[21px]"></div>{" "}
            {/* Adjust width based on checkmark size + padding */}
            {/* Header */}
            <div
              className={`font-bold text-[lg] lg:text-2xl lg:text-center ${cairo.className}`}
            >
              {header}
            </div>
          </div>

          {/* List Items Text */}
          <ul className="list-inside text-xs lg:text-base lg:font-normal lg:px-9 lg:pt-6 lg:pb-0  lg:space-y-4">
            {checklist.map((listItem, index) => (
              <li className="flex flex-row" key={index}>
                <Image src="/checkmark.svg" height={20} width={20} alt="" />
                <p className="pl-1 md:pl-3">{listItem}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Call to action button Section */}
        <section className="flex items-center justify-center lg:mb-6">
          {/* Full CTA for lg screens and up */}
          <Link
            href={`${href}`}
            className={`hidden lg:inline-flex items-center px-8 py-2 text-xl font-bold text-center text-[#D76C00] bg-main-white border border-[#D76C00] rounded-md ${cairo.className}`}
          >
            Learn More
            <Image
              src="/arrow-right2.svg"
              alt=""
              height={5}
              width={28}
              className="ml-2 fill-black "
            />
          </Link>

          {/* Only arrow for smaller than lg screens */}
          <div className="lg:hidden">
            <Link
              href={`${href}`}
              className={`flex items-center justify-center`}
            >
              <Image
                src="/ToCCard-arrow.svg"
                alt="Arrow"
                height={28}
                width={16}
                className="fill-current text-[#D76C00]" // Assuming you want to keep the arrow color consistent
              />
            </Link>
          </div>
        </section>
      </div>

      {/* bottom border interactive line */}
      <div
        className="
        rounded-b-lg 
        h-[3px] 
        lg:h-[6px]  
        bg-gradient-to-r 
        from-[#FFD110] 
        to-[#DA204B]
        lg:bg-gradient-to-l 
        lg:from-[#F6A41E] 
        lg:to-[#FFD010] 
        group-hover:bg-gradient-to-r 
        group-hover:from-[#F5A020] 
        group-hover:to-[#EF8529]"
      ></div>
    </div>
  );
}

export default ToCCard
