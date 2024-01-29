import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'
import { ToCCardProps } from '@/types/global'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })
const ToCCard = ({ header, imageSrc, checklist, href }: ToCCardProps) => {
  return (
    <section className="bg-white shadow-custom rounded-3xl overflow-hidden mx-2 my-5 flex flex-col h-428 w-400 text-center md:flex-grow md:flex-shrink md:basis-1/3">
      <section className="mt-5 h-113 w-140">
        <Image
          src={imageSrc}
          alt={`${header} icon`}
          width={161}
          height={170}
          className="color-yellow md:mt-3 mx-auto"
        />
      </section>
      <section className="px-6 py-4 flex-grow">
        <section
          className={`font-bold text-xl text-center mb-2 ${josefinSans.className}`}
        >
          {header}
        </section>
        <ul className="list-inside text-black-400 text-base p-5 space-y-4 pl-20 md:pl-10 lg:pl-24">
          {checklist.map((listItem) => (
            <li className="flex flex-row" key={checklist.indexOf(listItem)}>
              <Image src="/checkmark.svg" height={20} width={20} alt="" />
              <p className="pl-1 md:pl-3">{listItem}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="text-center mb-5">
        <Link
          href={`${href}`}
          className={`inline-flex items-center my-0 mx-0 px-6 py-3 text-sm font-bold text-center text-[#E2B103] bg-main-white border-2 border-main-yellow rounded-2xl ${josefinSans.className}`}
        >
          Learn More
          <Image
            src="/arrow-right2.svg"
            alt=""
            height={5}
            width={28}
            className="ml-2"
          />
        </Link>
      </section>
    </section>
  )
}

export default ToCCard
