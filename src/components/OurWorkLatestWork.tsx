import React from 'react'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function OurWorkLatestWork() {
  return (
    <section className='flex flex-col'>
      <section className='pt-16 pb-10'>
        <h1 className={`${josefinSans.className} text-darker-yellow text-center text-2xl md:text-3xl font-bold`}>OUR LATEST WORK</h1>
      </section>
      <section>

      </section>
    </section>
  )
}

export default OurWorkLatestWork