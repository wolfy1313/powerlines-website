import React from 'react'
import Image from 'next/image'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function OurWorkHeader() {
  return (
    <section className='flex flex-col min-w-screen max-w-screen'>
      <section className="bg-contain bg-no-repeat bg-[url('/PageHeroBG.svg')] md:bg-cover">
        <h1 className={`font-bold text-center p-16 text-3xl md:text-5xl ${josefinSans.className}`}>OUR WORK</h1>
      </section>
    </section>
  )
}

export default OurWorkHeader