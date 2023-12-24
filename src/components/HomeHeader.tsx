import React from 'react'
import Image from 'next/image'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function HomeHeader() {
  return (
    <section className="min-w-screen max-w-screen bg-[url('/landing-hero.svg')] bg-cover bg-no-repeat bg-bottom md:h-[750px]">
      {/* Text Container */}
      <section className="flex flex-row justify-center">
        {/* Title Text */}
        <section className="flex-col font-bold tracking-wider text-2xl md:text-5xl mt-8 md:mt-28">
          <h2 className={`flex flex-row ${josefinSans.className}`}>
            Bringing <span className="text-main-yellow px-3">Power</span>
            to the Public
          </h2>
        </section>
      </section>

      {/* Subtitle Container */}
      <section className="flex flex-row flex-1 justify-center min-w-screen my-auto">
        <section
          className={`flex flex-col ${playfairDisplay.className} text-sm my-auto ml-5 mt-10 md:text-xl md:tracking-wider md:min-w-screens md:ml-0 min-w-screen`}
        >
          <h3 className="max-w-screen  md:min-w-screen ">
            Powerlines is an independent NGO advancing policy innovation and
            <br />
            thought leadership within the energy community
          </h3>
          <h3 className="mt-8 md:whitespace-nowrap">
            Together, we can create a movement to change the energy landscape.
          </h3>

          {/* Scroll Button */}
          <section className="flex flex-row flex-1 justify-center mt-5">
            <button>
              <Image
                height={60}
                width={60}
                src="./scrollbutton.svg"
                alt="scroll"
              />
            </button>
          </section>
        </section>
      </section>
    </section>
  )
}

export default HomeHeader
