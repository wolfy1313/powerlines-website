import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function WhoWeAre() {
  return (
    <section className="min-w-screen max-w-screen bg-no-repeat bg-[url('/WhoWeAreBG.svg')] bg-cover">
      <section className="flex flex-row justify-center">
        <section className="font-bold text-2xl md:text-3xl mt-8 md:mt-16">
          <h2 className={`${josefinSans.className}`}>WHO WE ARE</h2>
        </section>
      </section>

      <section className="flex flex-row justify-center">
        <h1
          className={`text-center font-bold text-5xl ml-auto mr-auto md:text-6xl mt-8 md:mt-16  ${josefinSans.className}`}
        >
          OUR FOCUS IS BRINGING <br />
          <span className="text-main-yellow">POWER </span>TO THE PUBLIC
        </h1>
      </section>

      <section className="flex flex-row flex-1  my-auto justify-center">
        <section
          className={`${playfairDisplay.className} text-sm my-auto ml-5 mt-10 md:text-xl md:tracking-wider md:min-w-fit md:ml-0 min-w-screen`}
        >
          <h3 className={`max-w-screen md:min-w-screen text-center`}>
            PowerLines is a non-governmental organization that is passionate
            about restructuring the <br />
            energy system. We seek to create a world in which clean, affordable,
            and reliable energy <br />
            systems contribute to safe, healthy, and vibrant communities.
          </h3>
        </section>
      </section>
      <section className={`text-center ${josefinSans.className} mt-10 mb-20 `}>
        <button className="bg-main-yellow rounded-full my-auto mx-auto px-14 py-2">
          <Link href="/about-us">ABOUT US</Link>
        </button>
      </section>
    </section>
  )
}

export default WhoWeAre
