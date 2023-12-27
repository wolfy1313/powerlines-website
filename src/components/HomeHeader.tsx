import React from 'react'
import Image from 'next/image'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

interface HomeHeaderProps {
  scrollToWhoWeAre: () => void
}
function HomeHeader({ scrollToWhoWeAre }: HomeHeaderProps) {
  return (
    <section className="min-w-screen max-w-screen pb-[439px] md:bg-cover bg-contain  bg-no-repeat bg-[right_12rem] bg-[url('/home-hero-bg-mobile.svg')]  md:bg-[url('/landing-hero.svg')] md:bg-[center_11rem] md:h-[1300px] md:pb-32 lg:pb-0 ">
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
      <section className="flex flex-row flex-1 justify-center min-w-screen my-auto text-center">
        <section
          className={`flex flex-col ${playfairDisplay.className} text-sm text-center my-auto  mt-10 md:text-xl md:tracking-wider md:min-w-screens min-w-screen`}
        >
          <h3 className="max-w-screen  md:min-w-screen leading-10">
            Powerlines is an independent NGO advancing policy innovation and
            <br className="hidden md:block" />
            thought leadership within the energy community
          </h3>
          <h3 className="mt-8 md:whitespace-nowrap flex flex-row justify-center leading-10">
            Together, we can create a movement to{' '}
            <br className="block md:hidden" /> change the energy landscape.
          </h3>

          {/* Scroll Button */}
          <section className="flex-1 justify-center mt-5 hidden md:flex md:flex-row ">
            <button onClick={scrollToWhoWeAre}>
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
