import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

const Latest = () => {
  return (
    <section
      className={`bg-[url('/latest-powerlines-bg.svg')] bg-cover bg-no-repeat text-center min-w-screen pb-16 ${josefinSans.className} md:pb-10`}
    >
      {/* Header */}
      <h1 className="font-bold my-12 text-2xl">Latest On Powerlines</h1>
      {/* Cards Container */}
      <section className="flex flex-col justify-center space-y-3 md:space-x-5 md:space-y-0 md:flex-row">
        {/* Cards */}

        {/* Take Action */}
        <section className="flex-col justify-start text-start rounded-xl bg-white h-96 mx-5 border border-gray-200 md:mx-0">
          <div className="relative h-1/2 md:w-full">
            <Image
              src="/latest-image1.svg"
              alt=""
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-t-xl"
            />
          </div>
          <section className="space-y-4 w-72 mt-8 pl-4">
            <h2>TAKE ACTION</h2>
            <p className={`${playfairDisplay.className} py-2`}>
              Join us in our cause or learn more about what you can do.
            </p>
            <Link href="/about-us" className="flex flex-row justify-start">
              <p className="font-bold text-main-yellow">Learn More</p>
              <Image
                src="/arrow-right.svg"
                alt="arrow-button"
                height={18}
                width={18}
                className="pl-1"
              />
            </Link>
          </section>
        </section>

        {/* Campaigns */}
        <section className="flex-col justify-start text-start rounded-xl bg-white h-96 mx-5 border border-gray-200 md:mx-0">
          <div className="relative  h-1/2 md:w-full">
            <Image
              src="/latest-image2.svg"
              alt=""
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-t-xl"
            />
          </div>
          <section className="space-y-4 w-72 mt-8 pl-4">
            <h2>CAMPAIGNS</h2>
            <p className={`${playfairDisplay.className} py-2`}>
              To bring our vision to life, we can do so by transforming our
              communities.
            </p>
            <Link href="/about-us" className="flex flex-row justify-start">
              <p className="font-bold text-main-yellow">Learn More</p>
              <Image
                src="/arrow-right.svg"
                alt="arrow-button"
                height={18}
                width={18}
                className="pl-1"
              />
            </Link>
          </section>
        </section>

        {/* Reports */}
        <section className="flex-col justify-start text-start rounded-xl bg-white h-96 mx-5 border border-gray-200 md:mx-0">
          <div className="relative  h-1/2 md:w-full">
            <Image
              src="/latest-image3.svg"
              alt=""
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-t-xl"
            />
          </div>
          <section className="space-y-4 w-72 mt-8 pl-4">
            <h2>REPORTS</h2>
            <p className={`${playfairDisplay.className} py-2`}>
              Our meetings with Public Utilities Commissioners to bring change.
            </p>
            <Link href="/about-us" className="flex flex-row justify-start">
              <p className="font-bold text-main-yellow">Learn More</p>
              <Image
                src="/arrow-right.svg"
                alt="arrow-button"
                height={18}
                width={18}
                className="pl-1"
              />
            </Link>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Latest
