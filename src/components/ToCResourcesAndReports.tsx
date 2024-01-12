import React, { useState, useEffect } from 'react'

import { Josefin_Sans, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import TrunctableText from './TrunctableText'
import Link from 'next/link'

import {
  TOCResourcesAndReportsProps,
  ResourcesAndReportsCardsProps
} from '@/types/global'
const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

const ToCResourcesAndReports: React.FC<TOCResourcesAndReportsProps> = ({
  ResourcesAndReportsCards
}) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Once the component mounts, update the state to indicate it's on the client
    setIsClient(true)
  }, [])

  return (
    <div className="min-w-full max-w-full mx-auto">
      <section className="p-10 md:p-20 md:pt-0">
        <h1
          className={`mb-4 text-darker-yellow text-2xl md:text-3xl font-semibold leading-normal ${josefinSans.className}`}
        >
          Resource and Reports
        </h1>
        <section className="grid grid-cols-1  gap-4 md:gap-20">
          {ResourcesAndReportsCards.map(
            (ResourcesAndReportsCard: ResourcesAndReportsCardsProps) => (
              <div
                className="w-full flex flex-col md:flex-row  gap-10  mb-20 md:mb-0"
                key={ResourcesAndReportsCard.alt}
              >
                {/* min-w-0 prevents shrinkage below content size. flex-basis[50%] makes  sure that the text and image always maintain haf the width they are contained in so  no matter how much the screen gets resized */}
                <section className="flex-grow relative min-w-0 md:min-w-[50%] md:flex-basis[50%] ">
                  <Image
                    height="330"
                    width="520"
                    src={ResourcesAndReportsCard.image}
                    alt={ResourcesAndReportsCard.alt}
                    className="  md:h-90 md:w-auto lg: h-full w-full fill-current"
                  />
                </section>
                <section className="flex-grow">
                  <h2
                    className={`mb-4 text-darker-yellow text-sm md:text-base font-normal leading-8 ${josefinSans.className}`}
                  >
                    {ResourcesAndReportsCard.caption}
                  </h2>
                  <h1
                    className={`mb-4 text-black text-2xl font-semibold leading-8 ${josefinSans.className}`}
                  >
                    {ResourcesAndReportsCard.subHeading}
                  </h1>
                  {isClient && (
                    <TrunctableText
                      text={ResourcesAndReportsCard.body}
                      maxLength={150}
                    />
                  )}
                  <h6
                    className={`mb-6 text-black text-sm md:text-base font-normal leading-8 ${josefinSans.className}`}
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
                        className="text-darker-yellow font-semibold leading-normal"
                      >
                        {ResourcesAndReportsCard.downloadFileTitle}
                      </a>
                    </section>
                  </div>
                </section>
              </div>
            )
          )}
        </section>
      </section>
    </div>
  )
}

export default ToCResourcesAndReports
