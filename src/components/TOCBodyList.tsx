import React from 'react'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'
import { ToCBodyListProps } from '@/types/global'
import Image from 'next/image'
const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })
const TOCBodyList = ({
  header,
  subheader,
  bulletPoints,
  footer
}: ToCBodyListProps) => {
  return (
    <section
      className={`flex flex-col w-full px-20 ${playfairDisplay.className} mb-4 ml-0`}
    >
      <h1 className={`text-main-yellow text-xl mb-4 ${josefinSans.className}`}>
        {header}
      </h1>
      <p className="mb-4">{subheader}</p>
      <section className="space-y-5">
        {bulletPoints.map((bulletPoint) => (
          <section
            key={`point-${bulletPoints.indexOf(bulletPoint)}`}
            className="flex flex-col  justify-start ml-2  space-x-1 md:ml-10 md:flex-row"
          >
            <section className="flex flex-row">
              <Image
                alt=""
                src="/bullet-point.svg"
                height={7}
                width={7}
                className="mr-1 md:mr-10"
              />
              <p className="font-bold">{bulletPoint[0]}:</p>
            </section>
            <p>{bulletPoint[1]}</p>
          </section>
        ))}
      </section>
      <section className="mt-4">
        <p>{footer}</p>
      </section>
    </section>
  )
}

export default TOCBodyList
