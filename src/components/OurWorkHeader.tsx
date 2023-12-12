import React from 'react'
import Image from 'next/image'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function OurWorkHeader() {
  return (
    <section className='w-screen'>
      <section className="bg-[url('/PageHeroBG.svg')]">
        <h1 className={`font-bold text-2xl md:text-3xl mt-8 md:mt-16 ${josefinSans.className}`}>OUR WORK</h1>
      </section>
    </section>
  )
}

export default OurWorkHeader