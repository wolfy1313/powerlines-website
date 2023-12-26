import React from 'react'
import Image from 'next/image'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function OurWorkHeader() {
  return (
    <section className='min-w-screen max-w-screen'>
      <section >
        <h1 className={`bg-no-repeat bg-[url('/PageHeroBG.svg')] bg-cover font-bold text-center p-16 text-2xl md:text-3xl ${josefinSans.className}`}>OUR WORK</h1>
      </section>
    </section>
  )
}

export default OurWorkHeader