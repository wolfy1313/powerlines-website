import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cairo, Roboto_Slab } from 'next/font/google'
import { ToCCardProps } from '@/types/global'

const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })
const ToCCard = ({ header, imageSrc, checklist, href }: ToCCardProps) => {
  return (
    <div className='group'>
      <div className="bg-white border-x-2 border-t-2 border-[#E8E7E7] rounded-t-lg mt-5 flex flex-col justify-between w-400 h-[434px] text-center md:flex-grow md:flex-shrink md:basis-1/3">
        {/* card Image and Text container */}
        <div className='flex flex-col mt-7'>
          {/* Card Image Section */}
          <section className='flex justify-center items-center relative h-[116px] w-[120px] mx-auto'>
            <div className="w-[110px] h-[105px] rounded-[30px] bg-[#FFEEA975] group-hover:bg-[#D91D4C21] flex justify-center items-center">
              <Image
                src={imageSrc}
                alt={`${header} icon`}
                width={106}
                height={104}
                className='object-contain'
              />
            </div>
          </section>

          {/* Text Container Section*/}
          <section className="px-6 py-4 flex-grow">
            {/* Header */}
            <div className={`font-bold text-xl text-center mb-2 ${cairo.className}`}>
              {header}
            </div>

            {/* List Items Text */}
            <ul className="list-inside text-black-400 text-base p-5 space-y-4 pl-20 md:pl-10 lg:pl-24">
              {checklist.map((listItem, index) => (
                <li className="flex flex-row" key={index}>
                  <Image src="/checkmark.svg" height={20} width={20} alt="" />
                  <p className="pl-1 md:pl-3">{listItem}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Call to action button Section*/}
        <section className="mb-10">
          <Link
            href={`${href}`}
            className={`inline-flex items-center px-6 py-3 text-sm font-bold text-center text-[#D76C00] bg-main-white border-2 border-[#D76C00] rounded-2xl ${cairo.className}`}
          >
            Learn More
            <Image
              src="/arrow-right2.svg"
              alt=""
              height={5}
              width={28}
              className="ml-2 fill-black"
            />
          </Link>
        </section>
      </div>
      <div 
        className='rounded-b-lg h-[6px] w-[400px] bg-gradient-to-l from-[#F6A41E] to-[#FFD010] group-hover:bg-gradient-to-r group-hover:from-[#F5A020] group-hover:to-[#EF8529]'>
      </div>
    </div>
  )
}

export default ToCCard
