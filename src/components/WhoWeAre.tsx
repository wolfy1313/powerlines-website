import React from 'react'
import { Cairo, Roboto_Slab } from 'next/font/google'
import Image from 'next/image'

const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

const WhoWeAre = React.forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="flex flex-row  min-w-screen max-w-screen bg-no-repeat bg-white bg-cover text-center mx-0 my-2 md:text-start md:justify-between"
    >
      <section className="flex flex-col min-w-screen w-full md:w-1/2">
        <section className="flex flex-row justify-center mx-20 md:justify-start">
          <section className="font-bold text-2xl text-center md:text-left md:text-3xl mt-8 md:mt-16">
            <h2 className={`${cairo.className}`}>WHO WE ARE</h2>
          </section>
        </section>

        <section className="flex flex-row justify-center md:justify-start md:mx-20">
          <h1
            className={`font-bold text-2xl leading-relaxed md:text-6xl mt-8 md:mt-16 ${cairo.className}`}
          >
            OUR FOCUS IS BRINGING <br />
            POWER TO THE PUBLIC
          </h1>
        </section>

        <section className="flex flex-row flex-1 my-auto justify-center md:justify-start md:mx-20">
          <section
            className={`${robotoSlab.className} text-sm my-auto px-2  mt-10 md:text-xl md:tracking-wider md:min-w-fit  min-w-screen leading-10`}
          >
            <h3 className={`max-w-xl md:min-w-screen`}>
              PowerLines is a non-governmental{' '}
              <br className="block md:hidden" /> organization that is passionate
              about <br className="block md:hidden" /> restructuring the{' '}
              <br className="hidden md:block" />
              energy system. We seek to <br className="block md:hidden" />{' '}
              create a world in which clean, affordable, and{' '}
              <br className="block md:hidden" /> reliable energy{' '}
              <br className="hidden md:block" />
              systems contribute to safe, <br className="block md:hidden" />{' '}
              healthy, and vibrant communities.
            </h3>
          </section>
        </section>

        <section
          className={`flex flex-row justify-start ${cairo.className} mx-auto my-10 md:mt-10 md:mx-20 md:mb-20 md:my-0`}
        >
          <button className="bg-main-one rounded-full px-20 py-2 font-bold ">
            <p className="flex flex-row">ABOUT US</p>
          </button>
        </section>
      </section>
      <section className="w-4/5 relative hidden md:block ">
        <Image
          src="/who-we-are-img.svg"
          alt="who we are image"
          fill
          className="absolute"
        />
      </section>
    </section>
  )
})

WhoWeAre.displayName = 'WhoWeAre'

export default WhoWeAre
