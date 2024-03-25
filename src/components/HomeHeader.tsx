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
    <section className="min-w-screen max-w-screen pb-[460px] bg-cover bg-contain bg-no-repeat bg-[url('/Windmill_BG.jpg')] text-white  md:bg-[url('/home-header.svg')] bg-[75%] md:h-[60rem] md:pb-32 lg:pb-0">
      {/* Text Container */}
      <section className="flex flex-row justify-center">
        {/* Title Text */}
        <section className="flex-col font-bold tracking-wider text-3xl md:text-5xl mt-32 md:mt-48">
          <h2 className={`flex flex-row ${cairo.className}`}>
            <span className="px-3">Power</span>
            to the Public
          </h2>
        </section>
      </section>

      {/* Subtitle Container */}
      <section className="flex flex-row flex-1 justify-center min-w-screen my-auto text-center">
        <section
          className={`flex flex-col ${robotoSlab.className} text-sm text-center my-auto  mt-6 md:text-xl md:tracking-wider  w-3/4 md:min-w-screens min-w-screen`}
        >
          <h3 className="leading-6 md:leading-10">
            Powerlines is an independent NGO advancing policy innovation and
            <br className="hidden md:block" />
            thought leadership within the energy community
          </h3>
          <h3 className="mt-3 md:whitespace-nowrap flex flex-row justify-center leading-6 sm:leading-10">
            Together, we can create a movement to{" "}
            <br className="block md:hidden" /> change the energy landscape.
          </h3>

          {/* Scroll Button */}
          <section className="flex-1 justify-center mt-3 hidden md:flex md:flex-row ">
            <button onClick={scrollToWhoWeAre}>
              <Image
                height={100}
                width={100}
                src="./ScrollButton2.svg"
                alt="scroll"
              />
            </button>
          </section>
        </section>
      </section>
    </section>
  );
}

export default HomeHeader
