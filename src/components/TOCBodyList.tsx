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
  footer
}: ToCBodyListProps) => {
  return (
    <section className="min-w-full max-w-full mx-auto">
      <section className="flex flex-col md:flex-col bg-white mx-3 md:px-16 my-10">
        <h1
          className={`md:text-[37px] md:font-semi-bold md:leading-[45px] md:tracking-wide text-[21px] font-normal mb-2 text-primary ${cairo.className}`}
        >
          {header}
        </h1>
        <p
          className={`text-base md:text-xl font-light leading-6  ${robotoSlab.className}`}
        >
          {subheader}
        </p>
        <section className="space-y-5 mt-4">
          {bulletPoints.map((bulletPoint) => (
            <section
              key={`point-${bulletPoints.indexOf(bulletPoint)}`}
              className="flex flex-col  justify-start  md:ml-10 md:flex-row"
            >
              <section className="md:ml-4 flex">
                <Image
                  alt=""
                  src="/bullet-point.svg"
                  height={7}
                  width={7}
                  className="mr-1 md:mr-10 hidden md:block"
                />
                <div>
                  <h2
                    className={`inline text-[15px] md:text-xl font-bold leading-6 text-primary ${robotoSlab.className}`}
                  >
                    {bulletPoint[0]}:{' '}
                  </h2>
                  <p
                    className={`text-base md:text-xl font-light leading-6 inline ml-1 ${robotoSlab.className}`}
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
            className={`text-base md:text-xl font-light leading-6 inline ml-1 ${robotoSlab.className}`}
          >
            {footer}
          </p>
        </section>
      </section>
    </section>
  )
}

export default TOCBodyList
