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
    <section
      className={`min-w-screen max-w-screen h-screen bg-cover bg-contain bg-no-repeat bg-[url('/Windmill_BG.jpg')] text-white md:bg-[url('/home-header.svg')] bg-[75%] md:pb-32 lg:pb-0`}
    >
      {/* Text Container */}
      <section className="flex flex-row justify-center">
        {/* Title Text */}
        <section className="flex-col font-bold tracking-wider leading:[36px] mt-32 md:mt-48">
          <h2
            className={`flex flex-row ${cairo.className} text-[29px] md:text-[55px]`}
          >
            Power to the Public
          </h2>
        </section>
      </section>

      {/* Subtitle Container */}
      <section className="flex flex-row flex-1 justify-center min-w-screen my-auto text-center">
        <section
          className={`flex flex-col ${robotoSlab.className}  md:text-lg font-normal text-[12px] text-center  mt-4 my-auto  w-[70%] md:min-w-screens min-w-screen`}
        >
          <p className="leading-6 md:leading-10 ">
            PowerLines is an independent NGO advancing{" "}
            <br className="md:hidden" />
            policy innovation and <br className="hidden md:block" />
            thought leadership{" "}
            <br className="md:hidden" />
            within the energy community.
            <br className="mt-4" />
            Together, we can create a movement to{" "}
            <br className="block md:hidden" /> change the energy landscape.
          </p>

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
