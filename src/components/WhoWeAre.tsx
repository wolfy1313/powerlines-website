import React from 'react'
import Image from 'next/image'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function WhoWeAre() {
  return (
    <section className="min-w-screen max-w-screen">
      <section className="flex flex-row justify-center">
        <section className='flex flex-row font-bold text-lg md:text-5xl mt-8 md:mt-16'>
          <h2 className={`flex flex-row ${josefinSans.className}`}>WHO WE ARE</h2>
        </section>
      </section>

      <section className='flex flex-row justify-center font-bold text-2xl md:text-5xl mt-8 md:mt-16'>
        <h1 className={`flex flex-col whitespace-pre-line ${josefinSans.className}`}>
          OUR FOCUS IS BRINGING

          <span className='text-main-yellow px-3'>POWER</span>TO THE PUBLIC</h1>
      </section>






    </section>
  )
}

export default WhoWeAre