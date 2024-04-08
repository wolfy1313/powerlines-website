'use client'
import React, { useState, useEffect } from 'react'

import { Cairo, Roboto_Slab } from 'next/font/google'

import Image from 'next/image'
import TrunctableText from './TrunctableText'
import Link from 'next/link'

import {
  TOCResourcesAndReportsProps,
  ResourcesAndReportsCardsProps
} from '@/types/global'

const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

const ToCResourcesAndReports: React.FC<TOCResourcesAndReportsProps> = ({
  ResourcesAndReportsCards,
  color
}) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Once the component mounts, update the state to indicate it's on the client
    setIsClient(true)
  }, [])

  return (
    <div className="min-w-full max-w-full mx-auto">
      <section className=" my-10 mx-6 md:mt-20 md:mx-20">
        <h1
          className={`mb-1  text-2xl md:text-[37px] md:font-semi-bold md:leading-[45px] md:mb-3 ${
            cairo.className
          } ${color ? `text-${color}` : "text-yellow-dark"}`}
        >
          RESOURCES & REPORTS
        </h1>
        <section className="grid grid-cols-1 md:gap-10">
          {ResourcesAndReportsCards.map(
            (ResourcesAndReportsCard: ResourcesAndReportsCardsProps) => (
              <div
                className="w-full flex flex-col md:flex-row  gap-2 md:gap-10 mb-10 md:mb-0"
                key={ResourcesAndReportsCard.alt}
              >
                {/* min-w-0 prevents shrinkage below content size. flex-basis[50%] makes  sure that the text and image always maintain haf the width they are contained in so  no matter how much the screen gets resized */}
                <section className="flex-grow relative min-w-0 md:min-w-[50%] md:flex-basis[50%] ">
                  <Image
                    height="330"
                    width="520"
                    src={ResourcesAndReportsCard.image}
                    alt={ResourcesAndReportsCard.alt}
                    className="  md:h-90 rounded-md w-full h-full object-cover object-[25%]"
                  />
                </section>
                <section className="flex flex-col flex-grow flex-grow justify-between">
                  <div>
                    <h2
                      className={`md:text-base md:font-semi-bold md:leading-[30px] md:font-normal text-sm font-bold mt-2 ${
                        cairo.className
                      } ${color ? `text-${color}` : "text-yellow-dark"}`}
                    >
                      {ResourcesAndReportsCard.caption}
                    </h2>
                    <h1
                      className={`md:text-2xl md:font-semi-bold md:leading-[30px] text-base font-semibold mb-2 ${cairo.className}`}
                    >
                      {ResourcesAndReportsCard.subHeading}
                    </h1>
                    {isClient && (
                      <TrunctableText
                        text={ResourcesAndReportsCard.body}
                        maxLength={150}
                        color={color}
                      />
                    )}
                  </div>
                  <div>
                    <h6
                      className={`md:text-base text-sm font-medium ${cairo.className}`}
                    >
                      {ResourcesAndReportsCard.cta}
                    </h6>
                    <div className="flex">
                      <section className="relative h-100 w-100 flex flex-row items-center mr-4">
                        <Image
                          width={20}
                          height={20}
                          src={ResourcesAndReportsCard.downloadIcon}
                          alt="Download Icon"
                        />
                      </section>
                      <section className="flex flex-row items-center relative">
                        <a
                          href={ResourcesAndReportsCard.downloadFile}
                          download={ResourcesAndReportsCard.downloadFileTitle}
                          className={`${
                            color ? `text-${color}` : "text-yellow-dark"
                          } font-semibold leading-normal`}
                        >
                          {ResourcesAndReportsCard.downloadFileTitle}
                        </a>
                      </section>
                    </div>
                  </div>
                </section>
              </div>
            )
          )}
        </section>
      </section>
    </div>
  );
}

export default ToCResourcesAndReports
