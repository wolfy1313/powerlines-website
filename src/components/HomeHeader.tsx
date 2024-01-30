import React from 'react'
import Image from 'next/image'
import { Cairo, Roboto_Slab } from 'next/font/google'

const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

interface HomeHeaderProps {
  scrollToWhoWeAre: () => void
}
function HomeHeader({ scrollToWhoWeAre }: HomeHeaderProps) {
  return (
    <section className="min-w-screen max-w-screen pb-[460px] md:bg-cover bg-contain  bg-no-repeat bg-[right_15rem] bg-[url('/home-hero-bg-mobile.svg')]  md:bg-[url('/home-header.svg')] md:bg-[center] md:h-[1300px] md:pb-32 lg:pb-0 ">
      {/* Text Container */}
      <section className="flex flex-row justify-center">
        {/* Title Text */}
        <section className="flex-col font-bold tracking-wider text-2xl md:text-5xl mt-8 md:mt-64">
          <h2 className={`flex flex-row ${cairo.className}`}>
            Bringing <span className="text-main-one px-3">Power</span>
            to the Public
          </h2>
        </section>
      </section>

      {/* Subtitle Container */}
      <section className="flex flex-row flex-1 justify-center min-w-screen my-auto text-center">
        <section
          className={`flex flex-col ${robotoSlab.className} text-sm text-center my-auto  mt-10 md:text-xl md:tracking-wider md:min-w-screens min-w-screen`}
        >
          <h3 className="max-w-screen  md:min-w-screen leading-10">
            Powerlines is an independent NGO advancing policy innovation and
            <br className="hidden md:block" />
            thought leadership within the energy community
          </h3>
          <h3 className="mt-6 md:whitespace-nowrap flex flex-row justify-center leading-10">
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
