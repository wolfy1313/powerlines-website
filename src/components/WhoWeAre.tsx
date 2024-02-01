import React from 'react'
import { Cairo, Roboto_Slab } from 'next/font/google'

const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

const WhoWeAre = React.forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="min-w-screen max-w-screen bg-no-repeat bg-[url('/WhoWeAreBG.svg')] bg-cover"
    >
      <section className="flex flex-row justify-start mx-20">
        <section className="font-bold text-2xl md:text-3xl mt-8 md:mt-16">
          <h2 className={`${cairo.className}`}>WHO WE ARE</h2>
        </section>
      </section>

      <section className="flex flex-row justify-start mx-20">
        <h1
          className={`font-bold text-4xl leading-relaxed md:text-6xl mt-8 md:mt-16 ${cairo.className}`}
        >
          OUR FOCUS IS BRINGING <br />
          <span className="text-main-one">POWER</span> TO THE PUBLIC
        </h1>
      </section>

      <section className="flex flex-row flex-1 my-auto justify-start mx-20">
        <section
          className={`${robotoSlab.className} text-sm my-auto px-2  mt-10 md:text-xl md:tracking-wider md:min-w-fit  min-w-screen leading-10`}
        >
          <h3 className={`max-w-xl md:min-w-screen`}>
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

      <section
        className={`flex flex-row justify-start ${cairo.className} mt-10 mx-20 mb-20 `}
      >
        <button className="bg-main-one rounded-full px-20 py-2 font-bold">
          ABOUT US
        </button>
      </section>
    </section>
  )
})

WhoWeAre.displayName = 'WhoWeAre'

export default WhoWeAre
