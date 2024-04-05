import React from 'react'
import { Cairo, Roboto_Slab } from 'next/font/google'
import { ToCBodyListProps } from '@/types/global'
import Image from 'next/image'
const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })
const TOCBodyList = ({
  header,
  subheader,
  bulletPoints,
  footer,
  headerColor,
  subheaderColor,
  bulletColor
}: ToCBodyListProps) => {
  return (
    <section className="min-w-full max-w-full mx-auto">
      <section className="flex flex-col md:flex-col bg-white mx-6 mt-10 md:mx-20">
        <h1
          className={`md:text-[37px] md:font-semi-bold md:leading-[45px] md:tracking-wide text-[21px] font-normal mb-1 
          ${cairo.className} 
          ${headerColor ? `text-${headerColor}` : 'text-primary'}`}
        >
          {header}
        </h1>
        <p
          className={`text-base md:text-xl font-light leading-6 md:leading-[40px]  ${robotoSlab.className}`}
        >
          {subheader}
        </p>
        <section className="space-y-5 mt-3">
          {bulletPoints.map((bulletPoint) => (
            <section
              key={`point-${bulletPoints.indexOf(bulletPoint)}`}
              className="flex flex-col  justify-start items-start  md:ml-10 md:flex-row"
            >
              <section className="md:ml-4 flex items-start">
                <Image
                  alt=""
                  src="/bullet-point-2.svg"
                  height={8}
                  width={8}
                  className={`mr-1 mt-[18px] md:mr-5 hidden md:block`}
                />
                <div className='' >
                  <h2
                    className={`inline text-[15px] md:text-xl font-bold leading-6 
                    ${robotoSlab.className} 
                   ${subheaderColor ? `text-${subheaderColor}` : 'text-primary'}
                    `}
                  >
                    {bulletPoint[0]}:{' '}
                  </h2>
                  <p
                    className={`text-base md:text-xl font-light leading-6 md:leading-[40px] inline ml-1 ${robotoSlab.className}`}
                  >
                    {bulletPoint[1]}
                  </p>
                </div>
              </section>
            </section>
          ))}
        </section>
        <section className="mt-4">
          <p
            className={`text-base md:text-xl font-light leading-6 md:leading-[40px] ${robotoSlab.className}`}
          >
            {footer}
          </p>
        </section>
      </section>
    </section>
  )
}

export default TOCBodyList
