import React from 'react'
import Image from 'next/image'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function WhoWeAre() {
  return (
    <section className="min-w-screen max-w-screen">
      <section className="flex flex-row justify-center">
        <section className='flex flex-row font-bold text-2xl md:text-3xl mt-8 md:mt-16'>
          <h2 className={`flex flex-row ${josefinSans.className}`}>WHO WE ARE</h2>
        </section>
      </section>

      <section className='flex flex-row justify-center'>
        <h1 className={`font-bold text-5xl ml-auto mr-auto md:text-6xl mt-8 md:mt-16  ${josefinSans.className}`}>
          OUR FOCUS IS BRINGING <br />
          <span className='text-main-yellow'>POWER </span>TO THE PUBLIC
        </h1>
      </section>

      <section className='flex flex-row justify-center'>
        <p className={`text-black-400`}>PowerLines is a non-governmental organization that is passionate about restructuring the energy system. We seek to create a world in which clean, affordable, and reliable energy systems contribute to safe, healthy, and vibrant communities.</p>
      </section>






    </section>
  )
}

export default WhoWeAre