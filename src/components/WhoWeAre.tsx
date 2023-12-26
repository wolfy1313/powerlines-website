import React from 'react'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

const WhoWeAre = React.forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="min-w-screen max-w-screen bg-no-repeat bg-[url('/WhoWeAreBG.svg')] bg-cover text-center"
    >
      <section className="flex flex-row justify-center">
        <section className="font-bold text-2xl md:text-3xl mt-8 md:mt-16">
          <h2 className={`${josefinSans.className}`}>WHO WE ARE</h2>
        </section>
      </section>

      <section className="flex flex-row justify-center">
        <h1
          className={`text-center font-bold text-4xl leading-relaxed ml-auto mr-auto md:text-6xl mt-8 md:mt-16 ${josefinSans.className}`}
        >
          OUR FOCUS IS BRINGING <br />
          <span className="text-main-yellow">POWER</span> TO THE PUBLIC
        </h1>
      </section>

      <section className="flex flex-row flex-1 my-auto justify-center">
        <section
          className={`${playfairDisplay.className} text-sm my-auto px-2  mt-10 md:text-xl md:tracking-wider md:min-w-fit  min-w-screen leading-10`}
        >
          <h3 className={`max-w-screen md:min-w-screen text-center`}>
            PowerLines is a non-governmental <br className="block md:hidden" />{' '}
            organization that is passionate about{' '}
            <br className="block md:hidden" /> restructuring the{' '}
            <br className="hidden md:block" />
            energy system. We seek to <br className="block md:hidden" /> create
            a world in which clean, affordable, and{' '}
            <br className="block md:hidden" /> reliable energy{' '}
            <br className="hidden md:block" />
            systems contribute to safe, <br className="block md:hidden" />{' '}
            healthy, and vibrant communities.
          </h3>
        </section>
      </section>

      <section className={`text-center ${josefinSans.className} mt-10 mb-20 `}>
        <button className="bg-main-yellow rounded-full my-auto mx-auto px-14 py-2 font-bold">
          ABOUT US
        </button>
      </section>
    </section>
  )
})

WhoWeAre.displayName = 'WhoWeAre'

export default WhoWeAre
